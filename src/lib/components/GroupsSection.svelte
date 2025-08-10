<script>
    import { GroupsData } from "$lib/models/GroupsData.js";
    import { searchGroups, filterByGroupType, filterByMultiplePlatforms } from "$lib/services/groupsManager.js";
    import { currentLanguage } from '$lib/stores/languageStore';

    $: language = $currentLanguage;

    import GroupCard from "$lib/components/GroupCard.svelte";

    import { t } from "$lib/locales/translations.js";

    let groupType = "All"
    let groupTypes = ["WhatsApp", "Telegram", "Other"]

    // Change to support multiple selections
    let selectedPlatforms = new Set(["WhatsApp", "Telegram", "Other"]) // Default to all remaining platforms
    
    let groups = GroupsData

    let searchTerm = ""

    function handleSearch() {
        groups = searchGroups(searchTerm, language)
    }

    // New function to handle multiple platform selection
    function handlePlatformToggle(platform) {
        // Toggle the platform
        if (selectedPlatforms.has(platform)) {
            selectedPlatforms.delete(platform)
        } else {
            selectedPlatforms.add(platform)
        }
        
        // If no platforms selected, show all groups (select all platforms)
        if (selectedPlatforms.size === 0) {
            selectedPlatforms = new Set(["WhatsApp", "Telegram", "Other"])
        }
        
        // Update the groups display
        groups = filterByMultiplePlatforms(Array.from(selectedPlatforms))
    }

    // Update groups when selectedPlatforms changes
    $: {
        groups = filterByMultiplePlatforms(Array.from(selectedPlatforms))
    }
</script>


<section>
    <div class="topbarWrapper">
        <h1>
            {t[language]["groups"]}
        </h1>
        <p>
            {@html t[language]['groups-description']}
        </p>
    </div>

    <div class="settingsBar">
        <div class="platformFilter">
            <label class="filter-label">Platform:</label>
            <div class="checkbox-group">
                {#each groupTypes as platform}
                    <label class="checkbox-item">
                        <input 
                            type="checkbox" 
                            checked={selectedPlatforms.has(platform)}
                            on:change={() => handlePlatformToggle(platform)}
                        />
                        <span class="checkbox-text">{platform}</span>
                    </label>
                {/each}
            </div>
        </div>
        
        <div class="searchbar">
            <input 
                on:change={handleSearch} 
                bind:value={searchTerm} 
                type="text"
                title="Search Groups"
                id="search" 
                name="search" 
                placeholder="{t[language]["search-groups"]}" />

            <button 
                title="Go" 
                class="iconWrapper">
                <span 
                    class="searchIcon" 
                    style="background: url('/icons/search.svg');"/>
            </button>
        </div>
    </div>

    <div class="cardsContainer">
        {#each groups as groupDataObject}
            <GroupCard GroupDataObject={groupDataObject} />
        {/each}
    </div>
</section>


<style>
    @media (max-width: 800px) {
        .topbarWrapper {
            flex-wrap: wrap;
            gap: 1em;
            margin: 0 !important;
            padding: 0 0 1em 0 !important;
        }

        .settingsBar {
            margin: 0 !important;
            padding: 0 !important;
            flex-direction: column;
            align-items: stretch;
        }

        .platformFilter {
            padding: 0.75rem;
            font-size: 0.8rem;
        }

        .checkbox-group {
            justify-content: flex-start;
            gap: 0.5rem;
        }

        .checkbox-item {
            padding: 0.2rem 0.4rem;
        }

        .checkbox-text {
            font-size: 0.8rem;
        }
    }

    .platformFilter {
        color: white;
        font-size: 0.9rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        box-shadow: 0 2px 2px rgba(50, 50, 50, 0.425);
    }

    .filter-label {
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .checkbox-group {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
    }

    .checkbox-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        transition: background-color 0.2s ease;
    }

    .checkbox-item:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .checkbox-item input[type="checkbox"] {
        width: 16px;
        height: 16px;
        accent-color: #0066cc;
        cursor: pointer;
    }

    .checkbox-text {
        font-size: 0.9rem;
        user-select: none;
    }

    /* Old styles to remove/replace */
    .groupTypeFilter {
        display: none; /* Hide old filter */
    }

    select {
        background: linear-gradient(rgba(255, 255, 255, 0.202), transparent);
        color: white;
        font-size: 1em;
        border: none;
        padding: .5em;
        cursor: pointer;
    }

    select option {
        color: black !important;
    }

    .topbarWrapper {
        margin-bottom: 1em;
        padding-bottom: 2em;
    }

    .settingsBar {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        align-items: start;
        justify-content: space-between;
        margin: 0 1rem;
        margin-bottom: 1em;
        padding-bottom: 2em;
    }

    .searchbar {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 1em;
    }

    #search {
        width: 100%;
        padding: .5em !important;
    }

    .iconWrapper {
        padding: .5em;
        border-radius: 100%;
        box-shadow: 0 2px 2px rgba(50, 50, 50, 0.425);
        cursor: pointer;
        transition: all .1s ease;
        border: none;
        background: linear-gradient(rgba(255, 255, 255, 0.202), transparent);
    }

    .iconWrapper:hover, input:hover, input:focus {
        box-shadow: 0 2px 1px 2px rgba(255, 255, 255, 0.815);
    }

    .searchIcon {
        filter: invert(1);
        display: block;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 20px;
        height: 20px;
    }

    .cardsContainer {
        display: flex;
        row-gap: 2em;
        column-gap: 1em;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>