import { ic, badge, pill, av, phone, web } from './lib.mjs';
import { S } from './screens1.mjs';
const li = (iconK, cls, t, s, right = '') => `<div class="li"><div class="ico ${cls}">${ic(iconK, 19)}</div><div class="sp"><div class="nm">${t}</div><div class="xs">${s}</div></div>${right || ic('chev', 18, '#9AA7BA')}</div>`;

const stu = (n, st, k, pct) => `<div class="li" style="padding:9px 14px">${av(n, 36)}<div class="sp"><div class="row"><span class="nm sp">${n}</span>${pill(st, k)}</div><div class="bar-bg" style="margin-top:6px"><div class="bar-fg" style="width:${pct}%"></div></div></div><span class="xs" style="width:32px;text-align:right">${pct}%</span></div>`;
S['12-dao-tao-hoc-vien'] = phone({ title: 'Đào tạo', sub: 'Học viên & tiến độ', tab: 'Thêm', right: `<div class="btn-i">${ic('plus', 20)}</div>`, body: `
<div class="row"><div class="sel"><span>Khóa 12 · Đợt 10/2026</span>${ic('down', 16)}</div></div>
<div class="grid2" style="grid-template-columns:repeat(4,1fr);gap:8px"><div class="stat" style="padding:9px 8px;text-align:center"><div class="n" style="font-size:19px">22</div><div class="l" style="font-size:11px">Học viên</div></div><div class="stat" style="padding:9px 8px;text-align:center"><div class="n" style="font-size:19px;color:var(--ok)">6</div><div class="l" style="font-size:11px">Hoàn thành</div></div><div class="stat" style="padding:9px 8px;text-align:center"><div class="n" style="font-size:19px">12</div><div class="l" style="font-size:11px">Đang học</div></div><div class="stat" style="padding:9px 8px;text-align:center"><div class="n" style="font-size:19px;color:var(--er)">3</div><div class="l" style="font-size:11px">Quá hạn</div></div></div>
<div class="sec"><span class="h2">Học viên</span><a>Lọc</a></div>
<div class="card flat">${stu('Ngô Bảo Châu', 'Hoàn thành', 'ok', 100)}${stu('Bùi Anh Tuấn', 'Đang học', 'b', 64)}${stu('Hồ Thị Lệ', 'Quá hạn', 'er', 38)}${stu('Đinh Văn Phúc', 'Chưa bắt đầu', 'n', 0)}</div>
<div class="sec"><span class="h2">Nhiệm vụ sắp đến hạn</span></div>
<div class="card flat">${li('book', '', 'Bài tập 3 – Quy trình tư vấn', 'Hạn 22/10/2026 · 14 chưa nộp', pill('2 ngày', 'wa'))}${li('check', 'ok', '2 hồ sơ chờ lên Chuyên viên', 'Cần xác nhận kết quả đào tạo', pill('Duyệt', 'b'))}</div>` });

S['13-lich-hop-binh-chon'] = phone({ title: 'Lịch họp & bình chọn', tab: 'Thêm', right: `<div class="btn-i">${ic('plus', 20)}</div>`, body: `
<div class="seg"><div>Lịch họp</div><div class="on">Bình chọn</div><div>Thống kê</div></div>
<div class="card"><div class="row"><span class="h2 sp">Họp kế hoạch tháng 11</span>${pill('Đang mở', 'ok')}</div>
 <div class="row" style="margin-top:4px;gap:6px">${ic('calendar', 15, '#4B5A6E')}<span class="muted">25/10/2026 · 09:00 · Phòng họp A</span></div>
 <div class="note wa" style="margin-top:10px">${ic('clock', 16)}<span><b>Hạn bình chọn: 24/10/2026 09:00</b> (trước sự kiện 24 giờ). Còn 3 ngày 23 giờ. Bạn có thể đổi lựa chọn đến hạn.</span></div>
 <div class="row" style="margin-top:10px"><div class="btn sm" style="background:var(--navy);flex:.9;padding:0 6px;white-space:nowrap;font-size:12.5px">${ic('check', 14, '#fff', 2.5)}Đồng ý</div><div class="btn sm sec2" style="flex:1.2;padding:0 6px;white-space:nowrap;font-size:12.5px">Không tham gia</div><div class="btn sm sec2" style="flex:1.1;padding:0 6px;white-space:nowrap;font-size:12.5px">Chưa xác định</div></div></div>
<div class="grid2" style="grid-template-columns:repeat(3,1fr);gap:8px">
 <div class="stat" style="padding:9px 10px"><div class="n" style="font-size:19px">128</div><div class="l">Đã mời</div></div><div class="stat" style="padding:9px 10px"><div class="n" style="font-size:19px;color:var(--ok)">74</div><div class="l">Đồng ý</div></div><div class="stat" style="padding:9px 10px"><div class="n" style="font-size:19px;color:var(--er)">12</div><div class="l">Không tham gia</div></div>
 <div class="stat" style="padding:9px 10px"><div class="n" style="font-size:19px">9</div><div class="l">Chưa xác định</div></div><div class="stat" style="padding:9px 10px"><div class="n" style="font-size:19px;color:var(--wa)">33</div><div class="l">Chưa phản hồi</div></div><div class="stat" style="padding:9px 10px"><div class="n" style="font-size:19px">74,2%</div><div class="l">Tỷ lệ phản hồi</div></div></div>
<div class="card"><div class="row"><span class="nm sp">Tiệc cuối quý</span>${pill(ic('lock', 12) + 'Đã khóa', 'n')}</div><div class="xs" style="margin:3px 0 8px">Hạn đã qua · khóa tự động 14/10/2026 18:00</div><div class="btn sm sec2">Mở lại (cần quyền và lý do)</div></div>
<div class="help" style="margin-top:-4px">Hạn bình chọn phải trước giờ bắt đầu sự kiện ít nhất 24 giờ.</div>` });

const bar = (t, v, mx, c = 'var(--navy2)') => `<div><div class="row"><span class="sp" style="font-size:12.5px">${t}</span><span class="b" style="font-size:12.5px">${v} tr</span></div><div class="bar-bg" style="margin-top:3px"><div class="bar-fg" style="width:${(parseFloat(v.replace(',', '.')) / mx) * 100}%;background:${c}"></div></div></div>`;
S['14-chi-phi-bao-cao'] = phone({ title: 'Chi phí & báo cáo', tab: 'Thêm', right: `<div class="btn-i">${ic('download', 19)}</div>`, body: `
<div class="row"><div class="sel"><span>Tháng 10/2026</span>${ic('down', 16)}</div><div class="sel"><span>Tất cả phòng/đội</span>${ic('down', 16)}</div></div>
<div class="card"><div class="muted">Tổng chi phí tháng 10</div><div class="row" style="align-items:baseline;gap:8px"><span style="font-size:26px;font-weight:800;color:var(--navy)">86,4 triệu ₫</span>${pill('▲ 9,2% so với tháng 9', 'wa')}</div></div>
<div class="card" style="display:flex;flex-direction:column;gap:5px"><span class="h2">Theo danh mục (triệu ₫)</span>
${bar('Quảng cáo/marketing', '32,5', 32.5)}${bar('Tiệc tùng', '18,0', 32.5, 'var(--wa)')}${bar('Nhân sự', '15,2', 32.5)}${bar('Tuyển dụng', '9,7', 32.5)}${bar('Vận hành văn phòng', '6,8', 32.5)}${bar('Đi lại/công tác', '3,2', 32.5)}${bar('Khác', '1,0', 32.5)}</div>
<div class="note wa">${ic('alert', 16)}<span><b>Gợi ý cần kiểm tra:</b> chi phí Tiệc tùng tăng 2,1 lần so với tháng 9. Đây là gợi ý, chưa phải kết luận sai phạm.</span></div>
<div class="card flat">${li('receipt', 'wa', 'Quảng cáo tuần 42', 'Đội trưởng Mẫu · 8,4 triệu ₫', pill('Chờ duyệt', 'wa'))}${li('receipt', 'ok', 'Thuê địa điểm họp 25/10', 'Đã duyệt · 5,8 triệu ₫', pill('Đã duyệt', 'ok'))}</div>` });

S['15-hoang-anh-ai'] = phone({ title: 'Hoàng Anh AI', sub: 'Theo quyền của bạn', tab: 'Thêm', body: `
<div class="card flat">${li('users', 'ok', 'Tra cứu nhân sự', 'Trong phạm vi phòng/đội của bạn', pill('Đã bật', 'ok'))}${li('chat', 'ok', 'Tóm tắt hội thoại', 'Chỉ hội thoại bạn được phép xem', pill('Đã bật', 'ok'))}${li('mail', 'ok', 'Soạn thông báo', 'Chỉ tạo bản nháp', pill('Đã bật', 'ok'))}${li('wallet', '', 'Tổng hợp chi phí', 'Cần được cấp quyền AI', pill('Chưa được cấp quyền', 'n'))}${li('book', '', 'Hỗ trợ đào tạo', 'Cần được cấp quyền AI', pill('Chưa được cấp quyền', 'n'))}</div>
<div style="display:flex;flex-direction:column;gap:6px;flex:1;overflow:hidden">
 <div class="bubble out" style="max-width:85%">Soạn thông báo nhắc cả nhóm bình chọn họp 25/10.</div>
 <div class="bubble in" style="max-width:92%"><div style="font-size:13.5px">Bạn hãy bình chọn tham gia buổi họp kế hoạch tháng 11 (25/10, 09:00) trước 09:00 ngày 24/10 nhé.</div>
 <div class="xs" style="margin-top:5px">Nguồn: lịch họp #LH-014</div></div>
 <div class="note wa">${ic('alert', 16)}<span><b>Bản nháp – cần bạn xác nhận trước khi gửi.</b> AI không tự gửi tin nhắn hay thay đổi dữ liệu.</span></div>
 <div class="row"><div class="btn sm sp">Gửi vào nhóm</div><div class="btn sm sp sec2">Chỉnh sửa</div></div></div>
<div class="row" style="padding:2px 0 10px"><div class="inp sp" style="border-radius:22px;height:42px;color:var(--t3)">Hỏi Hoàng Anh AI…</div><div class="ico" style="background:var(--navy);color:#fff;border-radius:50%">${ic('send', 18)}</div></div>` });

const rec = (id, who, meta, dur, dl = true, open = false) => `<div class="card" style="padding:11px 13px"><div class="row"><div class="ico">${ic('mic2', 19)}</div><div class="sp"><div class="nm">${id} · ${who}</div><div class="xs">${meta}</div></div><span class="xs b">${dur}</span></div>
${open ? `<div class="row" style="margin-top:10px"><div class="ico" style="background:var(--navy);color:#fff;border-radius:50%">${ic('play', 16, '#fff')}</div><div class="sp"><div class="bar-bg" style="height:5px"><div class="bar-fg" style="width:35%"></div></div><div class="row xs" style="margin-top:3px"><span class="sp">01:34</span><span>04:32</span></div></div></div>` : ''}
<div class="row" style="margin-top:10px"><div class="btn sm sp sec2">${ic('play', 15)}Nghe bản ghi</div>${dl ? `<div class="btn sm sp">${ic('download', 15)}Tải bản ghi</div>` : ''}</div></div>`;
S['16-nghe-tai-ban-ghi-am'] = phone({ title: 'Bản ghi âm cuộc gọi', sub: 'Đang xem với vai trò Giám đốc', tab: 'Thêm', right: `<div class="btn-i">${ic('filter', 19)}</div>`, body: `
<div class="note">${ic('shield', 16)}<span>Chỉ cuộc gọi thoại trong app đã thông báo và được đồng ý ghi âm. Mọi lượt nghe/tải được ghi audit log.</span></div>
${rec('BG-0042', 'Phòng KD 2', '20/10/2026 08:10 · Đã đồng ý ghi âm', '04:32', true, true)}
${rec('BG-0041', 'Phòng KD 1', '19/10/2026 16:45 · Đã đồng ý ghi âm', '12:05')}
<div class="card" style="background:#F1F5FB;padding:11px 13px"><div class="b" style="font-size:13px">Trưởng Phòng và vai trò được cấp quyền nghe</div><div class="xs" style="margin:3px 0 8px">Chỉ thấy “Nghe bản ghi”, trong phạm vi được giao. Không có nút tải.</div><div class="btn sm sec2" style="width:150px">${ic('play', 15)}Nghe bản ghi</div></div>` });

const nt = (i, cls, t, s, time, un) => `<div class="li" style="${un ? 'background:#F5F8FD' : ''}"><div class="ico ${cls}">${ic(i, 19)}</div><div class="sp"><div class="nm" style="white-space:normal">${t}</div><div class="xs">${s}</div></div><div style="text-align:right"><div class="xs">${time}</div>${un ? '<div style="width:8px;height:8px;border-radius:50%;background:var(--blue);margin:6px 0 0 auto"></div>' : ''}</div></div>`;
S['17-thong-bao'] = phone({ title: 'Thông báo', tab: 'Thông báo', right: `<div class="btn-i">${ic('sliders', 19)}</div>`, body: `
<div class="seg"><div class="on">Tất cả</div><div>Chưa đọc (3)</div></div>
<div class="card flat">${nt('device', 'wa', 'Yêu cầu thiết bị mới chờ duyệt', 'Mã YC-0001', '09:12', true)}${nt('chat', '', 'Bạn có tin nhắn mới', 'Nhóm hoạt động khối', '09:20', true)}${nt('calendar', 'wa', 'Nhắc hạn bình chọn họp 25/10', 'Còn 3 ngày 23 giờ', '08:00', true)}${nt('clock', '', 'Phỏng vấn lúc 09:30 hôm nay', 'Ứng viên Lê Văn An', '07:30', false)}${nt('receipt', 'ok', 'Chi phí đã được duyệt', 'Thuê địa điểm họp 25/10', 'Hôm qua', false)}${nt('key', '', 'Quyền của bạn đã thay đổi', 'Xem chi tiết trong Cài đặt', 'Hôm qua', false)}</div>
<div class="note">${ic('lock', 16)}<span>Thông báo đẩy trên màn hình khóa không hiển thị nội dung nhạy cảm.</span></div>` });

const tg = (t, s, on = true) => `<div class="li"><div class="sp"><div class="nm">${t}</div>${s ? `<div class="xs">${s}</div>` : ''}</div><div class="tog${on ? ' on' : ''}"></div></div>`;
S['18-cai-dat-bao-mat-thiet-bi'] = phone({ title: 'Cài đặt', tab: 'Thêm', body: `
<div class="card row">${av('Lê Quốc Việt', 46)}<div class="sp"><div class="nm" style="font-size:15px">Lê Quốc Việt</div><div style="margin-top:3px">${badge('tp')}</div></div>${ic('chev', 18, '#9AA7BA')}</div>
<div class="sec"><span class="h2">Bảo mật & thiết bị</span></div>
<div class="card flat">${li('key', '', 'Đổi mật khẩu', 'Lần đổi gần nhất: 02/09/2026')}${li('device', 'ok', 'Điện thoại mẫu (Android)', 'Thiết bị duy nhất · từ 12/10/2026', pill('Đang dùng', 'ok'))}</div>
<div class="sec"><span class="h2">Thông báo</span></div>
<div class="card flat">${tg('Tin nhắn mới', '')}${tg('Lịch họp và deadline', '')}${tg('Ẩn nội dung trên màn hình khóa', 'Khuyến nghị bật')}</div>
<div class="sec"><span class="h2">Giao diện</span></div>
<div class="card flat"><div class="li"><div class="sp nm">Cỡ chữ</div><div class="seg" style="width:150px"><div>A</div><div class="on">A+</div><div>A++</div></div></div></div>
<div class="btn dng">${ic('logout', 18)}Đăng xuất</div>` });

S['19-trung-tam-phan-quyen'] = phone({ title: 'Trung tâm phân quyền', sub: 'Chỉ dành cho người được cấp quyền', tab: 'Thêm', back: true, body: `
<div class="seg"><div class="on">Theo vai trò</div><div>Cá nhân</div></div>
<div class="row"><div class="sel"><span>Vai trò: Trưởng Phòng</span>${ic('down', 16)}</div></div>
<div class="card flat" style="padding:0">
<div class="li" style="align-items:flex-start"><div class="sp"><div class="nm" style="font-size:12.5px">communications_history.view</div><div class="xs">Phạm vi: phòng/đội được giao · chỉ đọc</div></div><div class="tog on"></div></div>
<div class="li" style="align-items:flex-start"><div class="sp"><div class="nm" style="font-size:12.5px">communications_recording.listen</div><div class="xs">Phạm vi: phòng/đội được giao</div></div><div class="tog on"></div></div>
<div class="li" style="align-items:flex-start;background:#F7F8FB"><div class="sp"><div class="nm" style="font-size:12.5px">communications_recording.download</div><div class="xs">${ic('lock', 11)} Khóa: chỉ vai trò Giám đốc</div></div><div class="tog"></div></div>
<div class="li" style="align-items:flex-start"><div class="sp"><div class="nm" style="font-size:12.5px">members.profile.edit</div><div class="xs">Phạm vi: phòng/đội được giao</div></div><div class="tog on"></div></div>
<div class="li" style="align-items:flex-start"><div class="sp"><div class="nm" style="font-size:12.5px">expenses.receipt.view</div><div class="xs">Phạm vi: cá nhân</div></div><div class="tog"></div></div>
<div class="li" style="align-items:flex-start"><div class="sp"><div class="nm" style="font-size:12.5px">ai.use</div><div class="xs">Phạm vi: toàn khối</div></div><div class="tog on"></div></div></div>
<div class="note">${ic('shield', 16)}<span>Quyền hiệu lực = vai trò + ngoại lệ cá nhân. Bạn không thể tự cấp quyền cho chính mình. Mọi thay đổi được ghi audit log và cần xác nhận.</span></div>
<div class="row" style="padding-bottom:10px"><div class="btn sp">Lưu thay đổi</div><div class="btn sec2" style="width:110px">Hoàn tác</div></div>` });

const au = (t, who, act, res, k) => `<div class="li" style="align-items:flex-start"><div class="xs" style="width:42px;padding-top:2px">${t}</div><div class="sp"><div class="nm" style="white-space:normal;font-size:13px">${act}</div><div class="xs">${who}</div></div>${pill(res, k)}</div>`;
S['20-audit-log'] = phone({ title: 'Audit log', sub: 'Chỉ đọc · không thể sửa hoặc xóa', tab: 'Thêm', back: true, right: `<div class="btn-i">${ic('download', 19)}</div>`, body: `
<div class="search">${ic('search', 18)}Tìm theo tài khoản, hành động, đối tượng</div>
<div class="row"><div class="sel"><span>Loại: Tất cả</span>${ic('down', 16)}</div><div class="sel"><span>20/10/2026</span>${ic('calendar', 16)}</div></div>
<div class="card flat" style="flex:1">
${au('09:14', 'Giám đốc Mẫu', 'Tải bản ghi BG-0042', 'Thành công', 'ok')}
${au('09:12', 'Hệ thống', 'Yêu cầu thiết bị mới YC-0001', 'Chờ duyệt', 'wa')}
${au('09:02', 'Admin Mẫu', 'Duyệt thiết bị cho tài khoản 0087', 'Thành công', 'ok')}
${au('08:55', 'Trưởng Phòng Mẫu', 'Tải bản ghi BG-0042', 'Bị từ chối', 'er')}
${au('08:31', 'Trợ lý Mẫu', 'Sửa hồ sơ thành viên 0112 (SĐT)', 'Thành công', 'ok')}
${au('00:00', 'Tác vụ nền', 'Hết hạn 45 ngày: thu hồi 2 ứng viên', 'Thành công', 'ok')}</div>` });

// ---------- WEB ----------
const kpi = (n, l, c = 'var(--navy)') => `<div class="wcard" style="flex:1"><div class="muted">${l}</div><div style="font-size:30px;font-weight:800;color:${c};margin-top:2px">${n}</div></div>`;
const hb = (t, v, mx, c = 'var(--navy2)') => `<div style="display:flex;align-items:center;gap:12px"><span style="width:150px;font-size:13px">${t}</span><div class="bar-bg" style="flex:1;height:10px"><div class="bar-fg" style="width:${v / mx * 100}%;background:${c}"></div></div><span class="b" style="width:56px;text-align:right;font-size:13px">${v.toFixed(1).replace('.', ',')} tr</span></div>`;
S['21-web-dashboard-dieu-hanh'] = web({ active: 'Tổng quan', title: 'Tổng quan điều hành', body: `
<div class="row" style="gap:16px">${kpi('128', 'Thành viên')}${kpi('24', 'Ứng viên đang theo dõi')}${kpi('74,2%', 'Tỷ lệ phản hồi họp 25/10')}${kpi('86,4 tr ₫', 'Chi phí tháng 10', 'var(--wa)')}</div>
<div class="row" style="gap:16px;align-items:stretch;flex:none">
 <div class="wcard" style="flex:1.2;display:flex;flex-direction:column;gap:11px"><div class="row"><span class="h2 sp">Chi phí theo danh mục – T10/2026</span>${pill('▲ 9,2% so với tháng 9', 'wa')}</div>
 ${hb('Quảng cáo/marketing', 32.5, 32.5)}${hb('Tiệc tùng', 18.0, 32.5, 'var(--wa)')}${hb('Nhân sự', 15.2, 32.5)}${hb('Tuyển dụng', 9.7, 32.5)}${hb('Vận hành văn phòng', 6.8, 32.5)}${hb('Đi lại/công tác', 3.2, 32.5)}${hb('Khác', 1.0, 32.5)}
 <div class="note wa" style="margin-top:4px">${ic('alert', 16)}<span>Gợi ý cần kiểm tra: Tiệc tùng tăng 2,1 lần so với tháng 9 – chưa phải kết luận.</span></div></div>
 <div class="wcard" style="flex:1;padding:0;display:flex;flex-direction:column"><div class="row" style="padding:16px 18px 6px"><span class="h2 sp">Cần xử lý</span></div>
 <table><tbody>
 <tr><td>${ic('device', 18, 'var(--wa)')}</td><td><b>3 yêu cầu thiết bị mới</b><div class="xs">Chờ Admin phê duyệt</div></td><td>${pill('Chờ duyệt', 'wa')}</td></tr>
 <tr><td>${ic('receipt', 18, 'var(--navy2)')}</td><td><b>2 khoản chi phí</b><div class="xs">Tổng 14,2 triệu ₫</div></td><td>${pill('Chờ duyệt', 'wa')}</td></tr>
 <tr><td>${ic('calendar', 18, 'var(--er)')}</td><td><b>Bình chọn họp kế hoạch tháng 11</b><div class="xs">Hạn 24/10/2026 09:00 (trước sự kiện 24 giờ)</div></td><td>${pill('Còn 3 ngày', 'er')}</td></tr>
 <tr><td>${ic('brief', 18, 'var(--navy2)')}</td><td><b>4 ứng viên sắp hết hạn 45 ngày</b><div class="xs">Trợ lý đang theo dõi</div></td><td>${pill('4', 'wa')}</td></tr>
 <tr><td>${ic('book', 18, 'var(--navy2)')}</td><td><b>2 hồ sơ chờ lên Chuyên viên</b><div class="xs">Khóa 12</div></td><td>${pill('Duyệt', 'b')}</td></tr></tbody></table></div>
 <div class="wcard" style="flex:.8;padding:0"><div class="row" style="padding:16px 18px 6px"><span class="h2 sp">Thành viên theo cấp bậc</span></div>
 <table><tbody>${[['hv', 40], ['cv', 46], ['dt', 14], ['pp', 8], ['tp', 6], ['gd', 1], ['tl', 3]].map(([k, n]) => `<tr><td>${badge(k)}</td><td style="text-align:right;font-weight:700">${n}</td></tr>`).join('')}</tbody></table></div>
</div>
<div class="row" style="gap:16px;align-items:stretch;flex:1;min-height:0">
 <div class="wcard" style="flex:1.2;padding:0;overflow:hidden"><div class="row" style="padding:14px 18px 4px"><span class="h2 sp">Lịch họp sắp tới</span></div>
 <table><tbody>
 <tr><td><b>Họp kế hoạch tháng 11</b><div class="xs">25/10/2026 · 09:00 · Phòng họp A</div></td><td>${pill('Đang mở bình chọn', 'ok')}</td><td class="xs">Hạn 24/10 09:00</td></tr>
 <tr><td><b>Tiệc cuối quý</b><div class="xs">Đã diễn ra theo lịch</div></td><td>${pill('Đã khóa', 'n')}</td><td class="xs">Khóa 14/10 18:00</td></tr></tbody></table></div>
 <div class="wcard" style="flex:1;display:flex;flex-direction:column;gap:9px;overflow:hidden"><span class="h2">Ứng viên theo thời hạn 45 ngày</span>
 ${[['Còn trên 30 ngày', 11, 'var(--ok)'], ['Còn 8–30 ngày', 7, 'var(--navy2)'], ['Sắp hết hạn (≤ 7 ngày)', 4, 'var(--er)'], ['Đã hết hạn tháng này', 2, '#7A889B']].map(([a, n, c]) => `<div style="display:flex;align-items:center;gap:12px"><span style="width:170px;font-size:13px">${a}</span><div class="bar-bg" style="flex:1;height:10px"><div class="bar-fg" style="width:${n / 11 * 100}%;background:${c}"></div></div><span class="b" style="width:24px;text-align:right;font-size:13px">${n}</span></div>`).join('')}</div>
</div>` });

const perm = (code, scope, on, locked = false, who = 'Vai trò') => `<tr style="${locked ? 'background:#F7F8FB' : ''}"><td><b style="font-size:12.5px">${code}</b></td><td class="muted">${scope}</td><td>${locked ? ic('lock', 14, '#7A889B') + ' <span class="xs">Chỉ Giám đốc</span>' : `<div class="tog${on ? ' on' : ''}"></div>`}</td><td class="xs">${who}</td></tr>`;
const al = (t, a, o, r, k) => `<tr><td class="xs">${t}</td><td><b style="font-size:12.5px">${a}</b></td><td class="muted">${o}</td><td>${pill(r, k)}</td></tr>`;
S['22-web-phan-quyen-audit-log'] = web({ active: 'Trung tâm phân quyền', title: 'Trung tâm phân quyền & Audit log', body: `
<div class="row" style="gap:16px;align-items:stretch;flex:none">
 <div class="wcard" style="width:250px;padding:12px;display:flex;flex-direction:column;gap:2px"><div class="h2" style="padding:4px 6px">Vai trò</div>
 ${[['gd', 'gd'], ['tl', 'tl'], ['tp', 'tp'], ['pp', 'pp'], ['dt', 'dt'], ['cv', 'cv'], ['hv', 'hv']].map(([k], i) => `<div class="row" style="padding:5px 8px;border-radius:10px;${k === 'tp' ? 'background:var(--blue-soft);' : ''}">${badge(k)}<span class="sp"></span><span class="xs">${[1, 3, 6, 8, 14, 46, 40][i]}</span></div>`).join('')}
 <div class="note" style="margin-top:6px;font-size:11.5px;padding:7px 10px">${ic('shield', 15)}<span>Admin hệ thống là vai trò riêng, không mặc nhiên nghe/tải bản ghi.</span></div></div>
 <div class="wcard" style="flex:1;padding:0;display:flex;flex-direction:column"><div class="row" style="padding:14px 18px"><span class="h2 sp">Quyền của vai trò ${badge('tp')}</span><div class="seg" style="width:300px"><div class="on">Theo vai trò</div><div>Ngoại lệ cá nhân</div></div></div>
 <table><thead><tr><th>Quyền</th><th>Phạm vi</th><th>Cấp</th><th>Nguồn</th></tr></thead><tbody>
 ${perm('communications_history.view', 'Phòng/đội được giao · chỉ đọc', true)}${perm('communications_recording.listen', 'Phòng/đội được giao', true)}${perm('communications_recording.download', 'Không áp dụng', false, true)}${perm('members.profile.edit', 'Phòng/đội được giao', true)}${perm('expenses.receipt.view', 'Cá nhân', false)}${perm('ai.use', 'Toàn khối', true)}</tbody></table>
 <div class="row" style="padding:12px 18px;margin-top:auto;border-top:1px solid var(--line)"><span class="xs sp">Không thể tự cấp quyền cho chính mình · thay đổi nhạy cảm cần xác nhận và ghi audit log.</span><div class="btn sm sec2">Hoàn tác</div><div class="btn sm">Lưu thay đổi</div></div></div></div>
<div class="wcard" style="flex:1;padding:0;display:flex;flex-direction:column;min-height:0;overflow:hidden"><div class="row" style="padding:14px 18px 6px"><span class="h2 sp">Audit log · 20/10/2026</span><div class="sel" style="flex:none;width:180px"><span>Loại: Tất cả</span>${ic('down', 16)}</div><div class="btn sm sec2">${ic('download', 15)}Xuất (ghi log)</div></div>
 <table><thead><tr><th style="width:80px">Giờ</th><th>Tài khoản / hành động</th><th>Đối tượng</th><th style="width:130px">Kết quả</th></tr></thead><tbody>
 ${al('09:14', 'Giám đốc Mẫu – Tải bản ghi', 'BG-0042', 'Thành công', 'ok')}${al('09:02', 'Admin Mẫu – Duyệt thiết bị mới', 'Tài khoản 0087', 'Thành công', 'ok')}${al('08:55', 'Trưởng Phòng Mẫu – Tải bản ghi', 'BG-0042', 'Bị từ chối', 'er')}${al('08:31', 'Trợ lý Mẫu – Sửa hồ sơ (SĐT)', 'Thành viên 0112', 'Thành công', 'ok')}${al('00:00', 'Tác vụ nền – Hết hạn 45 ngày', '2 ứng viên', 'Thành công', 'ok')}</tbody></table></div>` });

const row3=(label,a,b)=>`<div class="card" style="padding:10px 12px"><div class="xs b" style="margin-bottom:7px;color:var(--t2)">${label}</div><div class="row"><div class="btn sp ${a}" style="height:42px;font-size:14px">Duyệt</div><div class="btn sec2 sp ${b}" style="height:42px;font-size:14px">Chi tiết</div></div></div>`;
S['23-hieu-ung-nut-bam'] = phone({ title: 'Hiệu ứng nút bấm', sub: 'Các trạng thái dùng chung', tab: 'Thêm', back: true, body: `
${row3('1. Mặc định','','')}${row3('2. Rê chuột / hover: nâng nhẹ 1px, bóng đậm hơn','is-hover','is-hover')}${row3('3. Nhấn: thu nhỏ 97%, gợn sóng lan từ điểm chạm','is-press','is-press')}${row3('4. Focus bàn phím: viền xanh 3px, không bị che','is-focus','is-focus')}
<div class="card" style="padding:10px 12px"><div class="xs b" style="margin-bottom:7px;color:var(--t2)">5. Đang xử lý · thành công · vô hiệu</div><div class="row"><div class="btn sp loading" style="height:42px;font-size:13px;padding:0 8px;white-space:nowrap">Đang gửi</div><div class="btn sp done" style="height:42px;font-size:13px;padding:0 8px">${ic('check', 16, '#fff', 2.5)}Đã gửi</div><div class="btn sp dis" style="height:42px;font-size:13px;padding:0 8px">Vô hiệu</div></div></div>
<div class="note">${ic('clock', 16)}<span>Thời lượng: nhấn 140ms, hover/chuyển 220ms, vào màn hình 420ms. Khi thiết bị bật "Giảm chuyển động", mọi hiệu ứng tắt và nút hiện ngay trạng thái cuối.</span></div>` });
export { S };
