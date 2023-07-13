import{s as x,n as C,c as P,u as W,g as q,d as F}from"../chunks/scheduler.b95eede2.js";import{S as z,i as G,g as p,s as O,h as v,j as m,f as r,c as w,x as R,k as u,l as U,a as L,y as i,z as J,A as K,m as S,n as T,r as Q,u as X,v as Y,d as N,t as j,w as Z}from"../chunks/index.619ddb4d.js";import{e as ee}from"../chunks/each.e59479a4.js";import{b as V}from"../chunks/paths.ea9bf7d2.js";const te=!0,_e=Object.freeze(Object.defineProperty({__proto__:null,prerender:te},Symbol.toStringTag,{value:"Module"}));function le(d,e,t){const l=d.slice();return l[2]=e[t],l[4]=t,l}function se(d){let e;return{c(){e=p("span"),this.h()},l(t){e=v(t,"SPAN",{class:!0}),m(e).forEach(r),this.h()},h(){u(e,"class","svelte-6plth3")},m(t,l){L(t,e,l)},p:C,d(t){t&&r(e)}}}function B(d){let e,t,l,g,n,b,$,f,h,E,a,s;return{c(){e=p("ol"),t=p("li"),l=p("a"),g=S("Groups"),n=O(),b=p("li"),$=p("a"),f=S("About"),h=O(),E=p("li"),a=p("a"),s=S("Contact"),this.h()},l(o){e=v(o,"OL",{class:!0});var y=m(e);t=v(y,"LI",{});var k=m(t);l=v(k,"A",{class:!0,href:!0});var _=m(l);g=T(_,"Groups"),_.forEach(r),k.forEach(r),n=w(y),b=v(y,"LI",{});var c=m(b);$=v(c,"A",{class:!0,href:!0});var A=m($);f=T(A,"About"),A.forEach(r),c.forEach(r),h=w(y),E=v(y,"LI",{});var I=m(E);a=v(I,"A",{class:!0,href:!0});var D=m(a);s=T(D,"Contact"),D.forEach(r),I.forEach(r),y.forEach(r),this.h()},h(){u(l,"class","navlink svelte-6plth3"),u(l,"href",V+"/"),u($,"class","navlink svelte-6plth3"),u($,"href",V+"/about"),u(a,"class","navlink svelte-6plth3"),u(a,"href",V+"/contact"),u(e,"class","svelte-6plth3")},m(o,y){L(o,e,y),i(e,t),i(t,l),i(l,g),i(e,n),i(e,b),i(b,$),i($,f),i(e,h),i(e,E),i(E,a),i(a,s)},p:C,d(o){o&&r(e)}}}function ae(d){let e,t,l,g,n,b='<h1 class="svelte-6plth3">Connect Bern</h1> <p class="svelte-6plth3">A collection of social groups in Bern</p>',$,f,h,E,a,s,o,y=ee({length:3}),k=[];for(let c=0;c<y.length;c+=1)k[c]=se(le(d,y,c));let _=d[0]&&B();return{c(){e=p("header"),t=p("a"),l=p("div"),g=O(),n=p("div"),n.innerHTML=b,$=O(),f=p("nav"),h=p("button");for(let c=0;c<k.length;c+=1)k[c].c();a=O(),_&&_.c(),this.h()},l(c){e=v(c,"HEADER",{class:!0});var A=m(e);t=v(A,"A",{href:!0,title:!0,class:!0});var I=m(t);l=v(I,"DIV",{class:!0,style:!0,id:!0}),m(l).forEach(r),g=w(I),n=v(I,"DIV",{class:!0,"data-svelte-h":!0}),R(n)!=="svelte-k6gwgn"&&(n.innerHTML=b),I.forEach(r),$=w(A),f=v(A,"NAV",{class:!0});var D=m(f);h=v(D,"BUTTON",{class:!0});var M=m(h);for(let H=0;H<k.length;H+=1)k[H].l(M);M.forEach(r),a=w(D),_&&_.l(D),D.forEach(r),A.forEach(r),this.h()},h(){u(l,"class","logo svelte-6plth3"),U(l,"background","url('logo.svg')"),u(l,"id","logo"),u(n,"class","textWrapper"),u(t,"href",V+"/"),u(t,"title","home"),u(t,"class","svelte-6plth3"),u(h,"class",E="burger "+(d[0]?"burgerOpen":"")+" svelte-6plth3"),u(f,"class","svelte-6plth3"),u(e,"class","svelte-6plth3")},m(c,A){L(c,e,A),i(e,t),i(t,l),i(t,g),i(t,n),i(e,$),i(e,f),i(f,h);for(let I=0;I<k.length;I+=1)k[I]&&k[I].m(h,null);i(f,a),_&&_.m(f,null),s||(o=J(h,"click",d[1]),s=!0)},p(c,[A]){A&1&&E!==(E="burger "+(c[0]?"burgerOpen":"")+" svelte-6plth3")&&u(h,"class",E),c[0]?_?_.p(c,A):(_=B(),_.c(),_.m(f,null)):_&&(_.d(1),_=null)},i:C,o:C,d(c){c&&r(e),K(k,c),_&&_.d(),s=!1,o()}}}function re(d,e,t){let l=!1;return[l,()=>t(0,l=!l)]}class ne extends z{constructor(e){super(),G(this,e,re,ae,x,{})}}function oe(d){let e,t,l,g,n,b,$,f,h;b=new ne({});const E=d[1].default,a=P(E,d,d[0],null);return{c(){e=p("div"),t=O(),l=p("div"),g=O(),n=p("div"),Q(b.$$.fragment),$=O(),f=p("main"),a&&a.c(),this.h()},l(s){e=v(s,"DIV",{class:!0}),m(e).forEach(r),t=w(s),l=v(s,"DIV",{class:!0}),m(l).forEach(r),g=w(s),n=v(s,"DIV",{class:!0});var o=m(n);X(b.$$.fragment,o),$=w(o),f=v(o,"MAIN",{});var y=m(f);a&&a.l(y),y.forEach(r),o.forEach(r),this.h()},h(){u(e,"class","gradient svelte-cfmmuw"),u(l,"class","bg svelte-cfmmuw"),u(n,"class","outerWrapper svelte-cfmmuw")},m(s,o){L(s,e,o),L(s,t,o),L(s,l,o),L(s,g,o),L(s,n,o),Y(b,n,null),i(n,$),i(n,f),a&&a.m(f,null),h=!0},p(s,[o]){a&&a.p&&(!h||o&1)&&W(a,E,s,s[0],h?F(E,s[0],o,null):q(s[0]),null)},i(s){h||(N(b.$$.fragment,s),N(a,s),h=!0)},o(s){j(b.$$.fragment,s),j(a,s),h=!1},d(s){s&&(r(e),r(t),r(l),r(g),r(n)),Z(b),a&&a.d(s)}}}function ce(d,e,t){let{$$slots:l={},$$scope:g}=e;return d.$$set=n=>{"$$scope"in n&&t(0,g=n.$$scope)},[g,l]}class pe extends z{constructor(e){super(),G(this,e,ce,oe,x,{})}}export{pe as component,_e as universal};