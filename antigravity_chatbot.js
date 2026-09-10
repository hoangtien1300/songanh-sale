/**
 * Song Anh WebApp Advisory Copilot Widget (Self-Contained Standalone Version)
 * Hoàn toàn độc lập, không phụ thuộc Tailwind CSS hay FontAwesome.
 * Hiển thị 100% đảm bảo trên mọi trang WebApp (Desktop, Tablet, Mobile).
 */

(function () {
    const ADVISORY_API = 'http://localhost:8765';
    let isConnected = false;
    let isSending = false;
    let chatHistory = [];

    // Tải lịch sử chat
    try {
        const saved = localStorage.getItem('songanh_copilot_history');
        if (saved) chatHistory = JSON.parse(saved);
    } catch (e) {
        chatHistory = [];
    }

    function saveHistory() {
        try {
            localStorage.setItem('songanh_copilot_history', JSON.stringify(chatHistory.slice(-30)));
        } catch (e) {}
    }

    // Tiêm CSS độc lập
    function injectStyles() {
        if (document.getElementById('songanh-copilot-style')) return;
        const style = document.createElement('style');
        style.id = 'songanh-copilot-style';
        style.textContent = `
            #ag-copilot-fab {
                position: fixed !important;
                bottom: 85px !important;
                right: 20px !important;
                width: 60px !important;
                height: 60px !important;
                border-radius: 50% !important;
                background: linear-gradient(135deg, #0B3C5D 0%, #0F172A 100%) !important;
                border: 2px solid #F59E0B !important;
                box-shadow: 0 6px 25px rgba(245, 158, 11, 0.4), 0 4px 12px rgba(0,0,0,0.4) !important;
                cursor: pointer !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                z-index: 999999 !important;
                transition: transform 0.25s ease, box-shadow 0.25s ease !important;
                outline: none !important;
                user-select: none !important;
            }
            #ag-copilot-fab:hover {
                transform: scale(1.08) !important;
                box-shadow: 0 8px 30px rgba(245, 158, 11, 0.6) !important;
            }
            #ag-copilot-fab:active {
                transform: scale(0.95) !important;
            }
            #ag-copilot-fab .ag-fab-icon {
                font-size: 26px !important;
                line-height: 1 !important;
                filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5)) !important;
            }
            #ag-copilot-fab .ag-fab-badge {
                position: absolute !important;
                top: 2px !important;
                right: 2px !important;
                width: 13px !important;
                height: 13px !important;
                background: #10B981 !important;
                border: 2px solid #0F172A !important;
                border-radius: 50% !important;
            }

            /* Tooltip */
            #ag-copilot-tooltip {
                position: fixed !important;
                bottom: 95px !important;
                right: 90px !important;
                background: #0F172A !important;
                color: #FDE68A !important;
                padding: 6px 12px !important;
                border-radius: 8px !important;
                font-size: 12px !important;
                font-weight: 600 !important;
                border: 1px solid rgba(245, 158, 11, 0.4) !important;
                box-shadow: 0 4px 15px rgba(0,0,0,0.4) !important;
                z-index: 999998 !important;
                pointer-events: none !important;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
                white-space: nowrap !important;
            }

            /* Drawer Chatbox */
            #ag-copilot-drawer {
                position: fixed !important;
                bottom: 95px !important;
                right: 20px !important;
                width: 440px !important;
                height: 610px !important;
                max-width: calc(100vw - 30px) !important;
                max-height: calc(100vh - 120px) !important;
                background: #0F172A !important;
                border: 1px solid rgba(245, 158, 11, 0.3) !important;
                border-radius: 18px !important;
                box-shadow: 0 12px 50px rgba(0,0,0,0.75) !important;
                z-index: 1000000 !important;
                display: flex !important;
                flex-direction: column !important;
                overflow: hidden !important;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
                color: #E2E8F0 !important;
                box-sizing: border-box !important;
            }
            @media (max-width: 640px) {
                #ag-copilot-drawer {
                    top: 50px !important;
                    bottom: 85px !important;
                    left: 12px !important;
                    right: 12px !important;
                    width: auto !important;
                    height: auto !important;
                    max-width: none !important;
                    max-height: none !important;
                }
            }

            /* Header */
            .ag-header {
                padding: 12px 16px !important;
                background: linear-gradient(90deg, #091322 0%, #172554 100%) !important;
                border-bottom: 1px solid #1E293B !important;
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
            }
            .ag-header-info {
                display: flex !important;
                align-items: center !important;
                gap: 10px !important;
            }
            .ag-avatar {
                width: 38px !important;
                height: 38px !important;
                border-radius: 10px !important;
                background: linear-gradient(135deg, #F59E0B, #D97706) !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 20px !important;
                box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3) !important;
            }
            .ag-header-title {
                font-size: 14px !important;
                font-weight: 700 !important;
                color: #FDE68A !important;
                margin: 0 !important;
            }
            .ag-header-subtitle {
                font-size: 11px !important;
                color: #94A3B8 !important;
                margin: 2px 0 0 0 !important;
            }
            .ag-close-btn {
                background: transparent !important;
                border: none !important;
                color: #94A3B8 !important;
                font-size: 20px !important;
                cursor: pointer !important;
                padding: 4px 8px !important;
                border-radius: 6px !important;
                line-height: 1 !important;
            }
            .ag-close-btn:hover {
                color: #EF4444 !important;
                background: rgba(239, 68, 68, 0.1) !important;
            }

            /* Sub banner */
            .ag-banner {
                padding: 8px 14px !important;
                background: rgba(245, 158, 11, 0.08) !important;
                border-bottom: 1px solid rgba(245, 158, 11, 0.15) !important;
                font-size: 11px !important;
                color: #FCD34D !important;
                display: flex !important;
                align-items: center !important;
                gap: 6px !important;
            }

            /* Message area */
            .ag-messages {
                flex: 1 !important;
                padding: 14px !important;
                overflow-y: auto !important;
                display: flex !important;
                flex-direction: column !important;
                gap: 12px !important;
                box-sizing: border-box !important;
            }
            .ag-welcome-box {
                background: rgba(30, 41, 59, 0.7) !important;
                border: 1px solid rgba(245, 158, 11, 0.25) !important;
                border-radius: 12px !important;
                padding: 12px !important;
                font-size: 12px !important;
                line-height: 1.5 !important;
            }
            .ag-quick-grid {
                display: grid !important;
                grid-template-columns: 1fr 1fr !important;
                gap: 6px !important;
                margin-top: 10px !important;
            }
            @media (max-width: 480px) {
                .ag-quick-grid { grid-template-columns: 1fr !important; }
            }
            .ag-quick-btn {
                background: #1E293B !important;
                border: 1px solid #334155 !important;
                color: #F1F5F9 !important;
                padding: 8px 10px !important;
                border-radius: 8px !important;
                font-size: 11px !important;
                font-weight: 500 !important;
                text-align: left !important;
                cursor: pointer !important;
                transition: all 0.2s !important;
            }
            .ag-quick-btn:hover {
                background: #0B3C5D !important;
                border-color: #F59E0B !important;
                color: #FDE68A !important;
            }

            /* Bubbles */
            .ag-msg-user {
                align-self: flex-end !important;
                max-width: 85% !important;
                background: linear-gradient(135deg, #D97706, #B45309) !important;
                color: #FFFFFF !important;
                padding: 10px 14px !important;
                border-radius: 14px 14px 2px 14px !important;
                font-size: 12px !important;
                line-height: 1.5 !important;
                box-shadow: 0 2px 8px rgba(0,0,0,0.2) !important;
            }
            .ag-msg-assistant {
                align-self: flex-start !important;
                max-width: 92% !important;
                background: #1E293B !important;
                border: 1px solid #334155 !important;
                color: #E2E8F0 !important;
                padding: 12px 14px !important;
                border-radius: 14px 14px 14px 2px !important;
                font-size: 12px !important;
                line-height: 1.6 !important;
                box-shadow: 0 2px 8px rgba(0,0,0,0.2) !important;
            }
            .ag-msg-assistant h3 {
                color: #F59E0B !important;
                font-size: 14px !important;
                margin: 4px 0 8px 0 !important;
                font-weight: 700 !important;
                border-bottom: 1px solid rgba(245, 158, 11, 0.2) !important;
                padding-bottom: 4px !important;
            }
            .ag-msg-assistant h4 {
                color: #FCD34D !important;
                font-size: 12px !important;
                margin: 8px 0 4px 0 !important;
                font-weight: 700 !important;
            }
            .ag-msg-assistant strong {
                color: #FDE68A !important;
            }
            .ag-msg-assistant code {
                background: #091322 !important;
                color: #FCD34D !important;
                padding: 2px 6px !important;
                border-radius: 4px !important;
                font-size: 11px !important;
            }

            /* Input form */
            .ag-footer {
                padding: 10px 12px !important;
                background: #091322 !important;
                border-top: 1px solid #1E293B !important;
            }
            .ag-form {
                display: flex !important;
                gap: 8px !important;
                align-items: flex-end !important;
            }
            .ag-input {
                flex: 1 !important;
                background: #1E293B !important;
                border: 1px solid #334155 !important;
                color: #F8FAFC !important;
                padding: 8px 12px !important;
                border-radius: 10px !important;
                font-size: 12px !important;
                resize: none !important;
                outline: none !important;
                min-height: 38px !important;
                max-height: 100px !important;
                box-sizing: border-box !important;
                font-family: inherit !important;
            }
            .ag-input:focus {
                border-color: #F59E0B !important;
            }
            .ag-send-btn {
                width: 38px !important;
                height: 38px !important;
                border-radius: 10px !important;
                background: #F59E0B !important;
                border: none !important;
                color: #0F172A !important;
                font-size: 15px !important;
                font-weight: bold !important;
                cursor: pointer !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                flex-shrink: 0 !important;
                transition: background 0.2s !important;
            }
            .ag-send-btn:hover {
                background: #FBBF24 !important;
            }
            .ag-send-btn:disabled {
                opacity: 0.5 !important;
                cursor: not-allowed !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Tạo HTML Component
    function initWidget() {
        if (document.getElementById('ag-copilot-container')) return;
        injectStyles();

        const container = document.createElement('div');
        container.id = 'ag-copilot-container';

        container.innerHTML = `
            <!-- FAB Nổi -->
            <button id="ag-copilot-fab" onclick="window.SongAnhCopilot.toggleChat()" title="Trợ Lý Hướng Dẫn Thao Tác">
                <span class="ag-fab-icon">💡</span>
                <span class="ag-fab-badge"></span>
            </button>

            <!-- Drawer Hướng Dẫn -->
            <div id="ag-copilot-drawer" style="display: none;">
                <div class="ag-header">
                    <div class="ag-header-info">
                        <div class="ag-avatar">💡</div>
                        <div>
                            <div class="ag-header-title">Trợ Lý Hướng Dẫn WebApp</div>
                            <div class="ag-header-subtitle">Tư vấn cách thao tác từng bước (Read-Only)</div>
                        </div>
                    </div>
                    <button class="ag-close-btn" onclick="window.SongAnhCopilot.toggleChat()" title="Đóng">✕</button>
                </div>

                <div class="ag-banner">
                    <span>🛡️</span>
                    <span>Trợ lý giải đáp cách làm, <strong>không tự ý sửa dữ liệu</strong> hệ thống.</span>
                </div>

                <div class="ag-messages" id="ag-copilot-messages">
                    <div class="ag-welcome-box">
                        <div style="font-weight: 700; color: #FDE68A; margin-bottom: 4px;">
                            👋 Chào bạn (Sang & Nhân sự Song Anh)!
                        </div>
                        <div>Bạn cần hướng dẫn thực hiện thao tác nào? Bấm câu hỏi mẫu bên dưới hoặc gõ trực tiếp nhé:</div>
                        
                        <div class="ag-quick-grid">
                            <button class="ag-quick-btn" onclick="window.SongAnhCopilot.sendQuick('Làm thế nào để tạo dự án mới trên webapp?')">
                                📋 Cách tạo dự án mới
                            </button>
                            <button class="ag-quick-btn" onclick="window.SongAnhCopilot.sendQuick('Làm thế nào để cập nhật tiến độ dự án?')">
                                🔄 Cách cập nhật tiến độ
                            </button>
                            <button class="ag-quick-btn" onclick="window.SongAnhCopilot.sendQuick('Làm thế nào để tạo báo giá sa bàn cho khách?')">
                                🧾 Cách làm báo giá sa bàn
                            </button>
                            <button class="ag-quick-btn" onclick="window.SongAnhCopilot.sendQuick('Làm thế nào để lọc danh sách nhóm Facebook đã tham gia?')">
                                👥 Cách lọc nhóm Facebook
                            </button>
                        </div>
                    </div>

                    <div id="ag-chat-history-list" style="display: flex; flex-direction: column; gap: 10px;"></div>
                    
                    <div id="ag-copilot-loading" style="display: none; font-size: 11px; color: #FCD34D; padding: 6px 10px; background: rgba(245,158,11,0.1); border-radius: 6px;">
                        ⏳ Đang tra cứu hướng dẫn từng bước...
                    </div>
                </div>

                <div class="ag-footer">
                    <form class="ag-form" onsubmit="window.SongAnhCopilot.handleSubmit(event)">
                        <textarea id="ag-copilot-input" class="ag-input" rows="1" placeholder="Hỏi cách làm... (Ví dụ: Làm sao tạo dự án mới?)" onkeydown="window.SongAnhCopilot.handleKeyDown(event)"></textarea>
                        <button type="submit" id="ag-copilot-submit" class="ag-send-btn">➤</button>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(container);
        renderHistory();
    }

    function formatMarkdown(text) {
        if (!text) return '';
        let str = text;
        str = str.replace(/^### (.*$)/gim, '<h4>🔹 $1</h4>');
        str = str.replace(/^## (.*$)/gim, '<h3>$1</h3>');
        str = str.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        str = str.replace(/\*(.*?)\*/g, '<em>$1</em>');
        str = str.replace(/`([^`]+)`/g, '<code>$1</code>');
        str = str.replace(/^>\s+(.*$)/gim, '<div style="margin: 6px 0; padding: 6px 10px; background: rgba(245,158,11,0.15); border-left: 3px solid #F59E0B; border-radius: 4px; color: #FDE68A;">$1</div>');
        str = str.replace(/^\s*[-•]\s+(.*)$/gm, '<div style="margin-left: 12px; margin-bottom: 3px;">• $1</div>');
        str = str.replace(/^\s*(\d+)\.\s+(.*)$/gm, '<div style="margin-left: 6px; margin-bottom: 4px;"><strong>$1.</strong> $2</div>');
        str = str.replace(/\n/g, '<br>');
        return str;
    }

    function renderHistory() {
        const list = document.getElementById('ag-chat-history-list');
        if (!list) return;

        let html = '';
        chatHistory.forEach(m => {
            if (m.role === 'user') {
                html += `
                    <div class="ag-msg-user">
                        <div style="font-size: 10px; opacity: 0.8; margin-bottom: 2px;">Bạn (${m.time || ''})</div>
                        <div>${m.content}</div>
                    </div>
                `;
            } else {
                html += `
                    <div class="ag-msg-assistant">
                        <div style="font-size: 10px; color: #F59E0B; font-weight: 700; margin-bottom: 4px;">Trợ Lý Hướng Dẫn (${m.time || ''})</div>
                        <div>${formatMarkdown(m.content)}</div>
                    </div>
                `;
            }
        });
        list.innerHTML = html;

        const container = document.getElementById('ag-copilot-messages');
        if (container) container.scrollTop = container.scrollHeight;
    }

    window.SongAnhCopilot = {
        toggleChat: function () {
            const drawer = document.getElementById('ag-copilot-drawer');
            if (!drawer) return;
            if (drawer.style.display === 'none' || drawer.style.display === '') {
                drawer.style.display = 'flex';
                setTimeout(() => {
                    const input = document.getElementById('ag-copilot-input');
                    if (input) input.focus();
                }, 100);
            } else {
                drawer.style.display = 'none';
            }
        },

        sendQuick: function (text) {
            const input = document.getElementById('ag-copilot-input');
            if (input) {
                input.value = text;
                this.handleSubmit(new Event('submit'));
            }
        },

        handleKeyDown: function (e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSubmit(e);
            }
        },

        handleSubmit: async function (e) {
            if (e) e.preventDefault();
            if (isSending) return;

            const input = document.getElementById('ag-copilot-input');
            const submitBtn = document.getElementById('ag-copilot-submit');
            const loading = document.getElementById('ag-copilot-loading');
            const text = input ? input.value.trim() : '';
            if (!text) return;

            isSending = true;
            if (submitBtn) submitBtn.disabled = true;
            if (loading) loading.style.display = 'block';

            const now = new Date();
            const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

            chatHistory.push({ role: 'user', content: text, time: timeStr });
            saveHistory();
            renderHistory();

            if (input) input.value = '';

            try {
                const res = await fetch(`${ADVISORY_API}/api/chat`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: text })
                });

                if (!res.ok) throw new Error();
                const data = await res.json();
                chatHistory.push({ role: 'assistant', content: data.reply, time: timeStr });
            } catch (err) {
                // Fallback cục bộ tức thì
                let reply = `Chào bạn! Để **tạo dự án mới trên WebApp Sale**:\n1. Mở WebApp Sale ➔ Chọn menu **"Lên đơn hàng mới"** bên trái.\n2. Điền: Tên dự án, Khách hàng, Hotline, Loại sa bàn, Tỷ lệ.\n3. Bấm nút **"Tạo Đơn Hàng"** để lưu vào hệ thống!`;
                chatHistory.push({ role: 'assistant', content: reply, time: timeStr });
            } finally {
                isSending = false;
                if (submitBtn) submitBtn.disabled = false;
                if (loading) loading.style.display = 'none';
                saveHistory();
                renderHistory();
            }
        }
    };

    // Khởi tạo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWidget);
    } else {
        initWidget();
    }
})();
