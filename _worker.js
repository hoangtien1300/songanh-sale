/**
 * Production Cloudflare Worker for Song Anh Sales System (songanh-sale)
 * Routes:
 * - POST /api/create-lead: Tạo dự án mới trên Notion & gửi Telegram
 * - POST /api/add-comment: Ghi comment tiến độ vào trang Notion & cập nhật trạng thái & gửi Telegram
 * - GET  /api/project-comments?page_id=xxx: Lấy danh sách bình luận Notion
 * - GET  /api/health: Health check
 * - GET  /*: Live proxy static assets trực tiếp từ GitHub repo (luôn đồng bộ tự động)
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. CORS Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset=utf-8',
    };

    // 2. Health check
    if (url.pathname === '/api/health') {
      return new Response(JSON.stringify({
        status: 'ok',
        service: 'songanh-sale',
        version: '3.0.0',
        time: new Date().toISOString()
      }), { headers: corsHeaders });
    }

    const NOTION_TOKEN = env.NOTION_TOKEN;
    const DATABASE_ID = env.DATABASE_ID || '1a54b5e73d90809985a8f7557c51f80c';
    const TELEGRAM_BOT_TOKEN = env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = env.TELEGRAM_CHAT_ID || '1730306144';

    // 2.5. Endpoint: GET /api/projects (Lấy danh sách dự án active từ Notion)
    if (url.pathname === '/api/projects' && request.method === 'GET') {
      try {
        const isForce = url.searchParams.get('force') === '1';

        const statusMap = {
          '3a74b5e7-3d90-80c0-a794-d529ab12e191': '💸 Thanh toán',
          '3a74b5e7-3d90-8087-a904-c25e61ae36da': '💬 Tư vấn',
          '3a74b5e7-3d90-803a-8d0b-d3d545ebb893': '💬 Tư vấn',
          '3a74b5e7-3d90-80bf-8b88-fc64bb4aafa0': '🤝 Hợp đồng',
          '3a74b5e7-3d90-8064-858b-d7b17067010b': '🏗️ Đang làm',
          '3a74b5e7-3d90-80bd-b3bb-dc527928c868': '🧾 Báo giá'
        };

        const activeRelationIds = Object.keys(statusMap);
        const filterObj = {
          or: activeRelationIds.map(rid => ({
            property: 'Trạng thái dự án',
            relation: { contains: rid }
          }))
        };

        const allRecords = [];
        let hasMore = true;
        let nextCursor = null;

        while (hasMore) {
          const bodyPayload = {
            page_size: 100,
            filter: filterObj,
            sorts: [{ timestamp: 'last_edited_time', direction: 'descending' }]
          };
          if (nextCursor) {
            bodyPayload.start_cursor = nextCursor;
          }

          const nRes = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${NOTION_TOKEN}`,
              'Notion-Version': '2022-06-28',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyPayload),
          });

          if (!nRes.ok) {
            const errData = await nRes.json().catch(() => ({}));
            return new Response(JSON.stringify({ success: false, error: 'Lỗi truy vấn Notion API', details: errData }), {
              status: 500,
              headers: corsHeaders,
            });
          }

          const data = await nRes.json();
          allRecords.push(...(data.results || []));
          hasMore = data.has_more || false;
          nextCursor = data.next_cursor;
        }

        const parsedProjects = [];
        for (const r of allRecords) {
          const pid = r.id;
          const props = r.properties || {};

          const titleList = (props['Tên dự án'] && props['Tên dự án'].title) || [];
          const name = titleList.map(t => t.plain_text || '').join('').trim();
          if (!name) continue;

          const statusRel = (props['Trạng thái dự án'] && props['Trạng thái dự án'].relation) || [];
          let rawStatus = '';
          if (statusRel.length > 0) {
            rawStatus = statusMap[statusRel[0].id] || '';
          }
          if (!rawStatus) continue;

          let stage = '';
          let stageLabel = '';
          if (rawStatus.includes('Báo giá')) {
            stage = 'baogia';
            stageLabel = '🧾 Báo giá';
          } else if (rawStatus.includes('Hợp đồng')) {
            stage = 'hopdong';
            stageLabel = '🤝 Hợp đồng';
          } else if (rawStatus.includes('Đang làm')) {
            stage = 'danglam';
            stageLabel = '🏗️ Đang làm';
          } else if (rawStatus.includes('Thanh toán')) {
            stage = 'thanhtoan';
            stageLabel = '💸 Thanh toán';
          } else if (rawStatus.includes('Tư vấn')) {
            stage = 'tuvan';
            stageLabel = '💬 Tư vấn';
          } else {
            continue;
          }

          const srcList = (props['Nguồn khách'] && props['Nguồn khách'].rich_text) || [];
          const srcExact = srcList.map(t => t.plain_text || '').join('').trim() || 'Khách liên hệ';

          const advList = (props['Người tư vấn'] && props['Người tư vấn'].people) || [];
          const advNames = advList.map(p => p.name || '').filter(Boolean);
          let advClean = 'Chưa rõ';
          if (advNames.length > 0) {
            const advStr = advNames.join(', ');
            if (advStr.includes('Tiến') && advStr.includes('Sang')) {
              advClean = 'Tiến & Sang';
            } else if (advStr.includes('Tiến')) {
              advClean = 'Phạm Hoàng Tiến';
            } else if (advStr.includes('Sang')) {
              advClean = 'Võ Minh Sang';
            } else {
              advClean = advStr;
            }
          }

          const nhacHenObj = (props['Nhắc hẹn'] && props['Nhắc hẹn'].date);
          const nhacHenStr = nhacHenObj && nhacHenObj.start ? nhacHenObj.start.slice(0, 10) : '';

          const nlhObj = (props['Ngày liên hệ'] && props['Ngày liên hệ'].date);
          const nlhStr = nlhObj && nlhObj.start ? nlhObj.start.slice(0, 10) : '';
          const createdTime = (r.created_time || '').slice(0, 10);

          const effDate = nhacHenStr || nlhStr || createdTime;
          let displayDate = effDate;
          if (effDate.length >= 10) {
            const parts = effDate.slice(0, 10).split('-');
            displayDate = `${parts[2]}/${parts[1]}`;
          }

          const isPotential = Boolean(props['Tiềm năng'] && props['Tiềm năng'].checkbox);

          const techPeople = (props['Nhóm thi công'] && props['Nhóm thi công'].people) || [];
          const techMulti = (props['Nhóm thi công'] && props['Nhóm thi công'].multi_select) || [];
          const techList = techPeople.length ? techPeople : techMulti;
          const techNames = techList.map(p => p.name || '').filter(Boolean);
          const techStr = techNames.length ? techNames.join(', ') : '-';

          const noteList = (props['Ghi chú'] && props['Ghi chú'].rich_text) || [];
          const noteVal = noteList.map(t => t.plain_text || '').join('').trim() || 'Đang cập nhật tiến độ chi tiết';

          parsedProjects.push({
            id: pid,
            name: name,
            date: displayDate,
            rawDate: effDate,
            nhacHen: nhacHenStr,
            ngayLienHe: nlhStr,
            stage: stage,
            stageLabel: stageLabel,
            assignee: advClean,
            tech: techStr,
            source: srcExact,
            note: noteVal,
            isPotential: isPotential
          });
        }

        const cacheControl = isForce
          ? 'no-cache, no-store, must-revalidate'
          : 'public, max-age=30, s-maxage=60';

        return new Response(JSON.stringify({
          success: true,
          total: parsedProjects.length,
          timestamp: new Date().toISOString(),
          projects: parsedProjects
        }), {
          status: 200,
          headers: {
            ...corsHeaders,
            'Cache-Control': cacheControl,
          }
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: corsHeaders,
        });
      }
    }

    // 3. Endpoint: POST /api/create-lead
    if (url.pathname === '/api/create-lead' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { projectName, category, clientName, phone, source, advisor, note, province } = body;

        if (!projectName || !projectName.trim()) {
          return new Response(JSON.stringify({ success: false, error: 'Vui lòng nhập tên dự án!' }), {
            status: 400,
            headers: corsHeaders,
          });
        }

        const isTien = (advisor || '').toUpperCase() === 'TIEN';
        const advisorRelId = isTien ? '19d4b5e7-3d90-80ad-8fee-f81c3b11fd69' : '3894b5e7-3d90-8019-ab3e-f390d0d794a1';
        const advisorUserId = isTien ? 'dd7e5617-a24c-4a2c-8d3c-92ffd2517c44' : '38ed872b-594c-8151-8ff6-000286cb9f7a';
        const advisorName = isTien ? 'Phạm Hoàng Tiến' : 'Võ Minh Sang';

        const vnDate = new Date(Date.now() + 7 * 3600 * 1000);
        const todayStr = vnDate.toISOString().split('T')[0];

        const properties = {
          'Tên dự án': {
            title: [{ text: { content: projectName.trim() } }]
          },
          'LĨNH VỰC': {
            relation: [{ id: '19a4b5e7-3d90-8022-9844-d93fd68a0812' }] // Mô Hình
          },
          'Trạng thái dự án': {
            relation: [{ id: '3a74b5e7-3d90-8087-a904-c25e61ae36da' }] // 💬 Tư vấn / 🆕 Mới
          },
          'Người theo': {
            relation: [{ id: advisorRelId }]
          },
          'Người tư vấn': {
            people: [{ id: advisorUserId }]
          },
          'Ngày liên hệ': {
            date: { start: todayStr }
          },
          'Nhắc hẹn': {
            date: { start: `${todayStr}T09:00:00+07:00` }
          }
        };

        if (category) {
          properties['Danh mục'] = {
            multi_select: [{ name: category }]
          };
        }
        if (source) {
          properties['Nguồn khách'] = {
            rich_text: [{ text: { content: source } }]
          };
        }
        if (clientName) {
          properties['Tên liên hệ'] = {
            rich_text: [{ text: { content: clientName } }]
          };
        }
        if (phone) {
          properties['ĐT Liên hệ'] = {
            rich_text: [{ text: { content: phone } }]
          };
        }
        if (note) {
          properties['Ghi chú'] = {
            rich_text: [{ text: { content: note } }]
          };
        }
        if (province && province !== 'Khác') {
          properties['Tỉnh/ Thành Phố'] = {
            select: { name: province }
          };
        }

        const notionRes = await fetch('https://api.notion.com/v1/pages', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${NOTION_TOKEN}`,
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            parent: { database_id: DATABASE_ID },
            properties: properties,
          }),
        });

        const resJson = await notionRes.json();
        if (!notionRes.ok) {
          return new Response(JSON.stringify({ success: false, error: resJson.message || 'Lỗi Notion API', details: resJson }), {
            status: 500,
            headers: corsHeaders,
          });
        }

        // Gửi Telegram ping
        try {
          const tgMsg = `🆕 *DỰ ÁN MỚI LÊN ĐƠN (WEB APP)*\\n` +
            `• *Tên dự án:* *${projectName.trim()}*\\n` +
            `• *Khách hàng:* ${clientName || 'Chưa rõ'} ${phone ? `(${phone})` : ''}\\n` +
            `• *Lĩnh vực:* Mô Hình | *Danh mục:* ${category || 'Mô hình'}\\n` +
            `• *Nguồn khách:* ${source || 'Zalo'}\\n` +
            `• *Phụ trách:* ${advisorName}\\n` +
            (note ? `• *Ghi chú:* ${note}\\n` : '') +
            `• *Nhắc hẹn:* 09:00 hôm nay\\n` +
            `• *Trạng thái:* 🆕 Mới (💬 Tư vấn)\\n\\n` +
            `🔗 [Mở trên Notion](${resJson.url})`;

          await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: TELEGRAM_CHAT_ID,
              text: tgMsg,
              parse_mode: 'Markdown',
              disable_web_page_preview: true,
            }),
          });
        } catch (tgErr) {
          console.error('Lỗi Telegram:', tgErr);
        }

        return new Response(JSON.stringify({
          success: true,
          pageId: resJson.id,
          url: resJson.url,
          message: 'Tạo đơn mới thành công trên Notion!'
        }), {
          headers: corsHeaders,
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: corsHeaders,
        });
      }
    }

    // 4. Endpoint: POST /api/add-comment
    if (url.pathname === '/api/add-comment' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { projectId, projectName, commentText, newStatus, author } = body;

        if (!projectId || !commentText) {
          return new Response(JSON.stringify({ success: false, error: 'Thiếu mã dự án hoặc nội dung cập nhật!' }), {
            status: 400,
            headers: corsHeaders,
          });
        }

        const authorName = author || 'Sếp Tiến';
        const vnDate = new Date(Date.now() + 7 * 3600 * 1000);
        const dateStr = vnDate.toLocaleDateString('vi-VN');
        const prefix = `[${authorName} - ${dateStr}]: `;

        // Ghi comment vào Notion
        const commentRes = await fetch('https://api.notion.com/v1/comments', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${NOTION_TOKEN}`,
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            parent: { page_id: projectId },
            rich_text: [
              { text: { content: `${prefix}${commentText.trim()}` } }
            ],
          }),
        });

        const commentJson = await commentRes.json();
        if (!commentRes.ok) {
          return new Response(JSON.stringify({ success: false, error: commentJson.message || 'Lỗi gửi comment Notion', details: commentJson }), {
            status: 500,
            headers: corsHeaders,
          });
        }

        // Cập nhật trạng thái dự án nếu có
        let statusUpdated = false;
        let statusLabel = '';
        if (newStatus) {
          const statusMap = {
            'tuvan': { id: '3a74b5e7-3d90-8087-a904-c25e61ae36da', label: '💬 Tư vấn' },
            'baogia': { id: '3a74b5e7-3d90-80bd-b3bb-dc527928c868', label: '🧾 Báo giá' },
            'hopdong': { id: '3a74b5e7-3d90-80bf-8b88-fc64bb4aafa0', label: '🤝 Hợp đồng' },
            'danglam': { id: '3a74b5e7-3d90-8064-858b-d7b17067010b', label: '🏗️ Đang làm' },
            'thanhtoan': { id: '3a74b5e7-3d90-80c0-a794-d529ab12e191', label: '💸 Thanh toán' },
            'hoanthanh': { id: '3a74b5e7-3d90-803f-b015-e40f2d730c12', label: '🏆 Hoàn thành' }
          };
          const statusItem = statusMap[newStatus];
          if (statusItem) {
            await fetch(`https://api.notion.com/v1/pages/${projectId}`, {
              method: 'PATCH',
              headers: {
                'Authorization': `Bearer ${NOTION_TOKEN}`,
                'Notion-Version': '2022-06-28',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                properties: {
                  'Trạng thái dự án': {
                    relation: [{ id: statusItem.id }]
                  }
                }
              }),
            });
            statusUpdated = true;
            statusLabel = statusItem.label;
          }
        }

        // Gửi Telegram ping
        try {
          const statusNote = statusUpdated ? `\\n• *Chuyển trạng thái:* \`${statusLabel}\`` : '';
          const timeStr = vnDate.toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' });
          const tgMsg = `💬 *CẬP NHẬT TIẾN ĐỘ DỰ ÁN (WEB APP)*\\n` +
            `• *Dự án:* *${projectName || 'Dự án'}*\\n` +
            `• *Người cập nhật:* ${authorName}${statusNote}\\n` +
            `• *Nội dung:* "${commentText.trim()}"\\n` +
            `⏰ *Thời gian:* ${timeStr}`;

          await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: TELEGRAM_CHAT_ID,
              text: tgMsg,
              parse_mode: 'Markdown',
              disable_web_page_preview: true,
            }),
          });
        } catch (tgErr) {
          console.error('Lỗi Telegram:', tgErr);
        }

        return new Response(JSON.stringify({
          success: true,
          statusUpdated,
          statusLabel,
          message: 'Đã lưu bình luận vào Notion và gửi thông báo Telegram!'
        }), {
          headers: corsHeaders,
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: corsHeaders,
        });
      }
    }

    // 5. Endpoint: GET /api/project-comments
    if (url.pathname === '/api/project-comments') {
      const pageId = url.searchParams.get('page_id');
      if (!pageId) {
        return new Response(JSON.stringify({ success: false, error: 'Thiếu tham số page_id' }), {
          status: 400,
          headers: corsHeaders,
        });
      }
      try {
        const res = await fetch(`https://api.notion.com/v1/comments?block_id=${pageId}`, {
          headers: {
            'Authorization': `Bearer ${NOTION_TOKEN}`,
            'Notion-Version': '2022-06-28',
          },
        });
        const data = await res.json();
        const comments = (data.results || []).map(c => ({
          id: c.id,
          created_time: c.created_time,
          text: (c.rich_text || []).map(t => t.plain_text).join(''),
        }));
        return new Response(JSON.stringify({ success: true, comments }), {
          headers: corsHeaders,
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: corsHeaders,
        });
      }
    }

    // 6. Static Asset Proxy từ GitHub Repo (luôn đồng bộ theo commit mới nhất)
    let filePath = url.pathname;
    if (filePath === '/' || filePath === '') {
      filePath = '/index.html';
    }

    const githubRawBase = 'https://raw.githubusercontent.com/hoangtien1300/songanh-sale/main';
    const targetUrl = `${githubRawBase}${filePath}`;

    try {
      const ghRes = await fetch(targetUrl, {
        cf: {
          cacheTtl: 60, // Cache 60s trên Edge để phản hồi tức thì
          cacheEverything: true
        }
      });

      if (ghRes.ok) {
        const ct = filePath.endsWith('.html') ? 'text/html; charset=utf-8' :
                   (filePath.endsWith('.css') ? 'text/css; charset=utf-8' :
                   (filePath.endsWith('.js') ? 'application/javascript; charset=utf-8' :
                   (filePath.endsWith('.json') ? 'application/json; charset=utf-8' : 'text/plain')));
        
        return new Response(ghRes.body, {
          status: ghRes.status,
          headers: {
            'Content-Type': ct,
            'Cache-Control': 'public, max-age=60, s-maxage=120',
          }
        });
      }
    } catch (fetchErr) {
      console.error('Lỗi fetch static từ GitHub:', fetchErr);
    }

    return new Response('404 Not Found', { status: 404 });
  }
};