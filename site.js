'use strict';
const themeButton=document.querySelector('#theme');
function themeLabel(){const dark=document.documentElement.dataset.theme==='dark';themeButton.querySelector('span').textContent=dark?'Light':'Dark';themeButton.setAttribute('aria-label','Switch to '+(dark?'light':'dark')+' theme');}
themeButton.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;try{localStorage.setItem('fedwam-theme',next)}catch(e){}themeLabel();});
themeLabel();
document.querySelectorAll('video').forEach(video=>video.addEventListener('play',()=>document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause();})));
