<svelte:head>
	<title>Events • Connect Bern </title>
</svelte:head>


<script>
    import { t } from "$lib/locales/eventPageTranslations.js";
    import { date_trans } from "$lib/locales/eventPageTranslations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    import EventSuggestionFloatingButton from "$lib/components/EventSuggestionFloatingButton.svelte";
    import AppBanner from "$lib/components/banner/AppBanner.svelte";
    import EventResourcesBanner from "$lib/components/banner/EventResourcesBanner.svelte";
    import TitleDescDialog from "$lib/components/TitleDescDialog.svelte";
    import { eventData } from "$lib/data/event.data.js";

    $: lang = $currentLanguage;

    let eventsDisplayMode = 'events'; // 'events' or 'resources'
    let calendarEvents = [];
    let filterMode = 'connectbern'; // 'all' or 'connectbern'
    let isFloatingButtonHidden = false;
    let showWhyDifferentDialog = false;
    let showDisclaimer = true; // collapseable in mobile view

    // Simple chronological event list
    $: filteredEvents = (() => {
        return filterMode === 'connectbern'
            ? calendarEvents.filter(event => event.organizer === 'connectbern')
            : calendarEvents;
    })();

    // Group events by date
    $: groupedByDate = (() => {
        const groups = {};
        filteredEvents.forEach(event => {
            const dateKey = event.date.toDateString();
            if (!groups[dateKey]) {
                groups[dateKey] = {
                    date: event.date,
                    events: []
                };
            }
            groups[dateKey].events.push(event);
        });
        return Object.values(groups);
    })();


    $: formatDate = (date) => {
        const dayName = date_trans[lang].days[date.getDay()];
        const day = date.getDate();
        const month = date_trans[lang].months[date.getMonth()];
        const year = date.getFullYear();

        return lang === 'de'
            ? `${dayName}, ${day}. ${month} ${year}`
            : `${dayName}, ${month} ${day}, ${year}`;
    };

    $: getDaysUntil = (date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const dateClone = new Date(date);
        dateClone.setHours(0, 0, 0, 0);
        const diffTime = dateClone - today;
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    $: getDaysUntilText = (days) => {
        if (days === 0) return lang === 'de' ? 'Heute!' : 'Today!';
        if (days === 1) return lang === 'de' ? 'Morgen' : 'Tomorrow';
        return lang === 'de' ? `in ${days} Tagen` : `in ${days} days`;
    };

    $: getRecurrencePattern = (event) => {
        if (!event.recurring) return null;

        const dayName = date_trans[lang].days[event.date.getDay()];
        if (event.recurring === 'weekly') {
            return lang === 'de' ? `Jeden ${dayName}` : `Every ${dayName}`;
        } else if (event.recurring === 'monthly') {
            const date = event.date.getDate();
            const weekOfMonth = Math.ceil(date / 7);
            const ordinals = lang === 'de'
                ? ['ersten', 'zweiten', 'dritten', 'vierten']
                : ['1st', '2nd', '3rd', '4th'];
            const ordinal = ordinals[weekOfMonth - 1] || weekOfMonth + '.';

            return lang === 'de'
                ? `Jeden ${ordinal} ${dayName} im Monat`
                : `Every ${ordinal} ${dayName} of the month`;
        }
        return null;
    };




    const events = eventData;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    calendarEvents = events
        .filter(event => {
            const eventDate = new Date(event.date);
            eventDate.setHours(0, 0, 0, 0);
            return eventDate >= today;
        })
        .sort((a, b) => a.date - b.date);
</script>

<section>
    <div class="topbarWrapper">
        <div class="titleRow">
            <!-- Filter View Switcher (left side) -->
            <div class="filterBar">
                <div class="filterOptions">
                    <button
                        class="filterChip {eventsDisplayMode === 'events' ? 'active' : ''}"
                        on:click={() => eventsDisplayMode = 'events'}
                    >
                        <span class="chipIcon">📅</span>
                        <span class="chipText">{t[lang]['filter-chip-upcoming']}</span>
                    </button>
                    <button
                        class="filterChip {eventsDisplayMode === 'resources' ? 'active' : ''}"
                        on:click={() => eventsDisplayMode = 'resources'}
                    >
                        <span class="chipIcon">🌐</span>
                        <span class="chipText">{t[lang]['filter-chip-more']}</span>
                    </button>
                </div>
            </div>

            <div class="titleSection">
                <h1>{t[lang]['title']}<span class="h1Sub">{t[lang]['subTitle']}</span></h1>
            </div>

            <button class="whyDifferentButton" on:click={() => showWhyDifferentDialog = true} title={t[lang]['events-why-different']}>
                <span class="whyIcon">🤔</span>
                <span class="whyText">{t[lang]['events-why-different']}</span>
            </button>
            <!-- Why Different Dialog -->
            <TitleDescDialog bind:showDialog={showWhyDifferentDialog}
                    titleKey="events-why-different-title"
                    descKey="events-description"
                    icon="💡">
            </TitleDescDialog>


        </div>
    </div>


    <AppBanner></AppBanner>


    {#if !isFloatingButtonHidden}
        <EventSuggestionFloatingButton></EventSuggestionFloatingButton>
    {/if}




    <!-- Upcoming Events View -->
    {#if eventsDisplayMode === 'events'}
        <div class="calendarViewWrapper">
            <div class="filterButtons">
                <button
                    class="filterBtn {filterMode === 'connectbern' ? 'active' : ''}"
                    on:click={() => filterMode = 'connectbern'}
                >
                    🏠 {t[lang].filterConnectBern}
                </button>
                <button
                    class="filterBtn {filterMode === 'all' ? 'active' : ''}"
                    on:click={() => filterMode = 'all'}
                >
                    {t[lang].filterAll}
                </button>
            </div>

            {#if filterMode === 'all'}
                <div class="disclaimerWrapper">
                    <button class="disclaimerToggle" on:click={() => showDisclaimer = !showDisclaimer}>
                        <span class="toggleText">{t[lang].disclaimerToggle}</span>
                        <span class="toggleIcon">{showDisclaimer ? '▼' : '▶'}</span>
                    </button>
                    <div class="disclaimer" class:expanded={showDisclaimer}>
                        {@html t[lang].disclaimer}
                    </div>
                </div>
            {/if}

            <div class="dateGroupsContainer">
                {#each groupedByDate as group, groupIndex}
                    {@const isToday = getDaysUntil(group.date) === 0}
                    <div class="dateGroup {isToday ? 'today' : ''}" style="animation-delay: {groupIndex * 0.05}s">
                        <div class="dateGroupHeader">
                            <div class="dateGroupDate">
                                <div class="dayNumber">{group.date.getDate()}</div>
                                <div class="monthYear">{date_trans[lang].months_short[group.date.getMonth()]} </div>
                            </div>
                            <div class="dateGroupInfo">
                                <div class="fullDate">{formatDate(group.date)}</div>
                                <div class="daysUntilBadge">{getDaysUntilText(getDaysUntil(group.date))}</div>
                            </div>
                        </div>

                        <div class="eventsGrid">
                            {#each group.events as event, i}
                                <div class="eventCard" style="animation-delay: {(groupIndex * 0.05) + (i * 0.02)}s">
                                    <div class="eventTags">
                                        {#if event.recurring && event.recurring !== 'monthly-multiple'}
                                            <span class="recurringTag">{t[lang][event.recurring]}</span>
                                        {/if}
                                        {#if event.paid}
                                            <span
                                                class="paidTag"
                                                class:optionalTag={event.optionalPaid}
                                                title={t[lang][event.optionalPaid ? "optional-paid-event-tooltip" : "paid-event-tooltip"]}
                                            >
                                                {t[lang][event.optionalPaid ? "optional-paid-event-chip" : "paid-event-chip"]}
                                            </span>
                                        {/if}
                                    </div>

                                    <div class="eventHeader">
                                        <h2>{event.title[lang]}</h2>
                                    </div>

                                    <div class="eventDate">
                                        <span class="dateIcon">📅</span>
                                        <div class="dateInfo">
                                            <span class="dateText">{formatDate(event.date)}</span>
                                            {#if event.time}
                                                <span class="timeText">⏰ {event.time}</span>
                                            {/if}
                                        </div>
                                    </div>

                                    <div class="daysUntil">
                                        {getDaysUntilText(getDaysUntil(event.date))}
                                    </div>

                                    {#if event.description}
                                        <p class="eventDescription">
                                            {event.description[lang]}
                                        </p>
                                    {/if}

                                    {#if event.link}
                                        <a
                                            href={event.link}
                                            class="eventLink"
                                            target={event.link.startsWith('http') ? '_blank' : '_self'}
                                            rel={event.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                        >
                                            {t[lang]["more-info"]} →
                                        </a>
                                    {/if}
                                </div>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </div>

    {:else}
        <EventResourcesBanner></EventResourcesBanner>
    {/if}
</section>

<style>

    .h1Sub {
        display: block;
        font-size: 0.55em;
        font-weight: inherit;
        opacity: 0.75;
        margin-top: 1em;
    }



    section {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1.5em 1em 0 1em;
        overflow-x: hidden;
    }

    :global(body) {
        overflow-x: hidden;
    }

    .topbarWrapper {
        margin-bottom: 0;
        border: none;
        border-bottom: none;
        display: flex;
        flex-direction: column;
        gap: 2.5em;
        align-items: center;
    }

    .titleRow {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 2em;
    }

    .titleSection {
        text-align: center;
        flex: 1;
        display: flex;
        justify-content: center;
    }

    .titleSection p {
        margin: 0;
        line-height: 1.6;
        border: none;
    }

    h1 {
        font-size: 3em;
        font-weight: bold;
        margin: 0;
        border: none;
        border-bottom: none;
        padding-bottom: 0;
    }

    /* Why Different Button */
    .whyDifferentButton {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.6em;
        width: 60px;
        height: 60px;
        padding: 0;
        background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(79, 70, 229, 0.2));
        border: 2px solid rgba(147, 51, 234, 0.4);
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        color: white;
        font-size: 0.9em;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(147, 51, 234, 0.3);
        animation: subtleBounce 3s ease-in-out infinite;
        flex-shrink: 0;
        margin-left: auto;
        position: relative;
    }

    .whyDifferentButton .whyText {
        display: none;
    }

    @keyframes subtleBounce {
        0%, 100% {
            transform: translateY(0) scale(1);
        }
        50% {
            transform: translateY(-5px) scale(1.02);
        }
    }

    .whyDifferentButton:hover {
        transform: scale(1.08) rotate(-2deg);
        background: linear-gradient(135deg, rgba(147, 51, 234, 0.35), rgba(79, 70, 229, 0.35));
        border-color: rgba(147, 51, 234, 0.6);
        box-shadow: 0 6px 25px rgba(147, 51, 234, 0.5);
        animation: none;
    }

    .whyDifferentButton:active {
        transform: scale(1.02);
    }

    .whyIcon {
        font-size: 2em;
        line-height: 1;
        animation: wiggleIcon 2s ease-in-out infinite;
    }

    @keyframes wiggleIcon {
        0%, 100% {
            transform: rotate(-10deg);
        }
        50% {
            transform: rotate(10deg);
        }
    }

    .whyText {
        font-size: 0.95em;
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.1);
            opacity: 0.8;
        }
    }

    .suggestEventCTA h3 {
        font-size: 1.4em;
        font-weight: bold;
        margin: 0;
        color: white;
    }

    .suggestEventCTA p {
        font-size: 0.95em;
        line-height: 1.5;
        margin: 0;
        color: rgba(255, 255, 255, 0.95);
        max-width: 500px;
    }

    /* Filter Bar Style */
    .filterBar {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
        padding: 1em 1.5em;
        background: rgba(0, 0, 0, 0.25);
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        flex-wrap: nowrap;
        flex-shrink: 0;
        margin-right: auto;
    }

    .filterOptions {
        display: flex;
        gap: 0.6em;
        flex-wrap: nowrap;
    }

    .filterChip {
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
        padding: 0.6em 1em;
        border: 2px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.75);
        border-radius: 2em;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.85em;
        font-weight: 500;
        white-space: nowrap;
        position: relative;
    }

    .filterChip:hover:not(.active) {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .filterChip.active {
        background: linear-gradient(135deg,
            rgba(108, 72, 167, 0.9),
            rgba(58, 152, 189, 0.9)
        );
        border-color: rgba(108, 72, 167, 0.8);
        color: white;
        font-weight: 700;
        box-shadow:
            0 6px 20px rgba(108, 72, 167, 0.5),
            0 0 0 3px rgba(108, 72, 167, 0.15);
        transform: scale(1.05);
    }

    .filterChip.active::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 2em;
        padding: 2px;
        background: linear-gradient(135deg,
            rgba(255, 255, 255, 0.4),
            transparent
        );
        -webkit-mask: linear-gradient(#fff 0 0) content-box,
                      linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0.5;
    }

    .chipIcon {
        font-size: 1.1em;
        line-height: 1;
    }

    .chipText {
        font-size: 0.95em;
        line-height: 1;
    }


    /*  Calendar View Styles */
    .calendarViewWrapper {
        margin-top: 0;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .filterButtons {
        display: flex;
        gap: 1em;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 0;
        margin-bottom: 1.5em;
    }

    .filterBtn {
        padding: 0.8em 1.5em;
        font-size: 1em;
        font-weight: bold;
        border: 2px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.05);
        color: white;
        border-radius: 2em;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .filterBtn:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.4);
        transform: translateY(-2px);
    }

    .filterBtn.active {
        background: linear-gradient(135deg, rgba(108, 72, 167, 0.6), rgba(58, 152, 189, 0.6));
        border-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 5px 20px rgba(108, 72, 167, 0.4);
    }

    .disclaimerWrapper {
        margin-top: 1.5em;
        margin-bottom: 2em;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }

    /* Hide toggle button on desktop */
    .disclaimerToggle {
        display: none;
    }

    .toggleIcon {
        font-size: 0.8em;
        transition: transform 0.2s ease;
    }

    /* Always show disclaimer on desktop */
    .disclaimer {
        padding: 0.7em 0.9em;
        background: rgba(255, 180, 0, 0.1);
        border: 1px solid rgba(255, 180, 0, 0.3);
        border-radius: 0.6em;
        font-size: 0.7em;
        line-height: 1.4;
        text-align: left;
        opacity: 0.9;
        margin-bottom: 1.5em;
    }

    .disclaimer :global(strong) {
        color: rgb(255, 200, 100);
        margin-right: 0.5em;
    }

    /* Date Groups Container */
    .dateGroupsContainer {
        display: flex;
        flex-direction: column;
        gap: 3em;
        margin-top: 2em;
    }

    .dateGroup {
        animation: fadeInUp 0.5s ease forwards;
        opacity: 0;
    }

    .dateGroupHeader {
        display: flex;
        align-items: flex-start;
        gap: 1.5em;
        padding: 0 0 1em 0;
        margin-bottom: 1.5em;
        border-bottom: 2px solid rgba(255, 255, 255, 0.1);
        min-height: 70px;
    }

    .dateGroup.today .dateGroupHeader {
        border-bottom-color: rgba(255, 200, 100, 0.4);
    }

    .dateGroupDate {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 60px;
        flex-shrink: 0;
    }

    .dayNumber {
        font-size: 2em;
        font-weight: 700;
        line-height: 1;
        color: white;
    }

    .dateGroup.today .dayNumber {
        color: rgb(255, 200, 100);
    }

    .monthYear {
        font-size: 0.85em;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        opacity: 0.7;
        color: white;
    }

    .dateGroupInfo {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.3em;
        min-height: 52px;
    }

    .fullDate {
        font-size: 1.1em;
        font-weight: 600;
        color: white;
        line-height: 1.4;
        min-height: 1.5em;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .daysUntilBadge {
        font-size: 0.9em;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.7);
        margin-top: auto;
    }

    .dateGroup.today .daysUntilBadge {
        color: rgb(255, 200, 100);
    }

    /* Events Grid */
    .eventsGrid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 2em;
    }

    .eventCard {
        background: linear-gradient(135deg,
            rgb(183, 200, 244),
            rgb(182, 199, 255)
        );
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 1em;
        padding: 1.5em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        transition: all 0.3s ease;
        animation: fadeInUp 0.5s ease forwards;
        opacity: 0;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        position: relative;
        color: #2a2a2a;
        min-height: 250px;
    }

    .eventCard:hover {
        transform: translateY(-5px);
        background: linear-gradient(135deg,
            rgb(160, 193, 243),
            rgb(161, 185, 222)
        );
        border-color: rgba(0, 0, 0, 0.2);
        box-shadow: 0 10px 35px rgba(0, 0, 0, 0.25);
    }

    .dateGroup.today .eventCard {
        border: 2px solid rgba(255, 200, 100, 0.6);
        box-shadow:
            0 4px 20px rgba(0, 0, 0, 0.15),
            0 0 30px rgba(255, 180, 80, 0.3),
            inset 0 0 20px rgba(255, 200, 100, 0.1);
    }

    .dateGroup.today .eventCard:hover {
        box-shadow:
            0 10px 35px rgba(0, 0, 0, 0.25),
            0 0 40px rgba(255, 180, 80, 0.4),
            inset 0 0 25px rgba(255, 200, 100, 0.15);
    }

    .eventCard h2,
    .eventCard h3,
    .eventCard p,
    .eventCard .dateText,
    .eventCard .timeText,
    .eventCard .daysUntil,
    .eventCard .eventDescription {
        color: #1e40af;
    }

    .eventHeader {
        display: flex;
        align-items: start;
    }

    .eventCard h2 {
        font-size: 1.4em;
        font-weight: bold;
        margin: 0;
        margin-top: 2.5em;
        min-height: 3.6em;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 1.3;
        padding-right: 0;
    }

    .eventTags {
        position: absolute;
        top: 1em;
        right: 1em;
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        align-items: center;
        z-index: 10;
    }

    .recurringTag {
        display: inline-block;
        padding: 0.4em 0.8em;
        font-size: 0.75em;
        font-weight: 600;
        background: rgba(59, 130, 246, 0.15);
        color: #3b82f6;
        border-radius: 999px;
        border: 1px solid rgba(59, 130, 246, 0.3);
        white-space: nowrap;
    }

    .paidTag {
        display: inline-block;
        padding: 0.4em 0.8em;
        font-size: 0.75em;
        font-weight: 600;
        background: rgba(76, 175, 80, 0.8);
        color: white;
        border-radius: 999px;
        border: 1px solid rgba(76, 175, 80, 1);
        white-space: nowrap;
        cursor: help;
        transition: all 0.2s ease;
    }

    .paidTag:hover {
        transform: scale(1.05);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .paidTag.optionalTag {
        background: rgba(255, 167, 38, 0.8);
        border: 1px solid rgba(255, 167, 38, 1);
        color: white;
    }

    .eventDate {
        display: flex;
        gap: 1em;
        align-items: center;
        padding: 1em;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 0.5em;
        flex-shrink: 0;
    }

    .dateIcon {
        font-size: 2em;
    }

    .dateInfo {
        display: flex;
        flex-direction: column;
        gap: 0.3em;
    }

    .dateText {
        font-size: 1.1em;
        font-weight: bold;
    }

    .timeText {
        font-size: 0.95em;
        opacity: 0.8;
    }

    .daysUntil {
        font-size: 1.1em;
        font-weight: bold;
        padding: 0.6em 1em;
        background: linear-gradient(135deg, rgba(108, 72, 167, 0.3), rgba(58, 152, 189, 0.3));
        border-radius: 0.5em;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.1);
        flex-shrink: 0;
    }

    .eventDescription {
        font-size: 1em;
        opacity: 0.85;
        margin: 0;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        min-height: 2.5em;
        flex-grow: 1;
    }

    .eventLink {
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
        padding: 0.8em 1.2em;
        background: rgba(255, 255, 255, 0.1);
        color: #1e40af;
        text-decoration: none;
        border-radius: 0.5em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
        align-self: flex-start;
        margin-top: auto;
    }

    .eventLink:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateX(5px);
        border-color: rgba(255, 255, 255, 0.3);
    }

    /* Responsive */
    @media (max-width: 768px) {
        section {
            padding: 1em;
        }

        .topbarWrapper {
            gap: 1.5em;
        }

        .titleRow {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1em;
            padding: 0 0.5em;
        }

        .filterBar {
            order: 3;
            width: 100%;
            max-width: 100%;
            flex-basis: 100%;
        }

        .titleSection {
            order: 1;
            flex: 1;
        }

        .whyDifferentButton {
            order: 2;
            width: 50px;
            height: 50px;
            margin-left: 0;
            margin-right: 0;
            flex-shrink: 0;
        }

        .whyDifferentButton .whyText {
            display: none;
        }

        .titleSection {
            gap: 1.5rem;
        }

        h1 {
            font-size: 1.6em;
            word-wrap: break-word;
        }

        .whyIcon {
            font-size: 1.6em;
        }

        .titleSection p {
            padding: 0 0.5em;
            line-height: 1.7;
            font-size: 1.05em;
        }

        .filterBar {
            gap: 0.6em;
            padding: 0.7em 0.6em;
            flex-wrap: wrap;
            justify-content: center;
        }

        .filterButtons {
            flex-direction: column;
            align-items: center;
            gap: 0.6em;
        }


        .filterOptions {
            gap: 0.4em;
            width: 100%;
            justify-content: center;
        }

        .filterChip {
            padding: 0.5em 0.8em;
            font-size: 0.7em;
            flex: 1;
            min-width: 0;
            justify-content: center;
        }

        .filterChip.active {
            transform: scale(1);
        }

        .chipText {
            font-size: 0.85em;
        }

        .chipIcon {
            font-size: 1em;
        }

        .filterBtn {
            width: 100%;
            max-width: 100%;
            font-size: 0.85em;
            padding: 0.7em 1em;
        }

        /* Show toggle button on mobile */
        .disclaimerToggle {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 0.4em;
            width: auto;
            max-width: max-content;
            padding: 0.4em 0.7em;
            background: rgba(255, 180, 0, 0.15);
            border: 1px solid rgba(255, 180, 0, 0.4);
            border-radius: 0.5em;
            font-size: 0.6em;
            font-weight: 600;
            color: rgb(255, 200, 100);
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: left;
        }

        .toggleText {
            flex: 1;
            white-space: nowrap;
            line-height: 1.2;
        }

        .toggleIcon {
            flex-shrink: 0;
            margin-top: 0.05em;
            font-size: 0.9em;
        }

        .disclaimerToggle:hover {
            background: rgba(255, 180, 0, 0.2);
            border-color: rgba(255, 180, 0, 0.5);
        }

        /* When expanded, make button wider */
        .disclaimer.expanded ~ .disclaimerToggle,
        .disclaimerWrapper:has(.disclaimer.expanded) .disclaimerToggle {
            width: 100%;
            max-width: 100%;
        }

        .disclaimerWrapper:has(.disclaimer.expanded) .toggleText {
            white-space: normal;
            word-wrap: break-word;
        }

        /* Collapsible on mobile */
        .disclaimer {
            font-size: 0.6em;
            padding: 0.6em 0.7em;
            display: none;
            margin-top: 0.5em;
            margin-bottom: 1.5em;
        }

        .disclaimer.expanded {
            display: block;
        }

        .filterButtons {
            margin-bottom: 1em;
        }

        .chipIcon {
            font-size: 1.1em;
        }

        .chipText {
            font-size: 0.95em;
        }

        .dateGroupsContainer {
            gap: 2em;
        }

        .dateGroupHeader {
            flex-direction: column;
            align-items: flex-start;
            gap: 1em;
            padding: 0 0 0.8em 0;
            margin-bottom: 1em;
        }

        .dateGroupDate {
            min-width: auto;
        }

        .dayNumber {
            font-size: 1.8em;
        }

        .fullDate {
            font-size: 1em;
        }

        .eventsGrid {
            grid-template-columns: 1fr;
            gap: 1em;
        }

        .eventCard {
            min-height: 460px;
        }

        .eventCard h2 {
            font-size: 1.2em;
            min-height: 3.1em;
        }

        .eventTags {
            top: 0.8em;
            right: 0.8em;
        }

        .recurringTag,
        .paidTag {
            font-size: 0.65em;
            padding: 0.3em 0.6em;
        }

        .eventCard h2 {
            padding-right: 0;
            font-size: 1.1em;
            margin-top: 2em;
        }

        .eventDescription {
            font-size: 0.95em;
            min-height: 7.1em;
            -webkit-line-clamp: 5;
        }

        .dateIcon {
            font-size: 1em;
        }
    }
</style>
