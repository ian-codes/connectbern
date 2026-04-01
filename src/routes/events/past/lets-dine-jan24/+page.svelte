<svelte:head>
	<title>Let's Dine Dinner • Events • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Let's Dine Dinner",
            subtitle: "Samstag, 24. Januar 2026",
            description: "Komm mit uns zum Abendessen und Karaoke! Eine tolle Möglichkeit, neue Leute kennenzulernen und Spass zu haben.",
            whenWhere: "Wann & Wo",
            date: "📅 Samstag, 24. Januar 2026",
            time: "🕕 18:00 Uhr",
            location: "📍 Restaurant Cavallo Star (Hauptbahnhof)",
            locationLink: "https://maps.app.goo.gl/BV5Ki7K5RVMo86Js5",
            viewMap: "Auf Karte ansehen",
            karaokeNote: "Nach dem Essen gehen wir zum Karaoke im Bärengrotte!",
            signUp: "📝 Anmeldung erforderlich",
            signUpText: "Bitte melde dich bis Donnerstag, 23:59 Uhr über die WhatsApp-Gruppe Let's Dine, Meetup oder Spontacts an.",
            signUpDeadline: "⏰ Anmeldefrist: Donnerstag, 23:59 Uhr",
            platforms: "📢 Lass uns mehr Leute erreichen!",
            platformsDesc: "Wir haben das Event auf diesen Plattformen registriert. Wenn du ein Konto hast, registriere dich auch dort – der Algorithmus mag es, wenn etwas passiert, und es hilft uns, mehr Menschen zu erreichen! 🚀",
            meetupBtn: "Auf Meetup anmelden",
            spontactsBtn: "Auf Spontacts anmelden",
            contact: "📞 Kontakt",
            contactText: "Kontaktiere Tom für weitere Informationen und Fragen:",
            phone: "+41774170525",
            contactName: "Tom",
            whatsappMessage: "Hallo Tom! Ich habe eine Frage zum Let's Dine Dinner am 24. Januar.",
            letsDineInfo: "🍽️ Mehr Events mit Let's Dine",
            letsDineText: "Diese Veranstaltung ist Teil der Let's Dine-Gruppe - einer internationalen Gruppe, die sich regelmässig zum Abendessen oder Brunch in Bern trifft.",
            joinLetsDine: "Let's Dine Gruppe beitreten",
            closing: "Wir freuen uns darauf, dich zu sehen! 🎉"
        },
        en: {
            title: "Let's Dine Dinner",
            subtitle: "Saturday, January 24, 2026",
            description: "Join us for dinner and karaoke! A great way to meet new people and have fun.",
            whenWhere: "When & Where",
            date: "📅 Saturday, January 24, 2026",
            time: "🕕 6:00 PM",
            location: "📍 Restaurant Cavallo Star (Central Station)",
            locationLink: "https://maps.app.goo.gl/BV5Ki7K5RVMo86Js5",
            viewMap: "View on map",
            karaokeNote: "After dinner we'll go to Karaoke at Bärengrotte!",
            signUp: "📝 Registration Required",
            signUpText: "Please sign up by Thursday, 11:59 PM through the Let's Dine WhatsApp group, Meetup, or Spontacts.",
            signUpDeadline: "⏰ Registration Deadline: Thursday, 11:59 PM",
            platforms: "📢 Let's reach more people!",
            platformsDesc: "We've registered the event on these platforms. If you have an account, please also register there – the algorithm likes it when something is happening, and it helps us reach more people! 🚀",
            meetupBtn: "Sign Up on Meetup",
            spontactsBtn: "Sign Up on Spontacts",
            contact: "📞 Contact",
            contactText: "Contact Tom for more information and questions:",
            phone: "+41774170525",
            contactName: "Tom",
            whatsappMessage: "Hi Tom! I have a question about the Let's Dine Dinner on January 24.",
            letsDineInfo: "🍽️ More Events with Let's Dine",
            letsDineText: "This event is part of the Let's Dine group - an international group that meets regularly for dinner or brunch in Bern.",
            joinLetsDine: "Join Let's Dine Group",
            closing: "Looking forward to seeing you! 🎉"
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
            <p class="subtitle">{content[lang].subtitle}</p>

            <p class="description">
                {content[lang].description}
            </p>

            <div class="infoBox">
                <h2>{content[lang].whenWhere}</h2>
                <p class="date">{content[lang].date}</p>
                <p class="time">{content[lang].time}</p>
                <div class="locationRow">
                    <p class="location">{content[lang].location}</p>
                    <a href={content[lang].locationLink} class="btn mapBtn" target="_blank" rel="noopener noreferrer">
                        📍 {content[lang].viewMap}
                    </a>
                </div>
                <p class="karaokeNote">{content[lang].karaokeNote}</p>
            </div>

            <div class="signUpBox">
                <h3>{content[lang].signUp}</h3>
                <p>{content[lang].signUpText}</p>
                <p class="deadline">{content[lang].signUpDeadline}</p>
            </div>

            <div class="platformsBox">
                <h3>{content[lang].platforms}</h3>
                <p>{content[lang].platformsDesc}</p>
                <div class="platformButtons">
                    <a href="https://www.meetup.com/lets-dine-meetup-group/events/312962096/" class="btn platformBtn meetup" target="_blank" rel="noopener noreferrer">
                        {content[lang].meetupBtn} →
                    </a>
                    <a href="https://community.spontacts.com/community/essen-trinken/meetups/J1YSRy6Qvhd" class="btn platformBtn spontacts" target="_blank" rel="noopener noreferrer">
                        {content[lang].spontactsBtn} →
                    </a>
                </div>
            </div>

            <div class="contactBox">
                <h3>{content[lang].contact}</h3>
                <p class="contactIntro">{content[lang].contactText}</p>
                <p class="contactName">{content[lang].contactName}</p>
                <a href="tel:{content[lang].phone}" class="phoneLink">
                    {content[lang].phone}
                </a>
                <div class="contactButtons">
                    <a href="https://wa.me/{content[lang].phone.replace(/[^0-9]/g, '')}?text={encodeURIComponent(content[lang].whatsappMessage)}" class="btn contactBtn whatsapp" target="_blank" rel="noopener noreferrer">
                        💬 WhatsApp
                    </a>
                </div>
            </div>

            <div class="letsDineBox">
                <h3>{content[lang].letsDineInfo}</h3>
                <p>{content[lang].letsDineText}</p>
                <a href="/groups/lets-dine" class="btn letsDineBtn">
                    {content[lang].joinLetsDine} →
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

        h2 {
            font-size: 1.5rem !important;
        }

        h3 {
            font-size: 1.3rem !important;
        }

        p {
            font-size: 1rem !important;
        }

        .platformButtons {
            flex-direction: column;
        }

        .platformBtn {
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
        margin: 0;
    }

    h2 {
        font-size: 1.8em;
        font-weight: bold;
        margin: 0 0 0.5em 0;
        text-align: center;
    }

    h3 {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0 0 0.5em 0;
    }

    .subtitle {
        text-align: center;
        font-size: 1.2em;
        font-style: italic;
        opacity: 0.9;
        margin-top: -0.5em;
    }

    p {
        font-size: 1.2em;
        line-height: 1.6;
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
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .signUpBox {
        background: rgba(156, 39, 176, 0.1);
        padding: 1.5em;
        border-radius: 1em;
        border: 2px solid rgba(156, 39, 176, 0.3);
    }

    .platformsBox {
        background: rgba(33, 150, 243, 0.1);
        padding: 1.5em;
        border-radius: 1em;
        border: 2px solid rgba(33, 150, 243, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .platformButtons {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 0.5em;
        width: 100%;
    }

    .platformBtn {
        display: inline-block;
        width: fit-content;
        padding: 0.8em 1.5em;
        font-size: 1.1em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        color: white;
        border: 2px solid white;
    }

    .meetup {
        background: #ED1C40;
    }

    .meetup:hover {
        background: #d11838;
        transform: scale(1.05);
    }

    .spontacts {
        background: #FF6B35;
    }

    .spontacts:hover {
        background: #e65a2d;
        transform: scale(1.05);
    }

    .letsDineBox {
        background: rgba(233, 30, 99, 0.1);
        padding: 1.5em;
        border-radius: 1em;
        border: 2px solid rgba(233, 30, 99, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .date, .time, .location {
        font-size: 1.3em;
        font-weight: bold;
        margin: 0.5em 0;
        text-align: center;
    }

    .locationRow {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
        flex-wrap: wrap;
    }

    .locationRow .location {
        margin: 0.5em 0;
    }

    .locationRow .mapBtn {
        margin-top: 0;
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
        margin-top: 0.5em;
    }

    .mapBtn:hover {
        background: rgba(76, 175, 80, 0.5);
        transform: scale(1.05);
    }

    .karaokeNote {
        font-size: 1.2em;
        font-style: italic;
        margin: 1em 0 0 0;
        text-align: center;
        opacity: 0.9;
    }

    .deadline {
        font-weight: 600;
        margin-top: 1em;
        text-align: center;
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

    .contactIntro {
        text-align: center;
        margin: 0;
    }

    .contactName {
        font-size: 1.3em;
        font-weight: bold;
        text-align: center;
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
        display: inline-block;
        width: fit-content;
        padding: 0.3em 0.6em;
        font-size: 1.1em;
        text-decoration: none;
        border-radius: 0.5em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
    }

    .whatsapp {
        background: #25D366;
        color: white;
    }

    .whatsapp:hover {
        background: #1fb855;
        transform: scale(1.05);
    }

    .letsDineBtn {
        display: inline-block;
        width: fit-content;
        padding: 0.3em 0.6em;
        font-size: 1.1em;
        text-decoration: none;
        border-radius: 0.5em;
        font-weight: bold;
        transition: all 0.2s ease;
        background: rgba(233, 30, 99, 0.3);
        color: white;
        border: 2px solid rgba(233, 30, 99, 0.5);
    }

    .letsDineBtn:hover {
        background: rgba(233, 30, 99, 0.5);
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
