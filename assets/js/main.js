'use strict';
const root=document.documentElement, toggle=document.getElementById('theme-toggle'), media=window.matchMedia('(prefers-color-scheme: dark)');
function savedTheme(){try{return localStorage.getItem('portfolio-theme')}catch{return null}}
function setTheme(theme){root.dataset.bsTheme=theme;toggle.textContent=theme==='dark'?'Light mode':'Dark mode';toggle.setAttribute('aria-pressed',String(theme==='dark'))}
setTheme(savedTheme()||(media.matches?'dark':'light'));
toggle.addEventListener('click',()=>{const theme=root.dataset.bsTheme==='dark'?'light':'dark';try{localStorage.setItem('portfolio-theme',theme)}catch{}setTheme(theme)});
media.addEventListener('change',e=>{if(!savedTheme())setTheme(e.matches?'dark':'light')});
const nav=document.getElementById('site-menu');
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(nav.classList.contains('show'))bootstrap.Collapse.getOrCreateInstance(nav,{toggle:false}).hide()}));
// Use the original portrait if copied from the existing website repository.
const photo=document.getElementById('profile-photo'), fallback=document.getElementById('profile-fallback');
photo.addEventListener('load',()=>{photo.hidden=false;fallback.hidden=true;fallback.style.display='none'});
photo.addEventListener('error',()=>{photo.hidden=true});
if(photo.complete&&photo.naturalWidth){photo.hidden=false;fallback.hidden=true;fallback.style.display='none'}
