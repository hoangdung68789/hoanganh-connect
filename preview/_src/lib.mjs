// Thư viện dựng bản xem trước tĩnh – CHỈ DÙNG CHO PREVIEW (Cổng 0), không phải mã ứng dụng.
const P = {
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6"/><path d="M16 5a3.5 3.5 0 0 1 0 7M18 14.5c2.2.6 3.5 2.6 3.5 5.5"/>',
  bell: '<path d="M6 16v-5a6 6 0 1 1 12 0v5l1.5 2h-15zM10 21h4"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="m16 16 5 5"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  wallet: '<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M16 15h2"/>',
  spark: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
  shield: '<path d="m12 3 8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  download: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
  play: '<path d="M8 5v14l11-7z"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  alert: '<path d="m12 4 9 16H3z"/><path d="M12 10v4M12 17.5v.01"/>',
  device: '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>',
  file: '<path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4"/>',
  chev: '<path d="m9 6 6 6-6 6"/>',
  back: '<path d="m15 6-6 6 6 6"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  send: '<path d="m4 12 16-8-6 16-3-7z"/>',
  clip: '<path d="m20 11-8.5 8.5a5 5 0 0 1-7-7L13 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L14 7"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  filter: '<path d="M4 5h16l-6 8v6l-4-2v-4z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-6 8-6s8 2 8 6"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
  brief: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2M3 13h18"/>',
  sliders: '<path d="M4 7h8M18 7h2M4 17h2M12 17h8"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
  logout: '<path d="M10 4H5v16h5M15 8l4 4-4 4M19 12H9"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M16 7l3 3"/>',
  flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3l-5.5 2.9 1-6.2L3 9.6l6.2-.9z"/>',
  crown: '<path d="m3 8 4.5 4L12 5l4.5 7L21 8l-2 11H5z"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  more: '<circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin: '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/>',
  chart: '<path d="M5 20v-8M12 20V5M19 20V8"/>',
  mic2: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3" fill="currentColor"/>',
  reply: '<path d="M9 8 4 13l5 5"/><path d="M4 13h10a6 6 0 0 1 6 6"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3v12H4z"/><circle cx="12" cy="13" r="3.5"/>',
  pinfill: '<path d="M9 3h6l-1 6 3 3v2H7v-2l3-3zM12 14v7"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  trend: '<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="m21 16-5-5-8 8"/>',
  pause: '<path d="M8 5v14M16 5v14"/>',
  building: '<path d="M4 21V6l8-3v18M12 9h8v12M8 9h.01M8 13h.01M8 17h.01M16 13h.01M16 17h.01"/>',
  list: '<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
};
export const ic = (n, s = 20, c = 'currentColor', sw = 1.8) =>
  `<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;

export const ROLES = {
  hv: ['Học viên', 'book'], cv: ['Chuyên viên', 'user'], dt: ['Đội trưởng', 'flag'],
  pp: ['Phó Phòng', 'shield'], tp: ['Trưởng Phòng', 'star'], gd: ['Giám đốc', 'crown'], tl: ['Trợ lý', 'link'],
};
export const badge = (k, sm = false) =>
  `<span class="rb r-${k}${sm ? ' sm' : ''}">${ic(ROLES[k][1], sm ? 11 : 13, 'currentColor', 2)}${ROLES[k][0]}</span>`;
export const pill = (t, k = 'n') => `<span class="pill p-${k}">${t}</span>`;
const RC = { hv: ['#0EA5E9', '#0369A1'], cv: ['#22A35A', '#146C3B'], dt: ['#F07A2E', '#B4501A'], pp: ['#3B63D6', '#1E3A8A'], tp: ['#8B5CF6', '#5B21B6'], gd: ['#E0A526', '#A56A06'], tl: ['#14A89B', '#0B6F66'] };
export const av = (name, s = 40, k, online = false) => {
  const w = name.split(' ');
  const i = ((w[w.length - 2]?.[0] || '') + w[w.length - 1][0]).toUpperCase();
  const c = RC[k] || ['#3F6DB8', '#13315C'];
  return `<span class="av" style="width:${s}px;height:${s}px;font-size:${Math.round(s * .36)}px;--rc:${c[0]};--rc2:${c[1]}">${i}${online ? '<i class="on-dot"></i>' : ''}</span>`;
};
export const CSS = `
:root{--navy:#0B2545;--navy2:#13315C;--blue:#1D4ED8;--blue-soft:#E8EEF9;--bg:#F4F6FA;--card:#fff;--line:#E3E8F0;--t1:#0F1B2D;--t2:#4B5A6E;--t3:#7A889B;
--ok:#15803D;--okbg:#DCFCE7;--wa:#B45309;--wabg:#FEF3C7;--er:#B91C1C;--erbg:#FEE2E2;--pe:#475569;--pebg:#E8ECF2;}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Inter','Noto Sans','DejaVu Sans',sans-serif;color:var(--t1);background:#fff;font-size:14px;line-height:1.4;-webkit-font-smoothing:antialiased}
.ic{flex:none;display:block}
.xs .ic,td .ic{display:inline-block;vertical-align:-2px}
.phone{width:390px;height:844px;background:var(--bg);display:flex;flex-direction:column;overflow:hidden;position:relative}
.status{height:44px;background:var(--navy);color:#fff;display:flex;align-items:flex-end;justify-content:space-between;padding:0 22px 6px;font-size:13px;font-weight:600}
.status.light{background:var(--bg);color:var(--t1)}
.bar{background:var(--navy);color:#fff;padding:6px 16px 14px;display:flex;align-items:center;gap:10px;min-height:54px}
.bar h1{font-size:18px;font-weight:700;flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bar .sub{font-size:12px;opacity:.8;font-weight:400;display:block;margin-top:1px}
.bar .btn-i{width:34px;height:34px;border-radius:10px;background:rgba(255,255,255,.12);display:grid;place-items:center}
.body>*{flex-shrink:0}
.body{flex:1;overflow:hidden;padding:14px 16px 0;display:flex;flex-direction:column;gap:12px;min-height:0}
.tabbar{height:62px;background:#fff;border-top:1px solid var(--line);display:flex;padding:6px 4px 0}
.tab{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;font-size:10.5px;color:var(--t3);font-weight:500;position:relative}
.tab.on{color:var(--navy);font-weight:700}
.tab .dot{position:absolute;top:-2px;right:calc(50% - 18px);min-width:16px;height:16px;border-radius:8px;background:var(--er);color:#fff;font-size:10px;font-weight:700;display:grid;place-items:center;padding:0 4px}
.foot{height:22px;background:#E9EDF4;color:var(--t2);font-size:10px;letter-spacing:.06em;font-weight:600;display:grid;place-items:center;border-top:1px solid var(--line);flex:none}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:12px 14px}
.card.flat{padding:0;overflow:hidden}
.row{display:flex;align-items:center;gap:10px}
.sp{flex:1;min-width:0}
.h2{font-size:15px;font-weight:700;color:var(--t1)}
.sec{display:flex;align-items:center;justify-content:space-between;margin-top:2px}
.sec a{font-size:12.5px;color:var(--blue);font-weight:600}
.muted{color:var(--t2);font-size:12.5px}
.xs{font-size:11.5px;color:var(--t3)}
.b{font-weight:700}
.nm{font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.av{border-radius:50%;background:var(--blue-soft);color:var(--navy2);font-weight:700;display:grid;place-items:center;flex:none;border:1px solid #D3DDF0}
.rb{display:inline-flex;align-items:center;gap:4px;border-radius:999px;padding:3px 9px 3px 7px;font-size:11.5px;font-weight:700;line-height:1.2;white-space:nowrap;border:1px solid transparent}
.rb.sm{padding:2px 7px 2px 5px;font-size:10.5px}
.r-hv{background:#E0F2FE;color:#075985;border-color:#BAE6FD}
.r-cv{background:#DCFCE7;color:#166534;border-color:#BBF7D0}
.r-dt{background:#FFEDD5;color:#9A3412;border-color:#FED7AA}
.r-pp{background:#DBEAFE;color:#1E3A8A;border-color:#BFDBFE}
.r-tp{background:#EDE9FE;color:#5B21B6;border-color:#DDD6FE}
.r-gd{background:#FEF3C7;color:#8A4B08;border-color:#F5D77A}
.r-tl{background:#CCFBF1;color:#115E59;border-color:#99F6E4}
.pill{display:inline-flex;align-items:center;gap:4px;border-radius:999px;padding:2px 9px;font-size:11.5px;font-weight:600;white-space:nowrap}
.p-ok{background:var(--okbg);color:var(--ok)}.p-wa{background:var(--wabg);color:var(--wa)}.p-er{background:var(--erbg);color:var(--er)}.p-n{background:var(--pebg);color:var(--pe)}.p-b{background:var(--blue-soft);color:var(--navy2)}
.btn{display:flex;align-items:center;justify-content:center;gap:8px;height:46px;border-radius:12px;background:var(--navy);color:#fff;font-weight:700;font-size:15px;border:1px solid var(--navy)}
.btn.sec2{background:#fff;color:var(--navy);border-color:#BCC8DB}
.btn.sm{height:36px;font-size:13px;border-radius:10px;padding:0 12px}
.btn.dis{background:#E3E8F0;color:#8995A6;border-color:#E3E8F0}
.btn.dng{background:#fff;color:var(--er);border-color:#F2B8B8}
.field label{display:block;font-size:12.5px;font-weight:600;color:var(--t2);margin-bottom:5px}
.inp{height:44px;border:1px solid #C7D1E0;border-radius:11px;background:#fff;display:flex;align-items:center;padding:0 12px;gap:8px;color:var(--t1);font-size:14.5px}
.inp.ph{color:var(--t3)}
.inp.f{border:2px solid var(--blue);padding:0 11px}
.help{font-size:11.5px;color:var(--t3);margin-top:4px}
.search{height:42px;border:1px solid var(--line);background:#fff;border-radius:12px;display:flex;align-items:center;padding:0 12px;gap:8px;color:var(--t3);font-size:14px}
.sel{height:38px;border:1px solid #C7D1E0;background:#fff;border-radius:10px;display:flex;align-items:center;justify-content:space-between;padding:0 10px;font-size:13px;color:var(--t1);flex:1;min-width:0;gap:6px}
.sel span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.seg{display:flex;background:#E4E9F1;border-radius:11px;padding:3px}
.seg div{flex:1;text-align:center;padding:7px 4px;border-radius:9px;font-size:13px;font-weight:600;color:var(--t2)}
.seg div.on{background:#fff;color:var(--navy);box-shadow:0 1px 2px rgba(11,37,69,.12)}
.stat{flex:1;background:#fff;border:1px solid var(--line);border-radius:14px;padding:11px 12px;min-width:0}
.stat .n{font-size:22px;font-weight:800;color:var(--navy);letter-spacing:-.01em;line-height:1.15}
.stat .l{font-size:12px;color:var(--t2);margin-top:2px}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.li{display:flex;align-items:center;gap:11px;padding:11px 14px;border-bottom:1px solid var(--line)}
.li:last-child{border-bottom:0}
.ico{width:36px;height:36px;border-radius:10px;background:var(--blue-soft);color:var(--navy2);display:grid;place-items:center;flex:none}
.ico.wa{background:var(--wabg);color:var(--wa)}.ico.er{background:var(--erbg);color:var(--er)}.ico.ok{background:var(--okbg);color:var(--ok)}
.bar-bg{height:7px;border-radius:4px;background:#E3E8F0;overflow:hidden}
.bar-fg{height:100%;border-radius:4px;background:var(--navy2)}
.tog{width:40px;height:24px;border-radius:12px;background:#C3CCDA;position:relative;flex:none}
.tog::after{content:'';position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#fff}
.tog.on{background:var(--navy2)}.tog.on::after{left:19px}
.bubble{max-width:78%;padding:8px 12px;border-radius:14px;font-size:14px;line-height:1.4}
.bubble.in{background:#fff;border:1px solid var(--line);border-bottom-left-radius:4px}
.bubble.out{background:var(--navy2);color:#fff;border-bottom-right-radius:4px;margin-left:auto}
.tl-dot{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;flex:none;background:#E3E8F0;color:#fff}
.tl-dot.ok{background:var(--ok)}.tl-dot.cur{background:var(--navy2);box-shadow:0 0 0 4px var(--blue-soft)}
.note{background:#F1F5FB;border:1px solid #D6E0F0;border-radius:12px;padding:9px 12px;font-size:12px;color:var(--t2);display:flex;gap:8px;align-items:flex-start}
.note.wa{background:var(--wabg);border-color:#F2DCA0;color:#7A4A06}
.note.er{background:var(--erbg);border-color:#F2B8B8;color:#8E1B1B}
/* web */
.web{width:1440px;height:900px;display:flex;flex-direction:column;background:var(--bg);overflow:hidden}
.web .wrap{flex:1;display:flex;min-height:0}
.side{width:248px;background:var(--navy);color:#cfd9ea;padding:20px 14px;display:flex;flex-direction:column;gap:4px;flex:none}
.side .logo{display:flex;align-items:center;gap:10px;color:#fff;font-weight:800;font-size:16px;white-space:nowrap;padding:2px 8px 18px}
.side .logo i{width:34px;height:34px;border-radius:9px;background:#fff;color:var(--navy);display:grid;place-items:center;font-style:normal;font-size:14px;font-weight:800}
.side .it{display:flex;align-items:center;gap:11px;padding:10px 12px;border-radius:10px;font-size:14px;font-weight:500}
.side .it.on{background:rgba(255,255,255,.14);color:#fff;font-weight:700}
.side .grp{font-size:11px;letter-spacing:.08em;color:#8DA0BF;padding:14px 12px 4px;font-weight:700}
.main{flex:1;min-width:0;display:flex;flex-direction:column}
.top{height:64px;background:#fff;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:16px;padding:0 28px;flex:none}
.cont{flex:1;padding:22px 28px;overflow:hidden;display:flex;flex-direction:column;gap:18px;min-height:0}
.wcard{background:#fff;border:1px solid var(--line);border-radius:14px;padding:16px 18px}
table{width:100%;border-collapse:collapse;font-size:13px}
th{text-align:left;font-size:11.5px;color:var(--t3);font-weight:700;letter-spacing:.03em;padding:8px 10px;border-bottom:1px solid var(--line);text-transform:uppercase}
td{padding:9px 10px;border-bottom:1px solid #EEF1F6;vertical-align:middle}
tr:last-child td{border-bottom:0}

/* ===== Nâng cấp chuyên nghiệp: chuyển động + nút bấm (tokens dùng chung) ===== */
:root{--e-out:cubic-bezier(.22,1,.36,1);--d-fast:140ms;--d-base:220ms;--d-slow:420ms;--sh1:0 1px 2px rgba(11,37,69,.05),0 10px 22px -14px rgba(11,37,69,.22);--ring:0 0 0 3px rgba(29,78,216,.35)}
.status,.bar{background:linear-gradient(135deg,#0B2545 0%,#13315C 100%)}
.status{background:#0B2545}.status.light{background:var(--bg)}
.bar{box-shadow:0 6px 16px -10px rgba(11,37,69,.6);position:relative;z-index:1}
.card,.stat{box-shadow:var(--sh1);transition:transform var(--d-base) var(--e-out),box-shadow var(--d-base) var(--e-out)}
.grid2>.card,.stat{cursor:pointer}
.grid2>.card:hover,.stat:hover{transform:translateY(-2px);box-shadow:0 2px 4px rgba(11,37,69,.06),0 16px 28px -14px rgba(11,37,69,.3)}
.grid2>.card:active,.stat:active{transform:translateY(0) scale(.98)}
.li{transition:background var(--d-fast)}
.li:hover{background:#F5F8FD}.li:active{background:#EBF1FA}
.ico{transition:transform var(--d-base) var(--e-out),background var(--d-fast)}
.li:hover .ico,.grid2>.card:hover .ico{transform:scale(1.08)}
.btn{position:relative;overflow:hidden;cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;background:linear-gradient(180deg,#1A4585 0%,#0B2545 100%);border-color:#0B2545;box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 8px 16px -8px rgba(11,37,69,.6);transition:transform var(--d-fast) var(--e-out),box-shadow var(--d-base) var(--e-out),background var(--d-base),border-color var(--d-base),color var(--d-base)}
.btn:hover{transform:translateY(-1px);box-shadow:inset 0 1px 0 rgba(255,255,255,.25),0 12px 22px -8px rgba(11,37,69,.65)}
.btn:active{transform:translateY(0) scale(.97);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 2px 6px -2px rgba(11,37,69,.6)}
.btn:focus-visible,.tab:focus-visible,.seg>div:focus-visible,.tog:focus-visible,.sel:focus-visible,.inp:focus-visible{outline:none;box-shadow:var(--ring)}
.btn.sec2{background:#fff;color:var(--navy);box-shadow:0 1px 2px rgba(11,37,69,.08)}
.btn.sec2:hover{background:#F1F5FB;border-color:var(--navy2);box-shadow:0 6px 14px -8px rgba(11,37,69,.35)}
.btn.sec2:active{background:#E6EDF8;box-shadow:none}
.btn.dng{box-shadow:0 1px 2px rgba(185,28,28,.08)}
.btn.dng:hover{background:var(--erbg);border-color:var(--er);box-shadow:0 6px 14px -8px rgba(185,28,28,.4)}
.btn.dis{box-shadow:none;cursor:not-allowed;transform:none}
.btn.loading{pointer-events:none;filter:saturate(.8)}
.btn.loading::before{content:'';width:16px;height:16px;flex:none;border-radius:50%;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;animation:spin .7s linear infinite}
.btn.sec2.loading::before{border-color:rgba(11,37,69,.2);border-top-color:var(--navy)}
.btn.done{background:linear-gradient(180deg,#1E9B55,#15803D);border-color:#15803D}
.rip{position:absolute;border-radius:50%;background:rgba(255,255,255,.38);transform:scale(0);animation:rip .6s var(--e-out);pointer-events:none}
.sec2 .rip,.dng .rip{background:rgba(11,37,69,.14)}
.sel,.inp,.search,.seg>div,.tab,.tog{transition:all var(--d-base) var(--e-out)}
.sel{cursor:pointer}.sel:hover{border-color:var(--navy2);box-shadow:0 4px 12px -8px rgba(11,37,69,.4)}
.inp:hover{border-color:#9FB0CA}
.seg>div{cursor:pointer}.seg>div:not(.on):hover{color:var(--navy);background:rgba(255,255,255,.55)}
.seg>div:active{transform:scale(.97)}
.tog{cursor:pointer}.tog::after{transition:left var(--d-base) var(--e-out),width var(--d-fast);box-shadow:0 1px 3px rgba(0,0,0,.25)}
.tog:active::after{width:22px}.tog.on:active::after{left:15px}
.tab{cursor:pointer}.tab:hover{color:var(--navy2)}.tab:active{transform:scale(.92)}
.tab.on::before{content:'';position:absolute;top:-6px;width:30px;height:3px;border-radius:0 0 4px 4px;background:var(--navy);animation:ind var(--d-base) var(--e-out)}
.tab .dot{animation:pulse 2.4s ease-in-out infinite}
.bar-fg{transform-origin:left center;animation:grow .9s var(--e-out) .3s backwards}
.body>*{animation:up var(--d-slow) var(--e-out) backwards}
.body>*:nth-child(1){animation-delay:30ms}.body>*:nth-child(2){animation-delay:80ms}.body>*:nth-child(3){animation-delay:130ms}.body>*:nth-child(4){animation-delay:180ms}.body>*:nth-child(5){animation-delay:230ms}.body>*:nth-child(6){animation-delay:280ms}.body>*:nth-child(n+7){animation-delay:330ms}
.cont>*{animation:up var(--d-slow) var(--e-out) backwards}.cont>*:nth-child(2){animation-delay:90ms}.cont>*:nth-child(3){animation-delay:180ms}
.bubble{animation:pop .35s var(--e-out) backwards}
tr{transition:background var(--d-fast)}tbody tr:hover{background:#F5F8FD}
.side .it{cursor:pointer;transition:background var(--d-fast),transform var(--d-fast) var(--e-out)}.side .it:hover{background:rgba(255,255,255,.08);transform:translateX(2px)}
/* trạng thái ép sẵn để minh họa tĩnh */
.btn.is-hover{transform:translateY(-1px);box-shadow:inset 0 1px 0 rgba(255,255,255,.25),0 12px 22px -8px rgba(11,37,69,.65)}
.btn.sec2.is-hover{background:#F1F5FB;border-color:var(--navy2)}
.btn.is-press{transform:scale(.97);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 2px 6px -2px rgba(11,37,69,.6)}
.btn.sec2.is-press{background:#E6EDF8;box-shadow:none}
.btn.is-focus{box-shadow:var(--ring)}
@keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes pop{from{opacity:0;transform:scale(.94) translateY(6px)}to{opacity:1;transform:none}}
@keyframes grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes rip{to{transform:scale(4);opacity:0}}
@keyframes ind{from{width:0;opacity:0}to{width:30px;opacity:1}}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition-duration:.01ms!important;scroll-behavior:auto!important}.btn:hover,.grid2>.card:hover,.stat:hover{transform:none}}
`;

import { CSS3, sky, clouds, moon } from './art.mjs';
const TABS = [['home', 'Trang chủ'], ['chat', 'Chat'], ['users', 'Danh bạ'], ['bell', 'Thông báo'], ['menu', 'Thêm']];
const STATUS = '<div class="status"><span>09:41</span><span>LTE ▪▪▪ 86%</span></div>';
export function phone({ title, sub, back = false, right = '', tab = 'home', body, bar = true, tabs = true, badgeN = { Chat: 5, 'Thông báo': 3 }, hero = null, heroArt = 96, seed = 11 }) {
  const t = tabs ? `<div class="tabbar">${TABS.map(([i, l]) => `<div class="tab${l === tab ? ' on' : ''}">${ic(i, 23)}${badgeN[l] ? `<span class="dot">${badgeN[l]}</span>` : ''}${l}</div>`).join('')}</div>` : '';
  let h = '';
  if (hero) h = `<div class="hd hero">${moon()}${clouds()}${sky(390, heroArt, seed)}${STATUS}<div class="hero-in" style="padding-bottom:${Math.round(heroArt * .55)}px">${hero}</div></div>`;
  else if (bar) h = `<div class="hd std">${sky(390, 72, seed)}${STATUS}<div class="bar">${back ? `<div class="btn-i">${ic('back', 20)}</div>` : ''}<h1>${title}${sub ? `<span class="sub">${sub}</span>` : ''}</h1>${right}</div></div>`;
  return `<div class="phone">${h}<div class="body">${body}</div>${t}<div class="foot">BẢN XEM TRƯỚC – DỮ LIỆU MẪU</div></div>`;
}
export function web({ active, title, body, user = ['Giám đốc Mẫu', 'gd'] }) {
  const nav = [['home', 'Tổng quan'], ['users', 'Thành viên'], ['chat', 'Hoàng Anh Connect'], ['brief', 'Tuyển dụng'], ['book', 'Đào tạo'], ['calendar', 'Lịch họp & bình chọn'], ['wallet', 'Chi phí & báo cáo'], ['spark', 'Hoàng Anh AI'], ['mic2', 'Bản ghi âm']];
  const adm = [['key', 'Trung tâm phân quyền'], ['list', 'Audit log'], ['device', 'Duyệt thiết bị']];
  const it = ([i, l]) => `<div class="it${l === active ? ' on' : ''}">${ic(i, 19)}${l}</div>`;
  return `<div class="web"><div class="wrap"><div class="side"><div class="logo"><i>HA</i>Hoàng Anh Connect</div>${nav.map(it).join('')}<div class="grp">QUẢN TRỊ</div>${adm.map(it).join('')}${sky(256, 170, 23)}</div>
<div class="main"><div class="top"><div class="sp"><div class="crumb">Hoàng Anh Connect / <b>${title}</b></div></div><div class="search" style="width:300px;height:38px">${ic('search', 17)}Tìm kiếm</div><div class="btn-i" style="color:var(--navy2);position:relative;background:#EEF3FA!important;border-color:var(--line)">${ic('bell', 20)}<span style="position:absolute;top:-3px;right:-3px;width:16px;height:16px;border-radius:8px;background:var(--er);color:#fff;font-size:10px;font-weight:700;display:grid;place-items:center">3</span></div><div class="row">${av(user[0], 38, user[1] === 'ad' ? 'pp' : user[1], true)}<div><div class="nm" style="font-size:13px">${user[0]}</div>${user[1] === 'ad' ? pill(ic('key', 11, 'currentColor', 2) + 'Admin hệ thống', 'b') : badge(user[1], true)}</div></div></div>
<div class="cont">${body}</div></div></div><div class="foot" style="height:26px;font-size:11px">BẢN XEM TRƯỚC – DỮ LIỆU MẪU</div></div>`;
}
import fs from 'fs';
const CLIENT = fs.readFileSync(new URL('./client.js', import.meta.url), 'utf8');
export const page = (inner, interactive = false) => `<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Hoàng Anh Connect – bản xem trước</title><style>${CSS}${CSS3}</style></head><body${interactive ? ' style="display:flex;justify-content:center;background:#E9EDF4"' : ''}>${inner}${interactive ? `<script>${CLIENT}</script>` : ''}</body></html>`;
