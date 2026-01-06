<svelte:head>
	<title>Acoustic Circle • Events • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Acoustic Circle",
            subtitle: "Ein intimer Abend für Musiker:innen und Musikliebhaber:innen 🎸✨",
            description: "Wir veranstalten einen kleinen, intimen Abend für Musiker:innen und Menschen, die Musik lieben, in Bern in unserem grossen, gemütlichen Wohnzimmer — ein Raum zum Spielen, Zuhören und sich gegenseitig durch Musik inspirieren zu lassen.",
            conceptTitle: "Das Konzept",
            conceptDesc: "5–6 Musiker:innen, akustische Sets, eigene Songs, geteilte Präsenz. Keine Bühne, kein Druck — einfach Musik, Verbindung und kreativer Austausch.",
            comeAloneTitle: "💫 Kommst du alleine? Perfekt!",
            comeAloneDesc: "Viele kommen alleine – und das ist völlig in Ordnung. Hier kannst du neue Menschen kennenlernen und dich durch die Musik verbinden. Ein sicherer, warmer Raum für echte Begegnungen.",
            date: "📅 Freitag, 9. Januar 2026",
            time: "🕕 18:00–22:00",
            location: "📍 Bern",
            atmosphere: "Die Veranstaltung ist kostenlos. Wir machen es rein, um Kunst zu teilen und eine schöne Atmosphäre zu schaffen. Es gibt hausgemachte Snacks und Getränke.",
            capacity: "Der Raum bietet bequem Platz für 20–25 Personen und bleibt so persönlich und warm.",
            registrationTitle: "📝 Anmeldung",
            registrationDesc: "Bitte schreibe Rahel eine Nachricht, um dich anzumelden, damit wir die Anzahl der kommenden Personen im Auge behalten können.",
            contactName: "Rahel Hirt",
            phone: "+41774006080",
            whatsappMessage: "Hallo Rahel, ich möchte gerne zum Acoustic Circle am 9. Januar kommen!",
            closingText: "Ein Abend voller Musik, Gemeinschaft und kreativer Energie. Wir freuen uns auf dich! ☀️"
        },
        en: {
            title: "Acoustic Circle",
            subtitle: "An intimate evening for musicians and music lovers 🎸✨",
            description: "We're hosting a small, intimate evening for musicians and people who love music, in Bern in our big, cozy living room — a space to play, listen, and get inspired by each other's music.",
            conceptTitle: "The Concept",
            conceptDesc: "5–6 musicians, acoustic sets, original songs, shared presence. No stage, no pressure — just music, connection, and creative exchange.",
            comeAloneTitle: "💫 Coming Alone? Perfect!",
            comeAloneDesc: "Many people come alone to this event! You're welcome to meet new people and connect through the music. It's a safe, warm space for authentic connections.",
            date: "📅 Friday, January 9, 2026",
            time: "🕕 18:00–22:00",
            location: "📍 Bern",
            atmosphere: "The gathering is free. We're doing it purely to share art and create a beautiful atmosphere. We'll have homemade snacks and drinks available for anyone who'd like to enjoy them.",
            capacity: "The space comfortably holds 20–25 people, keeping it personal and warm.",
            registrationTitle: "📝 Sign Up",
            registrationDesc: "Please message Rahel to sign up so we can keep track of the number of people coming.",
            contactName: "Rahel Hirt",
            phone: "+41774006080",
            whatsappMessage: "Hi Rahel, I would like to come to Acoustic Circle on January 9th!",
            closingText: "An evening full of music, community, and creative energy. We're looking forward to seeing you! ☀️"
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

            <div class="imageContainer">
                <img src="/images/music.jpeg" alt="Acoustic Circle Music Evening" class="eventImage" />
            </div>

            <div class="conceptBox">
                <h2 class="conceptTitle">{content[lang].conceptTitle}</h2>
                <p class="conceptDesc">{content[lang].conceptDesc}</p>
            </div>

            <div class="comeAloneBox">
                <h2 class="comeAloneTitle">{content[lang].comeAloneTitle}</h2>
                <p class="comeAloneDesc">{content[lang].comeAloneDesc}</p>
            </div>

            <div class="infoBox">
                <p class="date">{content[lang].date}</p>
                <p class="eventDetail">{content[lang].time}</p>
                <p class="eventDetail">{content[lang].location}</p>
            </div>

            <div class="atmosphereBox">
                <p class="atmosphere">{content[lang].atmosphere}</p>
                <p class="capacity">{content[lang].capacity}</p>
            </div>

            <div class="contactBox">
                <h2 class="registrationTitle">{content[lang].registrationTitle}</h2>
                <p class="registrationDesc">{content[lang].registrationDesc}</p>

                <div class="contactInfo">
                    <p class="contactName">{content[lang].contactName}</p>
                    <a href="tel:{content[lang].phone}" class="phoneLink">
                        {content[lang].phone}
                    </a>
                </div>

                <div class="contactButtons">
                    <a
                        href="https://wa.me/{content[lang].phone}?text={encodeURIComponent(content[lang].whatsappMessage)}"
                        class="contactBtn whatsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        💬 WhatsApp
                    </a>
                </div>
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

    .imageContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2em 0;
    }

    .eventImage {
        width: 100%;
        max-width: 600px;
        height: auto;
        border-radius: 1em;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
        object-fit: cover;
    }

    .eventImage:hover {
        transform: scale(1.05);
    }

    .conceptBox {
        background: rgba(255, 180, 100, 0.1);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(255, 180, 100, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .conceptTitle {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .conceptDesc {
        text-align: center;
        margin: 0;
        font-size: 1.1em;
        line-height: 1.7;
    }

    .comeAloneBox {
        background: rgba(167, 139, 250, 0.1);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(167, 139, 250, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .comeAloneTitle {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .comeAloneDesc {
        text-align: center;
        margin: 0;
        font-size: 1.1em;
        line-height: 1.7;
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

    .atmosphereBox {
        background: rgba(100, 200, 255, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(100, 200, 255, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .atmosphere {
        text-align: center;
        font-size: 1.1em;
        line-height: 1.7;
        margin: 0;
    }

    .capacity {
        text-align: center;
        font-size: 1.05em;
        line-height: 1.7;
        margin: 0;
        font-style: italic;
        opacity: 0.9;
    }

    .contactBox {
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

    .contactInfo {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        align-items: center;
    }

    .contactName {
        font-size: 1.2em;
        font-weight: 600;
        margin: 0;
    }

    .phoneLink {
        font-size: 1.5em;
        font-weight: bold;
        color: white;
        text-decoration: none;
        padding: 0.5em 1em;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 0.5em;
        transition: all 0.2s ease;
    }

    .phoneLink:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.05);
    }

    .contactButtons {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 0.5em;
    }

    .contactBtn {
        padding: 0.8em 1.5em;
        font-size: 1em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        display: inline-block;
        width: auto;
    }

    .whatsapp {
        background: #25D366;
        color: white;
    }

    .whatsapp:hover {
        background: #1fb855;
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
