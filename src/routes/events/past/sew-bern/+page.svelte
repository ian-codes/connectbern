<svelte:head>
	<title>Sew Bern: Beginner Mending Group • Events • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Sew Bern: Beginner Mending Group",
            subtitle: "Komm nähen mit uns! ✂️🧵",
            description: "Hast du Kleidung, die geflickt werden muss? Brauchst du etwas gesäumt? Komm mit uns nähen im Connect Bern Space!",
            forBeginners: "Wenn du neu im Nähen bist und Hilfe beim Einstieg brauchst, können wir dir beim Einfädeln einer Nadel helfen, Ratschläge geben und ein paar grundlegende Stiche zeigen. Grundlegendes Nähzubehör steht zur Verfügung.",
            forPros: "Wenn du ein Näh-Profi bist, bring gerne ein bestehendes Projekt mit. Stricken, Häkeln oder andere Handarbeiten sind ebenfalls willkommen.",
            date: "📅 Mittwoch, 28. Januar 2026",
            time: "🕕 18:30–20:30",
            location: "📍 Connect Bern Space, Monbijou",
            locationNote: "Bist du zum ersten Mal hier? Kontaktiere uns für die Adresse!",
            registrationTitle: "📝 Kontakt",
            registrationDesc: "Für weitere Informationen wende dich bitte an April:",
            contactName: "April",
            phone: "+1 (331) 213-1557",
            email: "apriljoywelch@gmail.com",
            whatsappMessage: "Hallo April, ich möchte gerne zum Sew Bern am Mittwoch, 28. Januar kommen!",
            platformTitle: "📢 Lass uns mehr Leute erreichen!",
            platformDesc: "Wir haben das Event auf diesen Plattformen registriert. Wenn du ein Konto hast, registriere dich auch dort – der Algorithmus mag es, wenn etwas passiert, und es hilft uns, mehr Menschen zu erreichen! 🚀",
            ronorpLink: "Ronorp",
            facebookLink: "Facebook",
            redditLink: "Reddit",
            spontactsLink: "Spontacts",
            meetupLink: "Meetup",
            flyerTitle: "📸 Flyer herunterladen",
            flyerDesc: "Möchtest du das Event auf deinem Instagram oder Social Media teilen? Lade unseren Flyer herunter!",
            closingText: "Wir freuen uns darauf, mit dir zu nähen! 🧵"
        },
        en: {
            title: "Sew Bern: Beginner Mending Group",
            subtitle: "Come sew with us! ✂️🧵",
            description: "Do you have clothes that need to be mended? Do you need something hemmed? Come sew with us at the Connect Bern Space!",
            forBeginners: "If you are new to sewing and want help getting started, we can help with threading a needle, provide advice, and demonstrate a few basic stitches. Basic sewing supplies are available for use.",
            forPros: "If you are a sewing pro, feel free to bring an existing project. Knitting, crocheting, or other arts are also welcome.",
            date: "📅 Wednesday, January 28, 2026",
            time: "🕕 18:30–20:30",
            location: "📍 Connect Bern Space, Monbijou",
            locationNote: "First time here? Contact us for the address!",
            registrationTitle: "📝 Contact",
            registrationDesc: "For more information, please reach out to April:",
            contactName: "April",
            phone: "+1 (331) 213-1557",
            email: "apriljoywelch@gmail.com",
            whatsappMessage: "Hi April, I would like to come to Sew Bern on Wednesday, January 28th!",
            platformTitle: "📢 Let's reach more people!",
            platformDesc: "We've registered the event on these platforms. If you have an account, please also register there – the algorithm likes it when something is happening, and it helps us reach more people! 🚀",
            ronorpLink: "Ronorp",
            facebookLink: "Facebook",
            redditLink: "Reddit",
            spontactsLink: "Spontacts",
            meetupLink: "Meetup",
            flyerTitle: "📸 Download Flyer",
            flyerDesc: "Want to share the event on your Instagram or social media? Download our flyer!",
            closingText: "We look forward to sewing with you! 🧵"
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
                <img src="/images/sew-bern.jpeg" alt="Sew Bern" class="eventImage" />
            </div>

            <div class="infoBox">
                <p class="date">{content[lang].date}</p>
                <p class="eventDetail">{content[lang].time}</p>
                <p class="eventDetail">{content[lang].location}</p>
                <p class="locationNote">{content[lang].locationNote}</p>
            </div>

            <div class="beginnersBox">
                <h2>👋 {lang === 'de' ? 'Für Anfänger:innen' : 'For Beginners'}</h2>
                <p>{content[lang].forBeginners}</p>
            </div>

            <div class="prosBox">
                <h2>✨ {lang === 'de' ? 'Für Erfahrene' : 'For Experienced Sewers'}</h2>
                <p>{content[lang].forPros}</p>
            </div>

            <div class="contactBox">
                <h2 class="registrationTitle">{content[lang].registrationTitle}</h2>
                <p class="registrationDesc">{content[lang].registrationDesc}</p>

                <div class="contactInfo">
                    <p class="contactName">{content[lang].contactName}</p>
                    <a href="tel:{content[lang].phone}" class="phoneLink">
                        {content[lang].phone}
                    </a>
                    <div class="contactButtons">
                        <a
                            href="https://wa.me/{content[lang].phone.replace(/[^0-9]/g, '')}?text={encodeURIComponent(content[lang].whatsappMessage)}"
                            class="contactBtn whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            💬 WhatsApp
                        </a>
                        <a
                            href="mailto:{content[lang].email}"
                            class="contactBtn email"
                        >
                            📧 Email
                        </a>
                    </div>
                </div>
            </div>

            <div class="registerBox">
                <h2 class="registerTitle">{content[lang].platformTitle}</h2>
                <p class="registerDesc">{content[lang].platformDesc}</p>
                <div class="registerButtons">
                    <a href="https://ronorp.net/bern/market/boost-post/sew-bern-anfanger-gruppe-furs-flicken" class="btn registerBtn ronorp" target="_blank" rel="noopener noreferrer">
                        🌐 {content[lang].ronorpLink}
                    </a>
                    <a href="https://www.facebook.com/events/3262830970557912/" class="btn registerBtn facebook" target="_blank" rel="noopener noreferrer">
                        📘 {content[lang].facebookLink}
                    </a>
                    <a href="https://www.reddit.com/r/bern/comments/1qned5l/sew_bern_beginner_mending_group/" class="btn registerBtn reddit" target="_blank" rel="noopener noreferrer">
                        🔴 {content[lang].redditLink}
                    </a>
                    <a href="https://community.spontacts.com/community/friendseek/wall/257187" class="btn registerBtn spontacts" target="_blank" rel="noopener noreferrer">
                        🎯 {content[lang].spontactsLink}
                    </a>
                    <a href="https://www.meetup.com/meetup-bern/events/313018420/" class="btn registerBtn meetup" target="_blank" rel="noopener noreferrer">
                        👥 {content[lang].meetupLink}
                    </a>
                </div>
            </div>

            <div class="flyerBox">
                <h2 class="flyerTitle">{content[lang].flyerTitle}</h2>
                <p class="flyerDesc">{content[lang].flyerDesc}</p>
                <a href="/images/sew-bern-flyer.jpeg" download="sew-bern-flyer.jpeg" class="btn downloadBtn">
                    ⬇️ {lang === 'de' ? 'Flyer herunterladen' : 'Download Flyer'}
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

    .locationNote {
        font-size: 0.95em;
        margin: 1em 0 0 0;
        opacity: 0.8;
        font-style: italic;
    }

    .imageContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 1em 0;
    }

    .eventImage {
        width: 100%;
        max-width: 500px;
        height: auto;
        object-fit: cover;
        border-radius: 1em;
        border: 2px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
    }

    .eventImage:hover {
        transform: scale(1.05);
    }

    .beginnersBox {
        background: rgba(167, 139, 250, 0.1);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(167, 139, 250, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .beginnersBox p {
        text-align: center;
        margin: 0;
        font-size: 1.1em;
        line-height: 1.7;
    }

    .prosBox {
        background: rgba(255, 180, 100, 0.1);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(255, 180, 100, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .prosBox p {
        text-align: center;
        margin: 0;
        font-size: 1.1em;
        line-height: 1.7;
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
        gap: 0.8em;
        align-items: center;
    }

    .contactName {
        font-size: 1.2em;
        font-weight: 600;
        margin: 0;
    }

    .phoneLink {
        font-size: 1.3em;
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

    .ronorp {
        background: #7C3AED;
        color: white;
    }

    .ronorp:hover {
        background: #6d28d9;
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

    .reddit {
        background: #FF4500;
        color: white;
    }

    .reddit:hover {
        background: #e03d00;
        transform: scale(1.05);
    }

    .spontacts {
        background: #FF6B35;
        color: white;
    }

    .spontacts:hover {
        background: #e55a2a;
        transform: scale(1.05);
    }

    .meetup {
        background: #F64060;
        color: white;
    }

    .meetup:hover {
        background: #d63550;
        transform: scale(1.05);
    }

    .flyerBox {
        background: rgba(167, 139, 250, 0.1);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(167, 139, 250, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .flyerTitle {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .flyerDesc {
        text-align: center;
        margin: 0;
        font-size: 1.1em;
    }

    .downloadBtn {
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

    .downloadBtn:hover {
        background: #059669;
        transform: scale(1.05);
    }
</style>
