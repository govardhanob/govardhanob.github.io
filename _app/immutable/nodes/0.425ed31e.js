import{s as he,f as g,a as w,g as b,h as k,c as E,I as ee,d as p,j as h,J as T,i as z,K as d,L as U,M as ke,u as we,N as me,l as ve,m as _e,n as pe,O as ue,P as Ee,Q as qe,R as Ie,S as Ve,o as De}from"../chunks/scheduler.12722033.js";import{S as ge,i as be,b as F,d as J,m as K,a as V,g as Ae,c as Ce,t as D,e as O}from"../chunks/index.13a1735a.js";import{U as se,e as te,t as Me}from"../chunks/UIcon.cca98a68.js";import{p as je}from"../chunks/stores.4e13e8f4.js";import"../chunks/SplashScreen.svelte_svelte_type_style_lang.0a242e9f.js";import{b as B}from"../chunks/paths.96448c40.js";const le=[{title:"Skills",to:"/skills",icon:"i-carbon-software-resource-cluster"},{title:"Projects",to:"/projects",icon:"i-carbon-cube"},{title:"Experience",to:"/experience",icon:"i-carbon-development"},{title:"Resumé",to:"/logos/govardhanresume2.pdf",icon:"i-carbon-result"}];function fe(r,t,e){const l=r.slice();return l[8]=t[e],l}function Ne(r,t,e){const l=r.slice();return l[8]=t[e],l}function Se(r,t){let e,l,u,m,c=t[8].title+"",x,f,s;return l=new se({props:{icon:t[8].icon,classes:"text-1.3em"}}),{key:r,first:null,c(){e=g("a"),F(l.$$.fragment),u=w(),m=g("span"),x=ve(c),f=w(),this.h()},l(o){e=b(o,"A",{href:!0,class:!0});var v=k(e);J(l.$$.fragment,v),u=E(v),m=b(v,"SPAN",{class:!0});var $=k(m);x=_e($,c),$.forEach(p),f=E(v),v.forEach(p),this.h()},h(){h(m,"class","nav-menu-item-label svelte-1oqs54l"),h(e,"href",`${B}${t[8].to}`),h(e,"class","nav-menu-item !text-[var(--secondary-text)] svelte-1oqs54l"),this.first=e},m(o,v){z(o,e,v),K(l,e,null),d(e,u),d(e,m),d(m,x),d(e,f),s=!0},p:pe,i(o){s||(V(l.$$.fragment,o),s=!0)},o(o){D(l.$$.fragment,o),s=!1},d(o){o&&p(e),O(l)}}}function de(r){let t,e,l,u,m=r[8].title+"",c,x,f,s,o;return e=new se({props:{icon:r[8].icon,classes:"text-1.3em"}}),{c(){t=g("a"),F(e.$$.fragment),l=w(),u=g("span"),c=ve(m),x=w(),this.h()},l(v){t=b(v,"A",{href:!0,class:!0});var $=k(t);J(e.$$.fragment,$),l=E($),u=b($,"SPAN",{class:!0});var y=k(u);c=_e(y,m),y.forEach(p),x=E($),$.forEach(p),this.h()},h(){h(u,"class",""),h(t,"href",`${B}${r[8].to}`),h(t,"class","nav-menu-item !text-[var(--secondary-text)] gap-5 svelte-1oqs54l")},m(v,$){z(v,t,$),K(e,t,null),d(t,l),d(t,u),d(u,c),d(t,x),f=!0,s||(o=U(t,"click",r[6]),s=!0)},p:pe,i(v){f||(V(e.$$.fragment,v),f=!0)},o(v){D(e.$$.fragment,v),f=!1},d(v){v&&p(t),O(e),s=!1,o()}}}function Le(r){let t,e,l,u,m,c,x="Govardhan",f,s,o="Govardhan",v,$,y=[],$e=new Map,Q,S,L,q,G,W,I,A,X,C,ne="",H,P,Y,ae;u=new se({props:{icon:"i-carbon-code",classes:"text-2em"}});let Z=te(le);const xe=n=>n[8].title;for(let n=0;n<Z.length;n+=1){let i=Ne(r,Z,n),a=xe(i);$e.set(a,y[n]=Se(a,i))}let M=te(le),_=[];for(let n=0;n<M.length;n+=1)_[n]=de(fe(r,M,n));const ye=n=>D(_[n],1,1,()=>{_[n]=null});return{c(){t=g("div"),e=g("nav"),l=g("a"),F(u.$$.fragment),m=w(),c=g("a"),c.textContent=x,f=w(),s=g("a"),s.textContent=o,v=w(),$=g("div");for(let n=0;n<y.length;n+=1)y[n].c();Q=w(),S=g("div"),L=g("div"),q=g("div"),W=w(),I=g("div"),A=g("div");for(let n=0;n<_.length;n+=1)_[n].c();X=w(),C=g("div"),C.innerHTML=ne,this.h()},l(n){t=b(n,"DIV",{class:!0});var i=k(t);e=b(i,"NAV",{class:!0});var a=k(e);l=b(a,"A",{href:!0,class:!0});var j=k(l);J(u.$$.fragment,j),m=E(j),c=b(j,"A",{href:!0,class:!0,["data-svelte-h"]:!0}),ee(c)!=="svelte-1mdh8fo"&&(c.textContent=x),j.forEach(p),f=E(a),s=b(a,"A",{href:!0,class:!0,["data-svelte-h"]:!0}),ee(s)!=="svelte-1acxssl"&&(s.textContent=o),v=E(a),$=b(a,"DIV",{class:!0});var oe=k($);for(let N=0;N<y.length;N+=1)y[N].l(oe);oe.forEach(p),Q=E(a),S=b(a,"DIV",{class:!0});var re=k(S);L=b(re,"DIV",{class:!0});var ie=k(L);q=b(ie,"DIV",{class:!0}),k(q).forEach(p),ie.forEach(p),re.forEach(p),a.forEach(p),W=E(i),I=b(i,"DIV",{class:!0});var R=k(I);A=b(R,"DIV",{class:!0});var ce=k(A);for(let N=0;N<_.length;N+=1)_[N].l(ce);ce.forEach(p),X=E(R),C=b(R,"DIV",{class:!0,["data-svelte-h"]:!0}),ee(C)!=="svelte-1yzhpku"&&(C.innerHTML=ne),R.forEach(p),i.forEach(p),this.h()},h(){h(c,"href",`${B}/`),h(c,"class","ml-2 text-md font-bold hidden md:inline overflow-hidden whitespace-nowrap text-ellipsis svelte-1oqs54l"),h(l,"href",`${B}/`),h(l,"class","nav-menu-left decoration-none w-auto md:w-150px lg:w-auto row flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)] svelte-1oqs54l"),h(s,"href",`${B}/`),h(s,"class","flex-1 block overflow-hidden md:hidden whitespace-nowrap text-ellipsis text-center svelte-1oqs54l"),h($,"class","flex-row flex-1 self-center h-full justify-center hidden md:flex"),h(q,"class",G=T(`nav-bar-mobile-btn col-center ${r[0]?"nav-bar-mobile-btn-expanded":""}`)+" svelte-1oqs54l"),h(L,"class","col-center md:hidden h-full hover:bg-[var(--main-hover)] cursor-pointer"),h(S,"class","row h-full justify-center items-stretch m-l-auto md:m-l-0 w-auto md:w-150px gap-1 text-1.15em"),h(e,"class","container flex flex-row items-center text-sm"),h(A,"class","flex-col flex-1 self-center h-full justify-center m-t-7"),h(C,"class","col gap-2 m-t-7"),h(I,"class",H=T(`nav-menu-mobile ${r[0]?"nav-menu-mobile-open":""} md:hidden`)+" svelte-1oqs54l"),h(t,"class","nav-menu svelte-1oqs54l")},m(n,i){z(n,t,i),d(t,e),d(e,l),K(u,l,null),d(l,m),d(l,c),d(e,f),d(e,s),d(e,v),d(e,$);for(let a=0;a<y.length;a+=1)y[a]&&y[a].m($,null);d(e,Q),d(e,S),d(S,L),d(L,q),d(t,W),d(t,I),d(I,A);for(let a=0;a<_.length;a+=1)_[a]&&_[a].m(A,null);d(I,X),d(I,C),P=!0,Y||(ae=[U(q,"keydown",r[3]),U(q,"keyup",r[4]),U(q,"click",r[5])],Y=!0)},p(n,[i]){if((!P||i&1&&G!==(G=T(`nav-bar-mobile-btn col-center ${n[0]?"nav-bar-mobile-btn-expanded":""}`)+" svelte-1oqs54l"))&&h(q,"class",G),i&2){M=te(le);let a;for(a=0;a<M.length;a+=1){const j=fe(n,M,a);_[a]?(_[a].p(j,i),V(_[a],1)):(_[a]=de(j),_[a].c(),V(_[a],1),_[a].m(A,null))}for(Ae(),a=M.length;a<_.length;a+=1)ye(a);Ce()}(!P||i&1&&H!==(H=T(`nav-menu-mobile ${n[0]?"nav-menu-mobile-open":""} md:hidden`)+" svelte-1oqs54l"))&&h(I,"class",H)},i(n){if(!P){V(u.$$.fragment,n);for(let i=0;i<Z.length;i+=1)V(y[i]);for(let i=0;i<M.length;i+=1)V(_[i]);P=!0}},o(n){D(u.$$.fragment,n);for(let i=0;i<y.length;i+=1)D(y[i]);_=_.filter(Boolean);for(let i=0;i<_.length;i+=1)D(_[i]);P=!1},d(n){n&&p(t),O(u);for(let i=0;i<y.length;i+=1)y[i].d();ke(_,n),Y=!1,we(ae)}}}function Pe(r,t,e){let l;me(r,je,o=>e(2,l=o));let u=!1;const m=o=>{typeof o>"u"?e(0,u=!u):e(0,u=o)};function c(o){ue.call(this,r,o)}function x(o){ue.call(this,r,o)}const f=()=>m(),s=()=>m(!1);return r.$$.update=()=>{r.$$.dirty&4&&l.url.pathname},[u,m,l,c,x,f,s]}class Te extends ge{constructor(t){super(),be(this,t,Pe,Le,he,{})}}function Be(r){let t,e,l,u,m,c;e=new Te({});const x=r[2].default,f=Ee(x,r,r[1],null);return{c(){t=g("div"),F(e.$$.fragment),l=w(),u=g("div"),f&&f.c(),this.h()},l(s){t=b(s,"DIV",{class:!0});var o=k(t);J(e.$$.fragment,o),l=E(o),u=b(o,"DIV",{class:!0});var v=k(u);f&&f.l(v),v.forEach(p),o.forEach(p),this.h()},h(){h(u,"class","content container svelte-mb6t29"),h(t,"class",m=T(`body contents ${r[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29")},m(s,o){z(s,t,o),K(e,t,null),d(t,l),d(t,u),f&&f.m(u,null),c=!0},p(s,[o]){f&&f.p&&(!c||o&2)&&qe(f,x,s,s[1],c?Ve(x,s[1],o,null):Ie(s[1]),null),(!c||o&1&&m!==(m=T(`body contents ${s[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29"))&&h(t,"class",m)},i(s){c||(V(e.$$.fragment,s),V(f,s),c=!0)},o(s){D(e.$$.fragment,s),D(f,s),c=!1},d(s){s&&p(t),O(e),f&&f.d(s)}}}function Ge(r,t,e){let l;me(r,Me,c=>e(0,l=c));let{$$slots:u={},$$scope:m}=t;return De(()=>{const c=document.getElementById("svelte-div");c&&requestAnimationFrame(()=>{setTimeout(()=>{c.style.visibility="visible"},0)})}),r.$$set=c=>{"$$scope"in c&&e(1,m=c.$$scope)},[l,m,u]}class Ke extends ge{constructor(t){super(),be(this,t,Ge,Be,he,{})}}export{Ke as component};
