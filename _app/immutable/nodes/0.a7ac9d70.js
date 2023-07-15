import{s as W,n as w,c as G,u as P,g as q,d as F}from"../chunks/scheduler.b95eede2.js";import{S as x,i as z,g as h,s as O,h as v,j as m,f as r,c as C,x as R,k as i,l as U,a as L,y as f,z as J,A as K,m as S,n as T,r as Q,u as X,v as Y,d as N,t as j,w as Z}from"../chunks/index.619ddb4d.js";import{e as ee}from"../chunks/each.e59479a4.js";import{b as V}from"../chunks/paths.7b4cc091.js";const te=!0,pe=Object.freeze(Object.defineProperty({__proto__:null,prerender:te},Symbol.toStringTag,{value:"Module"}));function se(d,e,t){const s=d.slice();return s[2]=e[t],s[4]=t,s}function le(d){let e;return{c(){e=h("span"),this.h()},l(t){e=v(t,"SPAN",{class:!0}),m(e).forEach(r),this.h()},h(){i(e,"class","svelte-1pfp04e")},m(t,s){L(t,e,s)},p:w,d(t){t&&r(e)}}}function B(d){let e,t,s,g,n,b,$,_,u,E,a,l;return{c(){e=h("ol"),t=h("li"),s=h("a"),g=S("Groups"),n=O(),b=h("li"),$=h("a"),_=S("About"),u=O(),E=h("li"),a=h("a"),l=S("Contact"),this.h()},l(o){e=v(o,"OL",{class:!0});var y=m(e);t=v(y,"LI",{});var k=m(t);s=v(k,"A",{class:!0,href:!0});var p=m(s);g=T(p,"Groups"),p.forEach(r),k.forEach(r),n=C(y),b=v(y,"LI",{});var c=m(b);$=v(c,"A",{class:!0,href:!0});var A=m($);_=T(A,"About"),A.forEach(r),c.forEach(r),u=C(y),E=v(y,"LI",{});var I=m(E);a=v(I,"A",{class:!0,href:!0});var D=m(a);l=T(D,"Contact"),D.forEach(r),I.forEach(r),y.forEach(r),this.h()},h(){i(s,"class","navlink svelte-1pfp04e"),i(s,"href",V),i($,"class","navlink svelte-1pfp04e"),i($,"href",V+"/about"),i(a,"class","navlink svelte-1pfp04e"),i(a,"href",V+"/contact"),i(e,"class","svelte-1pfp04e")},m(o,y){L(o,e,y),f(e,t),f(t,s),f(s,g),f(e,n),f(e,b),f(b,$),f($,_),f(e,u),f(e,E),f(E,a),f(a,l)},p:w,d(o){o&&r(e)}}}function ae(d){let e,t,s,g,n,b='<h1 class="svelte-1pfp04e">Connect Bern</h1> <p class="svelte-1pfp04e">Collection of social groups in Bern</p>',$,_,u,E,a,l,o,y=ee({length:3}),k=[];for(let c=0;c<y.length;c+=1)k[c]=le(se(d,y,c));let p=d[0]&&B();return{c(){e=h("header"),t=h("a"),s=h("div"),g=O(),n=h("div"),n.innerHTML=b,$=O(),_=h("nav"),u=h("button");for(let c=0;c<k.length;c+=1)k[c].c();a=O(),p&&p.c(),this.h()},l(c){e=v(c,"HEADER",{class:!0});var A=m(e);t=v(A,"A",{href:!0,title:!0,class:!0});var I=m(t);s=v(I,"DIV",{class:!0,style:!0,id:!0}),m(s).forEach(r),g=C(I),n=v(I,"DIV",{class:!0,"data-svelte-h":!0}),R(n)!=="svelte-v80scg"&&(n.innerHTML=b),I.forEach(r),$=C(A),_=v(A,"NAV",{class:!0});var D=m(_);u=v(D,"BUTTON",{title:!0,class:!0});var M=m(u);for(let H=0;H<k.length;H+=1)k[H].l(M);M.forEach(r),a=C(D),p&&p.l(D),D.forEach(r),A.forEach(r),this.h()},h(){i(s,"class","logo svelte-1pfp04e"),U(s,"background","url('logo.svg')"),i(s,"id","logo"),i(n,"class","textWrapper"),i(t,"href",V),i(t,"title","home"),i(t,"class","titleWrapper svelte-1pfp04e"),i(u,"title","menu"),i(u,"class",E="burger "+(d[0]?"burgerOpen":"")+" svelte-1pfp04e"),i(_,"class","svelte-1pfp04e"),i(e,"class","svelte-1pfp04e")},m(c,A){L(c,e,A),f(e,t),f(t,s),f(t,g),f(t,n),f(e,$),f(e,_),f(_,u);for(let I=0;I<k.length;I+=1)k[I]&&k[I].m(u,null);f(_,a),p&&p.m(_,null),l||(o=J(u,"click",d[1]),l=!0)},p(c,[A]){A&1&&E!==(E="burger "+(c[0]?"burgerOpen":"")+" svelte-1pfp04e")&&i(u,"class",E),c[0]?p?p.p(c,A):(p=B(),p.c(),p.m(_,null)):p&&(p.d(1),p=null)},i:w,o:w,d(c){c&&r(e),K(k,c),p&&p.d(),l=!1,o()}}}function re(d,e,t){let s=!1;return[s,()=>t(0,s=!s)]}class ne extends x{constructor(e){super(),z(this,e,re,ae,W,{})}}function oe(d){let e,t,s,g,n,b,$,_,u;b=new ne({});const E=d[1].default,a=G(E,d,d[0],null);return{c(){e=h("div"),t=O(),s=h("div"),g=O(),n=h("div"),Q(b.$$.fragment),$=O(),_=h("main"),a&&a.c(),this.h()},l(l){e=v(l,"DIV",{class:!0}),m(e).forEach(r),t=C(l),s=v(l,"DIV",{class:!0}),m(s).forEach(r),g=C(l),n=v(l,"DIV",{class:!0});var o=m(n);X(b.$$.fragment,o),$=C(o),_=v(o,"MAIN",{});var y=m(_);a&&a.l(y),y.forEach(r),o.forEach(r),this.h()},h(){i(e,"class","gradient svelte-w0605k"),i(s,"class","bg svelte-w0605k"),i(n,"class","outerWrapper svelte-w0605k")},m(l,o){L(l,e,o),L(l,t,o),L(l,s,o),L(l,g,o),L(l,n,o),Y(b,n,null),f(n,$),f(n,_),a&&a.m(_,null),u=!0},p(l,[o]){a&&a.p&&(!u||o&1)&&P(a,E,l,l[0],u?F(E,l[0],o,null):q(l[0]),null)},i(l){u||(N(b.$$.fragment,l),N(a,l),u=!0)},o(l){j(b.$$.fragment,l),j(a,l),u=!1},d(l){l&&(r(e),r(t),r(s),r(g),r(n)),Z(b),a&&a.d(l)}}}function ce(d,e,t){let{$$slots:s={},$$scope:g}=e;return d.$$set=n=>{"$$scope"in n&&t(0,g=n.$$scope)},[g,s]}class he extends x{constructor(e){super(),z(this,e,ce,oe,W,{})}}export{he as component,pe as universal};
