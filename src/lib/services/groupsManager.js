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