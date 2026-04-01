<svelte:head>
	<title>Karaoke Night at Stellwerk • Events • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Karaoke Nacht im Stellwerk",
            tagline: "Connect Bern goes Karaoke!",
            description: "Du singst gerne unter der Dusche? Du lernst gerne neue Leute kennen? Jetzt kannst du beides gleichzeitig tun, bei der Karaoke Nacht im Stellwerk am Freitag 03.04.2026 (aber bitte die Kleidung anlassen).",
            singing: "Singen ist nicht Pflicht, aber für alle auf der Bühne anfeuern schon :)",
            setup: "Wir sind nah beim Eingang, damit du direkt beim Ankommen Leute kennenlernen kannst.",
            closing: "Bis bald (und bis man dich hört)!",
            time: "⏰ Freitag, 3. April 2026 um 20:00",
            address: "Stellwerk Bern, Parkterrasse, Bern",
            mapsLink: "Google Maps",
            organizer: "Organisiert von Emre",
            appBtn: "Auf der App anmelden",
        },
        en: {
            title: "Karaoke Night at Stellwerk",
            tagline: "Connect Bern going to Karaoke!",
            description: "You like singing in the shower? You like meeting new people? Now you can do both at the same time at the Karaoke Night at Stellwerk on Friday 03.04.2026 (but please leave your clothing on).",
            singing: "Singing is not mandatory but cheering for everybody on stage is :)",
            setup: "We will be set up close to the entry so you can already start connecting right off the bat.",
            closing: "Hope to see (and hear) you soon!",
            time: "⏰ Friday, April 3, 2026 at 20:00",
            address: "Stellwerk Bern, Parkterrasse, Bern",
            mapsLink: "Google Maps",
            organizer: "Organised by Emre",
            appBtn: "Register on the app",
        }
    };
</script>

<section>
    <a class="btn back" href="/events">
        <span>→</span>Back
    </a>

    <div class="cntr">
        <div class="textContainer">
            <img src="/images/karaoke.webp" alt="Karaoke Night at Stellwerk" class="hero-img" />
            <p class="tagline">{content[lang].tagline}</p>
            <h1>{content[lang].title}</h1>

            <p class="description">
                {content[lang].description}
            </p>

            <p class="note">{content[lang].singing}</p>
            <p class="note">{content[lang].setup}</p>

            <div class="infoBox">
                <p class="time">{content[lang].time}</p>
                <p class="feature organizer">{content[lang].organizer}</p>
            </div>

            <div class="locationBox">
                <p class="addressLabel">📍 {content[lang].address}</p>
                <a href="https://maps.google.com/?q=Stellwerk+Bern,+Parkterrasse,+Bern" class="btn mapsBtn" target="_blank" rel="noopener noreferrer">
                    🗺️ {content[lang].mapsLink}
                </a>
            </div>

            <div class="linkBox">
                <a href="https://app.connectbern.ch/events/karaoke" class="btn appBtn" target="_blank" rel="noopener noreferrer">
                    🎤 {content[lang].appBtn}
                </a>
            </div>

            <p class="closing">{content[lang].closing}</p>
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

    .hero-img {
        width: 100%;
        border-radius: 1em;
        object-fit: cover;
        max-height: 320px;
    }

    .tagline {
        text-align: center;
        font-size: 1.1em;
        opacity: 0.7;
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        font-weight: 600;
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

    .description {
        text-align: center;
        font-size: 1.3em;
    }

    .note {
        text-align: center;
        font-size: 1.1em;
        opacity: 0.85;
        margin: 0;
    }

    .infoBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 0.8em;
    }

    .time {
        font-size: 1.4em;
        font-weight: bold;
        margin: 0;
    }

    .feature {
        font-size: 1.2em;
        margin: 0;
    }

    .organizer {
        opacity: 0.7;
        font-size: 1em;
    }

    .locationBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8em;
        background: rgba(255, 255, 255, 0.05);
        padding: 1.2em 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
    }

    .addressLabel {
        font-size: 1.1em;
        margin: 0;
    }

    .mapsBtn {
        padding: 0.6em 1.2em;
        font-size: 0.95em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        background: rgba(66, 133, 244, 0.2);
        color: white;
        border: 2px solid rgba(66, 133, 244, 0.5);
        width: fit-content;
    }

    .mapsBtn:hover {
        background: rgba(66, 133, 244, 0.4);
        transform: scale(1.05);
    }

    .linkBox {
        display: flex;
        justify-content: center;
        margin-top: 0.5em;
    }

    .appBtn {
        padding: 1em 2em;
        font-size: 1.2em;
        text-decoration: none;
        border-radius: 0.8em;
        font-weight: bold;
        transition: all 0.2s ease;
        background: rgba(108, 72, 167, 0.6);
        color: white;
        border: 2px solid rgba(108, 72, 167, 0.8);
        text-align: center;
        max-width: 200px;
    }

    .appBtn:hover {
        background: rgba(108, 72, 167, 0.8);
        transform: scale(1.05);
    }

    .groupsBox {
        background: rgba(108, 72, 167, 0.1);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(108, 72, 167, 0.25);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .groupsText {
        text-align: center;
        margin: 0;
        font-size: 1.2em;
    }

    .groupsBtn {
        padding: 0.5em 1em;
        font-size: 0.95em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        background: rgba(108, 72, 167, 0.5);
        color: white;
        border: 2px solid rgba(108, 72, 167, 0.7);
    }

    .groupsBtn:hover {
        background: rgba(108, 72, 167, 0.75);
        transform: scale(1.05);
    }

    .closing {
        text-align: center;
        font-size: 1.2em;
        font-style: italic;
        margin: 0;
    }

    .footer {
        text-align: center;
        font-size: 0.95em;
        opacity: 0.55;
        margin: 0;
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
