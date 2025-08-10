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

export function filterByMultiplePlatforms(selectedPlatforms) {
    // If no platforms selected, return all groups
    if (selectedPlatforms.length === 0) {
        return GroupsData;
    }
    
    let results = [];
    
    for (let group of GroupsData) {
        let shouldInclude = false;
        
        for (let platform of selectedPlatforms) {
            switch (platform.toLowerCase()) {
                case "whatsapp":
                    if (group.type === "whatsapp") {
                        shouldInclude = true;
                    }
                    break;
                case "telegram":
                    if (group.type === "telegram") {
                        shouldInclude = true;
                    }
                    break;
                case "other":
                    if (group.type === "other" || group.type === "multiplatform") {
                        shouldInclude = true;
                    }
                    break;
            }
            
            // If we found a match, no need to check other platforms for this group
            if (shouldInclude) break;
        }
        
        if (shouldInclude) {
            results.push(group);
        }
    }
    
    return results;
}