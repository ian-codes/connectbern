<svelte:head>
	<title>CB Boardgame Night • Events • Connect Bern</title>
	<meta name="description" content="Join us for CB Boardgame Night at Erupt Lounge in Bern. Free entry, all games provided. Wednesday, March 25, 2026 at 6:30 PM." />

	<!-- Open Graph -->
	<meta property="og:url" content="https://connectbern.ch/events/cb-boardgame-night" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="CB Boardgame Night" />
	<meta property="og:description" content="Join us for CB Boardgame Night at Erupt Lounge in Bern. Free entry, all games provided." />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="connectbern.ch" />
	<meta property="twitter:url" content="https://connectbern.ch/events/cb-boardgame-night" />
	<meta name="twitter:title" content="CB Boardgame Night" />
	<meta name="twitter:description" content="Join us for CB Boardgame Night at Erupt Lounge in Bern. Free entry, all games provided." />
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "CB Boardgame Night",
            date: "Mittwoch, 25. März 2026",
            time: "18:30 Uhr",
            location: "Erupt Lounge (3. Stock), Parkterrasse 14, 3012 Bern",
            free: "Kostenlos",
            description: "Komm vorbei für unsere regelmässige Spielenacht! Wir spielen Gesellschaftsspiele, treffen neue Leute und verbringen einen entspannten Abend zusammen. 🎲",
            howToGet: "So kommst du hin",
            registerTitle: "Anmeldung",
            registerDesc: "Melde dich auf unserer App an, damit wir wissen, wie viele Leute kommen.",
            registerBtn: "Auf App anmelden",
            communityTitle: "💬 Unsere Spielegruppe",
            communityDesc: "Tritt unserer Spielegruppe bei, um bei zukünftigen Spieleabenden dabei zu sein:",
            gamesGroupLink: "Zur Spielegruppe",
            closing: "Wir freuen uns auf einen tollen Spieleabend mit euch! 🎲"
        },
        en: {
            title: "CB Boardgame Night",
            date: "Wednesday, March 25, 2026",
            time: "6:30 PM",
            location: "Erupt Lounge (3rd floor), Parkterrasse 14, 3012 Bern",
            free: "Free entry",
            description: "Join us for our regular boardgame night! We play board games, meet new people and spend a relaxed evening together. 🎲",
            howToGet: "How to get there",
            registerTitle: "Registration",
            registerDesc: "Register on our app so we know how many people are coming.",
            registerBtn: "Register on App",
            communityTitle: "💬 Our Game Group",
            communityDesc: "Join our game group to be notified about future game nights:",
            gamesGroupLink: "Go to Game Group",
            closing: "Looking forward to a great game night with you! 🎲"
        }
    };
</script>

<section>
    <a class="btn back" href="/events">
        <span>→</span>Back
    </a>

    <div class="cntr">
        <div class="textContainer">
            <div class="titleSection">
                <h1>{content[lang].title}</h1>
            </div>

            <div class="dateTimeBox">
                <p class="date">📅 {content[lang].date}</p>
                <p class="time">⏰ {content[lang].time}</p>
                <p class="location">📍 {content[lang].location}</p>
                <p class="free">🎟️ {content[lang].free}</p>
            </div>

            <p class="description">
                {content[lang].description}
            </p>

            <div class="directionsBox">
                <p class="directionsTitle">{content[lang].howToGet}</p>
                <img
                    src="https://directus.erupt.ch/assets/1e58fb45-6e03-4e23-b137-eb4f53301f3d"
                    alt="Directions to Erupt Lounge"
                    class="directionsImage"
                />
            </div>

            <div class="registrationBox">
                <p class="registerTitle">{content[lang].registerTitle}</p>
                <p class="registerDesc">{content[lang].registerDesc}</p>
                <a href="https://app.connectbern.ch/events/cb-boardgame-night" class="btn registerMainBtn" target="_blank" rel="noopener noreferrer">
                    🎲 {content[lang].registerBtn}
                </a>
            </div>

            <div class="communityBox">
                <p class="communityTitle">{content[lang].communityTitle}</p>
                <p class="communityDesc">{content[lang].communityDesc}</p>
                <a href="/groups/game-group" class="btn gamesGroupBtn">
                    🎲 {content[lang].gamesGroupLink}
                </a>
            </div>

            <p class="closing">
                {content[lang].closing}
            </p>
        </div>
    </div>
</section>

<style>
    @media (max-width: 800px) {
        h1 {
            font-size: 2rem !important;
        }

        p {
            font-size: 1rem !important;
        }
    }

    section {
        padding: 2em;
        max-width: 700px;
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

    .titleSection {
        text-align: center;
    }

    h1 {
        font-size: 2.5em;
        font-weight: bold;
        text-align: center;
        margin: 0.3em 0;
    }

    .dateTimeBox {
        text-align: center;
        background: rgba(255, 255, 255, 0.05);
        padding: 1em 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .date {
        font-size: 1.3em;
        font-weight: bold;
        margin: 0;
    }

    .time {
        font-size: 1.1em;
        margin: 0.3em 0;
        opacity: 0.9;
    }

    .location {
        font-size: 0.95em;
        margin: 0.5em 0 0;
        opacity: 0.8;
    }

    .free {
        font-size: 0.95em;
        margin: 0.3em 0 0;
        opacity: 0.8;
    }

    p {
        font-size: 1.1em;
        line-height: 1.6;
    }

    .description {
        text-align: center;
        font-size: 1.2em;
        font-weight: 600;
    }

    .directionsBox {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1em;
        padding: 1.5em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .directionsTitle {
        font-size: 1.1em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .directionsImage {
        width: 100%;
        border-radius: 0.75em;
        object-fit: cover;
    }

    .registrationBox {
        background: rgba(255, 180, 100, 0.1);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(255, 180, 100, 0.35);
        display: flex;
        flex-direction: column;
        gap: 0.8em;
        align-items: center;
        text-align: center;
    }

    .registerTitle {
        font-size: 1.1em;
        font-weight: 700;
        margin: 0;
    }

    .registerDesc {
        font-size: 1em;
        margin: 0;
        opacity: 0.9;
    }

    .registerMainBtn {
        padding: 0.8em 1.5em;
        font-size: 1.05em;
        text-decoration: none;
        border-radius: 0.5em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid rgba(255, 255, 255, 0.3);
        background: rgba(255, 180, 100, 0.35);
        color: white;
        display: inline-block;
        width: auto;
    }

    .registerMainBtn:hover {
        transform: scale(1.03);
        background: rgba(255, 180, 100, 0.5);
    }

    .communityBox {
        background: rgba(255, 220, 100, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(255, 220, 100, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
        text-align: center;
    }

    .communityTitle {
        font-size: 1.2em;
        font-weight: bold;
        margin: 0;
    }

    .communityDesc {
        font-size: 1em;
        margin: 0;
        opacity: 0.9;
    }

    .gamesGroupBtn {
        padding: 0.7em 1.3em;
        font-size: 1em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        background: #10B981;
        color: white;
        display: inline-block;
        width: auto;
    }

    .gamesGroupBtn:hover {
        background: #059669;
        transform: scale(1.05);
    }

    .closing {
        text-align: center;
        font-size: 1.15em;
        font-style: italic;
        margin-top: 0.5em;
        opacity: 0.9;
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
