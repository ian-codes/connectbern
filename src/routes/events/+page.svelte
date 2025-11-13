<svelte:head>
	<title>Events • Connect Bern </title>
</svelte:head>


<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    import Calendar from "$lib/components/calendar/Calendar.svelte";
    import { onMount } from 'svelte';

    $: lang = $currentLanguage;

    let eventsDisplayMode = 'events'; // 'events' or 'resources'
    let calendarEvents = [];
    let filterMode = 'connectbern'; // 'all' or 'connectbern'
    let showRecurring = true;

    // Copy all the calendar logic from events-calendar page
    $: groupedEvents = (() => {
        const events = filterMode === 'connectbern'
            ? calendarEvents.filter(event => event.organizer === 'connectbern')
            : showRecurring
            ? calendarEvents
            : calendarEvents.filter(event => !event.recurring);

        const grouped = [];
        const processedIndices = new Set();

        events.forEach((event, i) => {
            if (processedIndices.has(i)) return;

            if (!event.recurring) {
                grouped.push({ events: [event], isGroup: false });
                processedIndices.add(i);
                return;
            }

            const sameDay = events.filter((e, j) =>
                !processedIndices.has(j) &&
                e.recurring === event.recurring &&
                e.date.getDay() === event.date.getDay()
            );

            if (sameDay.length > 1) {
                grouped.push({ events: sameDay, isGroup: true });
                sameDay.forEach(e => {
                    const idx = events.indexOf(e);
                    processedIndices.add(idx);
                });
            } else {
                grouped.push({ events: [event], isGroup: false });
                processedIndices.add(i);
            }
        });

        return grouped;
    })();

    $: filteredEvents = groupedEvents;

    function getNextWeekday(dayOfWeek) {
        const today = new Date();
        const currentDay = today.getDay();
        let daysUntil = dayOfWeek - currentDay;

        if (daysUntil < 0) {
            daysUntil += 7;
        }

        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + daysUntil);
        return nextDate;
    }

    function getNextNthWeekday(dayOfWeek, nthOccurrence) {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        let date = getNthWeekdayOfMonth(currentYear, currentMonth, dayOfWeek, nthOccurrence);

        if (date <= today) {
            let nextMonth = currentMonth + 1;
            let nextYear = currentYear;
            if (nextMonth > 11) {
                nextMonth = 0;
                nextYear++;
            }
            date = getNthWeekdayOfMonth(nextYear, nextMonth, dayOfWeek, nthOccurrence);
        }

        return date;
    }

    function getNthWeekdayOfMonth(year, month, dayOfWeek, nthOccurrence) {
        const firstDay = new Date(year, month, 1);
        const firstWeekday = firstDay.getDay();

        let daysToAdd = dayOfWeek - firstWeekday;
        if (daysToAdd < 0) {
            daysToAdd += 7;
        }

        const nthDay = 1 + daysToAdd + ((nthOccurrence - 1) * 7);
        return new Date(year, month, nthDay);
    }

    $: formatDate = (date) => {
        const days = lang === 'de'
            ? ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
            : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const months = lang === 'de'
            ? ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
            : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const dayName = days[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return lang === 'de'
            ? `${dayName}, ${day}. ${month} ${year}`
            : `${dayName}, ${month} ${day}, ${year}`;
    };

    function getDaysUntil(date) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const dateClone = new Date(date);
        dateClone.setHours(0, 0, 0, 0);
        const diffTime = dateClone - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    $: getDaysUntilText = (days) => {
        if (days === 0) return lang === 'de' ? 'Heute!' : 'Today!';
        if (days === 1) return lang === 'de' ? 'Morgen' : 'Tomorrow';
        return lang === 'de' ? `in ${days} Tagen` : `in ${days} days`;
    };

    $: getRecurrencePattern = (event) => {
        if (!event.recurring) return null;

        const days = lang === 'de'
            ? ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
            : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const dayName = days[event.date.getDay()];

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

    const content = {
        de: {
            title: 'Events Kalender',
            description: 'Hier sind alle kommenden Events - sortiert nach Datum. Die Daten werden automatisch aktualisiert.',
            recurringLabel: 'Wiederkehrend',
            oneTime: 'Einmalig',
            filterAll: 'Alle Events',
            filterConnectBern: 'Connect Bern Events',
            toggleRecurring: 'Wiederkehrende Events',
            toggleSpecial: 'Nur Spezial-Events',
            nextOccurrence: 'Nächstes Event',
            disclaimer: '⚠️ <strong>Hinweis:</strong> Wöchentliche und monatliche Events finden möglicherweise nicht immer statt. Bitte überprüfe die Details auf den jeweiligen Event-Seiten oder Webseiten.'
        },
        en: {
            title: 'Events Calendar',
            description: 'Here are all upcoming events - sorted by date. Dates are automatically updated.',
            recurringLabel: 'Recurring',
            oneTime: 'One-time',
            filterAll: 'All Events',
            filterConnectBern: 'Connect Bern Events',
            toggleRecurring: 'Recurring Events',
            toggleSpecial: 'Special Events Only',
            nextOccurrence: 'Next Occurrence',
            disclaimer: '⚠️ <strong>Note:</strong> Weekly and monthly events might not always take place. Please double-check the details on the respective event pages or websites.'
        }
    };

    onMount(() => {
        const events = [
            {
                title: { de: 'Coffee, Cake & Connect', en: 'Coffee, Cake & Connect' },
                date: getNextWeekday(0),
                recurring: 'weekly',
                time: '16:00',
                description: {
                    de: 'Unsere wöchentliche Zeit für neue Leute, die das Projekt kennenlernen möchten! ☕🍰',
                    en: 'Our weekly time for new people who want to see what the project is about! ☕🍰'
                },
                link: '/events/coffee-cake-connect',
                organizer: 'connectbern'
            },
            {
                title: { de: 'Handpan-Lektion für Anfänger', en: 'Beginner Handpan Lesson' },
                date: getNextWeekday(0),
                recurring: 'weekly',
                description: {
                    de: 'Handpan-Lektion für Anfänger mit Berni 🎶 (20 CHF Kaution um deinen Platz zu garantieren)',
                    en: 'Beginner handpan lesson with Berni 🎶 (20 CHF deposit to guarantee your spot)'
                },
                link: '/events/handpan',
                organizer: 'connectbern'
            },
            {
                title: { de: 'Hobby-Schach', en: 'Hobby Chess' },
                date: new Date(2025, 10, 4, 18, 0),
                time: '18:00',
                description: {
                    de: 'Komm vorbei für Hobby-Schach im Connect Bern Haus ♟',
                    en: 'Come join us for hobby chess at Connect Bern house ♟'
                },
                link: '/events/chess',
                recurring: false,
                organizer: 'connectbern'
            },
            {
                title: { de: 'Sprachenaustausch', en: 'Language Exchange' },
                date: getNextWeekday(3),
                time: '19:00',
                recurring: 'weekly',
                description: {
                    de: 'Sprachenaustausch im Connect Bern Haus - übe verschiedene Sprachen!',
                    en: 'Language exchange at Connect Bern house - practice different languages!'
                },
                link: '/groups/language-exchange',
                organizer: 'connectbern'
            },
            {
                title: { de: 'Denk:Mal - Schweizerdeutsch Kurs', en: 'Denk:Mal - Swiss German Course' },
                date: getNextWeekday(1),
                recurring: 'weekly',
                description: {
                    de: 'Schweizerdeutsch-Kurs',
                    en: 'Swiss German course'
                },
                link: 'https://tiny.cc/germanbern'
            },
            {
                title: { de: 'Beer on Tuesday', en: 'Beer on Tuesday' },
                date: getNextNthWeekday(2, 3),
                recurring: 'monthly',
                time: '19:00',
                description: {
                    de: 'Treffen mit Hacker:innen und Infosec-Profis - Voranmeldung erforderlich!',
                    en: 'Meetup with hackers and infosec professionals - Pre-registration required!'
                },
                link: '/events/beer-on-tuesday'
            },
            {
                title: { de: 'BlaBla Language Exchange', en: 'BlaBla Language Exchange' },
                date: getNextWeekday(3),
                recurring: 'weekly',
                time: '19:00',
                description: {
                    de: 'Internationales Treffen zum Sprachenaustausch',
                    en: 'International language exchange meetup'
                },
                link: 'https://t.me/+-Q6c3xU3uEwyNmZk'
            },
            {
                title: { de: 'ChaosTreff Bern Wöchentliches Treffen', en: 'ChaosTreff Bern Weekly Meeting' },
                date: getNextWeekday(2),
                recurring: 'weekly',
                description: {
                    de: 'Ein Hackerspace in Bern, verwandt mit der Chaos Computer Club (CCC) Bewegung, aber nicht Teil davon',
                    en: 'A hacker space in Bern related to the Chaos Computer Club (CCC) movement, but not part of it'
                },
                link: 'https://chaostreffbern.ch/'
            },
            {
                title: { de: 'Posterum Spieleabend', en: 'Posterum Games Night' },
                date: getNextNthWeekday(3, 2),
                recurring: 'monthly',
                description: {
                    de: 'Einmal im Monat - Spieleabend',
                    en: 'Once a month - games night'
                },
                link: 'https://www.pusterum.ch/kultur'
            },
            {
                title: { de: 'Effective Altruism Treffen', en: 'Effective Altruism Meetup' },
                date: getNextWeekday(3),
                recurring: 'weekly',
                description: {
                    de: 'Soziales Treffen der Effective Altruism Gruppe',
                    en: 'Social gathering of effective altruism group'
                }
            },
            {
                title: { de: 'English Club', en: 'English Club' },
                date: getNextWeekday(4),
                recurring: 'weekly',
                description: {
                    de: 'Englisch üben und neue Leute treffen',
                    en: 'Practice English and meet new people'
                },
                link: 'https://englishclub.ch/club-calendar'
            },
            {
                title: { de: 'Polyamorie Treffen', en: 'Polyamorous Meetup' },
                date: getNextNthWeekday(4, 1),
                recurring: 'monthly',
                description: {
                    de: 'Einmal im Monat am ersten Donnerstag',
                    en: 'Once a month on the first Thursday'
                }
            },
            {
                title: { de: 'Deutscher Sprachenaustausch', en: 'German Language Exchange' },
                date: getNextWeekday(4),
                recurring: 'weekly',
                description: {
                    de: 'Deutsch üben (schau auf MeetUp für Ort)',
                    en: 'Practice German (check MeetUp for location)'
                },
                link: 'https://www.meetup.com/meetup-bern/events/calendar/'
            },
            {
                title: { de: 'Erupt Spieleabend', en: 'Erupt Games Night' },
                date: getNextWeekday(4),
                recurring: 'weekly',
                description: {
                    de: 'Spieleabend bei Erupt',
                    en: 'Games night at Erupt'
                },
                link: 'https://www.meetup.com/eruptlounge/events/calendar/'
            },
            {
                title: { de: 'Connect & Cheers', en: 'Connect & Cheers' },
                date: getNextWeekday(5),
                recurring: 'weekly',
                time: '19:00',
                description: {
                    de: 'Jeden Freitagabend in der PROGR Turnhalle – entspannter Treff zum Anstoßen, Austauschen und neue Leute kennenlernen. Teil des Community-Projekts Connect Bern.',
                    en: 'Every Friday evening at PROGR Turnhalle – relaxed drinks, chats and connections. Part of the Connect Bern community project.'
                },
                link: '/events/connect-and-cheers',
                organizer: 'connectbern'
            },
            {
                title: { de: 'English Speaking Club', en: 'English Speaking Club' },
                date: getNextWeekday(5),
                recurring: 'weekly',
                description: {
                    de: 'Englisch üben und neue Leute treffen',
                    en: 'Practice English and meet new people'
                },
                link: 'https://englishclub.ch/club-calendar'
            },
            {
                title: { de: 'Karaoke Nacht bei DELFINO', en: 'Karaoke Night at DELFINO' },
                date: getNextWeekday(5),
                recurring: 'weekly',
                time: '21:00',
                description: {
                    de: 'Finde Freunde beim Karaoke. Frage in Gruppen, ob jemand mitkommen möchte, damit du nicht alleine gehen musst! 🎤',
                    en: 'Find friends while doing karaoke. Ask in groups if anybody wants to join you, so you don\'t have to go alone! 🎤'
                },
                link: '/events/karaoke-night-delfino'
            },
            {
                title: { de: 'Karaoke Nacht bei DELFINO', en: 'Karaoke Night at DELFINO' },
                date: getNextWeekday(6),
                recurring: 'weekly',
                time: '21:00',
                description: {
                    de: 'Finde Freunde beim Karaoke. Frage in Gruppen, ob jemand mitkommen möchte, damit du nicht alleine gehen musst! 🎤',
                    en: 'Find friends while doing karaoke. Ask in groups if anybody wants to join you, so you don\'t have to go alone! 🎤'
                },
                link: '/events/karaoke-night-delfino'
            },
            {
                title: { de: 'Patt Event', en: 'Patt Event' },
                date: getNextWeekday(6),
                recurring: 'monthly',
                time: '17:00-23:00',
                description: {
                    de: 'Einmal im Monat',
                    en: 'Once a month'
                },
                link: 'https://patt.be'
            }
        ];

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        calendarEvents = events
            .filter(event => {
                const eventDate = new Date(event.date);
                eventDate.setHours(0, 0, 0, 0);
                return eventDate >= today;
            })
            .sort((a, b) => a.date - b.date);
    });
</script>

<section>
    <div class="topbarWrapper">
        <div class="titleSection">
            <h1>Events</h1>
            <p class="eventsIntro">
                {@html t[lang]['events-description']}
            </p>
        </div>

        <!-- Suggest Event CTA -->
        <div class="suggestEventCTA">
            <div class="ctaIcon">✨</div>
            <h3>{t[lang]['events-suggest-title']}</h3>
            <p>{t[lang]['events-suggest-description']}</p>
            <a href="/contact" class="ctaButton">
                {t[lang]['events-suggest-button']} →
            </a>
        </div>

        <!-- Filter View Switcher -->
        <div class="filterBar">
            <span class="filterLabel">{lang === 'de' ? 'Ansicht:' : 'View:'}</span>
            <div class="filterOptions">
                <button
                    class="filterChip {eventsDisplayMode === 'events' ? 'active' : ''}"
                    on:click={() => eventsDisplayMode = 'events'}
                >
                    <span class="chipIcon">📅</span>
                    <span class="chipText">{lang === 'de' ? 'Kommende Events' : 'Upcoming Events'}</span>
                </button>
                <button
                    class="filterChip {eventsDisplayMode === 'resources' ? 'active' : ''}"
                    on:click={() => eventsDisplayMode = 'resources'}
                >
                    <span class="chipIcon">🌐</span>
                    <span class="chipText">{lang === 'de' ? 'Mehr finden' : 'Find More'}</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Upcoming Events View -->
    {#if eventsDisplayMode === 'events'}
        <div class="calendarViewWrapper">
            <div class="filterButtons">
                <button
                    class="filterBtn {filterMode === 'connectbern' ? 'active' : ''}"
                    on:click={() => filterMode = 'connectbern'}
                >
                    🏠 {content[lang].filterConnectBern}
                </button>
                <button
                    class="filterBtn {filterMode === 'all' ? 'active' : ''}"
                    on:click={() => filterMode = 'all'}
                >
                    {content[lang].filterAll}
                </button>
            </div>

            {#if filterMode === 'all'}
                <div class="disclaimer">
                    {@html content[lang].disclaimer}
                </div>
            {/if}

            <div class="eventsGrid">
                {#each filteredEvents as group, i}
                    <div class="eventCard" style="animation-delay: {i * 0.05}s">
                        {#if group.isGroup}
                            <div class="eventHeader">
                                <h2>
                                    {#if group.events[0].recurring === 'weekly'}
                                        {(() => {
                                            const days = lang === 'de'
                                                ? ['Sonntags-Events', 'Montags-Events', 'Dienstags-Events', 'Mittwochs-Events', 'Donnerstags-Events', 'Freitags-Events', 'Samstags-Events']
                                                : ['Sunday Events', 'Monday Events', 'Tuesday Events', 'Wednesday Events', 'Thursday Events', 'Friday Events', 'Saturday Events'];
                                            return days[group.events[0].date.getDay()];
                                        })()}
                                    {:else}
                                        {lang === 'de' ? 'Monatliche Events' : 'Monthly Events'}
                                    {/if}
                                </h2>
                            </div>

                            <div class="recurrencePattern">
                                🔄 {getRecurrencePattern(group.events[0])}
                            </div>

                            <div class="eventDate">
                                <span class="dateIcon">📅</span>
                                <div class="dateInfo">
                                    <div class="dateLabelRow">
                                        <span class="dateLabel">{content[lang].nextOccurrence}:</span>
                                        <span class="dateText">{formatDate(group.events[0].date)}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="daysUntil">
                                {getDaysUntilText(getDaysUntil(group.events[0].date))}
                            </div>

                            <div class="groupedEventsList">
                                {#each group.events as event}
                                    <div class="groupedEvent">
                                        <div class="groupedEventHeader">
                                            <h3>{event.title[lang]}</h3>
                                            {#if event.time}
                                                <span class="groupedEventTime">⏰ {event.time}</span>
                                            {/if}
                                        </div>
                                        {#if event.description}
                                            <p class="groupedEventDescription">
                                                {event.description[lang]}
                                            </p>
                                        {/if}
                                        {#if event.link}
                                            <a
                                                href={event.link}
                                                class="groupedEventLink"
                                                target={event.link.startsWith('http') ? '_blank' : '_self'}
                                                rel={event.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                            >
                                                {lang === 'de' ? 'Mehr Info' : 'More Info'} →
                                            </a>
                                        {/if}
                                    </div>
                                {/each}
                            </div>
                        {:else}
                            {@const event = group.events[0]}
                            <div class="eventHeader">
                                <h2>{event.title[lang]}</h2>
                            </div>

                            {#if event.recurring}
                                <div class="recurrencePattern">
                                    🔄 {getRecurrencePattern(event)}
                                </div>
                            {/if}

                            <div class="eventDate">
                                <span class="dateIcon">📅</span>
                                <div class="dateInfo">
                                    <div class="dateLabelRow">
                                        {#if event.recurring}
                                            <span class="dateLabel">{content[lang].nextOccurrence}:</span>
                                        {/if}
                                        <span class="dateText">{formatDate(event.date)}</span>
                                    </div>
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
                                    {lang === 'de' ? 'Mehr Info' : 'More Info'} →
                                </a>
                            {/if}
                        {/if}
                    </div>
                {/each}
            </div>
        </div>

    <!-- Find More Events Resources -->
    {:else}
        <div class="resourcesTile">
            <p class="tileDescription">
                {lang === 'de'
                    ? 'Entdecke Events auf diesen Plattformen:'
                    : 'Discover events on these platforms:'}
            </p>
            <div class="resourceCards">
                <a href="https://www.facebook.com/events/?date_filter_option=TODAY&discover_tab=LOCAL" class="resourceCard" target="_blank" rel="noopener noreferrer">
                    <span class="resourceIcon">📘</span>
                    <h3>Facebook Local</h3>
                    <p>{lang === 'de' ? 'Lokale Events in der Umgebung' : 'Local events in the area'}</p>
                </a>

                <a href="https://meetup.com" class="resourceCard" target="_blank" rel="noopener noreferrer">
                    <span class="resourceIcon">👥</span>
                    <h3>Meetup.com</h3>
                    <p>{lang === 'de' ? 'Treffen und Gruppen finden' : 'Find meetups and groups'}</p>
                </a>

                <a href="https://gemeinsamerleben.com/orte-und-regionen/schweiz/bern" class="resourceCard" target="_blank" rel="noopener noreferrer">
                    <span class="resourceIcon">🤝</span>
                    <h3>{lang === 'de' ? 'Gemeinsam Erleben / Spontacts' : 'Gemeinsam Erleben / Spontacts'}</h3>
                    <p>{lang === 'de' ? 'Lokale App um Leute zu treffen und Events zu machen' : 'Local app to meet people and do events'}</p>
                </a>

                <a href="https://www.reitschule.ch/reitschule/?programm" class="resourceCard" target="_blank" rel="noopener noreferrer">
                    <span class="resourceIcon">🏛️</span>
                    <h3>Reitschule</h3>
                    <p>{lang === 'de' ? 'Alternative Kultur' : 'Alternative culture'}</p>
                </a>

                <a href="https://www.dieheiterefahne.ch/menu" class="resourceCard" target="_blank" rel="noopener noreferrer">
                    <span class="resourceIcon">🎪</span>
                    <h3>Heitere Fahne</h3>
                    <p>{lang === 'de' ? 'Kulturzentrum' : 'Cultural center'}</p>
                </a>

                <a href="https://bern.impacthub.net/events-erleben" class="resourceCard" target="_blank" rel="noopener noreferrer">
                    <span class="resourceIcon">💡</span>
                    <h3>Impact Hub</h3>
                    <p>{lang === 'de' ? 'Networking' : 'Networking'}</p>
                </a>

                <a href="https://www.reddit.com/r/bern/" class="resourceCard" target="_blank" rel="noopener noreferrer">
                    <span class="resourceIcon">💬</span>
                    <h3>r/Bern</h3>
                    <p>{lang === 'de' ? 'Reddit Community' : 'Reddit Community'}</p>
                </a>
            </div>
        </div>
    {/if}
</section>

<style>
    section {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2em 1em;
    }

    .topbarWrapper {
        margin-bottom: 2em;
        border: none;
        border-bottom: none;
        display: flex;
        flex-direction: column;
        gap: 2.5em;
        align-items: center;
    }

    .titleSection {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        border: none;
        width: 100%;
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

    .eventsIntro {
        margin-top: 2em !important;
        margin-bottom: 2em !important;
    }

    /* Suggest Event CTA */
    .suggestEventCTA {
        background: linear-gradient(135deg, rgba(255, 180, 100, 0.15), rgba(255, 120, 150, 0.15));
        border: 2px solid rgba(255, 180, 100, 0.4);
        border-radius: 1.2em;
        padding: 1.5em 1.5em;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.7em;
        max-width: 550px;
        width: 100%;
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px rgba(255, 180, 100, 0.2);
    }

    .suggestEventCTA:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 30px rgba(255, 180, 100, 0.3);
        border-color: rgba(255, 180, 100, 0.6);
    }

    .ctaIcon {
        font-size: 2.2em;
        animation: pulse 2s ease-in-out infinite;
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

    .ctaButton {
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
        padding: 0.8em 1.5em;
        background: linear-gradient(135deg, rgba(255, 180, 100, 0.9), rgba(255, 120, 150, 0.9));
        color: white;
        text-decoration: none;
        border-radius: 2em;
        font-weight: bold;
        font-size: 0.95em;
        transition: all 0.3s ease;
        border: 2px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        margin-top: 0.3em;
    }

    .ctaButton:hover {
        transform: translateX(5px) scale(1.05);
        background: linear-gradient(135deg, rgba(255, 200, 120, 1), rgba(255, 140, 170, 1));
        box-shadow: 0 6px 25px rgba(255, 180, 100, 0.4);
        border-color: rgba(255, 255, 255, 0.5);
    }

    /* Filter Bar Style */
    .filterBar {
        display: flex;
        align-items: center;
        gap: 1.5em;
        padding: 1.2em 2em;
        background: rgba(0, 0, 0, 0.25);
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        flex-wrap: wrap;
        justify-content: center;
    }

    .filterLabel {
        font-size: 1em;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.8);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.9em;
    }

    .filterOptions {
        display: flex;
        gap: 0.8em;
        flex-wrap: wrap;
    }

    .filterChip {
        display: inline-flex;
        align-items: center;
        gap: 0.6em;
        padding: 0.7em 1.3em;
        border: 2px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.75);
        border-radius: 2em;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.95em;
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
        font-size: 1.2em;
        line-height: 1;
    }

    .chipText {
        font-size: 1em;
        line-height: 1;
    }

    /* Resources Tile */
    .resourcesTile {
        background: linear-gradient(135deg, rgba(108, 72, 167, 0.1), rgba(58, 152, 189, 0.1));
        border: 2px solid rgba(108, 72, 167, 0.3);
        border-radius: 1.5em;
        padding: 2.5em;
        margin: 0.5em 0 2em 0;
    }

    .tileDescription {
        text-align: center;
        font-size: 1.2em;
        opacity: 0.9;
        margin-bottom: 2em;
    }

    .resourceCards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1em;
        margin-top: 2em;
    }

    @media (max-width: 1000px) {
        .resourceCards {
            grid-template-columns: 1fr;
        }
    }

    .resourceCard {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1em;
        padding: 1.2em;
        text-align: center;
        text-decoration: none;
        color: white;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        transition: all 0.3s ease;
    }

    .resourceCard:hover {
        transform: translateY(-3px);
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }

    .resourceIcon {
        font-size: 2.5em;
        margin-bottom: 0.2em;
    }

    .resourceCard h3 {
        font-size: 1.1em;
        font-weight: bold;
        margin: 0;
        word-wrap: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
    }

    .resourceCard p {
        font-size: 0.9em;
        opacity: 0.8;
        margin: 0;
        line-height: 1.5;
        max-width: 100%;
    }

    /*  Calendar View Styles */
    .calendarViewWrapper {
        margin-top: 0.5em;
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
        margin-top: 1em;
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

    .disclaimer {
        margin-top: 2em;
        padding: 1.2em 1.5em;
        background: rgba(255, 180, 0, 0.1);
        border: 1px solid rgba(255, 180, 0, 0.3);
        border-radius: 0.8em;
        font-size: 1em;
        line-height: 1.6;
        text-align: left;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }

    .disclaimer :global(strong) {
        color: rgb(255, 200, 100);
    }

    .eventsGrid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 2em;
        margin-top: 2em;
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

    .eventCard h2,
    .eventCard h3,
    .eventCard p,
    .eventCard .dateText,
    .eventCard .timeText,
    .eventCard .daysUntil,
    .eventCard .eventDescription {
        color: #2a2a2a;
    }

    .eventHeader {
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 1em;
        flex-wrap: wrap;
    }

    .eventCard h2 {
        font-size: 1.4em;
        font-weight: bold;
        margin: 0;
        flex: 1;
        min-width: 200px;
    }

    .recurrencePattern {
        font-size: 1.1em;
        font-weight: bold;
        padding: 0.8em 1em;
        background: linear-gradient(135deg, rgba(130, 230, 180, 0.15), rgba(100, 210, 170, 0.15));
        border-radius: 0.5em;
        text-align: center;
        border: 1px solid rgba(130, 230, 180, 0.35);
        color: rgb(160, 255, 210);
    }

    .eventDate {
        display: flex;
        gap: 1em;
        align-items: center;
        padding: 1em;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 0.5em;
    }

    .dateIcon {
        font-size: 2em;
    }

    .dateInfo {
        display: flex;
        flex-direction: column;
        gap: 0.3em;
    }

    .dateLabelRow {
        display: flex;
        flex-direction: column;
        gap: 0.2em;
    }

    .dateLabel {
        font-size: 0.85em;
        opacity: 0.7;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-weight: 600;
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
    }

    .eventDescription {
        font-size: 1em;
        opacity: 0.85;
        margin: 0;
        line-height: 1.5;
    }

    .eventLink {
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
        padding: 0.8em 1.2em;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        text-decoration: none;
        border-radius: 0.5em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
        align-self: flex-start;
    }

    .eventLink:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateX(5px);
        border-color: rgba(255, 255, 255, 0.3);
    }

    .groupedEventsList {
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-top: 0.5em;
    }

    .groupedEvent {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.8em;
        padding: 1.2em;
        display: flex;
        flex-direction: column;
        gap: 0.8em;
        transition: all 0.2s ease;
    }

    .groupedEvent:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.2);
    }

    .groupedEventHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
        flex-wrap: wrap;
    }

    h3 {
        font-size: 1.2em;
        font-weight: bold;
        margin: 0;
        flex: 1;
        min-width: 150px;
    }

    .groupedEventTime {
        font-size: 0.95em;
        font-weight: bold;
        padding: 0.3em 0.8em;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 1em;
        white-space: nowrap;
    }

    .groupedEventDescription {
        font-size: 0.95em;
        opacity: 0.85;
        margin: 0;
        line-height: 1.5;
    }

    .groupedEventLink {
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
        padding: 0.6em 1em;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        text-decoration: none;
        border-radius: 0.5em;
        font-weight: bold;
        font-size: 0.9em;
        transition: all 0.2s ease;
        border: 1px solid rgba(255, 255, 255, 0.15);
        align-self: flex-start;
    }

    .groupedEventLink:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateX(3px);
        border-color: rgba(255, 255, 255, 0.25);
    }

    /* Responsive */
    @media (max-width: 768px) {
        section {
            padding: 1em;
        }

        .topbarWrapper {
            gap: 2em;
        }

        .titleSection {
            gap: 1.5rem;
        }

        h1 {
            font-size: 2em;
        }

        .titleSection p {
            padding: 0 0.5em;
            line-height: 1.7;
            font-size: 1.05em;
        }

        .suggestEventCTA {
            padding: 0.6em 0.8em;
            gap: 0.3em;
            border-radius: 0.8em;
            max-width: 100%;
        }

        .ctaIcon {
            font-size: 1.2em;
        }

        .suggestEventCTA h3 {
            font-size: 0.9em;
        }

        .suggestEventCTA p {
            font-size: 0.7em;
            line-height: 1.3;
        }

        .ctaButton {
            padding: 0.4em 0.6em;
            font-size: 0.65em;
            width: auto;
            max-width: 90%;
            justify-content: center;
        }

        .ctaButton:hover {
            transform: scale(1.02);
        }

        .filterBar {
            flex-direction: column;
            gap: 1em;
            padding: 1em;
        }

        .filterLabel {
            font-size: 0.85em;
        }

        .filterOptions {
            width: 100%;
            justify-content: center;
            gap: 0.6em;
        }

        .filterChip {
            padding: 0.6em 1.1em;
            font-size: 0.9em;
        }

        .filterChip.active {
            transform: scale(1.02);
        }

        .chipIcon {
            font-size: 1.1em;
        }

        .chipText {
            font-size: 0.95em;
        }

        .resourcesTile {
            padding: 1.5em;
        }

        .resourceCards {
            grid-template-columns: 1fr;
            gap: 0.8em;
        }

        .resourceCard h3 {
            font-size: 0.95em;
            line-height: 1.3;
        }

        .resourceCard p {
            font-size: 0.85em;
        }

        .filterButtons {
            flex-direction: column;
            align-items: center;
            gap: 0.8em;
        }

        .filterBtn {
            width: 100%;
            max-width: 300px;
            font-size: 0.95em;
        }

        .eventsGrid {
            grid-template-columns: 1fr;
            gap: 1em;
        }
    }
</style>
