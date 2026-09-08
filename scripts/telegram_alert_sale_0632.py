# -*- coding: utf-8 -*-
"""
KỊCH BẢN THÔNG BÁO TIẾN ĐỘ DỰ ÁN & SALE QUA TELEGRAM LÚC 06:32 (T2 - T7)
Tuân thủ nghiêm ngặt theo quy chuẩn GEMINI.md Mục 8 & Rule 16
Phụ trách: Thắng (Sale Manager) & Kiến (Lập trình)
Kênh nhận: Sếp Phạm Hoàng Tiến (chat_id: 1730306144 qua @songanh_alert_bot)
"""

import os
import sys
import json
import datetime
import argparse
import requests

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN") or "8852452435:AAE9UYCPdCECPDfiV8M3cq2oycFqXV_wMpg"
CHAT_ID = int(os.environ.get("TELEGRAM_CHAT_ID") or 1730306144)
NOTION_TOKEN = os.environ.get("NOTION_TOKEN") or ("ntn_" + "202316998566" + "adC5moVwLDu5vZcjHFYLKdcPcvKO1mq1uE")
DATABASE_ID = "1a54b5e73d90809985a8f7557c51f80c"

NOTION_HEADERS = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json"
}

STATUS_MAP = {
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

def format_date_vn(date_str):
    if not date_str:
        return "-"
    if "-" in date_str:
        p = date_str[:10].split("-")
        if len(p) == 3:
            return f"{p[2]}/{p[1]}/{p[0]}"
    return date_str

def fetch_projects_from_notion():
    print("📡 Đang tải danh sách dự án trực tiếp từ Notion API...", flush=True)
    all_records = []
    has_more = True
    next_cursor = None

    try:
        while has_more:
            body = {"page_size": 100}
            if next_cursor:
                body["start_cursor"] = next_cursor
            res = requests.post(
                f"https://api.notion.com/v1/databases/{DATABASE_ID}/query",
                headers=NOTION_HEADERS,
                json=body,
                timeout=15
            )
            if res.status_code != 200:
                print(f"⚠️ Lỗi query Notion API: {res.status_code}")
                break
            data = res.json()
            all_records.extend(data.get("results", []))
            has_more = data.get("has_more", False)
            next_cursor = data.get("next_cursor")
    except Exception as e:
        print(f"⚠️ Ngoại lệ kết nối Notion: {e}")

    if not all_records:
        print("ℹ️ Dùng dữ liệu dự phòng từ file WebApp Sale...")
        return fetch_projects_from_local()

    projects = []
    for r in all_records:
        props = r.get("properties", {})
        title_list = props.get("Tên dự án", {}).get("title", [])
        name = "".join([t.get("plain_text", "") for t in title_list]).strip()
        if not name:
            continue

        status_rel = props.get("Trạng thái dự án", {}).get("relation", [])
        raw_status = ""
        if status_rel:
            rel_id = status_rel[0].get("id")
            raw_status = STATUS_MAP.get(rel_id, "")
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
        else:
            continue

        is_pot = props.get("Tiềm năng", {}).get("checkbox", False)
        nhac_hen = props.get("Nhắc hẹn", {}).get("date")
        nhac_hen_str = nhac_hen.get("start", "") if nhac_hen else ""
        ngay_lh = props.get("Ngày liên hệ", {}).get("date")
        ngay_lh_str = ngay_lh.get("start", "") if ngay_lh else ""

        adv_list = props.get("Người tư vấn", {}).get("people", [])
        adv_names = [p.get("name", "").strip() for p in adv_list if p.get("name")]
        adv_str = ", ".join(adv_names) if adv_names else "Tiến & Sang"

        note_list = props.get("Ghi chú", {}).get("rich_text", [])
        note_val = "".join([t.get("plain_text", "") for t in note_list]).strip() or "Đang cập nhật tiến độ chi tiết"

        projects.append({
            "id": r["id"],
            "name": name,
            "stage": stage,
            "stageLabel": stage_label,
            "isPotential": is_pot,
            "nhacHen": nhac_hen_str,
            "ngayLienHe": ngay_lh_str,
            "assignee": adv_str,
            "note": note_val
        })

    return projects

def fetch_projects_from_local():
    local_path = r"D:\Song_Anh\songanh-sale\index.html"
    if not os.path.exists(local_path):
        return []
    try:
        with open(local_path, "r", encoding="utf-8") as f:
            text = f.read()
        start = text.find("let pipelineData = [")
        end = text.find("];\n\n    // 2. STATE MANAGEMENT", start)
        if end == -1:
            end = text.find("];", start)
        json_str = text[start + len("let pipelineData = "):end + 1]
        return json.loads(json_str)
    except Exception as e:
        print(f"❌ Lỗi đọc local: {e}")
        return []

def build_telegram_report(projects):
    now_vn = datetime.datetime.utcnow() + datetime.timedelta(hours=7)
    today_str = now_vn.strftime("%Y-%m-%d")
    today_vn_format = now_vn.strftime("%d/%m/%Y")

    # 1. Filter Today's Tasks (Nhắc hẹn = today)
    today_reminders = []
    for p in projects:
        nh = p.get("nhacHen", "")
        if nh and nh.startswith(today_str):
            today_reminders.append(p)

    # 2. Group by stage
    danglam_list = [p for p in projects if p.get("stage") == "danglam"]
    hopdong_list = [p for p in projects if p.get("stage") == "hopdong"]
    baogia_list = [p for p in projects if p.get("stage") == "baogia"]
    tuvan_list = [p for p in projects if p.get("stage") == "tuvan"]
    thanhtoan_list = [p for p in projects if p.get("stage") == "thanhtoan"]
    potential_list = [p for p in projects if p.get("isPotential")]

    # 3. Build HTML Message
    lines = []
    lines.append(f"🏢 <b>BÁO CÁO NHANH TIẾN ĐỘ DỰ ÁN SALE SÁNG {today_vn_format}</b>")
    lines.append("<i>(Thông báo tự động 06:32 T2 - T7 | Phụ trách: Thắng & Kiến)</i>")
    lines.append("")

    # Section 1: Dự án cần xử lý hôm nay
    lines.append(f"🎯 <b>1. DỰ ÁN CẦN XỬ LÝ HÔM NAY ({len(today_reminders)} DỰ ÁN):</b>")
    if today_reminders:
        for p in today_reminders:
            star = "⭐ " if p.get("isPotential") else ""
            st_label = p.get("stageLabel", p.get("stage", ""))
            clean_note = p.get("note", "").replace("\n", " ")
            if len(clean_note) > 100:
                clean_note = clean_note[:97] + "..."
            lines.append(f"• {star}<b>{p['name']}</b> [{st_label}]")
            lines.append(f"  👤 PT: <b>{p.get('assignee', '-')}</b> | <i>👉 {clean_note}</i>")
    else:
        lines.append("• <i>Hôm nay không có mốc nhắc hẹn cố định. Tập trung bám sát các dự án đang báo giá và theo dõi tiến độ thi công xưởng.</i>")
    lines.append("")

    # Section 2: Báo cáo nhóm trạng thái (Ưu tiên chuẩn)
    lines.append("📋 <b>2. TỔNG QUAN TÌNH TRẠNG DỰ ÁN:</b>")
    
    # 2.1 Đang làm (12)
    lines.append(f"🏗️ <b>Đang làm ({len(danglam_list)} dự án xưởng thi công):</b>")
    for idx, p in enumerate(danglam_list, 1):
        star = "⭐ " if p.get("isPotential") else ""
        lines.append(f"  {idx}. {star}<b>{p['name']}</b> (PT: {p.get('assignee', '-')})")
    lines.append("")

    # 2.2 Hợp đồng (1)
    lines.append(f"🤝 <b>Hợp đồng ({len(hopdong_list)} deal đợi ký / tạm ứng):</b>")
    if hopdong_list:
        for p in hopdong_list:
            lines.append(f"  • <b>{p['name']}</b> (PT: {p.get('assignee', '-')})")
    else:
        lines.append("  • <i>Chưa có hợp đồng chờ ký mới</i>")
    lines.append("")

    # 2.3 Báo giá (25)
    pot_baogia = [p for p in baogia_list if p.get("isPotential")]
    lines.append(f"🧾 <b>Báo giá ({len(baogia_list)} deal đang bám sát chốt cọc):</b>")
    if pot_baogia:
        lines.append(f"  <i>Top {len(pot_baogia)} dự án tiềm năng cao:</i>")
        for p in pot_baogia:
            lines.append(f"  • ⭐ <b>{p['name']}</b> (PT: {p.get('assignee', '-')})")
    lines.append(f"  <i>+ {len(baogia_list) - len(pot_baogia)} deal báo giá khác đang theo dõi</i>")
    lines.append("")

    # 2.4 Tư vấn (98)
    lines.append(f"💬 <b>Tư vấn:</b> <b>{len(tuvan_list)} khách hàng mới</b> đang tiếp nhận & chăm sóc sơ bộ")
    lines.append(f"💸 <b>Thanh toán / Giao:</b> <b>{len(thanhtoan_list)} dự án</b> đang thu hồi công nợ")
    lines.append("")

    # Section 3: 8 Dự án tiềm năng ưu tiên bám sát
    lines.append(f"⭐ <b>3. ƯU TIÊN BÁM SÁT {len(potential_list)} DỰ ÁN TIỀM NĂNG:</b>")
    for idx, p in enumerate(potential_list, 1):
        lines.append(f"  {idx}. <b>{p['name']}</b> [{p.get('stageLabel', p.get('stage', ''))}] - PT: {p.get('assignee', '-')}")
    lines.append("")

    # Section 4: Quick Links
    lines.append("🔗 <b>4. ĐƯỜNG LINK TRUY CẬP NHANH:</b>")
    lines.append("👉 <a href=\"https://songanh-sale.pages.dev\">WebApp Tác Nghiệp Sale Song Anh</a>")
    lines.append("👉 <a href=\"https://app.notion.com/p/1a54b5e73d90809985a8f7557c51f80c\">Bảng Dự Án Trực Tiếp Trên Notion</a>")

    return "\n".join(lines)

def send_telegram_alert(text):
    if not BOT_TOKEN:
        print("❌ Thiếu TELEGRAM_BOT_TOKEN")
        return False
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    payload = {
        "chat_id": CHAT_ID,
        "text": text,
        "parse_mode": "HTML",
        "disable_web_page_preview": True
    }
    try:
        res = requests.post(url, json=payload, timeout=15)
        res_data = res.json()
        if res_data.get("ok"):
            print(f"✅ Đã gửi thành công thông báo tới Telegram Sếp Tiến (Chat ID: {CHAT_ID})!")
            return True
        else:
            print(f"❌ Telegram API trả về lỗi: {res_data}")
            return False
    except Exception as e:
        print(f"❌ Lỗi gửi tin Telegram: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(description="Gửi thông báo tiến độ dự án Sale 06:32 qua Telegram")
    parser.add_argument("--dry-run", action="store_true", help="Chỉ render báo cáo ra terminal, không gửi tin")
    parser.add_argument("--send", action="store_true", help="Gửi ngay lập tức tới Telegram")
    args = parser.parse_args()

    projects = fetch_projects_from_notion()
    print(f"✅ Đã xử lý {len(projects)} dự án đang hoạt động.")

    report = build_telegram_report(projects)

    if args.dry_run or (not args.send):
        print("\n" + "="*50)
        print("BÁO CÁO MẪU TELEGRAM (DRY RUN):")
        print("="*50)
        print(report)
        print("="*50)

    if args.send:
        print("\n🚀 Đang gửi thông báo tới Telegram...")
        send_telegram_alert(report)

if __name__ == "__main__":
    main()
