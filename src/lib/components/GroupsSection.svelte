<script>
    import { GroupsData } from "$lib/models/GroupsData.js";
    import { searchGroups, filterByGroupType } from "$lib/services/groupsManager.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    import GroupCard from "$lib/components/GroupCard.svelte";
    import { t } from "$lib/locales/translations.js";

    $: language = $currentLanguage;

    const cbGroups = GroupsData.filter(g => g.organizer === 'connectbern' && g.slug !== 'community-groups');
    const allOtherGroups = GroupsData.filter(g => g.organizer !== 'connectbern' && g.slug !== 'community-groups');

    let groupType = "All";
    let groupTypes = ["All", "WhatsApp", "Telegram", "Facebook", "Multiplatform", "Other"];
    let groups = allOtherGroups;
    let searchTerm = "";
    let cbExpanded = true;
    let filteredCbGroups = cbGroups;

    function handleSearch() {
        if (!searchTerm.trim()) {
            groups = allOtherGroups;
            filteredCbGroups = cbGroups;
            return;
        }
        const all = searchGroups(searchTerm, language);
        filteredCbGroups = all.filter(g => g.organizer === 'connectbern' && g.slug !== 'community-groups');
        groups = all.filter(g => g.organizer !== 'connectbern' && g.slug !== 'community-groups');
        if (filteredCbGroups.length > 0) cbExpanded = true;
    }

    function handleGroupTypeChange() {
        const filterType = groupType.toLowerCase();
        groups = filterType === 'all'
            ? allOtherGroups
            : filterByGroupType(filterType).filter(g => g.organizer !== 'connectbern' && g.slug !== 'community-groups');
    }
</script>


<section>
    <div class="topbarWrapper">
        <h1>{t[language]["groups"]}</h1>
        <p>{@html t[language]['groups-description']}</p>
        <div class="contactButtons">
            <span class="contactLabel">{language === 'de' ? 'Fragen zu den Gruppen? Schreib uns direkt auf' : 'Questions about the groups? Reach out directly on'}</span>
            <a
                href="https://wa.me/41783166727?text={encodeURIComponent(language === 'de' ? 'Hallo, ich würde gerne mehr über eure Gruppen erfahren.' : 'Hi, I would like to understand more about your groups.')}"
                target="_blank"
                rel="noopener noreferrer"
                class="contactBtn whatsappBtn"
            >
                WhatsApp
            </a>
            <span class="contactLabel">{language === 'de' ? 'oder' : 'or'}</span>
            <a href="/contact" class="contactBtn writeUsBtn">
                {language === 'de' ? 'hier' : 'here'}
            </a>
        </div>
    </div>

    <div class="settingsBar">
        <div class="groupTypeFilter">
            <label title="Filter groups by type" for="type">Type</label>
            <select bind:value={groupType} on:change={handleGroupTypeChange} title="Filter groups by type" id="type" name="type">
                {#each groupTypes as type}
                    <option value={type}>{type}</option>
                {/each}
            </select>
        </div>
        <div class="searchbar">
            <input
                on:input={handleSearch}
                bind:value={searchTerm}
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

    <!-- Connect Bern Groups Section -->
    <div class="cbSection">
        <button class="cbBanner" on:click={() => cbExpanded = !cbExpanded}>
            <img src="/groups/connect-bern-logo-orange.png" alt="Connect Bern" class="cbLogo" />
            <div class="cbBannerText">
                <h2>{language === 'de' ? 'Connect Bern Gruppen' : 'Connect Bern Groups'}</h2>
                <p>{language === 'de' ? 'Gruppen, die wir organisieren' : 'Groups we organise'}</p>
            </div>
            <span class="cbArrow" class:rotated={cbExpanded}>▼</span>
        </button>

        {#if cbExpanded}
            <div class="cbSubgrid">
                {#each filteredCbGroups as groupDataObject (groupDataObject.slug + (groupDataObject._filteredPlatform || ''))}
                    <GroupCard GroupDataObject={groupDataObject} />
                {/each}
            </div>
            <a href="/groups/community-groups" class="cbAllGroupsLink">
                {language === 'de' ? 'Mehr Connect Bern Gruppen' : 'More Connect Bern groups'} →
            </a>
        {/if}
    </div>

    <!-- Other Groups -->
    <div class="cardsContainer">
        {#each groups as groupDataObject (groupDataObject.slug + (groupDataObject._filteredPlatform || ''))}
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

        .cbBannerText h2 {
            font-size: 1.1em;
        }
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
        margin-bottom: 1em;
        padding-bottom: 2em;
    }

    .contactButtons {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.75em;
        margin-top: 0.75em;
    }

    .contactLabel {
        opacity: 0.85;
        font-size: 0.95em;
    }

    .contactBtn {
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
        padding: 0.45em 1em;
        border-radius: 2em;
        font-size: 0.9em;
        font-weight: 600;
        text-decoration: none;
        transition: opacity 0.2s ease, transform 0.2s ease;
        white-space: nowrap;
    }

    .contactBtn:hover {
        opacity: 0.85;
        transform: translateY(-1px);
    }

    .whatsappBtn {
        background: #25D366;
        color: white;
    }

    .writeUsBtn {
        background: rgba(255, 255, 255, 0.15);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.35);
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

    /* Connect Bern collapsible section */
    .cbSection {
        margin-bottom: 2em;
    }

    .cbBanner {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1.2em;
        padding: 1em 1.5em;
        border-radius: 16px;
        background: linear-gradient(135deg, rgba(255, 140, 50, 0.18), rgba(255, 100, 30, 0.1));
        border: 1px solid rgba(255, 140, 50, 0.35);
        cursor: pointer;
        text-align: left;
        color: white;
        transition: background 0.2s ease, border-color 0.2s ease;
    }

    .cbBanner:hover {
        background: linear-gradient(135deg, rgba(255, 140, 50, 0.28), rgba(255, 100, 30, 0.18));
        border-color: rgba(255, 140, 50, 0.6);
    }

    .cbLogo {
        width: 48px;
        height: 48px;
        object-fit: contain;
        flex-shrink: 0;
    }

    .cbBannerText {
        flex: 1;
    }

    .cbBannerText h2 {
        margin: 0 0 0.2em 0;
        font-size: 1.2em;
        font-weight: 700;
    }

    .cbBannerText p {
        margin: 0;
        opacity: 0.75;
        font-size: 0.9em;
    }

    .cbArrow {
        font-size: 0.85em;
        opacity: 0.7;
        transition: transform 0.25s ease;
        flex-shrink: 0;
    }

    .cbArrow.rotated {
        transform: rotate(180deg);
    }

    .cbSubgrid {
        display: flex;
        flex-wrap: wrap;
        row-gap: 2em;
        column-gap: 1em;
        justify-content: center;
        align-items: center;
        padding: 1.5em 0 1em 0;
    }

    .cbAllGroupsLink {
        display: flex;
        align-items: center;
        gap: 0.9em;
        padding: 0.8em 1.2em;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px dashed rgba(255, 255, 255, 0.25);
        text-decoration: none;
        color: white;
        margin: 0 auto 0.5em auto;
        max-width: 480px;
        transition: background 0.2s ease, border-color 0.2s ease;
    }

    .cbAllGroupsLink:hover {
        background: rgba(255, 255, 255, 0.12);
        border-color: rgba(255, 255, 255, 0.45);
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
