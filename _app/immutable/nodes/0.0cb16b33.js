import{s as H,n as I,r as te,c as K,d as re,u as ie,g as oe,e as ce}from"../chunks/scheduler.8ab1511c.js";import{S as P,i as U,g as v,s as k,h as m,j as y,x as M,c as w,f as _,k as f,y as V,a as E,z as p,A as L,l as q,B as le,m as se,n as ne,o as ae,r as W,u as G,v as R,d as B,t as z,w as F}from"../chunks/index.e383f113.js";import{c as j}from"../chunks/languageStore.52869854.js";import{e as J}from"../chunks/each.c153d02b.js";import{t as X}from"../chunks/translations.c3153bbd.js";const ue=!0,Ie=Object.freeze(Object.defineProperty({__proto__:null,prerender:ue},Symbol.toStringTag,{value:"Module"}));function fe(i){let t,e,l="EN",a,s,r="DE",h,d;return{c(){t=v("div"),e=v("button"),e.textContent=l,a=k(),s=v("button"),s.textContent=r,this.h()},l(g){t=m(g,"DIV",{class:!0});var u=y(t);e=m(u,"BUTTON",{id:!0,title:!0,class:!0,"data-svelte-h":!0}),M(e)!=="svelte-xxje8h"&&(e.textContent=l),a=w(u),s=m(u,"BUTTON",{id:!0,title:!0,class:!0,"data-svelte-h":!0}),M(s)!=="svelte-ohstml"&&(s.textContent=r),u.forEach(_),this.h()},h(){f(e,"id","en"),f(e,"title","English"),f(e,"class","svelte-gy4pb1"),V(e,"active",i[0]=="en"),f(s,"id","de"),f(s,"title","Deutsch"),f(s,"class","svelte-gy4pb1"),V(s,"active",i[0]=="de"),f(t,"class","languageToggler svelte-gy4pb1")},m(g,u){E(g,t,u),p(t,e),p(t,a),p(t,s),h||(d=[L(e,"click",i[3]),L(s,"click",i[4])],h=!0)},p(g,[u]){u&1&&V(e,"active",g[0]=="en"),u&1&&V(s,"active",g[0]=="de")},i:I,o:I,d(g){g&&_(t),h=!1,te(d)}}}function _e(i,t,e){let l,a;K(i,j,d=>e(2,a=d));function s(d){j.set(d)}const r=()=>s("en"),h=()=>s("de");return i.$$.update=()=>{i.$$.dirty&4&&e(0,l=a)},[l,s,a,r,h]}class ge extends P{constructor(t){super(),U(this,t,_e,fe,H,{})}}const Y=[{title:{de:"Gruppen",en:"Groups"},slug:"groups",img:"groups.svg"},{title:{en:"Events",de:"Events"},slug:"events",img:"events.svg"},{title:{en:"Swiss Tips",de:"Swiss Tips"},slug:"swiss-tips",img:"tips.svg"},{title:{en:"About",de:"Info"},slug:"about",img:"about.svg"}];function Z(i,t,e){const l=i.slice();return l[6]=t[e],l}function he(i,t,e){const l=i.slice();return l[9]=t[e],l[11]=e,l}function de(i){let t;return{c(){t=v("span"),this.h()},l(e){t=m(e,"SPAN",{class:!0}),y(t).forEach(_),this.h()},h(){f(t,"class","svelte-un8w5y")},m(e,l){E(e,t,l)},p:I,d(e){e&&_(t)}}}function x(i){let t,e=J(Y),l=[];for(let a=0;a<e.length;a+=1)l[a]=ee(Z(i,e,a));return{c(){t=v("ol");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){t=m(a,"OL",{class:!0});var s=y(t);for(let r=0;r<l.length;r+=1)l[r].l(s);s.forEach(_),this.h()},h(){f(t,"class","svelte-un8w5y")},m(a,s){E(a,t,s);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(t,null)},p(a,s){if(s&3){e=J(Y);let r;for(r=0;r<e.length;r+=1){const h=Z(a,e,r);l[r]?l[r].p(h,s):(l[r]=ee(h),l[r].c(),l[r].m(t,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=e.length}},d(a){a&&_(t),le(l,a)}}}function ee(i){let t,e,l,a,s=i[6].title[i[1]]+"",r,h,d,g,u;return{c(){t=v("li"),e=v("a"),l=v("span"),a=k(),r=se(s),d=k(),this.h()},l(o){t=m(o,"LI",{});var n=y(t);e=m(n,"A",{title:!0,class:!0,href:!0});var c=y(e);l=m(c,"SPAN",{class:!0,style:!0}),y(l).forEach(_),a=w(c),r=ne(c,s),c.forEach(_),d=w(n),n.forEach(_),this.h()},h(){f(l,"class","img svelte-un8w5y"),q(l,"background-image","url(/navigation/"+i[6].img+")"),f(e,"title",h=i[6].title[i[1]]),f(e,"class","navlink svelte-un8w5y"),f(e,"href","/"+i[6].slug)},m(o,n){E(o,t,n),p(t,e),p(e,l),p(e,a),p(e,r),p(t,d),g||(u=L(e,"click",i[5]),g=!0)},p(o,n){n&2&&s!==(s=o[6].title[o[1]]+"")&&ae(r,s),n&2&&h!==(h=o[6].title[o[1]])&&f(e,"title",h)},d(o){o&&_(t),g=!1,u()}}}function pe(i){let t,e,l,a,s,r,h,d,g=J({length:3}),u=[];for(let n=0;n<g.length;n+=1)u[n]=de(he(i,g,n));let o=i[0]&&x(i);return{c(){t=v("button"),e=k(),l=v("nav"),a=v("button");for(let n=0;n<u.length;n+=1)u[n].c();r=k(),o&&o.c(),this.h()},l(n){t=m(n,"BUTTON",{style:!0,class:!0}),y(t).forEach(_),e=w(n),l=m(n,"NAV",{class:!0});var c=y(l);a=m(c,"BUTTON",{title:!0,class:!0});var b=y(a);for(let C=0;C<u.length;C+=1)u[C].l(b);b.forEach(_),r=w(c),o&&o.l(c),c.forEach(_),this.h()},h(){q(t,"display",i[0]?"block":"none"),f(t,"class","defocus svelte-un8w5y"),f(a,"title","menu"),f(a,"class",s="burger "+(i[0]?"burgerOpen":"")+" svelte-un8w5y"),f(l,"class","svelte-un8w5y")},m(n,c){E(n,t,c),E(n,e,c),E(n,l,c),p(l,a);for(let b=0;b<u.length;b+=1)u[b]&&u[b].m(a,null);p(l,r),o&&o.m(l,null),h||(d=[L(t,"click",i[3]),L(a,"click",i[4])],h=!0)},p(n,[c]){c&1&&q(t,"display",n[0]?"block":"none"),c&1&&s!==(s="burger "+(n[0]?"burgerOpen":"")+" svelte-un8w5y")&&f(a,"class",s),n[0]?o?o.p(n,c):(o=x(n),o.c(),o.m(l,null)):o&&(o.d(1),o=null)},i:I,o:I,d(n){n&&(_(t),_(e),_(l)),le(u,n),o&&o.d(),h=!1,te(d)}}}function ve(i,t,e){let l,a;K(i,j,g=>e(2,a=g));let s=!1;const r=()=>{e(0,s=!1)},h=()=>e(0,s=!s),d=()=>{e(0,s=!1)};return i.$$.update=()=>{i.$$.dirty&4&&e(1,l=a)},[s,l,a,r,h,d]}class me extends P{constructor(t){super(),U(this,t,ve,pe,H,{})}}function ye(i){let t,e,l,a,s,r,h="Connect Bern",d,g,u=X[i[0]]["logo-description"]+"",o,n,c,b,C,D,N;return b=new ge({}),D=new me({}),{c(){t=v("header"),e=v("a"),l=v("div"),a=k(),s=v("div"),r=v("h1"),r.textContent=h,d=k(),g=v("p"),o=se(u),n=k(),c=v("div"),W(b.$$.fragment),C=k(),W(D.$$.fragment),this.h()},l($){t=m($,"HEADER",{class:!0});var T=y(t);e=m(T,"A",{href:!0,title:!0,class:!0});var O=y(e);l=m(O,"DIV",{class:!0,style:!0,id:!0}),y(l).forEach(_),a=w(O),s=m(O,"DIV",{class:!0});var A=y(s);r=m(A,"H1",{class:!0,"data-svelte-h":!0}),M(r)!=="svelte-15ylk67"&&(r.textContent=h),d=w(A),g=m(A,"P",{class:!0});var Q=y(g);o=ne(Q,u),Q.forEach(_),A.forEach(_),O.forEach(_),n=w(T),c=m(T,"DIV",{class:!0});var S=y(c);G(b.$$.fragment,S),C=w(S),G(D.$$.fragment,S),S.forEach(_),T.forEach(_),this.h()},h(){f(l,"class","logo svelte-cqp04y"),q(l,"background","url('/icons/logo.svg')"),f(l,"id","logo"),f(r,"class","svelte-cqp04y"),f(g,"class","svelte-cqp04y"),f(s,"class","textWrapper"),f(e,"href","/"),f(e,"title","home"),f(e,"class","titleWrapper svelte-cqp04y"),f(c,"class","side-wrapper svelte-cqp04y"),f(t,"class","svelte-cqp04y")},m($,T){E($,t,T),p(t,e),p(e,l),p(e,a),p(e,s),p(s,r),p(s,d),p(s,g),p(g,o),p(t,n),p(t,c),R(b,c,null),p(c,C),R(D,c,null),N=!0},p($,[T]){(!N||T&1)&&u!==(u=X[$[0]]["logo-description"]+"")&&ae(o,u)},i($){N||(B(b.$$.fragment,$),B(D.$$.fragment,$),N=!0)},o($){z(b.$$.fragment,$),z(D.$$.fragment,$),N=!1},d($){$&&_(t),F(b),F(D)}}}function be(i,t,e){let l,a;return K(i,j,s=>e(1,a=s)),i.$$.update=()=>{i.$$.dirty&2&&e(0,l=a)},[l,a]}class $e extends P{constructor(t){super(),U(this,t,be,ye,H,{})}}function Ee(i){let t,e,l,a,s,r,h,d,g;r=new $e({});const u=i[1].default,o=re(u,i,i[0],null);return{c(){t=v("div"),e=k(),l=v("div"),a=k(),s=v("div"),W(r.$$.fragment),h=k(),d=v("main"),o&&o.c(),this.h()},l(n){t=m(n,"DIV",{class:!0}),y(t).forEach(_),e=w(n),l=m(n,"DIV",{class:!0}),y(l).forEach(_),a=w(n),s=m(n,"DIV",{class:!0});var c=y(s);G(r.$$.fragment,c),h=w(c),d=m(c,"MAIN",{});var b=y(d);o&&o.l(b),b.forEach(_),c.forEach(_),this.h()},h(){f(t,"class","gradient svelte-1rs4z8v"),f(l,"class","bg svelte-1rs4z8v"),f(s,"class","outerWrapper svelte-1rs4z8v")},m(n,c){E(n,t,c),E(n,e,c),E(n,l,c),E(n,a,c),E(n,s,c),R(r,s,null),p(s,h),p(s,d),o&&o.m(d,null),g=!0},p(n,[c]){o&&o.p&&(!g||c&1)&&ie(o,u,n,n[0],g?ce(u,n[0],c,null):oe(n[0]),null)},i(n){g||(B(r.$$.fragment,n),B(o,n),g=!0)},o(n){z(r.$$.fragment,n),z(o,n),g=!1},d(n){n&&(_(t),_(e),_(l),_(a),_(s)),F(r),o&&o.d(n)}}}function ke(i,t,e){let{$$slots:l={},$$scope:a}=t;return i.$$set=s=>{"$$scope"in s&&e(0,a=s.$$scope)},[a,l]}class Le extends P{constructor(t){super(),U(this,t,ke,Ee,H,{})}}export{Le as component,Ie as universal};