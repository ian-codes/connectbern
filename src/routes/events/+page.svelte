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
    let filterMode = 'all'; // 'all' or 'connectbern'
    let showSuggestDialog = false;
    let showWhyDifferentDialog = false;
    let showDisclaimer = false;

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
        today.setHours(0, 0, 0, 0);
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        let date = getNthWeekdayOfMonth(currentYear, currentMonth, dayOfWeek, nthOccurrence);
        date.setHours(0, 0, 0, 0);

        if (date < today) {
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

    function generateMonthlyOccurrences(dayOfWeek, nthOccurrence, monthsAhead = 3) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const occurrences = [];

        for (let i = 0; i < monthsAhead; i++) {
            const targetMonth = today.getMonth() + i;
            const targetYear = today.getFullYear() + Math.floor(targetMonth / 12);
            const adjustedMonth = targetMonth % 12;

            const date = getNthWeekdayOfMonth(targetYear, adjustedMonth, dayOfWeek, nthOccurrence);
            date.setHours(0, 0, 0, 0);

            if (date >= today) {
                occurrences.push(date);
            }
        }

        return occurrences;
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

    // Floating button animation
    let floatingX = 85;
    let floatingY = 85;
    let buttonElement;

    function moveFloatingButton() {
        if (typeof window === 'undefined') return;

        const buttonWidth = 250; // Approximate button width
        const buttonHeight = 60; // Approximate button height
        const padding = 20;

        const maxX = window.innerWidth - buttonWidth - padding;
        const maxY = window.innerHeight - buttonHeight - padding;

        floatingX = Math.random() * (maxX - padding) + padding;
        floatingY = Math.random() * (maxY - padding) + padding;
    }

    onMount(() => {
        // Move button every 3-5 seconds randomly
        const moveInterval = setInterval(() => {
            const randomDelay = 3000 + Math.random() * 2000;
            setTimeout(moveFloatingButton, randomDelay);
        }, 5000);

        // Initial random position after 1 second
        setTimeout(moveFloatingButton, 1000);

        return () => clearInterval(moveInterval);
    });

    const content = {
        de: {
            title: 'Events',
            description: 'Hier sind alle kommenden Events - sortiert nach Datum. Die Daten werden automatisch aktualisiert.',
            recurringLabel: 'Wiederkehrend',
            oneTime: 'Einmalig',
            filterAll: 'Alle zeigen',
            filterConnectBern: 'Organisiert von Connect Bern',
            toggleRecurring: 'Wiederkehrende Events',
            toggleSpecial: 'Nur Spezial-Events',
            nextOccurrence: 'Nächstes Event',
            disclaimer: '⚠️ <strong>Hinweis:</strong> Wöchentliche und monatliche Events finden möglicherweise nicht immer statt. Bitte überprüfe die Details auf den jeweiligen Event-Seiten oder Webseiten.'
        },
        en: {
            title: 'Events',
            description: 'Here are all upcoming events - sorted by date. Dates are automatically updated.',
            recurringLabel: 'Recurring',
            oneTime: 'One-time',
            filterAll: 'Show All',
            filterConnectBern: 'Organised by Connect Bern',
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
                title: { de: 'Tichu Abend', en: 'Tichu Evening' },
                date: new Date(2025, 11, 23, 18, 30),
                time: '18:30',
                description: {
                    de: 'Komm vorbei und spiel mit uns Tichu! 🃏',
                    en: 'Come join us for a game of Tichu! 🃏'
                },
                link: '/events/tichu',
                recurring: false,
                organizer: 'connectbern'
            },
            {
                title: { de: 'Sound journey HANDPAN CONCERT', en: 'Sound journey HANDPAN CONCERT' },
                date: new Date(2025, 11, 13, 18, 0),
                time: '18:00-19:00',
                description: {
                    de: 'Ein warmer, gemütlicher Raum während der kälteren Wintertage. Decken, Kissen, heißer Tee & eine Stunde beruhigende Handpan-Klänge. Ein sanfter Moment zum Entspannen, Loslassen und Wiederverbinden. 🛋☕🎶',
                    en: 'Step into a warm, cozy space during the colder winter days. Blankets, pillows, hot tea & one hour of soothing handpan sounds. A gentle moment to relax, unwind and reconnect. 🛋☕🎶'
                },
                link: '/events/handpan-concert',
                recurring: false,
                organizer: 'connectbern'
            },
            {
                title: { de: 'Christmas Together in Bern', en: 'Christmas Together in Bern' },
                date: new Date(2025, 11, 25, 19, 0),
                time: '19:00',
                description: {
                    de: 'Weihnachten muss man nicht allein verbringen. Komm vorbei für peruanisches Essen, Kuchen und einen entspannten Abend. Warm, einfach und offen für alle. 🎄',
                    en: 'Christmas doesn\'t have to be spent alone. Join us for Peruvian food, cake and a relaxed evening. Warm, simple, and open to everyone. 🎄'
                },
                link: '/events/christmas-together',
                recurring: false,
                organizer: 'connectbern'
            },
            {
                title: { de: 'Wine & Cheese Night', en: 'Wine & Cheese Night' },
                date: new Date(2026, 0, 24, 18, 0),
                time: '18:00',
                description: {
                    de: 'Ein Abend mit Käse, Wein und neuen Begegnungen. Kuratierte Käse- & Weinverkostung, Blind-Tasting-Spiele und Tischrotation zum Kennenlernen. 🧀🍷\n\n25 CHF – geht direkt an Chef Wagner für Zutaten & Vorbereitung.',
                    en: 'An evening of cheese, wine and new connections. Curated cheese & wine tasting, blind tasting games, and table rotation to meet new people. 🧀🍷\n\n25 CHF – goes directly to Chef Wagner for ingredients & preparation.'
                },
                link: '/events/wine-cheese-night',
                recurring: false,
                organizer: 'connectbern'
            },
            {
                title: { de: 'Acoustic Circle', en: 'Acoustic Circle' },
                date: new Date(2026, 0, 9, 18, 0),
                time: '18:00-22:00',
                description: {
                    de: 'Ein intimer Abend für Musiker:innen und Musikliebhaber:innen in unserem gemütlichen Wohnzimmer. 5–6 Musiker:innen, akustische Sets, eigene Songs. 🎸✨',
                    en: 'An intimate evening for musicians and music lovers in our cozy living room. 5–6 musicians, acoustic sets, original songs. 🎸✨'
                },
                link: '/events/acoustic-circle',
                recurring: false,
                organizer: 'connectbern'
            },
            {
                title: { de: 'Shrek Movie Night • Filmabend', en: 'Shrek Movie Night • Filmabend' },
                date: new Date(2026, 0, 11, 19, 0),
                time: '19:00',
                description: {
                    de: 'Lustiger Abend mit Shrek! Bring deine Lieblingssnacks mit. Anmeldung erforderlich - wir haben nur 2 Sofas! 🎬🛋️',
                    en: 'Fun evening watching Shrek! Bring your favorite snacks. Registration required - we only have 2 couches! 🎬🛋️'
                },
                link: '/events/shrek',
                recurring: false,
                organizer: 'connectbern'
            },
            {
                title: { de: 'Brunch & Games', en: 'Brunch & Games' },
                date: new Date(2026, 0, 17, 9, 0),
                time: '09:00',
                description: {
                    de: 'Starte deinen Samstag mit einem leckeren Brunch und bleib für Spiele! 🥐🎲',
                    en: 'Start your Saturday with a delicious brunch and stay for games! 🥐🎲'
                },
                link: '/events/brunch-games',
                recurring: false,
                organizer: 'connectbern'
            },
            {
                title: { de: 'Pubquiz & Dinner', en: 'Pubquiz & Dinner' },
                date: new Date(2026, 0, 18, 17, 30),
                time: '17:30',
                description: {
                    de: 'Teste dein Wissen in unserem Pubquiz und geniesse ein leckeres Abendessen! 🧠🍕',
                    en: 'Test your knowledge in our pubquiz and enjoy a delicious dinner! 🧠🍕'
                },
                link: '/events/pubquiz-dinner',
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
                title: { de: 'Berndeutsch Konversationsgruppe', en: 'Berndeutsch Conversation Group' },
                date: getNextWeekday(5),
                recurring: 'weekly',
                time: '19:00',
                description: {
                    de: 'Mir träffe üs am Abe zum gmüetlech Mundart mitanang rede. Mir tüe gärn Schwizerdütsch üebe. 🇨🇭💬',
                    en: 'We meet in the evening to practice Swiss German dialect together in a relaxed atmosphere. 🇨🇭💬'
                },
                link: '/events/berndeutsch',
                organizer: 'connectbern'
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

        // Generate multiple occurrences for ping pong events (1st and 3rd Wednesday)
        const pingPongTemplate = {
            title: { de: 'Sip & Smash - Ping Pong bei Lovestino', en: 'Sip & Smash - Ping Pong at Lovestino' },
            recurring: 'monthly-multiple',
            time: '16:30-00:30',
            description: {
                de: 'Ping Pong bei Lovestino! Bring deinen Schläger mit oder hol dir einen vor Ort. Frag in der WhatsApp-Gruppe, wer heute dabei ist! 🏓',
                en: 'Ping pong at Lovestino! Bring your paddle or get one there. Ask in the WhatsApp group who\'s going today! 🏓'
            },
            link: '/events/pingpong'
        };

        // Generate occurrences for 1st Wednesday (next 3 months)
        const firstWedOccurrences = generateMonthlyOccurrences(3, 1, 3);
        firstWedOccurrences.forEach(date => {
            events.push({
                ...pingPongTemplate,
                date: date
            });
        });

        // Generate occurrences for 3rd Wednesday (next 3 months)
        const thirdWedOccurrences = generateMonthlyOccurrences(3, 3, 3);
        thirdWedOccurrences.forEach(date => {
            events.push({
                ...pingPongTemplate,
                date: date
            });
        });

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
        <div class="titleRow">
            <!-- Filter View Switcher (left side) -->
            <div class="filterBar">
                <div class="filterOptions">
                    <button
                        class="filterChip {eventsDisplayMode === 'events' ? 'active' : ''}"
                        on:click={() => eventsDisplayMode = 'events'}
                    >
                        <span class="chipIcon">📅</span>
                        <span class="chipText">{lang === 'de' ? 'Kommende' : 'Upcoming'}</span>
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

            <div class="titleSection">
                <h1>Events</h1>
            </div>

            <button class="whyDifferentButton" on:click={() => showWhyDifferentDialog = true} title={t[lang]['events-why-different']}>
                <span class="whyIcon">🤔</span>
                <span class="whyText">{t[lang]['events-why-different']}</span>
            </button>
        </div>
    </div>

    <!-- Floating Suggest Event Button (Moving around) -->
    <button
        class="floatingButton"
        bind:this={buttonElement}
        style="left: {floatingX}px; top: {floatingY}px;"
        on:click={() => showSuggestDialog = true}
    >
        <span class="floatingIcon">🔥</span>
        <span class="floatingText">{lang === 'de' ? 'Event vorschlagen?' : 'Know of an event?'}</span>
    </button>

    <!-- Suggest Event Dialog -->
    {#if showSuggestDialog}
        <div class="dialogOverlay" on:click={() => showSuggestDialog = false}>
            <div class="dialogBox" on:click|stopPropagation>
                <button class="closeButton" on:click={() => showSuggestDialog = false}>×</button>
                <div class="dialogIcon">✨</div>
                <h2>{t[lang]['events-suggest-title']}</h2>
                <p class="dialogDescription">{t[lang]['events-suggest-description']}</p>
                <a href="/contact" class="dialogButton">
                    {t[lang]['events-suggest-button']} →
                </a>
            </div>
        </div>
    {/if}

    <!-- Why Different Dialog -->
    {#if showWhyDifferentDialog}
        <div class="dialogOverlay" on:click={() => showWhyDifferentDialog = false}>
            <div class="dialogBox" on:click|stopPropagation>
                <button class="closeButton" on:click={() => showWhyDifferentDialog = false}>×</button>
                <div class="dialogIcon">💡</div>
                <h2>{t[lang]['events-why-different-title']}</h2>
                <p class="dialogDescription">{t[lang]['events-description']}</p>
            </div>
        </div>
    {/if}

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
                <div class="disclaimerWrapper">
                    <button class="disclaimerToggle" on:click={() => showDisclaimer = !showDisclaimer}>
                        <span class="toggleText">⚠️ {lang === 'de' ? 'Wichtiger Hinweis' : 'Important Note'}</span>
                        <span class="toggleIcon">{showDisclaimer ? '▼' : '▶'}</span>
                    </button>
                    <div class="disclaimer" class:expanded={showDisclaimer}>
                        {@html content[lang].disclaimer}
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
                                <div class="monthYear">
                                    {(() => {
                                        const months = lang === 'de'
                                            ? ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
                                            : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                                        return months[group.date.getMonth()];
                                    })()}
                                </div>
                            </div>
                            <div class="dateGroupInfo">
                                <div class="fullDate">{formatDate(group.date)}</div>
                                <div class="daysUntilBadge">{getDaysUntilText(getDaysUntil(group.date))}</div>
                            </div>
                        </div>

                        <div class="eventsGrid">
                            {#each group.events as event, i}
                                <div class="eventCard" style="animation-delay: {(groupIndex * 0.05) + (i * 0.02)}s">
                                    <div class="eventHeader">
                                        <h2>{event.title[lang]}</h2>
                                        {#if event.recurring && event.recurring !== 'monthly-multiple'}
                                            <span class="recurringTag">
                                                {#if event.recurring === 'weekly'}
                                                    {lang === 'de' ? 'Wöchentlich' : 'Weekly'}
                                                {:else if event.recurring === 'monthly'}
                                                    {lang === 'de' ? 'Monatlich' : 'Monthly'}
                                                {/if}
                                            </span>
                                        {/if}
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

    /* Floating Button (Moving around page) */
    .floatingButton {
        position: fixed;
        padding: 1em 1.5em;
        background: linear-gradient(135deg, rgb(255, 100, 80), rgb(255, 150, 50));
        border: 3px solid rgba(255, 255, 255, 0.8);
        border-radius: 2em;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.7em;
        box-shadow: 0 8px 30px rgba(255, 100, 80, 0.6);
        z-index: 999;
        transition: left 2.5s cubic-bezier(0.4, 0, 0.2, 1),
                    top 2.5s cubic-bezier(0.4, 0, 0.2, 1),
                    transform 0.3s ease,
                    box-shadow 0.3s ease;
        animation: wiggle 3s ease-in-out infinite, glow 2s ease-in-out infinite;
        white-space: nowrap;
        transform-origin: center;
    }

    @keyframes wiggle {
        0%, 100% {
            transform: rotate(-3deg) scale(1);
        }
        25% {
            transform: rotate(3deg) scale(1.05);
        }
        50% {
            transform: rotate(-3deg) scale(1);
        }
        75% {
            transform: rotate(3deg) scale(0.95);
        }
    }

    @keyframes glow {
        0%, 100% {
            box-shadow: 0 8px 30px rgba(255, 100, 80, 0.6), 0 0 20px rgba(255, 150, 50, 0.4);
        }
        50% {
            box-shadow: 0 10px 40px rgba(255, 100, 80, 0.9), 0 0 30px rgba(255, 150, 50, 0.7);
        }
    }

    .floatingButton:hover {
        transform: scale(1.2) rotate(5deg);
        animation: none;
        box-shadow: 0 15px 50px rgba(255, 100, 80, 0.9);
    }

    .floatingButton:active {
        transform: scale(1.1);
    }

    .floatingIcon {
        font-size: 1.8em;
        line-height: 1;
        animation: pulse 1.5s ease-in-out infinite;
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }

    .floatingText {
        font-size: 1em;
        font-weight: bold;
        color: white;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        letter-spacing: 0.3px;
    }

    @media (max-width: 800px) {
        .floatingButton {
            padding: 0.8em 1.2em;
            gap: 0.5em;
        }

        .floatingIcon {
            font-size: 1.5em;
        }

        .floatingText {
            font-size: 0.85em;
        }
    }

    /* Dialog Styles */
    .dialogOverlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .dialogBox {
        background: linear-gradient(135deg, rgb(30, 40, 60), rgb(20, 30, 50));
        border: 2px solid rgba(255, 200, 100, 0.3);
        border-radius: 1.5em;
        padding: 2em 1.5em;
        max-width: 450px;
        width: 85%;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        animation: slideUp 0.3s ease;
        text-align: center;
    }

    @keyframes slideUp {
        from {
            transform: translateY(50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .closeButton {
        position: absolute;
        top: 1em;
        right: 1em;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: white;
        font-size: 2em;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        line-height: 1;
    }

    .closeButton:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: rotate(90deg);
    }

    .dialogIcon {
        font-size: 3em;
        margin-bottom: 0.4em;
    }

    .dialogBox h2 {
        color: white;
        font-size: 1.3em;
        margin-bottom: 0.5em;
        line-height: 1.3;
    }

    .dialogDescription {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.85em;
        line-height: 1.4;
        margin-bottom: 1.2em;
    }

    .dialogButton {
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
        padding: 0.9em 1.8em;
        background: linear-gradient(135deg, rgb(255, 200, 100), rgb(255, 180, 80));
        color: rgb(20, 20, 30);
        border: none;
        border-radius: 2em;
        font-size: 0.9em;
        font-weight: 700;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(255, 180, 80, 0.4);
        margin-top: 0.5em;
    }

    .dialogButton:hover {
        transform: translateY(-2px) scale(1.05);
        box-shadow: 0 8px 25px rgba(255, 180, 80, 0.6);
    }

    .filterLabel {
        font-size: 0.85em;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.8);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        white-space: nowrap;
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
        min-height: 3.6em;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 1.3;
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
        flex-shrink: 0;
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
        color: #1e40af;
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

        .dialogBox {
            padding: 1.2em 0.9em;
            width: 92%;
            max-width: 92%;
        }

        .dialogBox h2 {
            font-size: 1.1em;
            margin-bottom: 0.4em;
        }

        .dialogDescription {
            font-size: 0.75em;
            line-height: 1.3;
            margin-bottom: 1em;
        }

        .dialogIcon {
            font-size: 2em;
            margin-bottom: 0.3em;
        }

        .closeButton {
            width: 32px;
            height: 32px;
            font-size: 1.3em;
            top: 0.7em;
            right: 0.7em;
        }

        .dialogButton {
            font-size: 0.8em;
            padding: 0.7em 1.3em;
        }

        .filterButtons {
            margin-bottom: 1em;
        }

        /* Make floating button smaller on mobile */
        .floatingButton {
            padding: 0.6em 0.9em;
            font-size: 0.75em;
        }

        .floatingIcon {
            font-size: 1.3em;
        }

        .floatingText {
            font-size: 0.8em;
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
