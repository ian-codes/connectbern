export const GroupsData = [
    {
        name: "Connect Bern",
        slug: "connect-bern",
        desc: {
            de: "Generelle Hauptgruppe.",
            en: "General-purpose group."
        },
        img: "connect-bern.webp",
        type: "whatsapp",
        link: "http://tiny.cc/connectbernwhatsapp"
    },
    {
        name: {
            de: "Sammlung von Telegramgruppen",
            en: "Collection of Telegram Groups"
        },
        slug: "telegram-group-collection",
        desc: {
            de: "Eine Sammlung von links-orientierten Gruppen auf Telegram.",
            en: "A collection of various kinds of groups on Telegram."
        },
        img: "telegramgruppen.webp",
        type: "telegram",
        link: "https://tiny.cc/unkomarktbern"
    },
    {
        name: {
            de: "Spielegruppe",
            en: "Game Group"
        },
        slug: "game-group",
        desc: {
            de: "Gruppe für alles rund um das Spielen - mehr als 300 Mitglieder.",
            en: "A group for everything related to games. Over 300 members."
        },
        img: "spielegruppe.webp",
        type: "multiplatform",
        link: "https://linktr.ee/gamesbern"
    },
    {
        name: {
            de: "Unkommerzieller Marktplatz",
            en: "Non-commercial Market"
        },
        slug: "non-commercial-marketplace",
        desc: {
            de: "Gruppe zum Verschenken oder Austauschen. Mehr als 6500 Mitglieder.",
            en: "A group for gifting or trading things. Over 6500 members."
        },
        img: "marktplatz.webp",
        type: "telegram",
        link: "https://tiny.cc/unkomarktbern"
    },
    {
        name: "What's Up Bern",
        slug: "whats-up-bern",
        desc: {
            de: "Eine WhatsApp Gruppe, um Menschen kennenzulernen und von Events zu erfahren.",
            en: "A WhatsApp group to meet new people and get notified about upcoming events."
        },
        img: "whats-up-bern.webp",
        type: "multiplatform",
        link: "https://linktr.ee/whatsupbern"
    },
    {
        name: "Let's Bern",
        slug: "lets-bern",
        desc: {
            de: "Eine aktive Gruppe, die sich oft trifft.",
            en: "An active group that regularly meets up."
        },
        img: "lets-bern.webp",
        type: "whatsapp",
        link: "http://tiny.cc/letsbern"
    },
    {
        name: "Events and friends Bern",
        slug: "events-and-friends-bern",
        desc: {
            de: "Eine weitere WhatsApp Gruppe, um Menschen kennenzulernen und von Events zu erfahren.",
            en: "A WhatsApp group to meet new people and get notified about upcoming events."
        },
        img: "events-and-friends.webp",
        type: "whatsapp",
        link: "http://tiny.cc/eventsandfriendsbern"
    },
    {
        name: {
            de: "Gruppe für IT-Interessierte",
            en: "Group for IT enthusiasts"
        },
        slug: "it-group",
        desc: {
            de: "Eine inoffizielle Gruppe für den Chaos Treff (CCC/Hackerspace).",
            en: "Unofficial gruop for the Chaos Treff (CCC/Hackerspace)."
        },
        img: "it-gruppe.webp",
        type: "telegram",
        link: "https://t.me/+e6QTJfwGEus0NThi"
    },
    {
        name: {
            de: "Bärndütsch Konversationsgruppe",
            en: "Bernese Swiss German Conversational Group"
        },
        slug: "bernese-swiss-german-conversational-group",
        desc: {
            de: "Um Bärndütch zu üben oder zu reden.",
            en: "A group to practice and speak Bärndütsch (Bernese Swiss German)."
        },
        img: "berndeutsch.webp",
        type: "whatsapp",
        link: "https://tiny.cc/berndeutsch"
    },
    {
        name: "Israelis & Jews & Friends",
        slug: "israelis-jews-and-friends",
        desc: {
            en: "A group for Israelis, Jews and friends.",
            de: "Eine Gruppe für Israelis, Jüdische und Freunde."
        },
        img: "israelis-jews-friends.webp",
        type: "whatsapp",
        link: "https://tiny.cc/israelisjewsfriends"
    },
    {
        name: "FIRE Community",
        slug: "fire-community-bern",
        desc: {
            en: "The Bernese Meetup for the FIRE community (financial independence, retire early).",
            de: "Die berner Meetup-Gruppe der FIRE-Community (Financial Independence, Retire Early)."
        },
        img: "fire-community.webp",
        type: "other",
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
                if (group.type.includes(type)) {
                    groups.push(group)
                }
            }
            return groups
        }
        case "telegram": {
            for (let group of GroupsData) {
                if (group.type.includes(type)) {
                    groups.push(group)
                }
            }
            return groups
        }
        case "other": {
            for (let group of GroupsData) {
                if (!group.type.includes("whatsapp") && !group.type.includes("telegram") && !group.type.includes("multiplatform")) {
                    groups.push(group)
                }
            }
            return groups
        }
        case "multiplatform": {
            for (let group of GroupsData) {
                if (group.type.includes(type)) {
                    groups.push(group)
                }
            }
            return groups
        }
        default: return GroupsData
    }
}