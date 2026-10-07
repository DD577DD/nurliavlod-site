/* Telegram bot yuklagan video/rasmlar (Cloudflare R2 dagi media.json) ni ko'rsatadi.
   Ro'yxat bo'sh yoki yuklanmasa, #live bo'limi yashirin qoladi. */
(()=>{
  const MEDIA_URL = 'https://pub-74f9500858a5427eaf606d839b76f3fc.r2.dev/media.json';
  const PAGE = 9;
  const sec=document.getElementById('live'), grid=document.getElementById('live-grid'), more=document.getElementById('live-more');
  const lb=document.getElementById('live-lb'), lbi=document.getElementById('live-lbi');
  if(!sec||!grid) return;
  const LOC={uz:'uz-UZ',ru:'ru-RU',en:'en-GB'};
  const fmt=iso=>{const d=new Date(iso); if(isNaN(d)) return '';
    try{return d.toLocaleDateString(LOC[LANG]||'en-GB',{day:'numeric',month:'long',year:'numeric'})}catch(e){return d.toISOString().slice(0,10)}};
  const closeLb=()=>{lb.classList.remove('open'); lbi.removeAttribute('src')};
  lb.addEventListener('click',e=>{ if(e.target===lb||e.target.closest('#live-lbx')) closeLb() });
  addEventListener('keydown',e=>{ if(e.key==='Escape') closeLb() });

  function card(it){
    const c=document.createElement('article'); c.className='live-card';
    const box=document.createElement('div'); box.className='live-box';
    if(it.type==='video'){
      const v=document.createElement('video'); v.src=it.url+'#t=0.1'; v.controls=true; v.preload='metadata'; v.setAttribute('playsinline','');
      v.addEventListener('play',()=>grid.querySelectorAll('video').forEach(o=>{ if(o!==v) o.pause() }));
      box.appendChild(v);
    }else{
      const im=document.createElement('img'); im.src=it.url; im.alt=it.title||''; im.loading='lazy';
      im.onclick=()=>{lbi.src=it.url; lbi.alt=it.title||''; lb.classList.add('open')};
      box.appendChild(im);
    }
    const info=document.createElement('div'); info.className='live-info';
    const t=document.createElement('h3'); t.className='live-title'; t.textContent=it.title||'';
    const d=document.createElement('p'); d.className='live-date'; d.dataset.iso=it.date||''; d.textContent=fmt(it.date);
    info.append(t,d);
    if(it.type==='video'){
      const vw=document.createElement('p'); vw.className='live-views'; vw.hidden=true;
      vw.innerHTML='<svg class="ico"><use href="#i-eye"/></svg><b>0</b> <span data-i18n="vd_v"></span>';
      vw.querySelector('span').textContent=T[LANG].vd_v;
      info.appendChild(vw);
      const show=n=>{vw.querySelector('b').textContent=Number(n||0).toLocaleString(); vw.hidden=false};
      NA_views.load().then(all=>show(all[it.id]));
      box.querySelector('video').addEventListener('play',()=>NA_views.bump(it.id).then(n=>{ if(n!=null) show(n) }));
    }
    c.append(box,info); return c;
  }
  let items=[], shown=0;
  function next(){
    items.slice(shown,shown+PAGE).forEach(it=>grid.appendChild(card(it)));
    shown=Math.min(items.length,shown+PAGE); more.hidden=shown>=items.length;
  }
  more.addEventListener('click',next);
  document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>setTimeout(()=>
    grid.querySelectorAll('[data-iso]').forEach(el=>el.textContent=fmt(el.dataset.iso)),0)));

  fetch(MEDIA_URL+'?v='+Date.now(),{cache:'no-store'})
    .then(r=>{ if(!r.ok) throw 0; return r.json() })
    .then(data=>{
      if(!Array.isArray(data)) return;
      items=data.filter(i=>i&&(i.type==='video'||i.type==='image')&&typeof i.url==='string'&&/^https:\/\//.test(i.url));
      if(!items.length) return;
      sec.hidden=false; next();
    }).catch(()=>{});
})();
