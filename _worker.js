/**
 * Cloudflare Worker for Song Anh Sales System (songanh-sale)
 * Routes:
 * - POST /api/create-lead: Tao du an moi tren Notion va ban Telegram
 * - POST /api/add-comment: Ghi comment tien do vao Notion va cap nhat trang thai va ban Telegram
 * - GET  /api/project-comments: Lay comment gan nhat tu Notion
 * - GET  /api/health: Kiem tra trang thai worker
 * - GET  /*: Phuc vu Static Assets
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Xu ly CORS Preflight
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

    // 1. Health Check
    if (url.pathname === '/api/health') {
      return new Response(JSON.stringify({ status: 'ok', service: 'songanh-sale', time: new Date().toISOString() }), {
        headers: corsHeaders,
      });
    }

    const NOTION_TOKEN = env.NOTION_TOKEN;
    const DATABASE_ID = env.DATABASE_ID || '1a54b5e73d90809985a8f7557c51f80c';
    const TELEGRAM_BOT_TOKEN = env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = env.TELEGRAM_CHAT_ID || '1730306144';

    // 2. Endpoint: POST /api/create-lead
    if (url.pathname === '/api/create-lead' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { projectName, category, clientName, phone, source, advisor, note, province } = body;

        if (!projectName || !projectName.trim()) {
          return new Response(JSON.stringify({ success: false, error: 'Vui long nhap ten du an!' }), {
            status: 400,
            headers: corsHeaders,
          });
        }

        const isTien = (advisor || '').toUpperCase() === 'TIEN';
        const advisorRelId = isTien ? '19d4b5e7-3d90-80ad-8fee-f81c3b11fd69' : '3894b5e7-3d90-8019-ab3e-f390d0d794a1';
        const advisorUserId = isTien ? 'dd7e5617-a24c-4a2c-8d3c-92ffd2517c44' : '38ed872b-594c-8151-8ff6-000286cb9f7a';
        const advisorName = isTien ? 'Pham Hoang Tien' : 'Vo Minh Sang';

        const vnDate = new Date(Date.now() + 7 * 3600 * 1000);
        const todayStr = vnDate.toISOString().split('T')[0];

        const properties = {
          'Tên dự án': {
            title: [{ text: { content: projectName.trim() } }]
          },
          'LĨNH VỰC': {
            relation: [{ id: '19a4b5e7-3d90-8022-9844-d93fd68a0812' }]
          },
          'Trạng thái dự án': {
            relation: [{ id: '3a74b5e7-3d90-8087-a904-c25e61ae36da' }]
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
            date: { start: todayStr + 'T09:00:00+07:00' }
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
            'Authorization': 'Bearer ' + NOTION_TOKEN,
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
          return new Response(JSON.stringify({ success: false, error: resJson.message || 'Loi Notion API', details: resJson }), {
            status: 500,
            headers: corsHeaders,
          });
        }

        try {
          const tgMsg = '🆕 *DỰ ÁN MỚI LÊN ĐƠN (WEB APP)*\n' +
            '• *Tên dự án:* ' + projectName.trim() + '\n' +
            '• *Khách hàng:* ' + (clientName || 'Chưa rõ') + (phone ? ' (' + phone + ')' : '') + '\n' +
            '• *Lĩnh vực:* Mô Hình | *Danh mục:* ' + (category || 'Mô hình') + '\n' +
            '• *Nguồn khách:* ' + (source || 'Zalo') + '\n' +
            '• *Phụ trách:* ' + advisorName + '\n' +
            (note ? '• *Ghi chú:* ' + note + '\n' : '') +
            '• *Nhắc hẹn:* 09:00 hôm nay\n' +
            '• *Trạng thái:* 🆕 Mới (💬 Tư vấn)\n\n' +
            '🔗 [Mở trên Notion](' + resJson.url + ')';

          if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
            await fetch('https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: tgMsg,
                parse_mode: 'Markdown',
                disable_web_page_preview: true,
              }),
            });
          }
        } catch (tgErr) {
          console.error('Loi Telegram:', tgErr);
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

    // 3. Endpoint: POST /api/add-comment
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
        const prefix = '[' + authorName + ' - ' + dateStr + ']: ';

        const commentRes = await fetch('https://api.notion.com/v1/comments', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + NOTION_TOKEN,
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            parent: { page_id: projectId },
            rich_text: [
              { text: { content: prefix + commentText.trim() } }
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
            await fetch('https://api.notion.com/v1/pages/' + projectId, {
              method: 'PATCH',
              headers: {
                'Authorization': 'Bearer ' + NOTION_TOKEN,
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

        try {
          const statusNote = statusUpdated ? '\n• *Chuyển trạng thái:* `' + statusLabel + '`' : '';
          const timeStr = vnDate.toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' });
          const tgMsg = '💬 *CẬP NHẬT TIẾN ĐỘ DỰ ÁN (WEB APP)*\n' +
            '• *Dự án:* *' + (projectName || 'Dự án') + '*\n' +
            '• *Người cập nhật:* ' + authorName + statusNote + '\n' +
            '• *Nội dung:* "' + commentText.trim() + '"\n' +
            '⏰ *Thời gian:* ' + timeStr;

          if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
            await fetch('https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: tgMsg,
                parse_mode: 'Markdown',
                disable_web_page_preview: true,
              }),
            });
          }
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

    // 4. Endpoint: GET /api/project-comments?page_id=xxx
    if (url.pathname === '/api/project-comments') {
      const pageId = url.searchParams.get('page_id');
      if (!pageId) {
        return new Response(JSON.stringify({ success: false, error: 'Thiếu tham số page_id' }), {
          status: 400,
          headers: corsHeaders,
        });
      }
      try {
        const res = await fetch('https://api.notion.com/v1/comments?block_id=' + pageId, {
          headers: {
            'Authorization': 'Bearer ' + NOTION_TOKEN,
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

    // 5. Fallback Static Assets
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Song Anh Sale Worker Active', { status: 200 });
  }
};