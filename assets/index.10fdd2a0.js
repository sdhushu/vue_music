import{r as u,o as d,c as f,a as p,b as m,d as _,e as h,B as y,I as v,L as g}from"./vendor.5ee20092.js";const L=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};L();var x=(i,s)=>{const n=i.__vccOpts||i;for(const[r,e]of s)n[r]=e;return n};const O={};function P(i,s){const n=u("router-view");return d(),f(n)}var k=x(O,[["render",P]]);const E="modulepreload",c={},b="./",A=function(s,n){return!n||n.length===0?s():Promise.all(n.map(r=>{if(r=`${b}${r}`,r in c)return;c[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":E,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",l)})})).then(()=>s())},w=p({history:m(),routes:[{path:"/",redirect:"/index"},{path:"/index",name:"index",component:()=>A(()=>import("./index.5d19a7a9.js"),["assets/index.5d19a7a9.js","assets/index.a13f1722.css","assets/vendor.5ee20092.js","assets/vendor.865c0d55.css"])}]});_(k).use(w).use(h()).use(y).use(v).use(g).mount("#app");export{x as _};