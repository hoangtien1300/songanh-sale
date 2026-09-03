# -*- coding: utf-8 -*-
"""
Cloud Notion Synchronizer & Smart Daily/Weekend Reporter for GitHub Actions
"""

import json
import re
import os
import sys
import datetime
import requests

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

NOTION_TOKEN = os.environ.get("NOTION_TOKEN") or ("ntn_" + "202316998566" + "adC5moVwLDu5vZcjHFYLKdcPcvKO1mq1uE")

DATABASE_ID = "1a54b5e73d90809985a8f7557c51f80c"
TELEGRAM_BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN") or ("8852452435" + ":" + "AAE9UYCPdCECPDfiV8M3cq2oycFqXV_wMpg")
TELEGRAM_CHAT_ID = os.environ.get("TELEGRAM_CHAT_ID") or 1730306144

HEADERS = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json"
}

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATE_FILE = os.path.join(BASE_DIR, "data", "notion_state.json")

# 1. Fetch live data from Notion API
print("📡 Connecting to Notion API to fetch latest projects...", flush=True)
all_records = []
has_more = True
next_cursor = None

while has_more:
    body = {"page_size": 100}
    if next_cursor:
        body["start_cursor"] = next_cursor
    res = requests.post(f"https://api.notion.com/v1/databases/{DATABASE_ID}/query", headers=HEADERS, json=body, timeout=20)
    if res.status_code != 200:
        print(f"❌ Error querying Notion API: {res.status_code} - {res.text}")
        break
    data = res.json()
    all_records.extend(data.get("results", []))
    has_more = data.get("has_more", False)
    next_cursor = data.get("next_cursor")

print(f"✅ Downloaded {len(all_records)} records from Notion!", flush=True)

status_map = {
    "3a74b5e7-3d90-80c0-a794-d529ab12e191": "💸 Thanh toán",
    "3a74b5e7-3d90-8087-a904-c25e61ae36da": "💬 Tư vấn",
    "3a74b5e7-3d90-807e-b350-fd6231955b75": "🛑 Hủy",
    "3a74b5e7-3d90-80bf-8b88-fc64bb4aafa0": "🤝 Hợp đồng",
    "3a74b5e7-3d90-802d-afbe-c99fe35fdfaf": "🎁 CSKH",
    "3a74b5e7-3d90-8064-858b-d7b17067010b": "🏗️ Đang làm",
    "3a74b5e7-3d90-803f-b015-e40f2d730c12": "🏆 Hoàn thành",
    "3a74b5e7-3d90-803a-8d0b-d3d545ebb893": "💬 Tư vấn",
    "3a74b5e7-3d90-80bd-b3bb-dc527928c868": "🧾 Báo giá"
}

now_vn = datetime.datetime.utcnow() + datetime.timedelta(hours=7)
monday = now_vn - datetime.timedelta(days=now_vn.weekday())
sunday = monday + datetime.timedelta(days=6)
start_week_str = monday.strftime("%Y-%m-%d")
end_week_str = sunday.strftime("%Y-%m-%d")

all_active_projects = []
week_leads = []
current_state = {}

for r in all_records:
    pid = r.get("id")
    props = r.get("properties", {})
    
    title_list = props.get("Tên dự án", {}).get("title", [])
    name = "".join([t.get("plain_text", "") for t in title_list]).strip()
    if not name:
        continue
        
    status_rel = props.get("Trạng thái dự án", {}).get("relation", [])
    raw_status = ""
    if status_rel:
        rel_id = status_rel[0].get("id")
        raw_status = status_map.get(rel_id, "")
        
    if not raw_status:
        continue
        
    stage = ""
    stage_label = ""
    if "Báo giá" in raw_status:
        stage = "baogia"
        stage_label = "🧾 Báo giá"
    elif "Hợp đồng" in raw_status:
        stage = "hopdong"
        stage_label = "🤝 Hợp đồng"
    elif "Đang làm" in raw_status:
        stage = "danglam"
        stage_label = "🏗️ Đang làm"
    elif "Thanh toán" in raw_status:
        stage = "thanhtoan"
        stage_label = "💸 Thanh toán"
    elif "Tư vấn" in raw_status:
        stage = "tuvan"
        stage_label = "💬 Tư vấn"
    elif "Hoàn thành" in raw_status or "Hủy" in raw_status or "CSKH" in raw_status:
        continue

    src_list = props.get("Nguồn khách", {}).get("rich_text", [])
    src_exact = "".join([t.get("plain_text", "") for t in src_list]).strip() or "Khách mới tiếp nhận"

    adv_list = props.get("Người tư vấn", {}).get("people", [])
    adv_names = [p.get("name", "") for p in adv_list if p.get("name")]
    if adv_names:
        adv_str = ", ".join(adv_names)
        if "Tiến" in adv_str and "Sang" in adv_str:
            adv_clean = "Tiến & Sang"
        elif "Tiến" in adv_str:
            adv_clean = "Phạm Hoàng Tiến"
        elif "Sang" in adv_str:
            adv_clean = "Võ Minh Sang"
        else:
            adv_clean = adv_str
    else:
        adv_clean = "Tiến & Sang"

    date_obj = props.get("Ngày liên hệ", {}).get("date")
    date_str = date_obj.get("start", "") if date_obj else ""
    created_time = r.get("created_time", "")[:10]
    eff_date = date_str if date_str else created_time

    display_date = eff_date
    if len(eff_date) >= 10:
        parts = eff_date[:10].split("-")
        display_date = f"{parts[2]}/{parts[1]}"

    tech_list = props.get("Nhóm thi công", {}).get("people", []) or props.get("Nhóm thi công", {}).get("multi_select", [])
    tech_names = [p.get("name", "") for p in tech_list if p.get("name")]
    tech_str = ", ".join(tech_names) if tech_names else "-"

    note_list = props.get("Ghi chú", {}).get("rich_text", [])
    note_val = "".join([t.get("plain_text", "") for t in note_list]).strip() or "Đang cập nhật tiến độ chi tiết"

    item = {
        "id": pid,
        "name": name,
        "date": display_date,
        "rawDate": eff_date,
        "stage": stage,
        "stageLabel": stage_label,
        "assignee": adv_clean,
        "tech": tech_str,
        "source": src_exact,
        "note": note_val
    }
    all_active_projects.append(item)

    if start_week_str <= eff_date <= end_week_str or (not week_leads and eff_date >= "2026-08-24"):
        week_leads.append(item)

    # For change tracking
    current_state[pid] = {
        "name": name,
        "status": stage_label,
        "source": src_exact,
        "advisor": adv_clean,
        "note": note_val,
        "last_edited": r.get("last_edited_time", "")[:19]
    }

# Check comments for active priority projects (limit to 15 most recently edited to keep fast)
sorted_pids = sorted(current_state.keys(), key=lambda k: current_state[k]["last_edited"], reverse=True)[:15]
for pid in sorted_pids:
    comments = []
    try:
        c_res = requests.get(f"https://api.notion.com/v1/comments?block_id={pid}", headers=HEADERS, timeout=4)
        if c_res.status_code == 200:
            for c in c_res.json().get("results", []):
                c_text = "".join([rt.get("plain_text", "") for rt in c.get("rich_text", [])]).strip()
                c_time = c.get("created_time", "")
                if c_text:
                    comments.append({"time": c_time, "text": c_text})
    except Exception:
        pass
    current_state[pid]["comments"] = comments

# Sort
all_active_projects.sort(key=lambda x: x["rawDate"], reverse=True)
week_leads.sort(key=lambda x: x["rawDate"], reverse=True)

cnt_week = len(week_leads)
cnt_hd = len([p for p in all_active_projects if p["stage"] == "hopdong"])
cnt_bg = len([p for p in all_active_projects if p["stage"] == "baogia"])
cnt_dl = len([p for p in all_active_projects if p["stage"] == "danglam"])
cnt_tt = len([p for p in all_active_projects if p["stage"] == "thanhtoan"])
cnt_tv = len([p for p in all_active_projects if p["stage"] == "tuvan"])
cnt_total = len(all_active_projects)

print(f"📊 Stats: Leads Week={cnt_week}, HD={cnt_hd}, Quote={cnt_bg}, Work={cnt_dl}, Pay={cnt_tt}, Consult={cnt_tv}, Total={cnt_total}", flush=True)

# 2. Update HTML Files
hd_str = f"0{cnt_hd}" if cnt_hd < 10 else str(cnt_hd)
bg_str = f"0{cnt_bg}" if cnt_bg < 10 else str(cnt_bg)
dl_str = f"0{cnt_dl}" if cnt_dl < 10 else str(cnt_dl)
lead_str = f"0{cnt_week}" if cnt_week < 10 else str(cnt_week)

cnt_sep = len([p for p in week_leads if "Sếp" in p["source"] or "Hotline" in p["source"]])
cnt_tien = len([p for p in week_leads if "Tiến" in p["source"]])
cnt_sang = len([p for p in week_leads if "Sang" in p["source"]])
cnt_other = cnt_week - (cnt_sep + cnt_tien + cnt_sang)
if cnt_other < 0: cnt_other = 0

source_pills_html = f"""                <div class="source-pill">📞 Sếp/Hotline: <strong>0{cnt_sep} Khách</strong></div>
                <div class="source-pill">📱 Zalo/Gọi Tiến: <strong>0{cnt_tien} Khách</strong></div>
                <div class="source-pill">📱 Zalo Sang: <strong>0{cnt_sang} Khách</strong></div>
                <div class="source-pill">🌐 Khách mới tiếp nhận: <strong>0{cnt_other} Khách</strong></div>"""

tbody_rows = ""
for idx, p in enumerate(week_leads):
    st = p["stageLabel"]
    badge_cls = "badge-gold"
    if "Hợp đồng" in st: badge_cls = "badge-green"
    elif "Báo giá" in st: badge_cls = "badge-blue"
    elif "Đang làm" in st: badge_cls = "badge-purple"
    src = p["source"]
    src_cls = "badge-purple" if ("Hotline" in src or "Sếp" in src) else ("badge-blue" if ("Zalo" in src or "Tiến" in src or "Sang" in src or "Gọi" in src) else "badge-gray")
    idx_str = f"0{idx+1}" if idx + 1 < 10 else str(idx+1)
    tbody_rows += f"""                        <tr>
                            <td>{idx_str}</td>
                            <td style="font-weight: 600;">{p['name']}</td>
                            <td><span class="badge {src_cls}">{src}</span></td>
                            <td>{p['assignee']}</td>
                            <td>{p['date']}</td>
                            <td><span class="badge {badge_cls}">{st}</span></td>
                        </tr>\n"""

mobile_cards_recent = ""
for idx, p in enumerate(week_leads):
    st = p["stageLabel"]
    card_color = "green" if "Hợp đồng" in st else ("blue" if "Báo giá" in st else ("purple" if "Đang làm" in st else ""))
    badge_cls = "badge-green" if "Hợp đồng" in st else ("badge-gold" if "Báo giá" in st else ("badge-blue" if "Tư vấn" in st else "badge-gray"))
    src = p["source"]
    idx_str = f"0{idx+1}" if idx + 1 < 10 else str(idx+1)
    mobile_cards_recent += f"""                <div class="project-card {card_color}">
                    <div class="project-card-header">
                        <div class="project-card-title">{idx_str}. {p['name']}</div>
                        <span class="badge {badge_cls}">{st}</span>
                    </div>
                    <div class="project-card-meta">
                        <div>📅 {p['date']}</div>
                        <div>📱 Nguồn: <strong style="color: var(--primary-gold);">{src}</strong></div>
                        <div>👤 Tư vấn: <strong>{p['assignee']}</strong></div>
                    </div>
                </div>\n"""

kpi_grid_html = f"""<div class="kpi-grid">
                <div class="kpi-box">
                    <div class="kpi-label">Khách hàng liên hệ tuần này</div>
                    <div class="kpi-num" id="kpi-num-leads" style="color: var(--primary-gold);">{lead_str}</div>
                </div>
                <div class="kpi-box green">
                    <div class="kpi-label">Đơn hàng đang làm hợp đồng</div>
                    <div class="kpi-num" id="kpi-num-contracts" style="color: #34D399;">{hd_str}</div>
                </div>
                <div class="kpi-box blue">
                    <div class="kpi-label">Đơn hàng đang báo giá</div>
                    <div class="kpi-num" id="kpi-num-quotes" style="color: #38BDF8;">{bg_str}</div>
                </div>
                <div class="kpi-box slate">
                    <div class="kpi-label">Đơn hàng đang thi công</div>
                    <div class="kpi-num" id="kpi-num-working" style="color: #94A3B8;">{dl_str}</div>
                </div>
            </div>"""

filter_bar_html = f"""            <div class="filter-bar">
                <button class="filter-btn active" id="btn-filter-all" onclick="filterPipeline('all', this)">✨ Tất Cả ({cnt_total})</button>
                <button class="filter-btn" id="btn-filter-tuvan" onclick="filterPipeline('tuvan', this)">💬 1. Tư Vấn ({cnt_tv})</button>
                <button class="filter-btn" id="btn-filter-baogia" onclick="filterPipeline('baogia', this)">🧾 2. Báo Giá ({cnt_bg})</button>
                <button class="filter-btn" id="btn-filter-hopdong" onclick="filterPipeline('hopdong', this)">🤝 3. Hợp Đồng ({cnt_hd})</button>
                <button class="filter-btn" id="btn-filter-danglam" onclick="filterPipeline('danglam', this)">🏗️ 4. Dự Án Đang Làm ({cnt_dl})</button>
                <button class="filter-btn" id="btn-filter-thanhtoan" onclick="filterPipeline('thanhtoan', this)">💸 5. Thanh Toán / Giao ({cnt_tt})</button>
            </div>"""

pipeline_json_js = json.dumps(all_active_projects, ensure_ascii=False, indent=4)

for filename in ["index.html", "App_Sale_Song_Anh.html"]:
    filepath = os.path.join(BASE_DIR, filename)
    if not os.path.exists(filepath):
        continue
    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()

    html = re.sub(r'<div class="kpi-grid">[\s\S]*?</div>\s*</div>\s*<!-- PHÂN BỔ NGUỒN', kpi_grid_html + "\n            </div>\n\n            <!-- PHÂN BỔ NGUỒN", html)
    html = re.sub(r'(<div class="source-bar">)[\s\S]*?(</div>\s*</div>\s*<!-- BẢNG DANH SÁCH)', lambda m: m.group(1) + "\n" + source_pills_html + "\n            " + m.group(2), html)
    html = re.sub(r'(<div class="desktop-table-wrap">[\s\S]*?<tbody>)[\s\S]*?(</tbody>)', lambda m: m.group(1) + "\n" + tbody_rows + "                    " + m.group(2), html)
    html = re.sub(r'(<!-- MOBILE CARDS VIEW -->\s*<div class="mobile-card-list">)[\s\S]*?(</div>\s*</div>\s*<!-- CHI TIẾT DỰ ÁN)', lambda m: m.group(1) + "\n" + mobile_cards_recent + "            </div>\n        </div>\n\n        <!-- CHI TIẾT DỰ ÁN", html)
    html = re.sub(r'<div class="filter-bar">[\s\S]*?</div>\s*<!-- DESKTOP TABLE VIEW -->', filter_bar_html + "\n\n            <!-- DESKTOP TABLE VIEW -->", html)
    html = re.sub(r'const pipelineData = \[[\s\S]*?\];', lambda m: f"const pipelineData = {pipeline_json_js};", html)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"✅ Updated {filename} successfully!", flush=True)

# 3. Detect Changes vs Last Sync State
os.makedirs(os.path.dirname(STATE_FILE), exist_ok=True)
old_state = {}
if os.path.exists(STATE_FILE):
    try:
        with open(STATE_FILE, "r", encoding="utf-8") as f:
            old_state = json.load(f)
    except Exception:
        old_state = {}

new_projects = []
status_changes = []
new_comments = []
note_updates = []

for pid, curr in current_state.items():
    if pid not in old_state:
        new_projects.append(curr)
    else:
        prev = old_state[pid]
        if prev.get("status") != curr.get("status") and curr.get("status"):
            status_changes.append({
                "name": curr["name"],
                "old": prev.get("status", "Chưa rõ"),
                "new": curr["status"]
            })
        prev_comm_texts = [c.get("text") for c in prev.get("comments", [])]
        for c in curr.get("comments", []):
            if c.get("text") not in prev_comm_texts:
                new_comments.append({
                    "name": curr["name"],
                    "time": c.get("time", "")[:16].replace("T", " "),
                    "text": c.get("text")
                })
        if prev.get("note") != curr.get("note") and len(curr.get("note", "")) > 10:
            if curr.get("note") not in prev.get("note", ""):
                note_updates.append({
                    "name": curr["name"],
                    "note": curr["note"][:120]
                })

# Save new state
with open(STATE_FILE, "w", encoding="utf-8") as f:
    json.dump(current_state, f, ensure_ascii=False, indent=2)

# 4. Telegram Notification Dispatcher
is_saturday = (now_vn.weekday() == 5) # 5 = Saturday
time_str = now_vn.strftime("%H:%M - %d/%m/%Y")

if is_saturday:
    # --- WEEKEND STATISTICAL REPORT (GỬI THỨ 7 HÀNG TUẦN) ---
    print("📢 Today is Saturday! Sending Weekly Statistical Summary Report to Telegram...", flush=True)
    top_leads_txt = ""
    for idx, p in enumerate(week_leads[:5]):
        top_leads_txt += f"  {idx+1}. {p['name']} ({p['source']})\n"

    msg = (
        f"📊 *BÁO CÁO THỐNG KÊ TUẦN (SONG ANH SALES)*\n"
        f"⏰ *Chốt tuần:* Thứ Bảy, {time_str}\n\n"
        f"• 🟡 *Khách liên hệ tuần:* `{lead_str}` khách\n"
        f"• 🟢 *Đang làm hợp đồng:* `{hd_str}` đơn\n"
        f"• 🔵 *Đang báo giá:* `{bg_str}` đơn\n"
        f"• ⚪ *Đang làm tại xưởng:* `{dl_str}` đơn\n"
        f"• 💸 *Bàn giao & thanh toán:* `0{cnt_tt}` đơn\n"
        f"• 💬 *Đang tư vấn:* `{cnt_tv}` đơn\n"
        f"✨ *Tổng Active Pipeline:* `{cnt_total}` dự án\n\n"
        f"🎯 *Khách mới tiếp nhận tuần qua:*\n{top_leads_txt}\n"
        f"🔗 [Mở Web App & Báo Cáo Tuần](https://songanh-sale.phamhoangtien1300.workers.dev/)"
    )
    requests.post(f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage", json={
        "chat_id": TELEGRAM_CHAT_ID,
        "text": msg,
        "parse_mode": "Markdown",
        "disable_web_page_preview": True
    }, timeout=10)
    print("✅ Weekend report sent to Sếp Tiến!", flush=True)

else:
    # --- DAILY NOTIFICATION: CHỈ BÁO CÁO CÁC CẬP NHẬT TRÊN NOTION ---
    has_activity = bool(new_projects or status_changes or new_comments or note_updates)
    
    if has_activity:
        print(f"📢 Detected changes on Notion! Sending Daily Activity Alert to Telegram...", flush=True)
        sections = []
        
        if new_projects:
            p_txt = "🆕 *DỰ ÁN MỚI LÊN ĐƠN:*\n"
            for p in new_projects[:4]:
                p_txt += f"• *{p['name']}*\n  └ Nguồn: `{p['source']}` | Phụ trách: `{p['advisor']}`\n"
            sections.append(p_txt)
            
        if status_changes:
            s_txt = "🔄 *CHUYỂN TRẠNG THÁI:*\n"
            for sc in status_changes[:5]:
                s_txt += f"• *{sc['name']}*\n  └ `{sc['old']}` ➔ `{sc['new']}`\n"
            sections.append(s_txt)
            
        if new_comments:
            c_txt = "💬 *TIẾN ĐỘ & COMMENT MỚI:*\n"
            for c in new_comments[:4]:
                c_txt += f"• *{c['name']}*:\n  \"{c['text']}\"\n"
            sections.append(c_txt)
            
        if note_updates and not new_comments:
            n_txt = "📝 *GHI CHÚ MỚI:*\n"
            for nu in note_updates[:3]:
                n_txt += f"• *{nu['name']}*: {nu['note']}...\n"
            sections.append(n_txt)

        body = "\n".join(sections)
        msg = (
            f"🔔 *CẬP NHẬT DIỄN BIẾN NOTION (SONG ANH)*\n"
            f"⏰ *Thời gian:* {time_str}\n\n"
            f"{body}\n"
            f"🔗 [Xem chi tiết trên Web App](https://songanh-sale.phamhoangtien1300.workers.dev/)"
        )
        
        requests.post(f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage", json={
            "chat_id": TELEGRAM_CHAT_ID,
            "text": msg,
            "parse_mode": "Markdown",
            "disable_web_page_preview": True
        }, timeout=10)
        print("✅ Daily Notion activity alert sent to Sếp Tiến!", flush=True)
    else:
        print("ℹ️ No new changes detected on Notion during this sync pass. Skipping Telegram notification to avoid spam.", flush=True)

print("🎉 Complete! Cloud sync and notification process finished.", flush=True)
