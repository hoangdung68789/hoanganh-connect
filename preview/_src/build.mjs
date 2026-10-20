import { S } from './screens2.mjs';
import { page } from './lib.mjs';
import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire('/opt/node-tools/');
const { chromium } = require('playwright');
const out = new URL('..', import.meta.url).pathname;
fs.mkdirSync(out + '_html', { recursive: true });
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' }).catch(async () => chromium.launch());
let bad = 0;
for (const [name, html] of Object.entries(S)) {
  fs.writeFileSync(`${out}_html/${name}.html`, page(html));
  const web = name.includes('web-');
  const p = await b.newPage({ viewport: web ? { width: 1440, height: 900 } : { width: 390, height: 844 }, deviceScaleFactor: 2 });
  await p.goto('file://' + `${out}_html/${name}.html`);
  await p.evaluate(() => document.fonts.ready);
  const issues = await p.evaluate(() => {
    const r = [];
    document.querySelectorAll('.nm,.pill,.rb,.btn,.sel span,.h2,.l,.stat .n,td,.bubble').forEach(e => {
      if (e.scrollWidth > e.clientWidth + 1 && getComputedStyle(e).overflow !== 'visible') r.push('cắt chữ: ' + e.textContent.trim().slice(0, 40));
    });
    const f = document.querySelector('.foot').getBoundingClientRect();
    document.querySelector('.body,.cont').querySelectorAll('*').forEach(e => { const q = e.getBoundingClientRect(); if (q.height && q.bottom > (document.querySelector('.tabbar')?.getBoundingClientRect().top ?? f.top) + 1 && !e.closest('.tabbar')) r.push('đè đáy: ' + (e.className || e.tagName) + ' ' + e.textContent.trim().slice(0, 30)); });
    document.querySelectorAll('.body *').forEach(e=>{if(e.scrollHeight>e.clientHeight+2&&getComputedStyle(e).overflow==='hidden'&&!e.classList.contains('bar-bg')&&!e.classList.contains('card'))r.push('khối bị cắt: '+(e.className||e.tagName)+' '+(e.scrollHeight-e.clientHeight)+'px')});
    const bo = document.querySelector('.body,.cont'); if (bo.scrollHeight > bo.clientHeight + 1) r.push('nội dung vượt khung ' + (bo.scrollHeight - bo.clientHeight) + 'px');
    return [...new Set(r)];
  });
  if (issues.length) { bad++; console.log(name, issues.slice(0, 6)); }
  await p.screenshot({ path: `${out}${name}.png`, clip: { x: 0, y: 0, width: web ? 1440 : 390, height: web ? 900 : 844 } });
  await p.close();
}
await b.close();
console.log('xong', Object.keys(S).length, 'ảnh;', bad, 'ảnh có cảnh báo');
