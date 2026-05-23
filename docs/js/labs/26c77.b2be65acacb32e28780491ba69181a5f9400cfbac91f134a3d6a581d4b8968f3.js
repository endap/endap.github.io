(()=>{var k,r,u,caOut,p,f,s,x,M,R,h,g,O,V,E,b,D,w,L,F,z,I;var G,S,C,P,A,Y,q,a,y,H;function j(){var t="";t+=`# Environment
`,t+=`BFLD 0.0000 0.0000 -2.0000
`,t+=`
`,t+=`# Particle
`,t+=`MASS 0.1000
`,t+=`CHRG 3.1415
`,t+=`DIAM 0.001
`,t+=`POST 0.0159 0.0000 0.0000
`,t+=`VELO 0.0000 1.0000 0.0000
`,t+=`
`,t+=`# Iteration
`,t+=`TBEG 0.0000
`,t+=`TEND 0.1000
`,t+=`TSTP 0.0001
`,t+=`TDAT 0.0020
`,t+=`TPRC 1
`,t+=`
`,t+=`# Coordinates
`,t+=`RMIN -0.020 -0.020 -0.020
`,t+=`RMAX +0.020 +0.020 +0.020
`,t+=`
`,t+=`# Method
`,t+=`CORV 0
`,k=t,w=4}function Z(){W(r),T(k).to(r)}function _(){var t=d("BFLD").from(r),e=d("MASS").from(r),n=d("CHRG").from(r),l=d("DIAM").from(r),m=d("POST").from(r),c=d("VELO").from(r);M=d("TBEG").from(r),R=d("TEND").from(r),h=d("TSTP").from(r),O=d("TDAT").from(r),V=d("TPRC").from(r);var i=d("RMIN").from(r),o=d("RMAX").from(r);H=d("CORV").from(r),b=0,D=Math.floor(O/h),L=i.x,F=i.y,z=i.z,I=o.x,ymax=o.y,G=o.z,g=M,a=new Grain,a.m=e,a.q=n,a.D=l,a.r=m,a.v=c,a.c="#f00",y=new Magnetic,y.setField(t),S=0,C=caOut.width,P=caOut.height,A=0,Y=-1,q=1}function J(id){r=document.createElement("textarea");with(r.style)overflowY="scroll",width="214px",height="200px";u=document.createElement("textarea");with(u.style)overflowY="scroll",width="214px",height="200px";p=document.createElement("button");with(p)innerHTML="Load",id="Load",style.width="55px",disabled=!1,addEventListener("click",buttonClick);f=document.createElement("button");with(f)innerHTML="Read",id="Read",style.width="55px",disabled=!0,addEventListener("click",buttonClick);s=document.createElement("button");with(s)innerHTML="Start",id="Start",style.width="55px",disabled=!0,addEventListener("click",buttonClick);x=document.createElement("button");with(x)innerHTML="Info",id="Info",style.width="55px",disabled=!1,addEventListener("click",buttonClick);caOut=document.createElement("canvas"),caOut.width="439",caOut.height="439";with(caOut.style)width=caOut.width+"px",height=caOut.height+"px";var t=document.createElement("div");with(t.style)width="220px",height="442px",float="left";var e=document.createElement("div");with(e.style)width="442px",height="442px",float="left";let n=document.getElementById(id);n.append(t),t.append(r),t.append(u),t.append(p),t.append(f),t.append(s),t.append(x),n.append(e),e.append(caOut)}function buttonClick(){var t=event.target.id;switch(t){case"Load":f.disabled=!1,Z();break;case"Read":s.disabled=!1,_();break;case"Start":s.innerHTML=="Start"?(p.disabled=!0,f.disabled=!0,x.disabled=!0,s.innerHTML="Stop",E=setInterval(K,V)):(p.disabled=!1,f.disabled=!1,x.disabled=!1,s.innerHTML="Start",clearInterval(E));break;case"Info":var e="";e+=`cppcmf.js
`,e+="Charged particle in perpendicular ",e+=`constant magnetic field
`,e+=`Sparisoma Viridi
`,e+=`https://github.com/dudung/butiran.js
`,e+=`Load  load parameters
`,e+=`Read  read parameters
`,e+=`Start start simulation
`,e+=`Info  show this messages
`,e+=`
`,T(e).to(u);break;default:}}function K(){if(b>=D&&(b=0),g==M&&T(`#t      x       y
`).to(u),b==0){var t=g.toFixed(w),e=a.r.x.toFixed(w),n=a.r.y.toFixed(w),l=t+" "+e+" "+n;T(l+`
`).to(u)}var m=y.force(a),c=m,i=Vect3.div(c,a.m);if(a.v=Vect3.add(a.v,Vect3.mul(i,h)),H!=0){var o=a.q*y.B.len()*h/a.m,v=1/Math.sqrt(1+o*o);a.v=Vect3.mul(a.v,v)}a.r=Vect3.add(a.r,Vect3.mul(a.v,h)),Q(caOut),U(a).onCanvas(caOut),g>=R&&(p.disabled=!1,f.disabled=!1,s.disabled=!0,x.disabled=!1,s.innerHTML="Start",clearInterval(E),T(`
`).to(u)),b++,g+=h}function Q(t){var e=t.width,n=t.height,l=t.getContext("2d");l.clearRect(0,0,e,n)}function U(){var t=arguments[0],e={onCanvas:function(){var n=arguments[0],l=n.getContext("2d"),m=t.r.x,c=m+t.D,i=t.r.y,o=Transformation.linearTransform,v=o(m,[L,I],[S,C]),B=o(c,[L,I],[S,C]),X=B-v,N=o(i,[F,ymax],[P,A]);l.beginPath(),l.strokeStyle=t.c,l.arc(v,N,X,0,2*Math.PI),l.stroke()}};return e}function W(){var t=arguments[0];t.value=""}function T(){var t=arguments[0],e={to:function(){var n=arguments[0];n.value+=t,n.scrollTop=n.scrollHeight}};return e}function d(){var t=arguments[0],e={from:function(){for(var n=arguments[0],l=n.value.split(`
`),m=l.length,c=0;c<m;c++){var i=l[c].split(" "),o=i.length,v;if(i[0].indexOf(t)==0)return o==2?v=parseFloat(i[1]):o==4&&(v=new Vect3(parseFloat(i[1]),parseFloat(i[2]),parseFloat(i[3]))),v}}};return e}function $(t){let e=document.getElementById(t);e.style.border="0px solid red",e.style.marginTop="1em",e.style.marginBottom="1em",e.style.height="450px",j(),J(t)}window._26c77={mount:t=>{$(t)}};console.log("[marker] 26c77.js loaded");})();
