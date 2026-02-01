import{a as f,S as m,i}from"./assets/vendor-Z6SuAarM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="54467062-45bd0bb5918e793a50a570a2d",y="https://pixabay.com/api/";async function h(o){try{const t={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};return(await f.get(y,{params:t})).data}catch(t){throw console.error("Error fetching images:",t),t}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const t=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:a,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${s}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p>Likes: <span class="title">${r}</span></p>
          <p>Views: <span class="title">${a}</span></p>
          <p>Comments: <span class="title">${u}</span></p>
          <p>Downloads: <span class="title">${d}</span></p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),L.refresh()}function w(){c.innerHTML=""}function v(){l.classList.add("visible")}function S(){l.classList.remove("visible")}const p=document.querySelector(".form"),q=p.elements["search-text"];p.addEventListener("submit",async o=>{o.preventDefault();const t=q.value.trim();if(!t){i.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}w(),v();try{const s=await h(t);if(s.hits.length===0){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S()}});
//# sourceMappingURL=index.js.map
