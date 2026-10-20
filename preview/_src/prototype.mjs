import { S } from './web.mjs';
import { CSS } from './lib.mjs';
import { CSS3 } from './art.mjs';
import fs from 'fs';
const META = [
['01','Đăng nhập','4.4, 5.1, 9.1'],['02','Chờ duyệt thiết bị','5.3'],['03','Trang chủ Giám đốc','4.4'],['04','Trang chủ Trợ lý','4.4'],['05','Danh bạ','6.4'],['06','Hồ sơ thành viên','6.1–6.3'],['07','Chat: danh sách','7.1'],['08','Chat: khung chat','7.2'],['09','Đăng ký ứng viên','9.1'],['10','Theo dõi hồ sơ','9.1–9.4'],['11','Quản lý ứng viên','9.2, 9.4'],['12','Đào tạo','10'],['13','Lịch họp & bình chọn','11'],['14','Chi phí & báo cáo','12'],['15','Hoàng Anh AI','13'],['16','Nghe/tải bản ghi âm','8'],['17','Thông báo','15'],['18','Cài đặt & thiết bị','5.3'],['19','Trung tâm phân quyền','14'],['20','Audit log','16'],['21','Trạng thái nút bấm','4.1, 4.3'],
['22','Tổng quan điều hành','2.1, 4.4'],['23','Thành viên','6'],['24','Chat','7'],['25','Tuyển dụng','9'],['26','Đào tạo','10'],['27','Lịch họp & bình chọn','11'],['28','Chi phí & báo cáo','12'],['29','Hoàng Anh AI','13'],['30','Bản ghi âm','8'],['31','Phân quyền & Audit log','14, 16'],['32','Duyệt thiết bị','5.3']];
const keys = Object.keys(S);
const idOf = k => k.slice(0, 2);
const screens = META.map(([id, t, spec]) => { const k = keys.find(x => idOf(x) === id); const web = Number(id) >= 22; return `<div class="pf-s" data-id="${id}" data-k="${web ? 'web' : 'phone'}" data-t="${t}" data-spec="${spec}" hidden>${S[k]}</div>`; }).join('\n');
const item = ([id, t]) => `<button type="button" class="pf-it" data-id="${id}"><b>${id}</b><span>${t}</span></button>`;
const list = ['phone', 'web'].map(m => `<div class="pf-grp" data-k="${m}"><div class="pf-gh">${m === 'phone' ? 'Ứng dụng điện thoại' : 'Web quản trị'}</div>${META.filter(x => (Number(x[0]) >= 22) === (m === 'web')).map(item).join('')}</div>`).join('');
const SHELL = String.raw`
:root{--bg:#EDF1F8;--panel:#FFFFFF;--ink:#0F1B2D;--mut:#55667F;--line:#D7DFEC;--accent:#0B2545;--accent-ink:#FFFFFF;--chip:#E3EBF7;--focus:#2563EB}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#09111F;--panel:#101B2E;--ink:#E6EDF8;--mut:#92A3BD;--line:#213150;--accent:#7DB1FF;--accent-ink:#06142B;--chip:#172846;--focus:#7DB1FF;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#09111F;--panel:#101B2E;--ink:#E6EDF8;--mut:#92A3BD;--line:#213150;--accent:#7DB1FF;--accent-ink:#06142B;--chip:#172846;--focus:#7DB1FF;color-scheme:dark}
:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
body{background:var(--bg);color:var(--ink);font-family:'Inter','Noto Sans','Segoe UI',system-ui,sans-serif;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
.pf-app{display:flex;flex-direction:column;min-height:100dvh;gap:12px;padding-block:12px}
.pf-bar{display:flex;flex-wrap:wrap;align-items:center;gap:10px 14px}
.pf-bar h1{font-size:17px;font-weight:800;letter-spacing:-.01em;margin-right:auto;text-wrap:balance}
.pf-bar h1 small{display:block;font-size:11.5px;font-weight:500;color:var(--mut);letter-spacing:0}
.pf-seg{display:flex;background:var(--chip);border-radius:11px;padding:3px}
.pf-seg button{border:0;background:none;color:var(--mut);font:600 13px/1 inherit;font-family:inherit;padding:9px 14px;border-radius:9px;cursor:pointer;min-height:36px}
.pf-seg button[aria-pressed="true"]{background:var(--panel);color:var(--ink);box-shadow:0 1px 3px rgba(11,37,69,.2)}
.pf-tg{display:flex;align-items:center;gap:8px;border:1px solid var(--line);background:var(--panel);color:var(--ink);font:600 12.5px/1 inherit;font-family:inherit;padding:9px 12px;border-radius:10px;cursor:pointer;min-height:36px}
.pf-tg i{width:30px;height:18px;border-radius:9px;background:var(--line);position:relative;transition:background .2s}
.pf-tg i::after{content:'';position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:#fff;transition:left .2s}
.pf-tg[aria-pressed="true"] i{background:var(--focus)}.pf-tg[aria-pressed="true"] i::after{left:14px}
.pf-main{display:flex;gap:16px;flex:1;min-height:0;align-items:flex-start}
.pf-list{width:236px;flex:none;background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:8px;max-height:calc(100dvh - 90px);overflow:auto;position:sticky;top:12px}
.pf-gh{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--mut);padding:10px 10px 6px}
.pf-it{display:flex;gap:10px;align-items:center;width:100%;text-align:left;border:0;background:none;color:var(--ink);font:500 13.5px/1.25 inherit;font-family:inherit;padding:8px 10px;border-radius:10px;cursor:pointer;min-height:38px}
.pf-it b{font-size:11.5px;color:var(--mut);width:20px;font-variant-numeric:tabular-nums}
.pf-it:hover{background:var(--chip)}.pf-it[aria-current="true"]{background:var(--accent);color:var(--accent-ink)}.pf-it[aria-current="true"] b{color:inherit;opacity:.8}
.pf-it:focus-visible,.pf-seg button:focus-visible,.pf-tg:focus-visible,.pf-sel:focus-visible{outline:3px solid var(--focus);outline-offset:2px}
.pf-sel{display:none;font:600 14px inherit;font-family:inherit;border:1px solid var(--line);background:var(--panel);color:var(--ink);border-radius:10px;padding:9px 10px;min-height:40px;width:100%}
.pf-stage{flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;gap:10px}
.pf-cap{font-size:12.5px;color:var(--mut);text-align:center}.pf-cap b{color:var(--ink)}
.pf-fit{position:relative}
.pf-scale{transform-origin:0 0;position:absolute;left:0;top:0}
.pf-s .phone{border-radius:38px;box-shadow:0 0 0 9px #0B1626,0 40px 70px -30px rgba(0,0,0,.55)}
.pf-s .web{border-radius:14px;box-shadow:0 30px 60px -28px rgba(0,0,0,.5);border:1px solid #C9D5E8}
.pf-s [data-go]{cursor:pointer}
.pf-hint .pf-s [data-go]{outline:2px dashed #F59E0B;outline-offset:-2px}
.pf-rm *,.pf-rm *::before,.pf-rm *::after{animation:none!important;transition-duration:.01ms!important}
.pf-rm .radar i{opacity:.45}.pf-rm .arc,.pf-rm .spark .draw{animation:none!important}
.pf-tip{font-size:12px;color:var(--mut);text-align:center;max-width:560px}
@media (max-width:860px){.pf-list{display:none}.pf-sel{display:block}.pf-main{flex-direction:column;align-items:stretch}}
`;
const JS = String.raw`
(function(){
var root=document.documentElement,$=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return[].slice.call((c||document).querySelectorAll(s))};
var screens=$$('.pf-s'),byId={};screens.forEach(function(s){byId[s.dataset.id]=s});
var fit=$('.pf-fit'),sc=$('.pf-scale'),stage=$('.pf-stage'),cap=$('.pf-cap'),sel=$('.pf-sel'),cur=null,stack=[],mode='phone';
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var TAB={'Trang chủ':'03','Chat':'07','Danh bạ':'05','Thông báo':'17','Thêm':'18'};
var SIDE={'Tổng quan':'22','Thành viên':'23','Hoàng Anh Connect':'24','Tuyển dụng':'25','Đào tạo':'26','Lịch họp & bình chọn':'27','Chi phí & báo cáo':'28','Hoàng Anh AI':'29','Bản ghi âm':'30','Trung tâm phân quyền':'31','Audit log':'31','Duyệt thiết bị':'32'};
var TXT={
'01':[['Đăng nhập','03'],['Đăng ký ứng tuyển','09']],
'02':[['Đăng xuất','01']],
'03':[['3 yêu cầu','32'],['2 khoản','14'],['1 bình chọn','13'],['Phân quyền','19'],['Bản ghi âm','16'],['Chi phí','14'],['Hoàng Anh AI','15']],
'04':[['Phỏng vấn Lê','11'],['Phỏng vấn Phạm','11'],['Họp nhóm','13'],['Ứng viên','11'],['Đào tạo','12'],['Lịch họp','13'],['Hoàng Anh AI','15']],
'06':[['Nhắn tin','08'],['Chỉnh sửa hồ sơ','05']],
'09':[['Tiếp tục','10'],['Quay lại','01']],
'10':[['Chat với Trợ lý','08']],
'11':[['Chat','08']],
'17':[['thiết bị','02'],['tin nhắn','08'],['bình chọn','13'],['Phỏng vấn','11'],['Chi phí','14'],['Quyền','19']],
'18':[['Đăng xuất','01'],['Lê Quốc Việt','06'],['Điện thoại mẫu','02']],
'19':[['Lưu thay đổi','20']],
'22':[['Duyệt thiết bị','32'],['Duyệt chi phí','28'],['Tạo lịch họp','27'],['Xem tất cả','32']],
'23':[['Thêm thành viên','23'],['Chỉnh sửa','23']],
'25':[['Thêm hồ sơ','25']],
'32':[['Duyệt','32']]
};
var ROWS={'05':'06','07':'08'};
function txt(e){return e.textContent.replace(/\s+/g,' ').trim()}
function tag(s){var id=s.dataset.id;
 $$('.tab',s).forEach(function(e){var t=txt(e);for(var k in TAB){if(t.indexOf(k)>-1){e.dataset.go=(k==='Trang chủ'&&id==='04')?'04':TAB[k];break}}});
 $$('.side .it',s).forEach(function(e){var g=SIDE[txt(e)];if(g)e.dataset.go=g});
 $$('.btn-i',s).forEach(function(e){if(e.querySelector('path[d^="m15 6"]'))e.dataset.go='back'});
 if(ROWS[id])$$('.card.flat>.li',s).forEach(function(e){e.dataset.go=ROWS[id]});
 if(id==='07'||id==='05')$$('.li',s).forEach(function(e){e.dataset.go=ROWS[id]});
 if(id==='24')$$('.wcard .li',s).forEach(function(e,i){if(i<8&&e.querySelector('.pill'))e.dataset.go='24'});
 var list=TXT[id];if(list)$$('.btn,.li,.grid2>.card,.card.row',s).forEach(function(e){if(e.dataset.go)return;var t=txt(e);for(var i=0;i<list.length;i++){if(t.indexOf(list[i][0])>-1){e.dataset.go=list[i][1];break}}});
 $$('[data-go]',s).forEach(function(e){if(!e.hasAttribute('tabindex'))e.tabIndex=0;e.setAttribute('role',e.classList.contains('btn')?'button':'link')});
}
screens.forEach(tag);
$$('.btn,.tab,.seg>div,.tog,.sel').forEach(function(e){if(!e.hasAttribute('tabindex'))e.tabIndex=0});
function count(s){$$('[data-count]',s).forEach(function(e){if(!e.dataset.fin)e.dataset.fin=e.textContent;if(rm||root.classList.contains('pf-rm')){e.textContent=e.dataset.fin;return}var to=parseFloat(e.dataset.count.replace(',','.')),dec=(e.dataset.count.split(/[.,]/)[1]||'').length,suf=e.dataset.suf||'',t0=performance.now();(function f(t){var p=Math.min((t-t0)/900,1),v=to*(1-Math.pow(1-p,3));e.textContent=v.toFixed(dec).replace('.',',')+suf;if(p<1)requestAnimationFrame(f);else e.textContent=e.dataset.fin})(t0)})}
function layout(){if(!cur)return;var web=cur.dataset.k==='web',W=web?1440:390,H=web?900:844,bar=$('.pf-bar').offsetHeight+60,aw=Math.max(stage.clientWidth-(web?4:30),260),ah=Math.max(innerHeight-bar-(web?90:70),420),k=Math.min(aw/W,ah/H,web?1:1.1);if(innerWidth<=860&&!web)k=Math.min(aw/W,1.1);sc.style.width=W+'px';sc.style.height=H+'px';sc.style.transform='scale('+k+')';fit.style.width=Math.round(W*k)+'px';fit.style.height=Math.round(H*k)+'px'}
function show(id,push){var s=byId[id];if(!s)return;if(cur){cur.hidden=true;if(push!==false&&cur.dataset.id!==id)stack.push(cur.dataset.id)}cur=s;s.hidden=false;mode=s.dataset.k;
 $$('.pf-seg button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.k===mode))});
 $$('.pf-grp').forEach(function(g){g.hidden=g.dataset.k!==mode});
 $$('.pf-it').forEach(function(b){b.setAttribute('aria-current',String(b.dataset.id===id))});
 sel.innerHTML='';$$('.pf-it').filter(function(b){return byId[b.dataset.id].dataset.k===mode}).forEach(function(b){var o=document.createElement('option');o.value=b.dataset.id;o.textContent=b.dataset.id+' · '+byId[b.dataset.id].dataset.t;if(b.dataset.id===id)o.selected=true;sel.appendChild(o)});
 cap.innerHTML='<b>'+id+' · '+s.dataset.t+'</b> · mục đặc tả '+s.dataset.spec;count(s);layout()}
function nav(g){if(g==='back'){var p=stack.pop();if(p)show(p,false);return}show(g)}
function loading(b,cb){if(b.classList.contains('loading'))return;b.classList.add('loading');b.setAttribute('aria-busy','true');setTimeout(function(){b.classList.remove('loading');b.removeAttribute('aria-busy');if(cb)cb();else if(!b.classList.contains('sec2')&&!b.classList.contains('dng')){b.classList.add('done');setTimeout(function(){b.classList.remove('done')},900)}},cb?420:1100)}
stage.addEventListener('pointerdown',function(ev){var b=ev.target.closest('.btn');if(!b||b.classList.contains('dis'))return;var r=b.getBoundingClientRect(),k=r.width/b.offsetWidth||1,s=Math.max(b.offsetWidth,b.offsetHeight),x=document.createElement('span');x.className='rip';x.style.cssText='width:'+s+'px;height:'+s+'px;left:'+((ev.clientX-r.left)/k-s/2)+'px;top:'+((ev.clientY-r.top)/k-s/2)+'px';b.appendChild(x);setTimeout(function(){x.remove()},650)});
stage.addEventListener('click',function(ev){var t=ev.target,sg=t.closest('.seg>div');if(sg){$$(':scope>div',sg.parentNode).forEach(function(x){x.classList.remove('on')});sg.classList.add('on')}
 var tg=t.closest('.tog');if(tg)tg.classList.toggle('on');
 var pb=t.closest('.playbtn');if(pb){var w=pb.closest('.card,.wcard').querySelector('.wave');if(w)w.classList.toggle('playing')}
 var g=t.closest('[data-go]');if(g){var go=g.dataset.go;if(g.classList.contains('btn'))loading(g,function(){nav(go)});else nav(go);return}
 var b=t.closest('.btn');if(b&&!b.classList.contains('dis'))loading(b)});
stage.addEventListener('keydown',function(ev){if(ev.key!=='Enter'&&ev.key!==' ')return;var e=ev.target;if(e.matches&&e.matches('.btn,.tab,.seg>div,.tog,.sel,[data-go]')){ev.preventDefault();e.click()}});
$$('.pf-it').forEach(function(b){b.addEventListener('click',function(){stack=[];show(b.dataset.id,false)})});
$$('.pf-seg button').forEach(function(b){b.addEventListener('click',function(){stack=[];show(b.dataset.k==='web'?'22':'03',false)})});
sel.addEventListener('change',function(){stack=[];show(sel.value,false)});
$('#pf-rm').addEventListener('click',function(){var on=this.getAttribute('aria-pressed')!=='true';this.setAttribute('aria-pressed',String(on));root.classList.toggle('pf-rm',on);if(cur)count(cur)});
$('#pf-hint').addEventListener('click',function(){var on=this.getAttribute('aria-pressed')!=='true';this.setAttribute('aria-pressed',String(on));root.classList.toggle('pf-hint',on)});
document.addEventListener('keydown',function(ev){if(/INPUT|SELECT|TEXTAREA/.test(ev.target.tagName))return;if(ev.key==='ArrowRight'||ev.key==='ArrowLeft'){var ids=$$('.pf-it').filter(function(b){return byId[b.dataset.id].dataset.k===mode}).map(function(b){return b.dataset.id}),i=ids.indexOf(cur.dataset.id)+(ev.key==='ArrowRight'?1:-1);if(i>=0&&i<ids.length){stack=[];show(ids[i],false)}}});
addEventListener('resize',layout);
if(rm){$('#pf-rm').setAttribute('aria-pressed','true');root.classList.add('pf-rm')}
var h=(location.hash||'').replace('#s','');show(byId[h]?h:'01',false);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(layout);
})();
`;
const out = `<title>Bản mẫu Hoàng Anh Connect</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap">
<style>${CSS}${CSS3}${SHELL}</style>
<div class="pf-app">
<header class="pf-bar"><h1>Hoàng Anh Connect<small>Bản mẫu tương tác · DỮ LIỆU MẪU, chưa kết nối backend</small></h1>
<div class="pf-seg" role="group" aria-label="Nền tảng"><button type="button" data-k="phone" aria-pressed="true">Điện thoại</button><button type="button" data-k="web" aria-pressed="false">Web</button></div>
<button type="button" class="pf-tg" id="pf-hint" aria-pressed="false">Hiện vùng bấm được<i></i></button>
<button type="button" class="pf-tg" id="pf-rm" aria-pressed="false">Giảm chuyển động<i></i></button></header>
<select class="pf-sel" aria-label="Chọn màn hình"></select>
<div class="pf-main"><nav class="pf-list" aria-label="Danh sách màn hình">${list}</nav>
<section class="pf-stage"><div class="pf-fit"><div class="pf-scale">
${screens}
</div></div><div class="pf-cap" aria-live="polite"></div><div class="pf-tip">Bấm tab dưới cùng, thẻ lối tắt, danh sách và nút để chuyển màn như app thật. Phím ← → đổi màn hình trong cùng nền tảng.</div></section></div></div>
<script>${JS}</script>`;
fs.writeFileSync(new URL('../prototype.html', import.meta.url), out);
console.log('prototype.html', (out.length / 1e6).toFixed(2) + ' MB', META.length, 'màn');
