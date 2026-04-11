<svelte:head>
	<title>Events • Connect Bern </title>
</svelte:head>


<script>
    import { t } from "$lib/locales/eventPageTranslations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    import EventSuggestionFloatingButton from "$lib/components/EventSuggestionFloatingButton.svelte";
    import EventCalendar from "$lib/components/EventCalendar.svelte";
    import EventList from "$lib/components/EventList.svelte";
    import AppBanner from "$lib/components/banner/AppBanner.svelte";
    import EventResourcesBanner from "$lib/components/banner/EventResourcesBanner.svelte";
    import TitleDescDialog from "$lib/components/TitleDescDialog.svelte";
    import { EVENT_DATA, ALL_EVENT_DATA } from "$lib/data/event.data.js";

    $: lang = $currentLanguage;

    let eventView = 'list'; // 'list' | 'calendar'
    let filterMode = 'connectbern'; // 'all' or 'connectbern'
    let isFloatingButtonHidden = false;
    let showWhyDifferentDialog = false;
    let showDisclaimer = true; // collapsable in mobile view

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    $: presentEvents = ((events) => {
        return events
            .filter(event => {
                const eventDate = new Date(event.date);
                eventDate.setHours(0, 0, 0, 0);
                return eventDate >= today && !event.hidden;
            })
            .sort((a, b) => a.date - b.date);
    });

    $: filteredEvents = ((events, filter) => {
        return filter === 'connectbern'
            ? events.filter(event => event.organizer === 'connectbern')
            : events;
    });


</script>

<section>
    <div class="topbarWrapper">
        <div class="titleRow">

            <div class="titleSection">
                <h1>{t[lang]['title']}<span class="h1Sub">{t[lang]['subTitle']}</span></h1>
            </div>

            <button class="round-bttn animated-bttn whyDifferentButton" on:click={() => showWhyDifferentDialog = true} title={t[lang]['events-why-different']}>
                <span class="whyIcon">🤔</span>
            </button>
            <!-- Why Different Dialog -->
            <TitleDescDialog bind:showDialog={showWhyDifferentDialog}
                    titleKey="events-why-different-title"
                    descKey="events-description"
                    icon="💡">
            </TitleDescDialog>


        </div>
    </div>


    {#if !isFloatingButtonHidden}
        <EventSuggestionFloatingButton></EventSuggestionFloatingButton>
    {/if}

    <div class="calendarViewWrapper">
        <div class="filterRow">
            <div class="viewButtons">
                <button class="round-bttn" class:highlighted-bttn={eventView === 'list'} on:click={() => { eventView = 'list' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="rgb(255, 255, 255)" d="M104 112C90.7 112 80 122.7 80 136L80 184C80 197.3 90.7 208 104 208L152 208C165.3 208 176 197.3 176 184L176 136C176 122.7 165.3 112 152 112L104 112zM256 128C238.3 128 224 142.3 224 160C224 177.7 238.3 192 256 192L544 192C561.7 192 576 177.7 576 160C576 142.3 561.7 128 544 128L256 128zM256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L256 288zM256 448C238.3 448 224 462.3 224 480C224 497.7 238.3 512 256 512L544 512C561.7 512 576 497.7 576 480C576 462.3 561.7 448 544 448L256 448zM80 296L80 344C80 357.3 90.7 368 104 368L152 368C165.3 368 176 357.3 176 344L176 296C176 282.7 165.3 272 152 272L104 272C90.7 272 80 282.7 80 296zM104 432C90.7 432 80 442.7 80 456L80 504C80 517.3 90.7 528 104 528L152 528C165.3 528 176 517.3 176 504L176 456C176 442.7 165.3 432 152 432L104 432z"/></svg>
                </button>

                <button class="round-bttn" class:highlighted-bttn={eventView === 'calendar'} on:click={() => { eventView = 'calendar' }}>
                    <span>📅</span>
                </button>
            </div>

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

        </div>

        {#if eventView === 'list'}
            <EventList events={presentEvents(filteredEvents(EVENT_DATA, filterMode))}></EventList>
        {:else}
            <EventCalendar events={filteredEvents(ALL_EVENT_DATA, filterMode)}></EventCalendar>
        {/if}
    </div>

    <AppBanner></AppBanner>
    <EventResourcesBanner></EventResourcesBanner>

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

    .round-bttn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.6em;
        width: 60px;
        height: 60px;
        padding: 0;
        border-radius: 50%;
        cursor: pointer;
        font-size: 0.9em;
        font-weight: 600;
        flex-shrink: 0;
        margin-left: auto;
        position: relative;

        background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(79, 70, 229, 0.2));
        border: 2px solid rgba(147, 51, 234, 0.4);
        color: white;
        box-shadow: 0 4px 15px rgba(147, 51, 234, 0.3);
    }

    .highlighted-bttn {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3));
        border: 2px solid rgba(255, 255, 255, 0.8);
        color: white;
        box-shadow: 0 4px 15px rgba(255, 255, 255, 0.6);
    }

    .animated-bttn {
        transition: all 0.3s ease;
        animation: subtleBounce 3s ease-in-out infinite;
    }

    @keyframes subtleBounce {
        0%, 100% {
            transform: translateY(0) scale(1);
        }
        50% {
            transform: translateY(-5px) scale(1.02);
        }
    }

    .round-bttn:hover, .highlighted-bttn:hover {
        transform: scale(1.08) rotate(-2deg);
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3));
        border: 2px solid rgba(255, 255, 255, 0.8);
        color: white;
        box-shadow: 0 4px 15px rgba(255, 255, 255, 0.6);
    }

    .highlighted-bttn:active {
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

    /*  Calendar View Styles */
    .calendarViewWrapper {
        margin-top: 0;
    }



    .filterRow {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }



    .viewButtons {
        display: flex;
        flex-direction: row;
        gap: 1em;
        flex-wrap: wrap;
        margin-top: 0;
        margin-bottom: 1.5em;
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

        .titleSection {
            order: 1;
            flex: 1;
        }

        .whyDifferentButton {
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

        .viewButtons {
            display: None;
        }

        .filterButtons {
            flex-direction: column;
            align-items: center;
            gap: 0.6em;
        }

        .filterBtn {
            width: 100%;
            max-width: 100%;
            font-size: 0.85em;
            padding: 0.7em 1em;
        }

        .filterButtons {
            margin-bottom: 1em;
        }
    }
</style>
