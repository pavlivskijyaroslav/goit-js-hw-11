import{S as c,a as u,i as p}from"./assets/vendor-xwsNXkQR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const l=document.querySelector(".gallery"),n=document.querySelector(".loader");function f(o){const t=o.map(s=>`
<li class="gallery-item">
  <a class="gallery-link" href="${s.largeImageURL}">
    <img 
      class="gallery-image" 
      src="${s.largeImageURL}" 
      alt="${s.tags}" 
    />
        <ul class="stats">
    <li class="stats-item">Likes <p>${s.likes}</p>
    </li>
    <li class="stats-item">Views <p>${s.views}</p>
    </li>
    <li class="stats-item">Comments <p>${s.comments}</p>
    </li>
    <li class="stats-item">Downloads <p>${s.downloads}</p>
    </li>
  </ul>
  </a>
  

</li>
`).join("");l.insertAdjacentHTML("beforeend",t),new c(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function d(){l&&l.children.length>0&&(l.innerHTML="")}function m(){n.style.display="block"}function y(){n.style.display="none"}function g(o){return m(),u.get("https://pixabay.com/api/",{params:{key:"40329359-a15cc1b2c03eb2718994197fd",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21}}).then(t=>{const a=t.data.hits;if(a.length>0)return a;p.show({close:!1,progressBar:!1,timeout:3e3,pauseOnHover:!1,position:"topRight",color:"red",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>{console.log(t)}).finally(()=>{y()})}const h=document.querySelector(".form"),L=document.querySelector("input[name='search-text']");h.addEventListener("submit",o=>{o.preventDefault(),d(),g(L.value).then(t=>f(t))});
//# sourceMappingURL=index.js.map
