import { c as create_ssr_component, e as escape, f as add_attribute, b as each, v as validate_component } from "../../chunks/ssr.js";
const GroupsData = [
  {
    name: "Connect Bern",
    desc: "Generelle Hauptgruppe",
    img: "connect-bern.webp",
    link: "https://chat.whatsapp.com/FxFhMEQirDLHoRqQzY4UDz"
  },
  {
    name: "Sammlung von Telegramgruppen",
    desc: "Eine Sammlung von links-orientierten Gruppen auf Telegram",
    img: "telegramgruppen.webp",
    link: "https://t.me/unkomarkt_sammlung"
  },
  {
    name: "Spielegruppe",
    desc: "Gruppe für alles rund um das Spielen - mehr als 300 Mitglieder",
    img: "spielegruppe.webp",
    link: "https://linktr.ee/gamesbern"
  },
  {
    name: "Unkommerzieller Marktplatz",
    desc: "Gruppe zum Verschenken oder Austauschen - Mehr als 6500 Mitglieder",
    img: "marktplatz.webp",
    link: "https://t.me/%2BEiuWDO-bw-hhYzlk"
  },
  {
    name: "What's Up Bern",
    desc: "Eine WhatsApp Gruppe, um Menschen kennenzulernen und von Events zu erfahren",
    img: "whats-up-bern.webp",
    link: "https://linktr.ee/whatsupbern"
  },
  {
    name: "Let's Bern",
    desc: "Eine aktive Gruppe, die sich oft trifft",
    img: "lets-bern.webp",
    link: "https://chat.whatsapp.com/EXD1tYBN6STIwrWuWFlGLU"
  },
  {
    name: "Events and friends Bern",
    desc: "Eine weitere WhatsApp Gruppe, um Menschen kennenzulernen und von Events zu erfahren",
    img: "events-and-friends.webp",
    link: "https://chat.whatsapp.com/EaXqbWr3QFxLXIrOqD3QSM"
  },
  {
    name: "Gruppe für IT-Interessierte",
    desc: "Eine nicht offizielle Gruppe für den Chaos Treff (CCC/Hackerspace)",
    img: "it-gruppe.webp",
    link: "https://t.me/+e6QTJfwGEus0NThi"
  },
  {
    name: "Bärndütsch Konversationsgruppe",
    desc: "Um Bärndütch zu üben oder zu reden",
    img: "berndeutsch.webp",
    link: "https://chat.whatsapp.com/EbHDoONyHGL2ngoMJkriIC"
  },
  {
    name: "Israelis & Jews & Friends",
    desc: "A group for Israelis, Jews and friends",
    img: "israelis-jews-friends.webp",
    link: "https://chat.whatsapp.com/I33JBG0YYn9GceZaBaTnjP"
  },
  {
    name: "FIRE Community",
    desc: "The Bernese Meetup for the FIRE community (financial independence, retire early)",
    img: "fire-community.webp",
    link: "https://forum.mustachianpost.com/t/meetup-in-bern-for-coffee-beer-and-chat-about-fi-re-plans/8673/"
  }
];
const GroupCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".img.svelte-1hmit4o.svelte-1hmit4o{position:relative;background-position:center;background-size:contain !important;background-repeat:no-repeat;width:100px;height:100px;border-radius:100%;border:2px solid black;box-shadow:0 5px 3px rgb(0, 0, 0), 0 0 20px inset rgba(255, 255, 255, 0.137);filter:saturate(0);transition:all .2s ease;margin-top:1em}.joinButton.svelte-1hmit4o.svelte-1hmit4o{opacity:0;position:absolute;bottom:0;width:100%;text-decoration:none;padding:1em;background:black;border-radius:1em;text-transform:uppercase;letter-spacing:3px;font-size:.8em;font-weight:bold;color:white;transition:all .2s ease}h3.svelte-1hmit4o.svelte-1hmit4o{font-size:1.5em;text-align:center}@keyframes svelte-1hmit4o-rainbow{0%{filter:saturate(1) hue-rotate(0)}100%{filter:saturate(1) hue-rotate(360deg)}}.container.svelte-1hmit4o.svelte-1hmit4o{color:white;text-align:center;display:flex;flex-direction:column;align-items:center;width:300px;height:300px;padding:1em;cursor:pointer;transition:.2s ease all;position:relative;overflow:hidden;border:3px solid white;background:linear-gradient(rgba(196, 196, 196, 0.03), transparent);box-shadow:0 5px 3px 2px rgba(0, 0, 0, 0.158), 0 0 10px rgba(255, 255, 255, 0.089), 0 0 30px rgba(255, 255, 255, 0.199) inset}.container.svelte-1hmit4o.svelte-1hmit4o:hover,.container.svelte-1hmit4o.svelte-1hmit4o:focus{transform:scale(1.05);box-shadow:0 5px 5px 5px rgba(0, 0, 0, 0.363);background:white;color:black}.container.svelte-1hmit4o:hover .img.svelte-1hmit4o{animation:svelte-1hmit4o-rainbow 5s infinite linear}.container.svelte-1hmit4o:hover .joinButton.svelte-1hmit4o{opacity:1}.joinButton.svelte-1hmit4o.svelte-1hmit4o::after{opacity:0;position:absolute;content:'→';right:10em;pointer-events:none;transition:opacity .1s ease}.container.svelte-1hmit4o:hover .joinButton.svelte-1hmit4o:hover::after{opacity:1}",
  map: null
};
const GroupCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { GroupDataObject } = $$props;
  if ($$props.GroupDataObject === void 0 && $$bindings.GroupDataObject && GroupDataObject !== void 0)
    $$bindings.GroupDataObject(GroupDataObject);
  $$result.css.add(css$1);
  return `<div class="container svelte-1hmit4o"><div class="img svelte-1hmit4o" style="${"background: url('/groups/" + escape(GroupDataObject.img, true) + "');"}"></div> <div><h3 class="svelte-1hmit4o">${escape(GroupDataObject.name)}</h3> <p>${escape(GroupDataObject.desc)}</p></div> <a${add_attribute("href", GroupDataObject.link, 0)} target="_blank" class="joinButton svelte-1hmit4o">Join</a> </div>`;
});
const GroupsSection_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 800px){.topbarWrapper.svelte-ah689q.svelte-ah689q{flex-wrap:wrap;gap:1em;margin:0 !important;padding:0 0 1em 0 !important}.settingsBar.svelte-ah689q.svelte-ah689q{margin:0 !important;padding:0 !important}}p.svelte-ah689q a.svelte-ah689q{text-decoration:none;color:white;text-shadow:1px 1px 2px black}.groupTypeFilter.svelte-ah689q.svelte-ah689q{color:white;background:rgba(255, 255, 255, 0.062);font-size:1em;border-radius:.5em;border:none;box-shadow:0 2px 2px rgba(50, 50, 50, 0.425);display:flex;align-items:center;gap:1em;padding-left:.5em}select.svelte-ah689q.svelte-ah689q{background:linear-gradient(rgba(255, 255, 255, 0.202), transparent);color:white;font-size:1em;border:none;padding:.5em;border-radius:0 .5em .5em 0;cursor:pointer}select.svelte-ah689q option.svelte-ah689q{color:black !important}.topbarWrapper.svelte-ah689q.svelte-ah689q{display:flex;flex-direction:column;align-items:start;margin:0;gap:1em;margin-bottom:1em;padding-bottom:2em;border-bottom:1px dashed rgba(255, 255, 255, 0.486)}.settingsBar.svelte-ah689q.svelte-ah689q{display:flex;flex-wrap:wrap;gap:1em;align-items:start;justify-content:space-between;margin:0 1rem;margin-bottom:1em;padding-bottom:2em}.searchbar.svelte-ah689q.svelte-ah689q{display:flex;align-items:center;justify-content:space-evenly;gap:1em}.iconWrapper.svelte-ah689q.svelte-ah689q{padding:.5em;border-radius:100%;box-shadow:0 2px 2px rgba(50, 50, 50, 0.425);cursor:pointer;transition:all .1s ease;border:none;background:linear-gradient(rgba(255, 255, 255, 0.202), transparent)}.iconWrapper.svelte-ah689q.svelte-ah689q:hover,input.svelte-ah689q.svelte-ah689q:hover,input.svelte-ah689q.svelte-ah689q:focus{box-shadow:0 2px 1px 2px rgba(255, 255, 255, 0.815)}.searchIcon.svelte-ah689q.svelte-ah689q{filter:invert(1);display:block;background-size:contain;background-repeat:no-repeat;background-position:center;width:20px;height:20px}.cardsContainer.svelte-ah689q.svelte-ah689q{display:flex;gap:1em;flex-wrap:wrap;justify-content:center;align-items:center}",
  map: null
};
const GroupsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let groupTypes = ["All", "WhatsApp", "Telegram", "Other"];
  let groups = GroupsData;
  let searchTerm = "";
  $$result.css.add(css);
  return `<section><div class="topbarWrapper svelte-ah689q" data-svelte-h="svelte-1j6jxhv"><h2>Groups</h2> <p class="svelte-ah689q">In these groups you can do many different things. If you have a general 
            question, ask in the <a href="https://chat.whatsapp.com/FxFhMEQirDLHoRqQzY4UDz" class="svelte-ah689q">Connect Bern</a> group or read the descriptions 
            of the groups or translate the name of the group to English if it&#39;s in German, 
            so you understand what the group is about.</p></div> <div class="settingsBar svelte-ah689q"><div class="groupTypeFilter svelte-ah689q"><label for="type" data-svelte-h="svelte-15475si">Type</label> <select id="type" name="type" class="svelte-ah689q">${each(groupTypes, (type) => {
    return `<option${add_attribute("value", type, 0)} class="svelte-ah689q">${escape(type)}</option>`;
  })}</select></div> <div class="searchbar svelte-ah689q"><input type="text" id="search" name="search" placeholder="Search groups" class="svelte-ah689q"${add_attribute("value", searchTerm, 0)}> <button class="iconWrapper svelte-ah689q" data-svelte-h="svelte-kzb3f0"><span class="searchIcon svelte-ah689q" style="background: url('/search.svg');"></span></button></div></div> <div class="cardsContainer svelte-ah689q">${each(groups, (groupDataObject) => {
    return `${validate_component(GroupCard, "GroupCard").$$render($$result, { GroupDataObject: groupDataObject }, {}, {})}`;
  })}</div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(GroupsSection, "GroupsSection").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
