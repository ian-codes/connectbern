<svelte:head>
	<title>Wine & Cheese Night • Events • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Wine & Cheese Night",
            subtitle: "Lerne neue Leute kennen, teile Aromen",
            description: "Ein Abend mit Käse, Wein und neuen Begegnungen. Genieße eine kuratierte Auswahl an Käsesorten und Weinen, nimm an Blind-Tasting-Spielen teil und entdecke neue Kombinationen.",
            whatToExpect: "Was dich erwartet",
            activity1: "🧀 Käse- & Weinverkostung",
            activity1Desc: "Eine kuratierte Auswahl an Käsesorten und Weinen zum Probieren und Genießen.",
            activity2: "🎯 Blind-Tasting-Spiele",
            activity2Desc: "Probiere, errate Aromen und entdecke neue Kombinationen.",
            activity3: "✨ Erstelle deine perfekte Paarung",
            activity3Desc: "Erkunde verschiedene Käse- & Wein-Kombinationen und stimme für deine Lieblingspaarung ab.",
            activity4: "🎲 Icebreaker-Aktivitäten",
            activity4Desc: "Lustige Fragen und Mini-Herausforderungen, um neue Leute kennenzulernen.",
            activity5: "🔄 Tischrotation",
            activity5Desc: "Wechsle die Tische und verbinde dich mit verschiedenen Gästen während des Abends.",
            activity6: "🥂 Geführte Toasts",
            activity6Desc: "Momente, um dein Glas zu erheben und dich mit jemandem Neuem zu verbinden.",
            date: "📅 Freitag, 24. Januar 2026",
            time: "🕕 18:00 Uhr",
            location: "📍 Atelier du Chef Wagner, Gerechtigkeitsgasse 57, 3011 Bern",
            registrationTitle: "📝 Anmeldung",
            registrationDesc: "Bitte bestätige deine Teilnahme online:",
            registrationLink: "www.wagnerprivatechef.com",
            registrationUrl: "https://www.wagnerprivatechef.com",
            downloadFlyer: "📥 Flyer herunterladen",
            shareFlyer: "Lade den Flyer herunter und teile ihn, um mehr Menschen zu erreichen! 🚀",
            closingText: "Wir freuen uns darauf, diesen besonderen Abend mit dir zu teilen! 🧀🍷✨"
        },
        en: {
            title: "Wine & Cheese Night",
            subtitle: "Meet new people, share flavors",
            description: "An evening of cheese, wine and new connections. Enjoy a curated selection of cheeses and wines to taste, participate in blind tasting games, and discover new combinations.",
            whatToExpect: "What to Expect",
            activity1: "🧀 Cheese & Wine Tasting",
            activity1Desc: "A curated selection of cheeses and wines to taste and enjoy.",
            activity2: "🎯 Blind Tasting Games",
            activity2Desc: "Taste, guess flavors and discover new combinations.",
            activity3: "✨ Create Your Perfect Pairing",
            activity3Desc: "Explore different cheese & wine matches and vote for your favorite.",
            activity4: "🎲 Icebreaker Activities",
            activity4Desc: "Fun prompts and mini challenges designed to meet new people.",
            activity5: "🔄 Table Rotation",
            activity5Desc: "Change tables and connect with different guests throughout the evening.",
            activity6: "🥂 Guided Toasts",
            activity6Desc: "Moments to raise your glass and connect with someone new.",
            date: "📅 Friday, January 24th, 2026",
            time: "🕕 6:00 PM",
            location: "📍 Atelier du Chef Wagner, Gerechtigkeitsgasse 57, 3011 Bern",
            registrationTitle: "📝 Registration",
            registrationDesc: "Kindly confirm your attendance online:",
            registrationLink: "www.wagnerprivatechef.com",
            registrationUrl: "https://www.wagnerprivatechef.com",
            downloadFlyer: "📥 Download Flyer",
            shareFlyer: "Download the flyer and share it to reach more people! 🚀",
            closingText: "We're looking forward to sharing this special evening with you! 🧀🍷✨"
        }
    };
</script>

<section>
    <a class="btn back" href="/events">
        <span>→</span>Back
    </a>

    <div class="cntr">
        <div class="textContainer">
            <h1>{content[lang].title}</h1>

            <p class="subtitle">
                {content[lang].subtitle}
            </p>

            <p class="description">
                {content[lang].description}
            </p>

            <div class="contributionBox">
                <div class="contributionAmount">25 CHF</div>
                <p class="contributionText">
                    {lang === 'de'
                        ? 'Ein kleiner Beitrag, damit Chef Wagner die Zutaten besorgen, alles vorbereiten und uns seinen schönen Raum öffnen kann – ein tolles Erlebnis zum fairen Preis. Das Geld geht direkt an Chef Wagner, nicht an Connect Bern.'
                        : 'A small contribution so Chef Wagner can get the ingredients, prepare everything, and open his beautiful space to us – a great experience at a fair price. The money goes directly to Chef Wagner, not to Connect Bern.'}
                </p>
            </div>

            <div class="flyerDownloadBox">
                <p class="shareFlyer">{content[lang].shareFlyer}</p>
                <a href="/wine & cheese night 24.01.pdf" download="wine-cheese-night-24.01.pdf" class="downloadBtn">
                    {content[lang].downloadFlyer}
                </a>
            </div>

            <div class="whatToExpectBox">
                <h2 class="whatToExpectTitle">{content[lang].whatToExpect}</h2>
                
                <div class="activityItem">
                    <h3 class="activityTitle">{content[lang].activity1}</h3>
                    <p class="activityDesc">{content[lang].activity1Desc}</p>
                </div>

                <div class="activityItem">
                    <h3 class="activityTitle">{content[lang].activity2}</h3>
                    <p class="activityDesc">{content[lang].activity2Desc}</p>
                </div>

                <div class="activityItem">
                    <h3 class="activityTitle">{content[lang].activity3}</h3>
                    <p class="activityDesc">{content[lang].activity3Desc}</p>
                </div>

                <div class="activityItem">
                    <h3 class="activityTitle">{content[lang].activity4}</h3>
                    <p class="activityDesc">{content[lang].activity4Desc}</p>
                </div>

                <div class="activityItem">
                    <h3 class="activityTitle">{content[lang].activity5}</h3>
                    <p class="activityDesc">{content[lang].activity5Desc}</p>
                </div>

                <div class="activityItem">
                    <h3 class="activityTitle">{content[lang].activity6}</h3>
                    <p class="activityDesc">{content[lang].activity6Desc}</p>
                </div>
            </div>

            <div class="infoBox">
                <p class="date">{content[lang].date}</p>
                <p class="eventDetail">{content[lang].time}</p>
                <p class="eventDetail">{content[lang].location}</p>
            </div>

            <div class="registrationBox">
                <h2 class="registrationTitle">{content[lang].registrationTitle}</h2>
                <p class="registrationDesc">{content[lang].registrationDesc}</p>
                <a href={content[lang].registrationUrl} class="btn registrationBtn" target="_blank" rel="noopener noreferrer">
                    🌐 {content[lang].registrationLink}
                </a>
            </div>

            <p class="closing">
                {content[lang].closingText}
            </p>
        </div>
    </div>
</section>

<style>
    @media (max-width: 800px) {
        .cntr {
            flex-wrap: wrap;
            gap: 2em !important;
        }

        h1 {
            font-size: 2rem !important;
        }

        p {
            font-size: 1rem !important;
        }
    }

    section {
        padding: 2em;
        max-width: 900px;
        margin: 0 auto;
    }

    .cntr {
        display: flex;
        flex-direction: column;
        gap: 2em;
        margin: 2em 0;
    }

    .textContainer {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        width: 100%;
    }

    h1 {
        font-size: 3em;
        font-weight: bold;
        text-align: center;
    }

    p {
        font-size: 1.2em;
        line-height: 1.6;
    }

    .subtitle {
        text-align: center;
        font-size: 1.3em;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.95);
    }

    .description {
        text-align: center;
        font-size: 1.2em;
    }

    .contributionBox {
        background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(255, 215, 0, 0.08));
        padding: 1em 1.5em;
        border-radius: 0.8em;
        border: 1px solid rgba(212, 175, 55, 0.25);
        display: flex;
        flex-direction: row;
        gap: 1em;
        align-items: center;
        justify-content: center;
        max-width: 600px;
        margin: 0 auto;
    }

    .contributionAmount {
        font-size: 1.4em;
        font-weight: 700;
        color: rgb(255, 215, 100);
        white-space: nowrap;
        padding: 0.3em 0.6em;
        background: rgba(212, 175, 55, 0.15);
        border-radius: 0.5em;
        border: 1px solid rgba(212, 175, 55, 0.3);
    }

    .contributionText {
        font-size: 0.85em;
        line-height: 1.5;
        margin: 0;
        opacity: 0.9;
        text-align: left;
        flex: 1;
    }

    @media (max-width: 800px) {
        .contributionBox {
            flex-direction: column;
            text-align: center;
            padding: 1em;
        }

        .contributionAmount {
            font-size: 1.3em;
        }

        .contributionText {
            font-size: 0.8em;
            text-align: center;
        }
    }

    .flyerDownloadBox {
        background: rgba(100, 200, 255, 0.1);
        padding: 1.5em;
        border-radius: 1em;
        border: 2px solid rgba(100, 200, 255, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .shareFlyer {
        text-align: center;
        margin: 0;
        font-size: 1.1em;
        font-weight: 600;
    }

    .downloadBtn {
        padding: 0.8em 1.5em;
        font-size: 1.1em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        background: #3B82F6;
        color: white;
        display: inline-block;
        width: max-content;
        white-space: nowrap;
    }

    .downloadBtn:hover {
        background: #2563EB;
        transform: scale(1.05);
    }

    .whatToExpectBox {
        background: rgba(255, 180, 100, 0.1);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(255, 180, 100, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }

    .whatToExpectTitle {
        font-size: 1.8em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .activityItem {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.2em;
        border-radius: 0.8em;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .activityTitle {
        font-size: 1.3em;
        font-weight: bold;
        margin: 0 0 0.5em 0;
    }

    .activityDesc {
        font-size: 1.05em;
        line-height: 1.6;
        margin: 0;
        opacity: 0.9;
    }

    .infoBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
    }

    .date {
        font-size: 1.4em;
        font-weight: bold;
        margin: 0;
    }

    .eventDetail {
        font-size: 1.1em;
        margin: 0.5em 0 0 0;
        opacity: 0.9;
    }

    .registrationBox {
        background: rgba(255, 220, 100, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(255, 220, 100, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        align-items: center;
    }

    .registrationTitle {
        font-size: 1.8em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .registrationDesc {
        text-align: center;
        margin: 0;
        font-size: 1.1em;
        line-height: 1.6;
        max-width: 600px;
    }

    .registrationBtn {
        padding: 1em 2em;
        font-size: 1.2em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        background: #4285F4;
        color: white;
        display: inline-block;
        width: max-content;
        white-space: nowrap;
    }

    .registrationBtn:hover {
        background: #3367D6;
        transform: scale(1.05);
    }

    .closing {
        text-align: center;
        font-size: 1.2em;
        font-style: italic;
        margin-top: 1em;
    }

    .back {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        background: rgba(0, 0, 0, 0.5);
        width: max-content;
        padding: 0.8em 1.2em;
        transition: all 0.2s ease;
        text-decoration: none;
        color: white;
        border-radius: 0.5em;
        margin-bottom: 1em;
    }

    .back span {
        margin-top: 3px;
        transform: rotate(180deg);
    }

    .back:hover {
        transform: scale(1.02);
        background: rgba(0, 0, 0, 0.7);
    }
</style>
