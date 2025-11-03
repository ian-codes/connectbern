<svelte:head>
	<title>Connect & Cheers • Events • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Connect & Cheers",
            description: "Jeden Freitagabend in der PROGR Turnhalle – entspannter Treff zum Anstoßen, Austauschen und neue Leute kennenlernen. Teil der Community-Projekte Connect Bern & Staying in Bern.",
            instructions: "Schreib uns bitte auf WhatsApp, damit wir dir die Adresse schicken können 😊🎉",
            phone: "+41783166727",
            time: "⏰ Jeden Freitag ab 18:00",
            closing: "Wir freuen uns darauf, dich dort zu sehen!"
        },
        en: {
            title: "Connect & Cheers",
            description: "Every Friday evening at PROGR Turnhalle – relaxed drinks, chats and connections. Part of the Connect Bern & Staying in Bern community projects.",
            instructions: "Please write us on WhatsApp so we can share the address with you 😊🎉",
            phone: "+41783166727",
            time: "⏰ Every Friday from 18:00",
            closing: "Looking forward to seeing you there!"
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

            <p class="description">
                {content[lang].description}
            </p>

            <div class="infoBox">
                <p class="time">{content[lang].time}</p>
            </div>

            <div class="contactBox">
                <p class="instructions">{content[lang].instructions}</p>
                <a href="tel:{content[lang].phone}" class="phoneLink">
                    {content[lang].phone}
                </a>
                <div class="contactButtons">
                    <a href="https://wa.me/{content[lang].phone.replace(/[^0-9]/g, '')}" class="btn contactBtn whatsapp" target="_blank" rel="noopener noreferrer">
                        💬 WhatsApp
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
        margin-bottom: 0.5rem;
        text-align: center;
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
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
    }

    .time {
        font-size: 1.4em;
        font-weight: bold;
        margin: 0;
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
        padding: 0.8em 1.5em;
        font-size: 1.1em;
        text-decoration: none;
        border-radius: 0.8em;
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
