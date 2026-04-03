const PAST_EVENTS_2025 = [
    {
        title: { de: 'Hobby-Schach', en: 'Hobby Chess' },
        date: new Date(2025, 10, 4, 18, 0),
        time: '18:00',
        description: {
            de: 'Komm vorbei für Hobby-Schach im Connect Bern Haus ♟',
            en: 'Come join us for hobby chess at Connect Bern house ♟'
        },
        link: '/events/past/chess',
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
        link: '/events/past/tichu',
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
        link: '/events/past/handpan-concert',
        recurring: false,
        organizer: 'connectbern',
        paid: true,
        hidden: true,
    },
    {
        title: { de: 'Christmas Together in Bern', en: 'Christmas Together in Bern' },
        date: new Date(2025, 11, 25, 19, 0),
        time: '19:00',
        description: {
            de: 'Weihnachten muss man nicht allein verbringen. Komm vorbei für peruanisches Essen, Kuchen und einen entspannten Abend. Warm, einfach und offen für alle. 🎄',
            en: 'Christmas doesn\'t have to be spent alone. Join us for Peruvian food, cake and a relaxed evening. Warm, simple, and open to everyone. 🎄'
        },
        link: '/events/past/christmas-together',
        recurring: false,
        organizer: 'connectbern'
    },
];

const PAST_EVENTS_2026 = [
    {
        title: { de: 'Wine & Cheese Night', en: 'Wine & Cheese Night' },
        date: new Date(2026, 0, 24, 18, 0),
        time: '18:00',
        description: {
            de: 'Ein Abend mit Käse, Wein und neuen Begegnungen. Kuratierte Käse- & Weinverkostung, Blind-Tasting-Spiele und Tischrotation zum Kennenlernen. 🧀🍷\n\n25 CHF – geht direkt an Chef Wagner für Zutaten & Vorbereitung.',
            en: 'An evening of cheese, wine and new connections. Curated cheese & wine tasting, blind tasting games, and table rotation to meet new people. 🧀🍷\n\n25 CHF – goes directly to Chef Wagner for ingredients & preparation.'
        },
        link: '/events/past/wine-cheese-night',
        recurring: false,
        organizer: 'connectbern',
        paid: true
    },
    {
        title: { de: 'Acoustic Circle', en: 'Acoustic Circle' },
        date: new Date(2026, 0, 9, 18, 0),
        time: '18:00-22:00',
        description: {
            de: 'Ein intimer Abend für Musiker:innen und Musikliebhaber:innen in unserem gemütlichen Wohnzimmer. 5–6 Musiker:innen, akustische Sets, eigene Songs. 🎸✨',
            en: 'An intimate evening for musicians and music lovers in our cozy living room. 5–6 musicians, acoustic sets, original songs. 🎸✨'
        },
        link: '/events/past/acoustic-circle',
        recurring: false,
        organizer: 'connectbern'
    },
    {
        title: { de: 'Sew Bern: Beginner Mending Group', en: 'Sew Bern: Beginner Mending Group' },
        date: new Date(2026, 0, 28, 18, 30),
        time: '18:30-20:30',
        description: {
            de: 'Komm nähen mit uns! Für alle offen - ob Anfänger:in oder Profi. Wir helfen beim Flicken, Säumen und zeigen grundlegende Stiche. Stricken, Häkeln und andere Handarbeiten willkommen. ✂️🧵',
            en: 'Come sew with us! Open to all - beginners or pros. Help with mending, hemming, and basic stitches. Knitting, crocheting, and other crafts welcome. ✂️🧵'
        },
        link: '/events/past/sew-bern',
        recurring: false,
        organizer: 'connectbern'
    },
    {
        title: { de: "Acoustic '90s", en: "Acoustic '90s" },
        date: new Date(2026, 0, 31, 18, 0),
        time: '18:00-22:00',
        description: {
            de: 'Akustische 90er-Cover in einer intimen Wohnzimmeratmosphäre. 5 Musiker:innen, vertraute Songs, Nostalgie und Verbindung. 🎸✨\n\nEintritt: CHF 10',
            en: "Acoustic '90s covers in an intimate living-room atmosphere. 5 musicians, familiar songs, nostalgia and connection. 🎸✨\n\nEntry: CHF 10"
        },
        link: '/events/past/90s-covers-night',
        recurring: false,
        organizer: 'connectbern',
        paid: true
    },
    {
        title: { de: 'Shrek Movie Night • Filmabend', en: 'Shrek Movie Night • Filmabend' },
        date: new Date(2026, 0, 14, 19, 0),
        time: '19:00',
        description: {
            de: 'Lustiger Abend mit Shrek! Bring deine Lieblingssnacks mit. Anmeldung erforderlich - wir haben nur 2 Sofas! 🎬🛋️',
            en: 'Fun evening watching Shrek! Bring your favorite snacks. Registration required - we only have 2 couches! 🎬🛋️'
        },
        link: '/events/past/shrek',
        recurring: false,
        organizer: 'connectbern'
    },
    {
        title: { de: 'Speed Friending', en: 'Speed Friending' },
        date: new Date(2026, 1, 25, 18, 0),
        time: '18:00-19:30',
        description: {
            de: 'Unser coolstes Event! Echte Gespräche statt Small Talk - wir matchen dich basierend auf deinen Interessen. 10 CHF Kaution. ⚡🤝',
            en: 'Our coolest event! Real conversations instead of small talk - we match you based on your interests. 10 CHF deposit. ⚡🤝'
        },
        link: '/events/past/speed-friending',
        recurring: false,
        organizer: 'connectbern',
        featured: true,
        paid: true,
        optionalPaid: true
    },
    {
        title: { de: 'Brunch & Games', en: 'Brunch & Games' },
        date: new Date(2026, 0, 17, 9, 0),
        time: '09:00',
        description: {
            de: 'Starte deinen Samstag mit einem leckeren Brunch und bleib für Spiele! 🥐🎲',
            en: 'Start your Saturday with a delicious brunch and stay for games! 🥐🎲'
        },
        link: '/events/past/brunch-games',
        recurring: false,
        organizer: 'connectbern',
        paid: true,
        optionalPaid: true
    },
    {
        title: { de: 'Pubquiz & Dinner', en: 'Pubquiz & Dinner' },
        date: new Date(2026, 0, 18, 17, 30),
        time: '17:30',
        description: {
            de: 'Teste dein Wissen in unserem Pubquiz und geniesse ein leckeres Abendessen! 🧠🍕',
            en: 'Test your knowledge in our pubquiz and enjoy a delicious dinner! 🧠🍕'
        },
        link: '/events/past/pubquiz-dinner',
        recurring: false,
        organizer: 'connectbern',
        paid: true,
        optionalPaid: true
    },
    {
        title: { de: "Let's Dine Dinner", en: "Let's Dine Dinner" },
        date: new Date(2026, 0, 24, 18, 0),
        time: '18:00',
        description: {
            de: 'Komm mit uns zum Abendessen und Karaoke! Restaurant Cavallo Star (Hauptbahnhof), danach Karaoke im Bärengrotte. 🍽️🎤\n\nAnmeldung bis Donnerstag, 23:59 Uhr.',
            en: 'Join us for dinner and karaoke! Restaurant Cavallo Star (Central Station), then Karaoke at Bärengrotte. 🍽️🎤\n\nSign up by Thursday, 11:59 PM.'
        },
        link: '/events/past/lets-dine-jan24',
        recurring: false,
        organizer: 'connectbern'
    },
    {
        title: { de: 'EA Bern Social @ Pittaria', en: 'EA Bern Social @ Pittaria' },
        date: new Date(2026, 0, 22, 18, 30),
        time: '18:30-20:00',
        recurring: false,
        description: {
            de: 'Komm zu unserem monatlichen EA Bern Social! Freundliches, entspanntes Treffen für alle, die sich für Effective Altruism interessieren. 🥙',
            en: 'Join us for our monthly EA Bern Social! A friendly, relaxed get-together for everyone interested in Effective Altruism. 🥙'
        },
        link: '/events/past/ea-bern-social',
        organizer: 'connectbern'
    },
    {
        title: { de: 'CB Boardgame Night', en: 'CB Boardgame Night' },
        date: new Date(2026, 2, 25, 18, 30),
        time: '18:30',
        description: {
            de: 'Gesellschaftsspiele spielen bei Erupt Lounge, Parkterrasse 14 (3. Stock). Kostenlos. 🎲',
            en: 'Board games at Erupt Lounge, Parkterrasse 14 (3rd floor). Free entry. 🎲'
        },
        link: '/events/past/cb-boardgame-night',
        recurring: false,
        organizer: 'connectbern'
    },
    {
        title: { de: 'Connect Bern Welcome Party', en: 'Connect Bern Welcome Party' },
        date: new Date(2026, 2, 24, 18, 0),
        time: '18:00',
        description: {
            de: 'Wir feiern den Start unseres Community-Projekts! Triff die Menschen dahinter, sieh dir den Space an und geniesse einen entspannten Abend. Begrenzte Plätze – Anmeldung auf der App erforderlich. 🎉',
            en: 'We are celebrating the start of our community project! Meet the people behind it, see the space, and enjoy a relaxed evening. Limited spots – register on the app. 🎉'
        },
        link: '/events/past/welcome-party',
        recurring: false,
        organizer: 'connectbern',
        featured: true
    },
    {
        title: { de: 'Speed Friending #2', en: 'Speed Friending #2' },
        date: new Date(2026, 2, 26, 18, 0),
        time: '18:00',
        description: {
            de: 'Echte Gespräche statt Small Talk – wir matchen dich basierend auf deinen Interessen. 10 CHF rückerstattbare Kaution. ⚡🤝',
            en: 'Real conversations instead of small talk – we match you based on your interests. 10 CHF refundable deposit. ⚡🤝'
        },
        link: '/events/past/speed-friending-2',
        recurring: false,
        organizer: 'connectbern',
        featured: true,
        paid: true,
        optionalPaid: true
    },
    {
        title: { de: 'Wanderung: First - Bachalpsee - Bort', en: 'Hike: First - Bachalpsee - Bort' },
        date: new Date(2026, 2, 14, 9, 0),
        time: '09:00',
        description: {
            de: 'Entspannte Wanderung durch die Berge mit gefrorenem See, Wäldern und Bergpanorama. Anfängerfreundlich, Hunde willkommen (an der Leine). Kleine Gruppe. 🥾🏔️',
            en: 'Chill hike through the mountains with a frozen lake, forests and mountain views. Beginner friendly, dogs welcome (leashed). Small group. 🥾🏔️'
        },
        link: '/events/past/hiking',
        recurring: false,
        organizer: 'connectbern'
    },
];

const PAST_RECURRING_EVENTS = [
    {
        title: { de: 'Handpan-Lektion für Anfänger', en: 'Beginner Handpan Lesson' },
        date: getNextWeekday(0),
        recurring: 'weekly',
        description: {
            de: 'Handpan-Lektion für Anfänger mit Berni 🎶 (20 CHF Kaution um deinen Platz zu garantieren)',
            en: 'Beginner handpan lesson with Berni 🎶 (20 CHF deposit to guarantee your spot)'
        },
        link: '/events/past/handpan',
        organizer: 'connectbern',
        paid: true,
        optionalPaid: true
    },
];

const RECURRING_EVENTS = [
    {
        title: { de: 'Tuesday Jazz Jam', en: 'Tuesday Jazz Jam' },
        date: getNextWeekday(2),
        time: '19:30',
        recurring: 'weekly',
        description: {
            de: 'Treffen am Zytglogge um 19:30 Uhr und zusammen zum Jazz Jam gehen. Live-Band ab 21 Uhr, danach offene Jam-Session. Gemütlicher Ort unter dem Dach mit toller Atmosphäre. 🎷✨\n\n5 CHF Eintritt + optional Risotto für 5 CHF – geht direkt ans Lokal.\n\nFragen? Tomáš (+41 78 228 77 64)',
            en: 'Meet at Zytglogge at 7:30 PM and head to Jazz Jam together. Live band at 9 PM, then open jam session. Cozy rooftop spot with great vibes. 🎷✨\n\n5 CHF entry + optional risotto for 5 CHF – goes directly to the venue.\n\nQuestions? Tomáš (+41 78 228 77 64)'
        },
        link: '/events/tuesday-jazz-jam',
        organizer: 'connectbern',
        paid: true
    },
    {
        title: { de: 'Language Exchange di Berna', en: 'Language Exchange di Berna' },
        date: (() => { const d = getNextWeekday(2); if (d.getFullYear() === 2026 && d.getMonth() === 1 && d.getDate() === 17) d.setDate(d.getDate() + 7); if (d.getFullYear() === 2026 && d.getMonth() === 2 && d.getDate() === 3) d.setDate(d.getDate() + 1); return d; })(),
        time: '19:00',
        recurring: 'weekly',
        description: {
            de: 'Sprachenaustausch im Connect Bern Haus - übe verschiedene Sprachen!',
            en: 'Language exchange at Connect Bern house - practice different languages!'
        },
        link: '/events/language-exchange-di-berna',
        organizer: 'connectbern'
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
];

const RECURRING_EVENTS_BY_OTHERS = [
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
        title: { de: 'Language Exchange Bern', en: 'Language Exchange Bern' },
        date: getNextWeekday(4),
        time: '19:00',
        recurring: 'weekly',
        description: {
            de: 'Sprachenaustausch im Maison, Theaterplatz 7 (neben dem Zytglogge)',
            en: 'Language exchange at Maison, Theaterplatz 7 (next to the Zytglogge)'
        },
        link: '/groups/language-exchange'
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
        title: { de: 'Patt Event', en: 'Patt Event' },
        date: getNextWeekday(6),
        recurring: 'monthly',
        time: '17:00-23:00',
        description: {
            de: 'Einmal im Monat',
            en: 'Once a month'
        },
        link: 'https://patt.be'
    },
];

const FUTURE_EVENTS = [
    {
        title: { de: 'Karaoke Nacht im Stellwerk', en: 'Karaoke Night at Stellwerk' },
        date: new Date(2026, 3, 3, 20, 0),
        time: '20:00',
        description: {
            de: 'Singst du gerne? Triff neue Leute bei der Karaoke Nacht im Stellwerk! Singen ist nicht Pflicht, aber anfeuern schon. 🎤',
            en: 'Like singing? Meet new people at the Karaoke Night at Stellwerk! Singing is not mandatory but cheering for everybody on stage is. 🎤'
        },
        link: '/events/karaoke',
        recurring: false,
        organizer: 'connectbern',
        featured: true
    },
    {
        title: { de: '🐰 POTLUCK OSTER PARTY & BRUNCH 🐣', en: '🐰 POTLUCK EASTER PARTY & BRUNCH 🐣' },
        date: new Date(2026, 3, 5, 13, 0),
        recurring: false,
        time: '11:00',
        description: {
            de: 'Bring ein homemade Gericht, Getränke oder erfinde ein Osterspiel für unsere Potluck Party.',
            en: 'Bring a homemade dish, a drink or invent a fun Easter game for our potluch party.'
        },
        link: '/events/easter-potluck',
        organizer: 'connectbern'
    },
]


export const ALL_EVENT_DATA = [
    ...PAST_EVENTS_2025, ...PAST_EVENTS_2026, ...RECURRING_EVENTS, ...FUTURE_EVENTS, ...RECURRING_EVENTS_BY_OTHERS
]

export const EVENT_DATA = [
    ...RECURRING_EVENTS, ...FUTURE_EVENTS, ...RECURRING_EVENTS_BY_OTHERS
];

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
