import{a as u,i,S as p}from"./assets/vendor-DzBlEn4a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();function f(s){return u.get("https://pixabay.com/api/",{params:{key:"40329359-a15cc1b2c03eb2718994197fd",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21}}).then(r=>{const e=r.data.hits;return!e||e.length===0?(i.error({close:!1,progressBar:!1,timeout:3e3,pauseOnHover:!1,position:"topRight",color:"red",message:"Sorry, there are no images matching your search query. Please try again!"}),[]):e}).catch(r=>(console.log(r),i.error({close:!1,progressBar:!1,timeout:3e3,pauseOnHover:!1,position:"topRight",message:"Something went wrong. Please try again later."}),[]))}const a=document.querySelector(".gallery"),c=document.querySelector(".loader"),m=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function g(s){const r=s.map(e=>`
<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img 
      class="gallery-image" 
      src="${e.largeImageURL}" 
      alt="${e.tags}" 
    />
        <ul class="stats">
    <li class="stats-item">Likes <p>${e.likes}</p>
    </li>
    <li class="stats-item">Views <p>${e.views}</p>
    </li>
    <li class="stats-item">Comments <p>${e.comments}</p>
    </li>
    <li class="stats-item">Downloads <p>${e.downloads}</p>
    </li>
  </ul>
  </a>
  

</li>
`).join("");a.insertAdjacentHTML("beforeend",r),m.refresh()}function d(){a&&a.children.length>0&&(a.innerHTML="")}function y(){c.style.display="block"}function h(){c.style.display="none"}const L=document.querySelector(".form"),w=document.querySelector("input[name='search-text']");L.addEventListener("submit",s=>{s.preventDefault(),d();const r=w.value.trim();if(!r){i.warning({close:!1,progressBar:!1,timeout:3e3,pauseOnHover:!1,position:"topRight",color:"yellow",message:"Enter text to search for"});return}y(),f(r).then(e=>{e&&e.length>0&&g(e)}).catch(e=>{i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(e)}).finally(()=>{h()})});
//# sourceMappingURL=index.js.map
