<svelte:head>
	<title>Speed Friending #2 • Events • Connect Bern</title>
	<meta name="description" content="Speed Friending #2 - Real conversations, not small talk. Bern is full of interesting people. Come find yours." />

	<!-- Open Graph -->
	<meta property="og:url" content="https://connectbern.ch/events/speed-friending-2" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Speed Friending #2 • Connect Bern" />
	<meta property="og:description" content="Real conversations, not small talk. Bern is full of interesting people. Come find yours." />
	<meta property="og:image" content="https://connectbern.ch/images/speed-friending.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="connectbern.ch" />
	<meta property="twitter:url" content="https://connectbern.ch/events/speed-friending-2" />
	<meta name="twitter:title" content="Speed Friending #2 • Connect Bern" />
	<meta name="twitter:description" content="Real conversations, not small talk. Bern is full of interesting people. Come find yours." />
	<meta name="twitter:image" content="https://connectbern.ch/images/speed-friending.jpg" />
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Speed Friending #2",
            subtitle: "Es geht weiter! 🥳",
            date: "Donnerstag, 26. März 2026",
            time: "18:00 Uhr",
            location: "Connect Bern Space, Gutenbergstrasse 27, 3011 Bern",
            description: "Ihr seid gekommen. Ihr habt euch verbunden. Ihr habt es wahr gemacht. Unser erstes Speed-Friending-Event hat uns überwältigt – der Raum summte vor Energie, Gespräche wurden tief, und viele sind mit neuen Freundschaften nach Hause gegangen. Mit so viel Magie gleich beim ersten Mal haben wir nicht gerechnet. Also machen wir's nochmal. 💛",
            subtitle2: "Speed Friending #2 kommt – und die Plätze sind schon am Schwinden.",
            vibe: "Gleiche Energie: kein zäher Smalltalk, kein \"und was machst du so?\" – nur echte Gespräche rund um das, was dich wirklich bewegt. Bern steckt voller interessanter Menschen. Komm und find deine.",
            deposit: "10 CHF rückerstattbare Kaution um deinen Platz zu sichern (oder spende sie für zukünftige Events).",
            limitedSpots: "👉 Jetzt deinen Platz sichern – begrenzte Plätze.",
            registerBtn: "Jetzt anmelden",
            questionsTitle: "Fragen?",
            questionsDesc: "Schreib uns auf WhatsApp:",
            whatsappMessage: "Hi, ich habe eine Frage zum Speed Friending #2 Event!",
            phone: "+41783166727",
            helpTitle: "📢 Hilf uns, mehr Leute zu erreichen!",
            helpDesc: "Wir haben das Event auf diesen Plattformen registriert. Wenn du ein Konto hast, registriere dich auch dort – der Algorithmus mag es, wenn etwas passiert, und es hilft uns, mehr Menschen zu erreichen! 🚀",
            meetupLink: "Meetup",
            facebookLink: "Facebook",
            lumaLink: "Luma",
            redditLink: "Reddit",
            closing: "Wir freuen uns auf dich!"
        },
        en: {
            title: "Speed Friending #2",
            subtitle: "We're doing it again! 🥳",
            date: "Thursday, March 26, 2026",
            time: "6:00 PM",
            location: "Connect Bern Space, Gutenbergstrasse 27, 3011 Bern",
            description: "You showed up. You connected. You made it real. Our first Speed Friending event blew us away – the room buzzed, conversations ran deep, and people left with new friends (and full hearts). We did not expect that much magic on night one. So we are doing it again. 💛",
            subtitle2: "Speed Friending #2 is happening – and spots are already going fast.",
            vibe: "Same vibe: no awkward small talk, no \"so what do you do?\" – just real conversations matched to what you actually care about. Bern is full of interesting people. Come find yours.",
            deposit: "10 CHF refundable deposit to secure your spot (or donate it to support future events).",
            limitedSpots: "👉 Secure your spot now – limited places.",
            registerBtn: "Register now",
            questionsTitle: "Questions?",
            questionsDesc: "Write us on WhatsApp:",
            whatsappMessage: "Hi, I have a question about the Speed Friending #2 event!",
            phone: "+41783166727",
            helpTitle: "📢 Help us reach more people!",
            helpDesc: "We've registered the event on these platforms. If you have an account, please also register there – the algorithm likes it when something is happening, and it helps us reach more people! 🚀",
            meetupLink: "Meetup",
            facebookLink: "Facebook",
            lumaLink: "Luma",
            redditLink: "Reddit",
            closing: "We look forward to seeing you!"
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
                <span class="coolBadge">{content[lang].subtitle}</span>
                <h1>{content[lang].title} 🌟⚡</h1>
            </div>

            <div class="dateTimeBox">
                <p class="date">{content[lang].date}</p>
                <p class="time">{content[lang].time}</p>
                <p class="location">{content[lang].location}</p>
            </div>

            <div class="imageContainer">
                <img src="/images/speed-friending-pic.jpeg" alt="Speed Friending" class="eventImage" />
            </div>

            <p class="description">
                {content[lang].description}
            </p>

            <p class="subtitle2">
                <strong>{content[lang].subtitle2}</strong>
            </p>

            <p class="vibe">
                {content[lang].vibe}
            </p>

            <div class="registrationBox">
                <p class="limitedSpots">{content[lang].limitedSpots}</p>
                <a href="https://app.connectbern.ch/events/speed-friending-2" class="btn registerMainBtn" target="_blank" rel="noopener noreferrer">
                    ✨ {content[lang].registerBtn}
                </a>
                <p class="deposit">{content[lang].deposit}</p>
            </div>

            <div class="questionsBox">
                <h3>{content[lang].questionsTitle}</h3>
                <p>{content[lang].questionsDesc}</p>
                <a href="https://wa.me/{content[lang].phone.replace(/[^0-9]/g, '')}?text={encodeURIComponent(content[lang].whatsappMessage)}" class="btn whatsappBtn" target="_blank" rel="noopener noreferrer">
                    💬 WhatsApp
                </a>
            </div>

            <div class="registerBox">
                <h2 class="registerTitle">{content[lang].helpTitle}</h2>
                <p class="registerDesc">{content[lang].helpDesc}</p>
                <div class="registerButtons">
                    <a href="https://www.meetup.com/meetup-bern/events/313726284" class="btn registerBtn meetup" target="_blank" rel="noopener noreferrer">
                        👥 {content[lang].meetupLink}
                    </a>
                    <a href="https://www.facebook.com/events/2669268310106099" class="btn registerBtn facebook" target="_blank" rel="noopener noreferrer">
                        📘 {content[lang].facebookLink}
                    </a>
                    <a href="https://luma.com/hohk6luw" class="btn registerBtn luma" target="_blank" rel="noopener noreferrer">
                        🗓️ {content[lang].lumaLink}
                    </a>
                    <a href="https://www.reddit.com/r/bern/comments/1rxw4fo/we_ran_a_speed_friending_event_in_bern_last_month/" class="btn registerBtn reddit" target="_blank" rel="noopener noreferrer">
                        🔴 {content[lang].redditLink}
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

        .coolBadge {
            font-size: 0.9rem !important;
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

    .coolBadge {
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

    .imageContainer {
        display: flex;
        justify-content: center;
    }

    .eventImage {
        width: 100%;
        max-width: 600px;
        height: auto;
        border-radius: 1em;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        object-fit: cover;
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
        font-size: 1.15em;
    }

    .subtitle2 {
        text-align: center;
        font-size: 1.1em;
        margin: -0.5em 0;
    }

    .vibe {
        text-align: center;
        font-size: 1.1em;
    }

    .registrationBox {
        background: rgba(255, 255, 255, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.15);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
        text-align: center;
    }

    .limitedSpots {
        font-size: 1.1em;
        font-weight: 600;
        margin: 0;
    }

    .registerMainBtn {
        padding: 0.8em 1.5em;
        font-size: 1.15em;
        text-decoration: none;
        border-radius: 0.5em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid rgba(255, 255, 255, 0.3);
        background: rgba(255, 180, 100, 0.3);
        color: white;
        display: inline-block;
        width: auto;
    }

    .registerMainBtn:hover {
        transform: scale(1.03);
        background: rgba(255, 180, 100, 0.4);
    }

    .deposit {
        font-size: 0.95em;
        margin: 0;
        opacity: 0.85;
    }

    .questionsBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
    }

    .questionsBox h3 {
        font-size: 1.2em;
        margin: 0 0 0.5em;
    }

    .questionsBox p {
        margin: 0 0 1em;
        font-size: 1em;
    }

    .whatsappBtn {
        padding: 0.5em 1em;
        font-size: 0.95em;
        text-decoration: none;
        border-radius: 0.5em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        background: #25D366;
        color: white;
        display: inline-block;
        width: auto;
    }

    .whatsappBtn:hover {
        background: #1fb855;
        transform: scale(1.03);
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

    .facebook {
        background: #1877F2;
        color: white;
    }

    .facebook:hover {
        background: #0d65d9;
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

    .reddit {
        background: #FF4500;
        color: white;
    }

    .reddit:hover {
        background: #e03d00;
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
