<svelte:head>
	<title>Connect Bern Welcome Party • Events • Connect Bern</title>
	<meta name="description" content="We are celebrating the start of something new, our community project Connect Bern. Come by, meet the people behind the project, see the space, and connect with others." />

	<!-- Open Graph -->
	<meta property="og:url" content="https://connectbern.ch/events/welcome-party" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Connect Bern Welcome Party" />
	<meta property="og:description" content="We are celebrating the start of something new, our community project Connect Bern. Everyone is invited!" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="connectbern.ch" />
	<meta property="twitter:url" content="https://connectbern.ch/events/welcome-party" />
	<meta name="twitter:title" content="Connect Bern Welcome Party" />
	<meta name="twitter:description" content="We are celebrating the start of something new, our community project Connect Bern. Everyone is invited!" />
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Connect Bern Welcome Party",
            date: "Dienstag, 24. März 2026",
            time: "18:00 bis 21:00 Uhr",
            description: "Wir feiern den Start von etwas Neuem, unserem Community-Projekt Connect Bern. Und alle sind eingeladen!",
            p1: "Was als Idee begann, ist jetzt ein echtes Projekt: ein gemeinsamer Raum, regelmässige Events, eine wachsende Community und eine brandneue App für Web, Android und iPhone, danke Samir. Mit Isabel und Manon, die neu in den Space einziehen, fühlt es sich wie der perfekte Moment an, die Türen zu öffnen, alte und neue Freunde willkommen zu heissen und den Beginn dieses neuen Kapitels zu feiern.",
            p2: "Komm vorbei, triff die Menschen hinter dem Projekt, sieh dir den Raum an, vernetze dich mit anderen und geniesse einen entspannten Abend zusammen.",
            p3: "Und ja, wir feiern auch Chagais Geburtstag 🎉",
            spotsTitle: "👉 Melde dich an, begrenzte Plätze!",
            spotsDesc: "Bitte registriere dich auf unserer App um teilzunehmen. Wir müssen Anmeldungen genehmigen, da wir begrenzte Plätze haben.",
            registerBtn: "Jetzt anmelden",
            helpTitle: "📢 Lass uns mehr Leute erreichen!",
            helpDesc: "Wir haben das Event auf diesen Plattformen registriert. Wenn du ein Konto hast, registriere dich auch dort. Der Algorithmus mag es, wenn etwas passiert, und es hilft uns, mehr Menschen zu erreichen! 🚀",
            meetupLink: "Meetup",
            redditLink: "Reddit",
            lumaLink: "Luma",
            closing: "Wir freuen uns darauf, dich kennenzulernen! 🌍✨"
        },
        en: {
            title: "Connect Bern Welcome Party",
            date: "Tuesday, March 24, 2026",
            time: "6:00 PM to 9:00 PM",
            description: "We are celebrating the start of something new, our community project Connect Bern. And everyone is invited!",
            p1: "What began as an idea is now a real project: a shared space, regular events, a growing community, and a brand new app on web, Android and iPhone, thanks to Samir. With new roommates Isabel and Manon joining the space, it felt like the perfect moment to open the doors, welcome friends old and new, and celebrate the beginning of this next chapter.",
            p2: "Come by, meet the people behind the project, see the space, connect with others, and enjoy a relaxed evening together.",
            p3: "And yes, we will also be celebrating Chagai's birthday along the way 🎉",
            spotsTitle: "👉 Register now, limited spots!",
            spotsDesc: "Please register on our app to join. We approve registrations as we have limited spots.",
            registerBtn: "Register now",
            helpTitle: "📢 Let's reach more people!",
            helpDesc: "We've registered the event on these platforms. If you have an account, please also register there. The algorithm likes it when something is happening, and it helps us reach more people! 🚀",
            meetupLink: "Meetup",
            redditLink: "Reddit",
            lumaLink: "Luma",
            closing: "We look forward to meeting you! 🌍✨"
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
                <p class="location">📍 Connect Bern Space</p>
            </div>

            <p class="description">
                {content[lang].description}
            </p>

            <p class="bodyText">{content[lang].p1}</p>

            <p class="bodyText">{content[lang].p2}</p>

            <p class="birthdayText">{content[lang].p3}</p>

            <div class="registrationBox">
                <p class="spotsTitle">{content[lang].spotsTitle}</p>
                <p class="spotsDesc">{content[lang].spotsDesc}</p>
                <a href="https://app.connectbern.ch/events/connect-bern-welcome-party" class="btn registerMainBtn" target="_blank" rel="noopener noreferrer">
                    🎉 {content[lang].registerBtn}
                </a>
            </div>

            <div class="registerBox">
                <h2 class="registerTitle">{content[lang].helpTitle}</h2>
                <p class="registerDesc">{content[lang].helpDesc}</p>
                <div class="registerButtons">
                    <a href="https://www.meetup.com/meetup-bern/events/313791459" class="btn registerBtn meetup" target="_blank" rel="noopener noreferrer">
                        👥 {content[lang].meetupLink}
                    </a>
                    <a href="https://www.reddit.com/r/bern/" class="btn registerBtn reddit" target="_blank" rel="noopener noreferrer">
                        🔴 {content[lang].redditLink}
                    </a>
                    <a href="https://lu.ma/connectbern" class="btn registerBtn luma" target="_blank" rel="noopener noreferrer">
                        🗓️ {content[lang].lumaLink}
                    </a>
                </div>
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

        .badge {
            font-size: 0.85rem !important;
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

    .badge {
        display: inline-block;
        background: rgba(255, 180, 100, 0.3);
        color: white;
        padding: 0.4em 0.8em;
        border-radius: 2em;
        font-size: 0.9rem;
        font-weight: bold;
        margin-bottom: 0.5em;
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

    p {
        font-size: 1.1em;
        line-height: 1.6;
    }

    .description {
        text-align: center;
        font-size: 1.2em;
        font-weight: 600;
    }

    .bodyText {
        text-align: center;
        font-size: 1.1em;
    }

    .birthdayText {
        text-align: center;
        font-size: 1.15em;
        font-weight: 600;
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

    .spotsTitle {
        font-size: 1.1em;
        font-weight: 700;
        margin: 0;
    }

    .spotsDesc {
        font-size: 1em;
        margin: 0;
        opacity: 0.9;
    }

    .registerMainBtn {
        padding: 0.8em 1.5em;
        font-size: 1.15em;
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

    .registerBox {
        background: rgba(255, 255, 255, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.15);
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        align-items: center;
    }

    .registerTitle {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .registerDesc {
        text-align: center;
        margin: 0;
        font-size: 1.05em;
        line-height: 1.6;
        max-width: 600px;
    }

    .registerButtons {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }

    .registerBtn {
        padding: 0.6em 1em;
        font-size: 0.95em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        display: inline-block;
        width: auto;
    }

    .meetup {
        background: #F64060;
        color: white;
    }

    .meetup:hover {
        background: #d63550;
        transform: scale(1.05);
    }

    .reddit {
        background: #FF4500;
        color: white;
    }

    .reddit:hover {
        background: #e03d00;
        transform: scale(1.05);
    }

    .luma {
        background: #8B5CF6;
        color: white;
    }

    .luma:hover {
        background: #7c3aed;
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
