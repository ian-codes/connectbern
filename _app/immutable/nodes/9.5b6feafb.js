import{G as ce}from"../chunks/GroupsData.0815f732.js";import"../chunks/navigation.53dcd973.js";import{s as ie,n as le,c as ue}from"../chunks/scheduler.8ab1511c.js";import{S as de,i as he,g as o,s as D,m as R,C as fe,h as c,f as n,c as N,j as d,x as me,n as U,k as s,l as ne,z as t,a as re,o as oe}from"../chunks/index.e383f113.js";import{c as ve}from"../chunks/languageStore.52869854.js";function ge({params:a}){return ce.find(h=>h.slug===a.slug)}const Le=Object.freeze(Object.defineProperty({__proto__:null,load:ge},Symbol.toStringTag,{value:"Module"}));function _e(a){var Z,$,x,ee,te,ae;let h,u,E,_,i,r,b,Y="→",K,y,M,p,f,k,L,V=((($=(Z=a[0])==null?void 0:Z.name)==null?void 0:$[a[1]])??"Loading...")+"",H,w,S,j=(((ee=(x=a[0])==null?void 0:x.desc)==null?void 0:ee[a[1]])??"Loading...")+"",z,F,v,Q,A,J,W,B,X,I;return document.title=h=(((ae=(te=a[0])==null?void 0:te.name)==null?void 0:ae[a[1]])??"Loading...")+" • Connect Bern ",{c(){u=o("link"),_=D(),i=o("section"),r=o("a"),b=o("span"),b.textContent=Y,K=R("Back"),M=D(),p=o("div"),f=o("div"),k=o("div"),L=o("h2"),H=R(V),w=D(),S=o("p"),z=R(j),F=D(),v=o("a"),Q=R(`JOIN THIS GROUP\r
                `),A=o("span"),W=D(),B=o("div"),X=D(),I=o("div"),this.h()},l(e){const l=fe("svelte-1g8h2ch",document.head);u=c(l,"LINK",{rel:!0,href:!0}),l.forEach(n),_=N(e),i=c(e,"SECTION",{class:!0});var m=d(i);r=c(m,"A",{class:!0,href:!0});var O=d(r);b=c(O,"SPAN",{class:!0,"data-svelte-h":!0}),me(b)!=="svelte-1xb5tc"&&(b.textContent=Y),K=U(O,"Back"),O.forEach(n),M=N(m),p=c(m,"DIV",{class:!0});var q=d(p);f=c(q,"DIV",{class:!0});var g=d(f);k=c(g,"DIV",{});var C=d(k);L=c(C,"H2",{class:!0});var G=d(L);H=U(G,V),G.forEach(n),w=N(C),S=c(C,"P",{class:!0});var T=d(S);z=U(T,j),T.forEach(n),C.forEach(n),F=N(g),v=c(g,"A",{class:!0,href:!0});var P=d(v);Q=U(P,`JOIN THIS GROUP\r
                `),A=c(P,"SPAN",{class:!0}),d(A).forEach(n),P.forEach(n),W=N(g),B=c(g,"DIV",{class:!0}),d(B).forEach(n),g.forEach(n),X=N(q),I=c(q,"DIV",{style:!0,class:!0}),d(I).forEach(n),q.forEach(n),m.forEach(n),this.h()},h(){var e,l,m;s(u,"rel","canonical"),s(u,"href",E="https://connectbern.ch/groups/"+((e=a[0])==null?void 0:e.slug)),s(b,"class","svelte-15qmlet"),s(r,"class","btn back svelte-15qmlet"),s(r,"href",y="/groups#"+(((l=a[0])==null?void 0:l.slug)??"")),s(L,"class","svelte-15qmlet"),s(S,"class","svelte-15qmlet"),s(A,"class","linkImg svelte-15qmlet"),s(v,"class","join svelte-15qmlet"),s(v,"href",J=(m=a[0])==null?void 0:m.link),s(B,"class","placeholder"),s(f,"class","textContainer svelte-15qmlet"),ne(I,"background-image","url(/groups/"+a[0].img+")"),s(I,"class","img svelte-15qmlet"),s(p,"class","container svelte-15qmlet"),s(i,"class","svelte-15qmlet")},m(e,l){t(document.head,u),re(e,_,l),re(e,i,l),t(i,r),t(r,b),t(r,K),t(i,M),t(i,p),t(p,f),t(f,k),t(k,L),t(L,H),t(k,w),t(k,S),t(S,z),t(f,F),t(f,v),t(v,Q),t(v,A),t(f,W),t(f,B),t(p,X),t(p,I)},p(e,[l]){var m,O,q,g,C,G,T,P,se;l&3&&h!==(h=(((O=(m=e[0])==null?void 0:m.name)==null?void 0:O[e[1]])??"Loading...")+" • Connect Bern ")&&(document.title=h),l&1&&E!==(E="https://connectbern.ch/groups/"+((q=e[0])==null?void 0:q.slug))&&s(u,"href",E),l&1&&y!==(y="/groups#"+(((g=e[0])==null?void 0:g.slug)??""))&&s(r,"href",y),l&3&&V!==(V=(((G=(C=e[0])==null?void 0:C.name)==null?void 0:G[e[1]])??"Loading...")+"")&&oe(H,V),l&3&&j!==(j=(((P=(T=e[0])==null?void 0:T.desc)==null?void 0:P[e[1]])??"Loading...")+"")&&oe(z,j),l&1&&J!==(J=(se=e[0])==null?void 0:se.link)&&s(v,"href",J),l&1&&ne(I,"background-image","url(/groups/"+e[0].img+")")},i:le,o:le,d(e){e&&(n(_),n(i)),n(u)}}}function pe(a,h,u){let E,_;ue(a,ve,r=>u(2,_=r));let{data:i}=h;return a.$$set=r=>{"data"in r&&u(0,i=r.data)},a.$$.update=()=>{a.$$.dirty&4&&u(1,E=_)},[i,E,_]}class Se extends de{constructor(h){super(),he(this,h,pe,_e,ie,{data:0})}}export{Se as component,Le as universal};