
    // 0. ENVIRONMENT & API CONFIGURATION
    const API_BASE = (window.location.protocol === 'file:' || (window.location.hostname === 'localhost' && window.location.port !== '8787'))
        ? 'https://songanh-sale.phamhoangtien1300.workers.dev'
        : '';

    // 1. PIPELINE DATA
    let pipelineData = [
    {
        "id": "38c4b5e7-3d90-80f1-ac6f-dff3b760b73d",
        "name": "Sửa chữa điện sa bàn trường học",
        "date": "26/09/2026",
        "rawDate": "2026-09-26",
        "nhacHen": "2026-09-26",
        "ngayLienHe": "2026-06-27",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "30/06 Đã gửi báo giá ⇒ Chờ khách phản hồi",
        "isPotential": false,
        "category": "Sửa chữa - Vệ sinh"
    },
    {
        "id": "3974b5e7-3d90-807e-aa47-ce4b3f9aa8b2",
        "name": "Mô hình TRẠI GIAM CHÂU BÌNH - K20 - Mr. Lương Hồng Huy",
        "date": "19/09/2026",
        "rawDate": "2026-09-19T13:50:00.000+07:00",
        "nhacHen": "2026-09-19T13:50:00.000+07:00",
        "ngayLienHe": "2026-06-23",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Tiến",
        "note": "23/7 Bên phía CĐT đang làm kế hoạch kinh phí",
        "isPotential": false,
        "category": "Khác"
    },
    {
        "id": "3984b5e7-3d90-806e-81da-d22738d76650",
        "name": "Sửa điện sa bàn Nam Ô - Trung Thủy Group",
        "date": "19/09/2026",
        "rawDate": "2026-09-19",
        "nhacHen": "2026-09-19",
        "ngayLienHe": "2026-07-08",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Anh Tiến",
        "note": "16/7 Đã gửi báo giá sửa chữa đợi khách phản hồi
20/7 Khách phản hồi “Chưa giải trình em lúc nào bên anh sếp duyệt anh báo nhé”",
        "isPotential": false,
        "category": "Sửa chữa - Vệ sinh"
    },
    {
        "id": "3ba4b5e7-3d90-80cd-b6b7-f6ae22d0335e",
        "name": "Sa Bàn Khu Công Nghiệp IA-GRAI  + MR Đăng",
        "date": "14/09/2026",
        "rawDate": "2026-09-14T17:00:00.000+07:00",
        "nhacHen": "2026-09-14T17:00:00.000+07:00",
        "ngayLienHe": "2026-08-11",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo Tiến",
        "note": "Hồ sơ:
- 12/08 Đã gửi báo giá

Kỹ thuật:
- 

Thanh toán:
-",
        "isPotential": false,
        "category": "Quy hoạch"
    },
    {
        "id": "3bb4b5e7-3d90-8026-8d97-c05c7d167767",
        "name": "Sửa chữa và bổ sung sa bàn VSIP 1 - Quảng Ngãi - Chị Ánh",
        "date": "14/09/2026",
        "rawDate": "2026-09-14T13:30:00.000+07:00",
        "nhacHen": "2026-09-14T13:30:00.000+07:00",
        "ngayLienHe": "2026-08-11",
        "stage": "danglam",
        "stageLabel": "🏗️ Đang làm",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Khách cũ, chị Ánh liên hệ lại",
        "note": "Hồ sơ:
- 18/08 Đã gửi báo giá

Kỹ thuật:
-

Thanh toán:
-",
        "isPotential": true,
        "category": "Sửa chữa - Vệ sinh"
    },
    {
        "id": "3d94b5e7-3d90-81ea-9024-ed59b7601599",
        "name": "Mô Hình Cao Tầng - Anh Phú",
        "date": "14/09/2026",
        "rawDate": "2026-09-14T09:00:00.000+07:00",
        "nhacHen": "2026-09-14T09:00:00.000+07:00",
        "ngayLienHe": "2026-09-12",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Số Tiến",
        "note": "Đang tư vấn khách",
        "isPotential": false,
        "category": "Mô hình kiến trúc"
    },
    {
        "id": "3d94b5e7-3d90-81f8-aa71-c30475325eb0",
        "name": "Khu nhà Chung cư Phú An Thạnh",
        "date": "14/09/2026",
        "rawDate": "2026-09-14T09:00:00.000+07:00",
        "nhacHen": "2026-09-14T09:00:00.000+07:00",
        "ngayLienHe": "2026-09-04",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp",
        "note": "Đang làm hồ sơ báo giá",
        "isPotential": false,
        "category": "Mô hình kiến trúc"
    },
    {
        "id": "3d94b5e7-3d90-81b5-b09a-f5fa6c95a2ba",
        "name": "Mô hình nhà ở cao cấp Ciri",
        "date": "14/09/2026",
        "rawDate": "2026-09-14T09:00:00.000+07:00",
        "nhacHen": "2026-09-14T09:00:00.000+07:00",
        "ngayLienHe": "2026-09-04",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp",
        "note": "Đã gửi báo giá",
        "isPotential": false,
        "category": "Mô hình kiến trúc"
    },
    {
        "id": "3d74b5e7-3d90-8129-9789-e378720ef00a",
        "name": "Mô hình sản phẩm nội thất - Ms Vy",
        "date": "14/09/2026",
        "rawDate": "2026-09-14T09:00:00.000+07:00",
        "nhacHen": "2026-09-14T09:00:00.000+07:00",
        "ngayLienHe": "2026-09-10",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Song Anh Shop",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Mô hình nội thất"
    },
    {
        "id": "3d74b5e7-3d90-81e3-9282-e5d3c55c2344",
        "name": "Thiết kế nhà xưởng ziehl Abegg Việt Nam - Ms Denny",
        "date": "14/09/2026",
        "rawDate": "2026-09-14T09:00:00.000+07:00",
        "nhacHen": "2026-09-14T09:00:00.000+07:00",
        "ngayLienHe": "2026-09-10",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Khác"
    },
    {
        "id": "3d24b5e7-3d90-81b5-995b-d96758220414",
        "name": "Sửa chữa mô hình kiến trúc + Chị Lan",
        "date": "14/09/2026",
        "rawDate": "2026-09-14T09:00:00.000+07:00",
        "nhacHen": "2026-09-14T09:00:00.000+07:00",
        "ngayLienHe": "2026-09-03",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp",
        "note": "Nguồn từ Sếp, giao Sang theo và tư vấn",
        "isPotential": false,
        "category": "Sửa chữa - Vệ sinh"
    },
    {
        "id": "3d24b5e7-3d90-8175-a844-d0ed5d9d5354",
        "name": "Mô hình Khu nhà ở cao cấp Ciri - Sơn Đồng, Hà Nội + PHẠM THỊ BÍCH HƯỜNG",
        "date": "14/09/2026",
        "rawDate": "2026-09-14T09:00:00.000+07:00",
        "nhacHen": "2026-09-14T09:00:00.000+07:00",
        "ngayLienHe": "2026-09-04",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Hotline Sếp",
        "note": "Hồ sơ:
  • Đã gửi báo giá qua mail 07/09
Kỹ thuật:
  • Khách có file 3D và 2D nhưng còn chỉnh sửa thêm
Thanh toán:",
        "isPotential": false,
        "category": "Cao tầng"
    },
    {
        "id": "3a14b5e7-3d90-80ad-8a10-c830ab8517d9",
        "name": "Dự án EZ Land - Bản đồ treo tường - VEMC LAND",
        "date": "14/09/2026",
        "rawDate": "2026-09-14T09:00:00.000+07:00",
        "nhacHen": "2026-09-14T09:00:00.000+07:00",
        "ngayLienHe": "2026-04-09",
        "stage": "danglam",
        "stageLabel": "🏗️ Đang làm",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Khách cũ anh Dũng làm thêm",
        "note": "Hồ sơ
  • Đã nhận hợp đồng 24/07
Kỹ thuật
  • 24/08 Triển khai được 70% mô hình",
        "isPotential": false,
        "category": "Khác"
    },
    {
        "id": "3984b5e7-3d90-809f-8a2e-d8126a88030c",
        "name": "MÔ HÌNH CUNG CƯ NHÀ Ở XÃ HỘI THANH BÌNH",
        "date": "14/09/2026",
        "rawDate": "2026-09-14T09:00:00.000+07:00",
        "nhacHen": "2026-09-14T09:00:00.000+07:00",
        "ngayLienHe": "2026-07-09",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp",
        "note": "Đã gửi báo giá chờ phản hồi
Qua tuần cập nhật thông tin dự án với khách
28/07 Có nhắn hỏi thăm tiến độ ⇒ Khách chưa có thông tin gì mới",
        "isPotential": false,
        "category": "Cao tầng"
    },
    {
        "id": "34f4b5e7-3d90-80d3-9a44-c52fdad08358",
        "name": "Dự án cao tầng TVP - EZ Land - VEMC LAND",
        "date": "14/09/2026",
        "rawDate": "2026-09-14T09:00:00.000+07:00",
        "nhacHen": "2026-09-14T09:00:00.000+07:00",
        "ngayLienHe": "2026-04-27",
        "stage": "danglam",
        "stageLabel": "🏗️ Đang làm",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Anh Tiến",
        "note": "Hồ sơ:
  • Bục gỗ đã đặt 10/7 ⇒ Cuối tháng giao
  • Kính đã đặt ngày 13/7. Cuối tháng giao
Kỹ thuật:
  • Nhóm Thế Anh đang triển khai
Thanh toán:
  •",
        "isPotential": false,
        "category": "Cao tầng"
    },
    {
        "id": "31e4b5e7-3d90-8080-b272-f7cbb16cbd5f",
        "name": "Sa bàn cao tầng The Westique Residences và 02 Mô Hình Treo Tường",
        "date": "14/09/2026",
        "rawDate": "2026-09-14T09:00:00.000+07:00",
        "nhacHen": "2026-09-14T09:00:00.000+07:00",
        "ngayLienHe": "2026-03-09",
        "stage": "thanhtoan",
        "stageLabel": "💸 Thanh toán",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp",
        "note": "Hồ sơ: 
  • 21/04 Đã nhận hợp đồng và tạm ứng
  • 18/05 Đã nhận phụ lục mô hình treo tường và tạm ứng
  • Đã gửi HSTT đợt 2 
  • Đã gửi HSTT đợt 3
  • 11/06 Đã hoàn tất lắp đặt
  • 25/07 Đã gửi bổ sung hồ sơ (giấy bàn giao, giấy cam kết bảo hành)
  • 03/08 Đã gửi bảo hành cho khách",
        "isPotential": false,
        "category": "Cao tầng"
    },
    {
        "id": "3cd4b5e7-3d90-8032-81a5-e80b991d7455",
        "name": "THAY ĐỔI NỀN SA BÀN DỰ ÁN Khải Hoàn Prime",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-27",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Khách hàng cũ liên hệ",
        "note": "Hồ sơ:
- Đã ký và gửi hợp đồng 
Kỹ thuật:
- 

Thanh toán:
  • Đã tạm ứng lần 1",
        "isPotential": true,
        "category": "Quy hoạch"
    },
    {
        "id": "3cc4b5e7-3d90-800b-bb24-c4bb00f35f2f",
        "name": "MÔ HÌNH PHÂN KHU 1_DỰ ÁN KHU ĐÔ THỊ PHỨC HỢP GA THỦ THIÊM - Sơn Kim Land",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-26",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp Thiện",
        "note": "Hồ sơ:
- 29/08 Đã gửi báo giá
  • Đề xuất 10% hoa hồng cho anh Quỳnh
Kỹ thuật:
- 

Thanh toán:",
        "isPotential": false,
        "category": "Cao tầng"
    },
    {
        "id": "3cc4b5e7-3d90-801d-b124-f04aaec3a819",
        "name": "Mô hình dự án - Tam Nguyen",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-29",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp Thiện",
        "note": "Hồ sơ:
  • 31/08 Đã gửi báo giá
  • Đề xuất gửi 5% hoa hồng cho anh Tâm

Kỹ thuật:
- 

Thanh toán:",
        "isPotential": false,
        "category": "Cao tầng"
    },
    {
        "id": "3cb4b5e7-3d90-8087-9b01-d7facf649e0e",
        "name": "Sa Bàn Dự Án ICONIA 85 - Lạng Sơn",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-25",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp",
        "note": "Hồ sơ:
  • 29/08 Đã gửi báo giá
  • Đề xuất 10% hoa hồng cho anh Quỳnh ⇒ Giảm thẳng vào báo giá
Kỹ thuật:
- 

Thanh toán:
-",
        "isPotential": true,
        "category": "Cao tầng"
    },
    {
        "id": "3cb4b5e7-3d90-808e-8a4c-d2ef60dc5500",
        "name": "Mô Hình Nội thất - Ms Hồng Phúc",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-20",
        "stage": "danglam",
        "stageLabel": "🏗️ Đang làm",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Hotline Sếp",
        "note": "Hồ sơ:
  • Hợp đồng số 01 đã ký và gửi đi
  • Hợp đồng số 02 đang trình ký sếp
Kỹ thuật:
  • Nhóm anh Huynh đang triển khai HĐ số 01
  • Nhóm anh Hiển dự kiến giao cho HĐ số 02
Thanh toán:
  • HĐ số 01: đã tạm ứng lần 01 nhưng thiếu 800.000 đ
  • HĐ số 02: Đã tạm ứng lần 01",
        "isPotential": false,
        "category": "Nội thất"
    },
    {
        "id": "3c44b5e7-3d90-80ad-bbe5-c3d6cf8b8eb2",
        "name": "Mô hình PCCC - Anh Thành",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-22",
        "stage": "thanhtoan",
        "stageLabel": "💸 Thanh toán",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Hotline Sếp",
        "note": "Hồ sơ:
  • Đã ký hợp đồng điện tử
Kỹ thuật:
  • Đang triển khai chốt 01/09 xong
Thanh toán:
  • Đã thanh toán đợt 1 50%",
        "isPotential": false,
        "category": "Khác"
    },
    {
        "id": "3c44b5e7-3d90-80ef-9dd3-ee091ed3bbea",
        "name": "Mô hình Chung Cư Legacy - Ms Thư Phạm",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-22",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Hotline Sếp",
        "note": "Hồ sơ:
  • Đã gửi báo giá đề xuất 10% hoa hồng cho chị Thư
Kỹ thuật:
  • Có file 3D
Thanh toán:",
        "isPotential": true,
        "category": "Cao tầng"
    },
    {
        "id": "3c44b5e7-3d90-80c6-81da-dd806ea69bed",
        "name": "MÔ HÌNH KHU DÂN CƯ DUYÊN KHÁNH + Ms Trang",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-22",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sale (1) 0386989087",
        "note": "Hồ sơ:
  • Đã gửi báo giá 22/08
Kỹ thuật:
  • có file cad mb toàn khu
Thanh toán:",
        "isPotential": true,
        "category": "Quy hoạch"
    },
    {
        "id": "3c44b5e7-3d90-803b-ac88-e27eb4fbe5f3",
        "name": "MÔ HÌNH NHÀ MÁY MURATA  + MR Sơn",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-22",
        "stage": "hopdong",
        "stageLabel": "🤝 Hợp đồng",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sale (1) 0386989087",
        "note": "Hồ sơ:
  • 25/08 Đã gửi báo giá đề xuất hoa hồng 10% cho anh Sơn
  • Đang đợi khách ký hợp đồng gửi về.
Kỹ thuật:
  • Có file 3D
Thanh toán:",
        "isPotential": true,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "3bf4b5e7-3d90-8071-a069-c81734bb77b0",
        "name": "Bất động sản Filmore - Kim Yến",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-17",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo Tiến",
        "note": "Hồ sơ:
- 29/08 Qua lễ 02/09 khách phản hồi

Kỹ thuật:
-

Thanh toán:
-",
        "isPotential": false,
        "category": "Cao tầng"
    },
    {
        "id": "3bf4b5e7-3d90-80ee-a020-f0bd6e675709",
        "name": "Mô hình cảng Long Sơn - Ngọc Phước",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-17",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo kế toán",
        "note": "Hồ sơ:
- 18/08 Đã gửi báo giá

Kỹ thuật:
-

Thanh toán:
-",
        "isPotential": false,
        "category": "Khác"
    },
    {
        "id": "3bf4b5e7-3d90-80c0-8fa7-e993b56e0b27",
        "name": "Sa bàn chung cư Phú Đông 6 - Mr Trung Him Lam",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-17",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Khách cũ liên hệ",
        "note": "Đang tư vấn chốt layout và kích thước với anh Trung",
        "isPotential": true,
        "category": "Cao tầng"
    },
    {
        "id": "3bd4b5e7-3d90-80d4-9cd9-f7822f0e4ad1",
        "name": "Thành Phố Cà Phê - Trung Nguyên - Ms Diễm My",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-15",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo Tiến",
        "note": "Đang hỏi xin thêm file CAD layout mặt bằng",
        "isPotential": false,
        "category": "Quy hoạch"
    },
    {
        "id": "3bc4b5e7-3d90-8016-bae3-fa3a136d0f66",
        "name": "DIAMOND HOME - N.H.O - MR THỐNG - LONG XUYÊN",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-04",
        "stage": "danglam",
        "stageLabel": "🏗️ Đang làm",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo Tiến",
        "note": "Hồ sơ:
- 14/08 Đang triển khai hợp đồng
Kỹ thuật:
  • Có file 3D
  • Đang triển khai sơ bộ được 03 khối cao tầng
Thanh toán:
- đã tạm ứng lần 01",
        "isPotential": false,
        "category": "Sửa chữa - Vệ sinh"
    },
    {
        "id": "3ba4b5e7-3d90-809e-926e-f1ae07e91ac1",
        "name": "MÔ HÌNH MÓC KHÓA NHỎ  + MR MINH TÚ",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-12",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo Sang",
        "note": "Hồ sơ:
- 11/08 Đang hỏi thêm thông tin file 3D

Kỹ thuật:
  • 
Thanh toán:
-",
        "isPotential": false,
        "category": "Khác"
    },
    {
        "id": "3b54b5e7-3d90-8036-8160-c2febe324bbb",
        "name": "Mô hình nhà máy - Ms Mỹ Hòa",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-06",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo Tiến",
        "note": "Đã trao đổi thông tin đợi khách gửi bản vẽ",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "3b44b5e7-3d90-8036-b1e3-fdb985210bad",
        "name": "Mô hình tại Bà Rịa - Mr. Duy Thắng",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-06",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo Tiến",
        "note": "Hồ sơ:
  • 08/08 Đã gửi báo giá đợi khách phản hồi
Kỹ thuật:
  • 
Thanh toán:
  •",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "3b24b5e7-3d90-8007-b738-fac4fea38677",
        "name": "Cát Mộc Group | Ms Huyền Anh",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-04",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Fanpage Mô hình kiến trúc Song Anh",
        "note": "Đã triển khai báo giá sơ bộ gửi khách ⇒ Khách chưa phản hồi lại",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "3b24b5e7-3d90-80ac-9116-eedc99bc3779",
        "name": "MÔ HÌNH TÀU ĐIỆN TL 1/150 + MR ĐỨC TUẤN",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-08-03",
        "stage": "thanhtoan",
        "stageLabel": "💸 Thanh toán",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo Sang",
        "note": "Hồ sơ:
  • 11/08 Đã gửi báo giá
  • 24/08 Hợp đồng khách chưa chốt ký
Kỹ thuật:
  • 28/08 đã hoàn tất bàn giao
Thanh toán:
  • 11/08 khách thanh toán tạm ứng lần 1 qua tk cá nhân
  • 28/08 bàn giao vận chuyển thanh toán tk cá nhân lần 02",
        "isPotential": false,
        "category": "Khác"
    },
    {
        "id": "3ae4b5e7-3d90-8001-9856-d97cffb30339",
        "name": "Mô hình nội thất - LG - Ms Ngọc Tuyền",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-07-31",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo Sang",
        "note": "Đã gửi báo giá cho khách ⇒ Khách chưa phản hồi",
        "isPotential": false,
        "category": "Nội thất"
    },
    {
        "id": "3ae4b5e7-3d90-8009-aeb3-f2df7cff25bb",
        "name": "MÔ HÌNH KIẾN TRÚC + MS THÚY HẰNG",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-07-31",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo Sang",
        "note": "08/08 Đợi khách gửi file để tổng hợp báo giá",
        "isPotential": false,
        "category": "Cao tầng"
    },
    {
        "id": "3aa4b5e7-3d90-8092-8b04-cc62efa566a7",
        "name": "Mô hình cảng Hưng Thái - VINA LOGISTICS - Ms. Trang",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-07-27",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo Tiến",
        "note": "31/07 Đã gửi báo giá đợi khách trình sếp
03/08 Đã gọi điện (đề xuất với khách 10% hoa hồng)
08/08 Có nhắn hỏi tiến độ dự án ⇒ đợi khách phản hồi",
        "isPotential": false,
        "category": "Khác"
    },
    {
        "id": "3a54b5e7-3d90-8046-b504-e6faf425990e",
        "name": "MÔ HÌNH NOXH THE ORI PHƯƠNG MAI - TÂY NINH",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-07-22",
        "stage": "hopdong",
        "stageLabel": "🤝 Hợp đồng",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo Hào",
        "note": "Hồ sơ:
- 09/09 Đang triển khai hồ sơ hợp đồng
Kỹ thuật:
-
Thanh toán:
-",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "3a44b5e7-3d90-8057-9d8f-dfb167f7988a",
        "name": "Mô hình Bình Vaccine - Chị Nga Huỳnh",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-07-20",
        "stage": "danglam",
        "stageLabel": "🏗️ Đang làm",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo Sang",
        "note": "Hồ sơ:
  • Đã làm hợp đồng ký điện tử
Kỹ thuật:
  • Đã có sẵn file 3D
  • Đang triển khai
Thanh toán:
  • Tạm ứng lần 01",
        "isPotential": true,
        "category": "Kiến trúc"
    },
    {
        "id": "39f4b5e7-3d90-8002-bc5c-eedf13ceae10",
        "name": "MÔ HÌNH NHÀ MÁY MÔNG DƯƠNG 2",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-07-15",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Tiến",
        "note": "Hồ sơ:
  • Đã gửi báo giá
  • Khách đang lên hồ sơ triển khai
Kỹ thuật:
  • 
Thanh toán:
  •",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "3984b5e7-3d90-80ac-a4df-d2f1699309b1",
        "name": "Sửa chữa sa bàn Gamuda Land - Ms Ngọc Ruby",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-07-08",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo Hào",
        "note": "08/08 Đã gọi điện trao đổi lại với chị về dự án, đợi chị cập nhật lại thông tin",
        "isPotential": false,
        "category": "Sửa chữa - Vệ sinh"
    },
    {
        "id": "3934b5e7-3d90-80e4-8055-d50900644bae",
        "name": "Mô hình chuỗi cung ứng",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-07-02",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Anh Tiến",
        "note": "Sang theo
08/08 chưa có thông tin mới",
        "isPotential": false,
        "category": "Khác"
    },
    {
        "id": "3924b5e7-3d90-8089-864b-f57a3656e552",
        "name": "Sa bàn bảo tàng thế giới cà phê",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-07-03",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Anh Tiến",
        "note": "09/08 Chờ khách gửi file",
        "isPotential": false,
        "category": "Khác"
    },
    {
        "id": "3914b5e7-3d90-8045-b644-c81928cb668b",
        "name": "Sa bàn khu di tích Óc Eo",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-07-02",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp",
        "note": "03/07 Đã gửi báo giá ⇒ Chờ khách phản hồi",
        "isPotential": false,
        "category": "Quân sư"
    },
    {
        "id": "3904b5e7-3d90-8091-b183-f65c1cade6ae",
        "name": "DỰ ÁN QH KHU NHÀ Ở TIẾN PHƯỚC LÔ SỐ 1",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-06-25",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Tiến",
        "note": "12/7 Khách phản hồi “đang gửi cho bên quản lý thiết kế review giá, có gì e báo lại mình sớm”",
        "isPotential": false,
        "category": "Quy hoạch"
    },
    {
        "id": "38e4b5e7-3d90-8095-9417-c745a2f3ff7f",
        "name": "Sa bàn dự án Lancaster Lincoln - Trung Thủy Group",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-06-24",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp",
        "note": "01/07 Đã gửi báo giá ⇒ Chờ khách phản hồi",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "38c4b5e7-3d90-808f-a6e2-fa4c74555bf9",
        "name": "Mô hình nhà máy Vĩnh Phúc",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-06-24",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Anh Tiến",
        "note": "25/06 Đã gửi báo giá ⇒ Chờ khách phản hồi",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "3894b5e7-3d90-80b1-8ca8-e5c739ad928c",
        "name": "Sa bàn nhà máy Alumin Bình Phước",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-06-24",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp",
        "note": "08/08 Có nhắc khách review phương án triển khai báo giá nhưng khách chưa phản hồi",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "3704b5e7-3d90-80d0-a736-c765aee45ad3",
        "name": "Sa bàn nhà máy HUIDA",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-05-27",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Anh Tiến",
        "note": "03/06 Đã gửi báo giá và đề xuất 5% hoa hồng cho anh Mạnh Vũ ⇒ Chờ khách phản hồi
09/06 Khách báo đã trình báo giá ⇒ Chờ bên Trung Quốc về VN sẽ họp triển khai
23/07 Đã nhắn tin hỏi tiến độ dự án, khách chưa phản hồi
03/08 Khách không phản hồi",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "3604b5e7-3d90-8059-b42e-e354e75c420c",
        "name": "Sa bàn KCN Trấn Dương - CCN Cửa Hoạt",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-05-13",
        "stage": "hopdong",
        "stageLabel": "🤝 Hợp đồng",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp",
        "note": "02/06 Đã gửi hợp đồng ⇒ Chờ khách trình ký và tạm ứng
25/06 Đã nhắc lại ⇒ Khách phản hồi chờ sếp đi công tác về ký
25/07 Khách chưa phản hồi về hợp đồng, Qua tuần nhắc khách
08/08 Đã nhắc khách nhưng chưa có phản hồi",
        "isPotential": false,
        "category": "KCN"
    },
    {
        "id": "34b4b5e7-3d90-8079-b244-e4788f33f3e4",
        "name": "Làm mới 3 Block cao tầng Dự án Khải Hoàn Prime",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-04-23",
        "stage": "thanhtoan",
        "stageLabel": "💸 Thanh toán",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp",
        "note": "• Anh Nhã đang làm hồ sơ thanh toán gộp đợt 2 - 3 
  • Chờ gửi hstt đợt 2-3 và hstt vệ sinh thay đèn
  • 25/07 gửi hồ sơ bổ sung để tiến hành thanh toán đợt 2 - 3
  • Đã thanh toán và gửi lại hồ sơ, Đợi bên mình bổ sung thêm cam kết bảo hành
  • Đã gửi bổ sung giấy cam kết bảo hành 08/03",
        "isPotential": false,
        "category": "Cao tầng"
    },
    {
        "id": "33d4b5e7-3d90-80f7-9bae-c3a45da2da08",
        "name": "03 mô hình cao tầng Monochrome - Viet Capital",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2026-04-09",
        "stage": "thanhtoan",
        "stageLabel": "💸 Thanh toán",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Khách liên hệ Hào",
        "note": "Hồ sơ:
  • Đã gửi HSTT đợt 2
 Kỹ thuật:
  • 03/06 Đã hoàn tất lắp đặt bàn giao",
        "isPotential": false,
        "category": "Cao tầng"
    },
    {
        "id": "2b24b5e7-3d90-8090-9127-c8313ac8b674",
        "name": "Sửa chữa sa bàn Swanbay | T11/2025",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2025-11-01",
        "stage": "danglam",
        "stageLabel": "🏗️ Đang làm",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Khách hàng cũ",
        "note": "Hồ sơ:
  • 25/08 chưa ký nghiệm thu do còn hạng mục decal chưa chọn được mẫu dán",
        "isPotential": false,
        "category": "Sửa chữa - Vệ sinh"
    },
    {
        "id": "1ad4b5e7-3d90-80f3-88a9-d9cecbb6ec6d",
        "name": "Mô hình Mobifone - Chị Trang",
        "date": "14/09/2026",
        "rawDate": "2026-09-14",
        "nhacHen": "2026-09-14",
        "ngayLienHe": "2025-03-04",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp",
        "note": "05/08 Đã cập nhật lại thông tin báo giá với chị đợi phản hồi",
        "isPotential": false,
        "category": "Khác"
    },
    {
        "id": "3aa4b5e7-3d90-80c8-922b-c8f484583649",
        "name": "Mô hình thiết bị tại Hà Nội - Ms. Thúy Nhi",
        "date": "13/09/2026",
        "rawDate": "2026-09-13T10:00:00.000+07:00",
        "nhacHen": "2026-09-13T10:00:00.000+07:00",
        "ngayLienHe": "2026-07-27",
        "stage": "danglam",
        "stageLabel": "🏗️ Đang làm",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo Tiến",
        "note": "Hồ sơ:
- 07/08 Nhận được hợp đồng khách ký

Kỹ thuật:
- 25/08 Hoàn thành 70% đơn hàng

Thanh toán:
- khách đã thanh toán tạm ứng lần 1",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "39f4b5e7-3d90-80a2-adda-c5c3db22c721",
        "name": "Mô hình nhà máy - Mr Võ Anh Tuấn",
        "date": "12/09/2026",
        "rawDate": "2026-09-12T15:00:00.000+07:00",
        "nhacHen": "2026-09-12T15:00:00.000+07:00",
        "ngayLienHe": "2026-07-16",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "29/7 Khách báo hôm nay họp với CĐT để trình các phương án, nếu cần tư vấn thêm thì CĐT sẽ liên hệ trực tiếp với bên mình",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "3a44b5e7-3d90-80a0-b329-fe4e4f2826f9",
        "name": "Vận chuyển - Sun Casa Square - VSIP - Mr. Kiện Vương",
        "date": "12/09/2026",
        "rawDate": "2026-09-12T13:51:00.000+07:00",
        "nhacHen": "2026-09-12T13:51:00.000+07:00",
        "ngayLienHe": "2026-07-21",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Khách cũ liên hệ",
        "note": "Hồ sơ:
  • 21/07 Đã gửi báo giá cho khách ⇒ Đợi khách phản hồi
  • Thời gian dự kiến giữa T8 làm",
        "isPotential": false,
        "category": "Vận chuyển"
    },
    {
        "id": "3d94b5e7-3d90-81a6-b241-cfd6da461b15",
        "name": "Mô hình Nhà Thờ - Anh Danthu",
        "date": "12/09/2026",
        "rawDate": "2026-09-12T09:00:00.000+07:00",
        "nhacHen": "2026-09-12T09:00:00.000+07:00",
        "ngayLienHe": "2026-09-12",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Số Sang",
        "note": "Đang đợi làm báo giá",
        "isPotential": false,
        "category": "Mô hình quy hoạch"
    },
    {
        "id": "3a64b5e7-3d90-8008-a1c3-fc8de1f49bb7",
        "name": "Nhà máy In Bao Bì Nhựa Liksin - Ms Ngọc Bích",
        "date": "12/09/2026",
        "rawDate": "2026-09-12T09:00:00.000+07:00",
        "nhacHen": "2026-09-12T09:00:00.000+07:00",
        "ngayLienHe": "2026-07-23",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Zalo Tiến",
        "note": "24/7 Khách chưa có thông tin đầy đủ ⇒ Đang tư vấn xin thêm thông tin",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "3854b5e7-3d90-802c-a45c-d6874ae75731",
        "name": "Mô hình dự án Kompong Dewa",
        "date": "12/09/2026",
        "rawDate": "2026-09-12T09:00:00.000+07:00",
        "nhacHen": "2026-09-12T09:00:00.000+07:00",
        "ngayLienHe": "2026-06-17",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Anh Tiến",
        "note": "6/8 đã phản hồi khách tự làm việc phần thiết kế với team và cho thông tin thực hiện sa bàn.  Vì khoảng cách xa nên khảo sát sẽ tốn nhiều chi phí và thời gian thực hiện ⇒ Đợi phản hồi",
        "isPotential": false,
        "category": "Quy hoạch"
    },
    {
        "id": "32f4b5e7-3d90-80ab-8915-dee2f17b4d86",
        "name": "Sa bàn nhà máy thép - Tôn Hoa Sen",
        "date": "12/09/2026",
        "rawDate": "2026-09-12T09:00:00.000+07:00",
        "nhacHen": "2026-09-12T09:00:00.000+07:00",
        "ngayLienHe": "2026-03-26",
        "stage": "danglam",
        "stageLabel": "🏗️ Đang làm",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Anh Tiến",
        "note": "20/08 khách đã chốt và duyệt thiết kế và cần bào giá thic ông bằng vật liệu tôn Hoa Sen cung cấp",
        "isPotential": false,
        "category": "Thiết kế"
    },
    {
        "id": "37d4b5e7-3d90-80c9-963c-e39a34d3be3e",
        "name": "Sa bàn trụ sở Cục CN An Ninh Đông Anh - Hà Nội",
        "date": "11/09/2026",
        "rawDate": "2026-09-11T14:00:00.000+07:00",
        "nhacHen": "2026-09-11T14:00:00.000+07:00",
        "ngayLienHe": "2026-06-09",
        "stage": "thanhtoan",
        "stageLabel": "💸 Thanh toán",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Anh Tiến",
        "note": "Hồ sơ:
  • Đã gửi báo giá phát sinh ⇒ Đợi khách phản hồi
  • Dự án có ký bảo mật nên không được phát tán
Kỹ thuật:
  • Khách đã ký nghiệm thu và có yêu cầu báo giá thêm phần phát sinh cho giai đoạn 2 ⇒ Đợi khách
  • Kính và gỗ đã đặt ⇒ đã giao.
  • Đợi khách gửi file logo báo giá làm thêm
Thanh toán
  • Khách đã thanh toán đợt 1/2.
  • Đợi kỹ thuật hoàn thành nghiệm thu tại xưởng gửi DNTT đợt 2 ⇒ Đã làm sẵn DNTT đợt 2",
        "isPotential": false,
        "category": "Quy hoạch"
    },
    {
        "id": "3914b5e7-3d90-804b-bb76-c38d5bdc2179",
        "name": "Sa bàn nhà máy Makita - Toda",
        "date": "11/09/2026",
        "rawDate": "2026-09-11T11:00:00.000+07:00",
        "nhacHen": "2026-09-11T11:00:00.000+07:00",
        "ngayLienHe": "2026-07-02",
        "stage": "thanhtoan",
        "stageLabel": "💸 Thanh toán",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Khách cũ liên hệ Hào",
        "note": "Hồ sơ:
  • 12/8 đã nhận file cứng HĐ
Kỹ thuật:
  • Kỹ thuật đang triển khai
  • Kính và bục gỗ đã giao
Thanh toán
  • Khách đã thanh toán tạm ứng",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "3724b5e7-3d90-802e-acc3-d1826191a3f0",
        "name": "KCN Trần Anh Tân Phú - Bối Phạm",
        "date": "11/09/2026",
        "rawDate": "2026-09-11T09:30:00.000+07:00",
        "nhacHen": "2026-09-11T09:30:00.000+07:00",
        "ngayLienHe": "2026-06-01",
        "stage": "danglam",
        "stageLabel": "🏗️ Đang làm",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Khách cũ Cty Trần Anh liên hệ",
        "note": "Hồ sơ:
  • Đã nhận được HĐ.
Kỹ thuật:
  • Khách gửi file và chốt layout thi công cuối cùng vào ngày 8/8 ⇒ Tiến độ độ dự án đã đạt 50%
  • Đã đặt bục gỗ anh Vũ ⇒ 24/8 giao
  • 22/8 Đã giao kính
Thanh toán
  • Đã tạm ứng đợt 1",
        "isPotential": false,
        "category": "KCN"
    },
    {
        "id": "3d94b5e7-3d90-8188-aa5b-f91697360230",
        "name": "Mô Hình Nội Thất Showroom - Chị Vi Vi",
        "date": "11/09/2026",
        "rawDate": "2026-09-11T09:00:00.000+07:00",
        "nhacHen": "2026-09-11T09:00:00.000+07:00",
        "ngayLienHe": "2026-09-11",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Chị Thuỷ",
        "note": "Đợi làm báo giá",
        "isPotential": false,
        "category": "Mô hình nội thất"
    },
    {
        "id": "3d94b5e7-3d90-81d4-8fde-f4d63080e161",
        "name": "Mô Hình Nhà Ở NBC - Chị Trúc",
        "date": "10/09/2026",
        "rawDate": "2026-09-10T09:00:00.000+07:00",
        "nhacHen": "2026-09-10T09:00:00.000+07:00",
        "ngayLienHe": "2026-09-10",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Mô hình kiến trúc"
    },
    {
        "id": "2154b5e7-3d90-804f-aa75-db64ed6f5e47",
        "name": "Mô hình bệnh viện 175 (Thay đổi lần 2)",
        "date": "10/09/2026",
        "rawDate": "2026-09-10T09:00:00.000+07:00",
        "nhacHen": "2026-09-10T09:00:00.000+07:00",
        "ngayLienHe": "",
        "stage": "danglam",
        "stageLabel": "🏗️ Đang làm",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Khách cũ liên hệ lại",
        "note": "Hồ sơ:
  • Đợi khách ký HĐ và gửi lại
Kỹ thuật:
  • Đang triển khai
  • Đã đặt bục gỗ ⇒ hẹn 18/9 giao
  • Đã đặt kính
Thanh toán
  • Đã in lại phiếu thu có chữ ký Kế toán và Giám Đốc ⇒ Đã gửi thư cho khách",
        "isPotential": false,
        "category": "Bệnh viện"
    },
    {
        "id": "2e84b5e7-3d90-8076-b01b-fc3bb1e39c58",
        "name": "Sa bàn KĐT trung tâm mới thị trấn Nam Đàn",
        "date": "09/09/2026",
        "rawDate": "2026-09-09T15:00:00.000+07:00",
        "nhacHen": "2026-09-09T15:00:00.000+07:00",
        "ngayLienHe": "2025-12-24",
        "stage": "danglam",
        "stageLabel": "🏗️ Đang làm",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "Hồ sơ
  • 07/09 HD và PLHD01 bản cứng đã nhận
Kỹ thuật
  • Kính và bục gỗ đã giao
  • 7/9 Khách thông báo dời lại ngày giao do kế hoạch bên khách thay đổi. Sẽ thông báo lại sau
Thanh toán
  • Hợp đồng: Đã tạm ứng (cá nhân) đợt 1
  • PLHD: 19/8 Khách đã tạm ứng đợt (Cty)",
        "isPotential": false,
        "category": "Quy hoạch"
    },
    {
        "id": "3d94b5e7-3d90-81bd-b2ef-f7c4162e3cbd",
        "name": "Mô Hình Thuyền - Chị Phương",
        "date": "09/09/2026",
        "rawDate": "2026-09-09T09:00:00.000+07:00",
        "nhacHen": "2026-09-09T09:00:00.000+07:00",
        "ngayLienHe": "2026-09-09",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Số Sang",
        "note": "Đã gửi báo giá",
        "isPotential": false,
        "category": "Khác"
    },
    {
        "id": "3c24b5e7-3d90-808c-90bf-e2a4abeb86ce",
        "name": "Nhà máy Duraflex Unitex Vietnam - Mr Huy",
        "date": "09/09/2026",
        "rawDate": "2026-09-09",
        "nhacHen": "2026-09-09",
        "ngayLienHe": "2026-08-20",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Zalo Tiến",
        "note": "8/9 Hỏi thăm tình trạng dự án",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "31f4b5e7-3d90-80a5-8df0-d6987012930b",
        "name": "Sa bàn dự án Samland Riverside",
        "date": "09/09/2026",
        "rawDate": "2026-09-09",
        "nhacHen": "2026-09-09",
        "ngayLienHe": "2026-03-10",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "Hồ sơ
  • Đợi Sang điều chỉnh file gửi anh Trung xem",
        "isPotential": false,
        "category": "Cao tầng"
    },
    {
        "id": "38b4b5e7-3d90-802d-880f-fd863cc760b2",
        "name": "Khu TĐC-NOXH Phúc Long - Ms Nguyễn Thị Hoàng Thơ",
        "date": "05/09/2026",
        "rawDate": "2026-09-05T14:15:00.000+07:00",
        "nhacHen": "2026-09-05T14:15:00.000+07:00",
        "ngayLienHe": "2026-06-26",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "Hồ sơ:
  • Khách yêu cầu thiết kế lại 3D toàn dự án ⇒ Ko được ⇒ Đang theo dõi",
        "isPotential": false,
        "category": "Quy hoạch"
    },
    {
        "id": "38b4b5e7-3d90-801a-b868-def15bd3e6c0",
        "name": "Mô hình tàu Container, Xe đầu kéo Container, Cụm cẩu giàn và bãi Container - Cty Tân Cảng - Ms Linh",
        "date": "05/09/2026",
        "rawDate": "2026-09-05T14:00:00.000+07:00",
        "nhacHen": "2026-09-05T14:00:00.000+07:00",
        "ngayLienHe": "2026-06-24",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Chị Thủy",
        "note": "30/06 Đã gửi báo giá ⇒ Chờ khách phản hồi
03/07 Khách gọi trao đổi phương án thực hiện
13/07 Đã hỏi thăm ⇒ Đang chờ duyệt tài chính",
        "isPotential": false,
        "category": "Khác"
    },
    {
        "id": "3d94b5e7-3d90-815b-8938-d3d5468b5970",
        "name": "Mô hình Cao Tầng",
        "date": "05/09/2026",
        "rawDate": "2026-09-05T09:00:00.000+07:00",
        "nhacHen": "2026-09-05T09:00:00.000+07:00",
        "ngayLienHe": "2026-09-05",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp",
        "note": "Đang làm hồ sơ báo giá",
        "isPotential": false,
        "category": "Mô hình kiến trúc"
    },
    {
        "id": "3894b5e7-3d90-8032-b6a9-f23b40cc7b49",
        "name": "SA BÀN NHÀ MẪU EUROWINDOW LIGHT CITY - Ms Vũ Vui",
        "date": "05/09/2026",
        "rawDate": "2026-09-05T09:00:00.000+07:00",
        "nhacHen": "2026-09-05T09:00:00.000+07:00",
        "ngayLienHe": "2026-06-22",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Anh Tiến",
        "note": "11/8 chị Vũ Vui phản hồi dự án bị tạm pending. Khi nào chạy lại sẽ liên hệ",
        "isPotential": false,
        "category": "Nội thất"
    },
    {
        "id": "37c4b5e7-3d90-8074-b1d7-c7f70e77fb4a",
        "name": "Sa bàn dự án KĐT Biển Ninh Thủy",
        "date": "05/09/2026",
        "rawDate": "2026-09-05T09:00:00.000+07:00",
        "nhacHen": "2026-09-05T09:00:00.000+07:00",
        "ngayLienHe": "2026-06-10",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "Anh An phản hồi đã bàn giao cho Sếp trên theo trực tiếp. Chưa thấy gọi. Chắc đang hoãn hoặc đợi xây xong Sale Galery",
        "isPotential": false,
        "category": "Quy hoạch"
    },
    {
        "id": "3744b5e7-3d90-8040-841b-dca638b80d09",
        "name": "Sa bàn dự án KCN Lê Minh Xuân - Ms Phuong Dung - Savills Việt Nam",
        "date": "05/09/2026",
        "rawDate": "2026-09-05T09:00:00.000+07:00",
        "nhacHen": "2026-09-05T09:00:00.000+07:00",
        "ngayLienHe": "2026-06-03",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Anh Tiến",
        "note": "Đã gửi khách kích thước file Scale 1/500 đợi phản hồi
31/7 Hỏi thăm khách ⇒ Khách báo phía CĐT chưa phản hồi",
        "isPotential": false,
        "category": "KCN"
    },
    {
        "id": "1a54b5e7-3d90-81fa-9baa-d074e4d51ee9",
        "name": "Mô hình quy hoạch | BRG | Đà Nẵng | PL02",
        "date": "05/09/2026",
        "rawDate": "2026-09-05T09:00:00.000+07:00",
        "nhacHen": "2026-09-05T09:00:00.000+07:00",
        "ngayLienHe": "2024-08-16",
        "stage": "thanhtoan",
        "stageLabel": "💸 Thanh toán",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Zalo",
        "note": "28/7 Đã gửi mail xác nhận lại cho phần thanh lý HĐ PL02. Kèm theo báo giá mới giải thích lý do sao tăng giá",
        "isPotential": false,
        "category": "Quy hoạch"
    },
    {
        "id": "3d24b5e7-3d90-8014-8dc4-c15d9dbc5afe",
        "name": "Thu mua sa bàn - Happy One Sora - Vạn Xuân Group - Ms Trúc Anh",
        "date": "05/09/2026",
        "rawDate": "2026-09-05",
        "nhacHen": "",
        "ngayLienHe": "2026-09-05",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Hotline Tiến",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Thu mua"
    },
    {
        "id": "34c4b5e7-3d90-8003-9b02-f10933783c71",
        "name": "Sa bàn dự án Nhà Ở Phương Trường An 6",
        "date": "05/09/2026",
        "rawDate": "2026-09-05",
        "nhacHen": "2026-09-05",
        "ngayLienHe": "2026-04-20",
        "stage": "thanhtoan",
        "stageLabel": "💸 Thanh toán",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Khách cũ liên hệ Hào",
        "note": "Hồ sơ: 
  •  Đã gửi DNTT đợt 3
Kỹ thuật:
  • Khách đã ký nghiệm thu
Thanh toán
  • Đang chốt hóa đơn ⇒ Đợi thanht oán",
        "isPotential": false,
        "category": "Quy hoạch"
    },
    {
        "id": "3894b5e7-3d90-8036-8cd8-eca7745d043a",
        "name": "Sa bàn dự án Thanh Long Bay - Cty Nam Group",
        "date": "04/09/2026",
        "rawDate": "2026-09-04T13:30:00.000+07:00",
        "nhacHen": "2026-09-04T13:30:00.000+07:00",
        "ngayLienHe": "2026-06-24",
        "stage": "baogia",
        "stageLabel": "🧾 Báo giá",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Anh Tiến",
        "note": "Mấy sếp vẫn đang cân nhắc xem xét ⇒ Có thông tin sẽ liên hệ",
        "isPotential": false,
        "category": "Quy hoạch"
    },
    {
        "id": "3d04b5e7-3d90-8082-ba37-e27d24b18e31",
        "name": "Mô hình nhà máy - Trung Quốc - Tại Hà Nội - Mr Vương",
        "date": "04/09/2026",
        "rawDate": "2026-09-04",
        "nhacHen": "2026-09-04",
        "ngayLienHe": "2026-09-03",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Hotline Tiến",
        "note": "• Đang check fiel và tư vấn qua Wechat",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "31b4b5e7-3d90-8016-8db8-ce60ed3c90b3",
        "name": "Vận chuyển sa bàn KCN Khánh An chị Mận T8/2026",
        "date": "04/09/2026",
        "rawDate": "2026-09-04",
        "nhacHen": "2026-09-04",
        "ngayLienHe": "2026-03-04",
        "stage": "thanhtoan",
        "stageLabel": "💸 Thanh toán",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Khách cũ liên hệ",
        "note": "HS
  • Đã nhận HĐ bản cứng
KT
  • Ngày 27 - 28 phải có mặt vận chuyển ⇒ Sắp xếp nhân sự thực hiện",
        "isPotential": false,
        "category": "Vận chuyển"
    },
    {
        "id": "3cc4b5e7-3d90-80a1-831d-daf1baf6c1ad",
        "name": "MÔ HÌNH CHUNG CƯ - PHÚ ANH THẠNH  + Ms TRANG",
        "date": "30/08/2026",
        "rawDate": "2026-08-30",
        "nhacHen": "",
        "ngayLienHe": "2026-08-30",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Sếp Thiện",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Cao tầng"
    },
    {
        "id": "3cc4b5e7-3d90-8080-907e-fdcbc0fed604",
        "name": "Nhà máy Schneider",
        "date": "29/08/2026",
        "rawDate": "2026-08-29",
        "nhacHen": "",
        "ngayLienHe": "2026-08-29",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Hot mail",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "3cc4b5e7-3d90-801d-8fe8-fef340f38a2b",
        "name": "sa bàn văn miếu trấn biên tại Đồng Nai",
        "date": "24/08/2026",
        "rawDate": "2026-08-24",
        "nhacHen": "",
        "ngayLienHe": "2026-08-24",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Zalo Tiến",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Khác"
    },
    {
        "id": "34a4b5e7-3d90-809f-8bcc-c7a06007605a",
        "name": "Nhà máy Asahi Intecc Vĩnh Phúc",
        "date": "16/07/2026",
        "rawDate": "2026-07-16",
        "nhacHen": "2026-07-16",
        "ngayLienHe": "2026-04-22",
        "stage": "thanhtoan",
        "stageLabel": "💸 Thanh toán",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Khách cũ liên hệ Hào",
        "note": "Hồ sơ:
  • Đã nhận hợp đồng và tạm ứng
  • Đã gửi hồ sơ thanh toán đợt cuối ⇒ Chờ khách gửi lại và thanh toán
Kỹ thuật:
  • 14/06 Đã xử lý bục gỗ",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "2534b5e7-3d90-80d5-9829-d8b9b6b2181c",
        "name": "Mai Ba | Golf Resort tại Vũng Tàu",
        "date": "25/08/2025",
        "rawDate": "2025-08-25T10:00:00.000+07:00",
        "nhacHen": "2025-08-25T10:00:00.000+07:00",
        "ngayLienHe": "2025-08-16",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Ads facebook",
        "note": "Đợi khách gửi ảnh hiện trạng",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1ad4b5e7-3d90-8093-a2a8-da2b5fb3080c",
        "name": "Sân golf - Trường The American School",
        "date": "25/08/2025",
        "rawDate": "2025-08-25T09:30:00.000+07:00",
        "nhacHen": "2025-08-25T09:30:00.000+07:00",
        "ngayLienHe": "2025-03-03",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Facebook Ads",
        "note": "Đã gửi báo giá thi công cho khách, đợi phản hồi",
        "isPotential": false,
        "category": "Thiết kế Golf"
    },
    {
        "id": "25a4b5e7-3d90-8003-843c-df15694e3828",
        "name": "Nguyen Trung Dong | Golf Tây Ninh",
        "date": "25/08/2025",
        "rawDate": "2025-08-25",
        "nhacHen": "2025-08-25",
        "ngayLienHe": "2025-08-18",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Ads Facebook",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "25a4b5e7-3d90-80e5-ac8e-d381355b98a7",
        "name": "Tuan Nguyen Thanh | Golf Cần Thơ",
        "date": "25/08/2025",
        "rawDate": "2025-08-25",
        "nhacHen": "2025-08-25",
        "ngayLienHe": "2025-08-18",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Ads Facebook",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "2544b5e7-3d90-8013-b1a2-d4ad3b0c71dc",
        "name": "Ali Hưng | Golf Game",
        "date": "19/08/2025",
        "rawDate": "2025-08-19",
        "nhacHen": "",
        "ngayLienHe": "2025-08-19",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Ads Facebook",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "24c4b5e7-3d90-8012-ad22-c5eb26d5dc33",
        "name": "Thanh Binh | Phan Thiết | Golf Game",
        "date": "18/08/2025",
        "rawDate": "2025-08-18T10:00:00.000+07:00",
        "nhacHen": "2025-08-18T10:00:00.000+07:00",
        "ngayLienHe": "2025-08-10",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Ads Fanpage",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "2544b5e7-3d90-801a-9598-dcb7d4409ccf",
        "name": "Dinh Dong | Golf Game",
        "date": "18/08/2025",
        "rawDate": "2025-08-18",
        "nhacHen": "",
        "ngayLienHe": "2025-08-18",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Ads facebook",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "2544b5e7-3d90-8039-9313-d07159139619",
        "name": "Vinawin Graden | Golf Game",
        "date": "18/08/2025",
        "rawDate": "2025-08-18",
        "nhacHen": "",
        "ngayLienHe": "2025-08-18",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Ads Facebook",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "2534b5e7-3d90-80b4-b874-cb258ed1cfb0",
        "name": "Coca Xuan | Golf Game",
        "date": "17/08/2025",
        "rawDate": "2025-08-17",
        "nhacHen": "",
        "ngayLienHe": "2025-08-17",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Khách mới tiếp nhận",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "2534b5e7-3d90-8044-800d-fff9f4a67930",
        "name": "Nguyen Hanh | Golf Game",
        "date": "13/08/2025",
        "rawDate": "2025-08-13",
        "nhacHen": "",
        "ngayLienHe": "2025-08-13",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Khách mới tiếp nhận",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "2534b5e7-3d90-801a-b486-dec96250f07d",
        "name": "Hùng Nguyễn | Golf Game",
        "date": "12/08/2025",
        "rawDate": "2025-08-12",
        "nhacHen": "",
        "ngayLienHe": "2025-08-12",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Ads facebook",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "2534b5e7-3d90-80b0-ad54-f2d49eab93cc",
        "name": "Nguyen Trung Dong | Golf Game",
        "date": "12/08/2025",
        "rawDate": "2025-08-12",
        "nhacHen": "",
        "ngayLienHe": "2025-08-12",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Khách mới tiếp nhận",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "2534b5e7-3d90-8086-8344-cae8fd186884",
        "name": "Hội Quán Beer Roadside | Golf Game",
        "date": "12/08/2025",
        "rawDate": "2025-08-12",
        "nhacHen": "",
        "ngayLienHe": "2025-08-12",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Ads facebook",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "2534b5e7-3d90-806d-b5e0-f79c490a3094",
        "name": "Sang Lê | Golf Game",
        "date": "12/08/2025",
        "rawDate": "2025-08-12",
        "nhacHen": "",
        "ngayLienHe": "2025-08-12",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Võ Minh Sang",
        "tech": "-",
        "source": "Ads Facebook",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "24d4b5e7-3d90-8091-b5df-c2971f819266",
        "name": "Hiền Thục | Golf Game",
        "date": "11/08/2025",
        "rawDate": "2025-08-11",
        "nhacHen": "",
        "ngayLienHe": "2025-08-11",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Ads Fanpage",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "24d4b5e7-3d90-8082-8780-f232cfa177bb",
        "name": "Nguyễn Hùng | Golf kinh doanh caphe sân vườn | HCM",
        "date": "11/08/2025",
        "rawDate": "2025-08-11",
        "nhacHen": "",
        "ngayLienHe": "2025-08-11",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Ads Fanpage",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "24c4b5e7-3d90-8060-9a81-c38d3b8dfd02",
        "name": "My My | Cam Ranh | Golf Game",
        "date": "11/08/2025",
        "rawDate": "2025-08-11",
        "nhacHen": "",
        "ngayLienHe": "2025-08-11",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Ads Fanpage",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "2534b5e7-3d90-80cb-8b2c-d2c9d68c4744",
        "name": "Thanh Bình | Golf Phan Thiết",
        "date": "10/08/2025",
        "rawDate": "2025-08-10",
        "nhacHen": "",
        "ngayLienHe": "2025-08-10",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Khách mới tiếp nhận",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "24c4b5e7-3d90-80a0-b06d-f69fa9497185",
        "name": "Hai Tài | Golf Game",
        "date": "10/08/2025",
        "rawDate": "2025-08-10",
        "nhacHen": "",
        "ngayLienHe": "2025-08-10",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Ads Fanpage",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "24c4b5e7-3d90-807f-b806-f8387448a83f",
        "name": "Vu Dang | Golf Game",
        "date": "10/08/2025",
        "rawDate": "2025-08-10",
        "nhacHen": "",
        "ngayLienHe": "2025-08-10",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Ads Fanpage",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "24c4b5e7-3d90-8047-8e20-c595a37813ed",
        "name": "Milano Hoà Vinh | Golf Game",
        "date": "09/08/2025",
        "rawDate": "2025-08-09",
        "nhacHen": "",
        "ngayLienHe": "2025-08-09",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Ads Fanpage",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "2484b5e7-3d90-801f-a349-fb3a6513ea5e",
        "name": "Thành Quyên | Long Thành | Golf Game",
        "date": "07/08/2025",
        "rawDate": "2025-08-07",
        "nhacHen": "",
        "ngayLienHe": "2025-08-07",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Ads Fanpage",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1f64b5e7-3d90-801e-bd62-f4ad65e72437",
        "name": "DA MH thủy điện Sesan 4",
        "date": "25/06/2025",
        "rawDate": "2025-06-25",
        "nhacHen": "2025-06-25",
        "ngayLienHe": "2025-02-11",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "- Đã gửi báo giá, đã gửi HSNL cho KH.",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1fd4b5e7-3d90-8059-8c79-ee2b543d424d",
        "name": "MH dự án số 2 - Tập đoàn Sao Mai",
        "date": "23/05/2025",
        "rawDate": "2025-05-23",
        "nhacHen": "",
        "ngayLienHe": "2025-05-23",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Khách mới tiếp nhận",
        "note": "Bên khách đang điều chỉnh phòng trưng bày ⇒ Đợi phản hồi",
        "isPotential": false,
        "category": "Quy hoạch"
    },
    {
        "id": "1f24b5e7-3d90-801f-b25c-d317ab9e38a1",
        "name": "Sa bàn Larita - KHL",
        "date": "23/04/2025",
        "rawDate": "2025-04-23",
        "nhacHen": "",
        "ngayLienHe": "2025-04-23",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Anh Hiếu - KHL",
        "note": "- Đã có báo giá, đang chờ anh Hiếu phản hồi",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1c24b5e7-3d90-80bc-aabf-c693b72645b0",
        "name": "Báo giá golf thiết kế và thi công luôn. Trọn gói.",
        "date": "26/03/2025",
        "rawDate": "2025-03-26",
        "nhacHen": "",
        "ngayLienHe": "",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Khách mới tiếp nhận",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1b14b5e7-3d90-809d-a082-e95eb4571eeb",
        "name": "Sân golf mini game - Bình Phước",
        "date": "09/03/2025",
        "rawDate": "2025-03-09",
        "nhacHen": "",
        "ngayLienHe": "2025-03-09",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Facebook ads",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1b14b5e7-3d90-80e1-b399-c6e5fcf5bf27",
        "name": "Sân golf mini để kinh doanh quán coffee - Đồng Nai",
        "date": "08/03/2025",
        "rawDate": "2025-03-08",
        "nhacHen": "",
        "ngayLienHe": "2025-03-08",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Facebook ads",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1b14b5e7-3d90-8074-9598-e82c6172b516",
        "name": "Sân golf Vũng Tàu 6x30m",
        "date": "07/03/2025",
        "rawDate": "2025-03-07",
        "nhacHen": "",
        "ngayLienHe": "2025-03-07",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Facebook ads",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1b14b5e7-3d90-80c3-8703-d33280d31319",
        "name": "Tư vấn sân golf ở Vĩnh Long - Kiều Văn Công",
        "date": "07/03/2025",
        "rawDate": "2025-03-07",
        "nhacHen": "",
        "ngayLienHe": "2025-03-07",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Facebook ads",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1b14b5e7-3d90-802b-936d-ded0a88b58cb",
        "name": "Tư vấn sân golf lớn - Anh Hoàng",
        "date": "06/03/2025",
        "rawDate": "2025-03-06",
        "nhacHen": "",
        "ngayLienHe": "2025-03-06",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Khách mô hình",
        "note": "Khách từ mô hình cảnh liên hệ",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1ad4b5e7-3d90-80bf-9594-d5de62f30491",
        "name": "Làm sân Green - Nhà Bè - Anh Hùng",
        "date": "05/03/2025",
        "rawDate": "2025-03-05",
        "nhacHen": "",
        "ngayLienHe": "2025-03-05",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Facebook Ads",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1ad4b5e7-3d90-806f-a7e6-dd63144f388e",
        "name": "Mô hình nhà máy - Anh Chiến",
        "date": "05/03/2025",
        "rawDate": "2025-03-05",
        "nhacHen": "",
        "ngayLienHe": "2025-03-05",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Tiến",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "1ad4b5e7-3d90-80ce-84f7-cd09208cba23",
        "name": "Tư vấn Golf - Nguyen Thang Long",
        "date": "05/03/2025",
        "rawDate": "2025-03-05",
        "nhacHen": "",
        "ngayLienHe": "2025-03-05",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Flex House",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1ad4b5e7-3d90-80a1-bda8-caaec3d449ec",
        "name": "Tư vấn sân golf Bình Phước - Hào Bùi",
        "date": "04/03/2025",
        "rawDate": "2025-03-04",
        "nhacHen": "",
        "ngayLienHe": "2025-03-04",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Facebook Ads",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1ad4b5e7-3d90-8087-b5a1-c68241dacdc7",
        "name": "Tư vấn sân golf TP Gia Nghĩa - Viet Pham",
        "date": "04/03/2025",
        "rawDate": "2025-03-04",
        "nhacHen": "",
        "ngayLienHe": "2025-03-04",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Facebook Ads",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1ad4b5e7-3d90-805d-9a3c-eecf2fda01bc",
        "name": "Tư vấn golf - Hoài Ân - Làm kinh doanh",
        "date": "04/03/2025",
        "rawDate": "2025-03-04",
        "nhacHen": "",
        "ngayLienHe": "2025-03-04",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Facebook Ads",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1ad4b5e7-3d90-805e-88d4-dfd4bb531266",
        "name": "Tư vấn sân golf - Ong Nguyen",
        "date": "02/03/2025",
        "rawDate": "2025-03-02",
        "nhacHen": "",
        "ngayLienHe": "2025-03-02",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "facebook Ads",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1ad4b5e7-3d90-800f-ae5d-ff02d89dcff9",
        "name": "Tư vấn sân golf - Toan Pham Van",
        "date": "02/03/2025",
        "rawDate": "2025-03-02",
        "nhacHen": "",
        "ngayLienHe": "2025-03-02",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Facebook Ads",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1ad4b5e7-3d90-807a-ba9f-d40caeea1aff",
        "name": "Tư vấn sân golf - Trần Thị Cậy",
        "date": "02/03/2025",
        "rawDate": "2025-03-02",
        "nhacHen": "",
        "ngayLienHe": "2025-03-02",
        "stage": "tuvan",
        "stageLabel": "🆕 Mới",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Facebook Ads",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-81e5-b5de-de948ac656dd",
        "name": "Dự án sa bàn kết nối 5 dự án Campuchia | Cty Pinnacle | Quận 7 | Chị Xophy",
        "date": "17/01/2025",
        "rawDate": "2025-01-17",
        "nhacHen": "",
        "ngayLienHe": "2025-01-17",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Tiến",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-817c-bcc4-e5d2f8474400",
        "name": "DA mô hình nhà cao tầng | TP.Vinh | A. Tuân Nguyễn |",
        "date": "07/01/2025",
        "rawDate": "2025-01-07",
        "nhacHen": "",
        "ngayLienHe": "2025-01-07",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "A.Hiệp (KH KHAIHOAN LAND)",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Cao tầng"
    },
    {
        "id": "1a54b5e7-3d90-8163-a95c-f350709435c3",
        "name": "DA mô hình biệt thự | Cty CP Xcons Sài Gòn | Quận 3 - Tp.HCM | C.Trang",
        "date": "07/01/2025",
        "rawDate": "2025-01-07",
        "nhacHen": "",
        "ngayLienHe": "2025-01-07",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Tiến",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-8128-9412-f1ecba49fe69",
        "name": "Làm bục gỗ | Chị Tiên",
        "date": "05/01/2025",
        "rawDate": "2025-01-05",
        "nhacHen": "",
        "ngayLienHe": "2025-01-05",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Tiến",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-8141-980e-ee427cc47bfb",
        "name": "Di dời sa bàn - Phú Đông Group | Eric Nguyen | SG",
        "date": "27/12/2024",
        "rawDate": "2024-12-27",
        "nhacHen": "",
        "ngayLienHe": "2024-12-27",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-81b3-96c7-d416e9fddf7a",
        "name": "Mô hình cần trục Cty Tân Cảng | SG | A.Tùng",
        "date": "27/12/2024",
        "rawDate": "2024-12-27",
        "nhacHen": "",
        "ngayLienHe": "2024-12-27",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "KH Harmony Nguyễn (Cty Tân Cảng)",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-81ef-8913-d495a4dab329",
        "name": "Vận chuyển mô hình (DA EZLAND) | SG - Bình Dương | A. Dũng |",
        "date": "26/12/2024",
        "rawDate": "2024-12-26",
        "nhacHen": "",
        "ngayLienHe": "2024-12-26",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Tiến",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-81d6-b434-ccd8e5cca397",
        "name": "Mô hình tàu xuất nhập khẩu Cty Tân Cảng | SG | Harmony Nguyễn |",
        "date": "26/12/2024",
        "rawDate": "2024-12-26",
        "nhacHen": "",
        "ngayLienHe": "2024-12-26",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-8137-a656-dbdb6d575da2",
        "name": "DA mô hình chuyển động | Cty FPT Soft ware | C.Thanh Trang",
        "date": "25/12/2024",
        "rawDate": "2024-12-25",
        "nhacHen": "",
        "ngayLienHe": "2024-12-25",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Tiến",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-81f6-a083-efecb263ad38",
        "name": "Mô hình nhà máy Sokorei | Cty Sumitomo Mitsui Nhật Bản | Anh Toản",
        "date": "24/12/2024",
        "rawDate": "2024-12-24",
        "nhacHen": "",
        "ngayLienHe": "2024-12-24",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "1a54b5e7-3d90-811c-9ee3-d802580ab8f8",
        "name": "DA mô hình khu đất 300ha (Cty Hòa Phát) | C.Hân Dương |",
        "date": "23/12/2024",
        "rawDate": "2024-12-23",
        "nhacHen": "",
        "ngayLienHe": "2024-12-23",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-8179-b0e2-daddf87352db",
        "name": "Mô hình nhà máy | Long An | Trần Hoài Đức",
        "date": "23/12/2024",
        "rawDate": "2024-12-23",
        "nhacHen": "",
        "ngayLienHe": "2024-12-23",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Khách cũ dự án ATP Village giới thiệu",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "1a54b5e7-3d90-81f3-849e-f46b5570db00",
        "name": "Vận chuyển sa bàn ATP Village",
        "date": "23/12/2024",
        "rawDate": "2024-12-23",
        "nhacHen": "",
        "ngayLienHe": "2024-12-23",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Khách cũ dự án ATP Village giới thiệu",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-81d6-a275-eea6e7bf7798",
        "name": "Mô hình | Cty Hòa Phát | Chị Hân Dương",
        "date": "23/12/2024",
        "rawDate": "2024-12-23",
        "nhacHen": "",
        "ngayLienHe": "2024-12-23",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-8114-99f1-f642788b9ebd",
        "name": "5 mô hình | Cty Đại Dũng | Chị Vân",
        "date": "21/12/2024",
        "rawDate": "2024-12-21",
        "nhacHen": "",
        "ngayLienHe": "2024-12-21",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Khác"
    },
    {
        "id": "1a54b5e7-3d90-8104-be2d-d8f7566c1c2c",
        "name": "Mô hình Nhà thông minh Hunonic",
        "date": "20/12/2024",
        "rawDate": "2024-12-20",
        "nhacHen": "",
        "ngayLienHe": "2024-12-20",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Fanpage | Mô hình kiến trúc Song Anh",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-81cd-8e0e-ccd16a77e063",
        "name": "Mô hình | Anh Hậu",
        "date": "12/12/2024",
        "rawDate": "2024-12-12",
        "nhacHen": "",
        "ngayLienHe": "2024-12-12",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-81b7-a429-cacb857abda0",
        "name": "Mô hình cụm CN | Quãng NInh | anh Phiệt",
        "date": "10/12/2024",
        "rawDate": "2024-12-10",
        "nhacHen": "",
        "ngayLienHe": "2024-12-10",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "a Tiến",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-81ee-a745-edd5d1340a5f",
        "name": "Mô hình Trường học Asashi Thái Bình | Cty cp đầu tư và xây dựng 819 | A.Vinh Vũ Anh |",
        "date": "01/10/2024",
        "rawDate": "2024-10-01",
        "nhacHen": "",
        "ngayLienHe": "2024-10-01",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Trường học"
    },
    {
        "id": "1a54b5e7-3d90-8166-a4f0-cb8ddc306187",
        "name": "Mô hình nhà mẫu | Tây Ninh | Tran Hieu",
        "date": "02/08/2024",
        "rawDate": "2024-08-02",
        "nhacHen": "",
        "ngayLienHe": "2024-08-02",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Tiến",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-81cd-bfd6-cbae2dfb43e8",
        "name": "Vệ sinh sa bàn | Cty CP Thành phố du lịch sinh thái Sơn Tiên | Đồng Nai | C.Thu Hiền |",
        "date": "01/08/2024",
        "rawDate": "2024-08-01",
        "nhacHen": "",
        "ngayLienHe": "2024-08-01",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Sửa chữa - Vệ sinh"
    },
    {
        "id": "1a54b5e7-3d90-81b0-bdfb-c26171a45c39",
        "name": "Mô hình cơ quan | Binh Khang",
        "date": "02/07/2024",
        "rawDate": "2024-07-02",
        "nhacHen": "",
        "ngayLienHe": "2024-07-02",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    },
    {
        "id": "1a54b5e7-3d90-81e2-ad5c-daec0963bf42",
        "name": "Mô hình nhà máy An Lập | Hưng Yên | Cty Nhựa An Lập | Nguyen Diu",
        "date": "02/07/2024",
        "rawDate": "2024-07-02",
        "nhacHen": "",
        "ngayLienHe": "2024-07-02",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Nhà máy - Thiết bị"
    },
    {
        "id": "1a54b5e7-3d90-81f5-9062-e8b9853212b5",
        "name": "Cải tiến mô hình thức ăn tôm DE HEUS | Cần Thơ | C.Trinh (bên sự kiện)",
        "date": "07/01/2024",
        "rawDate": "2024-01-07",
        "nhacHen": "",
        "ngayLienHe": "2024-01-07",
        "stage": "tuvan",
        "stageLabel": "💬 Tư vấn",
        "assignee": "Phạm Hoàng Tiến",
        "tech": "-",
        "source": "Sếp",
        "note": "Đang cập nhật tiến độ chi tiết",
        "isPotential": false,
        "category": "Kiến trúc"
    }
];
    // Danh sách 8 dự án có tick Tiềm năng = true trên Notion
    const potentialIdList = new Set(["3cd4b5e7-3d90-8032-81a5-e80b991d7455", "3cb4b5e7-3d90-8087-9b01-d7facf649e0e", "3c44b5e7-3d90-80ef-9dd3-ee091ed3bbea", "3c44b5e7-3d90-80c6-81da-dd806ea69bed", "3c44b5e7-3d90-803b-ac88-e27eb4fbe5f3", "3bf4b5e7-3d90-80c0-8fa7-e993b56e0b27", "3bb4b5e7-3d90-8026-8d97-c05c7d167767", "3a44b5e7-3d90-8057-9d8f-dfb167f7988a"]);
    pipelineData.forEach(p => {
        p.isPotential = potentialIdList.has(p.id);
    });

    // Tự động khôi phục các đơn hàng vừa tạo lưu trong localStorage vào pipelineData
    try {
        const localLeads = JSON.parse(localStorage.getItem('songanh_local_leads') || '[]');
        if (Array.isArray(localLeads) && localLeads.length > 0) {
            localLeads.forEach(lead => {
                if (!pipelineData.some(p => p.id === lead.id)) {
                    pipelineData.unshift(lead);
                }
            });
        }
    } catch (e) {
        console.warn('Could not parse local leads:', e);
    }

    // 2. TABS & SIDEBAR LOGIC
    function switchAppTab(tabId, navElement, updateHash = true) {
        if (!tabId) tabId = 'tab-trang-chu';
        document.querySelectorAll('.module-panel').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.sidebar-nav .nav-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.mobile-bottom-nav .bottom-nav-item').forEach(b => b.classList.remove('active'));

        const targetPanel = document.getElementById(tabId);
        if (targetPanel) targetPanel.classList.add('active');

        // Highlight Desktop Sidebar
        const activeNav = navElement || document.getElementById('nav-' + tabId);
        if (activeNav) activeNav.classList.add('active');

        // Highlight Mobile Bottom Nav
        const bnav = document.getElementById('bnav-' + tabId);
        if (bnav) bnav.classList.add('active');

        // Ẩn thanh tìm kiếm dự án trên Topbar khi xem mục Báo Cáo
        const topbarSearch = document.getElementById('topbarSearchWrap');
        if (topbarSearch) {
            topbarSearch.style.display = (tabId === 'tab-bao-cao') ? 'none' : '';
        }

        // 🚀 Lưu trạng thái để khi F5 / Reload trang không bị quay về trang chủ
        try {
            localStorage.setItem('songanh_sale_active_tab', tabId);
            if (updateHash && window.location.hash !== '#' + tabId) {
                history.replaceState(null, null, '#' + tabId);
            }
        } catch(e) {}

        // Refresh views if needed
        if (tabId === 'tab-theo-doi') renderPipelineViews();
        if (tabId === 'tab-khach-hang') renderCustomerViews();
        if (tabId === 'tab-bao-cao') renderWeeklyReport();

        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeSidebar();
    }

    function openSidebar() {
        document.getElementById('appSidebar').classList.add('open');
        document.getElementById('sidebarOverlay').classList.add('active');
    }

    function closeSidebar() {
        document.getElementById('appSidebar').classList.remove('open');
        document.getElementById('sidebarOverlay').classList.remove('active');
    }

    // 3. BỘ LỌC TỔNG THỜI GIAN (GLOBAL DATE/PERIOD FILTER - CHUẨN HÓA THEO CỘT NGÀY LIÊN HỆ)
    let currentPeriodFilter = 'week';
    let filterDateStart = null;
    let filterDateEnd = null;

    function pad2(n) {
        return n < 10 ? '0' + n : '' + n;
    }

    function parseLienHeDate(p) {
        if (!p) return null;
        let dateStr = '';
        if (typeof p === 'object') {
            // BẮT BUỘC CHỈ CĂN CỨ VÀO p.ngayLienHe (TỪ NOTION CỘT 'NGÀY LIÊN HỆ'), TUYỆT ĐỐI KHÔNG DÙNG 'NHẮC HẸN'
            dateStr = p.ngayLienHe || '';
        } else if (typeof p === 'string') {
            dateStr = p;
        }
        dateStr = (dateStr || '').trim();
        if (!dateStr) return null;

        if (dateStr.includes('-')) {
            const parts = dateStr.substring(0, 10).split('-');
            if (parts.length === 3) {
                return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
            }
        }
        if (dateStr.includes('/')) {
            const parts = dateStr.split('/');
            if (parts.length >= 2) {
                const day = parseInt(parts[0], 10);
                const month = parseInt(parts[1], 10) - 1;
                const year = parts.length === 3 ? parseInt(parts[2], 10) : 2026;
                return new Date(year, month, day);
            }
        }
        return null;
    }

    // Alias parseRecordDate giữ để tương thích toàn bộ hệ thống
    function parseRecordDate(p) {
        return parseLienHeDate(p);
    }

    function initFilterDates() {
        const now = new Date();
        const curYear = now.getFullYear();
        const curMonth = now.getMonth();
        const curDate = now.getDate();
        const dayOfWeek = now.getDay();
        const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
        const monday = new Date(curYear, curMonth, curDate + diffToMonday, 0, 0, 0);
        filterDateStart = monday;
        filterDateEnd = new Date(curYear, curMonth, curDate, 23, 59, 59);
        const monStr = `${pad2(monday.getDate())}/${pad2(monday.getMonth() + 1)}`;
        const nowStr = `${pad2(curDate)}/${pad2(curMonth + 1)}/${curYear}`;
        const activeTextEl = document.getElementById('filterActiveText');
        if (activeTextEl) activeTextEl.innerText = `Tuần này (${monStr} - ${nowStr})`;
    }

    function toggleCustomDatePicker(btnEl) {
        const pop = document.getElementById('customDatePopover');
        if (pop) {
            const isVisible = pop.style.display === 'block';
            pop.style.display = isVisible ? 'none' : 'block';
        }
    }

    function setGlobalPeriod(period, btnElement) {
        currentPeriodFilter = period;
        document.querySelectorAll('.filter-preset-pills .filter-pill-btn').forEach(b => b.classList.remove('active'));
        if (!btnElement) {
            btnElement = document.getElementById('btn-period-' + period);
        }
        if (btnElement) btnElement.classList.add('active');

        const pop = document.getElementById('customDatePopover');
        if (pop) pop.style.display = 'none';

        const now = new Date();
        const curYear = now.getFullYear();
        const curMonth = now.getMonth();
        const curDate = now.getDate();

        if (period === 'today') {
            // "Hôm nay" (today): Từ 00:00:00 đến 23:59:59 của ngày hôm nay. Label: Hôm nay (DD/MM/YYYY)
            filterDateStart = new Date(curYear, curMonth, curDate, 0, 0, 0);
            filterDateEnd = new Date(curYear, curMonth, curDate, 23, 59, 59);
            const todayStr = `${pad2(curDate)}/${pad2(curMonth + 1)}/${curYear}`;
            const activeTextEl = document.getElementById('filterActiveText');
            if (activeTextEl) activeTextEl.innerText = `Hôm nay (${todayStr})`;
        } else if (period === 'week') {
            // "Tuần này" (week): Tính từ NGÀY ĐẦU TUẦN (Thứ 2) đến HÔM NAY.
            // Ví dụ: Hôm nay là Thứ 3 (08/09/2026), Thứ 2 đầu tuần là 07/09/2026 -> Khoảng lọc 07/09/2026 00:00:00 đến 08/09/2026 23:59:59
            const dayOfWeek = now.getDay();
            const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
            const monday = new Date(curYear, curMonth, curDate + diffToMonday, 0, 0, 0);
            filterDateStart = monday;
            filterDateEnd = new Date(curYear, curMonth, curDate, 23, 59, 59);
            const monStr = `${pad2(monday.getDate())}/${pad2(monday.getMonth() + 1)}`;
            const nowStr = `${pad2(curDate)}/${pad2(curMonth + 1)}/${curYear}`;
            const activeTextEl = document.getElementById('filterActiveText');
            if (activeTextEl) activeTextEl.innerText = `Tuần này (${monStr} - ${nowStr})`;
        } else if (period === 'month') {
            // "Tháng này" (month): Tính từ NGÀY ĐẦU THÁNG (ngày 01) đến HÔM NAY.
            // Ví dụ: Từ 01/09/2026 00:00:00 đến 08/09/2026 23:59:59. Label: Tháng 9/2026 (01/09 - 08/09/2026)
            filterDateStart = new Date(curYear, curMonth, 1, 0, 0, 0);
            filterDateEnd = new Date(curYear, curMonth, curDate, 23, 59, 59);
            const firstDayStr = `01/${pad2(curMonth + 1)}`;
            const nowStr = `${pad2(curDate)}/${pad2(curMonth + 1)}/${curYear}`;
            const activeTextEl = document.getElementById('filterActiveText');
            if (activeTextEl) activeTextEl.innerText = `Tháng ${curMonth + 1}/${curYear} (${firstDayStr} - ${nowStr})`;
        } else if (period === 'all') {
            // "Tất cả" (all): Toàn bộ thời gian (146 dự án)
            filterDateStart = null;
            filterDateEnd = null;
            const activeTextEl = document.getElementById('filterActiveText');
            if (activeTextEl) activeTextEl.innerText = `Tất cả thời gian (${pipelineData.length} dự án)`;
        }

        applyGlobalFilterToViews();
    }

    function applyCustomRange() {
        const dFrom = document.getElementById('filterDateFrom').value;
        const dTo = document.getElementById('filterDateTo').value;
        if (!dFrom || !dTo) {
            alert('Vui lòng chọn đầy đủ ngày bắt đầu và kết thúc.');
            return;
        }

        const [y1, m1, day1] = dFrom.split('-').map(Number);
        const [y2, m2, day2] = dTo.split('-').map(Number);

        filterDateStart = new Date(y1, m1 - 1, day1, 0, 0, 0);
        filterDateEnd = new Date(y2, m2 - 1, day2, 23, 59, 59);

        currentPeriodFilter = 'custom';
        document.querySelectorAll('.filter-preset-pills .filter-pill-btn').forEach(b => b.classList.remove('active'));
        const customBtn = document.getElementById('btn-period-custom');
        if (customBtn) customBtn.classList.add('active');

        document.getElementById('filterActiveText').innerText = 'Tùy chọn (' + dFrom + ' đến ' + dTo + ')';
        document.getElementById('customDatePopover').style.display = 'none';

        applyGlobalFilterToViews();
        showToast('📅 Đã áp dụng bộ lọc ngày: ' + dFrom + ' đến ' + dTo);
    }

    function applyGlobalFilterToViews() {
        let filteredLeads = pipelineData;
        if (filterDateStart && filterDateEnd) {
            filteredLeads = pipelineData.filter(p => {
                const pDate = parseLienHeDate(p);
                if (!pDate) return false;
                return pDate >= filterDateStart && pDate <= filterDateEnd;
            });
        }

        // 1. KPI Khách hàng mới (DỰA VÀO CỘT NGÀY LIÊN HỆ p.ngayLienHe)
        const leadsCount = filteredLeads.length;
        const newLeadsEl = document.getElementById('homeNewLeadsCount');
        if (newLeadsEl) {
            newLeadsEl.innerText = leadsCount < 10 ? '0' + leadsCount : leadsCount;
        }
        const badgeEl = document.getElementById('pipelineFilterBadge');
        if (badgeEl) {
            badgeEl.innerText = (leadsCount < 10 ? '0' + leadsCount : leadsCount) + ' Khách mới';
        }

        // 2. KPI Dự án đang làm (Tính theo trạng thái: p.stage === 'danglam' - 12 dự án xưởng thi công)
        const inProdCount = pipelineData.filter(p => p.stage === 'danglam').length;
        const inProdEl = document.getElementById('homeInProductionCount');
        if (inProdEl) inProdEl.innerText = inProdCount < 10 ? '0' + inProdCount : inProdCount;

        // 3. KPI Dự án tiềm năng: p.isPotential === true && p.stage !== 'huy' && p.stage !== 'hoanthanh' && p.stage !== 'thanhtoan' (8 dự án)
        const potentialList = pipelineData.filter(p => p.isPotential === true && p.stage !== 'huy' && p.stage !== 'hoanthanh' && p.stage !== 'thanhtoan');
        const potentialCount = potentialList.length;
        const potentialEl = document.getElementById('homePotentialCount');
        if (potentialEl) potentialEl.innerText = potentialCount < 10 ? '0' + potentialCount : potentialCount;

        // 4. Phân bổ nguồn theo dữ liệu khách hàng mới trong kỳ lọc
        let countTien = 0, countSep = 0, countSang = 0, countCu = 0;
        filteredLeads.forEach(p => {
            const src = (p.source || '').toLowerCase();
            const adv = (p.assignee || '').toLowerCase();
            if (src.includes('tiến') || adv.includes('tiến')) countTien++;
            else if (src.includes('sếp') || src.includes('bgđ') || src.includes('thiện')) countSep++;
            else if (src.includes('sang') || adv.includes('sang')) countSang++;
            else countCu++;
        });

        const srcTienEl = document.getElementById('srcCountTien');
        const srcSepEl = document.getElementById('srcCountSep');
        const srcSangEl = document.getElementById('srcCountSang');
        const srcCuEl = document.getElementById('srcCountCu');
        if (srcTienEl) srcTienEl.innerText = countTien + ' Khách';
        if (srcSepEl) srcSepEl.innerText = countSep + ' Khách';
        if (srcSangEl) srcSangEl.innerText = countSang + ' Khách';
        if (srcCuEl) srcCuEl.innerText = countCu + ' Khách';

        // 5. Render Bảng Theo Dõi Tổng Quan Dự Án Trên Trang Chủ
        renderHomeProjectTable(filteredLeads);
    }

    // HOME TABLE STATE & FILTER LOGIC
    let currentHomeRawLeads = [];
    let homeTableStageFilter = 'all';
    let homeTableCurrentPage = 1;
    const HOME_TABLE_PAGE_SIZE = 10;

    function setHomeTableStageFilter(stage, btnEl) {
        homeTableStageFilter = stage;
        homeTableCurrentPage = 1;
        document.querySelectorAll('.home-stage-btn').forEach(b => b.classList.remove('active'));
        if (btnEl) btnEl.classList.add('active');
        renderHomeProjectTable(currentHomeRawLeads);
    }

    function changeHomeTablePage(newPage) {
        homeTableCurrentPage = newPage;
        renderHomeProjectTable(currentHomeRawLeads);
        const cardEl = document.querySelector('#tab-trang-chu .desktop-table-wrap');
        if (cardEl) cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // REUSABLE PAGINATION GENERATOR
    function renderPaginationHtml(totalItems, totalPages, currentPage, changeFnName) {
        if (totalItems === 0) return '';
        const startItem = (currentPage - 1) * 10 + 1;
        const endItem = Math.min(currentPage * 10, totalItems);

        let html = '<div class="pagination-info">Hiển thị <strong>' + startItem + ' - ' + endItem + '</strong> trong <strong>' + totalItems + '</strong> dự án (Trang ' + currentPage + '/' + totalPages + ')</div>';
        html += '<div class="pagination-controls">';

        // Prev button
        const prevDisabled = currentPage <= 1 ? 'disabled' : '';
        html += '<button type="button" class="page-btn" ' + prevDisabled + ' onclick="' + changeFnName + '(' + (currentPage - 1) + ')" title="Trang trước">◀ Trước</button>';

        // Calculate page window (at most 5 page numbers)
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, startPage + 4);
        if (endPage - startPage < 4) {
            startPage = Math.max(1, endPage - 4);
        }

        if (startPage > 1) {
            html += '<button type="button" class="page-btn" onclick="' + changeFnName + '(1)">1</button>';
            if (startPage > 2) html += '<span class="page-dots">...</span>';
        }

        for (let p = startPage; p <= endPage; p++) {
            const activeClass = p === currentPage ? 'active' : '';
            html += '<button type="button" class="page-btn ' + activeClass + '" onclick="' + changeFnName + '(' + p + ')">' + p + '</button>';
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) html += '<span class="page-dots">...</span>';
            html += '<button type="button" class="page-btn" onclick="' + changeFnName + '(' + totalPages + ')">' + totalPages + '</button>';
        }

        // Next button
        const nextDisabled = currentPage >= totalPages ? 'disabled' : '';
        html += '<button type="button" class="page-btn" ' + nextDisabled + ' onclick="' + changeFnName + '(' + (currentPage + 1) + ')" title="Trang sau">Sau ▶</button>';
        html += '</div>';

        return html;
    }

    function renderHomeProjectTable(leads) {
        currentHomeRawLeads = leads || [];

        // Cập nhật Subtitle theo kỳ lọc
        const subtitleEl = document.getElementById('homeTableScopeSubtitle');
        if (subtitleEl) {
            const activeText = document.getElementById('filterActiveText') ? document.getElementById('filterActiveText').innerText : 'Tuần này';
            subtitleEl.innerText = 'Hiển thị động theo bộ lọc: ' + activeText;
        }

        // 1. Đếm số lượng theo các trạng thái chuẩn Notion từ TỔNG SỐ LEADS trong kỳ
        let cTuvan = 0, cBaogia = 0, cHopdong = 0, cDanglam = 0, cThanhtoan = 0;
        currentHomeRawLeads.forEach(d => {
            if (d.stage === 'tuvan' || d.stage === 'moi') cTuvan++;
            else if (d.stage === 'baogia') cBaogia++;
            else if (d.stage === 'hopdong') cHopdong++;
            else if (d.stage === 'danglam') cDanglam++;
            else if (d.stage === 'thanhtoan') cThanhtoan++;
        });

        const elAll = document.getElementById('homeStageAllCount');
        if (elAll) elAll.innerText = currentHomeRawLeads.length;
        const elTuvan = document.getElementById('homeStageTuvanCount');
        if (elTuvan) elTuvan.innerText = cTuvan;
        const elBaogia = document.getElementById('homeStageBaogiaCount');
        if (elBaogia) elBaogia.innerText = cBaogia;
        const elHopdong = document.getElementById('homeStageHopdongCount');
        if (elHopdong) elHopdong.innerText = cHopdong;
        const elDanglam = document.getElementById('homeStageDanglamCount');
        if (elDanglam) elDanglam.innerText = cDanglam;
        const elThanhtoan = document.getElementById('homeStageThanhtoanCount');
        if (elThanhtoan) elThanhtoan.innerText = cThanhtoan;

        // 2. Lọc theo trạng thái đang chọn trên bảng tổng quan
        let stageFiltered = currentHomeRawLeads;
        if (homeTableStageFilter !== 'all') {
            stageFiltered = currentHomeRawLeads.filter(d => {
                if (homeTableStageFilter === 'tuvan') return d.stage === 'tuvan' || d.stage === 'moi';
                return d.stage === homeTableStageFilter;
            });
        }

        const totalBadge = document.getElementById('homeTableTotalBadge');
        if (totalBadge) {
            totalBadge.innerText = (stageFiltered.length < 10 ? '0' + stageFiltered.length : stageFiltered.length) + ' Dự án';
        }

        // 3. Phân trang: 10 dự án / trang
        const totalHomeItems = stageFiltered.length;
        const totalHomePages = Math.ceil(totalHomeItems / HOME_TABLE_PAGE_SIZE) || 1;
        if (homeTableCurrentPage > totalHomePages) homeTableCurrentPage = totalHomePages;
        if (homeTableCurrentPage < 1) homeTableCurrentPage = 1;

        const homeStart = (homeTableCurrentPage - 1) * HOME_TABLE_PAGE_SIZE;
        const homeEnd = Math.min(homeStart + HOME_TABLE_PAGE_SIZE, totalHomeItems);
        const pagedLeads = stageFiltered.slice(homeStart, homeEnd);

        // 4. Render Desktop Table Body
        const tbody = document.getElementById('homeProjectTableBody');
        if (tbody) {
            if (stageFiltered.length === 0) {
                tbody.innerHTML = '<tr><td colspan="7" align="center" style="padding: 24px; color: var(--text-muted); font-size: 0.85rem;">Không có dự án nào phù hợp với bộ lọc trạng thái đã chọn</td></tr>';
            } else {
                let html = '';
                pagedLeads.forEach((d, idx) => {
                    let client = '-';
                    let phone = '';
                    if (d.name.includes('+')) {
                        client = d.name.split('+').pop().trim();
                    } else if (d.name.includes('-')) {
                        const parts = d.name.split('-');
                        if (parts.length > 2) client = parts.pop().trim();
                    }
                    const phoneMatch = ((d.note || '') + ' ' + (d.name || '')).match(/(0\d{9,10}|\d{4}\s\d{3}\s\d{3})/);
                    if (phoneMatch) phone = phoneMatch[0];
                    const clientDisplay = d.client || (client !== '-' ? client : (d.source ? 'Nguồn ' + d.source : 'Khách liên hệ'));
                    const fullClient = clientDisplay + (phone ? ' (' + phone + ')' : '');

                    // Badge trạng thái chuẩn màu sắc
                    let badgeClass = 'badge-gold';
                    let stageText = '💬 Tư vấn';
                    if (d.stage === 'moi') { badgeClass = 'badge-gold'; stageText = '🆕 Mới'; }
                    else if (d.stage === 'baogia') { badgeClass = 'badge-blue'; stageText = '🧾 Báo giá'; }
                    else if (d.stage === 'hopdong') { badgeClass = 'badge-green'; stageText = '🤝 Hợp đồng'; }
                    else if (d.stage === 'danglam') { badgeClass = 'badge-purple'; stageText = '🏗️ Đang làm'; }
                    else if (d.stage === 'thanhtoan') { badgeClass = 'badge-gray'; stageText = '💸 Giao / Thu'; }
                    else if (d.stageLabel) { stageText = d.stageLabel; }

                    const rowIndex = homeStart + idx + 1;
                    html += '<tr style="cursor: pointer;" onclick="openUpdateProjectModal(\'' + d.id + '\');" title="Bấm để cập nhật tiến độ dự án">' +
                        '<td align="center" style="color: var(--text-muted); font-weight: 700;">' + (rowIndex < 10 ? '0' + rowIndex : rowIndex) + '</td>' +
                        '<td style="font-weight: 700; color: #0F172A;">' +
                            (d.isPotential ? '<span style="color: var(--primary-gold); margin-right: 4px;" title="Dự án Tiềm năng">⭐</span>' : '') +
                            d.name +
                        '</td>' +
                        '<td style="white-space: nowrap; color: #475569; font-weight: 600;">' + (d.date || '-') + '</td>' +
                        '<td style="color: #334155; font-weight: 500;">' + fullClient + '</td>' +
                        '<td><span class="badge ' + badgeClass + '">' + stageText + '</span></td>' +
                        '<td><strong style="color: #0F172A;">' + (d.assignee || '-') + '</strong></td>' +
                        '<td style="font-size: 0.8rem; color: #475569; line-height: 1.45; word-break: break-word; white-space: pre-line;">' + (d.note || '-') + '</td>' +
                        '</tr>';
                });
                tbody.innerHTML = html;
            }
        }

        // 5. Render Mobile Card List (< 768px)
        const mobileContainer = document.getElementById('homeProjectMobileCards');
        if (mobileContainer) {
            if (stageFiltered.length === 0) {
                mobileContainer.innerHTML = '<div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.85rem; background: #FFFFFF; border-radius: 8px; border: 1px dashed #CBD5E1;">Không có dự án nào phù hợp với bộ lọc trạng thái đã chọn</div>';
            } else {
                let mHtml = '';
                pagedLeads.forEach((d, idx) => {
                    let client = '-';
                    let phone = '';
                    if (d.name.includes('+')) {
                        client = d.name.split('+').pop().trim();
                    } else if (d.name.includes('-')) {
                        const parts = d.name.split('-');
                        if (parts.length > 2) client = parts.pop().trim();
                    }
                    const phoneMatch = ((d.note || '') + ' ' + (d.name || '')).match(/(0\d{9,10}|\d{4}\s\d{3}\s\d{3})/);
                    if (phoneMatch) phone = phoneMatch[0];
                    const clientDisplay = d.client || (client !== '-' ? client : (d.source ? 'Nguồn ' + d.source : 'Khách liên hệ'));
                    const fullClient = clientDisplay + (phone ? ' (' + phone + ')' : '');

                    let colorClass = 'gold';
                    let badgeClass = 'badge-gold';
                    let stageText = '💬 Tư vấn';
                    if (d.stage === 'moi') { colorClass = 'gold'; badgeClass = 'badge-gold'; stageText = '🆕 Mới'; }
                    else if (d.stage === 'baogia') { colorClass = 'blue'; badgeClass = 'badge-blue'; stageText = '🧾 Báo giá'; }
                    else if (d.stage === 'hopdong') { colorClass = 'green'; badgeClass = 'badge-green'; stageText = '🤝 Hợp đồng'; }
                    else if (d.stage === 'danglam') { colorClass = 'purple'; badgeClass = 'badge-purple'; stageText = '🏗️ Đang làm'; }
                    else if (d.stage === 'thanhtoan') { colorClass = 'slate'; badgeClass = 'badge-gray'; stageText = '💸 Giao / Thu'; }
                    else if (d.stageLabel) { stageText = d.stageLabel; }

                    const rowIndex = homeStart + idx + 1;
                    mHtml += '<div class="project-card ' + colorClass + '" onclick="openUpdateProjectModal(\'' + d.id + '\');" style="cursor: pointer;">' +
                        '<div class="project-card-header">' +
                            '<div class="project-card-title">' +
                                (rowIndex < 10 ? '0' + rowIndex : rowIndex) + '. ' +
                                (d.isPotential ? '<span style="color: var(--primary-gold);">⭐ </span>' : '') +
                                d.name +
                            '</div>' +
                            '<span class="badge ' + badgeClass + '">' + stageText + '</span>' +
                        '</div>' +
                        '<div class="project-card-meta">' +
                            '<span>📅 ' + (d.date || '-') + '</span>' +
                            '<span>👤 ' + fullClient + '</span>' +
                            '<span>🎯 <strong>' + (d.assignee || '-') + '</strong></span>' +
                        '</div>' +
                        (d.note ? '<div style="font-size: 0.76rem; color: #475569; background: #F8FAFC; padding: 6px 8px; border-radius: 6px; line-height: 1.4; margin-top: 4px; border: 1px solid #F1F5F9;">' + d.note + '</div>' : '') +
                        '</div>';
                });
                mobileContainer.innerHTML = mHtml;
            }
        }

        // 6. Render Thanh Phân Trang
        const paginationEl = document.getElementById('homeTablePaginationBar');
        if (paginationEl) {
            paginationEl.innerHTML = renderPaginationHtml(totalHomeItems, totalHomePages, homeTableCurrentPage, 'changeHomeTablePage');
            paginationEl.style.display = totalHomeItems > 0 ? 'flex' : 'none';
        }
    }

    // 4. PO ENTRY FORM LOGIC
    function setLeadSource(srcValue, btnElement) {
        document.getElementById('leadSource').value = srcValue;
        document.querySelectorAll('.pill-opt').forEach(el => el.classList.remove('active'));
        if (btnElement) btnElement.classList.add('active');
        updateNameHint();
    }

    function autoGenerateProjectName() {
        const client = document.getElementById('leadClientName').value.trim();
        const cat = document.getElementById('leadCategory').value;
        const nameInput = document.getElementById('leadProjectName');
        if (client && !nameInput.dataset.manual) {
            nameInput.value = cat + ' - ' + client;
        }
    }

    function updateNameHint() {
        // Optional hint handler
    }

    document.getElementById('leadProjectName').addEventListener('input', function() {
        this.dataset.manual = 'true';
    });

    let clientSearchDebounce = null;

    function handleClientSearch(val) {
        const query = (val || '').trim();
        const resultsEl = document.getElementById('clientSearchResults');
        const clearBtn = document.getElementById('btnClearClientSearch');
        const memberIdInput = document.getElementById('leadClientMemberId');
        const statusTag = document.getElementById('clientStatusTag');

        // Reset ID nếu người dùng tự sửa lại text
        if (memberIdInput && memberIdInput.value) {
            memberIdInput.value = '';
            if (statusTag) {
                statusTag.innerHTML = '';
            }
        }

        if (clearBtn) {
            clearBtn.style.display = query ? 'block' : 'none';
        }

        if (clientSearchDebounce) clearTimeout(clientSearchDebounce);

        if (!query) {
            if (resultsEl) resultsEl.style.display = 'none';
            return;
        }

        clientSearchDebounce = setTimeout(async () => {
            try {
                const resp = await fetch(API_BASE + '/api/search-members?q=' + encodeURIComponent(query));
                const data = await resp.json();
                renderClientSearchResults(query, (data && data.results) || []);
            } catch (err) {
                console.warn('Lỗi tìm kiếm thành viên:', err);
            }
        }, 200);
    }

    function renderClientSearchResults(query, list) {
        const resultsEl = document.getElementById('clientSearchResults');
        if (!resultsEl) return;

        let html = '';
        if (list && list.length > 0) {
            html += '<div style="padding: 6px 12px; font-size: 0.72rem; font-weight: 700; color: #64748B; background: #F8FAFC; border-bottom: 1px solid #E2E8F0;">🔍 THÀNH VIÊN ĐÃ CÓ TRÊN HỆ THỐNG</div>';
            list.forEach(item => {
                const phoneStr = item.phone ? ' (' + item.phone + ')' : '';
                const relStr = item.relation ? ' • ' + item.relation : '';
                const safeName = (item.name || '').replace(/'/g, "\\'");
                const safePhone = (item.phone || '').replace(/'/g, "\\'");
                html += '<div class="client-search-item" onclick="selectClientMember(\'' + item.id + '\', \'' + safeName + '\', \'' + safePhone + '\')">' +
                    '<div>' +
                        '<div style="font-weight: 700; color: #0F172A; font-size: 0.88rem;">👤 ' + item.name + phoneStr + '</div>' +
                        '<div style="font-size: 0.72rem; color: #64748B;">' + (item.phone ? '📞 ' + item.phone : '') + relStr + '</div>' +
                    '</div>' +
                    '<span class="badge badge-gold" style="font-size: 0.7rem;">Chọn</span>' +
                '</div>';
            });
        }

        // Tùy chọn tạo khách hàng mới
        const safeQuery = query.replace(/'/g, "\\'");
        html += '<div class="client-search-item create-new" onclick="chooseNewClient(\'' + safeQuery + '\')">' +
            '<div>' +
                '<div style="font-weight: 700; color: #B45309; font-size: 0.86rem;">➕ Tạo khách hàng mới: "' + query + '"</div>' +
                '<div style="font-size: 0.72rem; color: #92400E;">Sẽ tự động tạo data trong Bảng Thành Viên khi lên đơn</div>' +
            '</div>' +
            '<span class="badge" style="background: #F59E0B; color: #FFF; font-size: 0.7rem;">Mới</span>' +
        '</div>';

        resultsEl.innerHTML = html;
        resultsEl.style.display = 'block';
    }

    function selectClientMember(id, name, phone) {
        const nameInput = document.getElementById('leadClientName');
        const phoneInput = document.getElementById('leadPhone');
        const memberIdInput = document.getElementById('leadClientMemberId');
        const statusTag = document.getElementById('clientStatusTag');
        const resultsEl = document.getElementById('clientSearchResults');
        const clearBtn = document.getElementById('btnClearClientSearch');

        if (nameInput) nameInput.value = name;
        if (phoneInput && phone) phoneInput.value = phone;
        if (memberIdInput) memberIdInput.value = id;
        if (clearBtn) clearBtn.style.display = 'block';
        if (resultsEl) resultsEl.style.display = 'none';

        if (statusTag) {
            statusTag.innerHTML = '✅ Đã liên kết: Khách hàng có sẵn';
            statusTag.style.color = 'var(--success)';
        }

        autoGenerateProjectName();
    }

    function chooseNewClient(name) {
        const nameInput = document.getElementById('leadClientName');
        const memberIdInput = document.getElementById('leadClientMemberId');
        const statusTag = document.getElementById('clientStatusTag');
        const resultsEl = document.getElementById('clientSearchResults');
        const clearBtn = document.getElementById('btnClearClientSearch');

        if (nameInput) nameInput.value = name;
        if (memberIdInput) memberIdInput.value = '';
        if (clearBtn) clearBtn.style.display = 'block';
        if (resultsEl) resultsEl.style.display = 'none';

        if (statusTag) {
            statusTag.innerHTML = '🆕 Khách hàng mới (Sẽ tạo vào DB)';
            statusTag.style.color = 'var(--primary-gold)';
        }

        autoGenerateProjectName();
    }

    function clearSelectedClient() {
        const nameInput = document.getElementById('leadClientName');
        const phoneInput = document.getElementById('leadPhone');
        const memberIdInput = document.getElementById('leadClientMemberId');
        const statusTag = document.getElementById('clientStatusTag');
        const resultsEl = document.getElementById('clientSearchResults');
        const clearBtn = document.getElementById('btnClearClientSearch');

        if (nameInput) nameInput.value = '';
        if (phoneInput) phoneInput.value = '';
        if (memberIdInput) memberIdInput.value = '';
        if (statusTag) statusTag.innerHTML = '';
        if (resultsEl) resultsEl.style.display = 'none';
        if (clearBtn) clearBtn.style.display = 'none';

        autoGenerateProjectName();
    }

    // Đóng dropdown tìm kiếm khi bấm ra ngoài
    document.addEventListener('click', function(e) {
        const clientResults = document.getElementById('clientSearchResults');
        const clientInput = document.getElementById('leadClientName');
        if (clientResults && clientInput && !clientResults.contains(e.target) && e.target !== clientInput) {
            clientResults.style.display = 'none';
        }
    });

    function initNewLeadDates() {
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const dd = String(now.getDate()).padStart(2, '0');
        const todayStr = `${yyyy}-${mm}-${dd}`;
        
        const contactEl = document.getElementById('leadContactDate');
        if (contactEl) {
            contactEl.value = todayStr;
        }
        const reminderEl = document.getElementById('leadReminderDate');
        if (reminderEl) {
            reminderEl.value = `${todayStr}T09:00`;
        }
    }

    // Tự động đồng bộ giờ nhắc hẹn 09:00 khi đổi ngày liên hệ
    setTimeout(() => {
        const contactEl = document.getElementById('leadContactDate');
        if (contactEl) {
            contactEl.addEventListener('change', function() {
                const val = this.value;
                const remEl = document.getElementById('leadReminderDate');
                if (val && remEl) {
                    remEl.value = `${val}T09:00`;
                }
            });
        }
        initNewLeadDates();
    }, 100);

    async function submitNewLead() {
        const name = document.getElementById('leadProjectName').value;
        const cat = document.getElementById('leadCategory').value;
        const client = document.getElementById('leadClientName').value;
        const clientMemberId = (document.getElementById('leadClientMemberId') && document.getElementById('leadClientMemberId').value) ? document.getElementById('leadClientMemberId').value : '';
        const phone = document.getElementById('leadPhone').value;
        const src = document.getElementById('leadSource').value;
        const adv = document.getElementById('leadAdvisor').value;
        const note = document.getElementById('leadNote').value;
        const contactDateInput = document.getElementById('leadContactDate');
        const contactDate = (contactDateInput && contactDateInput.value) ? contactDateInput.value : new Date().toISOString().split('T')[0];
        const reminderInput = document.getElementById('leadReminderDate');
        const reminderDate = (reminderInput && reminderInput.value) ? reminderInput.value : (new Date().toISOString().split('T')[0] + 'T09:00');

        const submitBtn = document.getElementById('btnSubmitNewLead');
        const origBtnText = submitBtn ? submitBtn.innerHTML : '';
        if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = '⏳ Đang tạo đơn trên Notion...'; }

        copyNewLeadZaloText();

        try {
            const resp = await fetch(API_BASE + '/api/create-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    projectName: name,
                    category: cat,
                    clientName: client,
                    clientMemberId: clientMemberId,
                    phone: phone,
                    source: src,
                    advisor: adv,
                    note: note,
                    contactDate: contactDate,
                    reminderDate: reminderDate
                })
            });
            const res = await resp.json();
            if (res && res.success) {
                showToast('🎉 Đã tạo đơn mới [Trạng thái: 🆕 Mới] thành công trên Notion & Bắn Telegram!');

                const createdId = res.pageId || ('local-' + Date.now());
                const createdItem = {
                    id: createdId,
                    name: name,
                    date: formatDateVN(contactDate),
                    rawDate: contactDate,
                    nhacHen: reminderDate.includes('T') ? reminderDate : `${reminderDate}T09:00:00+07:00`,
                    ngayLienHe: contactDate,
                    stage: 'moi',
                    stageLabel: '🆕 Mới',
                    assignee: adv === 'TIEN' ? 'Phạm Hoàng Tiến' : 'Võ Minh Sang',
                    tech: '-',
                    source: src,
                    note: note || 'Đơn hàng mới tạo qua WebApp',
                    isPotential: false
                };

                // 1. Đưa ngay vào đầu danh sách pipelineData
                if (!pipelineData.some(p => p.id === createdItem.id)) {
                    pipelineData.unshift(createdItem);
                }

                // 2. Lưu vào localStorage để không bị mất khi F5 trang
                try {
                    let localLeads = JSON.parse(localStorage.getItem('songanh_local_leads') || '[]');
                    localLeads = localLeads.filter(l => l.id !== createdItem.id);
                    localLeads.unshift(createdItem);
                    localStorage.setItem('songanh_local_leads', JSON.stringify(localLeads));
                } catch (e) {
                    console.warn('Could not save to localStorage:', e);
                }

                // 3. Render lại toàn bộ giao diện bảng và bộ lọc
                renderPipelineViews();
                renderCustomerViews();
                applyGlobalFilterToViews();

                const previewCard = document.getElementById('newLeadPreviewCard');
                if (previewCard) {
                    previewCard.style.display = 'block';
                    previewCard.style.background = '#ECFDF5';
                    previewCard.style.borderColor = 'var(--success)';
                    previewCard.innerHTML = '<div style="color: var(--success); font-weight: 800; margin-bottom: 6px;">✅ ĐÃ TẠO ĐƠN THÀNH CÔNG TRÊN NOTION!</div>' +
                        '<div style="font-size: 0.82rem; color: #0F172A;">• Tên dự án: <strong>' + name + '</strong></div>' +
                        '<div style="font-size: 0.82rem; color: #0F172A;">• Trạng thái: <span class="badge badge-gold" style="font-weight: 700;">🆕 Mới</span> | Ngày liên hệ: <strong>' + formatDateVN(contactDate) + '</strong> | Nhắc hẹn: <strong>09:00 ngày cập nhật</strong></div>' +
                        '<div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">' +
                            (res.url ? '<a href="' + res.url + '" target="_blank" class="btn btn-sm btn-gold" style="padding: 4px 10px; font-size: 0.72rem;">🔗 Mở Trang Notion Dự Án</a>' : '') +
                            '<button class="btn btn-sm" style="background: #0284C7; color: #FFFFFF; border: none; font-weight: 700; padding: 4px 10px; font-size: 0.72rem; cursor: pointer;" onclick="switchAppTab(\'tab-theo-doi\'); selectProject(\'' + createdItem.id + '\');">💬 Cập Nhật Tiến Độ Ngay Cho Đơn Này</button>' +
                        '</div>';
                }
                document.getElementById('newLeadForm').reset();
                clearSelectedClient();
                initNewLeadDates();
            } else {
                showToast('📋 Đã sao chép cú pháp lên đơn! Sếp nhắn cho Agent để tạo ngay.');
            }
        } catch (err) {
            showToast('📋 Đã sao chép cú pháp lên đơn! Sếp nhắn cho Agent để tạo ngay.');
        } finally {
            if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = origBtnText; }
        }
    }

    function copyNewLeadZaloText() {
        const name = document.getElementById('leadProjectName').value || 'Dự án mới';
        const cat = document.getElementById('leadCategory').value;
        const client = document.getElementById('leadClientName').value;
        const phone = document.getElementById('leadPhone').value;
        const src = document.getElementById('leadSource').value;
        const adv = document.getElementById('leadAdvisor').value === 'TIEN' ? 'Phạm Hoàng Tiến' : 'Võ Minh Sang';
        const note = document.getElementById('leadNote').value;
        const contactDateInput = document.getElementById('leadContactDate');
        const contactDate = (contactDateInput && contactDateInput.value) ? contactDateInput.value : new Date().toISOString().split('T')[0];
        const contactDateDisplay = formatDateVN(contactDate);

        const text = `📋 [LÊN ĐƠN DỰ ÁN MỚI]
` +
            `• Tên dự án: ${name}
` +
            `• Ngày liên hệ: ${contactDateDisplay}
` +
            `• Lĩnh vực: Mô Hình | Danh mục: ${cat}
` +
            `• Khách hàng: ${client} ${phone ? `(${phone})` : ''}
` +
            `• Nguồn: ${src} | Phụ trách: ${adv}
` +
            `• Nhắc hẹn: 09:00 ngày cập nhật
` +
            (note ? `• Ghi chú: ${note}
` : ``) +
            `• Trạng thái: 🆕 Mới`;

        navigator.clipboard.writeText(text).then(() => {
            showToast('📋 Đã sao chép cú pháp lên đơn vào Clipboard!');
        });
    }

    // 5. PIPELINE TRACKING & COMMENTS LOGIC
    let currentStage = 'all';
    let currentSelectedProject = null;
    let pipelineCurrentPage = 1;
    const PIPELINE_PAGE_SIZE = 10;

    function filterPipeline(stage, btnElement) {
        currentStage = stage;
        pipelineCurrentPage = 1; // Reset về trang 1 khi lọc
        document.querySelectorAll('.filter-btn').forEach(b => {
            if (b.id && b.id.startsWith('btn-filter-')) b.classList.remove('active');
        });
        if (btnElement) btnElement.classList.add('active');
        renderPipelineViews();
    }

    function changePipelinePage(newPage) {
        pipelineCurrentPage = newPage;
        renderPipelineViews();
        const el = document.getElementById('pipelineThead') || document.getElementById('pipelineMobileCards');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function renderPipelineViews() {
        const tuvanCount = pipelineData.filter(d => d.stage === 'tuvan' || d.stage === 'moi').length;
        const baogiaCount = pipelineData.filter(d => d.stage === 'baogia').length;
        const hopdongCount = pipelineData.filter(d => d.stage === 'hopdong').length;
        const danglamCount = pipelineData.filter(d => d.stage === 'danglam').length;
        const thanhtoanCount = pipelineData.filter(d => d.stage === 'thanhtoan').length;
        const tiemnangCount = pipelineData.filter(d => d.isPotential).length;

        const btnAll = document.getElementById('btn-filter-all');
        if (btnAll) btnAll.innerText = 'Tất Cả (' + pipelineData.length + ')';
        const btnTiemnang = document.getElementById('btn-filter-tiemnang');
        if (btnTiemnang) btnTiemnang.innerHTML = '⭐ Tiềm Năng (' + tiemnangCount + ')';
        const btnTuvan = document.getElementById('btn-filter-tuvan');
        if (btnTuvan) btnTuvan.innerHTML = '💬 1. Tư Vấn (' + tuvanCount + ')';
        const btnBaogia = document.getElementById('btn-filter-baogia');
        if (btnBaogia) btnBaogia.innerHTML = '🧾 2. Báo Giá (' + baogiaCount + ')';
        const btnHopdong = document.getElementById('btn-filter-hopdong');
        if (btnHopdong) btnHopdong.innerHTML = '🤝 3. Hợp Đồng (' + hopdongCount + ')';
        const btnDanglam = document.getElementById('btn-filter-danglam');
        if (btnDanglam) btnDanglam.innerHTML = '🏗️ 4. Đang Làm (' + danglamCount + ')';
        const btnThanhtoan = document.getElementById('btn-filter-thanhtoan');
        if (btnThanhtoan) btnThanhtoan.innerHTML = '💸 5. Giao / Thu (' + thanhtoanCount + ')';

        let filtered = pipelineData;
        if (currentStage === 'tiemnang') {
            filtered = pipelineData.filter(d => d.isPotential);
        } else if (currentStage === 'tuvan') {
            filtered = pipelineData.filter(d => d.stage === 'tuvan' || d.stage === 'moi');
        } else if (currentStage !== 'all') {
            filtered = pipelineData.filter(d => d.stage === currentStage);
        }

        const totalPipelineItems = filtered.length;
        const totalPipelinePages = Math.ceil(totalPipelineItems / PIPELINE_PAGE_SIZE) || 1;
        if (pipelineCurrentPage > totalPipelinePages) pipelineCurrentPage = totalPipelinePages;
        if (pipelineCurrentPage < 1) pipelineCurrentPage = 1;

        const pipelineStart = (pipelineCurrentPage - 1) * PIPELINE_PAGE_SIZE;
        const pipelineEnd = Math.min(pipelineStart + PIPELINE_PAGE_SIZE, totalPipelineItems);
        const pagedFiltered = filtered.slice(pipelineStart, pipelineEnd);

        const showTech = currentStage === 'danglam' || currentStage === 'thanhtoan' || currentStage === 'all';

        // 1. Table Desktop
        const theadEl = document.getElementById('pipelineThead');
        const tbodyEl = document.getElementById('pipelineTbody');
        if (theadEl && tbodyEl) {
            theadEl.innerHTML = '<tr>' +
                '<th width="35">#</th>' +
                '<th style="min-width: 170px;">TÊN DỰ ÁN</th>' +
                '<th>NGÀY</th>' +
                '<th>TƯ VẤN</th>' +
                (showTech ? '<th>KỸ THUẬT</th>' : '') +
                '<th style="min-width: 200px;">GHI CHÚ TIẾN ĐỘ THỰC TẾ</th>' +
                '</tr>';

            if (filtered.length === 0) {
                tbodyEl.innerHTML = '<tr><td colspan="' + (showTech ? 6 : 5) + '" align="center" style="padding: 20px; color: var(--text-muted);">Không có dự án nào trong mục này</td></tr>';
            } else {
                let tbodyHtml = '';
                pagedFiltered.forEach((d, idx) => {
                    const rowIndex = pipelineStart + idx + 1;
                    tbodyHtml += '<tr style="cursor: pointer;" onclick="openUpdateProjectModal(\'' + d.id + '\')" title="Bấm để ghi nhận cập nhật dự án">' +
                        '<td align="center" style="color: var(--text-muted); font-weight: 700;">' + (rowIndex < 10 ? '0' + rowIndex : rowIndex) + '</td>' +
                        '<td style="font-weight: 700; color: #0F172A;">' +
                            (d.isPotential ? '<span style="color: var(--primary-gold); margin-right: 4px;" title="Dự án Tiềm năng">⭐</span>' : '') +
                            d.name +
                        '</td>' +
                        '<td style="white-space: nowrap; color: #475569;">' + (d.date || '-') + '</td>' +
                        '<td><strong style="color: #0F172A;">' + (d.assignee || '-') + '</strong></td>' +
                        (showTech ? '<td style="color: #0284C7; font-weight: 700;">' + (d.tech || '-') + '</td>' : '') +
                        '<td style="font-size: 0.8rem; color: #334155; white-space: pre-line; word-break: break-word; line-height: 1.45;">' + (d.note || '-') + '</td>' +
                        '</tr>';
                });
                tbodyEl.innerHTML = tbodyHtml;
            }
        }

        // 2. Cards Mobile (< 768px)
        const mobileContainer = document.getElementById('pipelineMobileCards');
        if (mobileContainer) {
            if (filtered.length === 0) {
                mobileContainer.innerHTML = '<div style="text-align: center; padding: 20px; color: var(--text-muted); font-size: 0.85rem; background: #FFFFFF; border-radius: 8px; border: 1px dashed #CBD5E1;">Không có dự án nào trong mục này</div>';
            } else {
                let mobileCardsHtml = '';
                pagedFiltered.forEach((d, idx) => {
                    const colorClass = d.stage === 'hopdong' ? 'green' : (d.stage === 'baogia' ? 'blue' : (d.stage === 'danglam' ? 'purple' : (d.stage === 'thanhtoan' ? 'slate' : 'gold')));
                    const badgeClass = d.stage === 'hopdong' ? 'badge-green' : (d.stage === 'baogia' ? 'badge-blue' : (d.stage === 'danglam' ? 'badge-purple' : (d.stage === 'thanhtoan' ? 'badge-gray' : 'badge-gold')));
                    const rowIndex = pipelineStart + idx + 1;

                    mobileCardsHtml += '<div class="project-card ' + colorClass + '" onclick="openUpdateProjectModal(\'' + d.id + '\')" style="cursor: pointer;">' +
                        '<div class="project-card-header">' +
                            '<div class="project-card-title">' +
                                (rowIndex < 10 ? '0' + rowIndex : rowIndex) + '. ' +
                                (d.isPotential ? '<span style="color: var(--primary-gold);">⭐ </span>' : '') +
                                d.name +
                            '</div>' +
                            '<span class="badge ' + badgeClass + '">' + (d.stageLabel || d.stage) + '</span>' +
                        '</div>' +
                        '<div class="project-card-meta">' +
                            '<div>📅 ' + (d.date || '-') + '</div>' +
                            '<div>👤 Tư vấn: <strong>' + (d.assignee || '-') + '</strong></div>' +
                            (d.tech && d.tech !== '-' ? '<div>🔧 Kỹ thuật: <strong style="color: #0284C7;">' + d.tech + '</strong></div>' : '') +
                        '</div>' +
                        (d.note ? '<div class="project-card-note">' + d.note + '</div>' : '') +
                        '</div>';
                });
                mobileContainer.innerHTML = mobileCardsHtml;
            }
        }

        // 3. Thanh Phân Trang Pipeline
        const pipelinePagEl = document.getElementById('pipelinePaginationBar');
        if (pipelinePagEl) {
            pipelinePagEl.innerHTML = renderPaginationHtml(totalPipelineItems, totalPipelinePages, pipelineCurrentPage, 'changePipelinePage');
            pipelinePagEl.style.display = totalPipelineItems > 0 ? 'flex' : 'none';
        }
    }

    // MODAL CẬP NHẬT DỰ ÁN & TIẾN ĐỘ NOTION

    // ==========================================
    // 3.5 HOME KPI DETAIL MODAL LOGIC (POPUP MODAL)
    // ==========================================
    let currentKpiModalData = [];
    let currentKpiModalType = '';

    function formatVNDate(dStr) {
        if (!dStr) return '-';
        if (typeof dStr !== 'string') return '-';
        const s = dStr.trim();
        if (s.includes('-')) {
            const p = s.substring(0, 10).split('-');
            if (p.length === 3) return `${p[2]}/${p[1]}/${p[0]}`;
        }
        if (s.includes('/')) {
            const p = s.split('/');
            if (p.length === 2) return `${p[0]}/${p[1]}/2026`;
            if (p.length === 3) return s;
        }
        return s;
    }

    function openHomeKpiModal(type) {
        currentKpiModalType = type;
        const modal = document.getElementById('modalHomeKpiDetail');
        if (!modal) return;

        const iconEl = document.getElementById('homeKpiModalIcon');
        const titleEl = document.getElementById('homeKpiModalTitle');
        const subEl = document.getElementById('homeKpiModalSubtitle');
        const badgeEl = document.getElementById('homeKpiModalBadge');
        const searchInput = document.getElementById('homeKpiSearchInput');
        if (searchInput) searchInput.value = '';

        let list = [];
        let title = 'Danh Sách Dự Án';
        let subtitle = 'Phạm vi theo bộ lọc hiện tại';
        let icon = '📋';

        let filteredLeads = pipelineData;
        if (filterDateStart && filterDateEnd) {
            filteredLeads = pipelineData.filter(p => {
                const pDate = parseLienHeDate(p);
                if (!pDate) return false;
                return pDate >= filterDateStart && pDate <= filterDateEnd;
            });
        }

        if (type === 'new_leads') {
            icon = '👥';
            title = 'Danh Sách Khách Hàng Mới Tiếp Nhận';
            subtitle = document.getElementById('filterActiveText') ? ('Phạm vi: ' + document.getElementById('filterActiveText').innerText) : 'Trong kỳ lọc hiện tại';
            list = [...filteredLeads];
        } else if (type === 'danglam' || type === 'in_production') {
            icon = '🏗️';
            title = 'Danh Sách Dự Án Đang Làm (Xưởng Thi Công)';
            subtitle = 'Toàn bộ 12 dự án đang triển khai sản xuất thực tế tại xưởng';
            list = pipelineData.filter(p => p.stage === 'danglam');
        } else if (type === 'tiemnang' || type === 'potential') {
            icon = '⭐';
            title = 'Danh Sách Dự Án Tiềm Năng Bám Sát';
            subtitle = 'Các deal ưu tiên cao nhất cần bám sát để chốt cọc (loại trừ đã hủy / hoàn thành / thanh toán)';
            list = pipelineData.filter(p => p.isPotential === true && p.stage !== 'huy' && p.stage !== 'hoanthanh' && p.stage !== 'thanhtoan');
        } else if (type === 'src_tien') {
            icon = '📱';
            title = 'Khách Hàng Nguồn Zalo / Hotline Tiến';
            subtitle = 'Phân bổ theo bộ lọc thời gian hiện tại';
            list = filteredLeads.filter(p => {
                const s = (p.source || '').toLowerCase();
                const a = (p.assignee || '').toLowerCase();
                return s.includes('tiến') || a.includes('tiến');
            });
        } else if (type === 'src_sep') {
            icon = '🏢';
            title = 'Khách Hàng Nguồn Hotline Sếp / BGĐ';
            subtitle = 'Phân bổ theo bộ lọc thời gian hiện tại';
            list = filteredLeads.filter(p => {
                const s = (p.source || '').toLowerCase();
                return s.includes('sếp') || s.includes('bgđ') || s.includes('thiện');
            });
        } else if (type === 'src_sang') {
            icon = '📱';
            title = 'Khách Hàng Nguồn Zalo Sang';
            subtitle = 'Phân bổ theo bộ lọc thời gian hiện tại';
            list = filteredLeads.filter(p => {
                const s = (p.source || '').toLowerCase();
                const a = (p.assignee || '').toLowerCase();
                return s.includes('sang') || a.includes('sang');
            });
        } else if (type === 'src_cu') {
            icon = '🔄';
            title = 'Khách Hàng Cũ & Giới Thiệu';
            subtitle = 'Phân bổ theo bộ lọc thời gian hiện tại';
            list = filteredLeads.filter(p => {
                const s = (p.source || '').toLowerCase();
                const a = (p.assignee || '').toLowerCase();
                return !s.includes('tiến') && !a.includes('tiến') && !s.includes('sếp') && !s.includes('bgđ') && !s.includes('thiện') && !s.includes('sang') && !a.includes('sang');
            });
        } else {
            list = [...pipelineData];
        }

        currentKpiModalData = list;
        if (iconEl) iconEl.innerText = icon;
        if (titleEl) titleEl.innerText = title;
        if (subEl) subEl.innerText = subtitle;
        if (badgeEl) badgeEl.innerText = list.length + ' Dự án';

        renderHomeKpiModalList(list);

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }


    // ==========================================
    // 3.8 GLOBAL HEADER PROJECT SEARCH (Ctrl + K)
    // ==========================================
    function removeVietnameseTones(str) {
        if (!str) return '';
        return str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
            .toLowerCase()
            .trim();
    }

    function handleGlobalProjectSearch(val) {
        const query = (val || '').trim();
        const resultsBox = document.getElementById('globalProjectSearchResults');
        const clearBtn = document.getElementById('clearGlobalSearchBtn');
        if (!resultsBox) return;

        if (clearBtn) {
            clearBtn.style.display = query ? 'inline-flex' : 'none';
        }

        if (!query) {
            resultsBox.style.display = 'none';
            resultsBox.innerHTML = '';
            return;
        }

        const qNorm = removeVietnameseTones(query);
        const qLower = query.toLowerCase();
        const qCompact = query.toLowerCase().replace(/[\s\.\-_]/g, '');

        const matches = pipelineData.filter(p => {
            const rawName = p.name || '';
            const rawAssignee = p.assignee || '';
            const rawSource = p.source || '';
            const rawCategory = p.category || '';
            const rawTech = p.tech || '';
            const rawNote = p.note || '';
            const rawPhone = p.phone || p.sdt || p.tel || '';

            const allText = `${rawName} ${rawAssignee} ${rawSource} ${rawCategory} ${rawTech} ${rawPhone} ${rawNote}`;
            const normText = removeVietnameseTones(allText);
            const compactText = allText.toLowerCase().replace(/[\s\.\-_]/g, '');

            return normText.includes(qNorm) ||
                   allText.toLowerCase().includes(qLower) ||
                   (qCompact.length >= 3 && compactText.includes(qCompact));
        });

        if (matches.length === 0) {
            resultsBox.innerHTML = `
                <div class="global-search-empty">
                    <span style="font-size: 1.6rem;">🔍</span>
                    <div style="font-weight: 700; color: #0F172A; margin-top: 6px;">Không tìm thấy dự án phù hợp</div>
                    <div style="font-size: 0.74rem; color: #94A3B8; margin-top: 2px;">Thử tìm theo tên khác, người tư vấn, số điện thoại hoặc từ khóa</div>
                </div>
            `;
            resultsBox.style.display = 'block';
            return;
        }

        let html = `
            <div class="global-search-header">
                <span>📋 KẾT QUẢ TÌM KIẾM</span>
                <span>Tìm thấy <strong>${matches.length}</strong> dự án</span>
            </div>
        `;

        matches.slice(0, 25).forEach((p) => {
            let badgeClass = 'badge-gold';
            let stageText = '💬 Tư vấn';
            if (p.stage === 'danglam') { badgeClass = 'badge-purple'; stageText = '🏗️ Đang làm'; }
            else if (p.stage === 'hopdong') { badgeClass = 'badge-green'; stageText = '🤝 Hợp đồng'; }
            else if (p.stage === 'baogia') { badgeClass = 'badge-blue'; stageText = '🧾 Báo giá'; }
            else if (p.stage === 'tuvan') { badgeClass = 'badge-gold'; stageText = '💬 Tư vấn'; }
            else if (p.stage === 'thanhtoan') { badgeClass = 'badge-gray'; stageText = '💸 Giao / Thu'; }
            else if (p.stage === 'hoanthanh') { badgeClass = 'badge-green'; stageText = '🏆 Hoàn thành'; }
            else if (p.stage === 'huy') { badgeClass = 'badge-gray'; stageText = '❌ Đã hủy'; }
            else if (p.stageLabel) { stageText = p.stageLabel; }

            const star = p.isPotential ? '<span style="color: var(--primary-gold); margin-right: 4px;" title="Dự án Tiềm năng">⭐</span>' : '';

            html += `
                <div class="global-search-item" onclick="selectGlobalSearchResult('${p.id}')">
                    <div class="global-search-item-top">
                        <div class="global-search-item-title">${star}${p.name}</div>
                        <span class="badge ${badgeClass}" style="flex-shrink: 0;">${stageText}</span>
                    </div>
                    <div class="global-search-item-meta">
                        <span>👤 <strong>${p.assignee || '-'}</strong></span>
                    </div>
                </div>
            `;
        });

        if (matches.length > 25) {
            html += `
                <div style="padding: 8px 14px; text-align: center; font-size: 0.74rem; color: #64748B; background: #F8FAFC; border-top: 1px solid #F1F5F9;">
                    Còn <strong>${matches.length - 25}</strong> dự án khác. Vui lòng nhập từ khóa chi tiết hơn.
                </div>
            `;
        }

        resultsBox.innerHTML = html;
        resultsBox.style.display = 'block';
    }

    function selectGlobalSearchResult(projectId) {
        const resultsBox = document.getElementById('globalProjectSearchResults');
        if (resultsBox) resultsBox.style.display = 'none';
        const inp = document.getElementById('globalProjectSearchInput');
        if (inp) inp.blur();
        openUpdateProjectModal(projectId);
    }

    function clearGlobalSearch() {
        const inp = document.getElementById('globalProjectSearchInput');
        const clearBtn = document.getElementById('clearGlobalSearchBtn');
        const resultsBox = document.getElementById('globalProjectSearchResults');
        if (inp) {
            inp.value = '';
            inp.focus();
        }
        if (clearBtn) clearBtn.style.display = 'none';
        if (resultsBox) {
            resultsBox.style.display = 'none';
            resultsBox.innerHTML = '';
        }
    }

    function handleGlobalSearchKeyDown(e) {
        if (e.key === 'Escape') {
            const resultsBox = document.getElementById('globalProjectSearchResults');
            if (resultsBox) resultsBox.style.display = 'none';
            const inp = document.getElementById('globalProjectSearchInput');
            if (inp) inp.blur();
        } else if (e.key === 'Enter') {
            const firstItem = document.querySelector('#globalProjectSearchResults .global-search-item');
            if (firstItem) {
                firstItem.click();
            }
        }
    }

    // Event listener click outside dropdown
    document.addEventListener('click', function(e) {
        const wrap = document.getElementById('topbarSearchWrap');
        const dropdown = document.getElementById('globalProjectSearchResults');
        if (wrap && dropdown && !wrap.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });

    // Global keyboard shortcuts (Ctrl + K, Cmd + K, '/', Escape)
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K' || e.code === 'KeyK')) {
            e.preventDefault();
            const inp = document.getElementById('globalProjectSearchInput');
            if (inp) {
                inp.focus();
                inp.select();
                if (inp.value && inp.value.trim()) handleGlobalProjectSearch(inp.value);
            }
            return;
        }

        if (e.key === 'Escape') {
            const dropdown = document.getElementById('globalProjectSearchResults');
            if (dropdown && dropdown.style.display !== 'none') {
                dropdown.style.display = 'none';
            }
            const inp = document.getElementById('globalProjectSearchInput');
            if (inp && document.activeElement === inp) {
                inp.blur();
            }
            if (typeof closeHomeKpiModal === 'function') closeHomeKpiModal();
            if (typeof closeUpdateProjectModal === 'function') closeUpdateProjectModal();
            return;
        }

        const activeTag = document.activeElement ? document.activeElement.tagName : '';
        const isEditable = document.activeElement ? document.activeElement.isContentEditable : false;
        if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(activeTag) && !isEditable) {
            e.preventDefault();
            const inp = document.getElementById('globalProjectSearchInput');
            if (inp) {
                inp.focus();
                inp.select();
                if (inp.value && inp.value.trim()) handleGlobalProjectSearch(inp.value);
            }
            return;
        }
    });

    function openUpdateProjectModal(projectId) {
        const modal = document.getElementById('modalUpdateProject');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        if (projectId) {
            selectProject(projectId, false);
        } else if (!currentSelectedProject) {
            const searchInput = document.getElementById('projectSearchInput');
            if (searchInput) {
                setTimeout(() => searchInput.focus(), 150);
            }
        }
    }

    function closeUpdateProjectModal() {
        const modal = document.getElementById('modalUpdateProject');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    function handleProjectSearch(query) {
        const q = (query || '').toLowerCase().trim();
        const resultsBox = document.getElementById('projectSearchResults');
        if (!resultsBox) return;
        
        if (!q || q.length < 2) {
            resultsBox.style.display = 'none';
            return;
        }

        const matches = pipelineData.filter(p => 
            (p.name && p.name.toLowerCase().includes(q)) ||
            (p.assignee && p.assignee.toLowerCase().includes(q)) ||
            (p.tech && p.tech.toLowerCase().includes(q)) ||
            (p.note && p.note.toLowerCase().includes(q))
        ).slice(0, 10);

        if (matches.length === 0) {
            resultsBox.innerHTML = '<div style="padding: 10px; font-size: 0.8rem; color: #64748B;">Không tìm thấy dự án phù hợp</div>';
            resultsBox.style.display = 'block';
            return;
        }

        let html = '';
        matches.forEach(p => {
            html += '<div class="project-search-item" onclick="selectProject(\'' + p.id + '\', false)">' +
                '<div>' +
                    '<div style="font-weight: 700; font-size: 0.82rem; color: #0F172A;">' +
                        (p.isPotential ? '⭐ ' : '') + p.name +
                    '</div>' +
                    '<div style="font-size: 0.72rem; color: #64748B; margin-top: 2px;">' +
                        'Tư vấn: <strong>' + (p.assignee || '-') + '</strong> | Ngày: ' + (p.date || '-') +
                    '</div>' +
                '</div>' +
                '<span class="badge badge-gold">' + (p.stageLabel || p.stage) + '</span>' +
            '</div>';
        });
        resultsBox.innerHTML = html;
        resultsBox.style.display = 'block';
    }

    function selectProject(projectId, shouldOpenModal = true) {
        let proj = pipelineData.find(p => p.id === projectId);
        if (!proj && typeof allLeadsCache !== 'undefined' && Array.isArray(allLeadsCache)) {
            const raw = allLeadsCache.find(l => l.id === projectId);
            if (raw) {
                proj = {
                    id: raw.id,
                    name: raw.name || 'Dự án không tên',
                    stage: raw.stage || 'tuvan',
                    stageLabel: raw.stageLabel || '💬 1. Tư Vấn',
                    assignee: raw.assignee || 'Chưa gán',
                    tech: raw.tech || '-',
                    date: raw.date || '-',
                    note: raw.note || '',
                    isPotential: !!raw.isPotential
                };
            }
        }
        if (!proj) return;
        currentSelectedProject = proj;

        const selBox = document.getElementById('selectedProjectDetails');
        if (selBox) selBox.style.display = 'block';

        const nameEl = document.getElementById('selProjName');
        if (nameEl) nameEl.innerText = proj.name;

        const assEl = document.getElementById('selProjAssignee');
        if (assEl) assEl.innerText = proj.assignee;

        const stageEl = document.getElementById('selProjStage');
        if (stageEl) stageEl.innerText = proj.stageLabel || proj.stage;

        const techEl = document.getElementById('selProjTech');
        if (techEl) techEl.innerText = proj.tech || '-';

        const noteEl = document.getElementById('selProjNote');
        if (noteEl) noteEl.innerText = proj.note || 'Chưa có ghi chú tiến độ';

        const searchResults = document.getElementById('projectSearchResults');
        if (searchResults) searchResults.style.display = 'none';

        const searchInput = document.getElementById('projectSearchInput');
        if (searchInput) searchInput.value = proj.name;

        // Điền trạng thái hiện tại vào dropdown logNewStage
        const logNewStageEl = document.getElementById('logNewStage');
        if (logNewStageEl && proj.stage) {
            logNewStageEl.value = proj.stage;
        }

        if (shouldOpenModal) {
            openUpdateProjectModal();
        }

        const commentText = document.getElementById('logCommentText');
        if (commentText) {
            setTimeout(() => commentText.focus(), 150);
        }
    }

    function clearSelectedProject() {
        currentSelectedProject = null;
        const selBox = document.getElementById('selectedProjectDetails');
        if (selBox) selBox.style.display = 'none';
        const searchInput = document.getElementById('projectSearchInput');
        if (searchInput) {
            searchInput.value = '';
            searchInput.focus();
        }
    }

    function copyProjectLogText() {
        if (!currentSelectedProject) {
            alert('Vui lòng chọn một dự án trước.');
            return;
        }
        const commentInput = document.getElementById('logCommentText');
        const comment = commentInput ? commentInput.value.trim() : '';
        const authorEl = document.getElementById('logAuthor');
        const author = authorEl ? authorEl.value : 'Võ Minh Sang';
        const stageEl = document.getElementById('logNewStage');
        const newStage = stageEl && stageEl.selectedIndex >= 0 ? stageEl.options[stageEl.selectedIndex].text : '';

        if (!comment) {
            alert('Vui lòng nhập nội dung cập nhật tiến độ.');
            if (commentInput) commentInput.focus();
            return;
        }

        const text = `💬 [CẬP NHẬT TIẾN ĐỘ NOTION]\n` +
            `• Dự án: ${currentSelectedProject.name}\n` +
            `• Người ghi nhận: ${author}\n` +
            `• Nội dung: ${comment}\n` +
            (stageEl && stageEl.value ? `• Chuyển trạng thái: ${newStage}\n` : ``);

        navigator.clipboard.writeText(text).then(() => {
            showToast('📋 Đã sao chép nội dung cập nhật!');
        });
    }

    async function submitProjectLog() {
        if (!currentSelectedProject) {
            alert('Vui lòng tìm và chọn một dự án trước.');
            const searchInput = document.getElementById('projectSearchInput');
            if (searchInput) searchInput.focus();
            return;
        }
        const commentInput = document.getElementById('logCommentText');
        const comment = commentInput ? commentInput.value.trim() : '';
        if (!comment) {
            alert('Vui lòng nhập nội dung cập nhật tiến độ.');
            if (commentInput) commentInput.focus();
            return;
        }
        const authorEl = document.getElementById('logAuthor');
        const author = authorEl ? authorEl.value : 'Võ Minh Sang';
        const stageEl = document.getElementById('logNewStage');
        const newStage = stageEl ? stageEl.value : '';

        const submitBtn = document.getElementById('btnSubmitProjectLogModal');
        const origBtnText = submitBtn ? submitBtn.innerHTML : '';
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '⏳ Đang lưu vào Notion...';
        }

        copyProjectLogText();
        showToast('⏳ Đang lưu comment vào Notion...');

        try {
            const resp = await fetch(API_BASE + '/api/add-comment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    projectId: currentSelectedProject.id,
                    projectName: currentSelectedProject.name,
                    commentText: comment,
                    newStatus: newStage,
                    author: author
                })
            });
            const res = await resp.json();
            if (res && res.success) {
                showToast('🎉 Đã ghi nhận comment vào Notion & Bắn Telegram!');
                if (commentInput) commentInput.value = '';
                const newNote = '[' + new Date().toLocaleDateString('vi-VN') + ' - ' + author + ']: ' + comment + '\n' + (currentSelectedProject.note || '');
                currentSelectedProject.note = newNote;
                if (newStage) {
                    currentSelectedProject.stage = newStage;
                    if (newStage === 'tuvan') currentSelectedProject.stageLabel = '💬 1. Tư Vấn';
                    else if (newStage === 'baogia') currentSelectedProject.stageLabel = '🧾 2. Báo Giá';
                    else if (newStage === 'hopdong') currentSelectedProject.stageLabel = '🤝 3. Hợp Đồng';
                    else if (newStage === 'danglam') currentSelectedProject.stageLabel = '🏗️ 4. Đang Làm';
                    else if (newStage === 'thanhtoan') currentSelectedProject.stageLabel = '💸 5. Giao / Thu';
                }
                const selNoteEl = document.getElementById('selProjNote');
                if (selNoteEl) selNoteEl.innerText = newNote;

                // Đồng bộ cập nhật vào allLeadsCache và render lại
                if (typeof allLeadsCache !== 'undefined' && Array.isArray(allLeadsCache)) {
                    const idx = allLeadsCache.findIndex(l => l.id === currentSelectedProject.id);
                    if (idx !== -1) {
                        allLeadsCache[idx].note = newNote;
                        if (newStage) allLeadsCache[idx].stage = newStage;
                    }
                    if (typeof renderHomeProjectTable === 'function') renderHomeProjectTable(allLeadsCache);
                }
                renderPipelineViews();

                setTimeout(() => {
                    closeUpdateProjectModal();
                }, 900);
            } else {
                showToast('📋 Đã sao chép nội dung! Vui lòng kiểm tra lại kết nối Notion.');
            }
        } catch (err) {
            console.error('Lỗi khi lưu comment:', err);
            showToast('📋 Đã sao chép nội dung! Sếp gửi tin nhắn để lưu Notion.');
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = origBtnText;
            }
        }
    }

    
    // ==================== ĐỊNH DẠNG NGÀY THÁNG VIỆT NAM DD/MM/YYYY (INVARIANT 5) ====================
    function formatDateVN(val) {
        if (!val) return '-';
        if (typeof val === 'string') {
            const clean = val.trim();
            const isoMatch = clean.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/);
            if (isoMatch) {
                const [, y, m, d, hh, mm] = isoMatch;
                if (hh && mm) {
                    return `${d}/${m}/${y} ${hh}:${mm}`;
                }
                return `${d}/${m}/${y}`;
            }
            const dmMatch = clean.match(/^(\d{1,2})\/(\d{1,2})$/);
            if (dmMatch) {
                return `${dmMatch[1].padStart(2, '0')}/${dmMatch[2].padStart(2, '0')}/2026`;
            }
            const dmyMatch = clean.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2}))?/);
            if (dmyMatch) {
                const [, d, m, y, hh, mm] = dmyMatch;
                if (hh && mm) {
                    return `${d.padStart(2, '0')}/${m.padStart(2, '0')}/${y} ${hh.padStart(2, '0')}:${mm}`;
                }
                return `${d.padStart(2, '0')}/${m.padStart(2, '0')}/${y}`;
            }
        }
        if (val instanceof Date && !isNaN(val)) {
            const d = String(val.getDate()).padStart(2, '0');
            const m = String(val.getMonth() + 1).padStart(2, '0');
            const y = val.getFullYear();
            return `${d}/${m}/${y}`;
        }
        return String(val);
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // ==================== POPUP MODAL TẠI CÁC THẺ KPI TRANG CHỦ (YÊU CẦU 1) ====================
    function openKpiModal(type) {
        const modal = document.getElementById('modalKpiProjects');
        const iconEl = document.getElementById('kpiModalIcon');
        const titleEl = document.getElementById('kpiModalTitle');
        const badgeEl = document.getElementById('kpiModalBadge');
        const subtitleEl = document.getElementById('kpiModalSubtitle');
        const bodyEl = document.getElementById('kpiModalBody');
        if (!modal || !bodyEl) return;

        let title = '';
        let icon = '📋';
        let badgeText = '';
        let badgeCls = 'badge-gold';
        let subtitle = '';
        let tableHtml = '';
        let mobileCardsHtml = '';

        if (type === 'new_leads') {
            icon = '🌟';
            title = 'Danh Sách Khách Hàng Mới Tiếp Nhận';
            badgeCls = 'badge-gold';

            let list = pipelineData;
            if (filterDateStart && filterDateEnd) {
                list = pipelineData.filter(p => {
                    const pDate = parseLienHeDate(p);
                    if (!pDate) return false;
                    return pDate >= filterDateStart && pDate <= filterDateEnd;
                });
            }

            const countStr = list.length < 10 ? '0' + list.length : String(list.length);
            badgeText = `${countStr} Khách mới`;
            const periodText = document.getElementById('filterActiveText') ? document.getElementById('filterActiveText').innerText : 'Kỳ lọc hiện tại';
            subtitle = `Kỳ lọc: ${periodText} • Bấm vào từng dòng để mở chi tiết & cập nhật tiến độ`;

            let rows = '';
            if (list.length === 0) {
                rows = '<tr><td colspan="5" style="text-align: center; padding: 28px; color: #94A3B8; font-style: italic;">Không có khách hàng mới tiếp nhận trong kỳ lọc này.</td></tr>';
                mobileCardsHtml = '<div style="text-align: center; padding: 24px; color: #94A3B8; font-style: italic;">Không có khách hàng mới tiếp nhận trong kỳ lọc này.</div>';
            } else {
                list.forEach((p, idx) => {
                    const idxStr = (idx + 1) < 10 ? '0' + (idx + 1) : (idx + 1);
                    const dateDisplay = formatDateVN(p.ngayLienHe || p.rawDate || p.nhacHen);
                    const stLabel = p.stageLabel || '💬 Tư vấn';
                    let stBadge = 'badge-gold';
                    if (stLabel.includes('Hợp đồng')) stBadge = 'badge-green';
                    else if (stLabel.includes('Báo giá')) stBadge = 'badge-blue';
                    else if (stLabel.includes('Đang làm')) stBadge = 'badge-purple';
                    else if (stLabel.includes('Thanh toán')) stBadge = 'badge-gray';

                    rows += `
                        <tr style="cursor: pointer;" onclick="closeKpiModal(); openUpdateProjectModal('${p.id}');" title="Bấm để cập nhật tiến độ dự án">
                            <td style="text-align: center; width: 45px; font-weight: 700; color: #64748B;">${idxStr}</td>
                            <td style="font-weight: 700; color: #0F172A;">${escapeHtml(p.name)}</td>
                            <td style="white-space: nowrap; color: #0284C7; font-weight: 600;">📅 ${dateDisplay}</td>
                            <td style="white-space: nowrap;"><span class="badge badge-gray">👤 ${escapeHtml(p.assignee || 'Tiến & Sang')}</span></td>
                            <td style="white-space: nowrap;"><span class="badge ${stBadge}">${stLabel}</span></td>
                        </tr>
                    `;

                    mobileCardsHtml += `
                        <div class="project-card" style="cursor: pointer;" onclick="closeKpiModal(); openUpdateProjectModal('${p.id}');">
                            <div class="project-card-header">
                                <div class="project-card-title">${idxStr}. ${escapeHtml(p.name)}</div>
                                <span class="badge ${stBadge}">${stLabel}</span>
                            </div>
                            <div class="project-card-meta">
                                <div>📅 Ngày liên hệ: <strong>${dateDisplay}</strong></div>
                                <div>👤 Sale: <strong>${escapeHtml(p.assignee || 'Tiến & Sang')}</strong></div>
                                <div>📱 Nguồn: <strong>${escapeHtml(p.source || 'Tiếp nhận')}</strong></div>
                            </div>
                        </div>
                    `;
                });
            }

            tableHtml = `
                <div class="desktop-table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th style="text-align: center; width: 45px;">#</th>
                                <th>Tiêu Đề Dự Án</th>
                                <th style="width: 140px;">Ngày Liên Hệ</th>
                                <th style="width: 150px;">Người Theo Dõi (Sale)</th>
                                <th style="width: 120px;">Trạng Thái</th>
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
                <div class="mobile-card-list">${mobileCardsHtml}</div>
            `;

        } else if (type === 'in_production' || type === 'danglam') {
            icon = '🏗️';
            title = 'Dự Án Đang Làm Tại Xưởng';
            badgeCls = 'badge-green';
            const list = pipelineData.filter(p => p.stage === 'danglam');
            const countStr = list.length < 10 ? '0' + list.length : String(list.length);
            badgeText = `${countStr} Dự án thi công`;
            subtitle = 'Toàn bộ 12 dự án sa bàn đang được chế tác thực tế tại xưởng 230/70/28 Nguyễn Xiển';

            let rows = '';
            list.forEach((p, idx) => {
                const idxStr = (idx + 1) < 10 ? '0' + (idx + 1) : (idx + 1);
                const deadlineDisplay = formatDateVN(p.nhacHen || p.rawDate);
                const assigneeStr = p.assignee ? `Tư vấn: ${p.assignee}` : 'Phụ trách';
                const techStr = p.tech && p.tech !== '-' ? ` • Kỹ thuật: ${p.tech}` : '';
                const notePreview = p.note ? p.note.replace(/\n/g, ' • ') : 'Đang cập nhật tiến độ chi tiết';

                rows += `
                    <tr style="cursor: pointer;" onclick="closeKpiModal(); openUpdateProjectModal('${p.id}');" title="Bấm để cập nhật tiến độ dự án">
                        <td style="text-align: center; width: 45px; font-weight: 700; color: #64748B;">${idxStr}</td>
                        <td style="font-weight: 700; color: #0F172A;">
                            <div>${escapeHtml(p.name)}</div>
                            <div style="font-size: 0.72rem; color: #64748B; margin-top: 2px;">📂 Danh mục: <strong>${escapeHtml(p.category || 'Mô hình')}</strong></div>
                        </td>
                        <td style="white-space: nowrap; color: #DC2626; font-weight: 700;">📅 ${deadlineDisplay}</td>
                        <td style="white-space: nowrap; font-size: 0.76rem;">
                            <span class="badge badge-gray">👤 ${escapeHtml(assigneeStr + techStr)}</span>
                        </td>
                        <td style="max-width: 270px; font-size: 0.76rem; color: #475569; line-height: 1.35;">
                            <div style="max-height: 46px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                                ${escapeHtml(notePreview)}
                            </div>
                        </td>
                    </tr>
                `;

                mobileCardsHtml += `
                    <div class="project-card green" style="cursor: pointer;" onclick="closeKpiModal(); openUpdateProjectModal('${p.id}');">
                        <div class="project-card-header">
                            <div class="project-card-title">${idxStr}. ${escapeHtml(p.name)}</div>
                            <span class="badge badge-green">🏗️ Đang làm</span>
                        </div>
                        <div class="project-card-meta">
                            <div>📅 Nhắc hẹn / Hạn chót: <strong style="color: #DC2626;">${deadlineDisplay}</strong></div>
                            <div>👤 Người theo dõi: <strong>${escapeHtml(p.assignee || '-')}${techStr}</strong></div>
                            <div style="width: 100%; margin-top: 4px; padding-top: 4px; border-top: 1px dashed #E2E8F0; color: #334155;">
                                📝 <i>${escapeHtml(notePreview)}</i>
                            </div>
                        </div>
                    </div>
                `;
            });

            tableHtml = `
                <div class="desktop-table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th style="text-align: center; width: 45px;">#</th>
                                <th>Tiêu Đề Dự Án</th>
                                <th style="width: 140px;">Nhắc Hẹn / Hạn Chót</th>
                                <th style="width: 180px;">Người Theo Dõi</th>
                                <th>Tiến Độ / Ghi Chú</th>
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
                <div class="mobile-card-list">${mobileCardsHtml}</div>
            `;

        } else if (type === 'potential' || type === 'tiemnang') {
            icon = '⭐';
            title = 'Danh Sách Dự Án Tiềm Năng';
            badgeCls = 'badge-blue';
            const list = pipelineData.filter(p => p.isPotential === true && p.stage !== 'huy' && p.stage !== 'hoanthanh' && p.stage !== 'thanhtoan');
            const countStr = list.length < 10 ? '0' + list.length : String(list.length);
            badgeText = `${countStr} Dự án trọng điểm`;
            subtitle = 'Các dự án tiềm năng đang bám sát chốt cọc (loại trừ đã hủy / hoàn thành / thanh toán)';

            let rows = '';
            list.forEach((p, idx) => {
                const idxStr = (idx + 1) < 10 ? '0' + (idx + 1) : (idx + 1);
                const stLabel = p.stageLabel || '🧾 Báo giá';
                let stBadge = 'badge-blue';
                if (stLabel.includes('Hợp đồng')) stBadge = 'badge-green';
                else if (stLabel.includes('Đang làm')) stBadge = 'badge-purple';
                else if (stLabel.includes('Tư vấn')) stBadge = 'badge-gold';

                const cat = p.category || 'Kiến trúc';
                let catBadge = 'badge-gray';
                if (cat.includes('Quy hoạch')) catBadge = 'badge-blue';
                else if (cat.includes('Cao tầng')) catBadge = 'badge-gold';
                else if (cat.includes('Nhà máy')) catBadge = 'badge-purple';
                else if (cat.includes('Sửa chữa')) catBadge = 'badge-green';

                const notePreview = p.note ? p.note.replace(/\n/g, ' • ') : 'Đang bám sát báo giá & tư vấn';

                rows += `
                    <tr style="cursor: pointer;" onclick="closeKpiModal(); openUpdateProjectModal('${p.id}');" title="Bấm để cập nhật tiến độ dự án">
                        <td style="text-align: center; width: 45px; font-weight: 700; color: #64748B;">${idxStr}</td>
                        <td style="font-weight: 700; color: #0F172A;">
                            <span style="color: #D97706; margin-right: 4px;">★</span>${escapeHtml(p.name)}
                        </td>
                        <td style="white-space: nowrap;"><span class="badge ${stBadge}">${stLabel}</span></td>
                        <td style="white-space: nowrap;"><span class="badge ${catBadge}">${escapeHtml(cat)}</span></td>
                        <td style="white-space: nowrap;"><span class="badge badge-gray">👤 ${escapeHtml(p.assignee || 'Phạm Hoàng Tiến')}</span></td>
                        <td style="max-width: 250px; font-size: 0.76rem; color: #475569; line-height: 1.35;">
                            <div style="max-height: 46px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                                ${escapeHtml(notePreview)}
                            </div>
                        </td>
                    </tr>
                `;

                mobileCardsHtml += `
                    <div class="project-card blue" style="cursor: pointer;" onclick="closeKpiModal(); openUpdateProjectModal('${p.id}');">
                        <div class="project-card-header">
                            <div class="project-card-title">${idxStr}. ${escapeHtml(p.name)}</div>
                            <span class="badge ${stBadge}">${stLabel}</span>
                        </div>
                        <div class="project-card-meta">
                            <div>📂 Danh mục: <strong>${escapeHtml(cat)}</strong></div>
                            <div>👤 Phụ trách: <strong>${escapeHtml(p.assignee || 'Phạm Hoàng Tiến')}</strong></div>
                            <div style="width: 100%; margin-top: 4px; padding-top: 4px; border-top: 1px dashed #E2E8F0; color: #334155;">
                                📝 <i>${escapeHtml(notePreview)}</i>
                            </div>
                        </div>
                    </div>
                `;
            });

            tableHtml = `
                <div class="desktop-table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th style="text-align: center; width: 45px;">#</th>
                                <th>Tiêu Đề Dự Án</th>
                                <th style="width: 120px;">Trạng Thái</th>
                                <th style="width: 140px;">Danh Mục</th>
                                <th style="width: 160px;">Người Tư Vấn</th>
                                <th>Ghi Chú Tiến Độ Thực Tế</th>
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
                <div class="mobile-card-list">${mobileCardsHtml}</div>
            `;
        }

        bodyEl.innerHTML = tableHtml;
        iconEl.innerText = icon;
        titleEl.innerText = title;
        badgeEl.className = 'badge ' + badgeCls;
        badgeEl.innerText = badgeText;
        subtitleEl.innerText = subtitle;

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeKpiModal() {
        const modal = document.getElementById('modalKpiProjects');
        if (modal) modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    // Đóng modal khi nhấn phím Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const kpiModal = document.getElementById('modalKpiProjects');
            if (kpiModal && kpiModal.style.display === 'flex') {
                closeKpiModal();
            }
            const modal = document.getElementById('modalUpdateProject');
            if (modal && modal.style.display === 'flex') {
                closeUpdateProjectModal();
            }
        }
    });

    // 6. CUSTOMER CRM LOGIC
    let customerFilterAdvisor = 'all';
    let customerSearchQuery = '';

    function filterCustomerByAdvisor(advisor, btnElement) {
        customerFilterAdvisor = advisor;
        document.querySelectorAll('#tab-khach-hang .filter-btn').forEach(b => b.classList.remove('active'));
        if (btnElement) btnElement.classList.add('active');
        renderCustomerViews();
    }

    function filterCustomerList(query) {
        customerSearchQuery = (query || '').toLowerCase().trim();
        renderCustomerViews();
    }

    function renderCustomerViews() {
        let customers = pipelineData.map(p => {
            let client = '-';
            let phone = '';
            if (p.name.includes('+')) {
                client = p.name.split('+').pop().trim();
            } else if (p.name.includes('-')) {
                const parts = p.name.split('-');
                if (parts.length > 2) client = parts.pop().trim();
            }

            const phoneMatch = (p.note || '' + p.name).match(/(0\d{9,10}|\d{4}\s\d{3}\s\d{3})/);
            if (phoneMatch) phone = phoneMatch[0];

            return {
                id: p.id,
                client: client !== '-' ? client : (p.source || 'Khách liên hệ'),
                projectName: p.name,
                phone: phone,
                source: p.source || 'Zalo',
                advisor: p.assignee || 'Chưa rõ',
                stageLabel: p.stageLabel,
                stage: p.stage,
                isPotential: p.isPotential
            };
        });

        if (customerFilterAdvisor === 'Tiến') {
            customers = customers.filter(c => c.advisor.includes('Tiến'));
        } else if (customerFilterAdvisor === 'Sang') {
            customers = customers.filter(c => c.advisor.includes('Sang'));
        }

        if (customerSearchQuery) {
            customers = customers.filter(c => 
                c.client.toLowerCase().includes(customerSearchQuery) ||
                c.projectName.toLowerCase().includes(customerSearchQuery) ||
                c.phone.toLowerCase().includes(customerSearchQuery) ||
                c.source.toLowerCase().includes(customerSearchQuery)
            );
        }

        const tbody = document.getElementById('customerTableBody');
        if (tbody) {
            let html = '';
            customers.forEach((c, idx) => {
                html += '<tr>' +
                    '<td align="center">' + (idx + 1) + '</td>' +
                    '<td style="font-weight: 700; color: #0F172A;">' +
                        (c.isPotential ? '<span style="color: var(--primary-gold);">⭐ </span>' : '') + c.client +
                    '</td>' +
                    '<td>' + (c.phone ? '<a href="tel:' + c.phone.replace(/\s+/g, '') + '" style="color: var(--primary-gold); text-decoration: none; font-weight: 700;">📞 ' + c.phone + '</a>' : '<span style="color: #94A3B8;">-</span>') + '</td>' +
                    '<td style="font-size: 0.8rem; color: #334155;">' + c.projectName + '</td>' +
                    '<td>' + c.source + '</td>' +
                    '<td><strong>' + c.advisor + '</strong></td>' +
                    '<td><span class="badge ' + (c.stage === 'hopdong' ? 'badge-green' : (c.stage === 'baogia' ? 'badge-blue' : (c.stage === 'danglam' ? 'badge-purple' : 'badge-gold'))) + '">' + c.stageLabel + '</span></td>' +
                    '</tr>';
            });
            if (customers.length === 0) {
                html = '<tr><td colspan="7" align="center" style="padding: 16px; color: var(--text-muted);">Không tìm thấy khách hàng phù hợp</td></tr>';
            }
            tbody.innerHTML = html;
        }

        const mobileBox = document.getElementById('customerMobileCards');
        if (mobileBox) {
            let html = '';
            customers.forEach((c, idx) => {
                html += '<div class="project-card" style="border-left-color: var(--primary-gold);">' +
                    '<div class="project-card-header">' +
                        '<div class="project-card-title">' +
                            (idx + 1) + '. ' +
                            (c.isPotential ? '<span style="color: var(--primary-gold);">⭐ </span>' : '') +
                            c.client +
                        '</div>' +
                        '<span class="badge badge-gold">' + c.stageLabel + '</span>' +
                    '</div>' +
                    '<div class="project-card-meta">' +
                        (c.phone ? '<div>📞 <a href="tel:' + c.phone.replace(/\s+/g, '') + '" style="color: var(--primary-gold); font-weight: 700;">' + c.phone + '</a></div>' : '') +
                        '<div>👤 Phụ trách: <strong>' + c.advisor + '</strong></div>' +
                        '<div>📱 Nguồn: ' + c.source + '</div>' +
                    '</div>' +
                    '<div class="project-card-note">🏢 Dự án: <strong>' + c.projectName + '</strong></div>' +
                    '</div>';
            });
            mobileBox.innerHTML = html;
        }
    }

    
    // =========================================================================
    // 📊 WEEKLY REPORT ENGINE - SONG ANH SALE
    // =========================================================================
    function computeWeeklyDatePresets() {
        const now = new Date();
        const y = now.getFullYear();
        const m = now.getMonth();
        const d = now.getDate();
        const day = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
        const mondayDiff = day === 0 ? -6 : 1 - day;

        const mondayThisWeek = new Date(y, m, d + mondayDiff);
        const sundayThisWeek = new Date(y, m, d + mondayDiff + 6);

        const mondayLastWeek = new Date(y, m, d + mondayDiff - 7);
        const sundayLastWeek = new Date(y, m, d + mondayDiff - 1);

        const monday2WeeksAgo = new Date(y, m, d + mondayDiff - 14);
        const sunday2WeeksAgo = new Date(y, m, d + mondayDiff - 8);

        const firstDayThisMonth = new Date(y, m, 1);
        const lastDayThisMonth = new Date(y, m + 1, 0);

        const firstDayLastMonth = new Date(y, m - 1, 1);
        const lastDayLastMonth = new Date(y, m, 0);

        const toYMD = (dt) => {
            const yr = dt.getFullYear();
            const mo = String(dt.getMonth() + 1).padStart(2, '0');
            const da = String(dt.getDate()).padStart(2, '0');
            return `${yr}-${mo}-${da}`;
        };

        const strMonThis = toYMD(mondayThisWeek);
        const strSunThis = toYMD(sundayThisWeek);
        const strMonLast = toYMD(mondayLastWeek);
        const strSunLast = toYMD(sundayLastWeek);
        const strMon2W = toYMD(monday2WeeksAgo);
        const strSun2W = toYMD(sunday2WeeksAgo);
        const strFirstThisM = toYMD(firstDayThisMonth);
        const strLastThisM = toYMD(lastDayThisMonth);
        const strFirstLastM = toYMD(firstDayLastMonth);
        const strLastLastM = toYMD(lastDayLastMonth);

        return {
            'this-week': {
                start: strMonThis,
                end: strSunThis,
                label: `Tuần Này (${formatVNStandardDate(strMonThis)} - ${formatVNStandardDate(strSunThis)})`,
                prevKey: 'last-week',
                prevStart: strMonLast,
                prevEnd: strSunLast,
                prevLabel: `Tuần trước (${formatVNStandardDate(strMonLast)} - ${formatVNStandardDate(strSunLast)})`
            },
            'last-week': {
                start: strMonLast,
                end: strSunLast,
                label: `Tuần Trước (${formatVNStandardDate(strMonLast)} - ${formatVNStandardDate(strSunLast)})`,
                prevKey: '2-weeks-ago',
                prevStart: strMon2W,
                prevEnd: strSun2W,
                prevLabel: `2 Tuần trước (${formatVNStandardDate(strMon2W)} - ${formatVNStandardDate(strSun2W)})`
            },
            '2-weeks-ago': {
                start: strMon2W,
                end: strSun2W,
                label: `2 Tuần Trước (${formatVNStandardDate(strMon2W)} - ${formatVNStandardDate(strSun2W)})`,
                prevKey: null,
                prevStart: toYMD(new Date(y, m, d + mondayDiff - 21)),
                prevEnd: toYMD(new Date(y, m, d + mondayDiff - 15)),
                prevLabel: `Tuần trước đó`
            },
            'this-month': {
                start: strFirstThisM,
                end: strLastThisM,
                label: `Tháng Này (Tháng ${String(m + 1).padStart(2, '0')}/${y})`,
                prevKey: 'last-month',
                prevStart: strFirstLastM,
                prevEnd: strLastLastM,
                prevLabel: `Tháng trước (Tháng ${String(firstDayLastMonth.getMonth() + 1).padStart(2, '0')}/${firstDayLastMonth.getFullYear()})`
            },
            'last-month': {
                start: strFirstLastM,
                end: strLastLastM,
                label: `Tháng Trước (Tháng ${String(firstDayLastMonth.getMonth() + 1).padStart(2, '0')}/${firstDayLastMonth.getFullYear()})`,
                prevKey: null,
                prevStart: toYMD(new Date(y, m - 2, 1)),
                prevEnd: toYMD(new Date(y, m - 1, 0)),
                prevLabel: `Tháng ${String(new Date(y, m - 2, 1).getMonth() + 1).padStart(2, '0')}/${new Date(y, m - 2, 1).getFullYear()}`
            },
            'all': {
                start: '2020-01-01',
                end: '2030-12-31',
                label: 'Tất Cả Dữ Liệu',
                prevKey: null,
                prevStart: '',
                prevEnd: '',
                prevLabel: 'Toàn bộ dữ liệu'
            }
        };
    }

    const _initWeeklyPresets = computeWeeklyDatePresets();
    let currentWeeklyFilter = {
        type: 'this-week',
        startDate: _initWeeklyPresets['this-week'].start,
        endDate: _initWeeklyPresets['this-week'].end,
        label: _initWeeklyPresets['this-week'].label,
        prevKey: _initWeeklyPresets['this-week'].prevKey,
        prevStart: _initWeeklyPresets['this-week'].prevStart,
        prevEnd: _initWeeklyPresets['this-week'].prevEnd,
        prevLabel: _initWeeklyPresets['this-week'].prevLabel
    };
    let weeklySearchKeyword = '';
    let weeklySelectedStage = 'all';
    let weeklyDateSortOrder = 'asc'; // 'asc' = A-Z (cũ đến mới), 'desc' = Z-A (mới đến cũ)
    let currentWeeklyZaloText = '';

    function onWeeklyFilterSelectChange(val) {
        const presets = computeWeeklyDatePresets();
        const customBox = document.getElementById('weeklyCustomRangeBox');
        if (val === 'custom') {
            if (customBox) customBox.style.display = 'inline-flex';
            const sInput = document.getElementById('weeklyCustomStart');
            const eInput = document.getElementById('weeklyCustomEnd');
            if (sInput && !sInput.value) sInput.value = presets['this-week'].start;
            if (eInput && !eInput.value) eInput.value = presets['this-week'].end;
            onWeeklyCustomDateChange();
            return;
        }

        if (customBox) customBox.style.display = 'none';
        const preset = presets[val] || presets['this-week'];
        currentWeeklyFilter = {
            type: val,
            startDate: preset.start,
            endDate: preset.end,
            label: preset.label,
            prevKey: preset.prevKey,
            prevStart: preset.prevStart,
            prevEnd: preset.prevEnd,
            prevLabel: preset.prevLabel
        };
        updateWeeklyRangeDisplay();
        renderWeeklyReport();
    }

    function onWeeklyCustomDateChange() {
        const presets = computeWeeklyDatePresets();
        const sVal = document.getElementById('weeklyCustomStart')?.value || presets['this-week'].start;
        const eVal = document.getElementById('weeklyCustomEnd')?.value || presets['this-week'].end;
        
        // Calculate previous comparison period of equal duration
        const sDt = new Date(sVal);
        const eDt = new Date(eVal);
        const diffMs = Math.max(86400000, eDt.getTime() - sDt.getTime());
        const prevEndDt = new Date(sDt.getTime() - 86400000);
        const prevStartDt = new Date(prevEndDt.getTime() - diffMs);
        
        const toYMD = dt => `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`;
        const pStart = toYMD(prevStartDt);
        const pEnd = toYMD(prevEndDt);

        currentWeeklyFilter = {
            type: 'custom',
            startDate: sVal,
            endDate: eVal,
            label: `Tùy Chọn (${formatVNStandardDate(sVal)} - ${formatVNStandardDate(eVal)})`,
            prevKey: null,
            prevStart: pStart,
            prevEnd: pEnd,
            prevLabel: `Kỳ trước (${formatVNStandardDate(pStart)} - ${formatVNStandardDate(pEnd)})`
        };
        updateWeeklyRangeDisplay();
        renderWeeklyReport();
    }

    function updateWeeklyRangeDisplay() {
        const rangeText = document.getElementById('weeklyRangeText');
        if (rangeText) {
            if (currentWeeklyFilter.type === 'all') {
                rangeText.innerText = 'Toàn Bộ Dữ Liệu';
            } else {
                rangeText.innerText = `${formatVNStandardDate(currentWeeklyFilter.startDate)} ➔ ${formatVNStandardDate(currentWeeklyFilter.endDate)}`;
            }
        }
    }

    function jumpToPreviousPeriod() {
        if (currentWeeklyFilter.prevKey) {
            const sel = document.getElementById('weeklySelectFilter');
            if (sel) {
                sel.value = currentWeeklyFilter.prevKey;
                onWeeklyFilterSelectChange(currentWeeklyFilter.prevKey);
            }
        } else if (currentWeeklyFilter.prevStart && currentWeeklyFilter.prevEnd) {
            const sel = document.getElementById('weeklySelectFilter');
            if (sel) sel.value = 'custom';
            const sInput = document.getElementById('weeklyCustomStart');
            const eInput = document.getElementById('weeklyCustomEnd');
            if (sInput) sInput.value = currentWeeklyFilter.prevStart;
            if (eInput) eInput.value = currentWeeklyFilter.prevEnd;
            onWeeklyCustomDateChange();
        }
    }

    function onWeeklySearchInput(val) {
        weeklySearchKeyword = (val || '').toLowerCase().trim();
        renderWeeklyCustomerList();
    }

    function onWeeklyStageFilterChange(val) {
        weeklySelectedStage = val || 'all';
        renderWeeklyCustomerList();
    }

    function onWeeklySortChange(val) {
        weeklyDateSortOrder = val || 'asc';
        const icon = document.getElementById('weeklyDateSortIcon');
        if (icon) icon.innerText = (weeklyDateSortOrder === 'asc' ? '▲' : '▼');
        renderWeeklyCustomerList();
    }

    function toggleWeeklyDateSort() {
        weeklyDateSortOrder = (weeklyDateSortOrder === 'asc') ? 'desc' : 'asc';
        const sel = document.getElementById('weeklyDateSort');
        if (sel) sel.value = weeklyDateSortOrder;
        const icon = document.getElementById('weeklyDateSortIcon');
        if (icon) icon.innerText = (weeklyDateSortOrder === 'asc' ? '▲' : '▼');
        renderWeeklyCustomerList();
    }

    // Helper: Normalize date string to YYYY-MM-DD
    function normalizeDateToYMD(dateStr) {
        if (!dateStr) return '';
        dateStr = dateStr.trim();
        if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) return dateStr.slice(0, 10);
        if (/^\d{1,2}\/\d{1,2}\/\d{4}/.test(dateStr)) {
            const parts = dateStr.split('/');
            return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
        }
        if (/^\d{1,2}\/\d{1,2}$/.test(dateStr)) {
            const parts = dateStr.split('/');
            return `2026-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
        }
        return '';
    }

    // Standard Vietnamese Date Formatter: DD/MM/YYYY (Workspace Invariant Rule 5)
    function formatVNStandardDate(dateStr) {
        if (!dateStr) return '-';
        dateStr = dateStr.trim();
        if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) {
            const p = dateStr.slice(0, 10).split('-');
            return `${p[2]}/${p[1]}/${p[0]}`;
        }
        if (/^\d{1,2}\/\d{1,2}$/.test(dateStr)) {
            const p = dateStr.split('/');
            return `${p[0].padStart(2, '0')}/${p[1].padStart(2, '0')}/2026`;
        }
        return dateStr;
    }

    // Filter projects within current week by 'ngayLienHe' (fallback to rawDate)
    function getWeeklyFilteredProjects() {
        const s = currentWeeklyFilter.startDate;
        const e = currentWeeklyFilter.endDate;
        return pipelineData.filter(p => {
            const rawContactDate = p.ngayLienHe || p.rawDate || p.date || '';
            const ymd = normalizeDateToYMD(rawContactDate);
            if (!ymd) return false;
            return ymd >= s && ymd <= e;
        });
    }

    // Parse Project Note into 3 Structured Sections (Hồ sơ, Kỹ thuật, Thanh toán)
    function parseProjectWorkshopNote(note) {
        if (!note || note === 'Đang cập nhật tiến độ chi tiết' || note === '-') {
            return {
                legal: 'Đang theo dõi hồ sơ thiết kế & ký kết.',
                tech: 'Đang chuẩn bị vật liệu và sắp xếp nhóm thi công.',
                money: 'Đang theo dõi tiến độ tạm ứng.'
            };
        }

        const lines = note.split(/\r?\n| • /);
        let legalLines = [];
        let techLines = [];
        let moneyLines = [];
        let currentSection = 'general';

        lines.forEach(rawLine => {
            const line = rawLine.trim();
            if (!line) return;

            const lower = line.toLowerCase();
            if (lower.startsWith('hồ sơ') || lower.startsWith('ho so')) {
                currentSection = 'legal';
                const clean = line.replace(/^[hH]ồ sơ[:\s]*/i, '').trim();
                if (clean) legalLines.push(clean);
                return;
            } else if (lower.startsWith('kỹ thuật') || lower.startsWith('ky thuat')) {
                currentSection = 'tech';
                const clean = line.replace(/^[kK]ỹ thuật[:\s]*/i, '').trim();
                if (clean) techLines.push(clean);
                return;
            } else if (lower.startsWith('thanh toán') || lower.startsWith('thanh toan')) {
                currentSection = 'money';
                const clean = line.replace(/^[tT]hanh toán[:\s]*/i, '').trim();
                if (clean) moneyLines.push(clean);
                return;
            }

            if (currentSection === 'legal') {
                legalLines.push(line);
            } else if (currentSection === 'tech') {
                techLines.push(line);
            } else if (currentSection === 'money') {
                moneyLines.push(line);
            } else {
                // Heuristic detection based on keywords
                if (lower.includes('hợp đồng') || lower.includes('ký') || lower.includes('hđ') || lower.includes('nghiệm thu')) {
                    legalLines.push(line);
                } else if (lower.includes('kính') || lower.includes('bục gỗ') || lower.includes('laser') || lower.includes('tiến độ') || lower.includes('%') || lower.includes('nhóm') || lower.includes('xưởng')) {
                    techLines.push(line);
                } else if (lower.includes('tạm ứng') || lower.includes('thanh toán') || lower.includes('phiếu thu') || lower.includes('đợt')) {
                    moneyLines.push(line);
                } else {
                    techLines.push(line);
                }
            }
        });

        return {
            legal: legalLines.join('\n') || 'Chưa ghi nhận biến động hồ sơ mới.',
            tech: techLines.join('\n') || 'Đang thi công trực tiếp tại xưởng Song Anh.',
            money: moneyLines.join('\n') || 'Đang cập nhật tiến độ thanh toán.'
        };
    }

    // MAIN RENDER: RENDER WEEKLY REPORT
    function renderWeeklyReport() {
        const weeklyProjects = getWeeklyFilteredProjects();

        // 1. UPDATE 4 KPIS
        // Thẻ 1: Tổng khách hàng liên hệ trong kỳ lọc
        const totalCount = weeklyProjects.length;

        // Thẻ 2: Tổng dự án đang làm (các dự án trạng thái 'danglam')
        const danglamProjects = pipelineData.filter(p => p.stage === 'danglam');
        const workshopCount = danglamProjects.length;

        // Thẻ 3 & 4: Data cũ đối chiếu & So sánh
        let prevProjects = [];
        if (currentWeeklyFilter.prevStart && currentWeeklyFilter.prevEnd) {
            prevProjects = pipelineData.filter(p => {
                const rawContactDate = p.ngayLienHe || p.rawDate || p.date || '';
                const ymd = normalizeDateToYMD(rawContactDate);
                if (!ymd) return false;
                return ymd >= currentWeeklyFilter.prevStart && ymd <= currentWeeklyFilter.prevEnd;
            });
        }
        const prevCount = prevProjects.length;

        // Tính toán so sánh tăng trưởng
        const delta = totalCount - prevCount;
        let growthHtml = '0%';
        let growthText = '0%';
        let growthSub = `So với ${currentWeeklyFilter.prevLabel || 'kỳ đối chiếu'}`;
        let growthIcon = '➖';

        if (currentWeeklyFilter.type === 'all') {
            growthHtml = `<span style="color: #64748B;">Toàn Bộ</span>`;
            growthText = 'Toàn bộ dữ liệu';
            growthSub = 'Tổng cộng toàn bộ dữ liệu hệ thống';
            growthIcon = '📊';
        } else if (prevCount === 0) {
            if (totalCount > 0) {
                growthHtml = `<span style="color: #16A34A; font-weight: 800;">+${totalCount} (Mới)</span>`;
                growthText = `+${totalCount} khách (Mới hoàn toàn)`;
                growthSub = `Tăng mới hoàn toàn so với ${currentWeeklyFilter.prevLabel || 'kỳ trước'}`;
                growthIcon = '📈';
            } else {
                growthHtml = `<span style="color: #64748B; font-weight: 800;">0 (0%)</span>`;
                growthText = '0 (0%)';
                growthSub = `Không có phát sinh khách so với ${currentWeeklyFilter.prevLabel || 'kỳ trước'}`;
                growthIcon = '➖';
            }
        } else {
            const pct = ((delta / prevCount) * 100).toFixed(1);
            if (delta > 0) {
                growthHtml = `<span style="color: #16A34A; font-weight: 800;">+${delta} (+${pct}%)</span>`;
                growthText = `+${delta} khách (+${pct}%)`;
                growthSub = `Tăng ${delta} khách so với ${currentWeeklyFilter.prevLabel || 'kỳ trước'} (${prevCount} khách)`;
                growthIcon = '📈';
            } else if (delta < 0) {
                growthHtml = `<span style="color: #DC2626; font-weight: 800;">${delta} (${pct}%)</span>`;
                growthText = `${delta} khách (${pct}%)`;
                growthSub = `Giảm ${Math.abs(delta)} khách so với ${currentWeeklyFilter.prevLabel || 'kỳ trước'} (${prevCount} khách)`;
                growthIcon = '📉';
            } else {
                growthHtml = `<span style="color: #64748B; font-weight: 800;">0 (0%)</span>`;
                growthText = '0 (Bằng kỳ trước)';
                growthSub = `Bằng với ${currentWeeklyFilter.prevLabel || 'kỳ trước'} (${prevCount} khách)`;
                growthIcon = '➖';
            }
        }

        // Cập nhật DOM 2 thẻ KPI chính (Gom vào 1 cột, bỏ các text phụ)
        const elTotal = document.getElementById('kpiWeeklyTotal');
        const elWorkshop = document.getElementById('kpiWeeklyWorkshopTotal');

        if (elTotal) elTotal.innerText = totalCount < 10 && totalCount >= 0 ? '0' + totalCount : totalCount;
        if (elWorkshop) elWorkshop.innerText = workshopCount < 10 && workshopCount >= 0 ? '0' + workshopCount : workshopCount;

        // 2. RENDER BIỂU ĐỒ SO SÁNH DATA THEO TUẦN (CỘT RỘNG BÊN PHẢI)
        renderWeeklyTrendChart(totalCount, prevCount, delta);

        // 3. RENDER CUSTOMER LIST (TABLE & MOBILE CARDS)
        renderWeeklyCustomerList();

        // 4. RENDER CATEGORY BREAKDOWN
        renderWeeklyCategoryBreakdown(weeklyProjects);

        // 5. RENDER SOURCE BREAKDOWN
        renderWeeklySourceBreakdown(weeklyProjects);

        // 6. RENDER WORKSHOP PROJECTS (DỰ ÁN ĐANG LÀM)
        renderWeeklyWorkshopProjects();

        // 7. BUILD ZALO/TELEGRAM REPORT TEXT
        buildWeeklyZaloReportText(weeklyProjects, prevCount, delta, growthText, workshopCount);
    }

    let weeklyChartOffset = 0; // 0 = mốc gần nhất, >0 = lùi về các tuần cũ hơn
    let cachedWeeklyTrendStats = { currentCount: 0, prevCount: 0, delta: 0 };

    function changeWeeklyChartOffset(step) {
        weeklyChartOffset = Math.max(0, weeklyChartOffset + step);
        renderWeeklyTrendChart();
    }

    // BIỂU ĐỒ SO SÁNH KHÁCH LIÊN HỆ THEO CÁC TUẦN
    function renderWeeklyTrendChart(currentCount, prevCount, delta) {
        const container = document.getElementById('weeklyBarChartContainer');
        const compareBadge = document.getElementById('weeklyChartCompareBadge');
        if (!container) return;

        if (currentCount !== undefined) cachedWeeklyTrendStats.currentCount = currentCount;
        if (prevCount !== undefined) cachedWeeklyTrendStats.prevCount = prevCount;
        if (delta !== undefined) cachedWeeklyTrendStats.delta = delta;
        currentCount = cachedWeeklyTrendStats.currentCount;
        prevCount = cachedWeeklyTrendStats.prevCount;
        delta = cachedWeeklyTrendStats.delta;

        // Cập nhật trạng thái các nút chuyển tuần
        const prevBtn = document.getElementById('btnPrevWeekPage');
        const nextBtn = document.getElementById('btnNextWeekPage');
        if (nextBtn) nextBtn.disabled = (weeklyChartOffset <= 0);
        if (prevBtn) prevBtn.disabled = (weeklyChartOffset >= 12);

        // Xác định số tuần hiển thị: Trên Mobile hiển thị 3 tuần gần nhất, trên Desktop hiển thị 6 tuần
        const isMobile = window.innerWidth < 640;
        const numWeeks = isMobile ? 3 : 6;

        // Tính các mốc tuần dựa trên offset
        const now = new Date();
        const y = now.getFullYear();
        const m = now.getMonth();
        const d = now.getDate();
        const day = now.getDay();
        const mondayDiff = day === 0 ? -6 : 1 - day;
        const mondayThisWeek = new Date(y, m, d + mondayDiff);

        const toYMD = dt => `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`;
        const toShortDM = dt => `${String(dt.getDate()).padStart(2,'0')}/${String(dt.getMonth()+1).padStart(2,'0')}`;

        const weeks = [];
        const startIndex = (numWeeks - 1) + weeklyChartOffset;
        const endIndex = weeklyChartOffset;

        for (let i = startIndex; i >= endIndex; i--) {
            const mon = new Date(mondayThisWeek);
            mon.setDate(mondayThisWeek.getDate() - (i * 7));
            const sun = new Date(mon);
            sun.setDate(mon.getDate() + 6);

            const startYmd = toYMD(mon);
            const endYmd = toYMD(sun);

            const count = pipelineData.filter(p => {
                const raw = p.ngayLienHe || p.rawDate || p.date || '';
                const ymd = normalizeDateToYMD(raw);
                return ymd && ymd >= startYmd && ymd <= endYmd;
            }).length;

            const isCurrentWeek = (i === 0);
            const isSelected = (currentWeeklyFilter.startDate === startYmd && currentWeeklyFilter.endDate === endYmd);

            weeks.push({
                startYmd,
                endYmd,
                label: `${toShortDM(mon)} - ${toShortDM(sun)}`,
                fullLabel: `Tuần ${formatVNStandardDate(startYmd)} - ${formatVNStandardDate(endYmd)}`,
                count,
                isCurrentWeek,
                isSelected
            });
        }

        const maxCount = Math.max(1, ...weeks.map(w => w.count));

        let barsHtml = '';
        weeks.forEach(w => {
            const heightPercent = Math.max(6, Math.round((w.count / maxCount) * 100));
            const activeClass = w.isSelected ? 'active' : '';
            const tag = w.isCurrentWeek ? '<span style="font-size: 0.65rem; color: #B5891A; font-weight: 800; display: block;">(Tuần này)</span>' : '';
            const countStr = w.count < 10 && w.count > 0 ? '0' + w.count : w.count;

            barsHtml += `
                <div class="weekly-bar-item ${activeClass}" 
                     title="${w.fullLabel}: ${w.count} khách liên hệ. Bấm để lọc dữ liệu tuần này."
                     onclick="selectWeekFromChart('${w.startYmd}', '${w.endYmd}')">
                    <span class="weekly-bar-count">${countStr}</span>
                    <div class="weekly-bar-track">
                        <div class="weekly-bar-fill" style="height: ${heightPercent}%;"></div>
                    </div>
                    <span class="weekly-bar-label">${w.label}${tag}</span>
                </div>
            `;
        });
        container.innerHTML = barsHtml;

        // Cập nhật Badge so sánh trên Header biểu đồ
        if (compareBadge) {
            if (currentWeeklyFilter.type === 'all') {
                compareBadge.innerHTML = `<span>Toàn bộ dữ liệu (${currentCount} khách)</span>`;
                compareBadge.style.background = '#F1F5F9';
                compareBadge.style.color = '#475569';
            } else if (prevCount === 0) {
                if (currentCount > 0) {
                    compareBadge.innerHTML = `<span style="color: #16A34A; font-weight: 800;">📈 +${currentCount} khách mới (Kỳ trước: 0 khách)</span>`;
                    compareBadge.style.background = '#DCFCE7';
                } else {
                    compareBadge.innerHTML = `<span style="color: #64748B; font-weight: 700;">➖ 0 khách (Bằng kỳ trước: 0 khách)</span>`;
                    compareBadge.style.background = '#F1F5F9';
                }
            } else {
                const pct = ((delta / prevCount) * 100).toFixed(1);
                if (delta > 0) {
                    compareBadge.innerHTML = `<span style="color: #16A34A; font-weight: 800;">▲ +${delta} khách (+${pct}%) so với ${currentWeeklyFilter.prevLabel || 'kỳ trước'} (${prevCount} khách)</span>`;
                    compareBadge.style.background = '#DCFCE7';
                } else if (delta < 0) {
                    compareBadge.innerHTML = `<span style="color: #DC2626; font-weight: 800;">▼ ${delta} khách (${pct}%) so với ${currentWeeklyFilter.prevLabel || 'kỳ trước'} (${prevCount} khách)</span>`;
                    compareBadge.style.background = '#FEE2E2';
                } else {
                    compareBadge.innerHTML = `<span style="color: #64748B; font-weight: 700;">━ 0 khách (0%) bằng ${currentWeeklyFilter.prevLabel || 'kỳ trước'} (${prevCount} khách)</span>`;
                    compareBadge.style.background = '#F1F5F9';
                }
            }
        }
    }

    function selectWeekFromChart(startYmd, endYmd) {
        const presets = computeWeeklyDatePresets();
        let matchedKey = 'custom';
        for (const k in presets) {
            if (presets[k].start === startYmd && presets[k].end === endYmd) {
                matchedKey = k;
                break;
            }
        }

        const sel = document.getElementById('weeklySelectFilter');
        if (sel) sel.value = matchedKey;

        if (matchedKey === 'custom') {
            const customBox = document.getElementById('weeklyCustomRangeBox');
            if (customBox) customBox.style.display = 'inline-flex';
            const sInput = document.getElementById('weeklyCustomStart');
            const eInput = document.getElementById('weeklyCustomEnd');
            if (sInput) sInput.value = startYmd;
            if (eInput) eInput.value = endYmd;
            onWeeklyCustomDateChange();
        } else {
            onWeeklyFilterSelectChange(matchedKey);
        }
    }

    // Sub-render: Customer list table
    function renderWeeklyCustomerList() {
        const weeklyProjects = getWeeklyFilteredProjects();
        let filtered = weeklyProjects;

        if (weeklySelectedStage !== 'all') {
            filtered = filtered.filter(p => p.stage === weeklySelectedStage);
        }
        if (weeklySearchKeyword) {
            filtered = filtered.filter(p => {
                const text = `${p.name} ${p.source} ${p.assignee} ${p.category || ''} ${p.note || ''}`.toLowerCase();
                return text.includes(weeklySearchKeyword);
            });
        }

        // Mặc định sắp xếp danh sách khách hàng từ A-Z theo cột Ngày Liên Hệ (Cũ -> Mới)
        filtered.sort((a, b) => {
            const rawA = a.ngayLienHe || a.rawDate || a.date || '';
            const rawB = b.ngayLienHe || b.rawDate || b.date || '';
            const ymdA = normalizeDateToYMD(rawA) || '9999-99-99';
            const ymdB = normalizeDateToYMD(rawB) || '9999-99-99';
            return ymdA.localeCompare(ymdB);
        });

        const badgeCount = document.getElementById('weeklyCustomerCountBadge');
        if (badgeCount) badgeCount.innerText = `${filtered.length} Khách`;

        const tbody = document.getElementById('weeklyCustomerTableBody');
        const mobileBox = document.getElementById('weeklyCustomerMobileCards');

        if (filtered.length === 0) {
            const prevHint = currentWeeklyFilter.prevLabel 
                ? `👉 Bấm vào đây để xem dữ liệu ${currentWeeklyFilter.prevLabel}`
                : '👉 Bấm vào đây để xem dữ liệu Tuần Trước (31/08 - 06/09/2026)';

            const emptyHtml = `<tr><td colspan="8" style="text-align: center; padding: 28px 16px; color: #64748B;">
                <div style="font-size: 1.8rem; margin-bottom: 8px;">📭</div>
                <div style="font-weight: 700; color: #1E293B; font-size: 0.95rem;">Không tìm thấy khách hàng liên hệ nào trong khoảng thời gian này</div>
                <div style="font-size: 0.8rem; color: #94A3B8; margin-top: 4px;">Dữ liệu đối chiếu tự động theo cột Ngày Liên Hệ từ Notion DB</div>
                <div style="margin-top: 12px;">
                    <button class="btn btn-sm btn-gold" onclick="jumpToPreviousPeriod()">
                        ${prevHint}
                    </button>
                </div>
            </td></tr>`;
            if (tbody) tbody.innerHTML = emptyHtml;
            if (mobileBox) mobileBox.innerHTML = `<div style="text-align: center; padding: 24px; color: #94A3B8; background: #FFF; border-radius: 8px; border: 1px solid #E2E8F0;">
                <div style="font-size: 1.5rem; margin-bottom: 6px;">📭</div>
                <div style="font-weight: 700; color: #1E293B;">Không có khách hàng nào trong kỳ được chọn.</div>
                <div style="margin-top: 10px;">
                    <button class="btn btn-sm btn-gold" onclick="jumpToPreviousPeriod()">${prevHint}</button>
                </div>
            </div>`;
            return;
        }

        // Render Desktop Table Rows
        let tableRows = '';
        let mobileCards = '';

        filtered.forEach((p, idx) => {
            const rawContactDate = p.ngayLienHe || p.rawDate || p.date || '';
            const displayDate = formatVNStandardDate(rawContactDate);
            const cat = p.category || 'Kiến trúc';
            const source = p.source || 'Khách liên hệ';
            const assignee = p.assignee || 'Phạm Hoàng Tiến';
            const note = p.note || 'Đang trao đổi và cập nhật tiến độ';

            let stageBadgeClass = 'badge-gold';
            if (p.stage === 'baogia') stageBadgeClass = 'badge-blue';
            else if (p.stage === 'hopdong' || p.stage === 'danglam') stageBadgeClass = 'badge-green';

            tableRows += `<tr style="border-bottom: 1px solid #F1F5F9; transition: background 0.15s;" onmouseover="this.style.background='#FFFDF7'" onmouseout="this.style.background='transparent'">
                <td style="padding: 10px 12px; font-weight: 700; color: #94A3B8;">${String(idx + 1).padStart(2, '0')}</td>
                <td style="padding: 10px 12px; font-weight: 700; color: #0F172A;">
                    ${p.isPotential ? '<span style="color: #B5891A;" title="Dự án tiềm năng">⭐ </span>' : ''}
                    ${escapeHtml(p.name)}
                </td>
                <td style="padding: 10px 12px; font-weight: 600; color: #64748B;">
                    <span style="background: #F1F5F9; padding: 3px 8px; border-radius: 4px; font-size: 0.78rem; border: 1px solid #E2E8F0;">
                        ${displayDate}
                    </span>
                </td>
                <td style="padding: 10px 12px;">
                    <span class="badge" style="background: rgba(181, 137, 26, 0.1); color: #855C08; border: 1px solid #FDE68A;">
                        ${escapeHtml(cat)}
                    </span>
                </td>
                <td style="padding: 10px 12px;">
                    <span style="font-weight: 600; color: #334155; font-size: 0.78rem; background: #F8FAFC; padding: 3px 8px; border-radius: 4px; border: 1px solid #E2E8F0;">
                        📱 ${escapeHtml(source)}
                    </span>
                </td>
                <td style="padding: 10px 12px; font-weight: 600; color: #0F172A;">${escapeHtml(assignee)}</td>
                <td style="padding: 10px 12px;">
                    <span class="badge ${stageBadgeClass}">${p.stageLabel || '💬 Tư vấn'}</span>
                </td>
                <td style="padding: 10px 12px; color: #475569; font-size: 0.78rem; max-width: 220px; line-height: 1.4;">
                    <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${escapeHtml(note)}">
                        ${escapeHtml(note)}
                    </div>
                </td>
            </tr>`;

            // Mobile Card
            mobileCards += `<div class="project-card" style="border-left-color: var(--primary-gold);">
                <div class="project-card-header">
                    <div class="project-card-title">
                        ${idx + 1}. ${p.isPotential ? '<span style="color: #B5891A;">⭐ </span>' : ''}
                        ${escapeHtml(p.name)}
                    </div>
                    <span class="badge ${stageBadgeClass}">${p.stageLabel || '💬 Tư vấn'}</span>
                </div>
                <div class="project-card-meta">
                    <div>📅 Ngày LH: <strong>${displayDate}</strong></div>
                    <div>🏢 Hạng mục: <strong>${escapeHtml(cat)}</strong></div>
                    <div>📱 Nguồn: <strong>${escapeHtml(source)}</strong></div>
                    <div>👤 Tư vấn: <strong>${escapeHtml(assignee)}</strong></div>
                </div>
                <div class="project-card-note">
                    📝 <strong>Ghi chú:</strong> ${escapeHtml(note)}
                </div>
            </div>`;
        });

        if (tbody) tbody.innerHTML = tableRows;
        if (mobileBox) mobileBox.innerHTML = mobileCards;
    }

    // Sub-render: Category Breakdown
    function renderWeeklyCategoryBreakdown(projects) {
        const catMap = {};
        projects.forEach(p => {
            const cat = p.category || 'Kiến trúc';
            catMap[cat] = (catMap[cat] || 0) + 1;
        });

        const total = projects.length || 1;
        const sortedCats = Object.keys(catMap).sort((a, b) => catMap[b] - catMap[a]);

        const badge = document.getElementById('weeklyCategoryBadge');
        if (badge) badge.innerText = `${sortedCats.length} Hạng Mục`;

        const container = document.getElementById('weeklyCategoryList');
        if (!container) return;

        if (sortedCats.length === 0) {
            container.innerHTML = `<div style="text-align: center; padding: 16px; color: #94A3B8; font-size: 0.82rem;">Chưa có dữ liệu hạng mục trong tuần.</div>`;
            return;
        }

        const barColors = ['#B5891A', '#2563EB', '#059669', '#7C3AED', '#D97706', '#DC2626'];
        let html = '';
        sortedCats.forEach((catName, idx) => {
            const count = catMap[catName];
            const pct = ((count / total) * 100).toFixed(1);
            const color = barColors[idx % barColors.length];

            html += `<div class="stat-item">
                <div class="stat-meta">
                    <div class="stat-label">
                        <span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background: ${color};"></span>
                        <span>${escapeHtml(catName)}</span>
                    </div>
                    <div class="stat-numbers">
                        <strong>${count}</strong> khách (${pct}%)
                    </div>
                </div>
                <div class="stat-bar-container">
                    <div class="stat-bar-fill" style="width: ${pct}%; background: ${color};"></div>
                </div>
            </div>`;
        });

        container.innerHTML = html;
    }

    // Sub-render: Source Breakdown
    function renderWeeklySourceBreakdown(projects) {
        const srcMap = {};
        projects.forEach(p => {
            let src = p.source || 'Khách liên hệ';
            // Clean up source string
            if (src.includes('Fanpage')) src = 'Fanpage Song Anh';
            else if (src.includes('Hotline Sếp') || src.includes('Sếp')) src = 'Hotline Sếp';
            else if (src.includes('Tiến')) src = 'Hotline Sếp Tiến';
            else if (src.includes('Sang')) src = 'Zalo Sang';
            else if (src.toLowerCase().includes('ads')) src = 'Facebook Ads';
            else if (src.includes('Khách cũ')) src = 'Khách cũ / Giới thiệu';

            srcMap[src] = (srcMap[src] || 0) + 1;
        });

        const total = projects.length || 1;
        const sortedSrc = Object.keys(srcMap).sort((a, b) => srcMap[b] - srcMap[a]);

        const badge = document.getElementById('weeklySourceBadge');
        if (badge) badge.innerText = `${sortedSrc.length} Nguồn`;

        const container = document.getElementById('weeklySourceList');
        if (!container) return;

        if (sortedSrc.length === 0) {
            container.innerHTML = `<div style="text-align: center; padding: 16px; color: #94A3B8; font-size: 0.82rem;">Chưa có dữ liệu nguồn khách trong tuần.</div>`;
            return;
        }

        const barColors = ['#059669', '#B5891A', '#2563EB', '#7C3AED', '#0284C7', '#EA580C'];
        let html = '';
        sortedSrc.forEach((srcName, idx) => {
            const count = srcMap[srcName];
            const pct = ((count / total) * 100).toFixed(1);
            const color = barColors[idx % barColors.length];

            html += `<div class="stat-item">
                <div class="stat-meta">
                    <div class="stat-label">
                        <span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background: ${color};"></span>
                        <span>${escapeHtml(srcName)}</span>
                    </div>
                    <div class="stat-numbers">
                        <strong>${count}</strong> khách (${pct}%)
                    </div>
                </div>
                <div class="stat-bar-container">
                    <div class="stat-bar-fill" style="width: ${pct}%; background: ${color};"></div>
                </div>
            </div>`;
        });

        container.innerHTML = html;
    }

    // Sub-render: Workshop Projects (Dự án đang làm)
    function renderWeeklyWorkshopProjects() {
        const danglamProjects = pipelineData.filter(p => p.stage === 'danglam');
        const badge = document.getElementById('weeklyWorkshopCountBadge');
        if (badge) badge.innerText = `${danglamProjects.length} Dự Án Đang Thi Công`;

        const container = document.getElementById('weeklyWorkshopCardsGrid');
        if (!container) return;

        if (danglamProjects.length === 0) {
            container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 24px; color: #94A3B8; background: #F8FAFC; border-radius: 8px;">
                Hiện tại không có dự án nào ở trạng thái Đang làm.
            </div>`;
            return;
        }

        let html = '';
        danglamProjects.forEach((p, idx) => {
            const parsed = parseProjectWorkshopNote(p.note);
            const assignee = p.assignee || 'Phạm Hoàng Tiến';
            const tech = p.tech && p.tech !== '-' ? p.tech : 'Đội ngũ kỹ thuật xưởng Song Anh';

            // Extract % complete if available in note
            const pctMatch = (p.note || '').match(/(\d{1,3})\s*%/);
            const pctBadge = pctMatch ? `<span class="badge badge-green">⚡ Đạt ${pctMatch[1]}% tiến độ</span>` : '';

            html += `<div class="workshop-card">
                <div class="workshop-card-header">
                    <div>
                        <div style="font-size: 0.72rem; color: #059669; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;">
                            Dự án thi công #${String(idx + 1).padStart(2, '0')}
                        </div>
                        <div class="workshop-card-title">${escapeHtml(p.name)}</div>
                    </div>
                    <div>${pctBadge}</div>
                </div>

                <div class="workshop-card-meta">
                    <div class="workshop-card-meta-item">
                        <span>👤 Phụ trách:</span> <strong>${escapeHtml(assignee)}</strong>
                    </div>
                    <div class="workshop-card-meta-item">
                        <span>🔨 Kỹ thuật:</span> <strong>${escapeHtml(tech)}</strong>
                    </div>
                </div>

                <div class="workshop-sections">
                    <div class="workshop-sec-box sec-legal">
                        <div class="workshop-sec-title">📑 1. Hồ Sơ &amp; Pháp Lý</div>
                        <div class="workshop-sec-content">${escapeHtml(parsed.legal)}</div>
                    </div>
                    <div class="workshop-sec-box sec-tech">
                        <div class="workshop-sec-title">🔨 2. Tiến Độ Kỹ Thuật &amp; Xưởng</div>
                        <div class="workshop-sec-content">${escapeHtml(parsed.tech)}</div>
                    </div>
                    <div class="workshop-sec-box sec-money">
                        <div class="workshop-sec-title">💰 3. Tình Trạng Thanh Toán</div>
                        <div class="workshop-sec-content">${escapeHtml(parsed.money)}</div>
                    </div>
                </div>
            </div>`;
        });

        container.innerHTML = html;
    }

    // Helper: Escape HTML string
    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Build Zalo/Telegram formatted text for executive summary
    function buildWeeklyZaloReportText(weeklyProjects, prevCount = null, delta = null, growthText = null, workshopCount = null) {
        const rangeStr = `${formatVNStandardDate(currentWeeklyFilter.startDate)} - ${formatVNStandardDate(currentWeeklyFilter.endDate)}`;
        const danglamProjects = pipelineData.filter(p => p.stage === 'danglam');
        const baogiaProjects = pipelineData.filter(p => p.stage === 'baogia');
        const potentialProjects = pipelineData.filter(p => p.isPotential);

        const currentCount = weeklyProjects.length;
        const currentPrevCount = prevCount !== null ? prevCount : document.getElementById('kpiWeeklyPrevTotal')?.innerText || 0;
        const currentGrowthText = growthText || document.getElementById('kpiWeeklyGrowth')?.innerText || '0%';
        const currentWorkshopCount = workshopCount !== null ? workshopCount : danglamProjects.length;

        // Group categories
        const catMap = {};
        weeklyProjects.forEach(p => {
            const cat = p.category || 'Kiến trúc';
            catMap[cat] = (catMap[cat] || 0) + 1;
        });
        const catSummary = Object.keys(catMap).map(k => `${k}: ${catMap[k]}`).join(' | ') || 'Chưa phát sinh';

        // Group sources
        const srcMap = {};
        weeklyProjects.forEach(p => {
            let src = p.source || 'Khách liên hệ';
            if (src.includes('Sếp')) src = 'Hotline Sếp';
            else if (src.includes('Sang')) src = 'Zalo Sang';
            srcMap[src] = (srcMap[src] || 0) + 1;
        });
        const srcSummary = Object.keys(srcMap).map(k => `${k}: ${srcMap[k]}`).join(' | ') || 'Chưa phát sinh';

        let report = `📊 BÁO CÁO TỔNG HỢP SALE TUẦN [${rangeStr}]\n` +
            `🏢 MÔ HÌNH KIẾN TRÚC SONG ANH\n` +
            `👤 Người thực hiện: Phạm Hoàng Tiến & Võ Minh Sang\n\n` +
            `1️⃣ TỔNG QUAN & SO SÁNH DATA:\n` +
            `• Tổng khách liên hệ: ${currentCount} khách\n` +
            `• Data cũ đối chiếu (${currentWeeklyFilter.prevLabel || 'Kỳ trước'}): ${currentPrevCount} khách\n` +
            `• So sánh tăng trưởng: ${currentGrowthText}\n` +
            `• Tổng dự án xưởng đang thi công: ${currentWorkshopCount} dự án\n` +
            `• Phân loại theo Hạng mục: ${catSummary}\n` +
            `• Phân loại theo Nguồn liên hệ: ${srcSummary}\n\n` +
            `2️⃣ DANH SÁCH CHI TIẾT KHÁCH HÀNG TIẾP NHẬN:\n`;

        if (weeklyProjects.length === 0) {
            report += `• Trong tuần chưa ghi nhận khách hàng liên hệ mới.\n`;
        } else {
            weeklyProjects.forEach((p, idx) => {
                const rawContactDate = p.ngayLienHe || p.rawDate || p.date || '';
                const d = formatVNStandardDate(rawContactDate);
                report += `${idx + 1}. ${p.name} | Ngày LH: ${d} | Nguồn: ${p.source} | Trạng thái: ${p.stageLabel} | Phụ trách: ${p.assignee}\n`;
            });
        }

        report += `\n3️⃣ TIẾN ĐỘ CÁC DỰ ÁN XƯỞNG ĐANG THI CÔNG (${danglamProjects.length} DỰ ÁN):\n`;
        danglamProjects.forEach((p, idx) => {
            const parsed = parseProjectWorkshopNote(p.note);
            report += `• ${p.name} (${p.assignee}):\n` +
                `   - Kỹ thuật: ${parsed.tech.replace(/\n/g, ' ')}\n` +
                `   - Hồ sơ: ${parsed.legal.replace(/\n/g, ' ')}\n` +
                `   - Thanh toán: ${parsed.money.replace(/\n/g, ' ')}\n`;
        });

        report += `\n4️⃣ DEAL TRỌNG TÂM BÁO GIÁ & TIỀM NĂNG (${baogiaProjects.length} BÁO GIÁ | ${potentialProjects.length} TIỀM NĂNG):\n` +
            `• Tiềm năng bám sát: ${potentialProjects.slice(0, 6).map(p => p.name).join(' • ') || 'Đang cập nhật'}\n` +
            `• Đang báo giá: ${baogiaProjects.slice(0, 8).map(p => p.name).join(' • ') || 'Đang cập nhật'}\n\n` +
            `✨ Hotline / Zalo: 0929 22 4444 • Xưởng sản xuất: 230/70/28 Nguyễn Xiển, TP. Thủ Đức, TP.HCM`;

        currentWeeklyZaloText = report;
        const reportEl = document.getElementById('executiveReportContent');
        if (reportEl) reportEl.innerText = report;
    }

    function copyWeeklyZaloReport() {
        if (!currentWeeklyZaloText) {
            buildWeeklyZaloReportText(getWeeklyFilteredProjects());
        }
        navigator.clipboard.writeText(currentWeeklyZaloText).then(() => {
            showToast('📋 Đã sao chép Báo Cáo Tuần vào Clipboard (Zalo Ready)!');
        }).catch(() => {
            const ta = document.createElement('textarea');
            ta.value = currentWeeklyZaloText;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showToast('📋 Đã sao chép Báo Cáo Tuần vào Clipboard!');
        });
    }

    // Backward compatibility for old function calls
    function generateExecutiveReport() {
        renderWeeklyReport();
    }

    function copyExecutiveSummary() {
        copyWeeklyZaloReport();
    }

    function showToast(msg) {
        let toast = document.getElementById('appToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'appToast';
            toast.className = 'toast-msg';
            document.body.appendChild(toast);
        }
        toast.innerHTML = '<span>✨</span> <span>' + msg + '</span>';
        toast.classList.add('show');
        setTimeout(() => { toast.classList.remove('show'); }, 3500);
    }

    // 8. NOTION REAL-TIME SYNCHRONIZATION (HYBRID ARCHITECTURE)
    let isSyncingNotion = false;
    async function syncNotionLive(isManual = false) {
        if (isSyncingNotion) return;
        const btn = document.getElementById('btnSyncNotionLive');
        const icon = document.getElementById('syncSpinIcon');
        const label = document.getElementById('syncBtnLabel');

        isSyncingNotion = true;
        if (isManual) {
            if (icon) icon.classList.add('spin-icon');
            if (btn) btn.disabled = true;
            if (label) label.innerText = 'Đang tải...';
        }

        try {
            const url = API_BASE + '/api/projects' + (isManual ? '?force=1' : '');
            const resp = await fetch(url, { cache: isManual ? 'no-cache' : 'default' });
            if (!resp.ok) {
                throw new Error(`HTTP ${resp.status}`);
            }
            const data = await resp.json();
            if (data && data.success && Array.isArray(data.projects) && data.projects.length > 0) {
                // 1. Get any local leads from localStorage that might not yet be in Notion
                let localLeads = [];
                try {
                    localLeads = JSON.parse(localStorage.getItem('songanh_local_leads') || '[]');
                } catch (e) {}

                // Merge Notion projects with local unsynced leads (if any id doesn't match)
                const remoteIds = new Set(data.projects.map(p => p.id));
                const pendingLeads = localLeads.filter(l => !remoteIds.has(l.id));

                // Clean up localStorage if items are now in Notion
                if (pendingLeads.length !== localLeads.length) {
                    try {
                        localStorage.setItem('songanh_local_leads', JSON.stringify(pendingLeads));
                    } catch (e) {}
                }

                // Combined fresh list: pending local leads + Notion projects
                const mergedProjects = [...pendingLeads, ...data.projects];

                // Preserve potential tick for any custom list if needed
                if (typeof potentialIdList !== 'undefined' && potentialIdList.size > 0) {
                    mergedProjects.forEach(p => {
                        if (potentialIdList.has(p.id)) p.isPotential = true;
                    });
                }

                // Update pipelineData in place
                pipelineData.splice(0, pipelineData.length, ...mergedProjects);

                // Re-render all views
                applyGlobalFilterToViews();
                renderPipelineViews();
                renderCustomerViews();
                if (typeof generateExecutiveReport === 'function') generateExecutiveReport();

                // Update user topbar status text
                const syncStatusEl = document.querySelector('.sync-status');
                if (syncStatusEl) {
                    const nowTime = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
                    syncStatusEl.innerHTML = `<span class="live-dot"></span> Notion Live (${nowTime})`;
                }

                if (isManual) {
                    showToast(`✅ Đã đồng bộ ${data.projects.length} dự án mới nhất từ Notion!`);
                }
            } else {
                if (isManual) showToast('⚠️ Không có dữ liệu mới từ Notion.');
            }
        } catch (err) {
            console.warn('Sync Notion error:', err);
            if (isManual) {
                showToast('⚠️ Lỗi kết nối đồng bộ Notion: ' + err.message);
            }
        } finally {
            isSyncingNotion = false;
            if (isManual) {
                if (icon) icon.classList.remove('spin-icon');
                if (btn) btn.disabled = false;
                if (label) label.innerHTML = '<span class="sync-btn-full">Đồng bộ Notion</span><span class="sync-btn-short">Đồng bộ</span>';
            }
        }
    }

    // ========================================================
    // AUTHENTICATION & ACCESS CONTROL (MÔ HÌNH KIẾN TRÚC SONG ANH)
    // ========================================================
    const AuthManager = (function() {
        const STORAGE_KEY = 'songanh_sale_auth_session';
        const SALT = 'SongAnh_Sale_Security_Salt_#2026!';

        // Bảng tài khoản nội bộ dự phòng (Fallback khi chạy file offline hoặc mất kết nối Notion)
        const ACCOUNTS = [
            {
                username: 'phamhoangtien',
                aliases: ['phamhoangtien1300', 'phamhoangtien1300@gmail.com', 'hoangtien1300', 'hoangtien', 'admin', '0981169200', '0333885925'],
                fullName: 'Phạm Hoàng Tiến',
                roleName: 'Quản trị viên / Điều Hành',
                roleCode: 'admin',
                avatar: 'PT',
                passwords: ['0981169200', 'admin@2026', 'SongAnh@2026', '0929224444'],
                hash: 'c6cc521028745f3ee04201744c758ef4f1dc0000a58cb63ce80dc9a843b9c14c'
            },
            {
                username: 'salesang',
                aliases: ['sang', '0376415131', '0769766104', 'salesang', 'vominhsang'],
                fullName: 'Võ Minh Sang',
                roleName: 'Chuyên viên Kinh Doanh',
                roleCode: 'sale',
                avatar: 'VS',
                passwords: ['0376415131', 'SaleSang@2026', 'SongAnh@2026', '0769766104'],
                hash: 'dc66aa341441cdce715e3cf0a9a87e3702c57b09e3c29d40ed247369fdb1b1fb'
            },
            {
                username: 'giamdoc',
                aliases: ['xuanthien', 'giamdoc', 'director', 'thien'],
                fullName: 'Mai Xuân Thiện',
                roleName: 'Ban Giám Đốc',
                roleCode: 'director',
                avatar: 'MT',
                passwords: ['SongAnhGD@2026', 'giamdoc@2026', 'SongAnh@2026', '0929224444'],
                hash: 'd1f7a081a80454fbe58a1b291354d2a010bb1e1cbe945c8afa20589efe0dd174'
            }
        ];

        async function computeHash(plainText) {
            if (window.crypto && window.crypto.subtle) {
                const encoder = new TextEncoder();
                const data = encoder.encode(plainText + SALT);
                const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            }
            let h = 0;
            const str = plainText + SALT;
            for (let i = 0; i < str.length; i++) {
                h = ((h << 5) - h) + str.charCodeAt(i);
                h |= 0;
            }
            return String(h);
        }

        function getStoredSession() {
            try {
                let raw = sessionStorage.getItem(STORAGE_KEY);
                if (!raw) {
                    raw = localStorage.getItem(STORAGE_KEY);
                }
                if (!raw) return null;
                const sess = JSON.parse(raw);
                if (!sess || !sess.expiresAt || Date.now() > sess.expiresAt) {
                    clearStoredSession();
                    return null;
                }
                return sess;
            } catch (e) {
                return null;
            }
        }

        function saveSession(user, remember) {
            const duration = remember ? (30 * 24 * 60 * 60 * 1000) : (12 * 60 * 60 * 1000); // 30 ngày hoặc 12 tiếng
            const sess = {
                username: user.username,
                fullName: user.fullName,
                roleName: user.roleName,
                roleCode: user.roleCode || 'member',
                avatar: user.avatar || 'SA',
                expiresAt: Date.now() + duration,
                token: user.token || ('sa_' + Math.random().toString(36).substring(2) + Date.now().toString(36))
            };
            const raw = JSON.stringify(sess);
            if (remember) {
                localStorage.setItem(STORAGE_KEY, raw);
            } else {
                sessionStorage.setItem(STORAGE_KEY, raw);
            }
            return sess;
        }

        function clearStoredSession() {
            try {
                localStorage.removeItem(STORAGE_KEY);
                sessionStorage.removeItem(STORAGE_KEY);
            } catch (e) {}
        }

        function updateUIForLoggedInUser(sess) {
            const avatarEl = document.getElementById('sidebarUserAvatar');
            const nameEl = document.getElementById('sidebarUserName');
            const roleEl = document.getElementById('sidebarUserRole');
            if (avatarEl) avatarEl.textContent = sess.avatar || 'SA';
            if (nameEl) nameEl.textContent = sess.fullName || 'Thành viên Song Anh';
            if (roleEl) roleEl.innerHTML = `<span class="live-dot"></span> ${sess.roleName || 'Đã đăng nhập'}`;

            // Mở khóa giao diện app ngay lập tức
            const appLayout = document.querySelector('.app-layout');
            if (appLayout) {
                appLayout.classList.remove('app-locked');
                appLayout.style.display = 'flex';
            }

            // Ẩn overlay đăng nhập
            const overlay = document.getElementById('authLoginOverlay');
            if (overlay) {
                overlay.classList.add('auth-hidden');
                overlay.style.display = 'none';
            }

            // Dọn sạch query param ? nếu có trên thanh địa chỉ
            if (window.location.search && window.location.search.includes('?')) {
                const targetHash = window.location.hash || '#tab-trang-chu';
                try {
                    window.history.replaceState({}, document.title, window.location.pathname + targetHash);
                } catch(e) {}
            }
        }

        function lockAppUI() {
            const appLayout = document.querySelector('.app-layout');
            if (appLayout) {
                appLayout.classList.add('app-locked');
                appLayout.style.display = 'none';
            }
            const overlay = document.getElementById('authLoginOverlay');
            if (overlay) {
                overlay.style.display = 'flex';
                overlay.classList.remove('auth-hidden');
                setTimeout(() => {
                    const uInput = document.getElementById('authUsername');
                    if (uInput) uInput.focus();
                }, 50);
            }
        }

        return {
            init: function() {
                // Dọn sạch query param ? nếu có trên URL
                if (window.location.search && window.location.search.includes('?')) {
                    const targetHash = window.location.hash || '#tab-trang-chu';
                    try {
                        window.history.replaceState({}, document.title, window.location.pathname + targetHash);
                    } catch(e) {}
                }

                const sess = getStoredSession();
                if (sess) {
                    updateUIForLoggedInUser(sess);
                    return true;
                } else {
                    lockAppUI();
                    return false;
                }
            },

            login: async function(usernameInput, passwordInput, remember) {
                const u = (usernameInput || '').trim().toLowerCase();
                const p = (passwordInput || '').trim();

                if (!u || !p) {
                    return { success: false, message: 'Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!' };
                }

                // 1. ƯU TIÊN XÁC THỰC TRỰC TIẾP QUA API WORKER
                let apiErrorMsg = '';
                try {
                    const apiBase = window.location.origin.includes('workers.dev') ? '' : 'https://songanh-sale.phamhoangtien1300.workers.dev';
                    const response = await fetch(`${apiBase}/api/auth/login`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username: u, password: p })
                    });
                    
                    const resData = await response.json().catch(() => ({}));
                    if (response.ok && resData.success && resData.user) {
                        const sess = saveSession(resData.user, remember);
                        updateUIForLoggedInUser(sess);
                        return { success: true, user: resData.user };
                    } else {
                        apiErrorMsg = resData.message || '';
                    }
                } catch (netErr) {
                    console.warn('Lỗi kết nối API Notion Auth, chuyển sang chế độ kiểm tra offline:', netErr);
                }

                // 2. CHẾ ĐỘ DỰ PHÒNG CHẮC CHẮN 100% (ACCOUNTS NỘI BỘ VÀ OFFLINE FALLBACK)
                const targetUser = ACCOUNTS.find(acc => 
                    acc.username.toLowerCase() === u || 
                    (acc.aliases && acc.aliases.map(a => a.toLowerCase()).includes(u)) ||
                    (acc.username === 'phamhoangtien' && (u.includes('phamhoangtien') || u.includes('hoangtien'))) ||
                    (acc.username === 'salesang' && (u.includes('vominhsang') || u.includes('salesang')))
                );

                if (targetUser) {
                    let isPasswordCorrect = false;
                    if (targetUser.passwords && targetUser.passwords.includes(p)) {
                        isPasswordCorrect = true;
                    } else {
                        const inputHash = await computeHash(p);
                        if (inputHash === targetUser.hash) {
                            isPasswordCorrect = true;
                        }
                    }

                    if (isPasswordCorrect) {
                        const sess = saveSession(targetUser, remember);
                        updateUIForLoggedInUser(sess);
                        return { success: true, user: targetUser };
                    } else {
                        return { success: false, message: 'Mật khẩu truy cập không chính xác. Vui lòng kiểm tra lại!' };
                    }
                }

                return { 
                    success: false, 
                    message: apiErrorMsg || 'Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại!' 
                };
            },

            logout: function() {
                if (confirm('Sếp có chắc chắn muốn đăng xuất khỏi Hệ thống Quản Lý Sale không?')) {
                    clearStoredSession();
                    location.reload();
                }
            },

            getCurrentUser: function() {
                return getStoredSession();
            },

            isAuthenticated: function() {
                return !!getStoredSession();
            }
        };
    })();

    async function handleAuthSubmit(e) {
        if (e && e.preventDefault) e.preventDefault();
        if (e && e.stopPropagation) e.stopPropagation();
        const alertBox = document.getElementById('authAlertBox');
        const submitBtn = document.getElementById('authSubmitBtn');
        const btnText = document.getElementById('authBtnText');
        const btnSpinner = document.getElementById('authBtnSpinner');
        const uInput = document.getElementById('authUsername');
        const pInput = document.getElementById('authPassword');
        const rememberChk = document.getElementById('authRememberMe');

        if (alertBox) {
            alertBox.style.display = 'none';
            alertBox.className = 'auth-alert';
        }

        if (btnText) btnText.style.display = 'none';
        if (btnSpinner) btnSpinner.style.display = 'inline-block';
        if (submitBtn) submitBtn.disabled = true;

        try {
            const res = await AuthManager.login(uInput.value, pInput.value, rememberChk ? rememberChk.checked : true);
            if (res.success) {
                if (alertBox) {
                    alertBox.className = 'auth-alert auth-alert-success';
                    alertBox.innerHTML = `✅ Đăng nhập thành công! Chào mừng <strong>${res.user.fullName}</strong>.`;
                    alertBox.style.display = 'flex';
                }

                // Kích hoạt nạp dữ liệu và mở khóa giao diện ngay lập tức
                startAppWorkflow();
                return false;
            } else {
                if (alertBox) {
                    alertBox.className = 'auth-alert auth-alert-error';
                    alertBox.innerHTML = `⚠️ ${res.message}`;
                    alertBox.style.display = 'flex';
                }
                if (pInput) {
                    pInput.focus();
                    pInput.select();
                }
            }
        } catch (err) {
            if (alertBox) {
                alertBox.className = 'auth-alert auth-alert-error';
                alertBox.innerHTML = `⚠️ Lỗi xác thực: ${err.message}`;
                alertBox.style.display = 'flex';
            }
        } finally {
            if (btnText) btnText.style.display = 'inline-block';
            if (btnSpinner) btnSpinner.style.display = 'none';
            if (submitBtn) submitBtn.disabled = false;
        }
    }

    function toggleAuthPasswordVisibility() {
        const pInput = document.getElementById('authPassword');
        const eyeIcon = document.getElementById('authPwdEyeIcon');
        if (!pInput) return;
        if (pInput.type === 'password') {
            pInput.type = 'text';
            if (eyeIcon) eyeIcon.textContent = '🙈';
        } else {
            pInput.type = 'password';
            if (eyeIcon) eyeIcon.textContent = '👁️';
        }
    }

    // KHỞI ĐỘNG VẬN HÀNH APP SAU KHI XÁC THỰC
    let appWorkflowStarted = false;
    function startAppWorkflow() {
        if (appWorkflowStarted) return;
        appWorkflowStarted = true;

        // Render ban đầu
        setGlobalPeriod('week', document.getElementById('btn-period-week'));
        renderPipelineViews();
        renderCustomerViews();
        if (typeof generateExecutiveReport === 'function') generateExecutiveReport();

        // Router khôi phục tab F5
        (function initActiveTab() {
            try {
                let targetTab = 'tab-trang-chu';
                const hashTab = window.location.hash.replace(/^#/, '').trim();
                const savedTab = localStorage.getItem('songanh_sale_active_tab');
                if (hashTab && document.getElementById(hashTab)) {
                    targetTab = hashTab;
                } else if (savedTab && document.getElementById(savedTab)) {
                    targetTab = savedTab;
                }
                if (targetTab !== 'tab-trang-chu') {
                    switchAppTab(targetTab, null, false);
                }
            } catch(e) {
                console.warn('Tab init router error:', e);
            }
        })();

        // Tự động đồng bộ ngầm sau mỗi 2 phút (120,000ms)
        setInterval(function() {
            if (AuthManager.isAuthenticated()) {
                syncNotionLive(false);
            }
        }, 120000);

        // Tự động kích hoạt đồng bộ ngầm 2.5 giây sau khi mở webapp
        setTimeout(function() {
            if (AuthManager.isAuthenticated()) {
                syncNotionLive(false);
            }
        }, 2500);
    }

    window.addEventListener('hashchange', () => {
        if (!AuthManager.isAuthenticated()) return;
        const hashTab = window.location.hash.replace(/^#/, '').trim();
        if (hashTab && document.getElementById(hashTab)) {
            switchAppTab(hashTab, null, false);
        }
    });

    // 🚀 KHỞI CHẠY KIỂM TRA ĐĂNG NHẬP ĐẦU TIÊN
    const hasValidSession = AuthManager.init();
    if (hasValidSession) {
        startAppWorkflow();
    }
