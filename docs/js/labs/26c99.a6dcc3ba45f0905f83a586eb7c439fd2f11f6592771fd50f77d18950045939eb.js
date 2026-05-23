(()=>{function r(t,n="320px"){let e=document.getElementById(t);if(!(e instanceof HTMLDivElement))return null;let l={marginTop:"1em",width:n,background:"var(--box-bg)",border:"0 solid var(--border)",display:"flex",height:"180px"};return Object.assign(e.style,l),e}var s=[],a=[];function d(t){let n=t.getBoundingClientRect(),e=window.devicePixelRatio||1;t.width=n.width*e,t.height=n.height*e,t.getContext("2d").scale(e,e)}function u(t,n={}){let e=document.createElement("div");Object.assign(e.style,n);for(let l of t){let o=document.createElement("textarea");o.style.flex="1",o.id=l,o.placeholder=l,o.style.fontFamily="monospace",e.append(o)}return e}function f(t,n={},e=p){let l=document.createElement("div");Object.assign(l.style,n);for(let o of t){let i=document.createElement("button");i.innerHTML=o,i.style.flex="1",l.append(i)}return l.addEventListener("click",o=>{e(o)}),l}function p(t){let n=t.target.closest("button");if(n.innerHTML=="wipe"&&(s[0].value="",s[1].value=""),n.innerHTML=="data"){let e="";e+=`0;0;0;0;0;0;0;0;0;0
`,e+=`0;0;0;0;0;0;0;0;0;0
`,e+=`0;0;0;0;0;0;0;0;0;0
`,e+=`0;0;0;0;1;1;0;0;0;0
`,e+=`0;0;0;1;2;2;1;0;0;0
`,e+=`0;0;0;1;2;2;1;0;0;0
`,e+=`0;0;0;0;1;1;0;0;0;0
`,e+=`0;0;0;0;0;0;0;0;0;0
`,e+=`0;0;0;0;0;0;0;0;0;0
`,e+="0;0;0;0;0;0;0;0;0;0",s[0].value=e}if(n.innerHTML=="read"){let e=s[0].value.split(`
`);a=[];for(let l of e){let o=[],i=l.split(";");for(let c of i)o.push(parseInt(c));a.push(o)}s[1].value=a.map(l=>l.join(" ")).join(`
`)}n.innerHTML=="exec"}function x(){let t=document.createElement("div"),l=u(["agents-input","agents-output"],{display:"flex",flexDirection:"row",border:"0px solid magenta"});s=l.querySelectorAll("textarea");let c=f(["wipe","data","read","exec"],{display:"flex",flexDirection:"row",width:"100%",border:"0px solid cyan"});return t.style.display="flex",t.style.flexDirection="column",t.style.border="1px solid var(--border)",t.append(l),t.append(c),l.style.flex="6",c.style.flex="1",t}function y(t){let n=t.querySelectorAll("canvas");for(let e of n)d(e)}function m(t){let n=r(t),e=x();n.append(e),y(e)}window._26c99={mount:t=>{m(t)}};console.log("[marker] 26c99.js loaded");})();
