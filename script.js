/* ---------- links & schedule: edit here ---------- */
const TG_URL = 'https://t.me/NurliAvlod_Chat';
const IG_URL = 'https://www.instagram.com/nurliavlod_mtt';
/* day 1 = Monday ... 7 = Sunday, minutes from midnight (Termiz time) */
const SCH = {1:[450,1080],2:[450,1080],3:[450,1080],4:[450,1080],5:[450,1080],6:[450,840],7:null};

/* ---------- texts ---------- */
const T = {
uz:{logo_sub:"Bolalar bog'chasi",n_about:"Biz haqimizda",n_prog:"To'garaklar",n_gal:"Galereya",n_hours:"Ish vaqti",n_contact:"Aloqa",
kind:"Nodavlat maktabgacha ta'lim tashkiloti",h1a:"Bolalik — kashfiyotlar sari",h1b:"birinchi qadam",
lead:"Termizdagi Nurli Avlod bog'chasida 1,5 yoshdan 7 yoshgacha bolalar qabul qilinadi. O'zbek va rus guruhlari, ingliz va rus tili, shaxmat, karate, gimnastika va raqs to'garaklari mavjud.",
call:"Qo'ng'iroq qilish",where:"Manzilni ko'rish",
f1v:"1,5–7 yosh",f1l:"bolalar qabul qilinadi",f2v:"O'zbek · Rus",f2l:"tilidagi guruhlar",f3v:"7:30–18:00",f3l:"Du–Ju · Shanba 14:00 gacha",f4l:"Google · 14 ta sharh",
a_eye:"Biz haqimizda",a_h:"Bolalar uchun yorqin va qulay muhit",
a_p:"Nurli Avlod Bolalar Bog'chasi Termiz shahrining Farovon massivida joylashgan. Xonalarimiz yorqin ranglar, osmon va dengiz tasvirli shiftlar hamda bolalar bo'yiga mos mebel bilan jihozlangan.",
t1:"1,5 yoshdan 7 yoshgacha bolalar qabul qilinadi",t2:"O'zbek va rus tilidagi guruhlar mavjud",t3:"Dushanba–Juma 7:30–18:00, Shanba 7:30–14:00",
s1:"Google reytingi",s2:"ota-ona sharhi",s3:"to'garak",
p_eye:"To'garaklar",p_h:"Bog'chamizdagi qulayliklar",p_p:"Asosiy tarbiya bilan birga bolalar uchun qo'shimcha to'garaklar tashkil etilgan.",
c1h:"Ingliz tili",c1p:"Bolalar ingliz tilini erta yoshdan o'rganishni boshlaydi.",
c2h:"Rus tili",c2p:"Bolalar rus tilida so'zlashishni erta yoshdan o'rganadi.",
c3h:"Shaxmat",c3p:"Mantiqiy fikrlash, diqqat va sabr-toqatni rivojlantiradi.",
c4h:"Karate",c4p:"Intizom, kuch va o'ziga ishonchni shakllantiruvchi mashg'ulotlar.",
c5h:"Gimnastika",c5p:"Harakat, egiluvchanlik va sog'lom o'sish uchun mashg'ulotlar.",
c6h:"Raqs",c6p:"Raqs mashg'ulotlari ritm hissi va go'zal harakatlarni rivojlantiradi.",
g_eye:"Galereya",g_h:"Bog'chamiz ichidan",g_p:"Xonalarimiz bilan tanishing.",
g_more:"Hammasini ko'rish",g_less:"Kamroq ko'rsatish",g_tp:"Foto",g_tv:"Video",gt1:"Shaxmat va o'yin xonasi",gt2:"Mashg'ulot zali",gt3:"Guruh xonasi",
gt4:"Shaxmat mashg'uloti",gt5:"Shaxmat darsi",gt6:"Harakatli o'yinlar",gt7:"Konstruktor o'yini",gt8:"Bayram tadbirlari",gt9:"Bog'cha hovlisi",
vd_v:"marta ko'rilgan",live_eye:"Yangiliklar",live_h:"Bog'chadan kunlik lavhalar",live_p:"Eng so'nggi video va suratlar.",live_more:"Yana ko'rsatish",
h_eye:"Ish tartibi",h_h:"Ish vaqti",h_p:"Bolangizni qulay vaqtda olib keling.",h_k:"Ish vaqti",h_t:"Haftalik jadval",today:"Bugun",
dn:["Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba","Yakshanba"],off:"Dam olish kuni",
r_t:"14 ta sharh asosida",r_btn:"Google Maps'da sharhlar",
k_eye:"Aloqa",k_h:"Bizga tashrif buyuring",k_p:"Savollaringiz bormi? Qo'ng'iroq qiling yoki bevosita tashrif buyuring.",
k1:"Manzil",k1b:"Termiz shahar, Farovon massivi, 1-mavze, 4 «B»-uy",k1c:"Mo'ljal: Shoxsaroy to'yxonasi orqasi",k2:"Telefon",
k3:"Telegram orqali yozing",k4:"Ish vaqti",k4b:"Dushanba–Juma 7:30–18:00, Shanba 7:30–14:00",k5:"Instagram sahifamiz",map_btn:"Google Maps'da ochish",foot:"Termiz, O'zbekiston"},
ru:{logo_sub:"Детский сад",n_about:"О нас",n_prog:"Кружки",n_gal:"Галерея",n_hours:"Режим работы",n_contact:"Контакты",
kind:"Негосударственная дошкольная организация",h1a:"Детство — первый шаг",h1b:"к открытиям",
lead:"В детском саду «Нурли Авлод» в Термезе принимают детей от 1,5 до 7 лет. Есть узбекские и русские группы, кружки английского и русского языков, шахмат, каратэ, гимнастики и танцев.",
call:"Позвонить",where:"Показать адрес",
f1v:"1,5–7 лет",f1l:"принимаем детей",f2v:"Узб. · Рус.",f2l:"языковые группы",f3v:"7:30–18:00",f3l:"Пн–Пт · суббота до 14:00",f4l:"Google · 14 отзывов",
a_eye:"О нас",a_h:"Яркая и уютная среда для детей",
a_p:"Детский сад «Нурли Авлод» находится в массиве Фарован города Термез. Наши комнаты оформлены яркими цветами, потолками с изображением неба и моря и мебелью по росту детей.",
t1:"Принимаем детей от 1,5 до 7 лет",t2:"Есть группы на узбекском и русском языках",t3:"Пн–Пт 7:30–18:00, Сб 7:30–14:00",
s1:"Рейтинг Google",s2:"отзывов родителей",s3:"кружка",
p_eye:"Кружки",p_h:"Что есть в нашем саду",p_p:"Помимо основного воспитания для детей организованы дополнительные кружки.",
c1h:"Английский язык",c1p:"Дети начинают знакомство с английским языком с раннего возраста.",
c2h:"Русский язык",c2p:"Дети учатся говорить по-русски с раннего возраста.",
c3h:"Шахматы",c3p:"Развивают логическое мышление, внимание и терпение.",
c4h:"Каратэ",c4p:"Занятия развивают дисциплину, силу и уверенность в себе.",
c5h:"Гимнастика",c5p:"Занятия для движения, гибкости и здорового роста.",
c6h:"Танцы",c6p:"Танцы развивают чувство ритма и красивую координацию движений.",
g_eye:"Галерея",g_h:"Внутри нашего сада",g_p:"Познакомьтесь с нашими комнатами.",
g_more:"Показать все",g_less:"Скрыть",g_tp:"Фото",g_tv:"Видео",gt1:"Шахматная и игровая комната",gt2:"Зал для занятий",gt3:"Групповая комната",
gt4:"Занятие по шахматам",gt5:"Урок шахмат",gt6:"Подвижные игры",gt7:"Игры с конструктором",gt8:"Праздничные мероприятия",gt9:"Двор детского сада",
vd_v:"просмотров",live_eye:"Новости",live_h:"Ежедневно из детского сада",live_p:"Свежие видео и фотографии.",live_more:"Показать ещё",
h_eye:"Режим работы",h_h:"Время работы",h_p:"Приводите ребёнка в удобное время.",h_k:"Время работы",h_t:"Расписание на неделю",today:"Сегодня",
dn:["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],off:"Выходной",
r_t:"На основе 14 отзывов",r_btn:"Отзывы в Google Maps",
k_eye:"Контакты",k_h:"Приходите к нам",k_p:"Есть вопросы? Позвоните или приходите лично.",
k1:"Адрес",k1b:"г. Термез, массив Фарован, 1-й квартал, дом 4 «Б»",k1c:"Ориентир: за свадебным залом «Шохсарой»",k2:"Телефон",
k3:"Написать в Telegram",k4:"Время работы",k4b:"Пн–Пт 7:30–18:00, Сб 7:30–14:00",k5:"Наш Instagram",map_btn:"Открыть в Google Maps",foot:"Термез, Узбекистан"},
en:{logo_sub:"Kindergarten",n_about:"About",n_prog:"Clubs",n_gal:"Gallery",n_hours:"Hours",n_contact:"Contact",
kind:"Private pre-school organisation",h1a:"Childhood — the first step",h1b:"toward discovery",
lead:"Nurli Avlod kindergarten in Termez welcomes children from 1.5 to 7 years old. Uzbek and Russian groups, plus English, Russian, chess, karate, gymnastics and dance clubs.",
call:"Call us",where:"View location",
f1v:"Ages 1.5–7",f1l:"children welcome",f2v:"Uzbek · Russian",f2l:"language groups",f3v:"7:30–18:00",f3l:"Mon–Fri · Saturday until 14:00",f4l:"Google · 14 reviews",
a_eye:"About us",a_h:"A bright, comfortable place for children",
a_p:"Nurli Avlod Kindergarten is in the Farovon neighbourhood of Termez. Our rooms feature bright colours, sky and sea ceiling designs and child-sized furniture.",
t1:"Children aged 1.5 to 7 are welcome",t2:"Uzbek and Russian language groups",t3:"Mon–Fri 7:30–18:00, Sat 7:30–14:00",
s1:"Google rating",s2:"parent reviews",s3:"clubs",
p_eye:"Clubs",p_h:"What we offer at our kindergarten",p_p:"Alongside everyday care, we run extra clubs for the children.",
c1h:"English",c1p:"Children start getting to know English from an early age.",
c2h:"Russian",c2p:"Children learn to speak Russian from an early age.",
c3h:"Chess",c3p:"Builds logical thinking, focus and patience.",
c4h:"Karate",c4p:"Training that builds discipline, strength and self-confidence.",
c5h:"Gymnastics",c5p:"Sessions for movement, flexibility and healthy growth.",
c6h:"Dance",c6p:"Dance classes develop rhythm and graceful movement.",
g_eye:"Gallery",g_h:"Inside our kindergarten",g_p:"Take a look at our rooms.",
g_more:"Show all",g_less:"Show less",g_tp:"Photos",g_tv:"Videos",gt1:"Chess & play room",gt2:"Activity hall",gt3:"Group room",
gt4:"Chess session",gt5:"Chess lesson",gt6:"Active games",gt7:"Building play",gt8:"Celebrations",gt9:"Our courtyard",
vd_v:"views",live_eye:"Latest",live_h:"Daily moments from the kindergarten",live_p:"Our newest videos and photos.",live_more:"Show more",
h_eye:"Opening hours",h_h:"Opening hours",h_p:"Bring your child at a convenient time.",h_k:"Opening hours",h_t:"Weekly schedule",today:"Today",
dn:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],off:"Closed",
r_t:"Based on 14 reviews",r_btn:"Reviews on Google Maps",
k_eye:"Contact",k_h:"Come and visit us",k_p:"Questions? Give us a call or drop by in person.",
k1:"Address",k1b:"Termez, Farovon neighbourhood, block 1, building 4 “B”",k1c:"Landmark: behind Shoxsaroy wedding hall",k2:"Phone",
k3:"Message on Telegram",k4:"Opening hours",k4b:"Mon–Fri 7:30–18:00, Sat 7:30–14:00",k5:"Our Instagram",map_btn:"Open in Google Maps",foot:"Termez, Uzbekistan"}
};
let LANG = 'uz';

/* ---------- language ---------- */
function setLang(l){
  LANG = l; document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const v=T[l][el.dataset.i18n]; if(typeof v==='string') el.textContent=v});
  document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===l));
  renderSchedule();
  try{localStorage.setItem('lang',l)}catch(e){}
}
document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>setLang(b.dataset.l));

/* ---------- schedule (Termiz time) ---------- */
const fmt = m => Math.floor(m/60)+':'+String(m%60).padStart(2,'0');
function todayIdx(){
  try{
    const w = new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Tashkent',weekday:'short'}).format(new Date());
    return ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].indexOf(w)+1;
  }catch(e){return 0}
}
function renderSchedule(){
  const today = todayIdx();
  document.getElementById('rows').innerHTML = [1,2,3,4,5,6,7].map(d=>{
    const r = SCH[d], name = T[LANG].dn[d-1] + (d===today ? `<span class="bd">${T[LANG].today}</span>` : '');
    return `<div class="row${d===today?' today':''}${d===6?' sat':''}${r?'':' off'}" style="--i:${d}"><span class="dn">${name}</span><div class="bt"><i style="--w:${r?((r[1]-450)/630*100):0}%"></i></div><span class="tm">${r?fmt(r[0])+' – '+fmt(r[1]):T[LANG].off}</span></div>`;
  }).join('');
}

/* ---------- header + menu ---------- */
const header = document.querySelector('header'), nav = document.getElementById('nav');
const onScroll = () => header.classList.toggle('scrolled', scrollY > 40);
addEventListener('scroll', onScroll, {passive:true}); onScroll();
document.getElementById('burger').onclick = () => nav.classList.toggle('open');
nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));

/* ---------- hero slideshow ---------- */
const slides = [...document.querySelectorAll('#pslides img')], dots = [...document.querySelectorAll('#dots button')];
let si = 0, timer;
function go(i){
  si = (i + slides.length) % slides.length;
  slides.forEach((s,k)=>s.classList.toggle('on',k===si));
  dots.forEach((d,k)=>{d.classList.remove('on'); if(k===si){void d.offsetWidth; d.classList.add('on')}});
  clearInterval(timer); timer = setInterval(()=>go(si+1), 6000);
}
dots.forEach((d,k)=>d.onclick=()=>go(k));
if(slides.length) go(0);

/* ---------- reveal + counters ---------- */
function count(el){
  const end=parseFloat(el.dataset.count), dec=+el.dataset.dec||0, t0=performance.now(), dur=1600;
  (function f(t){const p=Math.min((t-t0)/dur,1), e=1-Math.pow(1-p,4); el.textContent=(end*e).toFixed(dec); if(p<1) requestAnimationFrame(f)})(t0);
}
const io = new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting) return;
  e.target.classList.add('in');
  e.target.querySelectorAll('[data-count]').forEach(count);
  e.target.querySelectorAll('.stars').forEach(s=>s.classList.add('in'));
  io.unobserve(e.target);
}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ---------- hero parallax on scroll ---------- */
const slidesEl = document.getElementById('slides');
addEventListener('scroll',()=>{ if(scrollY<innerHeight) slidesEl.style.transform=`translateY(${scrollY*.25}px)`; },{passive:true});

/* ---------- spotlight on cards ---------- */
document.querySelectorAll('.club').forEach(c=>c.addEventListener('mousemove',e=>{
  const r=c.getBoundingClientRect(); c.style.setProperty('--mx',(e.clientX-r.left)+'px'); c.style.setProperty('--my',(e.clientY-r.top)+'px');
}));

/* ---------- lightbox ---------- */
const tiles=[...document.querySelectorAll('[data-lb]')], lb=document.getElementById('lb'), lbi=document.getElementById('lbi'); let li=0;
function show(i){li=(i+tiles.length)%tiles.length; const im=tiles[li].querySelector('img'); lbi.src=im.src; lbi.alt=im.alt}
tiles.forEach((t,i)=>t.onclick=()=>{show(i); lb.classList.add('open')});
document.getElementById('lbx').onclick=()=>lb.classList.remove('open');
document.getElementById('lbp').onclick=()=>show(li-1);
document.getElementById('lbn').onclick=()=>show(li+1);
lb.addEventListener('click',e=>{if(e.target===lb) lb.classList.remove('open')});
addEventListener('keydown',e=>{ if(!lb.classList.contains('open')) return;
  if(e.key==='Escape') lb.classList.remove('open'); if(e.key==='ArrowLeft') show(li-1); if(e.key==='ArrowRight') show(li+1)});


/* ---------- photo grid: show 6, expand to all ---------- */
(()=>{const g=document.getElementById('pgrid'), b=document.getElementById('morebtn'); if(!g||!b) return;
  const lab=b.querySelector('span');
  b.onclick=()=>{const o=g.classList.toggle('open'); b.classList.toggle('open',o); lab.dataset.i18n=o?'g_less':'g_more'; lab.textContent=T[LANG][o?'g_less':'g_more']};
})();

/* ---------- gallery tabs: photos / video ---------- */
document.querySelectorAll('.gtab').forEach(b=>b.onclick=()=>{
  const t=b.dataset.tab;
  document.querySelectorAll('.gtab').forEach(x=>{const on=x===b; x.classList.toggle('on',on); x.setAttribute('aria-selected',on)});
  document.getElementById('gp-photo').hidden=(t!=='photo');
  document.getElementById('gp-video').hidden=(t!=='video');
  if(t!=='video'){document.querySelectorAll('.vcard video').forEach(v=>v.pause())}
});

/* ---------- view counters (Cloudflare Worker: /views) ---------- */
const VIEWS_API='https://nurli-media.ulmasoff-d.workers.dev';
const NA_views=(()=>{
  let cache=null;
  const seen=()=>{try{return JSON.parse(localStorage.getItem('seenViews')||'{}')}catch(e){return {}}};
  return {
    load(){ return cache||(cache=fetch(VIEWS_API+'/views',{cache:'no-store'}).then(r=>r.ok?r.json():{}).catch(()=>({}))) },
    /* bir qurilmadan bitta video uchun faqat bir marta sanaladi */
    async bump(id){
      const s=seen(); if(s[id]) return null;
      try{
        const r=await fetch(VIEWS_API+'/views/'+encodeURIComponent(id),{method:'POST'}); if(!r.ok) return null;
        s[id]=1; try{localStorage.setItem('seenViews',JSON.stringify(s))}catch(e){}
        return (await r.json()).count;
      }catch(e){return null}
    }
  };
})();
(async()=>{
  const cards=[...document.querySelectorAll('.vcard')]; if(!cards.length) return;
  const set=(c,n)=>{c.querySelector('.views b').textContent=Number(n||0).toLocaleString(); c.querySelector('.views').hidden=false};
  const all=await NA_views.load();
  cards.forEach(c=>set(c,all[c.dataset.key]));
  cards.forEach(c=>{
    const v=c.querySelector('video');
    v.addEventListener('play',()=>{
      cards.forEach(o=>{const ov=o.querySelector('video'); if(ov!==v) ov.pause()});
      NA_views.bump(c.dataset.key).then(n=>{ if(n!=null) set(c,n) });
    });
  });
})();

/* ---------- init ---------- */
document.getElementById('tg').href = TG_URL; document.getElementById('ig').href = IG_URL;
document.getElementById('yr').textContent = new Date().getFullYear();
let saved='uz'; try{saved=localStorage.getItem('lang')||'uz'}catch(e){}
setLang(T[saved]?saved:'uz');

/* ---------- hero photo card: 3D tilt following the pointer ---------- */
(()=>{const hero=document.querySelector('.hero'),card=document.getElementById('pcard');
 if(!card||matchMedia('(pointer:coarse)').matches)return;
 hero.addEventListener('mousemove',e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  card.style.setProperty('--ry',(x*10).toFixed(2)+'deg');card.style.setProperty('--rx',(-y*8).toFixed(2)+'deg');card.style.setProperty('--tx',(x*-14).toFixed(1)+'px');});
 hero.addEventListener('mouseleave',()=>{card.style.setProperty('--ry','0deg');card.style.setProperty('--rx','0deg');card.style.setProperty('--tx','0px')});
})();
