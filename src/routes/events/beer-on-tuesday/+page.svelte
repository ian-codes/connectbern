<svelte:head>
	<title>Beer on Tuesday • Events • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Beer on Tuesday",
            mainText: "Triff dich jeden 3. Dienstag des Monats mit anderen Hackern und Infosec-Profis bei entspannten Drinks in verschiedenen Schweizer Städten! 🍺",
            callToAction: "Es ist kostenlos, ausser bei speziellen Events.",
            discordTitle: "💬 Tritt der Community bei",
            discordSteps: "Um auf dem Laufenden zu bleiben und dich zu vernetzen:",
            step1: "1️⃣ Tritt dem Discord-Server bei:",
            discordJoinLink: "https://discord.com/invite/Q3KXn5u",
            step2: "2️⃣ Nach dem Beitritt findest du den Bern-Kanal hier:",
            discordBernLink: "https://discord.com/channels/699612617429352448/1054316136692457524",
            registrationTitle: "📧 Anmeldung (Verpflichtend)",
            registrationInfo: "Um teilzunehmen, musst du dich im Voraus anmelden:",
            registrationEmail: "Sende eine E-Mail an bot-bern[@]defcon-switzerland[.]org um deinen Platz zu sichern!",
            registrationNote: "Die Voranmeldung ist obligatorisch, um die Anzahl der Teilnehmer zu gewährleisten.",
            websiteInfo: "Weitere Informationen über Beer on Tuesday und Events in anderen Städten:",
            websiteLink: "https://www.beerontuesday.ch/",
            date: "📅 Jeden 3. Dienstag des Monats",
            closing: "Wir freuen uns darauf, dich bei Bier und spannenden Gesprächen zu sehen! 🍻"
        },
        en: {
            title: "Beer on Tuesday",
            mainText: "Join fellow hackers and infosec professionals every 3rd Tuesday of the month for relaxed drinks in various Swiss cities! 🍺",
            callToAction: "It's free, except for special events.",
            discordTitle: "💬 Join the Community",
            discordSteps: "To stay updated and connect with others:",
            step1: "1️⃣ Join the Discord server:",
            discordJoinLink: "https://discord.com/invite/Q3KXn5u",
            step2: "2️⃣ After joining, you'll find the Bern channel here:",
            discordBernLink: "https://discord.com/channels/699612617429352448/1054316136692457524",
            registrationTitle: "📧 Registration (Mandatory)",
            registrationInfo: "To attend, you must pre-register:",
            registrationEmail: "Email bot-bern[@]defcon-switzerland[.]org to secure your spot!",
            registrationNote: "Pre-sign up is required to ensure proper headcount.",
            websiteInfo: "For more information about Beer on Tuesday and events in other cities:",
            websiteLink: "https://www.beerontuesday.ch/",
            date: "📅 Every 3rd Tuesday of the month",
            closing: "Looking forward to seeing you over beers and great conversations! 🍻"
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

            <p class="mainText">
                {content[lang].mainText}
            </p>

            <p class="callToAction">
                {content[lang].callToAction}
            </p>

            <div class="infoBox">
                <p class="date">{content[lang].date}</p>
            </div>

            <div class="discordBox">
                <h2 class="sectionTitle">{content[lang].discordTitle}</h2>
                <p class="steps">{content[lang].discordSteps}</p>

                <div class="step">
                    <p class="stepText">{content[lang].step1}</p>
                    <a href={content[lang].discordJoinLink} class="actionLink discordLink" target="_blank" rel="noopener noreferrer">
                        💬 Join Discord
                    </a>
                </div>

                <div class="step">
                    <p class="stepText">{content[lang].step2}</p>
                    <a href={content[lang].discordBernLink} class="actionLink bernChannelLink" target="_blank" rel="noopener noreferrer">
                        🏠 Bern Channel
                    </a>
                </div>
            </div>

            <div class="registrationBox">
                <h2 class="sectionTitle">{content[lang].registrationTitle}</h2>
                <p class="registrationInfo">{content[lang].registrationInfo}</p>

                <div class="emailBox">
                    <p class="emailText">{content[lang].registrationEmail}</p>
                </div>

                <p class="registrationNote">{content[lang].registrationNote}</p>
            </div>

            <div class="websiteBox">
                <p class="websiteInfo">{content[lang].websiteInfo}</p>
                <a href={content[lang].websiteLink} class="actionLink websiteLink" target="_blank" rel="noopener noreferrer">
                    🌐 beerontuesday.ch
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

        .discordBox, .registrationBox {
            padding: 1.5em;
        }

        .sectionTitle {
            font-size: 1.5em;
        }

        .actionLink {
            font-size: 1.1em;
            padding: 0.8em 1.5em;
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
        margin-bottom: 0.5rem;
        text-align: center;
    }

    p {
        font-size: 1.2em;
        line-height: 1.6;
    }

    .mainText {
        text-align: center;
        font-size: 1.4em;
        font-weight: bold;
    }

    .callToAction {
        text-align: center;
        font-size: 1.2em;
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

    .discordBox {
        background: rgba(114, 137, 218, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(114, 137, 218, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }

    .registrationBox {
        background: rgba(255, 100, 100, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(255, 100, 100, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }

    .websiteBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.15);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .sectionTitle {
        font-size: 1.8em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .steps {
        font-size: 1.2em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .step {
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .stepText {
        font-size: 1.15em;
        margin: 0;
        text-align: center;
    }

    .actionLink {
        font-size: 1.3em;
        font-weight: bold;
        color: white;
        text-decoration: none;
        padding: 1em 2em;
        border-radius: 0.8em;
        transition: all 0.2s ease;
        border: 2px solid rgba(255, 255, 255, 0.3);
        display: inline-block;
    }

    .discordLink {
        background: #5865F2;
    }

    .discordLink:hover {
        background: #4752C4;
        transform: scale(1.05);
    }

    .bernChannelLink {
        background: #7289DA;
    }

    .bernChannelLink:hover {
        background: #5B6EAE;
        transform: scale(1.05);
    }

    .websiteLink {
        background: #FF8C00;
    }

    .websiteLink:hover {
        background: #FF7700;
        transform: scale(1.05);
    }

    .registrationInfo {
        font-size: 1.2em;
        text-align: center;
        margin: 0;
    }

    .emailBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 0.8em;
        border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .emailText {
        font-size: 1.15em;
        font-weight: bold;
        margin: 0;
        text-align: center;
        font-family: monospace;
        color: #FFD700;
    }

    .registrationNote {
        font-size: 1.05em;
        text-align: center;
        margin: 0;
        font-style: italic;
    }

    .websiteInfo {
        font-size: 1.1em;
        margin: 0;
        text-align: center;
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
