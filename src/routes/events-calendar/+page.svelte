<svelte:head>
	<title>Events Calendar • Connect Bern</title>
	<meta name="description" content="Discover upcoming events in Bern. Weekly and special meetups by Connect Bern and friends." />

	<!-- Open Graph -->
	<meta property="og:url" content="https://connectbern.ch/events-calendar" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Events Calendar • Connect Bern" />
	<meta property="og:description" content="Discover upcoming events in Bern. Weekly and special meetups by Connect Bern and friends." />
	<meta property="og:image" content="https://connectbern.ch/icons/connect-bern-logo-white.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="connectbern.ch" />
	<meta property="twitter:url" content="https://connectbern.ch/events-calendar" />
	<meta name="twitter:title" content="Events Calendar • Connect Bern" />
	<meta name="twitter:description" content="Discover upcoming events in Bern. Weekly and special meetups by Connect Bern and friends." />
	<meta name="twitter:image" content="https://connectbern.ch/icons/connect-bern-logo-white.png" />
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';
    import { onMount } from 'svelte';

    $: lang = $currentLanguage;

    let calendarEvents = [];
    let filterMode = 'special'; // 'all', 'special', or 'connectbern'

    $: filteredEvents = filterMode === 'special'
        ? calendarEvents.filter(event => !event.recurring)
        : filterMode === 'connectbern'
        ? calendarEvents.filter(event => event.organizer === 'connectbern')
        : calendarEvents;

    // Function to get the next occurrence of a specific day of the week
    function getNextWeekday(dayOfWeek) {
        const today = new Date();
        const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
        let daysUntil = dayOfWeek - currentDay;

        // If it's today, return today (daysUntil === 0)
        // If the day has passed this week, get next week (daysUntil < 0)
        if (daysUntil < 0) {
            daysUntil += 7;
        }

        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + daysUntil);
        return nextDate;
    }

    // Function to get the next nth weekday of the month (e.g., 3rd Tuesday)
    function getNextNthWeekday(dayOfWeek, nthOccurrence) {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        // Check current month first
        let date = getNthWeekdayOfMonth(currentYear, currentMonth, dayOfWeek, nthOccurrence);

        // If the date has passed, get next month's
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

    onMount(() => {
        const events = [
            // Handpan event (weekly recurring)
            {
                title: { de: 'Handpan-Lektion für Anfänger', en: 'Beginner Handpan Lesson' },
                date: getNextWeekday(0), // Sunday
                recurring: 'weekly',
                description: {
                    de: 'Handpan-Lektion für Anfänger mit Berni 🎶 (20 CHF Kaution um deinen Platz zu garantieren)',
                    en: 'Beginner handpan lesson with Berni 🎶 (20 CHF deposit to guarantee your spot)'
                },
                link: '/events/handpan',
                organizer: 'connectbern'
            },
            // Chess event (specific date)
            {
                title: { de: 'Hobby-Schach', en: 'Hobby Chess' },
                date: new Date(2025, 10, 4, 18, 0), // November 4th, 2025
                time: '18:00',
                description: {
                    de: 'Komm vorbei für Hobby-Schach im Connect Bern Haus ♟',
                    en: 'Come join us for hobby chess at Connect Bern house ♟'
                },
                link: '/events/chess',
                recurring: false,
                organizer: 'connectbern'
            },
            // Language Exchange event (Connect Bern)
            {
                title: { de: 'Sprachenaustausch', en: 'Language Exchange' },
                date: getNextWeekday(3), // Wednesday
                time: '18:00',
                recurring: 'weekly',
                description: {
                    de: 'Sprachenaustausch im Connect Bern Haus - übe verschiedene Sprachen!',
                    en: 'Language exchange at Connect Bern house - practice different languages!'
                },
                link: '/groups/language-exchange',
                organizer: 'connectbern'
            },
            // Monday events
            {
                title: { de: 'Denk:Mal - Schweizerdeutsch Kurs', en: 'Denk:Mal - Swiss German Course' },
                date: getNextWeekday(1), // Monday
                recurring: 'weekly',
                description: {
                    de: 'Schweizerdeutsch-Kurs',
                    en: 'Swiss German course'
                },
                link: 'https://tiny.cc/germanbern'
            },
            // Tuesday events
            {
                title: { de: 'Beer on Tuesday', en: 'Beer on Tuesday' },
                date: getNextNthWeekday(2, 3), // 3rd Tuesday
                recurring: 'monthly',
                time: '19:00',
                description: {
                    de: 'Treffen mit Hackern und Infosec-Profis - Voranmeldung erforderlich!',
                    en: 'Meetup with hackers and infosec professionals - Pre-registration required!'
                },
                link: '/events/beer-on-tuesday'
            },
            {
                title: { de: 'BlaBla Language Exchange', en: 'BlaBla Language Exchange' },
                date: getNextWeekday(3), // Wednesday
                recurring: 'weekly',
                time: '19:00',
                description: {
                    de: 'Internationales Treffen zum Sprachenaustausch',
                    en: 'International language exchange meetup'
                },
                link: 'https://t.me/+-Q6c3xU3uEwyNmZk'
            },
            {
                title: { de: 'CCC Wöchentliches Treffen', en: 'CCC Weekly Meeting' },
                date: getNextWeekday(2), // Tuesday
                recurring: 'weekly',
                description: {
                    de: 'Chaos Computer Club Treffen',
                    en: 'Chaos Computer Club meeting'
                }
            },
            // Wednesday events
            {
                title: { de: 'Posterum Spieleabend', en: 'Posterum Games Night' },
                date: getNextNthWeekday(3, 2), // 2nd Wednesday
                recurring: 'monthly',
                description: {
                    de: 'Einmal im Monat - Spieleabend',
                    en: 'Once a month - games night'
                },
                link: 'https://www.pusterum.ch/kultur'
            },
            {
                title: { de: 'Effective Altruism Treffen', en: 'Effective Altruism Meetup' },
                date: getNextWeekday(3), // Wednesday
                recurring: 'weekly',
                description: {
                    de: 'Soziales Treffen der Effective Altruism Gruppe',
                    en: 'Social gathering of effective altruism group'
                }
            },
            // Thursday events
            {
                title: { de: 'English Club', en: 'English Club' },
                date: getNextWeekday(4), // Thursday
                recurring: 'weekly',
                description: {
                    de: 'Englisch üben und neue Leute treffen',
                    en: 'Practice English and meet new people'
                },
                link: 'https://englishclub.ch/club-calendar'
            },
            {
                title: { de: 'Polyamorie Treffen', en: 'Polyamorous Meetup' },
                date: getNextNthWeekday(4, 1), // 1st Thursday
                recurring: 'monthly',
                description: {
                    de: 'Einmal im Monat am ersten Donnerstag',
                    en: 'Once a month on the first Thursday'
                }
            },
            {
                title: { de: 'Deutscher Sprachenaustausch', en: 'German Language Exchange' },
                date: getNextWeekday(4), // Thursday
                recurring: 'weekly',
                description: {
                    de: 'Deutsch üben (Schaue auf MeetUp für Ort)',
                    en: 'Practice German (check MeetUp for location)'
                },
                link: 'https://www.meetup.com/meetup-bern/events/calendar/'
            },
            {
                title: { de: 'Erupt Spieleabend', en: 'Erupt Games Night' },
                date: getNextWeekday(4), // Thursday
                recurring: 'weekly',
                description: {
                    de: 'Spieleabend bei Erupt',
                    en: 'Games night at Erupt'
                },
                link: 'https://www.meetup.com/eruptlounge/events/calendar/'
            },
            // Friday events
            {
                title: { de: 'Connect & Cheers', en: 'Connect & Cheers' },
                date: getNextWeekday(5), // Friday
                recurring: 'weekly',
                time: '18:00',
                description: {
                    de: 'Jeden Freitagabend in der PROGR Turnhalle – entspannter Treff zum Anstoßen, Austauschen und neue Leute kennenlernen. Teil der Community-Projekte Connect Bern & Staying in Bern.',
                    en: 'Every Friday evening at PROGR Turnhalle – relaxed drinks, chats and connections.'
                },
                link: '/events/connect-and-cheers',
                organizer: 'connectbern'
            },
            {
                title: { de: 'English Speaking Club', en: 'English Speaking Club' },
                date: getNextWeekday(5), // Friday
                recurring: 'weekly',
                description: {
                    de: 'Englisch üben und neue Leute treffen',
                    en: 'Practice English and meet new people'
                },
                link: 'https://englishclub.ch/club-calendar'
            },
            // Saturday events
            {
                title: { de: 'Karaoke Nacht bei DELFINO', en: 'Karaoke Night at DELFINO' },
                date: getNextWeekday(6), // Saturday
                recurring: 'weekly',
                time: '21:00',
                description: {
                    de: 'Karaoke Nacht',
                    en: 'Karaoke night'
                },
                link: '/events/karaoke-night-delfino'
            },
            {
                title: { de: 'Patt Event', en: 'Patt Event' },
                date: getNextWeekday(6), // Saturday
                recurring: 'monthly',
                time: '17:00-23:00',
                description: {
                    de: 'Einmal im Monat',
                    en: 'Once a month'
                },
                link: 'https://patt.be'
            }
        ];

        // Sort events by date - include all events from today onwards
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set to start of day

        calendarEvents = events
            .filter(event => {
                const eventDate = new Date(event.date);
                eventDate.setHours(0, 0, 0, 0); // Compare only dates, not times
                return eventDate >= today;
            })
            .sort((a, b) => a.date - b.date);
    });

    const content = {
        de: {
            title: 'Events Kalender',
            description: 'Hier sind alle kommenden Events - sortiert nach Datum. Die Daten werden automatisch aktualisiert.',
            recurringLabel: 'Wiederkehrend',
            weekly: 'Wöchentlich',
            monthly: 'Monatlich',
            oneTime: 'Einmalig',
            filterAll: 'Alle kommenden Events (inkl. wiederkehrende)',
            filterSpecial: 'Nur Spezial-Events',
            filterConnectBern: 'Connect Bern Events',
            disclaimer: '⚠️ <strong>Hinweis:</strong> Wöchentliche und monatliche Events finden möglicherweise nicht immer statt. Bitte überprüfe die Details auf den jeweiligen Event-Seiten oder Webseiten.'
        },
        en: {
            title: 'Events Calendar',
            description: 'Here are all upcoming events - sorted by date. Dates are automatically updated.',
            recurringLabel: 'Recurring',
            weekly: 'Weekly',
            monthly: 'Monthly',
            oneTime: 'One-time',
            filterAll: 'All Upcoming Events (incl. recurring)',
            filterSpecial: 'Special Events Only',
            filterConnectBern: 'Connect Bern Events',
            disclaimer: '⚠️ <strong>Note:</strong> Weekly and monthly events might not always take place. Please double-check the details on the respective event pages or websites.'
        }
    };
</script>

<section>
    <div class="topbarWrapper">
        <h1>{content[lang].title}</h1>
        <p class="description">
            {content[lang].description}
        </p>

        <div class="filterButtons">
            <button
                class="filterBtn {filterMode === 'special' ? 'active' : ''}"
                on:click={() => filterMode = 'special'}
            >
                ⭐ {content[lang].filterSpecial}
            </button>
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

        {#if filterMode !== 'special'}
            <div class="disclaimer">
                {@html content[lang].disclaimer}
            </div>
        {/if}
    </div>

    <div class="eventsGrid">
        {#each filteredEvents as event, i}
            <div class="eventCard" style="animation-delay: {i * 0.05}s">
                <div class="eventHeader">
                    <h2>{event.title[lang]}</h2>
                    <span class="recurringBadge {event.recurring ? 'recurring' : 'oneTime'}">
                        {event.recurring === 'weekly' ? content[lang].weekly :
                         event.recurring === 'monthly' ? content[lang].monthly :
                         content[lang].oneTime}
                    </span>
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
                        {lang === 'de' ? 'Mehr Info' : 'More Info'} →
                    </a>
                {/if}
            </div>
        {/each}
    </div>
</section>

<style>
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

    section {
        padding: 2em;
        max-width: 1200px;
        margin: 0 auto;
    }

    .topbarWrapper {
        text-align: center;
        margin-bottom: 3em;
    }

    h1 {
        font-size: 3em;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .description {
        font-size: 1.2em;
        opacity: 0.9;
        line-height: 1.6;
        margin-bottom: 2em;
    }

    .filterButtons {
        display: flex;
        gap: 1em;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 2em;
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
        position: relative;
        overflow: hidden;
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

    .filterBtn.active::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        animation: shimmer 2s infinite;
    }

    @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
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
        gap: 1.5em;
        margin-top: 2em;
    }

    @media (max-width: 768px) {
        section {
            padding: 1em;
        }

        h1 {
            font-size: 2em;
        }

        .description {
            font-size: 1em;
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

        .disclaimer {
            font-size: 0.9em;
            padding: 1em;
        }

        .eventsGrid {
            grid-template-columns: 1fr;
            gap: 1em;
        }
    }

    .eventCard {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1em;
        padding: 1.5em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        transition: all 0.3s ease;
        animation: fadeInUp 0.5s ease forwards;
        opacity: 0;
    }

    .eventCard:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .eventHeader {
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 1em;
        flex-wrap: wrap;
    }

    h2 {
        font-size: 1.4em;
        font-weight: bold;
        margin: 0;
        flex: 1;
        min-width: 200px;
    }

    .recurringBadge {
        font-size: 0.8em;
        padding: 0.4em 0.8em;
        border-radius: 2em;
        font-weight: bold;
        white-space: nowrap;
    }

    .recurring {
        background: rgba(100, 200, 100, 0.2);
        color: rgb(150, 255, 150);
        border: 1px solid rgba(100, 200, 100, 0.3);
    }

    .oneTime {
        background: rgba(255, 180, 100, 0.2);
        color: rgb(255, 200, 130);
        border: 1px solid rgba(255, 180, 100, 0.3);
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
</style>
