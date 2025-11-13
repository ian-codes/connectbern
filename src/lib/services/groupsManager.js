import { GroupsData } from "$lib/models/GroupsData.js";

export function searchGroups(searchTerm, language) {
    let results = []
    searchTerm = searchTerm.toLowerCase()

    for (let group of GroupsData) {
        if (group.name[language].toLowerCase().includes(searchTerm) || group.desc[language].toLowerCase().includes(searchTerm)) {
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
        case "connectbern": {
            for (let group of GroupsData) {
                if (group.organizer === "connectbern") {
                    groups.push(group)
                }
            }
            return groups
        }
        case "whatsapp": {
            for (let group of GroupsData) {
                if (group.type.includes(type) || (group.type === "multiplatform" && group.link)) {
                    const groupCopy = { ...group }
                    // For multiplatform groups, override to show only WhatsApp when filtered
                    if (group.type === "multiplatform" && group.telegramLink) {
                        groupCopy._filteredPlatform = "whatsapp"
                    }
                    groups.push(groupCopy)
                }
            }
            return groups
        }
        case "telegram": {
            for (let group of GroupsData) {
                if (group.type.includes(type) || (group.type === "multiplatform" && group.telegramLink)) {
                    const groupCopy = { ...group }
                    // For multiplatform groups, override to show only Telegram when filtered
                    if (group.type === "multiplatform" && group.telegramLink) {
                        groupCopy._filteredPlatform = "telegram"
                    }
                    groups.push(groupCopy)
                }
            }
            return groups
        }
        case "facebook": {
            for (let group of GroupsData) {
                if (group.type.includes(type) || group.facebookLink) {
                    groups.push(group)
                }
            }
            return groups
        }
        case "other": {
            for (let group of GroupsData) {
                if (!group.type.includes("whatsapp") && !group.type.includes("telegram") && !group.type.includes("multiplatform") && !group.type.includes("facebook") && !group.facebookLink) {
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