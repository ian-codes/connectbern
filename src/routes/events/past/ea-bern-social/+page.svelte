<svelte:head>
	<title>EA Bern Social @ Pittaria • Events • Connect Bern</title>
	<meta name="description" content="Join us for our monthly EA Bern Social! A friendly, relaxed get-together for everyone interested in Effective Altruism." />
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Effective Altruism Bern: Social Event @ Pittaria",
            time: "⏰ 18:30–20:00",
            description: "Komm zu unserem monatlichen EA Bern Social! Dies ist ein freundliches, entspanntes Treffen für alle, die sich für Effective Altruism in und um Bern interessieren.",
            details: "Der Fokus unserer Socials ist einfach: die Möglichkeit haben, sich zu verbinden, zu plaudern und eine gute Zeit zusammen in einer einladenden Gemeinschaft zu verbringen. Ob du bereits mit EA vertraut bist oder einfach neugierig bist, mehr zu erfahren, bist du herzlich eingeladen vorbeizukommen, neue Leute kennenzulernen und am Gespräch teilzunehmen.",
            location: "📍 Pittaria, Falkenpl. 1, 3012 Bern",
            locationLink: "https://maps.app.goo.gl/stG2uArb4WVpi9mcA",
            viewMap: "Auf Karte ansehen",
            contactTitle: "💬 Bleib in Verbindung",
            contactDesc: "Tritt unserer WhatsApp-Gruppe bei für weitere Informationen und kurzfristige Kommunikation. Wenn du WhatsApp nicht nutzt, schreib uns gerne eine Email.",
            whatsappGroup: "https://chat.whatsapp.com/4sXufCJoqXJAWe0XI4Nq2p",
            whatsappGroupBtn: "WhatsApp-Gruppe beitreten",
            email: "hello@effectivealtruism.ch",
            emailBtn: "Email senden",
            learnMore: "Erfahre mehr über Effective Altruism",
            learnMoreLink: "https://www.effectivealtruism.org/",
            registerTitle: "📝 Anmeldung",
            registerDesc: "Melde dich auf Luma an, um eine Erinnerung zu erhalten und uns bei der Planung zu helfen!",
            registerBtn: "Auf Luma anmelden",
            lumaLink: "https://luma.com/ok4l74x4"
        },
        en: {
            title: "Effective Altruism Bern: Social Event @ Pittaria",
            time: "⏰ 6:30 PM – 8:00 PM",
            description: "Join us for our monthly EA Bern Social! This is a friendly, relaxed get-together for everyone interested in Effective Altruism in and around Bern.",
            details: "The focus of our socials is simple: having the chance to connect, chat, and spend a good time together in a welcoming community. Whether you're already familiar with EA or just curious to learn more, you're very warmly invited to come by, meet new people, and join the conversation.",
            location: "📍 Pittaria, Falkenpl. 1, 3012 Bern",
            locationLink: "https://maps.app.goo.gl/stG2uArb4WVpi9mcA",
            viewMap: "View on map",
            contactTitle: "💬 Stay Connected",
            contactDesc: "Join our WhatsApp group for further information and short-term communication. If you don't use WhatsApp, feel free to send us an email.",
            whatsappGroup: "https://chat.whatsapp.com/4sXufCJoqXJAWe0XI4Nq2p",
            whatsappGroupBtn: "Join WhatsApp Group",
            email: "hello@effectivealtruism.ch",
            emailBtn: "Send Email",
            learnMore: "Learn more about Effective Altruism",
            learnMoreLink: "https://www.effectivealtruism.org/",
            registerTitle: "📝 Registration",
            registerDesc: "Sign up on Luma to get a reminder and help us with planning!",
            registerBtn: "Register on Luma",
            lumaLink: "https://luma.com/ok4l74x4"
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

            <p class="time">{content[lang].time}</p>

            <p class="description">
                {content[lang].description}
            </p>

            <p class="details">
                {content[lang].details}
            </p>

            <div class="locationBox">
                <div class="locationRow">
                    <p class="location">{content[lang].location}</p>
                    <a href={content[lang].locationLink} class="btn mapBtn" target="_blank" rel="noopener noreferrer">
                        📍 {content[lang].viewMap}
                    </a>
                </div>
            </div>

            <div class="contactBox">
                <h3>{content[lang].contactTitle}</h3>
                <p class="contactIntro">{content[lang].contactDesc}</p>
                <div class="contactButtons">
                    <a href={content[lang].whatsappGroup} class="contactBtn whatsapp" target="_blank" rel="noopener noreferrer">
                        💬 {content[lang].whatsappGroupBtn}
                    </a>
                    <a href="mailto:{content[lang].email}" class="contactBtn email">
                        📧 {content[lang].emailBtn}
                    </a>
                </div>
            </div>

            <div class="whatsappBox">
                <a href={content[lang].learnMoreLink} class="btn learnMoreBtn" target="_blank" rel="noopener noreferrer">
                    {content[lang].learnMore} →
                </a>
            </div>

            <div class="registerBox">
                <h2 class="registerTitle">{content[lang].registerTitle}</h2>
                <p class="registerDesc">{content[lang].registerDesc}</p>
                <a href={content[lang].lumaLink} class="btn lumaBtn" target="_blank" rel="noopener noreferrer">
                    {content[lang].registerBtn} →
                </a>
            </div>
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

        .contactButtons {
            flex-direction: column;
            width: 100%;
        }

        .contactBtn {
            width: 100%;
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

    h2 {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    p {
        font-size: 1.2em;
        line-height: 1.6;
    }

    .time {
        text-align: center;
        font-size: 1.3em;
        margin: 0;
    }

    .description {
        text-align: center;
        font-size: 1.3em;
    }

    .details {
        text-align: center;
        font-size: 1.2em;
        background: rgba(100, 200, 255, 0.1);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(100, 200, 255, 0.3);
    }

    .locationBox {
        background: rgba(76, 175, 80, 0.1);
        padding: 1.5em;
        border-radius: 1em;
        border: 2px solid rgba(76, 175, 80, 0.3);
    }

    .locationRow {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
        flex-wrap: wrap;
    }

    .location {
        font-size: 1.3em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .mapBtn {
        display: inline-block;
        width: fit-content;
        padding: 0.3em 0.6em;
        font-size: 1.1em;
        text-decoration: none;
        border-radius: 0.5em;
        font-weight: bold;
        transition: all 0.2s ease;
        background: rgba(76, 175, 80, 0.3);
        color: white;
        border: 2px solid rgba(76, 175, 80, 0.5);
    }

    .mapBtn:hover {
        background: rgba(76, 175, 80, 0.5);
        transform: scale(1.05);
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

    .contactBox h3 {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .contactIntro {
        text-align: center;
        margin: 0;
        font-size: 1.1em;
        line-height: 1.6;
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
    }

    .whatsapp {
        background: #25D366;
        color: white;
    }

    .whatsapp:hover {
        background: #1fb855;
        transform: scale(1.05);
    }

    .email {
        background: #EA4335;
        color: white;
    }

    .email:hover {
        background: #d33426;
        transform: scale(1.05);
    }

    .whatsappBox {
        background: rgba(37, 211, 102, 0.1);
        padding: 1.5em;
        border-radius: 1em;
        border: 2px solid rgba(37, 211, 102, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .learnMoreBtn {
        display: inline-block;
        width: fit-content;
        padding: 0.6em 1.2em;
        font-size: 1.1em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        background: rgba(37, 211, 102, 0.3);
        color: white;
        border: 2px solid rgba(37, 211, 102, 0.5);
    }

    .learnMoreBtn:hover {
        background: rgba(37, 211, 102, 0.5);
        transform: scale(1.05);
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

    .lumaBtn {
        display: inline-block;
        width: fit-content;
        padding: 0.8em 1.5em;
        font-size: 1.1em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        background: rgba(100, 200, 255, 0.3);
        color: white;
        border: 2px solid rgba(100, 200, 255, 0.5);
    }

    .lumaBtn:hover {
        background: rgba(100, 200, 255, 0.5);
        transform: scale(1.05);
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
