# Cổng 0 – Bảng đối chiếu ảnh preview ↔ mục đặc tả (v1.1) – giao diện v3

Mọi ảnh là **BẢN XEM TRƯỚC – DỮ LIỆU MẪU**. Điện thoại 390×844 (ảnh 01–21), web 1440×900 (ảnh 22–32). Mã dựng ảnh: `preview/_src/` (`node build.mjs`), chỉ là công cụ preview.

| # | Ảnh | Màn hình | Mục đặc tả |
|---|---|---|---|
| 01 | `01-dang-nhap.png` | Đăng nhập (không có đăng nhập mạng xã hội); lối vào đăng ký ứng viên | 4.4, 5.1, 9.1 |
| 02 | `02-cho-duyet-thiet-bi.png` | Chờ duyệt thiết bị mới (radar động) | 5.3 |
| 03 | `03-trang-chu-giam-doc.png` | Trang chủ Giám đốc | 4.4, 2.3 |
| 04 | `04-trang-chu-tro-ly.png` | Trang chủ Trợ lý | 4.4, 2.2 |
| 05 | `05-danh-ba.png` | Danh bạ, lọc, ẩn SĐT khi thiếu quyền | 6.4 |
| 06 | `06-ho-so-thanh-vien.png` | Hồ sơ thành viên | 6.1–6.3 |
| 07 | `07-chat-danh-sach.png` | Chat: danh sách (3 loại hội thoại) | 7.1 |
| 08 | `08-chat-khung-chat.png` | Chat: khung chat | 7.2, 7.6 |
| 09 | `09-cong-dang-ky-ung-vien.png` | Cổng đăng ký ứng viên | 9.1 |
| 10 | `10-ung-vien-theo-doi-ho-so.png` | Theo dõi hồ sơ, vòng đếm ngược 45 ngày, chọn lịch phỏng vấn | 9.1, 9.2, 9.4 |
| 11 | `11-quan-ly-ung-vien-tro-ly.png` | Quản lý ứng viên của Trợ lý | 9.2, 9.4 |
| 12 | `12-dao-tao-hoc-vien.png` | Đào tạo / học viên (biểu đồ tiến độ) | 10, 9.3 |
| 13 | `13-lich-hop-binh-chon.png` | Lịch họp & bình chọn, deadline 24 giờ | 11 |
| 14 | `14-chi-phi-bao-cao.png` | Chi phí & báo cáo (donut, xu hướng) | 12 |
| 15 | `15-hoang-anh-ai.png` | Hoàng Anh AI, "Chưa được cấp quyền" | 13 |
| 16 | `16-nghe-tai-ban-ghi-am.png` | Nghe/tải bản ghi, chỉ Giám đốc thấy "Tải bản ghi" | 8 |
| 17 | `17-thong-bao.png` | Thông báo | 15 |
| 18 | `18-cai-dat-bao-mat-thiet-bi.png` | Cài đặt, bảo mật, thiết bị | 4.4, 5.3 |
| 19 | `19-trung-tam-phan-quyen.png` | Trung tâm phân quyền (điện thoại) | 14 |
| 20 | `20-audit-log.png` | Audit log (điện thoại) | 16 |
| 21 | `21-hieu-ung-nut-bam.png` | Các trạng thái nút bấm | 4.1, 4.3 |
| 22 | `22-web-dashboard-dieu-hanh.png` | Web: tổng quan điều hành | 2.1, 4.4 |
| 23 | `23-web-thanh-vien.png` | Web: thành viên | 6 |
| 24 | `24-web-chat.png` | Web: Hoàng Anh Connect (chat 3 cột) | 7 |
| 25 | `25-web-tuyen-dung.png` | Web: tuyển dụng (bảng kanban + 45 ngày) | 9 |
| 26 | `26-web-dao-tao.png` | Web: đào tạo | 10 |
| 27 | `27-web-lich-hop.png` | Web: lịch họp & bình chọn | 11 |
| 28 | `28-web-chi-phi.png` | Web: chi phí & báo cáo | 12 |
| 29 | `29-web-hoang-anh-ai.png` | Web: Hoàng Anh AI | 13 |
| 30 | `30-web-ban-ghi-am.png` | Web: bản ghi âm | 8 |
| 31 | `31-web-phan-quyen-audit-log.png` | Web: trung tâm phân quyền & audit log | 14, 16 |
| 32 | `32-web-duyet-thiet-bi.png` | Web: duyệt thiết bị | 5.3 |

## Ngôn ngữ thiết kế v3
- Bảng màu navy – trắng – xám theo mục 4.1; huy hiệu 7 cấp có màu + icon + nhãn chữ (mục 4.2); Admin hệ thống là nhãn riêng, không phải cấp bậc.
- Hình ảnh tự vẽ bằng SVG (không dùng ảnh người hay ảnh stock): bầu trời đô thị có cửa sổ nhấp nháy, mặt trăng, mây trôi; avatar gradient viền theo cấp bậc; biểu đồ donut/sparkline/vòng đếm ngược; quả cầu AI; radar thiết bị; sóng âm bản ghi.
- Hoạt ảnh: nội dung vào màn hình lần lượt, biểu đồ vẽ dần, số đếm lên, tab/thẻ/nút nâng khi hover, nhấn thu nhỏ có gợn sóng, đang xử lý → thành công, chấm gõ phím trong chat, radar quét, sóng âm chạy khi phát.
- Tôn trọng `prefers-reduced-motion`: toàn bộ hoạt ảnh tắt, hiện ngay trạng thái cuối. Ảnh PNG chụp ở trạng thái này.
- Bản thử tương tác: mở `preview/interactive/index.html`.
