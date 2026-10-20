import { ic, badge, pill, av, phone } from './lib.mjs';
const li = (iconK, cls, t, s, right = '') => `<div class="li"><div class="ico ${cls}">${ic(iconK, 19)}</div><div class="sp"><div class="nm">${t}</div><div class="xs">${s}</div></div>${right || ic('chev', 18, '#9AA7BA')}</div>`;
const shortcut = (i, t) => `<div class="card" style="display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px 4px;text-align:center"><div class="ico">${ic(i, 20)}</div><div class="nm" style="white-space:normal;font-size:11.5px;line-height:1.25">${t}</div></div>`;

export const S = {};

S['01-dang-nhap'] = phone({ bar: false, tabs: false, lightStatus: true, body: `
<div style="flex:1;display:flex;flex-direction:column;gap:16px;padding-top:34px">
 <div style="display:flex;flex-direction:column;align-items:center;gap:12px;margin-bottom:10px">
  <div style="width:68px;height:68px;border-radius:18px;background:var(--navy);color:#fff;display:grid;place-items:center;font-weight:800;font-size:24px">HA</div>
  <div style="font-size:24px;font-weight:800;color:var(--navy)">Hoàng Anh Connect</div></div>
 <div class="field"><label>Tên đăng nhập</label><div class="inp f">thanhvien.mau01</div></div>
 <div class="field"><label>Mật khẩu</label><div class="inp"><span class="sp">••••••••••</span>${ic('eye', 19, '#7A889B')}</div></div>
 <div class="row"><span class="sp"></span><span style="color:var(--blue);font-weight:600;font-size:13.5px">Quên mật khẩu?</span></div>
 <div class="btn">Đăng nhập</div>
 <div class="note">${ic('lock', 16)}<span>Tài khoản thành viên do người có thẩm quyền cấp. Ứng dụng không hỗ trợ đăng nhập bằng mạng xã hội.</span></div>
 <div style="margin-top:auto;padding-bottom:18px;display:flex;flex-direction:column;gap:10px">
  <div class="muted" style="text-align:center">Bạn là ứng viên chưa có tài khoản thành viên?</div>
  <div class="btn sec2">Đăng ký ứng tuyển</div></div>
</div>` });

S['02-cho-duyet-thiet-bi'] = phone({ title: 'Xác minh thiết bị', tabs: false, body: `
<div style="display:flex;flex-direction:column;align-items:center;gap:10px;padding-top:14px;text-align:center">
 <div style="width:72px;height:72px;border-radius:50%;background:var(--wabg);color:var(--wa);display:grid;place-items:center">${ic('device', 34)}</div>
 <div style="font-size:19px;font-weight:800;color:var(--navy)">Thiết bị mới đang chờ duyệt</div>
 <div class="muted" style="max-width:320px">Mỗi tài khoản chỉ dùng được trên một thiết bị. Yêu cầu của bạn đã được gửi đến Admin để phê duyệt.</div></div>
<div class="card flat">
 <div class="li"><span class="muted sp">Thiết bị</span><span class="nm">Điện thoại mẫu (Android)</span></div>
 <div class="li"><span class="muted sp">Thời gian gửi</span><span class="nm">20/10/2026 09:12</span></div>
 <div class="li"><span class="muted sp">Mã yêu cầu</span><span class="nm">YC-0001</span></div>
 <div class="li"><span class="muted sp">Trạng thái</span>${pill(ic('clock', 12) + 'Chờ duyệt', 'wa')}</div></div>
<div class="note">${ic('alert', 16)}<span>Nếu yêu cầu bị từ chối, hãy liên hệ Admin qua kênh nội bộ để được hỗ trợ. Bạn chưa thể xem dữ liệu cho đến khi được duyệt.</span></div>
<div style="margin-top:auto;padding-bottom:16px;display:flex;flex-direction:column;gap:10px">
 <div class="btn">Kiểm tra lại trạng thái</div><div class="btn sec2">Liên hệ Admin</div><div class="btn dng">${ic('logout', 18)}Đăng xuất</div></div>` });

S['03-trang-chu-giam-doc'] = phone({ title: 'Trang chủ', sub: 'Thứ Ba, 20/10/2026', right: `<div class="btn-i">${ic('search', 19)}</div>`, body: `
<div class="card row">${av('Giám đốc Mẫu', 46)}<div class="sp"><div class="nm" style="font-size:15px">Xin chào, Giám đốc Mẫu</div><div style="margin-top:3px">${badge('gd')}</div></div></div>
<div class="grid2"><div class="stat"><div class="n">128</div><div class="l">Thành viên</div></div><div class="stat"><div class="n">24</div><div class="l">Ứng viên đang theo dõi</div></div>
<div class="stat"><div class="n">5</div><div class="l">Lịch họp tuần này</div></div><div class="stat"><div class="n">86,4 tr</div><div class="l">Chi phí tháng 10 (₫)</div></div></div>
<div class="sec"><span class="h2">Cần xử lý</span></div>
<div class="card flat">${li('device', 'wa', '3 yêu cầu thiết bị mới', 'Chờ Admin phê duyệt', pill('3', 'wa'))}${li('receipt', '', '2 khoản chi phí chờ duyệt', 'Tổng 14,2 triệu ₫', pill('2', 'b'))}${li('calendar', 'er', '1 bình chọn sắp đến hạn', 'Họp kế hoạch tháng 11 – còn 3 ngày', pill('3 ngày', 'er'))}</div>
<div class="sec"><span class="h2">Lối tắt</span></div>
<div class="grid2" style="grid-template-columns:repeat(4,1fr);gap:8px">${shortcut('key', 'Phân quyền')}${shortcut('mic2', 'Bản ghi âm')}${shortcut('wallet', 'Chi phí')}${shortcut('spark', 'Hoàng Anh AI')}</div>` });

S['04-trang-chu-tro-ly'] = phone({ title: 'Trang chủ', sub: 'Thứ Ba, 20/10/2026', right: `<div class="btn-i">${ic('search', 19)}</div>`, body: `
<div class="card row">${av('Trợ lý Mẫu', 46)}<div class="sp"><div class="nm" style="font-size:15px">Xin chào, Trợ lý Mẫu</div><div style="margin-top:3px">${badge('tl')}</div></div></div>
<div class="grid2"><div class="stat"><div class="n">18</div><div class="l">Ứng viên được phân công</div></div><div class="stat"><div class="n" style="color:var(--er)">4</div><div class="l">Sắp hết hạn 45 ngày</div></div>
<div class="stat"><div class="n">3</div><div class="l">Phỏng vấn hôm nay</div></div><div class="stat"><div class="n">22</div><div class="l">Học viên phụ trách</div></div></div>
<div class="sec"><span class="h2">Lịch hôm nay</span><a>Xem tất cả</a></div>
<div class="card flat">${li('clock', '', '09:30 · Phỏng vấn Lê Văn An', 'Khung giờ đã xác nhận', pill('Sắp tới', 'b'))}${li('clock', '', '14:00 · Phỏng vấn Phạm Thị Bình', 'Chờ ứng viên xác nhận', pill('Chờ', 'wa'))}${li('calendar', '', '16:30 · Họp nhóm Khóa 12', 'Phòng họp A', pill('Họp', 'n'))}</div>
<div class="sec"><span class="h2">Lối tắt</span></div>
<div class="grid2" style="grid-template-columns:repeat(4,1fr);gap:8px">${shortcut('brief', 'Ứng viên')}${shortcut('book', 'Đào tạo')}${shortcut('plus', 'Lịch họp')}${shortcut('spark', 'Hoàng Anh AI')}</div>` });

const mem = (n, r, d, act = true, hid = false) => `<div class="li">${av(n, 42)}<div class="sp"><div class="nm">${n}</div><div style="margin:3px 0 2px">${badge(r, true)}</div><div class="xs">${d}${hid ? ' · SĐT bị ẩn' : ''}</div></div>${act ? `<div class="ico">${ic('chat', 18)}</div><div class="ico ${hid ? '' : 'ok'}" style="${hid ? 'opacity:.4' : ''}">${ic('phone', 18)}</div>` : ''}</div>`;
S['05-danh-ba'] = phone({ title: 'Danh bạ', sub: '128 thành viên', tab: 'Danh bạ', body: `
<div class="search">${ic('search', 18)}Tìm theo tên hoặc số điện thoại</div>
<div class="row"><div class="sel"><span>Vai trò: Tất cả</span>${ic('down', 16)}</div><div class="sel"><span>Phòng/đội: Tất cả</span>${ic('down', 16)}</div></div>
<div class="card flat" style="flex:1">${mem('Nguyễn Văn Hưng', 'gd', 'Điều hành khối')}${mem('Trần Thị Mai', 'tl', 'Hỗ trợ tuyển dụng')}${mem('Lê Quốc Việt', 'tp', 'Phòng Kinh doanh 2')}${mem('Phạm Thanh Hà', 'pp', 'Phòng Kinh doanh 2', true, true)}${mem('Đỗ Minh Khôi', 'dt', 'Phòng KD 2 – Đội 1')}${mem('Vũ Ngọc Lan', 'cv', 'Phòng KD 2 – Đội 1')}</div>` });

S['06-ho-so-thanh-vien'] = phone({ title: 'Hồ sơ thành viên', back: true, right: `<div class="btn-i">${ic('more', 20)}</div>`, tab: 'Danh bạ', body: `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;padding-top:2px">${av('Lê Quốc Việt', 76)}<div style="font-size:19px;font-weight:800">Lê Quốc Việt</div>${badge('tp')}<div class="muted">Phòng Kinh doanh 2</div></div>
<div class="row"><div class="btn sm sp">${ic('chat', 17)}Nhắn tin</div><div class="btn sm sp sec2">${ic('phone', 17)}Gọi điện</div><div class="btn sm sp sec2">${ic('link', 17)}Facebook</div></div>
<div class="card flat">
<div class="li"><span class="muted sp">Ngày sinh</span><span class="nm">15/03/1990</span></div>
<div class="li"><span class="muted sp">Tham gia khối</span><span class="nm">03/2022 (4 năm 7 tháng)</span></div>
<div class="li"><span class="muted sp">Số điện thoại</span><span class="nm">0900 000 003</span></div>
<div class="li"><span class="muted sp">Facebook</span><span class="nm" style="color:var(--blue)">facebook.com/mau.03</span></div>
<div class="li"><span class="muted sp">Phòng/đội</span><span class="nm">Phòng Kinh doanh 2</span></div></div>
<div class="note">${ic('shield', 16)}<span>Bạn có quyền <b>members.profile.edit</b> trong phạm vi Phòng Kinh doanh 2.</span></div>
<div class="row"><div class="btn sp">${ic('user', 18)}Chỉnh sửa hồ sơ</div><div class="btn sec2 sp">Lịch sử thay đổi</div></div>` });

const conv = (ic1, t, tag, last, time, n, tcls) => `<div class="li"><div class="ico ${tcls || ''}" style="width:44px;height:44px;border-radius:50%">${ic(ic1, 21)}</div><div class="sp"><div class="row"><span class="nm sp">${t}</span><span class="xs">${time}</span></div><div class="row" style="margin-top:2px"><span class="muted sp" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${last}</span>${n ? `<span class="pill" style="background:var(--navy2);color:#fff;padding:1px 7px">${n}</span>` : ''}</div><div style="margin-top:4px">${pill(tag, 'b')}</div></div></div>`;
S['07-chat-danh-sach'] = phone({ title: 'Hoàng Anh Connect', sub: 'Chat nội bộ', tab: 'Chat', right: `<div class="btn-i">${ic('plus', 20)}</div>`, body: `
<div class="search">${ic('search', 18)}Tìm tin nhắn hoặc cuộc trò chuyện</div>
<div class="seg"><div class="on">Tất cả</div><div>Chưa đọc (7)</div><div>Đã ghim</div></div>
<div class="card flat" style="flex:1">${conv('users', 'Nhóm hoạt động khối', 'Nhóm hoạt động khối', 'Trần Thị Mai: Nhắc lịch họp ngày 25/10', '09:20', 5)}${conv('book', 'Học viên khóa 12', 'Nhóm Học viên', 'Bạn có tin nhắn mới', '08:47', 2, 'ok')}${conv('user', 'Ứng viên Lê Văn An', 'Chat 1:1 Ứng viên – Trợ lý', 'Em xin phép đổi giờ phỏng vấn ạ', 'Hôm qua', 0, 'wa')}${conv('users', 'Phòng Kinh doanh 2', 'Nhóm hoạt động khối', 'Đỗ Minh Khôi: Đã gửi báo cáo tuần', 'Hôm qua', 0)}</div>` });

S['08-chat-khung-chat'] = phone({ title: 'Nhóm hoạt động khối', sub: '128 thành viên', back: true, tab: 'Chat', tabs: false, right: `<div class="btn-i">${ic('search', 19)}</div><div class="btn-i">${ic('more', 20)}</div>`, body: `
<div class="note" style="background:#fff">${ic('pinfill', 16, 'var(--navy2)')}<span><b>Đã ghim:</b> Họp kế hoạch 25/10 lúc 09:00 – bình chọn đến 24/10</span></div>
<div style="display:flex;flex-direction:column;gap:10px;flex:1;overflow:hidden">
 <div class="xs" style="text-align:center">Hôm nay</div>
 <div class="row" style="align-items:flex-start">${av('Trần Thị Mai', 32)}<div style="max-width:78%"><div class="row" style="gap:6px;margin-bottom:3px"><span class="nm" style="font-size:12.5px">Trần Thị Mai</span>${badge('tl', true)}</div><div class="bubble in">Nhắc cả nhóm: bình chọn họp kế hoạch tháng 11 khóa lúc 09:00 ngày 24/10.</div></div></div>
 <div class="row" style="align-items:flex-start">${av('Đỗ Minh Khôi', 32)}<div style="max-width:78%"><div class="row" style="gap:6px;margin-bottom:3px"><span class="nm" style="font-size:12.5px">Đỗ Minh Khôi</span>${badge('dt', true)}</div><div class="bubble in"><div style="border-left:3px solid var(--blue);padding-left:8px;margin-bottom:5px;font-size:12px;color:var(--t2)">Trần Thị Mai: Nhắc cả nhóm…</div>Đội 1 đã bình chọn tham gia.</div><div class="xs" style="margin-top:3px">👍 12 &nbsp; ✅ 5</div></div></div>
 <div style="margin-left:auto;max-width:78%"><div class="bubble out">Cảm ơn cả nhóm, mình đã ghi nhận.</div><div class="xs" style="text-align:right;margin-top:3px">09:24 · Đã đọc</div></div>
 <div class="row" style="align-items:flex-start">${av('Lê Quốc Việt', 32)}<div style="max-width:78%"><div class="bubble in" style="display:flex;gap:10px;align-items:center"><div class="ico">${ic('file', 19)}</div><div><div class="nm" style="font-size:13px">Bao-cao-tuan-42.pdf</div><div class="xs">1,2 MB · Tệp riêng tư</div></div></div></div></div>
</div>
<div class="row" style="padding:8px 0 10px"><div class="ico" style="background:transparent">${ic('clip', 22, '#4B5A6E')}</div><div class="inp sp" style="border-radius:22px;height:42px;color:var(--t3)">Nhập tin nhắn…</div><div class="ico" style="background:var(--navy);color:#fff;border-radius:50%">${ic('send', 18)}</div></div>` });

S['09-cong-dang-ky-ung-vien'] = phone({ title: 'Đăng ký ứng tuyển', sub: 'Bước 1/3 · Thông tin cá nhân', back: true, tabs: false, body: `
<div class="bar-bg"><div class="bar-fg" style="width:33%"></div></div>
<div class="field"><label>Họ và tên *</label><div class="inp f">Hoàng Văn Mẫu</div></div>
<div class="row"><div class="field sp"><label>Ngày sinh *</label><div class="inp">12/05/1999${'<span class="sp"></span>'}${ic('calendar', 17, '#7A889B')}</div></div><div class="field sp"><label>Số điện thoại *</label><div class="inp">0900 000 010</div></div></div>
<div class="field"><label>Email <span style="font-weight:400">(không bắt buộc)</span></label><div class="inp ph">ten@example.com</div></div>
<div class="field"><label>Số CCCD *</label><div class="inp">079•••••••12</div><div class="help">Được bảo vệ, chỉ người có quyền mới xem được.</div></div>
<div class="field"><label>Ảnh chân dung chính diện, rõ nét *</label><div class="inp" style="height:62px;border-style:dashed;justify-content:center;color:var(--navy2);font-weight:600">${ic('camera', 20)}Chụp hoặc chọn ảnh</div></div>
<div style="margin-top:auto;padding-bottom:14px" class="row"><div class="btn sec2" style="width:110px">Quay lại</div><div class="btn sp">Tiếp tục</div></div>` });

S['10-ung-vien-theo-doi-ho-so'] = phone({ title: 'Hồ sơ của tôi', sub: 'Ứng viên', tabs: false, body: `
<div class="card"><div class="row"><span class="h2 sp">Trạng thái hồ sơ</span>${pill('Chờ phỏng vấn', 'b')}</div>
 <div class="row" style="margin-top:10px">${ic('clock', 18, 'var(--wa)')}<span class="sp b" style="color:var(--wa)">Còn 35 ngày để hoàn tất</span><span class="xs">Hạn: 24/11/2026</span></div>
 <div class="bar-bg" style="margin-top:8px"><div class="bar-fg" style="width:22%;background:var(--wa)"></div></div></div>
<div class="card" style="display:flex;flex-direction:column;gap:11px">
 <div class="row"><span class="tl-dot ok">${ic('check', 13, '#fff', 3)}</span><span class="sp nm">Đăng ký hồ sơ</span><span class="xs">10/10</span></div>
 <div class="row"><span class="tl-dot ok">${ic('check', 13, '#fff', 3)}</span><span class="sp nm">Xét hồ sơ</span><span class="xs">14/10</span></div>
 <div class="row"><span class="tl-dot cur"></span><span class="sp nm">Phỏng vấn – chọn khung giờ</span><span class="xs">Đang chờ</span></div>
 <div class="row"><span class="tl-dot"></span><span class="sp nm" style="color:var(--t3)">Kết quả</span></div></div>
<div class="row"><span class="h2 sp">Khung giờ còn trống · 22/10</span></div>
<div class="grid2" style="grid-template-columns:repeat(4,1fr);gap:8px"><div class="sel" style="justify-content:center;border:2px solid var(--navy2);font-weight:700;color:var(--navy)">09:00</div><div class="sel" style="justify-content:center">10:30</div><div class="sel" style="justify-content:center;background:#EEF1F6;color:#9AA7BA;text-decoration:line-through">14:00</div><div class="sel" style="justify-content:center">15:30</div></div>
<div class="row"><span class="xs">Người phụ trách:</span><span class="nm" style="font-size:13px">Trợ lý Mẫu</span>${badge('tl', true)}</div>
<div class="note wa">${ic('alert', 16)}<span>Thu nhập tham khảo của nghề môi giới: nguồn tài liệu nội bộ, cập nhật 01/10/2026, phụ thuộc điều kiện từng người; không phải cam kết thu nhập.</span></div>
<div style="margin-top:auto;padding-bottom:14px;display:flex;flex-direction:column;gap:8px"><div class="btn">Xác nhận lịch 09:00 – 22/10</div><div class="btn sec2">${ic('chat', 18)}Chat với Trợ lý</div></div>` });

const cand = (n, st, stk, reg, left, pct, col, extra = '') => `<div class="card" style="padding:9px 13px"><div class="row">${av(n, 34)}<div class="sp"><div class="nm">${n}</div><div class="xs">Đăng ký ${reg}</div></div>${pill(st, stk)}</div>
<div class="row" style="margin-top:8px"><span class="sp b" style="font-size:12.5px;color:${col}">${left}</span></div><div class="bar-bg" style="margin-top:4px"><div class="bar-fg" style="width:${pct}%;background:${col}"></div></div>${extra || `<div class="row" style="margin-top:7px"><div class="btn sm sec2 sp" style="padding:0 6px;white-space:nowrap">${ic('chat', 15)}Chat</div><div class="btn sm sec2 sp" style="padding:0 6px;white-space:nowrap">${ic('calendar', 15)}Đặt lịch</div><div class="btn sm" style="flex:1.5;white-space:nowrap;padding:0 8px">Chuyển Học viên</div></div>`}</div>`;
S['11-quan-ly-ung-vien-tro-ly'] = phone({ title: 'Quản lý ứng viên', sub: 'Trợ lý Mẫu · 24 ứng viên', right: `<div class="btn-i">${ic('filter', 19)}</div>`, tab: 'Thêm', body: `
<div class="seg"><div class="on">Tất cả (24)</div><div>Sắp hết hạn (4)</div><div>Phỏng vấn (3)</div></div>
${cand('Lê Văn An', 'Chờ phỏng vấn', 'b', '10/10/2026', 'Còn 35 ngày', 22, 'var(--ok)')}
${cand('Phạm Thị Bình', 'Chờ xác nhận', 'wa', '11/09/2026', 'Còn 6 ngày · hạn 26/10/2026', 87, 'var(--wa)')}
${cand('Võ Hoàng Cường', 'Quá hạn sắp tới', 'er', '07/09/2026', 'Còn 2 ngày · hạn 22/10/2026', 96, 'var(--er)')}
${cand('Đặng Thu Dung', 'Đã hết hạn', 'n', '01/09/2026', 'Hết hạn 16/10 · đã thu hồi đăng nhập/chat', 100, '#7A889B', `<div class="xs" style="margin-top:5px">Hồ sơ cần thiết vẫn được lưu.</div>`)}` });
