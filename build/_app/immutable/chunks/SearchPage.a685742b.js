import{s as d,N as w,W as g,o as S,P,f as b,g as y,h as $,d as m,j as C,i as q,Q as v,R as L,S as R}from"./scheduler.12722033.js";import{S as D,i as E,b as I,d as U,m as W,a as f,t as u,e as j}from"./index.13a1735a.js";import{C as M}from"./CommonPage.02f1afb4.js";import{p as N}from"./stores.ffb8aee0.js";import{b as Q}from"./paths.2783e281.js";function T(n){let t,o;const s=n[4].default,a=P(s,n,n[5],null);return{c(){t=b("div"),a&&a.c(),this.h()},l(e){t=y(e,"DIV",{class:!0});var i=$(t);a&&a.l(i),i.forEach(m),this.h()},h(){C(t,"class","w-100% col flex-1")},m(e,i){q(e,t,i),a&&a.m(t,null),o=!0},p(e,i){a&&a.p&&(!o||i&32)&&v(a,s,e,e[5],o?R(s,e[5],i,null):L(e[5]),null)},i(e){o||(f(a,e),o=!0)},o(e){u(a,e),o=!1},d(e){e&&m(t),a&&a.d(e)}}}function V(n){let t,o;return t=new M({props:{title:n[0],$$slots:{default:[T]},$$scope:{ctx:n}}}),{c(){I(t.$$.fragment)},l(s){U(t.$$.fragment,s)},m(s,a){W(t,s,a),o=!0},p(s,[a]){const e={};a&1&&(e.title=s[0]),a&32&&(e.$$scope={dirty:a,ctx:s}),t.$set(e)},i(s){o||(f(t.$$.fragment,s),o=!0)},o(s){u(t.$$.fragment,s),o=!1},d(s){j(t,s)}}}function k(n,t,o){let s;w(n,N,r=>o(3,s=r));let{$$slots:a={},$$scope:e}=t,{title:i="Title"}=t,{search:l=""}=t;const h=g();let c=!1;return S(()=>{let r=new URLSearchParams(window.location.search);o(1,l=r.get("q")??""),o(2,c=!0)}),n.$$set=r=>{"title"in r&&o(0,i=r.title),"search"in r&&o(1,l=r.search),"$$scope"in r&&o(5,e=r.$$scope)},n.$$.update=()=>{if(n.$$.dirty&2&&h("search",{search:l.trim().toLowerCase()}),n.$$.dirty&14&&c){let r=new URLSearchParams(window.location.search);r.set("q",l);const _=`${window.location.protocol}//${window.location.host}${window.location.pathname}?${r.toString()}`,p=window.history.state;window.history.replaceState(p,"",_),s.url.pathname.startsWith(`${Q}/search`)}},[i,l,c,s,a,e]}class H extends D{constructor(t){super(),E(this,t,k,V,d,{title:0,search:1})}}export{H as S};
