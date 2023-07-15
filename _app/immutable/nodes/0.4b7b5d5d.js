import{s as D,n as T,c as j,u as z,g as B,d as W}from"../chunks/scheduler.b95eede2.js";import{S as I,i as N,g as h,s as A,h as v,j as y,x as V,c as H,f,k as p,a as $,y as k,z as q,A as w,r as x,u as P,v as F,d as L,t as M,w as G}from"../chunks/index.619ddb4d.js";import{e as R}from"../chunks/each.e59479a4.js";const U=!0,ae=Object.freeze(Object.defineProperty({__proto__:null,prerender:U},Symbol.toStringTag,{value:"Module"}));function J(o,e,l){const a=o.slice();return a[2]=e[l],a[4]=l,a}function K(o){let e;return{c(){e=h("span"),this.h()},l(l){e=v(l,"SPAN",{class:!0}),y(e).forEach(f),this.h()},h(){p(e,"class","svelte-1pfp04e")},m(l,a){$(l,e,a)},p:T,d(l){l&&f(e)}}}function S(o){let e,l='<li><a class="navlink svelte-1pfp04e" href="/">Groups</a></li> <li><a class="navlink svelte-1pfp04e" href="/about">About</a></li> <li><a class="navlink svelte-1pfp04e" href="/contact">Contact</a></li>';return{c(){e=h("ol"),e.innerHTML=l,this.h()},l(a){e=v(a,"OL",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-oq8vn7"&&(e.innerHTML=l),this.h()},h(){p(e,"class","svelte-1pfp04e")},m(a,u){$(a,e,u)},d(a){a&&f(e)}}}function Q(o){let e,l,a='<div class="logo svelte-1pfp04e" style="background: url(&#39;logo.svg&#39;);" id="logo"></div> <div class="textWrapper"><h1 class="svelte-1pfp04e">Connect Bern</h1> <p class="svelte-1pfp04e">Collection of social groups in Bern</p></div>',u,n,i,g,d,_,E,c=R({length:3}),t=[];for(let r=0;r<c.length;r+=1)t[r]=K(J(o,c,r));let s=o[0]&&S();return{c(){e=h("header"),l=h("a"),l.innerHTML=a,u=A(),n=h("nav"),i=h("button");for(let r=0;r<t.length;r+=1)t[r].c();d=A(),s&&s.c(),this.h()},l(r){e=v(r,"HEADER",{class:!0});var b=y(e);l=v(b,"A",{href:!0,title:!0,class:!0,"data-svelte-h":!0}),V(l)!=="svelte-zyam44"&&(l.innerHTML=a),u=H(b),n=v(b,"NAV",{class:!0});var m=y(n);i=v(m,"BUTTON",{title:!0,class:!0});var C=y(i);for(let O=0;O<t.length;O+=1)t[O].l(C);C.forEach(f),d=H(m),s&&s.l(m),m.forEach(f),b.forEach(f),this.h()},h(){p(l,"href","/"),p(l,"title","home"),p(l,"class","titleWrapper svelte-1pfp04e"),p(i,"title","menu"),p(i,"class",g="burger "+(o[0]?"burgerOpen":"")+" svelte-1pfp04e"),p(n,"class","svelte-1pfp04e"),p(e,"class","svelte-1pfp04e")},m(r,b){$(r,e,b),k(e,l),k(e,u),k(e,n),k(n,i);for(let m=0;m<t.length;m+=1)t[m]&&t[m].m(i,null);k(n,d),s&&s.m(n,null),_||(E=q(i,"click",o[1]),_=!0)},p(r,[b]){b&1&&g!==(g="burger "+(r[0]?"burgerOpen":"")+" svelte-1pfp04e")&&p(i,"class",g),r[0]?s||(s=S(),s.c(),s.m(n,null)):s&&(s.d(1),s=null)},i:T,o:T,d(r){r&&f(e),w(t,r),s&&s.d(),_=!1,E()}}}function X(o,e,l){let a=!1;return[a,()=>l(0,a=!a)]}class Y extends I{constructor(e){super(),N(this,e,X,Q,D,{})}}function Z(o){let e,l,a,u,n,i,g,d,_;i=new Y({});const E=o[1].default,c=j(E,o,o[0],null);return{c(){e=h("div"),l=A(),a=h("div"),u=A(),n=h("div"),x(i.$$.fragment),g=A(),d=h("main"),c&&c.c(),this.h()},l(t){e=v(t,"DIV",{class:!0}),y(e).forEach(f),l=H(t),a=v(t,"DIV",{class:!0}),y(a).forEach(f),u=H(t),n=v(t,"DIV",{class:!0});var s=y(n);P(i.$$.fragment,s),g=H(s),d=v(s,"MAIN",{});var r=y(d);c&&c.l(r),r.forEach(f),s.forEach(f),this.h()},h(){p(e,"class","gradient svelte-15fhba8"),p(a,"class","bg svelte-15fhba8"),p(n,"class","outerWrapper svelte-15fhba8")},m(t,s){$(t,e,s),$(t,l,s),$(t,a,s),$(t,u,s),$(t,n,s),F(i,n,null),k(n,g),k(n,d),c&&c.m(d,null),_=!0},p(t,[s]){c&&c.p&&(!_||s&1)&&z(c,E,t,t[0],_?W(E,t[0],s,null):B(t[0]),null)},i(t){_||(L(i.$$.fragment,t),L(c,t),_=!0)},o(t){M(i.$$.fragment,t),M(c,t),_=!1},d(t){t&&(f(e),f(l),f(a),f(u),f(n)),G(i),c&&c.d(t)}}}function ee(o,e,l){let{$$slots:a={},$$scope:u}=e;return o.$$set=n=>{"$$scope"in n&&l(0,u=n.$$scope)},[u,a]}class ne extends I{constructor(e){super(),N(this,e,ee,Z,D,{})}}export{ne as component,ae as universal};
