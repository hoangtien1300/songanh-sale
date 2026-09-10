/**
 * Song Anh WebApp Advisory Copilot Widget (Standalone Clean Version)
 * Mặc định CHỈ HIỂN THỊ 1 ICON NHỎ ở góc dưới màn hình.
 * Khi click vào icon mới xuất hiện hộp thoại chat.
 */

(function () {
    const KNOWLEDGE_GUIDES = [
        {
            keywords: ['tạo dự án', 'thêm dự án', 'lên đơn hàng', 'tạo po', 'dự án mới', 'đơn hàng mới', 'lên đơn'],
            title: '📋 Hướng dẫn Lên Đơn Hàng / Tạo Dự Án Mới trên WebApp Sale',
            content: `Chào bạn! Để **tạo dự án / lên đơn hàng mới** trên WebApp Sale Song Anh, bạn thực hiện theo các bước sau:

### 🔹 Bước 1: Truy cập Form Tạo Đơn
- Mở **WebApp Sale Song Anh** (App_Sale_Song_Anh.html).
- Trên thanh menu bên trái, nhấp vào mục **"Lên đơn hàng mới"** (icon giỏ hàng / order).

### 🔹 Bước 2: Điền Thông Tin Đơn Hàng Dự Án
Tại bảng **"THÔNG TIN ĐƠN HÀNG DỰ ÁN MỚI"**, bạn điền đầy đủ các thông tin:
1. **TÊN DỰ ÁN (* bắt buộc):** Nhập tên rõ ràng của dự án. Ví dụ: *Mô hình Nhà máy Thép Đại Nghĩa*, *Sa bàn Quy hoạch Đô thị Sinh Thái*...
2. **LĨNH VỰC (*):** Mặc định chọn là **"Mô Hình"**.
3. **TÊN KHÁCH HÀNG / ĐỐI TÁC:** Tên công ty hoặc người liên hệ đại diện.
4. **SỐ ĐIỆN THOẠI / HOTLINE:** Số điện thoại của khách hàng để tiện chăm sóc và cập nhật Zalo.
5. **LOẠI HÌNH SA BÀN:** Chọn loại mô hình (*Quy hoạch, Nhà máy công nghiệp, Chung cư cao tầng, Biệt thự cao cấp, Nội thất...*).
6. **TỶ LỆ & KÍCH THƯỚC:** Nhập tỷ lệ mô hình (ví dụ: *1:500, 1:200, 1:100, 1:50*) và kích thước dự kiến (*Dài x Rộng mm*).
7. **TRẠNG THÁI BAN ĐẦU:** 
   - Nếu khách mới hỏi: chọn 💬 Tư vấn.
   - Nếu đang làm bảng giá: chọn 🧾 Báo giá.
   - Nếu khách đã chốt cọc: chọn 🤝 Hợp đồng.
8. **NGƯỜI PHỤ TRÁCH (SALE):** Chọn nhân sự phụ trách trực tiếp (*Sang, Tiến...*).
9. **GHI CHÚ / YÊU CẦU ĐẶC BIỆT:** Ghi rõ yêu cầu về đèn LED, hộp mica, chân đế, tiến độ giao hàng hoặc tình trạng file bản vẽ CAD/3D.

### 🔹 Bước 3: Lưu và Hoàn Tất
- Kiểm tra lại các thông tin rồi nhấn nút **"Tạo Đơn Hàng"** ở góc dưới form.
- Hệ thống sẽ tự động ghi nhận và đồng bộ trực tiếp lên Cơ sở Dữ liệu Dự Án Notion của Song Anh!

> 💡 **Mẹo:** Sau khi tạo xong, bạn có thể vào mục **"Danh Sách Dự Án"** để theo dõi và cập nhật tiến độ bất cứ lúc nào.`
        },
        {
            keywords: ['cập nhật tiến độ', 'ghi comment', 'sửa dự án', 'tiến độ dự án', 'trạng thái dự án'],
            title: '🔄 Hướng dẫn Cập Nhật Tiến Độ & Trạng Thái Dự Án',
            content: `Để **cập nhật tiến độ hoặc ghi chú thêm cho dự án**, bạn thao tác như sau:

### 🔹 Bước 1: Tìm Dự Án
- Vào menu **"Danh Sách Dự Án"** hoặc **"Theo dõi đơn hàng"**.
- Dùng ô tìm kiếm hoặc bộ lọc trạng thái để tìm đúng tên dự án cần cập nhật.

### 🔹 Bước 2: Mở Form Cập Nhật
- Nhấp vào dự án hoặc bấm nút **"Cập Nhật Tiến Độ & Ghi Comment"**.

### 🔹 Bước 3: Điều Chỉnh Thông Tin
- **Chuyển Trạng Thái:** Cập nhật trạng thái phù hợp theo diễn biến thực tế:
  - 💬 Tư vấn ➔ 🧾 Báo giá (khi đã gửi bảng dự toán).
  - 🧾 Báo giá ➔ 🤝 Hợp đồng (khi khách đồng ý chốt deal).
  - 🤝 Hợp đồng ➔ 🏗️ Đang làm (khi xưởng bắt đầu cắt laser, ráp khối, đi đèn).
  - 🏗️ Đang làm ➔ 🏆 Hoàn thành (khi đã nghiệm thu bàn giao xong).
- **Ghi chú tiến độ:** Nhập tóm tắt công việc đã làm (ví dụ: *Đã sơn xong khối kiến trúc, đang đi mạch đèn LED tầng, hẹn khách duyệt ngày 15/09*).

### 🔹 Bước 4: Nhấn Lưu Thay Đổi
- Nhấn **"Lưu Tiến Độ"** để hoàn tất.`
        },
        {
            keywords: ['báo giá', 'tạo báo giá', 'làm báo giá', 'dự toán', 'giá sa bàn'],
            title: '🧾 Hướng dẫn Sử Dụng Công Cụ Tạo Báo Giá Sa Bàn',
            content: `Để **lập một bảng báo giá sa bàn chuẩn chuyên nghiệp gửi khách hàng B2B**:

### 🔹 Bước 1: Mở Công Cụ Tạo Báo Giá
- Trên WebApp hoặc thư mục hệ thống, mở file: **CONG_CU_TAO_BAO_GIA_SONG_ANH.html**.

### 🔹 Bước 2: Nhập Thông Số Kỹ Thuật Sa Bàn
1. **Thông tin khách hàng:** Tên công ty, Người liên hệ, Dự án, Hotline.
2. **Kích thước sa bàn:** Nhập Chiều dài (m) và Chiều rộng (m) của đế sa bàn.
3. **Quy mô kiến trúc:** Số lượng block nhà, tầng cao, mật độ cảnh quan cây xanh.
4. **Hệ thống ánh sáng & phụ kiện:**
   - Hệ thống đèn LED (đèn đường, đèn khối nhà, đổi màu thông minh).
   - Chân đế khung sắt ốp gỗ MDF Melamine.
   - Hộp chụp kính cường lực hoặc mica chống bụi.

### 🔹 Bước 3: Xem & Xuất Báo Giá
- Hệ thống sẽ tự động tính toán tổng chi phí và thời gian gia công dự kiến.
- Nhấn nút **"In / Xuất PDF Báo Giá"** hoặc copy nội dung tóm tắt để gửi trực tiếp cho khách hàng qua Zalo.`
        },
        {
            keywords: ['lọc nhóm', 'nhóm facebook', 'group facebook', 'danh sách group', 'tìm nhóm'],
            title: '👥 Hướng dẫn Lọc & Tìm Kiếm Nhóm Facebook Đã Tham Gia',
            content: `Để **tra cứu và lọc danh sách các Group Facebook** để đăng bài hoặc seeding:

1. Mở **WebApp Marketing** (index.html).
2. Vào module **"Nhóm Facebook"** trên menu chính.
3. Sử dụng các bộ lọc tiện lợi:
   - **Tài khoản tham gia:** Chọn lọc theo *Fanpage* hoặc *Profile cá nhân*.
   - **Ô tìm kiếm:** Gõ từ khóa như *Kiến trúc, Xây dựng, Bất động sản, FDI, Nhà xưởng...*
4. Danh sách nhóm sẽ hiển thị: Tên nhóm, Số lượng thành viên, Trạng thái kiểm duyệt bài và nút truy cập link trực tiếp.`
        },
        {
            keywords: ['từ khóa', 'seo', 'rankmath', 'thứ hạng', 'top google', 'gsc'],
            title: '🔍 Hướng dẫn Kiểm Tra Thứ Hạng Từ Khóa SEO & Điểm RankMath',
            content: `Để **theo dõi sức khỏe SEO và thứ hạng từ khóa** trên website mohinhkientruc.org:

1. Mở **WebApp Marketing** (index.html) ➔ Chọn mục **"SEO Website"**.
2. Bảng dữ liệu sẽ cung cấp chi tiết:
   - **Từ khóa mục tiêu:** Tên từ khóa SEO chính xác.
   - **Thứ hạng Google:** Vị trí ranking hiện tại (Top 1, Top 3, Top 10...).
   - **Điểm RankMath On-Page:** Thang điểm 0 - 100 đo lường độ chuẩn SEO của bài viết.
   - **URL Bài viết:** Đường link bài viết tương ứng trên website.
3. Bạn có thể bấm các tab bộ lọc nhanh (*Top 1-3, Top 4-10, Cần tối ưu*) để lên kế hoạch bài viết cần đẩy mạnh.`
        },
        {
            keywords: ['quy chuẩn', 'hotline', 'địa chỉ', 'tên thương hiệu', 'lưu ý'],
            title: '⚠️ Quy Chuẩn Nhận Diện & Thông Tin Liên Hệ Song Anh Bắt Buộc',
            content: `Mọi nhân sự (Sang, Sale, Marketing, Kỹ thuật) khi tư vấn hoặc gửi tài liệu cho khách cần tuân thủ nghiêm ngặt các thông tin sau:

1. **Tên thương hiệu chuẩn 100%:** **Mô Hình Kiến Trúc Song Anh** (hoặc *Mô Hình Song Anh*). Tuyệt đối **KHÔNG** viết là "Song Ánh".
2. **Địa chỉ xưởng sản xuất thực tế duy nhất:** 
   👉 **230/70/28 Nguyễn Xiển, Phường Long Phước, TP. Thủ Đức, TP.HCM**.
3. **Số điện thoại Hotline chung:** **0929 22 4444** (Hotline kỹ thuật: 0981 169 200).
4. **Quy chuẩn CTA:** Không đưa tên riêng cá nhân sau chữ Hotline. Chỉ ghi chức danh kênh: 📞 Hotline/Zalo: 0929 22 4444.
5. **Định dạng ngày tháng:** Luôn hiển thị chuẩn Việt Nam: **DD/MM/YYYY**.`
        }
    ];

    function findGuide(query) {
        const q = (query || '').toLowerCase();
        let best = null;
        let maxScore = 0;
        for (const g of KNOWLEDGE_GUIDES) {
            let score = 0;
            for (const kw of g.keywords) {
                if (q.includes(kw)) score += 2;
            }
            if (score > maxScore) {
                maxScore = score;
                best = g;
            }
        }
        return best;
    }

    let chatHistory = [];
    try {
        const s = localStorage.getItem('songanh_copilot_history');
        if (s) chatHistory = JSON.parse(s);
    } catch (e) { chatHistory = []; }

    function saveHistory() {
        try { localStorage.setItem('songanh_copilot_history', JSON.stringify(chatHistory.slice(-25))); } catch(e){}
    }

    function injectStyles() {
        if (document.getElementById('songanh-copilot-style')) return;
        const style = document.createElement('style');
        style.id = 'songanh-copilot-style';
        style.textContent = `
            /* 1. Nút Icon nhỏ ở góc dưới màn hình */
            #ag-copilot-fab {
                position: fixed !important;
                bottom: 80px !important;
                right: 18px !important;
                width: 50px !important;
                height: 50px !important;
                border-radius: 50% !important;
                background: linear-gradient(135deg, #0B3C5D 0%, #0F172A 100%) !important;
                border: 2px solid #F59E0B !important;
                box-shadow: 0 4px 20px rgba(0,0,0,0.35), 0 2px 8px rgba(245,158,11,0.3) !important;
                cursor: pointer !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                z-index: 999999 !important;
                transition: transform 0.2s ease, box-shadow 0.2s ease !important;
                outline: none !important;
                user-select: none !important;
                padding: 0 !important;
            }
            #ag-copilot-fab:hover {
                transform: scale(1.1) !important;
                box-shadow: 0 6px 25px rgba(245, 158, 11, 0.6) !important;
            }
            #ag-copilot-fab:active {
                transform: scale(0.95) !important;
            }
            #ag-copilot-fab .ag-fab-icon {
                font-size: 22px !important;
                line-height: 1 !important;
            }
            #ag-copilot-fab .ag-fab-badge {
                position: absolute !important;
                top: 1px !important;
                right: 1px !important;
                width: 10px !important;
                height: 10px !important;
                background: #10B981 !important;
                border: 2px solid #0F172A !important;
                border-radius: 50% !important;
            }

            /* 2. Hộp thoại chat: MẶC ĐỊNH BỊ ẨN HOÀN TOÀN (display: none !important) */
            #ag-copilot-drawer {
                display: none !important;
                position: fixed !important;
                bottom: 85px !important;
                right: 18px !important;
                width: 420px !important;
                height: 580px !important;
                max-width: calc(100vw - 32px) !important;
                max-height: calc(100vh - 110px) !important;
                background: #0F172A !important;
                border: 1px solid rgba(245, 158, 11, 0.4) !important;
                border-radius: 18px !important;
                box-shadow: 0 12px 50px rgba(0,0,0,0.75) !important;
                z-index: 1000000 !important;
                flex-direction: column !important;
                overflow: hidden !important;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
                color: #E2E8F0 !important;
                box-sizing: border-box !important;
            }

            /* CHỈ HIỂN THỊ KHI CÓ CLASS .ag-open */
            #ag-copilot-drawer.ag-open {
                display: flex !important;
                animation: agPopup 0.22s ease-out forwards !important;
            }

            @keyframes agPopup {
                from { opacity: 0; transform: translateY(12px) scale(0.95); }
                to { opacity: 1; transform: translateY(0) scale(1); }
            }

            @media (max-width: 640px) {
                #ag-copilot-drawer {
                    top: 50px !important;
                    bottom: 80px !important;
                    left: 10px !important;
                    right: 10px !important;
                    width: auto !important;
                    height: auto !important;
                }
            }

            /* Header */
            .ag-header {
                padding: 12px 14px !important;
                background: linear-gradient(90deg, #091322 0%, #172554 100%) !important;
                border-bottom: 1px solid #1E293B !important;
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
            }
            .ag-header-info {
                display: flex !important;
                align-items: center !important;
                gap: 8px !important;
            }
            .ag-avatar {
                width: 32px !important;
                height: 32px !important;
                border-radius: 8px !important;
                background: linear-gradient(135deg, #F59E0B, #D97706) !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 16px !important;
            }
            .ag-header-title {
                font-size: 13px !important;
                font-weight: 700 !important;
                color: #FDE68A !important;
                margin: 0 !important;
            }
            .ag-header-subtitle {
                font-size: 10px !important;
                color: #94A3B8 !important;
                margin: 1px 0 0 0 !important;
            }
            .ag-close-btn {
                background: transparent !important;
                border: none !important;
                color: #94A3B8 !important;
                font-size: 18px !important;
                cursor: pointer !important;
                padding: 4px 8px !important;
                border-radius: 6px !important;
                line-height: 1 !important;
            }
            .ag-close-btn:hover {
                color: #EF4444 !important;
                background: rgba(239, 68, 68, 0.12) !important;
            }

            .ag-banner {
                padding: 6px 12px !important;
                background: rgba(245, 158, 11, 0.08) !important;
                border-bottom: 1px solid rgba(245, 158, 11, 0.15) !important;
                font-size: 10.5px !important;
                color: #FCD34D !important;
                display: flex !important;
                align-items: center !important;
                gap: 5px !important;
            }

            .ag-messages {
                flex: 1 !important;
                padding: 12px !important;
                overflow-y: auto !important;
                display: flex !important;
                flex-direction: column !important;
                gap: 10px !important;
                box-sizing: border-box !important;
            }
            .ag-welcome-box {
                background: rgba(30, 41, 59, 0.75) !important;
                border: 1px solid rgba(245, 158, 11, 0.25) !important;
                border-radius: 10px !important;
                padding: 10px 12px !important;
                font-size: 11.5px !important;
                line-height: 1.45 !important;
            }
            .ag-quick-grid {
                display: grid !important;
                grid-template-columns: 1fr 1fr !important;
                gap: 5px !important;
                margin-top: 8px !important;
            }
            @media (max-width: 480px) {
                .ag-quick-grid { grid-template-columns: 1fr !important; }
            }
            .ag-quick-btn {
                background: #1E293B !important;
                border: 1px solid #334155 !important;
                color: #F1F5F9 !important;
                padding: 6px 8px !important;
                border-radius: 6px !important;
                font-size: 10.5px !important;
                font-weight: 500 !important;
                text-align: left !important;
                cursor: pointer !important;
                transition: all 0.15s !important;
            }
            .ag-quick-btn:hover {
                background: #0B3C5D !important;
                border-color: #F59E0B !important;
                color: #FDE68A !important;
            }

            .ag-msg-user {
                align-self: flex-end !important;
                max-width: 85% !important;
                background: linear-gradient(135deg, #D97706, #B45309) !important;
                color: #FFFFFF !important;
                padding: 8px 12px !important;
                border-radius: 12px 12px 2px 12px !important;
                font-size: 11.5px !important;
                line-height: 1.45 !important;
            }
            .ag-msg-assistant {
                align-self: flex-start !important;
                max-width: 94% !important;
                background: #1E293B !important;
                border: 1px solid #334155 !important;
                color: #E2E8F0 !important;
                padding: 10px 12px !important;
                border-radius: 12px 12px 12px 2px !important;
                font-size: 11.5px !important;
                line-height: 1.55 !important;
            }
            .ag-msg-assistant h3 {
                color: #F59E0B !important;
                font-size: 13px !important;
                margin: 2px 0 6px 0 !important;
                font-weight: 700 !important;
                border-bottom: 1px solid rgba(245, 158, 11, 0.2) !important;
                padding-bottom: 3px !important;
            }
            .ag-msg-assistant h4 {
                color: #FCD34D !important;
                font-size: 11.5px !important;
                margin: 6px 0 3px 0 !important;
                font-weight: 700 !important;
            }
            .ag-msg-assistant strong { color: #FDE68A !important; }
            .ag-msg-assistant code {
                background: #091322 !important;
                color: #FCD34D !important;
                padding: 1px 5px !important;
                border-radius: 3px !important;
                font-size: 10.5px !important;
            }

            .ag-footer {
                padding: 8px 10px !important;
                background: #091322 !important;
                border-top: 1px solid #1E293B !important;
            }
            .ag-form {
                display: flex !important;
                gap: 6px !important;
                align-items: flex-end !important;
            }
            .ag-input {
                flex: 1 !important;
                background: #1E293B !important;
                border: 1px solid #334155 !important;
                color: #F8FAFC !important;
                padding: 7px 10px !important;
                border-radius: 8px !important;
                font-size: 11.5px !important;
                resize: none !important;
                outline: none !important;
                min-height: 36px !important;
                max-height: 90px !important;
                box-sizing: border-box !important;
                font-family: inherit !important;
            }
            .ag-input:focus { border-color: #F59E0B !important; }
            .ag-send-btn {
                width: 36px !important;
                height: 36px !important;
                border-radius: 8px !important;
                background: #F59E0B !important;
                border: none !important;
                color: #0F172A !important;
                font-size: 14px !important;
                font-weight: bold !important;
                cursor: pointer !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                flex-shrink: 0 !important;
            }
            .ag-send-btn:hover { background: #FBBF24 !important; }
        `;
        document.head.appendChild(style);
    }

    function initWidget() {
        if (document.getElementById('ag-copilot-container')) return;
        injectStyles();

        const container = document.createElement('div');
        container.id = 'ag-copilot-container';

        container.innerHTML = `
            <!-- 1. Chỉ hiển thị 1 icon nhỏ ở góc dưới -->
            <button id="ag-copilot-fab" onclick="window.SongAnhCopilot.toggleChat()" title="Hỏi Trợ Lý Hướng Dẫn WebApp">
                <span class="ag-fab-icon">💡</span>
                <span class="ag-fab-badge"></span>
            </button>

            <!-- 2. Hộp thoại chat (Mặc định ẩn hoàn toàn, chỉ hiện khi click) -->
            <div id="ag-copilot-drawer">
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
                        <div style="font-weight: 700; color: #FDE68A; margin-bottom: 3px;">
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

                    <div id="ag-chat-history-list" style="display: flex; flex-direction: column; gap: 8px;"></div>
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
        str = str.replace(/^>\s+(.*$)/gim, '<div style="margin: 5px 0; padding: 5px 8px; background: rgba(245,158,11,0.15); border-left: 3px solid #F59E0B; border-radius: 3px; color: #FDE68A;">$1</div>');
        str = str.replace(/^\s*[-•]\s+(.*)$/gm, '<div style="margin-left: 10px; margin-bottom: 2px;">• $1</div>');
        str = str.replace(/^\s*(\d+)\.\s+(.*)$/gm, '<div style="margin-left: 4px; margin-bottom: 3px;"><strong>$1.</strong> $2</div>');
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
                        <div style="font-size: 9.5px; opacity: 0.8; margin-bottom: 2px;">Bạn (${m.time || ''})</div>
                        <div>${m.content}</div>
                    </div>
                `;
            } else {
                html += `
                    <div class="ag-msg-assistant">
                        <div style="font-size: 9.5px; color: #F59E0B; font-weight: 700; margin-bottom: 3px;">Trợ Lý Hướng Dẫn (${m.time || ''})</div>
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
        // Toggle bật/tắt hộp chat khi click vào icon
        toggleChat: function () {
            const drawer = document.getElementById('ag-copilot-drawer');
            if (!drawer) return;
            
            const isOpen = drawer.classList.contains('ag-open');
            if (isOpen) {
                drawer.classList.remove('ag-open');
            } else {
                drawer.classList.add('ag-open');
                setTimeout(() => {
                    const input = document.getElementById('ag-copilot-input');
                    if (input) input.focus();
                }, 100);
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
            const input = document.getElementById('ag-copilot-input');
            const text = input ? input.value.trim() : '';
            if (!text) return;

            const now = new Date();
            const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

            chatHistory.push({ role: 'user', content: text, time: timeStr });
            saveHistory();
            renderHistory();

            if (input) input.value = '';

            // Tra cứu ngay lập tức trong Knowledge Base
            const guide = findGuide(text);
            let reply = '';
            if (guide) {
                reply = `## ${guide.title}\n\n${guide.content}`;
            } else {
                reply = `Chào bạn! Mình là **Trợ Lý Tư Vấn Thao Tác WebApp Song Anh**.\n\nĐối với câu hỏi: *"${text}"*:\n\nBạn có thể tham khảo các nghiệp vụ phổ biến sau:\n- **📋 Tạo dự án mới / Lên đơn:** Vào menu *Lên đơn hàng mới* ➔ Điền tên dự án, khách hàng, hotline ➔ Bấm nút *Tạo Đơn Hàng*.\n- **🔄 Cập nhật tiến độ:** Vào menu *Danh Sách Dự Án* ➔ Bấm nút *Cập nhật tiến độ & ghi comment*.\n- **🧾 Tạo báo giá sa bàn:** Mở công cụ *CONG_CU_TAO_BAO_GIA_SONG_ANH.html*.\n- **👥 Lọc nhóm Facebook:** Vào mục *Nhóm Facebook* trên WebApp Marketing.`;
            }

            chatHistory.push({ role: 'assistant', content: reply, time: timeStr });
            saveHistory();
            renderHistory();
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWidget);
    } else {
        initWidget();
    }
})();
