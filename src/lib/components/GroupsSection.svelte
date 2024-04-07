<script>
    import { GroupsData } from "$lib/models/GroupsData.js";
    import { searchGroups, filterByGroupType } from "$lib/services/groupsManager.js";
    import { currentLanguage } from '$lib/stores/languageStore';

    $: language = $currentLanguage;

    import GroupCard from "$lib/components/GroupCard.svelte";

    import { t } from "$lib/locales/translations.js";

    let groupType = "All"
    let groupTypes = ["All", "WhatsApp", "Telegram", "Multiplatform", "Other"]

    let groups = GroupsData

    let searchTerm = ""

    function handleSearch() {
        groups = searchGroups(searchTerm, language)
    }

    function handleGroupTypeChange() {
        groups = filterByGroupType(groupType.toLowerCase())
        console.log(groupType)
    }
</script>


<section>
    <div class="topbarWrapper">
        <h2>
            {t[language]["groups"]}
        </h2>
        <p>
            {@html t[language]['groups-description']}
        </p>
    </div>

    <div class="settingsBar">
        <div class="groupTypeFilter">
            <label title="Filter groups by type" for="type">Type</label>
            <select bind:value={groupType} 
                on:change={handleGroupTypeChange} 
                title="Filter groups by type" 
                id="type" 
                name="type">

                {#each groupTypes as type}
                    <option value={type}>{type}</option>
                {/each}
            </select>
        </div>
        
        <div class="searchbar">
            <input on:change={handleSearch} bind:value={searchTerm} 
                type="text"
                title="Search Groups"
                id="search" 
                name="search" 
                placeholder="{t[language]["search-groups"]}" />

            <button title="Go" class="iconWrapper">
                <span class="searchIcon" style="background: url('/icons/search.svg');"/>
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
        }

        p {
            font-size: 1em !important;
        }
    }

    a {
        text-decoration-style: solid;
        text-underline-offset: .4rem;
        color: white;
    }

    a:hover {
        text-decoration-style: wavy;

    }

    p {
        font-size: 1.4rem;
    }

    .groupTypeFilter {
        color: white;
        font-size: 1em;
        border: none;
        box-shadow: 0 2px 2px rgba(50, 50, 50, 0.425);
        display: flex;
        align-items: center;
        gap: 1em;
        padding-left: .5em;
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
        display: flex;
        flex-direction: column;
        align-items: start;
        margin: 0;
        gap: 1em;
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
        border-radius: none !important;
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
        gap: 1em;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>