(()=>{var G,v,o,caOut,x,h,u,b,L,V,M,k,R,U,w;var W,I,S,E,P,$,q,B,N,g,Z,O,C,T,F;function t0(){var t="";t+=`# Step
`,t+=`SSTP 0.0100
`,t+=`
`,t+=`# Iteration
`,t+=`TPRC 100
`,t+=`
`,t+=`# Coordinates
`,t+=`RORG 2 1 1
`,t+=`RMIN -1 -1 -1
`,t+=`RMAX 21 21 21
`,t+=`
`,t+=`# Segments
`,t+=`0.0000 0.0000 15.000 #f00
`,t+=`0.0000 0.2500 3.1416 #00f
`,t+=`0.2500 0.2500 9.0000 #f00
`,t+=`0.2500 0.3750 3.1416 #00f
`,t+=`0.3750 0.3750 4.0000 #f00
`,t+=`0.3750 0.5000 4.7124 #00f
`,t+=`0.5000 0.5000 2.0000 #f00
`,t+=`0.5000 0.7500 3.1416 #00f
`,t+=`0.7500 0.7500 7.0000 #f00
`,t+=`0.7500 1.0000 1.5708 #00f
`,t+=`0.0000 0.0000 4.0000 #f00
`,t+=`0.0000 -0.250 3.1416 #00f
`,t+=`-0.250 -0.250 4.0000 #f00
`,t+=`-0.250 -0.500 1.5708 #00f
`,t+=`-0.500 -0.500 8.0000 #f00
`,t+=`0.5000 0.0000 6.2832 #00f
`,t+=`0.0000 0.2500 1.5708 #f00
`,t+=`0.2500 0.2500 9.5000 #00f
`,t+=`0.2500 0.7500 7.5398 #f00
`,t+=`0.7500 0.7500 3.0000 #00f
`,t+=`0.7500 1.0000 1.5708 #f00
`,t+=`0.0000 -0.500 3.1416 #00f
`,t+=`0.5000 0.7500 1.5708 #f00
`,t+=`0.7500 0.7500 3.0000 #00f
`,t+=`0.7500 0.7500 4.9000 #f00
`,t+=`0.7500 1.0000 1.5708 #00f
`,G=t,M=4}function e0(){o0(v),c(G).to(v)}function a0(){L=y("SSTP").from(v),N=y("TPRC").from(v);var t=y("RMIN").from(v),e=y("RMAX").from(v),a=y("RORG").from(v);k=t.x,R=t.y,U=t.z,w=e.x,ymax=e.y,W=e.z,I=0,S=caOut.width,E=caOut.height,P=0,$=-1,q=1,V=n0("# Segments").from(v),g=0,Z=V.length,O=a.x,C=a.y,T=[],F=[]}function n0(){var t=arguments[0],e={from:function(){for(var a=arguments[0],n=a.value.split(`
`),d=n.length,f=-1,s=-1,r=0;r<d;r++)n[r].indexOf(t)==0&&(f=r+1),n[r].length==0&&r>f&&(s=r-1);for(var l=[],r=f;r<=s;r++){var m=n[r].split(" "),H=new Path(parseFloat(m[0]),parseFloat(m[1]),parseFloat(m[2]),m[3]);l.push(H)}return l}};return e}function r0(id){v=document.createElement("textarea");with(v.style)overflowY="scroll",width="214px",height="200px";o=document.createElement("textarea");with(o.style)overflowY="scroll",width="214px",height="200px";x=document.createElement("button");with(x)innerHTML="Load",id="Load",style.width="55px",disabled=!1,addEventListener("click",buttonClick);h=document.createElement("button");with(h)innerHTML="Read",id="Read",style.width="55px",disabled=!0,addEventListener("click",buttonClick);u=document.createElement("button");with(u)innerHTML="Start",id="Start",style.width="55px",disabled=!0,addEventListener("click",buttonClick);b=document.createElement("button");with(b)innerHTML="Info",id="Info",style.width="55px",disabled=!1,addEventListener("click",buttonClick);caOut=document.createElement("canvas"),caOut.width="439",caOut.height="439";with(caOut.style)width=caOut.width+"px",height=caOut.height+"px";var t=document.createElement("div");with(t.style)width="220px",height="442px",float="left";var e=document.createElement("div");with(e.style)width="442px",height="442px",float="left";let a=document.getElementById(id);a.append(t),t.append(v),t.append(o),t.append(x),t.append(h),t.append(u),t.append(b),a.append(e),e.append(caOut)}function buttonClick(){var t=event.target.id;switch(t){case"Load":h.disabled=!1,e0();break;case"Read":u.disabled=!1,a0();break;case"Start":u.innerHTML=="Start"?(x.disabled=!0,h.disabled=!0,b.disabled=!0,u.innerHTML="Stop",B=setInterval(i0,N)):(x.disabled=!1,h.disabled=!1,b.disabled=!1,u.innerHTML="Start",clearInterval(B));break;case"Info":var e="";e+=`scspg.js
`,e+=`Semi-circle segmented path generator
`,e+=`Sparisoma Viridi
`,e+=`https://github.com/dudung/butiran.js
`,e+=`Load  load parameters
`,e+=`Read  read parameters
`,e+=`Start start generation
`,e+=`Info  show this messages
`,e+=`
`,c(e).to(o);break;default:}}function i0(){if(g==0&&(l0(caOut),c(`#s
`).to(o)),c(g+" ").to(o),s0(V[g]).onCanvas(caOut),g>=Z-1){x.disabled=!1,h.disabled=!1,u.disabled=!0,b.disabled=!1,u.innerHTML="Start",clearInterval(B),c(`

`).to(o);var t=T.length;c(`#x      y
`).to(o);for(var e=0;e<2;e++){var a="";a+=T[e].toFixed(M)+" ",a+=F[e].toFixed(M)+`
`,c(a).to(o)}c(`..
`).to(o);for(var e=t-2;e<t;e++){var a="";a+=T[e].toFixed(M)+" ",a+=F[e].toFixed(M)+`
`,c(a).to(o)}c("Lines = "+t+`
`).to(o),c(`
`).to(o)}g++}function l0(t){var e=t.width,a=t.height,n=t.getContext("2d");n.clearRect(0,0,e,a)}function s0(){var t=arguments[0],e={onCanvas:function(){var a=arguments[0],n=a.getContext("2d"),d=Transformation.linearTransform;if(t instanceof Grain){var f=t.r.x,s=f+t.D,r=t.r.y,l=d(f,[k,w],[I,S]),m=d(s,[k,w],[I,S]),H=m-l,p=d(r,[R,ymax],[E,P]);n.beginPath(),n.strokeStyle=t.c,n.arc(l,p,H,0,2*Math.PI),n.stroke()}else if(t instanceof Path){var j=t.qi*2*Math.PI,D=t.qf*2*Math.PI,_=t.l,J=t.c,X=Math.floor(_/L),Y=j,K=(D-j)/X,z=[],A=[];for(i=0;i<X;i++){var s=L*Math.cos(Y);O+=s,z.push(O),T.push(O);var Q=L*Math.sin(Y);C+=Q,A.push(C),F.push(C),Y+=K}for(n.beginPath(),n.strokeStyle=J,i=0;i<X;i++){var l=d(z[i],[k,w],[I,S]),p=d(A[i],[R,ymax],[E,P]);i==0?n.moveTo(l,p):n.lineTo(l,p)}n.stroke(),n.beginPath();var l=d(z[0],[k,w],[I,S]),p=d(A[0],[R,ymax],[E,P]);n.strokeStyle="#880",n.arc(l,p,3,0,2*Math.PI),n.stroke()}}};return e}function o0(){var t=arguments[0];t.value=""}function c(){var t=arguments[0],e={to:function(){var a=arguments[0];a.value+=t,a.scrollTop=a.scrollHeight}};return e}function y(){var t=arguments[0],e={from:function(){for(var a=arguments[0],n=a.value.split(`
`),d=n.length,f=0;f<d;f++){var s=n[f].split(" "),r=s.length,l;if(s[0].indexOf(t)==0)return r==2?l=parseFloat(s[1]):r==4&&(l=new Vect3(parseFloat(s[1]),parseFloat(s[2]),parseFloat(s[3]))),l}}};return e}function d0(t){let e=document.getElementById(t);e.style.border="0px solid red",e.style.marginTop="1em",e.style.marginBottom="1em",e.style.height="450px",t0(),r0(t)}window._26c76={mount:t=>{d0(t)}};console.log("[marker] 26c76.js loaded");})();
