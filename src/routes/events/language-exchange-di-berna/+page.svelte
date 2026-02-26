<svelte:head>
	<title>Language Exchange di Berna • Events • Connect Bern</title>
	<meta name="description" content="Join us every Tuesday for Language Exchange di Berna. Practice languages, meet people from all over the world, and make new friends at Connect Bern." />

	<!-- Open Graph -->
	<meta property="og:url" content="https://connectbern.ch/events/language-exchange-di-berna" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Language Exchange di Berna • Connect Bern" />
	<meta property="og:description" content="Join us every Tuesday for Language Exchange di Berna. Practice languages, meet people from all over the world, and make new friends." />
	<meta property="og:image" content="https://connectbern.ch/images/language-exchange.jpeg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="connectbern.ch" />
	<meta property="twitter:url" content="https://connectbern.ch/events/language-exchange-di-berna" />
	<meta name="twitter:title" content="Language Exchange di Berna • Connect Bern" />
	<meta name="twitter:description" content="Join us every Tuesday for Language Exchange di Berna. Practice languages, meet people from all over the world, and make new friends." />
	<meta name="twitter:image" content="https://connectbern.ch/images/language-exchange.jpeg" />
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    // Update this each week!
    const organizerOfTheWeek = "Alessia";

    const content = {
        de: {
            title: "Language Exchange di Berna",
            subtitle: "Jeden Dienstag um 19:00 Uhr",
            description: "Triff Leute aus aller Welt, übe Sprachen und knüpfe echte Verbindungen. Jeden Dienstag im Connect Bern Space. Ob du Deutsch, Englisch, Französisch, Spanisch oder eine andere Sprache üben möchtest, du bist herzlich willkommen!",
            schedule: "📅 Jeden Dienstag um 19:00 Uhr",
            location: "📍 Connect Bern Space",
            organizerLabel: "Organisatorin dieser Woche",
            organizerSub: "Sie führt euch durch den Abend 🌟",
            languagesLabel: "Gesprochene Sprachen",
            instructions: "Schreib uns auf WhatsApp, um die Adresse zu erhalten und uns mitzuteilen, dass du kommst!",
            phone: "+41783166727",
            whatsappMessage: "Hallo! Ich möchte zum Language Exchange di Berna kommen 🌍",
            registerTitle: "📢 Lass uns mehr Leute erreichen!",
            registerDesc: "Wir haben das Event auf diesen Plattformen. Wenn du ein Konto hast, registriere dich auch dort. Der Algorithmus mag es, wenn etwas passiert, und es hilft uns, mehr Menschen zu erreichen! 🚀",
            meetupLink: "Meetup",
            instagramLink: "Instagram",
            groupTitle: "💬 Tritt unserer Language Exchange Gruppe bei!",
            groupDesc: "Bleib auf dem Laufenden, stell dich vor und vernetze dich mit anderen in unserer WhatsApp Gruppe.",
            groupBtn: "Zur Gruppe",
            closing: "Wir freuen uns darauf, dich kennenzulernen! 🌍✨"
        },
        en: {
            title: "Language Exchange di Berna",
            subtitle: "Every Tuesday at 7:00 PM",
            description: "Meet people from all over the world, practice languages, and make genuine connections. Every Tuesday at the Connect Bern Space. Whether you want to practice German, English, French, Spanish, or any other language, you're warmly welcome!",
            schedule: "📅 Every Tuesday at 7:00 PM",
            location: "📍 Connect Bern Space",
            organizerLabel: "Organizer of the Week",
            organizerSub: "Leading the evening for you 🌟",
            languagesLabel: "Languages spoken",
            instructions: "Write us on WhatsApp to get the address and let us know you're coming!",
            phone: "+41783166727",
            whatsappMessage: "Hi! I'd like to join the Language Exchange di Berna 🌍",
            registerTitle: "📢 Let's reach more people!",
            registerDesc: "We've registered the event on these platforms. If you have an account, please also register there. The algorithm likes it when something is happening, and it helps us reach more people! 🚀",
            meetupLink: "Meetup",
            instagramLink: "Instagram",
            groupTitle: "💬 Join our Language Exchange Group!",
            groupDesc: "Stay in the loop, introduce yourself, and connect with others in our WhatsApp group.",
            groupBtn: "Go to Group",
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
            <h1>{content[lang].title} 🌍</h1>
            <p class="subtitle">{content[lang].subtitle}</p>

            <div class="imageContainer">
                <img src="/images/language-exchange.jpeg" alt="Language Exchange di Berna" class="eventImage" />
            </div>

            <p class="description">
                {content[lang].description}
            </p>

            <div class="infoBox">
                <p class="schedule">{content[lang].schedule}</p>
                <p class="location">{content[lang].location}</p>
            </div>

            <div class="organizerBox">
                <div class="organizerStars">⭐ ⭐ ⭐</div>
                <p class="organizerLabel">{content[lang].organizerLabel}</p>
                <p class="organizerName">{organizerOfTheWeek}</p>
                <p class="organizerSub">{content[lang].organizerSub}</p>
                <div class="languageFlags">
                    🇩🇪 🇬🇧 🇫🇷 🇪🇸 🇮🇹 🇵🇹 🌍
                </div>
            </div>

            <div class="contactBox">
                <p class="instructions">{content[lang].instructions}</p>
                <div class="contactButtons">
                    <a href="https://wa.me/{content[lang].phone.replace(/[^0-9]/g, '')}?text={encodeURIComponent(content[lang].whatsappMessage)}" class="btn contactBtn whatsapp" target="_blank" rel="noopener noreferrer">
                        💬 WhatsApp
                    </a>
                </div>
            </div>

            <div class="registerBox">
                <h2 class="registerTitle">{content[lang].registerTitle}</h2>
                <p class="registerDesc">{content[lang].registerDesc}</p>
                <div class="registerButtons">
                    <a href="https://www.meetup.com/meetup-bern/events/313224913/" class="btn registerBtn meetup" target="_blank" rel="noopener noreferrer">
                        👥 {content[lang].meetupLink}
                    </a>
                    <a href="https://www.instagram.com/language_exchange_di_berna" class="btn registerBtn instagram" target="_blank" rel="noopener noreferrer">
                        📸 {content[lang].instagramLink}
                    </a>
                </div>
            </div>

            <div class="groupBox">
                <h2 class="groupTitle">{content[lang].groupTitle}</h2>
                <p class="groupDesc">{content[lang].groupDesc}</p>
                <a href="/groups/language-exchange" class="btn groupBtn">
                    🌐 {content[lang].groupBtn}
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
        margin: 0;
    }

    p {
        font-size: 1.2em;
        line-height: 1.6;
    }

    .subtitle {
        text-align: center;
        font-size: 1.2em;
        font-style: italic;
        opacity: 0.85;
        margin-top: -0.5em;
    }

    .imageContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1em 0;
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
        transform: scale(1.02);
    }

    .description {
        text-align: center;
        font-size: 1.3em;
    }

    .infoBox {
        background: rgba(76, 175, 80, 0.1);
        padding: 1.5em;
        border-radius: 1em;
        border: 2px solid rgba(76, 175, 80, 0.3);
        text-align: center;
    }

    .schedule, .location {
        font-size: 1.3em;
        font-weight: bold;
        margin: 0.3em 0;
    }

    /* Organizer of the Week */
    .organizerBox {
        background: linear-gradient(135deg, rgba(255, 200, 50, 0.14), rgba(255, 130, 30, 0.08));
        padding: 2.2em 2em;
        border-radius: 1em;
        border: 2px solid rgba(255, 200, 50, 0.45);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5em;
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 24px rgba(255, 200, 50, 0.08);
    }

    .organizerStars {
        font-size: 1.1em;
        letter-spacing: 0.3em;
        opacity: 0.6;
    }

    .organizerLabel {
        font-size: 0.85em;
        text-transform: uppercase;
        letter-spacing: 0.18em;
        opacity: 0.65;
        margin: 0;
        font-weight: 700;
    }

    .organizerName {
        font-size: 2.8em;
        font-weight: bold;
        margin: 0.1em 0;
        color: rgba(255, 215, 80, 1);
        text-shadow: 0 0 30px rgba(255, 200, 50, 0.4);
        letter-spacing: 0.04em;
    }

    .organizerSub {
        font-size: 1em;
        margin: 0;
        opacity: 0.75;
        font-style: italic;
    }

    .languageFlags {
        margin-top: 0.6em;
        font-size: 1.6em;
        letter-spacing: 0.1em;
    }

    .contactBox {
        background: rgba(255, 255, 255, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.15);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .instructions {
        text-align: center;
        margin: 0;
    }

    .contactButtons {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        justify-content: center;
    }

    .contactBtn {
        padding: 0.7em 1.4em;
        font-size: 1.05em;
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

    .instagram {
        background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
        color: white;
    }

    .instagram:hover {
        filter: brightness(1.1);
        transform: scale(1.05);
    }

    .groupBox {
        background: rgba(255, 220, 100, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(255, 220, 100, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .groupTitle {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .groupDesc {
        text-align: center;
        margin: 0;
        font-size: 1.1em;
    }

    .groupBtn {
        padding: 0.7em 1.3em;
        font-size: 1.05em;
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

    .groupBtn:hover {
        background: #059669;
        transform: scale(1.05);
    }

    .closing {
        text-align: center;
        font-size: 1.3em;
        font-weight: bold;
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
