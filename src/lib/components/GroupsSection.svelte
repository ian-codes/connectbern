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
    let groups = allOtherGroups;
    let searchTerm = "";
    let cbExpanded = true;
    let filteredCbGroups = cbGroups;

    function applyFilters() {
        const filterType = groupType.toLowerCase();
        let pool = filterType === 'all' ? [...GroupsData] : filterByGroupType(filterType);

        if (searchTerm.trim()) {
            const term = searchTerm.toLowerCase();
            pool = pool.filter(g => {
                const name = typeof g.name === 'string' ? g.name : (g.name[language] || '');
                const desc = g.desc ? (g.desc[language] || '') : '';
                return name.toLowerCase().includes(term) || desc.toLowerCase().includes(term);
            });
        }

        filteredCbGroups = pool.filter(g => g.organizer === 'connectbern' && g.slug !== 'community-groups');
        groups = pool.filter(g => g.organizer !== 'connectbern' && g.slug !== 'community-groups');
        if (searchTerm.trim() && filteredCbGroups.length > 0) cbExpanded = true;
    }

    function handleSearch(e) {
        if (e?.target) searchTerm = e.target.value;
        applyFilters();
    }
    function handleGroupTypeChange() { applyFilters(); }
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
        <input
            on:input={handleSearch}
            on:keyup={handleSearch}
            on:paste={() => setTimeout(handleSearch, 0)}
            bind:value={searchTerm}
            type="text"
            title="Search Groups"
            id="search"
            name="search"
            class="searchInput"
            placeholder="{t[language]["search-groups"]}" />
        <div class="filterPills">
            <button class="filterPill" class:active={groupType === 'All'} on:click={() => { groupType = 'All'; handleGroupTypeChange(); }}>
                {language === 'de' ? 'Alle' : 'All'}
            </button>
            <button class="filterPill" class:active={groupType === 'WhatsApp'} on:click={() => { groupType = 'WhatsApp'; handleGroupTypeChange(); }}>
                <img src="/icons/whatsapp.svg" alt="WhatsApp" class="filterIcon" />
            </button>
            <button class="filterPill" class:active={groupType === 'Telegram'} on:click={() => { groupType = 'Telegram'; handleGroupTypeChange(); }}>
                <img src="/icons/telegram.svg" alt="Telegram" class="filterIcon" />
            </button>
            <button class="filterPill" class:active={groupType === 'Facebook'} on:click={() => { groupType = 'Facebook'; handleGroupTypeChange(); }}>
                <img src="/icons/facebook.svg" alt="Facebook" class="filterIcon" />
            </button>
            <button class="filterPill" class:active={groupType === 'Multiplatform'} on:click={() => { groupType = 'Multiplatform'; handleGroupTypeChange(); }}>
                {language === 'de' ? 'Multi' : 'Multi'}
            </button>
            <button class="filterPill" class:active={groupType === 'Other'} on:click={() => { groupType = 'Other'; handleGroupTypeChange(); }}>
                {language === 'de' ? 'Andere' : 'Other'}
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
            <div class="cbAllGroupsRow">
                <a href="/groups/community-groups" class="cbAllGroupsLink">
                    <img src="/groups/connect-bern-logo-orange.png" alt="" class="cbAllLogo" />
                    <span class="cbAllText">
                        <span class="cbAllTitle">{language === 'de' ? 'Mehr Connect Bern Gruppen' : 'More Connect Bern groups'}</span>
                        <span class="cbAllSub">{language === 'de' ? 'Alle Gruppen ansehen' : 'View all our groups'}</span>
                    </span>
                    <span class="cbAllArrow">→</span>
                </a>
            </div>
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
            margin: 0 0 1.5em 0 !important;
            padding: 0 !important;
        }

        .searchInput {
            flex: 0 0 auto;
            width: 100%;
            max-width: 100%;
            height: 40px;
            box-sizing: border-box;
            font-size: 1rem;
        }

        .filterPills {
            justify-content: flex-start;
            width: 100%;
        }

        .cbBannerText h2 {
            font-size: 1.1em;
        }
    }

    .searchInput {
        flex: 0 1 260px;
        min-width: 0;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 2em;
        padding: 0.6em 1.2em;
        color: white;
        font-size: 0.95em;
        outline: none;
        -webkit-appearance: none;
        appearance: none;
        transition: border-color 0.2s ease, background 0.2s ease;
    }

    .searchInput::placeholder {
        color: rgba(255, 255, 255, 0.45);
    }

    .searchInput:focus {
        border-color: rgba(255, 255, 255, 0.5);
        background: rgba(255, 255, 255, 0.15);
    }

    .filterPills {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4em;
    }

    .filterPill {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.45em 0.9em;
        border-radius: 2em;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.08);
        color: white;
        font-size: 0.9em;
        cursor: pointer;
        transition: background 0.15s ease, border-color 0.15s ease;
        white-space: nowrap;
    }

    .filterPill:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.4);
    }

    .filterPill.active {
        background: rgba(255, 255, 255, 0.25);
        border-color: rgba(255, 255, 255, 0.6);
        font-weight: 600;
    }

    .filterIcon {
        width: 1.2em;
        height: 1.2em;
        object-fit: contain;
        display: block;
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
        gap: 0.75em;
        align-items: center;
        margin: 0 0 2em 0;
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

    .cbAllGroupsRow {
        display: flex;
        justify-content: center;
        padding: 0.5em 0 0.75em 0;
    }

    .cbAllGroupsLink {
        display: inline-flex;
        align-items: center;
        gap: 1em;
        padding: 0.9em 1.6em;
        border-radius: 16px;
        background: linear-gradient(135deg, rgba(255, 140, 50, 0.18), rgba(255, 100, 30, 0.1));
        border: 1px solid rgba(255, 140, 50, 0.45);
        text-decoration: none;
        color: white;
        max-width: 360px;
        width: 100%;
        transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    }

    .cbAllGroupsLink:hover {
        background: linear-gradient(135deg, rgba(255, 140, 50, 0.3), rgba(255, 100, 30, 0.2));
        border-color: rgba(255, 140, 50, 0.7);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 120, 30, 0.2);
    }

    .cbAllLogo {
        width: 36px;
        height: 36px;
        object-fit: contain;
        flex-shrink: 0;
    }

    .cbAllText {
        display: flex;
        flex-direction: column;
        gap: 0.15em;
        flex: 1;
    }

    .cbAllTitle {
        font-size: 1em;
        font-weight: 600;
    }

    .cbAllSub {
        font-size: 0.8em;
        opacity: 0.65;
    }

    .cbAllArrow {
        font-size: 1.1em;
        opacity: 0.6;
        flex-shrink: 0;
        transition: transform 0.2s ease, opacity 0.2s ease;
    }

    .cbAllGroupsLink:hover .cbAllArrow {
        transform: translateX(4px);
        opacity: 1;
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
