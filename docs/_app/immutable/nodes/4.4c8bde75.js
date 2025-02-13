import{s as Ie,f as D,a as I,l as le,g as C,h as E,c as V,d,m as ne,j as k,i as B,K as p,p as Ve,M as he,e as _e,I as Pe,n as je}from"../chunks/scheduler.12722033.js";import{S as ye,i as Se,b as L,d as M,m as P,a as v,t as w,e as j,g as ae,c as se}from"../chunks/index.13a1735a.js";import{g as oe,e as Q,U as Z,u as Be,a as Ne}from"../chunks/UIcon.4b508957.js";import{c as Ue,g as ve}from"../chunks/app.04dd5e7c.js";import{C as qe}from"../chunks/Card.12e304f5.js";import{C as Ae}from"../chunks/CardLogo.c21ec201.js";import{C as Fe,a as Ye}from"../chunks/ChipIcon.4d169112.js";import"../chunks/paths.1698b0c3.js";import{C as ze}from"../chunks/Chip.cbbc2694.js";import{C as xe}from"../chunks/CardDivider.3d7b1704.js";import{S as He}from"../chunks/SearchPage.8ed10771.js";import{t as Ke,i as pe}from"../chunks/experience.4ace5dd3.js";import{i as Re}from"../chunks/index.95983337.js";function be(i,t,r){const e=i.slice();return e[6]=t[r],e}function we(i,t,r){const e=i.slice();return e[9]=t[r],e}function Te(i){let t,r,e,l=i[9].label+"",o,c,f;return t=new Z({props:{icon:i[9].icon}}),{c(){L(t.$$.fragment),r=I(),e=D("span"),o=le(l),c=I(),this.h()},l(a){M(t.$$.fragment,a),r=V(a),e=C(a,"SPAN",{class:!0});var n=E(e);o=ne(n,l),n.forEach(d),c=V(a),this.h()},h(){k(e,"class","m-l-1")},m(a,n){P(t,a,n),B(a,r,n),B(a,e,n),p(e,o),B(a,c,n),f=!0},p(a,n){const m={};n&2&&(m.icon=a[9].icon),t.$set(m),(!f||n&2)&&l!==(l=a[9].label+"")&&Ve(o,l)},i(a){f||(v(t.$$.fragment,a),f=!0)},o(a){w(t.$$.fragment,a),f=!1},d(a){a&&(d(r),d(e),d(c)),j(t,a)}}}function ke(i){let t,r;return t=new ze({props:{$$slots:{default:[Te]},$$scope:{ctx:i}}}),{c(){L(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){P(t,e,l),r=!0},p(e,l){const o={};l&4098&&(o.$$scope={dirty:l,ctx:e}),t.$set(o)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function De(i){let t,r;return t=new Ye({props:{logo:oe(i[6].logo),name:i[6].name}}),{c(){L(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){P(t,e,l),r=!0},p(e,l){const o={};l&1&&(o.logo=oe(e[6].logo)),l&1&&(o.name=e[6].name),t.$set(o)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function Ge(i){let t,r,e,l,o,c,f,a,n,m,g,S,b,y,N,J,F,ie,U,Y,ce,fe,me,z,ue,O,W=i[0].shortDescription+"",ee,$e,H,X;r=new Ae({props:{src:oe(i[0].logo),alt:i[0].company,size:55}}),f=new Fe({props:{title:`${i[0].name}`}});let K=Q(i[1]),h=[];for(let s=0;s<K.length;s+=1)h[s]=ke(we(i,K,s));const Le=s=>w(h[s],1,1,()=>{h[s]=null});b=new Z({props:{icon:"i-carbon-calendar",classes:"text-1.25em"}}),F=new xe({}),Y=new Z({props:{icon:"i-carbon-time",classes:"text-1.25em"}}),z=new xe({});let R=Q(i[0].skills),_=[];for(let s=0;s<R.length;s+=1)_[s]=De(be(i,R,s));const Me=s=>w(_[s],1,1,()=>{_[s]=null});return{c(){t=D("div"),L(r.$$.fragment),e=I(),l=D("div"),o=D("div"),c=D("h3"),L(f.$$.fragment),a=I(),n=D("div");for(let s=0;s<h.length;s+=1)h[s].c();m=I(),g=D("div"),S=D("div"),L(b.$$.fragment),y=I(),N=le(i[3]),J=I(),L(F.$$.fragment),ie=I(),U=D("div"),L(Y.$$.fragment),ce=I(),fe=le(i[2]),me=I(),L(z.$$.fragment),ue=I(),O=D("div"),ee=le(W),$e=I(),H=D("div");for(let s=0;s<_.length;s+=1)_[s].c();this.h()},l(s){t=C(s,"DIV",{class:!0});var $=E(t);M(r.$$.fragment,$),e=V($),l=C($,"DIV",{class:!0});var x=E(l);o=C(x,"DIV",{class:!0});var T=E(o);c=C(T,"H3",{class:!0});var u=E(c);M(f.$$.fragment,u),u.forEach(d),a=V(T),n=C(T,"DIV",{class:!0});var q=E(n);for(let G=0;G<h.length;G+=1)h[G].l(q);q.forEach(d),T.forEach(d),m=V(x),g=C(x,"DIV",{class:!0});var A=E(g);S=C(A,"DIV",{class:!0});var te=E(S);M(b.$$.fragment,te),y=V(te),N=ne(te,i[3]),te.forEach(d),J=V(A),M(F.$$.fragment,A),ie=V(A),U=C(A,"DIV",{class:!0});var re=E(U);M(Y.$$.fragment,re),ce=V(re),fe=ne(re,i[2]),re.forEach(d),me=V(A),M(z.$$.fragment,A),A.forEach(d),ue=V(x),O=C(x,"DIV",{class:!0});var de=E(O);ee=ne(de,W),de.forEach(d),$e=V(x),H=C(x,"DIV",{class:!0});var ge=E(H);for(let G=0;G<_.length;G+=1)_[G].l(ge);ge.forEach(d),x.forEach(d),$.forEach(d),this.h()},h(){k(c,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),k(n,"class","row flex-wrap items-start m-b-2 gap-1 text-0.9em font-300"),k(o,"class","col "),k(S,"class","row items-center gap-2"),k(U,"class","row items-center gap-2"),k(g,"class","text-[var(--text)] text-[0.9em]"),k(O,"class","experience-description text-[0.9em]"),k(H,"class","flex flex-row flex-wrap mt-5"),k(l,"class","col ml-0 md:ml-[20px] gap-3 w-full"),k(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(s,$){B(s,t,$),P(r,t,null),p(t,e),p(t,l),p(l,o),p(o,c),P(f,c,null),p(o,a),p(o,n);for(let x=0;x<h.length;x+=1)h[x]&&h[x].m(n,null);p(l,m),p(l,g),p(g,S),P(b,S,null),p(S,y),p(S,N),p(g,J),P(F,g,null),p(g,ie),p(g,U),P(Y,U,null),p(U,ce),p(U,fe),p(g,me),P(z,g,null),p(l,ue),p(l,O),p(O,ee),p(l,$e),p(l,H);for(let x=0;x<_.length;x+=1)_[x]&&_[x].m(H,null);X=!0},p(s,$){const x={};$&1&&(x.src=oe(s[0].logo)),$&1&&(x.alt=s[0].company),r.$set(x);const T={};if($&1&&(T.title=`${s[0].name}`),f.$set(T),$&2){K=Q(s[1]);let u;for(u=0;u<K.length;u+=1){const q=we(s,K,u);h[u]?(h[u].p(q,$),v(h[u],1)):(h[u]=ke(q),h[u].c(),v(h[u],1),h[u].m(n,null))}for(ae(),u=K.length;u<h.length;u+=1)Le(u);se()}if((!X||$&1)&&W!==(W=s[0].shortDescription+"")&&Ve(ee,W),$&1){R=Q(s[0].skills);let u;for(u=0;u<R.length;u+=1){const q=be(s,R,u);_[u]?(_[u].p(q,$),v(_[u],1)):(_[u]=De(q),_[u].c(),v(_[u],1),_[u].m(H,null))}for(ae(),u=R.length;u<_.length;u+=1)Me(u);se()}},i(s){if(!X){v(r.$$.fragment,s),v(f.$$.fragment,s);for(let $=0;$<K.length;$+=1)v(h[$]);v(b.$$.fragment,s),v(F.$$.fragment,s),v(Y.$$.fragment,s),v(z.$$.fragment,s);for(let $=0;$<R.length;$+=1)v(_[$]);X=!0}},o(s){w(r.$$.fragment,s),w(f.$$.fragment,s),h=h.filter(Boolean);for(let $=0;$<h.length;$+=1)w(h[$]);w(b.$$.fragment,s),w(F.$$.fragment,s),w(Y.$$.fragment,s),w(z.$$.fragment,s),_=_.filter(Boolean);for(let $=0;$<_.length;$+=1)w(_[$]);X=!1},d(s){s&&d(t),j(r),j(f),he(h,s),j(b),j(F),j(Y),j(z),he(_,s)}}}function Je(i){let t,r;return t=new qe({props:{margin:"0px 0px 20px 0px",tiltDegree:2,color:i[0].color,$$slots:{default:[Ge]},$$scope:{ctx:i}}}),{c(){L(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){P(t,e,l),r=!0},p(e,[l]){const o={};l&1&&(o.color=e[0].color),l&4099&&(o.$$scope={dirty:l,ctx:e}),t.$set(o)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function Oe(i,t,r){let e,{experience:l}=t;const o=Ue(l.period.from,l.period.to),c=`${ve(l.period.from.getMonth())} ${l.period.from.getFullYear()}`,f=l.period.to?`${ve(l.period.to.getMonth())} ${l.period.to.getFullYear()}`:"Present",a=`${c} - ${f}`;return i.$$set=n=>{"experience"in n&&r(0,l=n.experience)},i.$$.update=()=>{i.$$.dirty&1&&r(1,e=[{label:l.company,icon:"i-carbon-building"},{label:l.location,icon:"i-carbon-location"},{label:l.contract,icon:"i-carbon-hourglass"}])},[l,e,o,a]}class Qe extends ye{constructor(t){super(),Se(this,t,Oe,Je,Ie,{experience:0})}}function Ce(i,t,r){const e=i.slice();return e[2]=t[r],e[4]=r,e}function We(i){let t,r,e=[],l=new Map,o,c,f=Q(i[0]);const a=n=>n[2].slug;for(let n=0;n<f.length;n+=1){let m=Ce(i,f,n),g=a(m);l.set(g,e[n]=Ee(g,m))}return{c(){t=D("div"),r=I();for(let n=0;n<e.length;n+=1)e[n].c();o=_e(),this.h()},l(n){t=C(n,"DIV",{class:!0}),E(t).forEach(d),r=V(n);for(let m=0;m<e.length;m+=1)e[m].l(n);o=_e(),this.h()},h(){k(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(n,m){B(n,t,m),B(n,r,m);for(let g=0;g<e.length;g+=1)e[g]&&e[g].m(n,m);B(n,o,m),c=!0},p(n,m){m&1&&(f=Q(n[0]),ae(),e=Be(e,m,a,1,n,f,l,o.parentNode,Ne,Ee,o,Ce),se())},i(n){if(!c){for(let m=0;m<f.length;m+=1)v(e[m]);c=!0}},o(n){for(let m=0;m<e.length;m+=1)w(e[m]);c=!1},d(n){n&&(d(t),d(r),d(o));for(let m=0;m<e.length;m+=1)e[m].d(n)}}}function Xe(i){let t,r,e,l,o="Could not find anything...",c;return r=new Z({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=D("div"),L(r.$$.fragment),e=I(),l=D("p"),l.textContent=o,this.h()},l(f){t=C(f,"DIV",{class:!0});var a=E(t);M(r.$$.fragment,a),e=V(a),l=C(a,"P",{class:!0,["data-svelte-h"]:!0}),Pe(l)!=="svelte-1jyyf6v"&&(l.textContent=o),a.forEach(d),this.h()},h(){k(l,"class","font-300"),k(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(f,a){B(f,t,a),P(r,t,null),p(t,e),p(t,l),c=!0},p:je,i(f){c||(v(r.$$.fragment,f),c=!0)},o(f){w(r.$$.fragment,f),c=!1},d(f){f&&d(t),j(r)}}}function Ee(i,t){let r,e,l,o,c,f,a,n,m,g,S;return c=new Z({props:{icon:"i-carbon-condition-point",classes:""}}),n=new Qe({props:{experience:t[2]}}),{key:i,first:null,c(){r=D("div"),e=D("div"),l=I(),o=D("div"),L(c.$$.fragment),f=I(),a=D("div"),L(n.$$.fragment),m=I(),this.h()},l(b){r=C(b,"DIV",{class:!0});var y=E(r);e=C(y,"DIV",{class:!0}),E(e).forEach(d),l=V(y),o=C(y,"DIV",{class:!0});var N=E(o);M(c.$$.fragment,N),N.forEach(d),f=V(y),a=C(y,"DIV",{class:!0});var J=E(a);M(n.$$.fragment,J),J.forEach(d),m=V(y),y.forEach(d),this.h()},h(){k(e,"class","flex-1 hidden lg:flex"),k(o,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),k(a,"class","flex-1 col items-stretch"),k(r,"class",g=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(b,y){B(b,r,y),p(r,e),p(r,l),p(r,o),P(c,o,null),p(r,f),p(r,a),P(n,a,null),p(r,m),S=!0},p(b,y){t=b;const N={};y&1&&(N.experience=t[2]),n.$set(N),(!S||y&1&&g!==(g=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&k(r,"class",g)},i(b){S||(v(c.$$.fragment,b),v(n.$$.fragment,b),S=!0)},o(b){w(c.$$.fragment,b),w(n.$$.fragment,b),S=!1},d(b){b&&d(r),j(c),j(n)}}}function Ze(i){let t,r,e,l;const o=[Xe,We],c=[];function f(a,n){return a[0].length===0?0:1}return r=f(i),e=c[r]=o[r](i),{c(){t=D("div"),e.c(),this.h()},l(a){t=C(a,"DIV",{class:!0});var n=E(t);e.l(n),n.forEach(d),this.h()},h(){k(t,"class","col items-center relative mt-10 flex-1")},m(a,n){B(a,t,n),c[r].m(t,null),l=!0},p(a,n){let m=r;r=f(a),r===m?c[r].p(a,n):(ae(),w(c[m],1,1,()=>{c[m]=null}),se(),e=c[r],e?e.p(a,n):(e=c[r]=o[r](a),e.c()),v(e,1),e.m(t,null))},i(a){l||(v(e),l=!0)},o(a){w(e),l=!1},d(a){a&&d(t),c[r].d()}}}function et(i){let t,r;return t=new He({props:{title:Ke,$$slots:{default:[Ze]},$$scope:{ctx:i}}}),t.$on("search",i[1]),{c(){L(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){P(t,e,l),r=!0},p(e,[l]){const o={};l&33&&(o.$$scope={dirty:l,ctx:e}),t.$set(o)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function tt(i,t,r){let e=[...pe];return[e,o=>{const c=o.detail.search;if(Re(c)){r(0,e=pe);return}r(0,e=pe.filter(f=>f.name.toLowerCase().includes(c)||f.company.toLowerCase().includes(c)||f.description.toLowerCase().includes(c)))}]}class dt extends ye{constructor(t){super(),Se(this,t,tt,et,Ie,{})}}export{dt as component};
