export const GroupsData = [
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
]

export function searchGroups(searchTerm) {
    let results = []
    searchTerm = searchTerm.toLowerCase()

    for (let group of GroupsData) {
        if (group.name.toLowerCase().includes(searchTerm) || group.desc.toLowerCase().includes(searchTerm)) {
            results.push(group)
        }
    }

    return results
}

export function filterByGroupType(type) {
    let groups = []

    switch (type) {
        case "all": {
            return GroupsData
        }
        case "whatsapp": {
            for (let group of GroupsData) {
                if (group.link.includes("chat.whatsapp")) {
                    groups.push(group)
                }
            }
            return groups
        }
        case "telegram": {
            for (let group of GroupsData) {
                if (group.link.includes("t.me")) {
                    groups.push(group)
                }
            }
            return groups
        }
        case "other": {
            for (let group of GroupsData) {
                if (!group.link.includes("t.me") && !group.link.includes("chat.whatsapp")) {
                    groups.push(group)
                }
            }
            return groups
        }
        default: return GroupsData
    }
}