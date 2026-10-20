// Hình ảnh SVG tự vẽ + hoạt ảnh cho preview v3 (không dùng ảnh người thật / ảnh stock).
function rng(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

export function skyline(w, h, seed = 7) {
  const r = rng(seed);
  let o = `<svg class="sky" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMax slice" aria-hidden="true">`;
  const L = [{ f: '#3E6FB8', o: .22, a: .3, b: .66 }, { f: '#1E4B8E', o: .55, a: .24, b: .56 }, { f: '#08203F', o: 1, a: .18, b: .46 }];
  L.forEach((l, li) => {
    let x = -8;
    while (x < w) {
      const bw = 18 + r() * (li ? 34 : 28), bh = h * (l.a + r() * (l.b - l.a)), y = h - bh;
      o += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${bw.toFixed(1)}" height="${bh.toFixed(1)}" fill="${l.f}" opacity="${l.o}"/>`;
      if (r() < .22) o += `<rect x="${(x + bw / 2 - 1).toFixed(1)}" y="${(y - 9).toFixed(1)}" width="2" height="9" fill="${l.f}" opacity="${l.o}"/>`;
      if (li > 0) for (let wy = y + 6; wy < h - 4; wy += 9) for (let wx = x + 4; wx < x + bw - 5; wx += 7) {
        const q = r();
        if (q < (li === 2 ? .34 : .2)) o += `<rect class="${q < .11 ? 'w1' : 'w2'}" x="${wx.toFixed(1)}" y="${wy.toFixed(1)}" width="3" height="4" rx=".6" fill="${li === 2 ? '#FFD98A' : '#9CC3FF'}" style="animation-delay:${(r() * 4).toFixed(1)}s"/>`;
      }
      x += bw + r() * 4;
    }
  });
  return o + '</svg>';
}
export const sky = (w, h, seed, cls = '', extra = '') => `<div class="art ${cls}" style="height:${h}px">${extra}${skyline(w, h, seed)}</div>`;
export const clouds = () => '<i class="cloud" style="top:20%;animation-duration:26s"></i><i class="cloud" style="top:44%;width:96px;animation-duration:38s;animation-delay:-14s"></i><i class="cloud" style="top:12%;width:54px;animation-duration:32s;animation-delay:-22s"></i>';
export const moon = () => '<i class="moon"></i>';

export function spark(pts, color = '#2563EB', w = 110, h = 34) {
  const mx = Math.max(...pts), mn = Math.min(...pts), dx = w / (pts.length - 1);
  const P = pts.map((v, i) => [i * dx, h - 3 - ((v - mn) / (mx - mn || 1)) * (h - 8)]);
  const d = P.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const id = 'g' + Math.abs(pts.join('').split('').reduce((a, c) => a * 31 + c.charCodeAt(0) | 0, 7));
  return `<svg class="spark" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${color}" stop-opacity=".28"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></linearGradient></defs><path d="${d} L${w} ${h} L0 ${h}Z" fill="url(#${id})"/><path class="draw" pathLength="1" d="${d}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${P[P.length - 1][0]}" cy="${P[P.length - 1][1].toFixed(1)}" r="3" fill="#fff" stroke="${color}" stroke-width="2"/></svg>`;
}
export function ring(pct, size, stroke, color, inner = '', track = '#E3EAF5') {
  const r = (size - stroke) / 2, c = size / 2;
  return `<div class="ringw" style="width:${size}px;height:${size}px"><svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" aria-hidden="true"><circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${track}" stroke-width="${stroke}"/><circle class="arc" cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" pathLength="100" stroke-dasharray="${pct} 100" transform="rotate(-90 ${c} ${c})"/></svg><div class="ringi">${inner}</div></div>`;
}
export function donut(segs, size, stroke, inner = '') {
  const r = (size - stroke) / 2, c = size / 2, tot = segs.reduce((a, s) => a + s.v, 0);
  let off = 0, o = `<div class="ringw" style="width:${size}px;height:${size}px"><svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" aria-hidden="true"><circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="#E3EAF5" stroke-width="${stroke}"/>`;
  segs.forEach((s, i) => { const p = s.v / tot * 100; o += `<circle class="arc" style="animation-delay:${i * 90}ms" cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${s.c}" stroke-width="${stroke}" pathLength="100" stroke-dasharray="${Math.max(p - 1.2, .1).toFixed(2)} 100" stroke-dashoffset="${(-off).toFixed(2)}" transform="rotate(-90 ${c} ${c})"/>`; off += p; });
  return o + `</svg><div class="ringi">${inner}</div></div>`;
}
export function wave(n = 46, played = .35, seed = 3, big = false) {
  const r = rng(seed); let o = `<div class="wave${big ? ' big' : ''}" aria-hidden="true">`;
  for (let i = 0; i < n; i++) { const h = 14 + Math.round(Math.abs(Math.sin(i * .5 + r() * 2)) * 70 + r() * 16); o += `<i class="${i / n < played ? 'p' : ''}" style="height:${h}%;animation-delay:${(i * 38) % 900}ms"></i>`; }
  return o + '</div>';
}
export const orb = (s = 92) => `<div class="orb" style="width:${s}px;height:${s}px"><i class="o1"></i><i class="o2"></i><i class="o3"></i><svg viewBox="0 0 24 24" width="${s * .34}" height="${s * .34}" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg></div>`;
export const radar = (iconSvg, s = 120) => `<div class="radar" style="width:${s}px;height:${s}px"><i></i><i></i><i></i><div class="rc">${iconSvg}</div></div>`;

export const CSS3 = String.raw`
:root{--ice:#EAF1FB;--glow:#5B9DFF;--sh2:0 2px 4px rgba(11,37,69,.05),0 20px 38px -20px rgba(11,37,69,.3);--bg:#F2F5FB}
body{background:#fff}
.phone{background:linear-gradient(180deg,#F4F7FC,#EDF2FA)}
.hd{position:relative;flex:none;overflow:hidden;color:#fff;background:radial-gradient(120% 150% at 90% -20%,rgba(91,157,255,.55),transparent 50%),linear-gradient(135deg,#061630 0%,#0B2545 48%,#18488C 100%)}
.hd .status,.hd .bar{background:none!important;box-shadow:none!important;position:relative;z-index:2}
.hd .art,.side .art{position:absolute;left:0;right:0;bottom:0;pointer-events:none;overflow:hidden}
.sky{display:block;width:100%;height:100%}
.hd.std .art{height:72px!important;opacity:.95;-webkit-mask-image:linear-gradient(90deg,transparent 30%,#000 88%);mask-image:linear-gradient(90deg,transparent 30%,#000 88%)}
.hero-in{position:relative;z-index:2;padding:4px 18px 86px}
.hero-in h1{font-size:19px;font-weight:800;letter-spacing:-.01em;line-height:1.2}
.hero-in .sub{font-size:12.5px;opacity:.82;margin-top:3px}
.cloud{position:absolute;left:0;height:14px;width:70px;border-radius:14px;background:rgba(255,255,255,.12);filter:blur(1px);animation:drift 30s linear infinite}
.moon{position:absolute;right:76px;top:52px;width:22px;height:22px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#fff,#D6E4FF 60%,#93B6F2);box-shadow:0 0 28px 8px rgba(143,180,240,.4);animation:float 7s ease-in-out infinite}
.w1{animation:tw 3.2s ease-in-out infinite}.w2{opacity:.5;animation:tw 4.6s ease-in-out infinite}
.btn-i{background:rgba(255,255,255,.14)!important;backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.16);transition:transform .2s var(--e-out),background .2s}
.btn-i:hover{background:rgba(255,255,255,.24)!important;transform:translateY(-1px)}.btn-i:active{transform:scale(.92)}
.card,.stat{border-radius:18px;border:1px solid rgba(214,223,238,.8);box-shadow:var(--sh2)}
.av{position:relative;color:#fff;border:2px solid #fff;background:linear-gradient(135deg,var(--rc,#3F6DB8),var(--rc2,#13315C));box-shadow:0 0 0 2px color-mix(in srgb,var(--rc,#3F6DB8) 55%,#fff),0 6px 12px -6px rgba(11,37,69,.5);letter-spacing:.02em}
.on-dot{position:absolute;right:-1px;bottom:-1px;width:11px;height:11px;border-radius:50%;background:#22C55E;border:2px solid #fff}
.chip{width:30px;height:30px;border-radius:10px;display:grid;place-items:center;color:#fff;background:linear-gradient(135deg,var(--c,#2563EB),color-mix(in srgb,var(--c,#2563EB) 60%,#061630));box-shadow:0 8px 14px -8px var(--c,#2563EB)}
.trend{font-size:11.5px;font-weight:700;border-radius:999px;padding:2px 8px}.trend.up{background:#DCFCE7;color:#15803D}.trend.dn{background:#FEE2E2;color:#B91C1C}.trend.wa{background:#FEF3C7;color:#B45309}
.spark{display:block;margin-top:3px}.spark .draw{stroke-dasharray:1;stroke-dashoffset:0;animation:draw 1.2s var(--e-out) .3s backwards}
.ringw{position:relative;flex:none}.ringi{position:absolute;inset:0;display:grid;place-items:center;text-align:center}
.arc{animation:arc 1.1s var(--e-out) .2s backwards}
.wave{display:flex;align-items:center;gap:2.5px;height:44px}.wave.big{height:92px;gap:4px}
.wave i{flex:1;border-radius:3px;background:#C5D2E8;min-width:2px;transform-origin:center}.wave i.p{background:linear-gradient(180deg,#3B7BE8,#13315C)}
.wave.playing i{animation:eq 900ms ease-in-out infinite alternate}
.orb{position:relative;display:grid;place-items:center;margin:0 auto}
.orb i{position:absolute;inset:0;border-radius:50%}
.orb .o1{background:radial-gradient(circle at 32% 28%,#9CC3FF,#2563EB 45%,#0B2545 100%);box-shadow:0 18px 40px -10px rgba(37,99,235,.7),inset 0 -8px 18px rgba(6,22,48,.5);animation:float 5s ease-in-out infinite}
.orb .o2{inset:-10px;border:1.5px solid rgba(91,157,255,.45);animation:spin 14s linear infinite;border-top-color:transparent}
.orb .o3{inset:-22px;border:1px dashed rgba(91,157,255,.35);animation:spin 22s linear infinite reverse}
.orb svg{position:relative;z-index:1;animation:float 5s ease-in-out infinite}
.radar{position:relative;display:grid;place-items:center;margin:0 auto}
.radar i{position:absolute;inset:0;border-radius:50%;border:2px solid rgba(245,158,11,.55);animation:pulsering 2.6s var(--e-out) infinite}
.radar i:nth-child(2){animation-delay:.85s}.radar i:nth-child(3){animation-delay:1.7s}
.radar .rc{position:relative;width:62%;height:62%;border-radius:50%;background:linear-gradient(135deg,#FDE9B4,#F5B93D);color:#8A4B08;display:grid;place-items:center;box-shadow:0 14px 28px -10px rgba(245,158,11,.7)}
.typing{display:inline-flex;gap:4px;align-items:center;padding:10px 12px}.typing i{width:6px;height:6px;border-radius:50%;background:#8A99B0;animation:bounce 1.2s ease-in-out infinite}.typing i:nth-child(2){animation-delay:.15s}.typing i:nth-child(3){animation-delay:.3s}
.tabbar{border-top:0;box-shadow:0 -10px 24px -16px rgba(11,37,69,.35);background:rgba(255,255,255,.96);padding:6px 8px 0}
.tab{border-radius:14px;margin:0 2px;padding-top:5px;height:50px}.tab.on{background:var(--ice);color:var(--navy)}.tab.on::before{display:none}
.tab.on .ic{transform:translateY(-1px) scale(1.1);stroke-width:2.2}
.foot{background:#0B2545;color:#A9BCDB;border-top:0}
.btn{border-radius:14px}
.glass{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.18);backdrop-filter:blur(8px);border-radius:16px}
.tl-line{position:relative}.tl-line::before{content:'';position:absolute;left:18px;top:6px;bottom:6px;width:2px;background:linear-gradient(#BFD0EA,#E3EAF5)}
.tl-line>div{position:relative}.tl-line>div::before{content:'';position:absolute;left:-27px;top:5px;width:12px;height:12px;border-radius:50%;background:var(--c,#2563EB);border:3px solid #fff;box-shadow:0 0 0 2px var(--c,#2563EB)}
.cont{gap:14px!important}
/* ---- WEB v3 ---- */
.web{background:#F2F5FB}
.side{position:relative;background:radial-gradient(120% 60% at 0% 0%,rgba(91,157,255,.28),transparent 55%),linear-gradient(180deg,#061630,#0B2545 60%,#0D2B55);overflow:hidden;width:256px}
.side .art{height:170px;opacity:.9}
.side .it{position:relative;z-index:1;border-radius:12px}.side .it.on{background:linear-gradient(90deg,rgba(91,157,255,.28),rgba(91,157,255,.08));box-shadow:inset 3px 0 0 #7DB1FF}
.side .logo,.side .grp{position:relative;z-index:1}
.top{background:rgba(255,255,255,.85);backdrop-filter:blur(10px);height:66px}
.crumb{font-size:12.5px;color:var(--t3)}.crumb b{color:var(--t1)}
.wh{position:relative;overflow:hidden;border-radius:22px;color:#fff;padding:22px 26px;background:radial-gradient(90% 160% at 92% -30%,rgba(91,157,255,.6),transparent 52%),linear-gradient(120deg,#061630 0%,#0B2545 45%,#1A4C94 100%);box-shadow:0 24px 44px -26px rgba(11,37,69,.7)}
.wh .art{position:absolute;right:0;bottom:0;top:0;width:62%;-webkit-mask-image:linear-gradient(90deg,transparent,#000 40%);mask-image:linear-gradient(90deg,transparent,#000 40%)}
.wh>*:not(.art){position:relative;z-index:2}
.wh h2{font-size:24px;font-weight:800;letter-spacing:-.01em}
.wcard{border-radius:20px;border:1px solid rgba(214,223,238,.85);box-shadow:var(--sh2);transition:transform .25s var(--e-out),box-shadow .25s var(--e-out)}
.wcard:hover{transform:translateY(-2px);box-shadow:0 2px 6px rgba(11,37,69,.06),0 26px 44px -22px rgba(11,37,69,.34)}
.kpi{display:flex;flex-direction:column;gap:2px}.kpi .n{font-size:30px;font-weight:800;color:var(--navy);letter-spacing:-.02em;line-height:1.1}
.kan{background:#EEF3FA;border-radius:16px;padding:10px;display:flex;flex-direction:column;gap:8px;flex:1;min-width:0}
.kc{background:#fff;border:1px solid var(--line);border-radius:14px;padding:10px 12px;box-shadow:0 6px 14px -10px rgba(11,37,69,.3);transition:transform .2s var(--e-out),box-shadow .2s}.kc:hover{transform:translateY(-2px);box-shadow:0 14px 24px -12px rgba(11,37,69,.35)}
.barv{transform-box:fill-box;transform-origin:bottom;animation:growy .9s var(--e-out) backwards}
.btn.glassb{background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.28);box-shadow:none;color:#fff;backdrop-filter:blur(8px)}
.btn.glassb:hover{background:rgba(255,255,255,.24)}
.cal{display:grid;grid-template-columns:repeat(7,1fr);gap:6px}.cal .d{aspect-ratio:auto;height:92px;border-radius:12px;background:#F5F8FD;border:1px solid transparent;padding:6px 8px;font-size:12.5px;font-weight:600;color:var(--t2);position:relative;transition:transform .2s var(--e-out),background .2s}.cal .d:hover{transform:translateY(-2px);background:#EAF1FB}.cal .h{font-size:11.5px;font-weight:700;color:var(--t3);text-align:center;padding:2px 0}.cal .d.today{background:var(--navy);color:#fff}.cal .d.ev{background:#EDE9FE;color:#5B21B6;border-color:#DDD6FE}.cal .d.dl{background:#FEF3C7;color:#8A4B08;border-color:#F2DCA0}.cal .d.lk{background:#E8ECF2;color:#475569}.cal .d.off{opacity:.35}.cal .d small{position:absolute;left:8px;bottom:5px;font-size:10px;font-weight:700}
@keyframes growy{from{transform:scaleY(0)}}
@keyframes draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
@keyframes arc{from{stroke-dasharray:0 100}}
@keyframes drift{from{transform:translateX(-120px)}to{transform:translateX(560px)}}
@keyframes float{50%{transform:translateY(-5px)}}
@keyframes tw{0%,100%{opacity:.25}50%{opacity:1}}
@keyframes eq{from{transform:scaleY(.45)}to{transform:scaleY(1)}}
@keyframes pulsering{from{transform:scale(.62);opacity:.9}to{transform:scale(1.35);opacity:0}}
@keyframes bounce{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-5px);opacity:1}}
@media (prefers-reduced-motion:reduce){.moon,.cloud,.orb *,.radar i,.typing i{animation:none!important}.radar i{opacity:.45}.radar i:nth-child(1){transform:scale(.8)}.radar i:nth-child(2){transform:scale(1)}.radar i:nth-child(3){transform:scale(1.2);opacity:.2}}
`;
