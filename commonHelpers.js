import{S as u,i as f}from"./assets/vendor-b609e793.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="45040943-e695a2a5e7ee0373bf96f3099",p="https://pixabay.com/api/";async function d(s,t=1,o=12){const n=`${p}?key=${m}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${o}`,e=await fetch(n);if(!e.ok)throw new Error(`An error occurred: ${e.statusText}`);return await e.json()}let a;function y(s){const t=document.querySelector(".gallery"),o=s.map(n=>h(n)).join("");t.innerHTML=o,a?a.refresh():a=new u(".gallery a")}function h({webformatURL:s,largeImageURL:t,tags:o,likes:n,views:e,comments:r,downloads:i}){return`
    <a href="${t}" class="gallery__item">
      <img src="${s}" alt="${o}" loading="lazy" />
      <div class="info">
        <p class="info-item"><b>Likes</b> ${n}</p>
        <p class="info-item"><b>Views</b> ${e}</p>
        <p class="info-item"><b>Comments</b> ${r}</p>
        <p class="info-item"><b>Downloads</b> ${i}</p>
      </div>
    </a>
  `}function c(s){f.error({title:"Error",message:s,position:"topRight"})}const g=document.querySelector("#search-form"),b=document.querySelector("#search-input"),$=document.querySelector(".gallery"),l=document.querySelector("#loader");g.addEventListener("submit",async s=>{s.preventDefault();const t=b.value.trim();if(t===""){c("Please enter a search term");return}$.innerHTML="",l.style.display="block";try{const o=await d(t);o.hits.length===0?c("Sorry, there are no images matching your search query. Please try again!"):y(o.hits)}catch(o){c(o.message)}finally{l.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
