import{s as K,n as Y,f as ve,r as ke}from"../chunks/scheduler.b95eede2.js";import{S as Z,i as ee,g as m,s as B,m as q,h as g,j as E,f as k,c as z,n as P,k as u,l as ae,a as te,y as o,o as le,x as J,B as oe,C as x,z as N,d as W,p as be,b as we,t as R,A as ie,r as fe,u as de,v as me,w as ge,D as Ee}from"../chunks/index.619ddb4d.js";import{e as Q}from"../chunks/each.e59479a4.js";const H=[{name:"Connect Bern",desc:"Generelle Hauptgruppe",img:"connect-bern.webp",link:"https://chat.whatsapp.com/FxFhMEQirDLHoRqQzY4UDz"},{name:"Sammlung von Telegramgruppen",desc:"Eine Sammlung von links-orientierten Gruppen auf Telegram",img:"telegramgruppen.webp",link:"https://t.me/unkomarkt_sammlung"},{name:"Spielegruppe",desc:"Gruppe für alles rund um das Spielen - mehr als 300 Mitglieder",img:"spielegruppe.webp",link:"https://linktr.ee/gamesbern"},{name:"Unkommerzieller Marktplatz",desc:"Gruppe zum Verschenken oder Austauschen - Mehr als 6500 Mitglieder",img:"marktplatz.webp",link:"https://t.me/%2BEiuWDO-bw-hhYzlk"},{name:"What's Up Bern",desc:"Eine WhatsApp Gruppe, um Menschen kennenzulernen und von Events zu erfahren",img:"whats-up-bern.webp",link:"https://linktr.ee/whatsupbern"},{name:"Let's Bern",desc:"Eine aktive Gruppe, die sich oft trifft",img:"lets-bern.webp",link:"https://chat.whatsapp.com/EXD1tYBN6STIwrWuWFlGLU"},{name:"Events and friends Bern",desc:"Eine weitere WhatsApp Gruppe, um Menschen kennenzulernen und von Events zu erfahren",img:"events-and-friends.webp",link:"https://chat.whatsapp.com/EaXqbWr3QFxLXIrOqD3QSM"},{name:"Gruppe für IT-Interessierte",desc:"Eine nicht offizielle Gruppe für den Chaos Treff (CCC/Hackerspace)",img:"it-gruppe.webp",link:"https://t.me/+e6QTJfwGEus0NThi"},{name:"Bärndütsch Konversationsgruppe",desc:"Um Bärndütch zu üben oder zu reden",img:"berndeutsch.webp",link:"https://chat.whatsapp.com/EbHDoONyHGL2ngoMJkriIC"},{name:"Israelis & Jews & Friends",desc:"A group for Israelis, Jews and friends",img:"israelis-jews-friends.webp",link:"https://chat.whatsapp.com/I33JBG0YYn9GceZaBaTnjP"},{name:"FIRE Community",desc:"The Bernese Meetup for the FIRE community (financial independence, retire early)",img:"fire-community.webp",link:"https://forum.mustachianpost.com/t/meetup-in-bern-for-coffee-beer-and-chat-about-fi-re-plans/8673/"}];function Ge(r){let e=[];r=r.toLowerCase();for(let t of H)(t.name.toLowerCase().includes(r)||t.desc.toLowerCase().includes(r))&&e.push(t);return e}function Ce(r){let e=[];switch(r){case"all":return H;case"whatsapp":{for(let t of H)t.link.includes("chat.whatsapp")&&e.push(t);return e}case"telegram":{for(let t of H)t.link.includes("t.me")&&e.push(t);return e}case"other":{for(let t of H)!t.link.includes("t.me")&&!t.link.includes("chat.whatsapp")&&e.push(t);return e}default:return H}}function ye(r){let e,t,n,l,h,d=r[0].name+"",b,L,T,f=r[0].desc+"",$,G,c,M,C;return{c(){e=m("div"),t=m("div"),n=B(),l=m("div"),h=m("h3"),b=q(d),L=B(),T=m("p"),$=q(f),G=B(),c=m("a"),M=q("Join"),this.h()},l(w){e=g(w,"DIV",{class:!0});var _=E(e);t=g(_,"DIV",{class:!0,style:!0}),E(t).forEach(k),n=z(_),l=g(_,"DIV",{});var y=E(l);h=g(y,"H3",{class:!0});var F=E(h);b=P(F,d),F.forEach(k),L=z(y),T=g(y,"P",{});var j=E(T);$=P(j,f),j.forEach(k),y.forEach(k),G=z(_),c=g(_,"A",{href:!0,target:!0,class:!0});var D=E(c);M=P(D,"Join"),D.forEach(k),_.forEach(k),this.h()},h(){u(t,"class","img svelte-vp3klp"),ae(t,"background","url('groups/"+r[0].img+"')"),u(h,"class","svelte-vp3klp"),u(c,"href",C=r[0].link),u(c,"target","_blank"),u(c,"class","joinButton svelte-vp3klp"),u(e,"class","container svelte-vp3klp")},m(w,_){te(w,e,_),o(e,t),o(e,n),o(e,l),o(l,h),o(h,b),o(l,L),o(l,T),o(T,$),o(e,G),o(e,c),o(c,M)},p(w,[_]){_&1&&ae(t,"background","url('groups/"+w[0].img+"')"),_&1&&d!==(d=w[0].name+"")&&le(b,d),_&1&&f!==(f=w[0].desc+"")&&le($,f),_&1&&C!==(C=w[0].link)&&u(c,"href",C)},i:Y,o:Y,d(w){w&&k(e)}}}function Te(r,e,t){let{GroupDataObject:n}=e;return r.$$set=l=>{"GroupDataObject"in l&&t(0,n=l.GroupDataObject)},[n]}class De extends Z{constructor(e){super(),ee(this,e,Te,ye,K,{GroupDataObject:0})}}function ue(r,e,t){const n=r.slice();return n[8]=e[t],n}function ce(r,e,t){const n=r.slice();return n[11]=e[t],n}function pe(r){let e,t=r[11]+"",n;return{c(){e=m("option"),n=q(t),this.h()},l(l){e=g(l,"OPTION",{});var h=E(e);n=P(h,t),h.forEach(k),this.h()},h(){e.__value=r[11],x(e,e.__value)},m(l,h){te(l,e,h),o(e,n)},p:Y,d(l){l&&k(e)}}}function he(r){let e,t;return e=new De({props:{GroupDataObject:r[8]}}),{c(){fe(e.$$.fragment)},l(n){de(e.$$.fragment,n)},m(n,l){me(e,n,l),t=!0},p(n,l){const h={};l&2&&(h.GroupDataObject=n[8]),e.$set(h)},i(n){t||(W(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){ge(e,n)}}}function Ie(r){let e,t,n,l="Groups",h,d,b,L="Type",T,f,$,G,c,M,C,w='<span class="searchIcon svelte-1titrsf" style="background: url(&#39;search.svg&#39;);"></span>',_,y,F=`In these groups you can do many different things. If you have a general 
        question, ask in the <a href="https://chat.whatsapp.com/FxFhMEQirDLHoRqQzY4UDz" class="svelte-1titrsf">Connect Bern</a> group or read the descriptions 
        of the groups or translate the name of the group to English if it&#39;s in German, 
        so you understand what the group is about.`,j,D,U,X,ne,A=Q(r[3]),v=[];for(let a=0;a<A.length;a+=1)v[a]=pe(ce(r,A,a));let O=Q(r[1]),i=[];for(let a=0;a<O.length;a+=1)i[a]=he(ue(r,O,a));const _e=a=>R(i[a],1,1,()=>{i[a]=null});return{c(){e=m("section"),t=m("div"),n=m("h2"),n.textContent=l,h=B(),d=m("div"),b=m("label"),b.textContent=L,T=B(),f=m("select");for(let a=0;a<v.length;a+=1)v[a].c();$=B(),G=m("div"),c=m("input"),M=B(),C=m("button"),C.innerHTML=w,_=B(),y=m("p"),y.innerHTML=F,j=B(),D=m("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=g(a,"SECTION",{class:!0});var p=E(e);t=g(p,"DIV",{class:!0});var s=E(t);n=g(s,"H2",{class:!0,"data-svelte-h":!0}),J(n)!=="svelte-182o856"&&(n.textContent=l),h=z(s),d=g(s,"DIV",{class:!0});var I=E(d);b=g(I,"LABEL",{for:!0,"data-svelte-h":!0}),J(b)!=="svelte-15475si"&&(b.textContent=L),T=z(I),f=g(I,"SELECT",{id:!0,name:!0,class:!0});var se=E(f);for(let S=0;S<v.length;S+=1)v[S].l(se);se.forEach(k),I.forEach(k),$=z(s),G=g(s,"DIV",{class:!0});var V=E(G);c=g(V,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0,class:!0}),M=z(V),C=g(V,"BUTTON",{class:!0,"data-svelte-h":!0}),J(C)!=="svelte-wypgrr"&&(C.innerHTML=w),V.forEach(k),s.forEach(k),_=z(p),y=g(p,"P",{class:!0,"data-svelte-h":!0}),J(y)!=="svelte-1vpefc1"&&(y.innerHTML=F),j=z(p),D=g(p,"DIV",{class:!0});var re=E(D);for(let S=0;S<i.length;S+=1)i[S].l(re);re.forEach(k),p.forEach(k),this.h()},h(){u(n,"class","svelte-1titrsf"),u(b,"for","type"),u(f,"id","type"),u(f,"name","type"),u(f,"class","svelte-1titrsf"),r[0]===void 0&&ve(()=>r[6].call(f)),u(d,"class","groupTypeFilter svelte-1titrsf"),u(c,"type","text"),u(c,"id","search"),u(c,"name","search"),u(c,"placeholder","Search groups"),u(c,"class","svelte-1titrsf"),u(C,"class","iconWrapper svelte-1titrsf"),u(G,"class","searchbar svelte-1titrsf"),u(t,"class","topbarWrapper svelte-1titrsf"),u(y,"class","svelte-1titrsf"),u(D,"class","cardsContainer svelte-1titrsf"),u(e,"class","svelte-1titrsf")},m(a,p){te(a,e,p),o(e,t),o(t,n),o(t,h),o(t,d),o(d,b),o(d,T),o(d,f);for(let s=0;s<v.length;s+=1)v[s]&&v[s].m(f,null);oe(f,r[0],!0),o(t,$),o(t,G),o(G,c),x(c,r[2]),o(G,M),o(G,C),o(e,_),o(e,y),o(e,j),o(e,D);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(D,null);U=!0,X||(ne=[N(f,"change",r[6]),N(f,"change",r[5]),N(c,"change",r[4]),N(c,"input",r[7])],X=!0)},p(a,[p]){if(p&8){A=Q(a[3]);let s;for(s=0;s<A.length;s+=1){const I=ce(a,A,s);v[s]?v[s].p(I,p):(v[s]=pe(I),v[s].c(),v[s].m(f,null))}for(;s<v.length;s+=1)v[s].d(1);v.length=A.length}if(p&9&&oe(f,a[0]),p&4&&c.value!==a[2]&&x(c,a[2]),p&2){O=Q(a[1]);let s;for(s=0;s<O.length;s+=1){const I=ue(a,O,s);i[s]?(i[s].p(I,p),W(i[s],1)):(i[s]=he(I),i[s].c(),W(i[s],1),i[s].m(D,null))}for(be(),s=O.length;s<i.length;s+=1)_e(s);we()}},i(a){if(!U){for(let p=0;p<O.length;p+=1)W(i[p]);U=!0}},o(a){i=i.filter(Boolean);for(let p=0;p<i.length;p+=1)R(i[p]);U=!1},d(a){a&&k(e),ie(v,a),ie(i,a),X=!1,ke(ne)}}}function Be(r,e,t){let n="All",l=["All","WhatsApp","Telegram","Other"],h=H,d="";function b(){t(1,h=Ge(d))}function L(){t(1,h=Ce(n.toLowerCase())),console.log(n)}function T(){n=Ee(this),t(0,n),t(3,l)}function f(){d=this.value,t(2,d)}return[n,h,d,l,b,L,T,f]}class ze extends Z{constructor(e){super(),ee(this,e,Be,Ie,K,{})}}function Le(r){let e,t;return e=new ze({}),{c(){fe(e.$$.fragment)},l(n){de(e.$$.fragment,n)},m(n,l){me(e,n,l),t=!0},p:Y,i(n){t||(W(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){ge(e,n)}}}class Se extends Z{constructor(e){super(),ee(this,e,null,Le,K,{})}}export{Se as component};