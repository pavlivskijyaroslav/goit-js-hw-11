import{S as n,a as u,i as p}from"./assets/vendor-xwsNXkQR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const a=document.querySelector(".gallery"),c=document.querySelector(".loader");function f(o){const r=o.map(t=>`
<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img 
      class="gallery-image" 
      src="${t.largeImageURL}" 
      alt="${t.tags}" 
    />
        <ul class="stats">
    <li class="stats-item">Likes <p>${t.likes}</p>
    </li>
    <li class="stats-item">Views <p>${t.views}</p>
    </li>
    <li class="stats-item">Comments <p>${t.comments}</p>
    </li>
    <li class="stats-item">Downloads <p>${t.downloads}</p>
    </li>
  </ul>
  </a>
  

</li>
`).join("");a.insertAdjacentHTML("beforeend",r),new n(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),n.refresh()}function d(){a&&a.children.length>0&&(a.innerHTML="")}function m(){c.style.display="block"}function y(){c.style.display="none"}function g(o){return m(),u.get("https://pixabay.com/api/",{params:{key:"40329359-a15cc1b2c03eb2718994197fd",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21}}).then(r=>{const t=r.data.hits;if(t.length>0)return t;p.show({close:!1,progressBar:!1,timeout:3e3,pauseOnHover:!1,position:"topRight",color:"red",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>{console.log(r)}).finally(()=>{y()})}const h=document.querySelector(".form"),L=document.querySelector("input[name='search-text']");h.addEventListener("submit",o=>{o.preventDefault(),d(),g(L.value).then(r=>f(r))});
//# sourceMappingURL=index.js.map
