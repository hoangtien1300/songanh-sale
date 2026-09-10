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
    const MEMBERS_DB_ID = env.MEMBERS_DB_ID || '19b4b5e73d90803abda4dff1da951ef6';
    const TELEGRAM_BOT_TOKEN = env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = env.TELEGRAM_CHAT_ID || '1730306144';

    // 2.2. Endpoint: POST /api/auth/login (Xác thực đăng nhập trực tiếp theo Bảng Thành Viên Notion)
    if (url.pathname === '/api/auth/login' && request.method === 'POST') {
      try {
        const body = await request.json().catch(() => ({}));
        const inputUser = (body.username || '').trim().toLowerCase();
        const inputPass = (body.password || '').trim();

        if (!inputUser || !inputPass) {
          return new Response(JSON.stringify({ 
            success: false, 
            message: 'Vui lòng nhập đầy đủ Tên đăng nhập và Mật khẩu!' 
          }), { status: 400, headers: corsHeaders });
        }

        // Truy vấn Notion Bảng Thành Viên có cấp Webapp ID
        const nRes = await fetch(`https://api.notion.com/v1/databases/${MEMBERS_DB_ID}/query`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${NOTION_TOKEN}`,
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            filter: {
              property: 'Webapp ID',
              rich_text: {
                is_not_empty: true
              }
            }
          })
        });

        if (!nRes.ok) {
          const errData = await nRes.json().catch(() => ({}));
          return new Response(JSON.stringify({ 
            success: false, 
            message: 'Lỗi kết nối cơ sở dữ liệu Notion', 
            details: errData 
          }), { status: 500, headers: corsHeaders });
        }

        const data = await nRes.json();
        const members = data.results || [];
        let matchedMember = null;

        for (const m of members) {
          const props = m.properties || {};

          // Lấy Webapp ID
          const widList = (props['Webapp ID'] && props['Webapp ID'].rich_text) || [];
          const rawWid = widList.map(t => t.plain_text || '').join('').trim().toLowerCase();

          // Lấy Phone
          const phone = (props['Phone'] && props['Phone'].phone_number) || '';
          const phoneClean = phone.replace(/[^0-9]/g, '');
          const inputClean = inputUser.replace(/[^0-9]/g, '');

          // Lấy Webapp Password
          const pwdList = (props['Webapp Password'] && props['Webapp Password'].rich_text) || [];
          const rawPwd = pwdList.map(t => t.plain_text || '').join('').trim();

          // Kiểm tra khớp tài khoản (theo Webapp ID hoặc SĐT)
          const isUserMatch = (rawWid && rawWid === inputUser) || 
                              (inputClean.length >= 8 && phoneClean.includes(inputClean));

          if (isUserMatch) {
            if (rawPwd === inputPass) {
              const nameList = (props['Tên'] && props['Tên'].title) || [];
              const name = nameList.map(t => t.plain_text || '').join('').trim() || 'Thành viên Song Anh';

              // Kiểm tra trạng thái thành viên
              const statusObj = props['Trạng thái thành viên'] && props['Trạng thái thành viên'].status;
              const statusName = (statusObj && statusObj.name) || '';
              if (statusName.toLowerCase().includes('nghỉ') || statusName.toLowerCase().includes('khóa')) {
                return new Response(JSON.stringify({ 
                  success: false, 
                  message: 'Tài khoản này hiện đang tạm khóa hoặc đã ngưng hoạt động trên Notion!' 
                }), { status: 403, headers: corsHeaders });
              }

              // Xác định vai trò & avatar hiển thị
              let role = 'Thành viên Song Anh';
              let avatar = 'SA';
              const nameUpper = name.toUpperCase();
              if (nameUpper.includes('TIẾN') || rawWid.includes('tien') || rawWid === 'admin') {
                role = 'Quản trị viên / Điều Hành';
                avatar = 'PT';
              } else if (nameUpper.includes('SANG') || rawWid.includes('sang')) {
                role = 'Chuyên viên Kinh Doanh';
                avatar = 'VS';
              } else if (nameUpper.includes('THIỆN')) {
                role = 'Ban Giám Đốc';
                avatar = 'MT';
              } else {
                const words = name.trim().split(/\s+/);
                avatar = words.length >= 2 ? (words[0][0] + words[words.length - 1][0]).toUpperCase() : name.substring(0, 2).toUpperCase();
              }

              matchedMember = {
                id: m.id,
                username: rawWid || inputUser,
                fullName: name,
                roleName: role,
                avatar: avatar,
                phone: phone
              };
              break;
            } else {
              return new Response(JSON.stringify({ 
                success: false, 
                message: 'Mật khẩu truy cập không chính xác. Vui lòng kiểm tra lại!' 
              }), { status: 401, headers: corsHeaders });
            }
          }
        }

        if (!matchedMember) {
          return new Response(JSON.stringify({ 
            success: false, 
            message: 'Tài khoản chưa được cấp quyền truy cập trong Bảng Thành Viên trên Notion!' 
          }), { status: 401, headers: corsHeaders });
        }

        const token = 'sa_notion_' + Math.random().toString(36).substring(2) + Date.now().toString(36);

        return new Response(JSON.stringify({
          success: true,
          user: matchedMember,
          token: token,
          message: 'Đăng nhập thành công!'
        }), { headers: corsHeaders });

      } catch (err) {
        return new Response(JSON.stringify({ success: false, message: 'Lỗi máy chủ: ' + err.message }), {
          status: 500,
          headers: corsHeaders,
        });
      }
    }

    // 2.5. Endpoint: GET /api/projects (Lấy danh sách dự án active từ Notion)
    if (url.pathname === '/api/projects' && request.method === 'GET') {
      try {
        const isForce = url.searchParams.get('force') === '1';

        const statusMap = {
          '3a74b5e7-3d90-803a-8d0b-d3d545ebb893': '🆕 Mới',
          '3a74b5e7-3d90-8087-a904-c25e61ae36da': '💬 Tư vấn',
          '3a74b5e7-3d90-80bd-b3bb-dc527928c868': '🧾 Báo giá',
          '3a74b5e7-3d90-80bf-8b88-fc64bb4aafa0': '🤝 Hợp đồng',
          '3a74b5e7-3d90-8064-858b-d7b17067010b': '🏗️ Đang làm',
          '3a74b5e7-3d90-80c0-a794-d529ab12e191': '💸 Thanh toán'
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
          if (rawStatus.includes('Mới')) {
            stage = 'moi';
            stageLabel = '🆕 Mới';
          } else if (rawStatus.includes('Báo giá')) {
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

    // 2.8. Endpoint: GET /api/search-members (Tìm kiếm khách hàng trong Bảng Thành Viên)
    if (url.pathname === '/api/search-members' && request.method === 'GET') {
      try {
        const query = (url.searchParams.get('q') || '').trim();
        if (!query || query.length < 1) {
          return new Response(JSON.stringify({ success: true, results: [] }), {
            headers: corsHeaders,
          });
        }

        const filterObj = {
          or: [
            { property: 'Tên', title: { contains: query } },
            { property: 'Phone', phone_number: { contains: query } }
          ]
        };

        const nRes = await fetch(`https://api.notion.com/v1/databases/${MEMBERS_DB_ID}/query`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${NOTION_TOKEN}`,
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            filter: filterObj,
            page_size: 10
          }),
        });

        if (!nRes.ok) {
          const errData = await nRes.json().catch(() => ({}));
          return new Response(JSON.stringify({ success: false, error: 'Lỗi tìm kiếm Notion', details: errData }), {
            status: 500,
            headers: corsHeaders,
          });
        }

        const data = await nRes.json();
        const results = (data.results || []).map(r => {
          const props = r.properties || {};
          const titleList = (props['Tên'] && props['Tên'].title) || [];
          const name = titleList.map(t => t.plain_text || '').join('').trim();
          const phone = (props['Phone'] && props['Phone'].phone_number) || '';
          const mqhList = (props['Mối quan hệ'] && props['Mối quan hệ'].multi_select) || [];
          const relation = mqhList.map(m => m.name).join(', ') || 'Khách hàng';
          return {
            id: r.id,
            name: name,
            phone: phone,
            relation: relation
          };
        }).filter(m => m.name);

        return new Response(JSON.stringify({ success: true, results: results }), {
          headers: corsHeaders,
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
        const { projectName, category, clientName, phone, source, advisor, note, province, contactDate, reminderDate, clientMemberId: inputMemberId } = body;

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

        // Ngày liên hệ: Nhận từ form, nếu không có thì mặc định lấy ngày hôm nay
        const finalContactDate = (contactDate && String(contactDate).trim()) ? String(contactDate).trim().substring(0, 10) : todayStr;

        // Nhắc hẹn: Tự động đặt thông báo cột nhắc hẹn trên Notion (mặc định là 09:00 ngày cập nhật)
        let finalReminderDate = `${todayStr}T09:00:00+07:00`;
        if (reminderDate && String(reminderDate).trim()) {
          const rTrim = String(reminderDate).trim();
          if (rTrim.includes('T')) {
            if (rTrim.endsWith('+07:00')) {
              finalReminderDate = rTrim;
            } else if (rTrim.length === 16) {
              finalReminderDate = `${rTrim}:00+07:00`;
            } else if (rTrim.length === 19) {
              finalReminderDate = `${rTrim}+07:00`;
            } else {
              finalReminderDate = rTrim;
            }
          } else if (rTrim.length === 10) {
            finalReminderDate = `${rTrim}T09:00:00+07:00`;
          }
        }

        // Tự động tìm hoặc tạo khách hàng trong BẢNG THÀNH VIÊN
        const MEMBERS_DB_ID = '19b4b5e7-3d90-803a-bda4-dff1da951ef6';
        let clientMemberId = (inputMemberId && String(inputMemberId).trim()) ? String(inputMemberId).trim() : null;

        if (!clientMemberId && clientName && clientName.trim()) {
          const cleanClientName = clientName.trim();
          const cleanPhone = (phone || '').trim();

          try {
            // Kiểm tra EXACT match tên khách hàng trong Bảng Thành Viên (TUYỆT ĐỐI KHÔNG DÙNG contains để tránh "Mr. A" nhầm "Mr Anakin Fung")
            const searchBody = {
              filter: {
                property: 'Tên',
                title: { equals: cleanClientName }
              },
              page_size: 1
            };

            const searchRes = await fetch(`https://api.notion.com/v1/databases/${MEMBERS_DB_ID}/query`, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${NOTION_TOKEN}`,
                'Notion-Version': '2022-06-28',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(searchBody),
            });

            if (searchRes.ok) {
              const searchData = await searchRes.json();
              if (searchData.results && searchData.results.length > 0) {
                clientMemberId = searchData.results[0].id;
              }
            }
          } catch (findErr) {
            console.warn('Lỗi tìm kiếm khách hàng trong Bảng Thành Viên:', findErr);
          }

          // Nếu chưa có khớp chính xác -> Tạo mới bản ghi khách hàng trong Bảng Thành Viên
          if (!clientMemberId) {
            try {
              const memberProps = {
                'Tên': {
                  title: [{ text: { content: cleanClientName } }]
                },
                'Mối quan hệ': {
                  multi_select: [{ name: 'Khách hàng' }]
                }
              };
              if (cleanPhone) {
                memberProps['Phone'] = {
                  phone_number: cleanPhone
                };
              }
              if (source && source.trim()) {
                memberProps['Nguồn'] = {
                  rich_text: [{ text: { content: source.trim() } }]
                };
              }

              const createMemberRes = await fetch('https://api.notion.com/v1/pages', {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${NOTION_TOKEN}`,
                  'Notion-Version': '2022-06-28',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  parent: { database_id: MEMBERS_DB_ID },
                  properties: memberProps
                }),
              });

              if (createMemberRes.ok) {
                const memberData = await createMemberRes.json();
                clientMemberId = memberData.id;
              } else {
                const errData = await createMemberRes.json().catch(() => ({}));
                console.warn('Không thể tạo bản ghi khách hàng trong Bảng Thành Viên:', errData);
              }
            } catch (createErr) {
              console.warn('Lỗi tạo khách hàng trong Bảng Thành Viên:', createErr);
            }
          }
        }

        const properties = {
          'Tên dự án': {
            title: [{ text: { content: projectName.trim() } }]
          },
          'LĨNH VỰC': {
            relation: [{ id: '19a4b5e7-3d90-8022-9844-d93fd68a0812' }] // Mô Hình
          },
          'Trạng thái dự án': {
            relation: [{ id: '3a74b5e7-3d90-803a-8d0b-d3d545ebb893' }] // 🆕 Mới (chuẩn 100%)
          },
          'Người theo': {
            relation: [{ id: advisorRelId }]
          },
          'Người tư vấn': {
            people: [{ id: advisorUserId }]
          },
          'Ngày liên hệ': {
            date: { start: finalContactDate }
          },
          'Nhắc hẹn': {
            date: { start: finalReminderDate }
          }
        };

        if (clientMemberId) {
          properties['Khách hàng'] = {
            relation: [{ id: clientMemberId }]
          };
        }

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
          const contactDateParts = finalContactDate.split('-');
          const contactDateVN = contactDateParts.length === 3 ? `${contactDateParts[2]}/${contactDateParts[1]}/${contactDateParts[0]}` : finalContactDate;
          const todayVN = todayStr.split('-').reverse().join('/');

          const tgMsg = `🆕 *DỰ ÁN MỚI LÊN ĐƠN (WEB APP)*\n` +
            `• *Tên dự án:* *${projectName.trim()}*\n` +
            `• *Khách hàng:* ${clientName || 'Chưa rõ'} ${phone ? `(${phone})` : ''}\n` +
            `• *Ngày liên hệ:* ${contactDateVN}\n` +
            `• *Lĩnh vực:* Mô Hình | *Danh mục:* ${category || 'Mô hình'}\n` +
            `• *Nguồn khách:* ${source || 'Zalo'}\n` +
            `• *Phụ trách:* ${advisorName}\n` +
            (note ? `• *Ghi chú:* ${note}\n` : '') +
            `• *Nhắc hẹn:* 09:00 ngày cập nhật (${todayVN})\n` +
            `• *Trạng thái:* 🆕 Mới\n\n` +
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
    if (filePath === '/' || filePath === '' || filePath === '/login') {
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