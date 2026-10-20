# Cổng 0 – Bảng đối chiếu ảnh preview ↔ mục đặc tả (v1.1)

Mọi ảnh là **BẢN XEM TRƯỚC – DỮ LIỆU MẪU** (tên, số điện thoại, CCCD đều là dữ liệu mẫu). Điện thoại 390×844, web 1440×900.
Mã nguồn dựng ảnh nằm ở `preview/_src/` (chạy `node build.mjs`); đây chỉ là công cụ preview, không phải mã ứng dụng.

| # | Ảnh | Màn hình | Mục đặc tả |
|---|---|---|---|
| 01 | `01-dang-nhap.png` | Đăng nhập, không có đăng nhập Facebook/Google/Apple; lối vào đăng ký ứng viên | 4.4, 5.1, 9.1 |
| 02 | `02-cho-duyet-thiet-bi.png` | Chờ duyệt thiết bị mới, hướng dẫn liên hệ khi bị từ chối | 5.3 |
| 03 | `03-trang-chu-giam-doc.png` | Trang chủ Giám đốc | 4.4, 2.3 |
| 04 | `04-trang-chu-tro-ly.png` | Trang chủ Trợ lý | 4.4, 2.2 |
| 05 | `05-danh-ba.png` | Danh bạ: tìm kiếm, lọc vai trò/phòng-đội, ẩn SĐT khi thiếu quyền | 6.4 |
| 06 | `06-ho-so-thanh-vien.png` | Hồ sơ thành viên, hành động, quyền sửa | 6.1–6.3 |
| 07 | `07-chat-danh-sach.png` | Chat: danh sách hội thoại (3 loại) | 7.1 |
| 08 | `08-chat-khung-chat.png` | Chat: khung chat (ghim, trả lời, reaction, tệp riêng tư, đã đọc) | 7.2, 7.6 |
| 09 | `09-cong-dang-ky-ung-vien.png` | Cổng đăng ký ứng viên (bước 1/3) | 9.1 |
| 10 | `10-ung-vien-theo-doi-ho-so.png` | Theo dõi hồ sơ, chọn lịch phỏng vấn, chat với Trợ lý, thu nhập tham khảo có nguồn/ngày | 9.1, 9.2, 7.4 |
| 11 | `11-quan-ly-ung-vien-tro-ly.png` | Quản lý ứng viên của Trợ lý, đếm ngược 45 ngày, hết hạn | 9.2, 9.4 |
| 12 | `12-dao-tao-hoc-vien.png` | Đào tạo / học viên, tiến độ, phê duyệt chuyển cấp | 10, 9.3 |
| 13 | `13-lich-hop-binh-chon.png` | Lịch họp & bình chọn: deadline 24/10 09:00 cho sự kiện 25/10 09:00, thống kê, đã khóa/mở lại | 11.1–11.3 |
| 14 | `14-chi-phi-bao-cao.png` | Chi phí & báo cáo, 7 danh mục, so kỳ, gợi ý bất thường | 12 |
| 15 | `15-hoang-anh-ai.png` | Hoàng Anh AI, trạng thái "Chưa được cấp quyền", bản nháp cần xác nhận | 13.5, 13.4 |
| 16 | `16-nghe-tai-ban-ghi-am.png` | Nghe/tải bản ghi, chỉ Giám đốc thấy "Tải bản ghi" | 8.2, 8.3 |
| 17 | `17-thong-bao.png` | Thông báo | 15 |
| 18 | `18-cai-dat-bao-mat-thiet-bi.png` | Cài đặt, bảo mật, thiết bị | 4.4, 5.3, 15 |
| 19 | `19-trung-tam-phan-quyen.png` | Trung tâm phân quyền (điện thoại) | 14, 8.3 |
| 20 | `20-audit-log.png` | Audit log (điện thoại) | 16 |
| 21 | `21-web-dashboard-dieu-hanh.png` | Web: dashboard điều hành | 2.1, 4.4 |
| 22 | `22-web-phan-quyen-audit-log.png` | Web: trung tâm phân quyền và audit log | 14.3, 16 |
| 23 | `23-hieu-ung-nut-bam.png` | Các trạng thái nút: mặc định, hover, nhấn, focus, đang xử lý, thành công, vô hiệu | 4.1, 4.3 |

## Huy hiệu 7 cấp bậc (mục 4.2)
Mỗi huy hiệu gồm màu + icon + nhãn chữ: Học viên (xanh dương nhạt), Chuyên viên (xanh lá), Đội trưởng (cam), Phó Phòng (xanh dương đậm), Trưởng Phòng (tím), Giám đốc (vàng), Trợ lý (xanh ngọc). Hiển thị trong ảnh 03, 04, 05, 06, 08, 18, 19, 21, 22.

## Điểm cần Dũng xác nhận khi duyệt
- Cấu trúc điều hướng dưới cùng: Trang chủ, Chat, Danh bạ, Thông báo, Thêm.
- Dark mode (mục 4.1 "nếu triển khai"): preview chưa vẽ; sẽ cân nhắc khi build.
- Ảnh đại diện trong preview là chữ cái viết tắt, chưa có ảnh thật.

## Cập nhật v2 – giao diện chuyên nghiệp có hiệu ứng (theo yêu cầu của Dũng)
- Giữ nguyên bố cục, màu navy – trắng – xám và huy hiệu 7 cấp đã xem; chỉ nâng chất lượng hiển thị.
- Nút: nền gradient navy, bóng nhiều lớp; hover nâng 1px; nhấn thu nhỏ 97% kèm gợn sóng; focus viền xanh 3px; trạng thái đang xử lý (`aria-busy`), thành công, vô hiệu.
- Chuyển động: nội dung vào màn hình lần lượt (420ms), thanh tiến độ chạy từ trái, công tắc trượt, chỉ báo tab, bóng thẻ nâng khi hover.
- Tôn trọng `prefers-reduced-motion`: toàn bộ animation tắt, hiện ngay trạng thái cuối. Các ảnh PNG chụp ở trạng thái này.
- Bản thử tương tác: mở `preview/interactive/index.html` bằng trình duyệt (bấm nút, chuyển tab, bật/tắt công tắc, dùng phím Tab).
