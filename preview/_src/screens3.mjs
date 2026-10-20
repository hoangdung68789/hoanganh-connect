import { ic, badge, pill, av, phone } from './lib.mjs';
import { sky, moon, clouds, spark, ring, donut, wave, orb, radar } from './art.mjs';
import { S } from './screens2.mjs';

const li = (iconK, cls, t, s, right = '') => `<div class="li"><div class="ico ${cls}">${ic(iconK, 19)}</div><div class="sp"><div class="nm">${t}</div><div class="xs">${s}</div></div>${right || ic('chev', 18, '#9AA7BA')}</div>`;
const st = (i, c, n, l, tr, trk, pts, cnt) => `<div class="stat"><div class="row" style="gap:8px"><div class="chip" style="--c:${c}">${ic(i, 17)}</div><div class="n" style="font-size:21px"${cnt ? ` data-count="${cnt}"` : ''}>${n}</div><span class="sp"></span><span class="trend ${trk}">${tr}</span></div><div class="l" style="margin-top:6px">${l}</div>${spark(pts, c, 118, 22)}</div>`;
const sc = (i, c, t) => `<div class="card" style="display:flex;flex-direction:column;align-items:center;gap:7px;padding:11px 4px;text-align:center"><div class="chip" style="--c:${c}">${ic(i, 19)}</div><div class="nm" style="white-space:normal;font-size:11.5px;line-height:1.25">${t}</div></div>`;

// ---------- 01 Đăng nhập ----------
S['01-dang-nhap'] = phone({ tabs: false, hero: `<div style="display:flex;flex-direction:column;align-items:center;gap:10px;padding-top:6px"><div style="width:62px;height:62px;border-radius:18px;background:#fff;color:#0B2545;display:grid;place-items:center;font-weight:800;font-size:22px;box-shadow:0 18px 30px -12px rgba(0,0,0,.5)">HA</div><div style="font-size:24px;font-weight:800;letter-spacing:-.01em">Hoàng Anh Connect</div></div>`, heroArt: 118, seed: 5, body: `
<div class="card" style="margin-top:-6px;display:flex;flex-direction:column;gap:13px;padding:16px">
 <div class="field"><label>Tên đăng nhập</label><div class="inp f">${ic('user', 18, '#2563EB')}thanhvien.mau01</div></div>
 <div class="field"><label>Mật khẩu</label><div class="inp">${ic('lock', 18, '#7A889B')}<span class="sp">••••••••••</span>${ic('eye', 19, '#7A889B')}</div></div>
 <div class="row"><span class="sp"></span><span style="color:var(--blue);font-weight:600;font-size:13.5px">Quên mật khẩu?</span></div>
 <div class="btn">Đăng nhập</div></div>
<div class="note">${ic('lock', 16)}<span>Tài khoản thành viên do người có thẩm quyền cấp. Ứng dụng không hỗ trợ đăng nhập bằng mạng xã hội.</span></div>
<div style="margin-top:auto;padding-bottom:14px;display:flex;flex-direction:column;gap:9px"><div class="muted" style="text-align:center">Bạn là ứng viên chưa có tài khoản thành viên?</div><div class="btn sec2">Đăng ký ứng tuyển</div></div>` });

// ---------- 02 Chờ duyệt thiết bị ----------
S['02-cho-duyet-thiet-bi'] = phone({ title: 'Xác minh thiết bị', tabs: false, seed: 9, body: `
<div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding-top:8px;text-align:center">${radar(ic('device', 34, '#8A4B08', 1.8), 128)}
 <div style="font-size:19px;font-weight:800;color:var(--navy);margin-top:12px">Thiết bị mới đang chờ duyệt</div>
 <div class="muted" style="max-width:320px">Mỗi tài khoản chỉ dùng được trên một thiết bị. Yêu cầu của bạn đã được gửi đến Admin để phê duyệt.</div></div>
<div class="card flat">
 <div class="li"><span class="muted sp">Thiết bị</span><span class="nm">Điện thoại mẫu (Android)</span></div>
 <div class="li"><span class="muted sp">Thời gian gửi</span><span class="nm">20/10/2026 09:12</span></div>
 <div class="li"><span class="muted sp">Mã yêu cầu</span><span class="nm">YC-0001</span></div>
 <div class="li"><span class="muted sp">Trạng thái</span>${pill(ic('clock', 12) + 'Chờ duyệt', 'wa')}</div></div>
<div class="note">${ic('alert', 16)}<span>Nếu yêu cầu bị từ chối, hãy liên hệ Admin qua kênh nội bộ để được hỗ trợ.</span></div>
<div style="margin-top:auto;padding-bottom:14px;display:flex;flex-direction:column;gap:9px"><div class="btn">Kiểm tra lại trạng thái</div><div class="row"><div class="btn sec2 sp">Liên hệ Admin</div><div class="btn dng sp">${ic('logout', 18)}Đăng xuất</div></div></div>` });

// ---------- 03 Trang chủ Giám đốc ----------
S['03-trang-chu-giam-doc'] = phone({ hero: `<div class="row" style="gap:12px">${av('Giám đốc Mẫu', 50, 'gd', true)}<div class="sp"><div style="font-size:12.5px;opacity:.8">Thứ Ba, 20/10/2026</div><h1>Xin chào, Giám đốc Mẫu</h1><div style="margin-top:6px">${badge('gd')}</div></div><div class="btn-i" style="width:38px;height:38px;border-radius:12px;display:grid;place-items:center">${ic('search', 19)}</div></div>`, heroArt: 70, seed: 14, body: `
<div class="grid2" style="margin-top:-4px;position:relative;z-index:3">${st('users', '#2563EB', '128', 'Thành viên', '+6', 'up', [90, 96, 101, 108, 112, 120, 128], '128')}${st('brief', '#0D9488', '24', 'Ứng viên đang theo dõi', '+3', 'up', [14, 15, 19, 18, 21, 22, 24], '24')}
${st('calendar', '#7C3AED', '5', 'Lịch họp tuần này', '2 mới', 'wa', [2, 3, 3, 4, 4, 5, 5], '5')}${st('wallet', '#D97706', '86,4 tr', 'Chi phí tháng 10 (₫)', '▲ 9,2%', 'wa', [60, 66, 63, 72, 79, 82, 86.4])}</div>
<div class="sec"><span class="h2">Cần xử lý</span><a>Xem tất cả</a></div>
<div class="card flat">${li('device', 'wa', '3 yêu cầu thiết bị mới', 'Chờ Admin phê duyệt', pill('3', 'wa'))}${li('receipt', '', '2 khoản chi phí chờ duyệt', 'Tổng 14,2 triệu ₫', pill('2', 'b'))}${li('calendar', 'er', '1 bình chọn sắp đến hạn', 'Họp kế hoạch tháng 11 – còn 3 ngày', pill('3 ngày', 'er'))}</div>
<div class="sec"><span class="h2">Lối tắt</span></div>
<div class="grid2" style="grid-template-columns:repeat(4,1fr);gap:8px">${sc('key', '#2563EB', 'Phân quyền')}${sc('mic2', '#7C3AED', 'Bản ghi âm')}${sc('wallet', '#D97706', 'Chi phí')}${sc('spark', '#0D9488', 'Hoàng Anh AI')}</div>` });

// ---------- 04 Trang chủ Trợ lý ----------
S['04-trang-chu-tro-ly'] = phone({ hero: `<div class="row" style="gap:12px">${av('Trợ lý Mẫu', 50, 'tl', true)}<div class="sp"><div style="font-size:12.5px;opacity:.8">Thứ Ba, 20/10/2026</div><h1>Xin chào, Trợ lý Mẫu</h1><div style="margin-top:6px">${badge('tl')}</div></div><div class="btn-i" style="width:38px;height:38px;border-radius:12px;display:grid;place-items:center">${ic('search', 19)}</div></div>`, heroArt: 78, seed: 21, body: `
<div class="grid2" style="margin-top:-4px;position:relative;z-index:3">${st('brief', '#2563EB', '18', 'Ứng viên được phân công', '+2', 'up', [12, 13, 15, 14, 16, 17, 18], '18')}${st('alert', '#DC2626', '4', 'Sắp hết hạn 45 ngày', '≤ 7 ngày', 'dn', [1, 1, 2, 2, 3, 3, 4], '4')}
${st('clock', '#0D9488', '3', 'Phỏng vấn hôm nay', '2 sắp tới', 'up', [1, 2, 2, 3, 2, 3, 3], '3')}${st('book', '#7C3AED', '22', 'Học viên phụ trách', '+4', 'up', [15, 16, 18, 18, 20, 21, 22], '22')}</div>
<div class="sec"><span class="h2">Lịch hôm nay</span><a>Xem tất cả</a></div>
<div class="card flat tl-line" style="padding:6px 14px 6px 34px"><div style="--c:#2563EB;padding:7px 0"><div class="row"><span class="nm sp">09:30 · Phỏng vấn Lê Văn An</span>${pill('Sắp tới', 'b')}</div><div class="xs">Khung giờ đã xác nhận</div></div><div style="--c:#D97706;padding:7px 0"><div class="row"><span class="nm sp">14:00 · Phỏng vấn Phạm Thị Bình</span>${pill('Chờ', 'wa')}</div><div class="xs">Chờ ứng viên xác nhận</div></div><div style="--c:#7C3AED;padding:7px 0"><div class="row"><span class="nm sp">16:30 · Họp nhóm Khóa 12</span>${pill('Họp', 'n')}</div><div class="xs">Phòng họp A</div></div></div>
<div class="sec"><span class="h2">Lối tắt</span></div>
<div class="grid2" style="grid-template-columns:repeat(4,1fr);gap:8px">${sc('brief', '#2563EB', 'Ứng viên')}${sc('book', '#7C3AED', 'Đào tạo')}${sc('plus', '#D97706', 'Lịch họp')}${sc('spark', '#0D9488', 'Hoàng Anh AI')}</div>` });

// ---------- 06 Hồ sơ thành viên ----------
S['06-ho-so-thanh-vien'] = phone({ title: 'Hồ sơ thành viên', back: true, right: `<div class="btn-i">${ic('more', 20)}</div>`, tab: 'Danh bạ', seed: 31, body: `
<div class="card" style="margin-top:-4px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:5px;padding:14px">${av('Lê Quốc Việt', 76, 'tp', true)}<div style="font-size:19px;font-weight:800">Lê Quốc Việt</div>${badge('tp')}<div class="muted">Phòng Kinh doanh 2</div>
 <div class="row" style="width:100%;margin-top:6px;gap:8px"><div class="stat" style="box-shadow:none;background:var(--ice);border:0;text-align:center"><div class="n" style="font-size:18px">4,6</div><div class="l">Năm tham gia</div></div><div class="stat" style="box-shadow:none;background:var(--ice);border:0;text-align:center"><div class="n" style="font-size:18px">14</div><div class="l">Thành viên đội</div></div></div></div>
<div class="row"><div class="btn sm sp">${ic('chat', 17)}Nhắn tin</div><div class="btn sm sp sec2">${ic('phone', 17)}Gọi điện</div><div class="btn sm sp sec2">${ic('link', 17)}Facebook</div></div>
<div class="card flat">
<div class="li" style="padding:9px 14px"><span class="muted sp">Ngày sinh</span><span class="nm">15/03/1990</span></div>
<div class="li" style="padding:9px 14px"><span class="muted sp">Tham gia khối</span><span class="nm">03/2022 (4 năm 7 tháng)</span></div>
<div class="li" style="padding:9px 14px"><span class="muted sp">Số điện thoại</span><span class="nm">0900 000 003</span></div>
<div class="li" style="padding:9px 14px"><span class="muted sp">Facebook</span><span class="nm" style="color:var(--blue)">facebook.com/mau.03</span></div></div>
<div class="note">${ic('shield', 16)}<span>Bạn có quyền <b>members.profile.edit</b> trong phạm vi Phòng Kinh doanh 2.</span></div>
<div class="row"><div class="btn sp">${ic('user', 18)}Chỉnh sửa hồ sơ</div><div class="btn sec2 sp">Lịch sử thay đổi</div></div>` });

// ---------- 10 Ứng viên theo dõi hồ sơ ----------
S['10-ung-vien-theo-doi-ho-so'] = phone({ title: 'Hồ sơ của tôi', sub: 'Ứng viên', tabs: false, seed: 41, body: `
<div class="card row" style="gap:14px">${ring(78, 92, 9, '#D97706', '<div><div style="font-size:24px;font-weight:800;color:var(--navy);line-height:1">35</div><div class="xs">ngày</div></div>')}<div class="sp"><div class="row"><span class="h2 sp">Trạng thái hồ sơ</span></div><div style="margin:4px 0 6px">${pill('Chờ phỏng vấn', 'b')}</div><div class="b" style="color:var(--wa);font-size:13px">Còn 35 ngày để hoàn tất</div><div class="xs">Hạn: 24/11/2026</div></div></div>
<div class="card tl-line" style="padding:12px 14px 12px 34px;display:flex;flex-direction:column;gap:10px">
 <div style="--c:#15803D" class="row"><span class="nm sp">Đăng ký hồ sơ</span><span class="xs">10/10</span></div>
 <div style="--c:#15803D" class="row"><span class="nm sp">Xét hồ sơ</span><span class="xs">14/10</span></div>
 <div style="--c:#2563EB" class="row"><span class="nm sp">Phỏng vấn – chọn khung giờ</span><span class="xs">Đang chờ</span></div>
 <div style="--c:#C3CCDA" class="row"><span class="nm sp" style="color:var(--t3)">Kết quả</span></div></div>
<div class="row"><span class="h2 sp">Khung giờ còn trống · 22/10</span></div>
<div class="grid2" style="grid-template-columns:repeat(4,1fr);gap:8px"><div class="sel" style="justify-content:center;border:2px solid var(--navy2);font-weight:700;color:var(--navy);background:var(--ice)">09:00</div><div class="sel" style="justify-content:center">10:30</div><div class="sel" style="justify-content:center;background:#EEF1F6;color:#9AA7BA;text-decoration:line-through">14:00</div><div class="sel" style="justify-content:center">15:30</div></div>
<div class="row"><span class="xs">Người phụ trách:</span><span class="nm" style="font-size:13px">Trợ lý Mẫu</span>${badge('tl', true)}</div>
<div class="note wa">${ic('alert', 16)}<span>Thu nhập tham khảo của nghề môi giới: nguồn tài liệu nội bộ, cập nhật 01/10/2026, phụ thuộc điều kiện từng người; không phải cam kết thu nhập.</span></div>
<div style="margin-top:auto;padding-bottom:12px;display:flex;flex-direction:column;gap:8px"><div class="btn">Xác nhận lịch 09:00 – 22/10</div><div class="btn sec2">${ic('chat', 18)}Chat với Trợ lý</div></div>` });

// ---------- 11 Quản lý ứng viên ----------
const cand = (n, stt, stk, reg, left, pct, col, days, extra) => `<div class="card" style="padding:9px 12px"><div class="row" style="gap:11px">${ring(pct, 52, 6, col, `<span style="font-size:13px;font-weight:800;color:${col}">${days}</span>`)}<div class="sp"><div class="row"><span class="nm sp">${n}</span>${pill(stt, stk)}</div><div class="xs">Đăng ký ${reg}</div><div class="b" style="font-size:12px;color:${col};margin-top:1px">${left}</div></div></div>${extra || `<div class="row" style="margin-top:8px"><div class="btn sm sec2 sp" style="padding:0 6px;white-space:nowrap">${ic('chat', 15)}Chat</div><div class="btn sm sec2 sp" style="padding:0 6px;white-space:nowrap">${ic('calendar', 15)}Đặt lịch</div><div class="btn sm" style="flex:1.5;white-space:nowrap;padding:0 8px">Chuyển Học viên</div></div>`}</div>`;
S['11-quan-ly-ung-vien-tro-ly'] = phone({ title: 'Quản lý ứng viên', sub: 'Trợ lý Mẫu · 24 ứng viên', right: `<div class="btn-i">${ic('filter', 19)}</div>`, tab: 'Thêm', seed: 51, body: `
<div class="seg"><div class="on">Tất cả (24)</div><div>Sắp hết hạn (4)</div><div>Phỏng vấn (3)</div></div>
${cand('Lê Văn An', 'Chờ phỏng vấn', 'b', '10/10/2026', 'Còn 35 ngày · hạn 24/11', 22, '#15803D', '35')}
${cand('Phạm Thị Bình', 'Chờ xác nhận', 'wa', '11/09/2026', 'Còn 6 ngày · hạn 26/10/2026', 87, '#B45309', '6')}
${cand('Võ Hoàng Cường', 'Quá hạn sắp tới', 'er', '07/09/2026', 'Còn 2 ngày · hạn 22/10/2026', 96, '#B91C1C', '2')}
${cand('Đặng Thu Dung', 'Đã hết hạn', 'n', '01/09/2026', 'Hết hạn 16/10 · đã thu hồi đăng nhập/chat', 100, '#7A889B', '0', `<div class="xs" style="margin-top:5px">Hồ sơ cần thiết vẫn được lưu.</div>`)}` });


const leg = (c, t, v) => `<div class="row" style="gap:7px"><i style="width:9px;height:9px;border-radius:3px;background:${c};flex:none"></i><span class="sp" style="font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${t}</span><b style="font-size:12px">${v}</b></div>`;

// ---------- 12 Đào tạo ----------
const stu = (n, k, stt, sk, pct, col) => `<div class="li" style="padding:8px 14px">${ring(pct, 40, 5, col, `<span style="font-size:10px;font-weight:800">${pct}</span>`)}<div class="sp"><div class="row"><span class="nm sp">${n}</span>${pill(stt, sk)}</div><div class="xs">Khóa 12 · Đội học tập ${k}</div></div></div>`;
S['12-dao-tao-hoc-vien'] = phone({ title: 'Đào tạo', sub: 'Học viên & tiến độ', tab: 'Thêm', right: `<div class="btn-i">${ic('plus', 20)}</div>`, seed: 61, body: `
<div class="sel" style="flex:none"><span>Khóa 12 · Đợt 10/2026</span>${ic('down', 16)}</div>
<div class="card row" style="gap:14px">${donut([{ v: 6, c: '#15803D' }, { v: 12, c: '#2563EB' }, { v: 3, c: '#DC2626' }, { v: 1, c: '#B8C4D8' }], 104, 13, '<div><div style="font-size:24px;font-weight:800;color:var(--navy);line-height:1">22</div><div class="xs">học viên</div></div>')}<div class="sp" style="display:flex;flex-direction:column;gap:7px">${leg('#15803D', 'Hoàn thành', 6)}${leg('#2563EB', 'Đang học', 12)}${leg('#DC2626', 'Quá hạn', 3)}${leg('#B8C4D8', 'Chưa bắt đầu', 1)}</div></div>
<div class="sec"><span class="h2">Học viên</span><a>Lọc</a></div>
<div class="card flat">${stu('Ngô Bảo Châu', 'A', 'Hoàn thành', 'ok', 100, '#15803D')}${stu('Bùi Anh Tuấn', 'A', 'Đang học', 'b', 64, '#2563EB')}${stu('Hồ Thị Lệ', 'B', 'Quá hạn', 'er', 38, '#DC2626')}</div>
<div class="sec"><span class="h2">Cần xử lý</span></div>
<div class="card flat">${li('book', '', 'Bài tập 3 – Quy trình tư vấn', 'Hạn 22/10/2026 · 14 chưa nộp', pill('2 ngày', 'wa'))}${li('check', 'ok', '2 hồ sơ chờ lên Chuyên viên', 'Cần xác nhận kết quả đào tạo', pill('Duyệt', 'b'))}</div>` });

// ---------- 13 Lịch họp & bình chọn ----------
S['13-lich-hop-binh-chon'] = phone({ title: 'Lịch họp & bình chọn', tab: 'Thêm', right: `<div class="btn-i">${ic('plus', 20)}</div>`, seed: 71, body: `
<div class="seg"><div>Lịch họp</div><div class="on">Bình chọn</div><div>Thống kê</div></div>
<div class="card"><div class="row"><span class="h2 sp">Họp kế hoạch tháng 11</span>${pill('Đang mở', 'ok')}</div>
 <div class="row" style="margin-top:4px;gap:6px">${ic('calendar', 15, '#4B5A6E')}<span class="muted">25/10/2026 · 09:00 · Phòng họp A</span></div>
 <div class="note wa" style="margin-top:9px">${ic('clock', 16)}<span><b>Hạn bình chọn: 24/10/2026 09:00</b> (trước sự kiện 24 giờ). Còn 3 ngày 23 giờ. Bạn có thể đổi lựa chọn đến hạn.</span></div>
 <div class="row" style="margin-top:9px"><div class="btn sm" style="flex:.9;padding:0 6px;white-space:nowrap;font-size:12.5px">${ic('check', 14, '#fff', 2.5)}Đồng ý</div><div class="btn sm sec2" style="flex:1.2;padding:0 6px;white-space:nowrap;font-size:12.5px">Không tham gia</div><div class="btn sm sec2" style="flex:1.1;padding:0 6px;white-space:nowrap;font-size:12.5px">Chưa xác định</div></div></div>
<div class="card row" style="gap:14px">${donut([{ v: 74, c: '#15803D' }, { v: 12, c: '#DC2626' }, { v: 9, c: '#D97706' }, { v: 33, c: '#C3CCDA' }], 104, 13, '<div><div style="font-size:19px;font-weight:800;color:var(--navy);line-height:1">74,2%</div><div class="xs">phản hồi</div></div>')}<div class="sp" style="display:flex;flex-direction:column;gap:5px">${leg('#15803D', 'Đồng ý', 74)}${leg('#DC2626', 'Không tham gia', 12)}${leg('#D97706', 'Chưa xác định', 9)}${leg('#C3CCDA', 'Chưa phản hồi', 33)}<div class="xs" style="margin-top:1px">Đã mời 128 người</div></div></div>
<div class="card"><div class="row"><span class="nm sp">Tiệc cuối quý</span>${pill(ic('lock', 12) + 'Đã khóa', 'n')}</div><div class="xs" style="margin:3px 0 8px">Hạn đã qua · khóa tự động 14/10/2026 18:00</div><div class="btn sm sec2">Mở lại (cần quyền và lý do)</div></div>` });

// ---------- 14 Chi phí ----------
const CAT = [['Quảng cáo/marketing', 32.5, '#2563EB'], ['Tiệc tùng', 18.0, '#D97706'], ['Nhân sự', 15.2, '#7C3AED'], ['Tuyển dụng', 9.7, '#0D9488'], ['Vận hành văn phòng', 6.8, '#0EA5E9'], ['Đi lại/công tác', 3.2, '#EA580C'], ['Khác', 1.0, '#94A3B8']];
S['14-chi-phi-bao-cao'] = phone({ title: 'Chi phí & báo cáo', tab: 'Thêm', right: `<div class="btn-i">${ic('download', 19)}</div>`, seed: 81, body: `
<div class="row"><div class="sel"><span>Tháng 10/2026</span>${ic('down', 16)}</div><div class="sel"><span>Tất cả phòng/đội</span>${ic('down', 16)}</div></div>
<div class="card row" style="gap:12px"><div class="sp"><div class="muted">Tổng chi phí tháng 10</div><div style="font-size:24px;font-weight:800;color:var(--navy);margin:2px 0 4px" data-count="86,4" data-suf=" tr ₫">86,4 tr ₫</div>${pill('▲ 9,2% so với tháng 9', 'wa')}</div>${spark([61, 66, 63, 72, 79, 82, 86.4], '#D97706', 100, 46)}</div>
<div class="card row" style="gap:12px">${donut(CAT.map(c => ({ v: c[1], c: c[2] })), 112, 14, '<div><div style="font-size:15px;font-weight:800;color:var(--navy);line-height:1.1">7</div><div class="xs">danh mục</div></div>')}<div class="sp" style="display:flex;flex-direction:column;gap:4px">${CAT.map(c => leg(c[2], c[0], c[1].toFixed(1).replace('.', ','))).join('')}</div></div>
<div class="note wa">${ic('alert', 16)}<span><b>Gợi ý cần kiểm tra:</b> Tiệc tùng tăng 2,1 lần so với tháng 9. Chưa phải kết luận sai phạm.</span></div>
<div class="card flat">${li('receipt', 'wa', 'Quảng cáo tuần 42', 'Đội trưởng Mẫu · 8,4 triệu ₫', pill('Chờ duyệt', 'wa'))}${li('receipt', 'ok', 'Thuê địa điểm họp 25/10', 'Đã duyệt · 5,8 triệu ₫', pill('Đã duyệt', 'ok'))}</div>` });

// ---------- 15 Hoàng Anh AI ----------
const tool = (i, t, on) => `<div class="card" style="padding:9px 10px;display:flex;gap:8px;align-items:center;${on ? '' : 'background:#F4F6FA;box-shadow:none'}"><div class="chip" style="--c:${on ? '#2563EB' : '#94A3B8'};width:28px;height:28px;border-radius:9px">${ic(on ? i : 'lock', 15)}</div><div class="sp"><div class="nm" style="font-size:12.5px;white-space:normal;line-height:1.2;${on ? '' : 'color:var(--t3)'}">${t}</div><div style="font-size:10.5px;font-weight:700;color:${on ? 'var(--ok)' : 'var(--t3)'}">${on ? 'Đã bật' : 'Chưa được cấp quyền'}</div></div></div>`;
S['15-hoang-anh-ai'] = phone({ title: 'Hoàng Anh AI', sub: 'Theo quyền của bạn', tab: 'Thêm', seed: 91, body: `
<div style="padding:12px 0 6px;display:flex;flex-direction:column;align-items:center;gap:8px">${orb(66)}</div>
<div class="grid2" style="gap:8px">${tool('users', 'Tra cứu nhân sự', true)}${tool('chat', 'Tóm tắt hội thoại', true)}${tool('mail', 'Soạn thông báo', true)}${tool('wallet', 'Tổng hợp chi phí', false)}</div>
<div style="display:flex;flex-direction:column;gap:6px;flex:1;overflow:hidden">
 <div class="bubble out" style="max-width:85%">Soạn thông báo nhắc cả nhóm bình chọn họp 25/10.</div>
 <div class="bubble in" style="max-width:92%"><div style="font-size:13.5px">Bạn hãy bình chọn tham gia buổi họp kế hoạch tháng 11 (25/10, 09:00) trước 09:00 ngày 24/10 nhé.</div><div class="xs" style="margin-top:5px">Nguồn: lịch họp #LH-014</div></div>
 <div class="note wa">${ic('alert', 16)}<span><b>Bản nháp – cần bạn xác nhận trước khi gửi.</b> AI không tự gửi tin nhắn hay thay đổi dữ liệu.</span></div>
 <div class="row"><div class="btn sm sp">Gửi vào nhóm</div><div class="btn sm sp sec2">Chỉnh sửa</div></div></div>
<div class="row" style="padding:2px 0 8px"><div class="inp sp" style="border-radius:22px;height:42px;color:var(--t3)">Hỏi Hoàng Anh AI…</div><div class="ico" style="background:var(--navy);color:#fff;border-radius:50%">${ic('send', 18)}</div></div>` });

// ---------- 16 Bản ghi âm ----------
S['16-nghe-tai-ban-ghi-am'] = phone({ title: 'Bản ghi âm cuộc gọi', sub: 'Đang xem với vai trò Giám đốc', tab: 'Thêm', right: `<div class="btn-i">${ic('filter', 19)}</div>`, seed: 101, body: `
<div class="note">${ic('shield', 16)}<span>Chỉ cuộc gọi thoại trong app đã thông báo và được đồng ý ghi âm. Mọi lượt nghe/tải được ghi audit log.</span></div>
<div class="card"><div class="row"><div class="ico" style="background:#EDE9FE;color:#5B21B6">${ic('mic2', 19)}</div><div class="sp"><div class="nm">BG-0042 · Phòng KD 2</div><div class="xs">20/10/2026 08:10 · Đã đồng ý ghi âm</div></div></div>
 <div style="margin:12px 0 6px">${wave(52, .35, 4, true)}</div>
 <div class="row xs"><span class="sp">01:34</span><span>04:32</span></div>
 <div class="row" style="margin-top:10px;gap:12px;justify-content:center"><div class="ico" style="border-radius:50%">${ic('back', 18)}</div><div class="ico playbtn" style="width:50px;height:50px;border-radius:50%;background:linear-gradient(180deg,#1A4585,#0B2545);color:#fff;box-shadow:0 12px 20px -8px rgba(11,37,69,.7);cursor:pointer">${ic('play', 20, '#fff')}</div><div class="ico" style="border-radius:50%">${ic('chev', 18)}</div></div>
 <div class="row" style="margin-top:12px"><div class="btn sm sp sec2">${ic('play', 15)}Nghe bản ghi</div><div class="btn sm sp">${ic('download', 15)}Tải bản ghi</div></div></div>
<div class="card"><div class="row"><div class="ico" style="background:#EDE9FE;color:#5B21B6">${ic('mic2', 19)}</div><div class="sp"><div class="nm">BG-0041 · Phòng KD 1</div><div class="xs">19/10/2026 16:45 · 12:05</div></div></div><div style="margin:8px 0">${wave(52, 0, 9)}</div><div class="row"><div class="btn sm sp sec2">${ic('play', 15)}Nghe bản ghi</div><div class="btn sm sp">${ic('download', 15)}Tải bản ghi</div></div></div>
<div class="card" style="background:#F1F5FB;box-shadow:none"><div class="b" style="font-size:13px">Trưởng Phòng và vai trò được cấp quyền nghe</div><div class="xs" style="margin-top:3px">Chỉ thấy “Nghe bản ghi”, trong phạm vi được giao. Không có nút tải.</div></div>` });

// ---------- 18 Cài đặt ----------
S['18-cai-dat-bao-mat-thiet-bi'] = phone({ title: 'Cài đặt', tab: 'Thêm', seed: 111, body: `
<div class="card row" style="gap:12px">${av('Lê Quốc Việt', 50, 'tp', true)}<div class="sp"><div class="nm" style="font-size:15px">Lê Quốc Việt</div><div style="margin-top:3px">${badge('tp')}</div></div>${ic('chev', 18, '#9AA7BA')}</div>
<div class="sec"><span class="h2">Bảo mật & thiết bị</span></div>
<div class="card flat">${li('key', '', 'Đổi mật khẩu', 'Lần đổi gần nhất: 02/09/2026')}${li('device', 'ok', 'Điện thoại mẫu (Android)', 'Thiết bị duy nhất · từ 12/10/2026', pill('Đang dùng', 'ok'))}</div>
<div class="sec"><span class="h2">Thông báo</span></div>
<div class="card flat"><div class="li"><div class="sp"><div class="nm">Tin nhắn mới</div></div><div class="tog on"></div></div><div class="li"><div class="sp"><div class="nm">Lịch họp và deadline</div></div><div class="tog on"></div></div><div class="li"><div class="sp"><div class="nm">Ẩn nội dung trên màn hình khóa</div><div class="xs">Khuyến nghị bật</div></div><div class="tog on"></div></div></div>
<div class="sec"><span class="h2">Giao diện</span></div>
<div class="card flat"><div class="li"><div class="sp nm">Cỡ chữ</div><div class="seg" style="width:150px"><div>A</div><div class="on">A+</div><div>A++</div></div></div></div>
<div class="btn dng">${ic('logout', 18)}Đăng xuất</div>` });

// ---------- 20 Audit log ----------
const au = (t, who, act, res, k, c) => `<div style="--c:${c};padding:7px 0"><div class="row" style="align-items:flex-start;gap:8px"><div class="sp"><div class="nm" style="white-space:normal;font-size:13px">${act}</div><div class="xs">${t} · ${who}</div></div>${pill(res, k)}</div></div>`;
S['20-audit-log'] = phone({ title: 'Audit log', sub: 'Chỉ đọc · không thể sửa hoặc xóa', tab: 'Thêm', back: true, right: `<div class="btn-i">${ic('download', 19)}</div>`, seed: 121, body: `
<div class="search">${ic('search', 18)}Tìm theo tài khoản, hành động, đối tượng</div>
<div class="row"><div class="sel"><span>Loại: Tất cả</span>${ic('down', 16)}</div><div class="sel"><span>20/10/2026</span>${ic('calendar', 16)}</div></div>
<div class="card tl-line" style="flex:1;padding:8px 14px 8px 34px">
${au('09:14', 'Giám đốc Mẫu', 'Tải bản ghi BG-0042', 'Thành công', 'ok', '#15803D')}
${au('09:12', 'Hệ thống', 'Yêu cầu thiết bị mới YC-0001', 'Chờ duyệt', 'wa', '#D97706')}
${au('09:02', 'Admin Mẫu', 'Duyệt thiết bị cho tài khoản 0087', 'Thành công', 'ok', '#15803D')}
${au('08:55', 'Trưởng Phòng Mẫu', 'Tải bản ghi BG-0042', 'Bị từ chối', 'er', '#DC2626')}
${au('08:31', 'Trợ lý Mẫu', 'Sửa hồ sơ thành viên 0112 (SĐT)', 'Thành công', 'ok', '#15803D')}
${au('00:00', 'Tác vụ nền', 'Hết hạn 45 ngày: thu hồi 2 ứng viên', 'Thành công', 'ok', '#15803D')}</div>` });
export { S };
