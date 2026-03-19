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
            time: "Ab 18:00 Uhr",
            description: "Wir feiern den Start von etwas Neuem, unserem Community-Projekt Connect Bern. Und alle sind eingeladen!",
            p1intro: "Was als Idee begann, ist jetzt ein echtes Projekt:",
            p1items: ["Ein gemeinsamer Raum", { text: "Regelmässige Events", link: "/events" }, "Eine wachsende Community", "Unsere neuen Mitbewohnerinnen Isabel und Manon"],
            p1app: "Eine brandneue App für Web, Android und iPhone, danke Samir 🙏",
            p1outro: "Mit allem, was gerade passiert, fühlte sich dieser Moment einfach perfekt an, um die Türen zu öffnen, alte und neue Freunde willkommen zu heissen und den Beginn dieses neuen Kapitels zu feiern.",
            p2: "Komm vorbei, triff die Menschen hinter dem Projekt, sieh dir den Raum an, vernetze dich mit anderen und geniesse einen entspannten Abend zusammen.",
            p3: "Und ja, wir feiern auch Chagais Geburtstag 🎉",
            onlineTitle: "Feier mit uns, auch online!",
            onlineDesc1: "Die Party findet auch auf unserer digitalen Karte statt, und wir erwarten viele Leute dort. Du kannst live sehen, wie die Party läuft, Leute kennenlernen und einfach dabei sein.",
            onlineDesc2: "Egal ob alle Plätze vergeben sind, du nicht in Bern bist oder einfach nicht persönlich kommen kannst: wir würden uns freuen, dich zumindest kurz zu sehen, einfach um Hallo zu sagen. 👋",
            onlineBtn: "Zur digitalen Karte",
            spotsTitle: "👉 Melde dich an, begrenzte Plätze!",
            spotsDesc: "Bitte registriere dich auf unserer App um teilzunehmen. Wir müssen Anmeldungen genehmigen, da wir begrenzte Plätze haben.",
            registerBtn: "Jetzt anmelden",
            helpTitle: "📢 Lass uns mehr Leute erreichen!",
            helpDesc: "Wir haben das Event auf diesen Plattformen registriert. Wenn du ein Konto hast (oder einfach eines erstellst), registriere dich auch dort. Der Algorithmus mag es, wenn etwas passiert, und es hilft uns, mehr Menschen zu erreichen! 🚀",
            meetupLink: "Meetup",
            redditLink: "Reddit",
            lumaLink: "Luma",
            closing: "Wir freuen uns darauf, dich kennenzulernen! 🌍✨"
        },
        en: {
            title: "Connect Bern Welcome Party",
            date: "Tuesday, March 24, 2026",
            time: "6 p.m. and onwards",
            description: "We are celebrating the start of something new, our community project Connect Bern. And everyone is invited!",
            p1intro: "What began as an idea is now a real project:",
            p1items: ["A shared space", { text: "Regular events", link: "/events" }, "A growing community", "Our new roommates Isabel and Manon"],
            p1app: "A brand new app on web, Android and iPhone, thank you Samir 🙏🥰",
            p1outro: "With all of that coming together, we thought there's no better moment to open the doors, welcome friends old and new, and celebrate the beginning of this next chapter.",
            p2: "Come by, meet the people behind the project, see the space, connect with others, and enjoy a relaxed evening together.",
            p3: "And yes, we will also be celebrating Chagai's birthday along the way 🎉",
            onlineTitle: "Celebrate with us, online too!",
            onlineDesc1: "The party is also happening on our digital map, and we're expecting a lot of people there. You can see the party live, meet people, and just be part of it all.",
            onlineDesc2: "Whether the spots are all taken, you're not in Bern, or you just can't make it in person: we'd love to see you even for a few minutes, just to say hi. 👋",
            onlineBtn: "Go to Digital Map",
            spotsTitle: "👉 Register now, limited spots!",
            spotsDesc: "Please register on our app to join. We approve registrations as we have limited spots.",
            registerBtn: "Register now",
            helpTitle: "📢 Let's reach more people!",
            helpDesc: "We've registered the event on these platforms. If you have an account (or just create one), please also register there. The algorithm likes it when something is happening, and it helps us reach more people! 🚀",
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

            <img src="/images/connect-bern-welcome-party.png" alt="Connect Bern Welcome Party" class="eventImage" />

            <div class="dateTimeBox">
                <p class="date">📅 {content[lang].date}</p>
                <p class="time">⏰ {content[lang].time}</p>
                <p class="location">📍 Connect Bern Space</p>
            </div>

            <p class="description">
                {content[lang].description}
            </p>

            <div class="p1Block">
                <p class="bodyText">{content[lang].p1intro}</p>
                <ul class="p1List">
                    {#each content[lang].p1items as item}
                        <li><span>{typeof item === 'string' ? item : item.text}{#if typeof item !== 'string'}&nbsp;&nbsp;<a href={item.link} class="appLink">↗</a>{/if}</span></li>
                    {/each}
                    <li><span>{content[lang].p1app}&nbsp;&nbsp;<a href="https://app.connectbern.ch" class="appLink" target="_blank" rel="noopener noreferrer">↗</a></span></li>
                </ul>
                <p class="bodyText">{content[lang].p1outro}</p>
            </div>

            <p class="bodyText">{content[lang].p2}</p>

            <p class="birthdayText">{content[lang].p3}</p>

            <div class="onlineBox">
                <span class="onlineEmoji">💻🎉👥</span>
                <p class="onlineTitle">{content[lang].onlineTitle}</p>
                <p class="onlineDesc">{content[lang].onlineDesc1}</p>
                <p class="onlineDesc onlineDesc2">{content[lang].onlineDesc2}</p>
                <a href="/map" class="btn onlineBtn">
                    🗺️ {content[lang].onlineBtn}
                </a>
            </div>

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
                    <a href="https://www.reddit.com/r/bern/comments/1rxvlsr/connect_bern_welcome_party" class="btn registerBtn reddit" target="_blank" rel="noopener noreferrer">
                        🔴 {content[lang].redditLink}
                    </a>
                    <a href="https://luma.com/1704htc0" class="btn registerBtn luma" target="_blank" rel="noopener noreferrer">
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

    .p1Block {
        display: flex;
        flex-direction: column;
        gap: 0.8em;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1em;
        padding: 1.5em 2em;
    }

    .p1List {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .p1List li {
        display: flex;
        align-items: center;
        gap: 0.65em;
        font-size: 1.05em;
        line-height: 1.5;
    }

    .appLink {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.4em;
        height: 1.4em;
        font-size: 0.8em;
        border-radius: 0.4em;
        border: 1px solid rgba(255, 180, 100, 0.5);
        background: rgba(255, 180, 100, 0.15);
        color: rgba(255, 180, 100, 0.9);
        text-decoration: none;
        vertical-align: middle;
        margin-left: 0.3em;
        transition: background 0.15s ease, transform 0.15s ease;
        line-height: 1;
    }

    .appLink:hover {
        background: rgba(255, 180, 100, 0.3);
        transform: scale(1.1);
    }

    .p1List li::before {
        content: "✦";
        color: rgba(255, 180, 100, 0.9);
        font-size: 0.75em;
        flex-shrink: 0;
    }

    .birthdayText {
        text-align: center;
        font-size: 1.15em;
        font-weight: 600;
    }

    .eventImage {
        width: 100%;
        border-radius: 1em;
        object-fit: cover;
    }

    .onlineBox {
        background: linear-gradient(135deg, rgba(80, 160, 255, 0.12), rgba(120, 80, 255, 0.12));
        padding: 2em;
        border-radius: 1.2em;
        border: 1px solid rgba(100, 180, 255, 0.35);
        box-shadow: 0 4px 20px rgba(80, 160, 255, 0.1);
        display: flex;
        flex-direction: column;
        gap: 0.9em;
        align-items: center;
        text-align: center;
    }

    .onlineEmoji {
        font-size: 2.2em;
        line-height: 1;
    }

    .onlineTitle {
        font-size: 1.35em;
        font-weight: 800;
        margin: 0;
        letter-spacing: -0.01em;
    }

    .onlineDesc {
        font-size: 1em;
        margin: 0;
        opacity: 0.92;
        max-width: 520px;
        line-height: 1.6;
    }

    .onlineDesc2 {
        font-style: italic;
        opacity: 0.85;
    }

    .onlineBtn {
        padding: 0.65em 1.4em;
        font-size: 1em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid rgba(100, 180, 255, 0.6);
        background: rgba(100, 180, 255, 0.22);
        color: white;
        display: inline-block;
        width: auto;
        margin-top: 0.3em;
    }

    .onlineBtn:hover {
        background: rgba(100, 180, 255, 0.38);
        transform: scale(1.04);
        box-shadow: 0 4px 14px rgba(80, 160, 255, 0.3);
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
