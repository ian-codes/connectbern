import{s as x,n as G,r as se,c as Y,o as ne,d as ue,u as fe,g as _e,e as de}from"../chunks/scheduler.8ab1511c.js";import{S as H,i as F,g as p,s as y,h as m,j as b,x as W,c as T,f as d,k as g,y as N,a as E,z as h,A as O,l as q,d as w,p as ge,t as I,b as ve,B as ae,r as P,u as M,v as U,w as j,m as re,n as ie,o as oe}from"../chunks/index.c45faf38.js";import{c as S}from"../chunks/languageStore.52869854.js";import{e as R}from"../chunks/each.3adc6ac3.js";import{t as X}from"../chunks/translations.4ec82050.js";const he=!0,Ve=Object.freeze(Object.defineProperty({__proto__:null,prerender:he},Symbol.toStringTag,{value:"Module"}));function pe(i){let e,t,l,c="EN",o,f,u="DE",a,v;return{c(){e=p("div"),t=p("div"),l=p("button"),l.textContent=c,o=y(),f=p("button"),f.textContent=u,this.h()},l(r){e=m(r,"DIV",{class:!0});var s=b(e);t=m(s,"DIV",{class:!0});var n=b(t);l=m(n,"BUTTON",{id:!0,title:!0,class:!0,"data-svelte-h":!0}),W(l)!=="svelte-1a79pz8"&&(l.textContent=c),o=T(n),f=m(n,"BUTTON",{id:!0,title:!0,class:!0,"data-svelte-h":!0}),W(f)!=="svelte-1sxl5nw"&&(f.textContent=u),n.forEach(d),s.forEach(d),this.h()},h(){g(l,"id","en"),g(l,"title","English"),g(l,"class","svelte-1elgpym"),N(l,"active",i[1]=="en"),g(f,"id","de"),g(f,"title","Deutsch"),g(f,"class","svelte-1elgpym"),N(f,"active",i[1]=="de"),g(t,"class","languageToggler svelte-1elgpym"),g(e,"class","cntr svelte-1elgpym"),N(e,"dark",i[0])},m(r,s){E(r,e,s),h(e,t),h(t,l),h(t,o),h(t,f),a||(v=[O(l,"click",i[3]),O(f,"click",i[4])],a=!0)},p(r,[s]){s&2&&N(l,"active",r[1]=="en"),s&2&&N(f,"active",r[1]=="de"),s&1&&N(e,"dark",r[0])},i:G,o:G,d(r){r&&d(e),a=!1,se(v)}}}function me(i,e,t){let l;Y(i,S,a=>t(1,l=a));let{dark:c=!1}=e;function o(a){S.set(a)}const f=()=>o("en"),u=()=>o("de");return i.$$set=a=>{"dark"in a&&t(0,c=a.dark)},[c,l,o,f,u]}class ce extends H{constructor(e){super(),F(this,e,me,pe,x,{dark:0})}}const Z=[{title:{de:"Gruppen",en:"Groups"},slug:"groups",img:"groups.svg"},{title:{en:"Events",de:"Events"},slug:"events",img:"events.svg"},{title:{en:"Places",de:"Orte"},slug:"places",img:"location.svg"},{title:{en:"Finance",de:"Finanzen"},slug:"finance",img:"finance.svg"}];function ee(i,e,t){const l=i.slice();return l[6]=e[t],l}function ke(i,e,t){const l=i.slice();return l[9]=e[t],l[11]=t,l}function be(i){let e;return{c(){e=p("span"),this.h()},l(t){e=m(t,"SPAN",{class:!0}),b(e).forEach(d),this.h()},h(){g(e,"class","svelte-znpx37")},m(t,l){E(t,e,l)},p:G,d(t){t&&d(e)}}}function te(i){let e,t,l,c,o;l=new ce({props:{dark:!0}});let f=R(Z),u=[];for(let a=0;a<f.length;a+=1)u[a]=le(ee(i,f,a));return{c(){e=p("ol"),t=p("div"),P(l.$$.fragment),c=y();for(let a=0;a<u.length;a+=1)u[a].c();this.h()},l(a){e=m(a,"OL",{class:!0});var v=b(e);t=m(v,"DIV",{class:!0});var r=b(t);M(l.$$.fragment,r),r.forEach(d),c=T(v);for(let s=0;s<u.length;s+=1)u[s].l(v);v.forEach(d),this.h()},h(){g(t,"class","languages visible svelte-znpx37"),g(e,"class","svelte-znpx37")},m(a,v){E(a,e,v),h(e,t),U(l,t,null),h(e,c);for(let r=0;r<u.length;r+=1)u[r]&&u[r].m(e,null);o=!0},p(a,v){if(v&3){f=R(Z);let r;for(r=0;r<f.length;r+=1){const s=ee(a,f,r);u[r]?u[r].p(s,v):(u[r]=le(s),u[r].c(),u[r].m(e,null))}for(;r<u.length;r+=1)u[r].d(1);u.length=f.length}},i(a){o||(w(l.$$.fragment,a),o=!0)},o(a){I(l.$$.fragment,a),o=!1},d(a){a&&d(e),j(l),ae(u,a)}}}function le(i){let e,t,l,c,o=i[6].title[i[1]]+"",f,u,a,v,r;return{c(){e=p("li"),t=p("a"),l=p("span"),c=y(),f=re(o),a=y(),this.h()},l(s){e=m(s,"LI",{});var n=b(e);t=m(n,"A",{title:!0,class:!0,href:!0});var _=b(t);l=m(_,"SPAN",{class:!0,style:!0}),b(l).forEach(d),c=T(_),f=ie(_,o),_.forEach(d),a=T(n),n.forEach(d),this.h()},h(){g(l,"class","img svelte-znpx37"),q(l,"background-image","url(/navigation/"+i[6].img+")"),g(t,"title",u=i[6].title[i[1]]),g(t,"class","navlink svelte-znpx37"),g(t,"href","/"+i[6].slug)},m(s,n){E(s,e,n),h(e,t),h(t,l),h(t,c),h(t,f),h(e,a),v||(r=O(t,"click",i[5]),v=!0)},p(s,n){n&2&&o!==(o=s[6].title[s[1]]+"")&&oe(f,o),n&2&&u!==(u=s[6].title[s[1]])&&g(t,"title",u)},d(s){s&&d(e),v=!1,r()}}}function $e(i){let e,t,l,c,o,f,u,a,v,r=R({length:3}),s=[];for(let _=0;_<r.length;_+=1)s[_]=be(ke(i,r,_));let n=i[0]&&te(i);return{c(){e=p("button"),t=y(),l=p("nav"),c=p("button");for(let _=0;_<s.length;_+=1)s[_].c();f=y(),n&&n.c(),this.h()},l(_){e=m(_,"BUTTON",{style:!0,class:!0}),b(e).forEach(d),t=T(_),l=m(_,"NAV",{class:!0});var k=b(l);c=m(k,"BUTTON",{title:!0,class:!0});var z=b(c);for(let D=0;D<s.length;D+=1)s[D].l(z);z.forEach(d),f=T(k),n&&n.l(k),k.forEach(d),this.h()},h(){q(e,"display",i[0]?"block":"none"),g(e,"class","defocus svelte-znpx37"),g(c,"title","menu"),g(c,"class",o="burger "+(i[0]?"burgerOpen":"")+" svelte-znpx37"),g(l,"class","svelte-znpx37")},m(_,k){E(_,e,k),E(_,t,k),E(_,l,k),h(l,c);for(let z=0;z<s.length;z+=1)s[z]&&s[z].m(c,null);h(l,f),n&&n.m(l,null),u=!0,a||(v=[O(e,"click",i[3]),O(c,"click",i[4])],a=!0)},p(_,[k]){(!u||k&1)&&q(e,"display",_[0]?"block":"none"),(!u||k&1&&o!==(o="burger "+(_[0]?"burgerOpen":"")+" svelte-znpx37"))&&g(c,"class",o),_[0]?n?(n.p(_,k),k&1&&w(n,1)):(n=te(_),n.c(),w(n,1),n.m(l,null)):n&&(ge(),I(n,1,1,()=>{n=null}),ve())},i(_){u||(w(n),u=!0)},o(_){I(n),u=!1},d(_){_&&(d(e),d(t),d(l)),ae(s,_),n&&n.d(),a=!1,se(v)}}}function Ee(i,e,t){let l,c;Y(i,S,v=>t(2,c=v));let o=!1;const f=()=>{t(0,o=!1)},u=()=>t(0,o=!o),a=()=>{t(0,o=!1)};return i.$$.update=()=>{i.$$.dirty&4&&t(1,l=c)},[o,l,c,f,u,a]}class ye extends H{constructor(e){super(),F(this,e,Ee,$e,x,{})}}function Te(i){let e,t,l,c,o,f="Connect Bern",u,a,v=X[i[1]]["logo-description"]+"",r,s,n,_,k,z,D,L;return k=new ce({}),D=new ye({}),{c(){e=p("header"),t=p("div"),l=p("a"),c=p("div"),o=p("span"),o.textContent=f,u=y(),a=p("p"),r=re(v),s=y(),n=p("div"),_=p("div"),P(k.$$.fragment),z=y(),P(D.$$.fragment),this.h()},l($){e=m($,"HEADER",{class:!0});var C=b(e);t=m(C,"DIV",{class:!0});var V=b(t);l=m(V,"A",{href:!0,title:!0,class:!0});var J=b(l);c=m(J,"DIV",{class:!0});var A=b(c);o=m(A,"SPAN",{class:!0,"data-svelte-h":!0}),W(o)!=="svelte-1izdd2b"&&(o.textContent=f),u=T(A),a=m(A,"P",{class:!0});var K=b(a);r=ie(K,v),K.forEach(d),A.forEach(d),J.forEach(d),s=T(V),n=m(V,"DIV",{class:!0});var B=b(n);_=m(B,"DIV",{class:!0});var Q=b(_);M(k.$$.fragment,Q),Q.forEach(d),z=T(B),M(D.$$.fragment,B),B.forEach(d),V.forEach(d),C.forEach(d),this.h()},h(){g(o,"class","logo-text svelte-2kio13"),g(a,"class","svelte-2kio13"),g(c,"class","textWrapper svelte-2kio13"),g(l,"href","/"),g(l,"title","home"),g(l,"class","titleWrapper svelte-2kio13"),g(_,"class","inv svelte-2kio13"),g(n,"class","side-wrapper svelte-2kio13"),g(t,"class","cntr svelte-2kio13"),g(e,"class","header svelte-2kio13"),N(e,"sticky",i[0])},m($,C){E($,e,C),h(e,t),h(t,l),h(l,c),h(c,o),h(c,u),h(c,a),h(a,r),h(t,s),h(t,n),h(n,_),U(k,_,null),h(n,z),U(D,n,null),L=!0},p($,[C]){(!L||C&2)&&v!==(v=X[$[1]]["logo-description"]+"")&&oe(r,v),(!L||C&1)&&N(e,"sticky",$[0])},i($){L||(w(k.$$.fragment,$),w(D.$$.fragment,$),L=!0)},o($){I(k.$$.fragment,$),I(D.$$.fragment,$),L=!1},d($){$&&d(e),j(k),j(D)}}}function ze(i,e,t){let l,c;Y(i,S,f=>t(2,c=f));let{isSticky:o=!1}=e;return ne(()=>{window.addEventListener("scroll",()=>{const f=window.scrollY||document.documentElement.scrollTop;t(0,o=Math.round(f)>1)})}),i.$$set=f=>{"isSticky"in f&&t(0,o=f.isSticky)},i.$$.update=()=>{i.$$.dirty&4&&t(1,l=c)},[o,l,c]}class De extends H{constructor(e){super(),F(this,e,ze,Te,x,{isSticky:0})}}function Ne(i){let e,t,l,c,o,f,u,a;o=new De({});const v=i[1].default,r=ue(v,i,i[0],null);return{c(){e=p("div"),t=y(),l=p("div"),c=y(),P(o.$$.fragment),f=y(),u=p("main"),r&&r.c(),this.h()},l(s){e=m(s,"DIV",{class:!0}),b(e).forEach(d),t=T(s),l=m(s,"DIV",{class:!0}),b(l).forEach(d),c=T(s),M(o.$$.fragment,s),f=T(s),u=m(s,"MAIN",{class:!0});var n=b(u);r&&r.l(n),n.forEach(d),this.h()},h(){g(e,"class","gradient svelte-80l64o"),g(l,"class","bg svelte-80l64o"),g(u,"class","svelte-80l64o")},m(s,n){E(s,e,n),E(s,t,n),E(s,l,n),E(s,c,n),U(o,s,n),E(s,f,n),E(s,u,n),r&&r.m(u,null),a=!0},p(s,[n]){r&&r.p&&(!a||n&1)&&fe(r,v,s,s[0],a?de(v,s[0],n,null):_e(s[0]),null)},i(s){a||(w(o.$$.fragment,s),w(r,s),a=!0)},o(s){I(o.$$.fragment,s),I(r,s),a=!1},d(s){s&&(d(e),d(t),d(l),d(c),d(f),d(u)),j(o,s),r&&r.d(s)}}}function we(i,e,t){let{$$slots:l={},$$scope:c}=e;return ne(()=>{S.set(navigator.language.includes("en")?"en":"de")}),i.$$set=o=>{"$$scope"in o&&t(0,c=o.$$scope)},[c,l]}class Ae extends H{constructor(e){super(),F(this,e,we,Ne,x,{})}}export{Ae as component,Ve as universal};
