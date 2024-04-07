import{s as oe,n as le,c as we,w as ke,r as Te}from"../chunks/scheduler.8ab1511c.js";import{S as ue,i as ce,g as d,s as V,m as K,h as g,j as b,f as p,c as B,n as Q,k as o,l as he,a as re,z as u,o as ae,H as qe,E as Le,x as _e,F as de,G as ne,A as ee,d as X,p as Oe,b as Se,t as se,B as ge,r as ye,u as je,v as Ce,w as Ge,I as Ae,C as Ve}from"../chunks/index.e383f113.js";import{e as te}from"../chunks/each.c153d02b.js";import{G as F}from"../chunks/GroupsData.0815f732.js";import{c as Ie}from"../chunks/languageStore.52869854.js";import{t as z}from"../chunks/translations.c3153bbd.js";function Be(l,e){let t=[];l=l.toLowerCase();for(let s of F)(s.name[e].toLowerCase().includes(l)||s.desc[e].toLowerCase().includes(l))&&t.push(s);return t}function He(l){let e=[];switch(l){case"all":return F;case"whatsapp":{for(let t of F)t.type.includes(l)&&e.push(t);return e}case"telegram":{for(let t of F)t.type.includes(l)&&e.push(t);return e}case"other":{for(let t of F)!t.type.includes("whatsapp")&&!t.type.includes("telegram")&&!t.type.includes("multiplatform")&&e.push(t);return e}case"multiplatform":{for(let t of F)t.type.includes(l)&&e.push(t);return e}default:return F}}function Pe(l){let e,t,s,r,c,y=(typeof l[0].name=="string"?l[0].name:l[0].name[l[1]])+"",j,G,k,O=l[0].desc[l[1]]+"",C,I,E,D,P,w,N,q,i,H,J,T,M;return{c(){e=d("div"),t=d("div"),s=V(),r=d("div"),c=d("h3"),j=K(y),G=V(),k=d("p"),C=K(O),I=V(),E=d("div"),D=d("a"),P=d("span"),w=K(`\r
            Join`),q=V(),i=d("a"),H=d("span"),J=K(`\r
            Info`),this.h()},l(m){e=g(m,"DIV",{id:!0,class:!0});var _=b(e);t=g(_,"DIV",{class:!0,style:!0}),b(t).forEach(p),s=B(_),r=g(_,"DIV",{class:!0});var L=b(r);c=g(L,"H3",{class:!0});var U=b(c);j=Q(U,y),U.forEach(p),G=B(L),k=g(L,"P",{class:!0});var R=b(k);C=Q(R,O),R.forEach(p),L.forEach(p),I=B(_),E=g(_,"DIV",{class:!0});var S=b(E);D=g(S,"A",{title:!0,href:!0,target:!0,class:!0});var v=b(D);P=g(v,"SPAN",{class:!0}),b(P).forEach(p),w=Q(v,`\r
            Join`),v.forEach(p),q=B(S),i=g(S,"A",{title:!0,href:!0,class:!0});var A=b(i);H=g(A,"SPAN",{class:!0}),b(H).forEach(p),J=Q(A,`\r
            Info`),A.forEach(p),S.forEach(p),_.forEach(p),this.h()},h(){o(t,"class","img svelte-1u3xf00"),he(t,"background","url('/groups/"+l[0].img+"')"),o(c,"class","svelte-1u3xf00"),o(k,"class","svelte-1u3xf00"),o(r,"class","textContainer svelte-1u3xf00"),o(P,"class","linkImg svelte-1u3xf00"),o(D,"title","Join group"),o(D,"href",N=l[0].link),o(D,"target","_blank"),o(D,"class","button svelte-1u3xf00"),o(H,"class","eyeImg svelte-1u3xf00"),o(i,"title","Show details"),o(i,"href",T="/groups/"+l[0].slug),o(i,"class","button svelte-1u3xf00"),o(E,"class","buttonContainer svelte-1u3xf00"),o(e,"id",M=l[0].slug),o(e,"class","container svelte-1u3xf00")},m(m,_){re(m,e,_),u(e,t),u(e,s),u(e,r),u(r,c),u(c,j),u(r,G),u(r,k),u(k,C),u(e,I),u(e,E),u(E,D),u(D,P),u(D,w),u(E,q),u(E,i),u(i,H),u(i,J)},p(m,[_]){_&1&&he(t,"background","url('/groups/"+m[0].img+"')"),_&3&&y!==(y=(typeof m[0].name=="string"?m[0].name:m[0].name[m[1]])+"")&&ae(j,y),_&3&&O!==(O=m[0].desc[m[1]]+"")&&ae(C,O),_&1&&N!==(N=m[0].link)&&o(D,"href",N),_&1&&T!==(T="/groups/"+m[0].slug)&&o(i,"href",T),_&1&&M!==(M=m[0].slug)&&o(e,"id",M)},i:le,o:le,d(m){m&&p(e)}}}function Ne(l,e,t){let s,r;we(l,Ie,y=>t(2,r=y));let{GroupDataObject:c}=e;return l.$$set=y=>{"GroupDataObject"in y&&t(0,c=y.GroupDataObject)},l.$$.update=()=>{l.$$.dirty&4&&t(1,s=r)},[c,s,r]}class $e extends ue{constructor(e){super(),ce(this,e,Ne,Pe,oe,{GroupDataObject:0})}}function ve(l,e,t){const s=l.slice();return s[10]=e[t],s}function me(l,e,t){const s=l.slice();return s[13]=e[t],s}function be(l){let e,t=l[13]+"",s;return{c(){e=d("option"),s=K(t),this.h()},l(r){e=g(r,"OPTION",{class:!0});var c=b(e);s=Q(c,t),c.forEach(p),this.h()},h(){e.__value=l[13],ne(e,e.__value),o(e,"class","svelte-wqrftj")},m(r,c){re(r,e,c),u(e,s)},p:le,d(r){r&&p(e)}}}function Ee(l){let e,t;return e=new $e({props:{GroupDataObject:l[10]}}),{c(){ye(e.$$.fragment)},l(s){je(e.$$.fragment,s)},m(s,r){Ce(e,s,r),t=!0},p(s,r){const c={};r&2&&(c.GroupDataObject=s[10]),e.$set(c)},i(s){t||(X(e.$$.fragment,s),t=!0)},o(s){se(e.$$.fragment,s),t=!1},d(s){Ge(e,s)}}}function Fe(l){let e,t,s,r=z[l[3]].groups+"",c,y,j,G,k=z[l[3]]["groups-description"]+"",O,C,I,E,D="Type",P,w,N,q,i,H,J,T,M='<span class="searchIcon svelte-wqrftj" style="background: url(&#39;/icons/search.svg&#39;);"></span>',m,_,L,U,R,S=te(l[4]),v=[];for(let n=0;n<S.length;n+=1)v[n]=be(me(l,S,n));let A=te(l[1]),h=[];for(let n=0;n<A.length;n+=1)h[n]=Ee(ve(l,A,n));const De=n=>se(h[n],1,1,()=>{h[n]=null});return{c(){e=d("section"),t=d("div"),s=d("h2"),c=K(r),y=V(),j=d("p"),G=new qe(!1),O=V(),C=d("div"),I=d("div"),E=d("label"),E.textContent=D,P=V(),w=d("select");for(let n=0;n<v.length;n+=1)v[n].c();N=V(),q=d("div"),i=d("input"),J=V(),T=d("button"),T.innerHTML=M,m=V(),_=d("div");for(let n=0;n<h.length;n+=1)h[n].c();this.h()},l(n){e=g(n,"SECTION",{});var f=b(e);t=g(f,"DIV",{class:!0});var a=b(t);s=g(a,"H2",{});var $=b(s);c=Q($,r),$.forEach(p),y=B(a),j=g(a,"P",{class:!0});var ie=b(j);G=Le(ie,!1),ie.forEach(p),a.forEach(p),O=B(f),C=g(f,"DIV",{class:!0});var Y=b(C);I=g(Y,"DIV",{class:!0});var Z=b(I);E=g(Z,"LABEL",{title:!0,for:!0,"data-svelte-h":!0}),_e(E)!=="svelte-1ehhm0u"&&(E.textContent=D),P=B(Z),w=g(Z,"SELECT",{title:!0,id:!0,name:!0,class:!0});var fe=b(w);for(let W=0;W<v.length;W+=1)v[W].l(fe);fe.forEach(p),Z.forEach(p),N=B(Y),q=g(Y,"DIV",{class:!0});var x=b(q);i=g(x,"INPUT",{type:!0,title:!0,id:!0,name:!0,placeholder:!0,class:!0}),J=B(x),T=g(x,"BUTTON",{title:!0,class:!0,"data-svelte-h":!0}),_e(T)!=="svelte-y55vja"&&(T.innerHTML=M),x.forEach(p),Y.forEach(p),m=B(f),_=g(f,"DIV",{class:!0});var pe=b(_);for(let W=0;W<h.length;W+=1)h[W].l(pe);pe.forEach(p),f.forEach(p),this.h()},h(){G.a=null,o(j,"class","svelte-wqrftj"),o(t,"class","topbarWrapper svelte-wqrftj"),o(E,"title","Filter groups by type"),o(E,"for","type"),o(w,"title","Filter groups by type"),o(w,"id","type"),o(w,"name","type"),o(w,"class","svelte-wqrftj"),l[0]===void 0&&ke(()=>l[8].call(w)),o(I,"class","groupTypeFilter svelte-wqrftj"),o(i,"type","text"),o(i,"title","Search Groups"),o(i,"id","search"),o(i,"name","search"),o(i,"placeholder",H=z[l[3]]["search-groups"]),o(i,"class","svelte-wqrftj"),o(T,"title","Go"),o(T,"class","iconWrapper svelte-wqrftj"),o(q,"class","searchbar svelte-wqrftj"),o(C,"class","settingsBar svelte-wqrftj"),o(_,"class","cardsContainer svelte-wqrftj")},m(n,f){re(n,e,f),u(e,t),u(t,s),u(s,c),u(t,y),u(t,j),G.m(k,j),u(e,O),u(e,C),u(C,I),u(I,E),u(I,P),u(I,w);for(let a=0;a<v.length;a+=1)v[a]&&v[a].m(w,null);de(w,l[0],!0),u(C,N),u(C,q),u(q,i),ne(i,l[2]),u(q,J),u(q,T),u(e,m),u(e,_);for(let a=0;a<h.length;a+=1)h[a]&&h[a].m(_,null);L=!0,U||(R=[ee(w,"change",l[8]),ee(w,"change",l[6]),ee(i,"change",l[5]),ee(i,"input",l[9])],U=!0)},p(n,[f]){if((!L||f&8)&&r!==(r=z[n[3]].groups+"")&&ae(c,r),(!L||f&8)&&k!==(k=z[n[3]]["groups-description"]+"")&&G.p(k),f&16){S=te(n[4]);let a;for(a=0;a<S.length;a+=1){const $=me(n,S,a);v[a]?v[a].p($,f):(v[a]=be($),v[a].c(),v[a].m(w,null))}for(;a<v.length;a+=1)v[a].d(1);v.length=S.length}if(f&17&&de(w,n[0]),(!L||f&8&&H!==(H=z[n[3]]["search-groups"]))&&o(i,"placeholder",H),f&4&&i.value!==n[2]&&ne(i,n[2]),f&2){A=te(n[1]);let a;for(a=0;a<A.length;a+=1){const $=ve(n,A,a);h[a]?(h[a].p($,f),X(h[a],1)):(h[a]=Ee($),h[a].c(),X(h[a],1),h[a].m(_,null))}for(Oe(),a=A.length;a<h.length;a+=1)De(a);Se()}},i(n){if(!L){for(let f=0;f<A.length;f+=1)X(h[f]);L=!0}},o(n){h=h.filter(Boolean);for(let f=0;f<h.length;f+=1)se(h[f]);L=!1},d(n){n&&p(e),ge(v,n),ge(h,n),U=!1,Te(R)}}}function Je(l,e,t){let s,r;we(l,Ie,E=>t(7,r=E));let c="All",y=["All","WhatsApp","Telegram","Multiplatform","Other"],j=F,G="";function k(){t(1,j=Be(G,s))}function O(){t(1,j=He(c.toLowerCase())),console.log(c)}function C(){c=Ae(this),t(0,c),t(4,y)}function I(){G=this.value,t(2,G)}return l.$$.update=()=>{l.$$.dirty&128&&t(3,s=r)},[c,j,G,s,y,k,O,r,C,I]}class Me extends ue{constructor(e){super(),ce(this,e,Je,Fe,oe,{})}}function We(l){let e,t,s;return t=new Me({}),{c(){e=V(),ye(t.$$.fragment),this.h()},l(r){Ve("svelte-dc0rcv",document.head).forEach(p),e=B(r),je(t.$$.fragment,r),this.h()},h(){document.title="Groups • Connect Bern "},m(r,c){re(r,e,c),Ce(t,r,c),s=!0},p:le,i(r){s||(X(t.$$.fragment,r),s=!0)},o(r){se(t.$$.fragment,r),s=!1},d(r){r&&p(e),Ge(t,r)}}}class Ye extends ue{constructor(e){super(),ce(this,e,null,We,oe,{})}}export{Ye as component};
