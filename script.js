// Ancestor Dinner has two distinct presentation moments.
// Opening: before the meal. Closing: near the end of the evening.
const openingSlides = [
 {image:'candles',kicker:'01 · Welcome',title:'Every story begins somewhere.',quote:'Before we became who we are, someone came before us.',notes:''},
 {image:'candle-stories',kicker:'02 · One Candle, One Story',title:'One candle. One story.',quote:'Every life carries a light. Together, our stories shine brighter.',notes:''},
 {image:'wheat',kicker:'03 · Our Roots',title:'Our roots shape our journeys.',quote:'Our journeys may be different, but none of us begins alone.',notes:''},
 {image:'empty-chair',kicker:'04 · The Empty Chair',title:'Their stories still have a place at our table.',quote:'They may not sit beside us, but what they gave us lives on.',notes:''},
 {image:'recipe',kicker:'05 · Traditions',title:'Food is a form of memory.',quote:'Sometimes a recipe carries a story that words cannot tell.',notes:''},
 {image:'heritage',kicker:'06 · Our Cultures',title:'Different traditions. The same love.',quote:'Every dish has a person and a story behind it.',notes:''},
 {image:'community',kicker:'07 · Shared Purpose',title:'We grow stronger together.',quote:'We do not need the same roots to grow together.',notes:''},
 {image:'memory-box',kicker:'08 · The Roots We Carry',title:'A place for the wisdom we carry.',quote:'Write a value, lesson, or memory. Leave it in the Memory Box.',notes:''},
 {image:'welcome',kicker:'09 · Welcome to Dinner',title:'Every story belongs at our table.',quote:'Many Roots. One Table. One Purpose.',notes:''}
];
const closingSlides = [
 {image:'unity-garland',kicker:'Closing · Connected by Our Stories',title:'One bead. One person. One story.',quote:'Different people. Different journeys. One thread.',notes:''}
];
let mode='opening',slideIndex=0;
const byId=id=>document.getElementById(id);
const overlay=byId('presenter');
const slides=()=>mode==='opening'?openingSlides:closingSlides;
function render(){const s=slides()[slideIndex];overlay.classList.toggle('chair-slide',s.image==='empty-chair');byId('slide-visual').style.backgroundImage=`url('images/${s.image}.jpg')`;byId('slide-kicker').textContent=s.kicker;byId('slide-title').textContent=s.title;byId('slide-quote').textContent=s.quote;byId('note-text').textContent=s.notes;byId('progress').textContent=`${mode==='opening'?'Opening':'Closing'} · ${slideIndex+1} / ${slides().length}`;byId('prev').disabled=slideIndex===0;byId('next').textContent=slideIndex===slides().length-1?'Finish':'→'}
function start(which='opening'){mode=which;slideIndex=0;byId('speaker-notes').hidden=true;render();overlay.hidden=false;document.body.style.overflow='hidden';byId('next').focus()}
function close(){overlay.hidden=true;document.body.style.overflow='';if(document.fullscreenElement)document.exitFullscreen()}
byId('start').onclick=()=>start('opening');byId('hero-start').onclick=()=>start('opening');byId('closing-start').onclick=()=>start('closing');byId('garland-start').onclick=()=>start('closing');byId('close').onclick=close;
byId('prev').onclick=()=>{slideIndex=Math.max(0,slideIndex-1);render()};byId('next').onclick=()=>{if(slideIndex===slides().length-1)close();else{slideIndex++;render()}};
byId('notes-toggle').onclick=()=>{byId('speaker-notes').hidden=!byId('speaker-notes').hidden};byId('fullscreen').onclick=()=>{if(!document.fullscreenElement)overlay.requestFullscreen?.();else document.exitFullscreen?.()};
document.addEventListener('keydown',e=>{if(overlay.hidden || e.altKey || e.ctrlKey || e.metaKey)return;if(e.key==='Escape')close();else if(['ArrowRight',' ','PageDown'].includes(e.key)){e.preventDefault();byId('next').click()}else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();byId('prev').click()}});
// Add approved photo filenames to the photos array after placing them in images/gallery/.
const photos=[];const grid=byId('gallery-grid');if(photos.length){grid.replaceChildren();photos.forEach(item=>{const img=document.createElement('img');img.src='images/gallery/'+item.file;img.alt=item.alt||'Ancestor Dinner memory';img.loading='lazy';grid.append(img)})}
