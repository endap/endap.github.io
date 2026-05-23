(()=>{function E(t,l="320px"){let e=document.getElementById(t);return e instanceof HTMLDivElement?(Object.assign(e.style,r),e):null}var r={},u=[],y=[],C=[],h=[],b=[];function M(t,l={}){let e=document.createElement("div");e.className="panel",Object.assign(e.style,l);let n=document.createElement("canvas");return n.id=t,n.style.width="100%",n.style.height="100%",n.style.border="0px solid blue",n.style.display="block",e.append(n),e}function T(t){let l=t.getBoundingClientRect(),e=window.devicePixelRatio||1;t.width=l.width*e,t.height=l.height*e,t.getContext("2d").scale(e,e)}function v(t){let l=document.getElementById(t);if(!(l instanceof HTMLCanvasElement))return null;let e=l.getBoundingClientRect(),n=e.width,o=e.height;l.getContext("2d").clearRect(0,0,n,o)}function k(t){let l=[];return t==0?l=[1,0]:t==1?l=[1,1]:t==2?l=[0,1]:t==3?l=[-1,1]:t==4?l=[-1,0]:t==5?l=[-1,-1]:t==6?l=[0,-1]:t==7&&(l=[1,-1]),l}function B(t,l,e){let n=[],o,c;for(let i=0;i<8;i++){[o,c]=k(i);let s=t[l+o][e+c];n.push(s)}return n}function H(t){let l=structuredClone(t),e=[],n,o=t.length,c=t[0].length;for(let i=1;i<o-1;i++)for(let s=1;s<c-1;s++){let m=t[i][s],d=B(t,i,s),a=d.reduce((x,O)=>x+O,0),f=Math.min(...d),p=Math.max(...d);(a<8||a>9)&&m==1&&f==0&&p<9&&(console.log(i,s,a),l[i][s]=9)}return l}function I(t,l,e={},n=S){let o=document.createElement("div");o.className="panel",Object.assign(o.style,e);let c=0;for(let i of t){let s=document.createElement("button");s.id=i,s.disabled=!l[c],s.innerHTML=i,s.style.flex="1",o.append(s),c+=1}return o.addEventListener("click",i=>{n(i)}),o}function g(t,l){let e=document.getElementById(t);e.disabled=!l}function S(t){let l=t.target.closest("button");if(l.innerHTML=="wipe"&&(u[0].value="",u[1].value="",v("can-output"),g("read",!1),g("exec",!1)),l.innerHTML=="data"){let e="";e+=`# palette
`,e+=`NUMC 10
`,e+=`COL0 #888
`,e+=`COL1 #f22
`,e+=`COL2 #f33
`,e+=`COL3 #f44
`,e+=`COL4 #f55
`,e+=`COL5 #f66
`,e+=`COL6 #f77
`,e+=`COL7 #f88
`,e+=`COL8 #f99
`,e+="COL9 #faa",u[0].value=e;let n="";n+=`9;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0
`,n+=`9;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0
`,n+=`1;9;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0
`,n+=`1;9;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0
`,n+=`1;1;9;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0
`,n+=`1;1;1;9;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0
`,n+=`1;1;1;1;9;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0
`,n+=`1;1;1;1;1;9;9;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0
`,n+=`1;1;1;1;1;1;1;9;9;9;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0
`,n+=`1;1;1;1;1;1;1;1;1;1;9;9;9;9;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0
`,n+=`1;1;1;1;1;1;1;1;1;1;1;1;1;1;9;9;9;9;0;0;0;0;0;0;0;0;0;0;0;0;0;9;9;0;0;0;0;0;9;9
`,n+=`1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;9;0;0;0;0;0;0;0;0;0;0;9;9;1;1;1;0;0;0;1;1;1
`,n+=`1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;9;9;9;0;0;0;0;0;0;9;1;1;1;1;1;1;1;1;1;1;1
`,n+=`1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;9;9;0;0;0;0;9;1;1;1;1;1;1;1;1;1;1;1;1
`,n+=`1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;9;9;9;9;9;1;1;1;1;1;1;1;1;1;1;1;1;1
`,n+=`1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1
`,n+=`1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1
`,n+=`1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1
`,n+=`1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1
`,n+="1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1",u[1].value=n,u[1].style.whiteSpace="pre",u[1].style.overflowX="auto",g("read",!0)}if(l.innerHTML=="read"){let e=u[1].value.split(`
`);y=[];for(let n of e){let o=[],c=n.split(";");for(let i of c)o.push(parseInt(i));y.push(o)}h=structuredClone(y),P("params-input"),v("can-output"),w("can-output",h),g("exec",!0)}if(l.innerHTML=="exec"&&(C=H(h),v("can-output"),w("can-output",C),h=structuredClone(C)),l.innerHTML=="info"){alert("mockup-t4 v0.1");let e=!1;for(;!e;)e=confirm("Do you want to continue?");let n=prompt("Who are you?","Guest");alert("Welcome, "+n)}l.innerHTML=="none"}function P(t){let l=document.getElementById(t);if(!(l instanceof HTMLTextAreaElement))return null;let e=l.value.split(`
`),n=0;for(let o of e)o.indexOf("NUMC")==0&&(n=parseInt(o.split(" ")[1]));if(n==0)return null;b=[],j=0;for(let o=0;o<e.length;o++)e[o].indexOf("COL"+j)==0&&(b.push(e[o].split(" ")[1]),j+=1)}function w(t,l){let e=document.getElementById(t);if(!(e instanceof HTMLCanvasElement))return null;let n=e.getBoundingClientRect(),o=n.width,c=n.height,i=l.length,s=l[0].length,m=o/s,d=c/i,a=e.getContext("2d");for(let f=0;f<i;f++)for(let p=0;p<s;p++){let x=l[f][p];x>0&&(a.beginPath(),a.fillStyle=b[x],a.rect(p*m,f*d,m,d),a.fill()),a.beginPath(),a.lineWidth="0.2",a.strokeStyle="#888",a.rect(p*m,f*d,m,d),a.stroke()}}function D(t,l={}){let e=document.createElement("div");e.className="panel",Object.assign(e.style,l);for(let n of t){let o=document.createElement("textarea");o.id=n,o.placeholder=n,o.style.flex="1",o.style.fontFamily="monospace",o.style.fontSize="9px",o.style.border="1px solid var(--muted-border)",e.append(o)}return e}function L(t,l,e){let n=t.querySelectorAll(l),o=Math.min(n.length,e.length);for(let c=0;c<o;c++)n[c].style.flex=e[c]}function N(){let t=document.createElement("div");r={border:"0px solid #f44",height:"100%",display:"flex",flexDirection:"column"},Object.assign(t.style,r),r={display:"flex",flexDirection:"row"};let e=D(["params-input","agents-input"],r);L(e,"textarea",[1,2.75]),u=e.querySelectorAll("textarea"),r={display:"flex",flexDirection:"row"};let c=I(["wipe","data","read","exec","none","info"],[!0,!0,!1,!1,!1,!0],r);r={flex:"1",display:"flex",flexDirection:"row",minHeight:"0",border:"1px solid var(--muted-border)"};let s=M("can-output",r);return t.append(e),t.append(c),t.append(s),L(t,"div.panel",[5,1,6]),t}function A(t){let l=t.querySelectorAll("canvas");for(let e of l)T(e)}function R(t){r={marginTop:"1em",width:"320px",height:"300px",display:"flex",flexDirection:"column",background:"var(--box-bg)",border:"0 solid var(--border)"};let l=E(t,r),e=N();l.append(e),A(e)}window._26ca7={mount:t=>{R(t)}};console.log("[marker] 26ca7.js loaded");})();
