<svelte:head>
	<title>Speed Friending • Events • Connect Bern</title>
	<meta name="description" content="Make new friends in one evening! Speed friending brings people together through genuine connections based on shared interests." />

	<!-- Open Graph -->
	<meta property="og:url" content="https://connectbern.ch/events/speed-friending" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Speed Friending • Connect Bern" />
	<meta property="og:description" content="Make new friends in one evening! Speed friending brings people together through genuine connections." />
	<meta property="og:image" content="https://connectbern.ch/images/speed-friending.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="connectbern.ch" />
	<meta property="twitter:url" content="https://connectbern.ch/events/speed-friending" />
	<meta name="twitter:title" content="Speed Friending • Connect Bern" />
	<meta name="twitter:description" content="Make new friends in one evening! Speed friending brings people together through genuine connections." />
	<meta name="twitter:image" content="https://connectbern.ch/images/speed-friending.jpg" />
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Speed Friending",
            subtitle: "Unser coolstes Event!",
            date: "Mittwoch, 25. Februar 2026",
            time: "18:00 - 19:30 Uhr",
            location: "Connect Bern, Gutenbergstrasse 27, 3011 Bern",
            description: "Keine oberflächlichen Gespräche! Bei diesem Event bringen wir Menschen durch echte Verbindungen zusammen. Wir matchen dich basierend auf deinen Interessen und Hobbys mit anderen Teilnehmenden.",
            howItWorks: "So funktioniert's:",
            step1: "Registriere dich und fülle dein Profil aus",
            step2: "Wir matchen dich mit Menschen, die ähnliche Interessen haben",
            step3: "Am Event triffst du diese Menschen in gemütlicher Atmosphäre",
            step4: "Tausche Kontakte aus und bleib in Verbindung!",
            deposit: "10 CHF rückerstattbare Kaution um deinen Platz zu sichern (oder spende sie für zukünftige Events).",
            limitedSpots: "Begrenzte Plätze!",
            registerBtn: "Jetzt anmelden",
            questionsTitle: "Fragen?",
            questionsDesc: "Schreib uns auf WhatsApp:",
            whatsappMessage: "Hi, ich habe eine Frage zum Speed Friending Event!",
            phone: "+41783166727",
            helpTitle: "Hilf uns, mehr Leute zu erreichen!",
            helpDesc: "Wenn du ein Konto auf diesen Plattformen hast, melde dich auch dort an - das hilft dem Algorithmus und erreicht mehr Menschen:",
            closing: "Wir freuen uns auf dich!"
        },
        en: {
            title: "Speed Friending",
            subtitle: "Our coolest event!",
            date: "Wednesday, February 25, 2026",
            time: "6:00 PM - 7:30 PM",
            location: "Connect Bern, Gutenbergstrasse 27, 3011 Bern",
            description: "No superficial small talk! At this event, we bring people together through genuine connections. We match you with other participants based on your interests and hobbies.",
            howItWorks: "How it works:",
            step1: "Register and fill out your profile",
            step2: "We match you with people who have similar interests",
            step3: "At the event, you meet these people in a cozy atmosphere",
            step4: "Exchange contacts and stay connected!",
            deposit: "10 CHF refundable deposit to secure your spot (or donate it to support future events).",
            limitedSpots: "Limited spots!",
            registerBtn: "Register now",
            questionsTitle: "Questions?",
            questionsDesc: "Write us on WhatsApp:",
            whatsappMessage: "Hi, I have a question about the Speed Friending event!",
            phone: "+41783166727",
            helpTitle: "Help us reach more people!",
            helpDesc: "If you have an account on these platforms, also sign up there - it helps the algorithm and reaches more people:",
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
                <h1>{content[lang].title} ⚡</h1>
            </div>

            <div class="dateTimeBox">
                <p class="date">{content[lang].date}</p>
                <p class="time">{content[lang].time}</p>
                <p class="location">{content[lang].location}</p>
            </div>

            <p class="description">
                {content[lang].description}
            </p>

            <div class="howItWorksBox">
                <h2>{content[lang].howItWorks}</h2>
                <div class="steps">
                    <div class="step">
                        <span class="stepNumber">1</span>
                        <p>{content[lang].step1}</p>
                    </div>
                    <div class="step">
                        <span class="stepNumber">2</span>
                        <p>{content[lang].step2}</p>
                    </div>
                    <div class="step">
                        <span class="stepNumber">3</span>
                        <p>{content[lang].step3}</p>
                    </div>
                    <div class="step">
                        <span class="stepNumber">4</span>
                        <p>{content[lang].step4}</p>
                    </div>
                </div>
            </div>

            <div class="registrationBox">
                <p class="limitedSpots">{content[lang].limitedSpots}</p>
                <a href="https://app.connectbern.ch/events/sQdPPvSvePPePa9oHbCg" class="btn registerMainBtn" target="_blank" rel="noopener noreferrer">
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

            <div class="helpBox">
                <h3>{content[lang].helpTitle}</h3>
                <p>{content[lang].helpDesc}</p>
                <div class="platformButtons">
                    <a href="https://www.meetup.com/meetup-bern/events/313218372" class="btn platformBtn" target="_blank" rel="noopener noreferrer">
                        Meetup
                    </a>
                    <a href="https://fb.me/e/aZyArQtxd" class="btn platformBtn" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                    <a href="https://lu.ma/evt-jdq6VyfDkBxKNHK" class="btn platformBtn" target="_blank" rel="noopener noreferrer">
                        Luma
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

    .howItWorksBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .howItWorksBox h2 {
        font-size: 1.3em;
        margin: 0 0 1em;
        text-align: center;
    }

    .steps {
        display: flex;
        flex-direction: column;
        gap: 0.8em;
    }

    .step {
        display: flex;
        align-items: flex-start;
        gap: 0.8em;
    }

    .stepNumber {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 28px;
        height: 28px;
        min-width: 28px;
        background: rgba(255, 180, 100, 0.4);
        color: white;
        border-radius: 50%;
        font-weight: bold;
        font-size: 0.9em;
    }

    .step p {
        margin: 0;
        font-size: 1em;
        line-height: 1.5;
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

    .helpBox {
        background: rgba(255, 255, 255, 0.03);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.08);
        text-align: center;
    }

    .helpBox h3 {
        font-size: 1.1em;
        margin: 0 0 0.5em;
        opacity: 0.9;
    }

    .helpBox p {
        margin: 0 0 1em;
        font-size: 0.95em;
        opacity: 0.8;
    }

    .platformButtons {
        display: flex;
        gap: 0.8em;
        justify-content: center;
        flex-wrap: wrap;
    }

    .platformBtn {
        padding: 0.4em 0.8em;
        font-size: 0.9em;
        text-decoration: none;
        border-radius: 0.4em;
        font-weight: 500;
        transition: all 0.2s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.08);
        color: white;
        display: inline-block;
        width: auto;
    }

    .platformBtn:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: scale(1.03);
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
