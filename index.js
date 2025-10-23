import{a as u,i as l,S as p}from"./assets/vendor-DzBlEn4a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function f(a){return u.get("https://pixabay.com/api/",{params:{key:"40329359-a15cc1b2c03eb2718994197fd",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21}}).then(t=>{const r=t.data.hits;return!r||r.length===0?(l.error({close:!1,progressBar:!1,timeout:3e3,pauseOnHover:!1,position:"topRight",color:"red",message:"Sorry, there are no images matching your search query. Please try again!"}),[]):r}).catch(t=>(console.log(t),l.error({close:!1,progressBar:!1,timeout:3e3,pauseOnHover:!1,position:"topRight",message:"Something went wrong. Please try again later."}),[]))}const i=document.querySelector(".gallery"),c=document.querySelector(".loader");function m(a){const t=a.map(s=>`
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
`).join("");i.insertAdjacentHTML("beforeend",t),new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function g(){i&&i.children.length>0&&(i.innerHTML="")}function d(){c.style.display="block"}function y(){c.style.display="none"}const h=document.querySelector(".form"),L=document.querySelector("input[name='search-text']");h.addEventListener("submit",a=>{a.preventDefault(),g();const t=L.value.trim();if(!t){l.warning({close:!1,progressBar:!1,timeout:3e3,pauseOnHover:!1,position:"topRight",color:"yellow",message:"Enter text to search for"});return}d(),f(t).then(r=>{r&&r.length>0&&m(r)}).catch(r=>{l.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(r)}).finally(()=>{y()})});
//# sourceMappingURL=index.js.map
