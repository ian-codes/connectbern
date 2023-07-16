import{s as X,n as Q,f as me,r as ge}from"../chunks/scheduler.b95eede2.js";import{S as K,i as Z,g as _,s as q,m as J,h as v,j as E,f as b,c as z,n as N,k as h,l as ne,a as x,y as i,o as se,x as P,B as ae,C as R,z as V,d as F,p as _e,b as ve,t as Y,A as re,r as ce,u as pe,v as he,w as fe,D as be}from"../chunks/index.619ddb4d.js";import{e as U}from"../chunks/each.e59479a4.js";const S=[{name:"Connect Bern",desc:"Generelle Hauptgruppe",img:"connect-bern.webp",link:"https://chat.whatsapp.com/FxFhMEQirDLHoRqQzY4UDz"},{name:"Sammlung von Telegramgruppen",desc:"Eine Sammlung von links-orientierten Gruppen auf Telegram",img:"telegramgruppen.webp",link:"https://t.me/unkomarkt_sammlung"},{name:"Spielegruppe",desc:"Gruppe für alles rund um das Spielen - mehr als 300 Mitglieder",img:"spielegruppe.webp",link:"https://linktr.ee/gamesbern"},{name:"Unkommerzieller Marktplatz",desc:"Gruppe zum Verschenken oder Austauschen - Mehr als 6500 Mitglieder",img:"marktplatz.webp",link:"https://t.me/%2BEiuWDO-bw-hhYzlk"},{name:"What's Up Bern",desc:"Eine WhatsApp Gruppe, um Menschen kennenzulernen und von Events zu erfahren",img:"whats-up-bern.webp",link:"https://linktr.ee/whatsupbern"},{name:"Let's Bern",desc:"Eine aktive Gruppe, die sich oft trifft",img:"lets-bern.webp",link:"https://chat.whatsapp.com/EXD1tYBN6STIwrWuWFlGLU"},{name:"Events and friends Bern",desc:"Eine weitere WhatsApp Gruppe, um Menschen kennenzulernen und von Events zu erfahren",img:"events-and-friends.webp",link:"https://chat.whatsapp.com/EaXqbWr3QFxLXIrOqD3QSM"},{name:"Gruppe für IT-Interessierte",desc:"Eine nicht offizielle Gruppe für den Chaos Treff (CCC/Hackerspace)",img:"it-gruppe.webp",link:"https://t.me/+e6QTJfwGEus0NThi"},{name:"Bärndütsch Konversationsgruppe",desc:"Um Bärndütch zu üben oder zu reden",img:"berndeutsch.webp",link:"https://chat.whatsapp.com/EbHDoONyHGL2ngoMJkriIC"},{name:"Israelis & Jews & Friends",desc:"A group for Israelis, Jews and friends",img:"israelis-jews-friends.webp",link:"https://chat.whatsapp.com/I33JBG0YYn9GceZaBaTnjP"},{name:"FIRE Community",desc:"The Bernese Meetup for the FIRE community (financial independence, retire early)",img:"fire-community.webp",link:"https://forum.mustachianpost.com/t/meetup-in-bern-for-coffee-beer-and-chat-about-fi-re-plans/8673/"}];function ke(a){let e=[];a=a.toLowerCase();for(let t of S)(t.name.toLowerCase().includes(a)||t.desc.toLowerCase().includes(a))&&e.push(t);return e}function we(a){let e=[];switch(a){case"all":return S;case"whatsapp":{for(let t of S)t.link.includes("chat.whatsapp")&&e.push(t);return e}case"telegram":{for(let t of S)t.link.includes("t.me")&&e.push(t);return e}case"other":{for(let t of S)!t.link.includes("t.me")&&!t.link.includes("chat.whatsapp")&&e.push(t);return e}default:return S}}function Ee(a){let e,t,n,l,o,d=a[0].name+"",k,T,D,f=a[0].desc+"",B,G,c,L,y;return{c(){e=_("div"),t=_("div"),n=q(),l=_("div"),o=_("h3"),k=J(d),T=q(),D=_("p"),B=J(f),G=q(),c=_("a"),L=J("Join"),this.h()},l(w){e=v(w,"DIV",{class:!0});var m=E(e);t=v(m,"DIV",{class:!0,style:!0}),E(t).forEach(b),n=z(m),l=v(m,"DIV",{});var C=E(l);o=v(C,"H3",{class:!0});var $=E(o);k=N($,d),$.forEach(b),T=z(C),D=v(C,"P",{});var j=E(D);B=N(j,f),j.forEach(b),C.forEach(b),G=z(m),c=v(m,"A",{href:!0,target:!0,class:!0});var A=E(c);L=N(A,"Join"),A.forEach(b),m.forEach(b),this.h()},h(){h(t,"class","img svelte-1hmit4o"),ne(t,"background","url('/groups/"+a[0].img+"')"),h(o,"class","svelte-1hmit4o"),h(c,"href",y=a[0].link),h(c,"target","_blank"),h(c,"class","joinButton svelte-1hmit4o"),h(e,"class","container svelte-1hmit4o")},m(w,m){x(w,e,m),i(e,t),i(e,n),i(e,l),i(l,o),i(o,k),i(l,T),i(l,D),i(D,B),i(e,G),i(e,c),i(c,L)},p(w,[m]){m&1&&ne(t,"background","url('/groups/"+w[0].img+"')"),m&1&&d!==(d=w[0].name+"")&&se(k,d),m&1&&f!==(f=w[0].desc+"")&&se(B,f),m&1&&y!==(y=w[0].link)&&h(c,"href",y)},i:Q,o:Q,d(w){w&&b(e)}}}function Ge(a,e,t){let{GroupDataObject:n}=e;return a.$$set=l=>{"GroupDataObject"in l&&t(0,n=l.GroupDataObject)},[n]}class ye extends K{constructor(e){super(),Z(this,e,Ge,Ee,X,{GroupDataObject:0})}}function le(a,e,t){const n=a.slice();return n[8]=e[t],n}function oe(a,e,t){const n=a.slice();return n[11]=e[t],n}function ie(a){let e,t=a[11]+"",n;return{c(){e=_("option"),n=J(t),this.h()},l(l){e=v(l,"OPTION",{class:!0});var o=E(e);n=N(o,t),o.forEach(b),this.h()},h(){e.__value=a[11],R(e,e.__value),h(e,"class","svelte-ah689q")},m(l,o){x(l,e,o),i(e,n)},p:Q,d(l){l&&b(e)}}}function ue(a){let e,t;return e=new ye({props:{GroupDataObject:a[8]}}),{c(){ce(e.$$.fragment)},l(n){pe(e.$$.fragment,n)},m(n,l){he(e,n,l),t=!0},p(n,l){const o={};l&2&&(o.GroupDataObject=n[8]),e.$set(o)},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){Y(e.$$.fragment,n),t=!1},d(n){fe(e,n)}}}function Ce(a){let e,t,n=`<h2>Groups</h2> <p class="svelte-ah689q">In these groups you can do many different things. If you have a general 
            question, ask in the <a href="https://chat.whatsapp.com/FxFhMEQirDLHoRqQzY4UDz" class="svelte-ah689q">Connect Bern</a> group or read the descriptions 
            of the groups or translate the name of the group to English if it&#39;s in German, 
            so you understand what the group is about.</p>`,l,o,d,k,T="Type",D,f,B,G,c,L,y,w='<span class="searchIcon svelte-ah689q" style="background: url(&#39;/search.svg&#39;);"></span>',m,C,$,j,A,H=U(a[3]),g=[];for(let r=0;r<H.length;r+=1)g[r]=ie(oe(a,H,r));let M=U(a[1]),u=[];for(let r=0;r<M.length;r+=1)u[r]=ue(le(a,M,r));const de=r=>Y(u[r],1,1,()=>{u[r]=null});return{c(){e=_("section"),t=_("div"),t.innerHTML=n,l=q(),o=_("div"),d=_("div"),k=_("label"),k.textContent=T,D=q(),f=_("select");for(let r=0;r<g.length;r+=1)g[r].c();B=q(),G=_("div"),c=_("input"),L=q(),y=_("button"),y.innerHTML=w,m=q(),C=_("div");for(let r=0;r<u.length;r+=1)u[r].c();this.h()},l(r){e=v(r,"SECTION",{});var p=E(e);t=v(p,"DIV",{class:!0,"data-svelte-h":!0}),P(t)!=="svelte-1j6jxhv"&&(t.innerHTML=n),l=z(p),o=v(p,"DIV",{class:!0});var s=E(o);d=v(s,"DIV",{class:!0});var I=E(d);k=v(I,"LABEL",{for:!0,"data-svelte-h":!0}),P(k)!=="svelte-15475si"&&(k.textContent=T),D=z(I),f=v(I,"SELECT",{id:!0,name:!0,class:!0});var ee=E(f);for(let O=0;O<g.length;O+=1)g[O].l(ee);ee.forEach(b),I.forEach(b),B=z(s),G=v(s,"DIV",{class:!0});var W=E(G);c=v(W,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0,class:!0}),L=z(W),y=v(W,"BUTTON",{class:!0,"data-svelte-h":!0}),P(y)!=="svelte-kzb3f0"&&(y.innerHTML=w),W.forEach(b),s.forEach(b),m=z(p),C=v(p,"DIV",{class:!0});var te=E(C);for(let O=0;O<u.length;O+=1)u[O].l(te);te.forEach(b),p.forEach(b),this.h()},h(){h(t,"class","topbarWrapper svelte-ah689q"),h(k,"for","type"),h(f,"id","type"),h(f,"name","type"),h(f,"class","svelte-ah689q"),a[0]===void 0&&me(()=>a[6].call(f)),h(d,"class","groupTypeFilter svelte-ah689q"),h(c,"type","text"),h(c,"id","search"),h(c,"name","search"),h(c,"placeholder","Search groups"),h(c,"class","svelte-ah689q"),h(y,"class","iconWrapper svelte-ah689q"),h(G,"class","searchbar svelte-ah689q"),h(o,"class","settingsBar svelte-ah689q"),h(C,"class","cardsContainer svelte-ah689q")},m(r,p){x(r,e,p),i(e,t),i(e,l),i(e,o),i(o,d),i(d,k),i(d,D),i(d,f);for(let s=0;s<g.length;s+=1)g[s]&&g[s].m(f,null);ae(f,a[0],!0),i(o,B),i(o,G),i(G,c),R(c,a[2]),i(G,L),i(G,y),i(e,m),i(e,C);for(let s=0;s<u.length;s+=1)u[s]&&u[s].m(C,null);$=!0,j||(A=[V(f,"change",a[6]),V(f,"change",a[5]),V(c,"change",a[4]),V(c,"input",a[7])],j=!0)},p(r,[p]){if(p&8){H=U(r[3]);let s;for(s=0;s<H.length;s+=1){const I=oe(r,H,s);g[s]?g[s].p(I,p):(g[s]=ie(I),g[s].c(),g[s].m(f,null))}for(;s<g.length;s+=1)g[s].d(1);g.length=H.length}if(p&9&&ae(f,r[0]),p&4&&c.value!==r[2]&&R(c,r[2]),p&2){M=U(r[1]);let s;for(s=0;s<M.length;s+=1){const I=le(r,M,s);u[s]?(u[s].p(I,p),F(u[s],1)):(u[s]=ue(I),u[s].c(),F(u[s],1),u[s].m(C,null))}for(_e(),s=M.length;s<u.length;s+=1)de(s);ve()}},i(r){if(!$){for(let p=0;p<M.length;p+=1)F(u[p]);$=!0}},o(r){u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)Y(u[p]);$=!1},d(r){r&&b(e),re(g,r),re(u,r),j=!1,ge(A)}}}function De(a,e,t){let n="All",l=["All","WhatsApp","Telegram","Other"],o=S,d="";function k(){t(1,o=ke(d))}function T(){t(1,o=we(n.toLowerCase())),console.log(n)}function D(){n=be(this),t(0,n),t(3,l)}function f(){d=this.value,t(2,d)}return[n,o,d,l,k,T,D,f]}class Ie extends K{constructor(e){super(),Z(this,e,De,Ce,X,{})}}function Te(a){let e,t;return e=new Ie({}),{c(){ce(e.$$.fragment)},l(n){pe(e.$$.fragment,n)},m(n,l){he(e,n,l),t=!0},p:Q,i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){Y(e.$$.fragment,n),t=!1},d(n){fe(e,n)}}}class Le extends K{constructor(e){super(),Z(this,e,null,Te,X,{})}}export{Le as component};