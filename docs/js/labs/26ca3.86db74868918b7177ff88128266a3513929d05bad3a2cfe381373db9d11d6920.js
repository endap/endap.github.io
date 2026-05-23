(()=>{function f(n,l="320px"){let e=document.getElementById(n);return e instanceof HTMLDivElement?(Object.assign(e.style,a),e):null}var a={},c=[],r=[];var s=[];function p(n){let l=n.getBoundingClientRect(),e=window.devicePixelRatio||1;n.width=l.width*e,n.height=l.height*e,n.getContext("2d").scale(e,e)}function x(n,l={},e=g){let t=document.createElement("div");t.className="panel",Object.assign(t.style,l);for(let o of n){let i=document.createElement("button");i.innerHTML=o,i.style.flex="1",t.append(i)}return t.addEventListener("click",o=>{e(o)}),t}function g(n){let l=n.target.closest("button");if(l.innerHTML=="wipe"&&(c[0].value="",c[1].value=""),l.innerHTML=="data"){let e="";e+=`# cell types
`,e+=`VOID 0
`,e+=`ENDO 1
`,e+="EDGE 2",c[0].value=e;let t="";t+=`0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0
`,t+=`0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0
`,t+=`0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0
`,t+=`2;2;2;2;2;2;0;0;0;0;0;0;0;0;2;2;2;2;2;2
`,t+=`1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1
`,t+=`1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1
`,t+=`2;2;2;2;0;0;0;0;2;2;2;2;0;0;0;0;2;2;2;2
`,t+=`0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0
`,t+=`0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0
`,t+="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0",c[1].value=t}if(l.innerHTML=="read"){let e=c[1].value.split(`
`);r=[];for(let t of e){let o=[],i=t.split(";");for(let u of i)o.push(parseInt(u));r.push(o)}s=structuredClone(r),console.log(s)}l.innerHTML=="exec"}function m(n,l={}){let e=document.createElement("div");e.className="panel",Object.assign(e.style,l);for(let t of n){let o=document.createElement("textarea");o.id=t,o.placeholder=t,o.style.flex="1",o.style.fontFamily="monospace",o.style.fontSize="9px",e.append(o)}return e}function d(n,l,e){let t=n.querySelectorAll(l),o=Math.min(t.length,e.length);for(let i=0;i<o;i++)t[i].style.flex=e[i]}function h(){let n=document.createElement("div");a={border:"0px solid #f44",height:"100%",display:"flex",flexDirection:"column"},Object.assign(n.style,a),a={display:"flex",flexDirection:"row"};let e=m(["params-input","agents-input"],a);d(e,"textarea",[1,3]),c=e.querySelectorAll("textarea"),a={display:"flex",flexDirection:"row"};let o=x(["wipe","data","read","exec"],a);return n.append(e),n.append(o),d(n,"div.panel",[6,1]),n}function y(n){let l=n.querySelectorAll("canvas");for(let e of l)p(e)}function v(n){a={marginTop:"1em",width:"320px",height:"150px",display:"flex",flexDirection:"column",background:"var(--box-bg)",border:"0 solid var(--border)"};let l=f(n,a),e=h();l.append(e),y(e)}window._26ca3={mount:n=>{v(n)}};console.log("[marker] 26ca3.js loaded");})();
