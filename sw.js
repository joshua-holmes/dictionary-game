if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const o=e=>i(e,n),d={module:{uri:n},exports:c,require:o};s[n]=Promise.all(r.map((e=>d[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/relax.css",revision:"45b01e881481399b14b766f80853039e"},{url:"css/styles_v0.3.8.css",revision:"d1bc503436555e0fd8debb9c878ebc97"},{url:"index.html",revision:"ab8da3e3e9bbc52d4988251847289e6e"},{url:"scripts/confetti.min.js",revision:"79fee218b891df26f940db41627d0977"},{url:"scripts/scripts_v0.3.8.js",revision:"afb81c2ecf6e7b946f12f923d75947aa"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
