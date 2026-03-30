<svelte:head>
	<title>Easter Potluck • Events • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "🐰 POTLUCK OSTER PARTY & BRUNCH 🐣",
            subtitle: "No family? Not the family you deserve? Family abroad?",
            description: "No expectations. No pressure. Just food, kindness, and community. Zero awkward questions about your life choices.",
            whenWhere: "Save the Date",
            date: "📅 Sunday, April 5th – 1PM",
            duration: "⏱️ Duration: 2-3 hours (come and go as you like)",
            instructions: "Write us on WhatsApp to get the address and let us know you're coming!",
            phone: "+41783166727",
            whatsappMessage: "Hi! I'd like to come to Easter Party & Brunch on Sunday!",
            closing: "Looking forward to seeing you! ☕🍰❤️"
        },
        en: {
            title: "🐰 POTLUCK EASTER PARTY & BRUNCH 🐣",
            subtitle: "No family? Not the family you deserve? Family abroad?",
            description: "No expectations. No pressure. Just food, kindness, and community. Zero awkward questions about your life choices.",
            whenWhere: "Save the Date",
            date: "📅 Sunday, April 5th – 1PM",
            duration: "⏱️ Duration: 2-3 hours (come and go as you like)",
            instructions: "Write us on WhatsApp to get the address and let us know you're coming!",
            phone: "+41783166727",
            whatsappMessage: "Hi! I'd like to come to Easter Party & Brunch on Sunday!",
            closing: "Looking forward to seeing you! ☕🍰❤️"
        }
    };
</script>

<section>
    <a class="btn back" href="/events">
        <span>→</span>Back
    </a>

    <div class="cntr">
        <div class="textContainer">
            <div class="imageContainer">
                <img src="/images/easter.png" alt="Event Image" class="eventImage" />
            </div>

            <h1>{content[lang].title}</h1>
            <p class="subtitle">{content[lang].subtitle}</p>



            <p class="description">
                {content[lang].description}
            </p>

            <div class="infoBox">
                <h2>{content[lang].whenWhere}</h2>
                <p class="date">{content[lang].date}</p>
                <p class="duration">{content[lang].duration}</p>
            </div>

            <div class="contactBox">
                <p class="instructions">{content[lang].instructions}</p>
                <a href="tel:{content[lang].phone}" class="phoneLink">
                    {content[lang].phone}
                </a>
                <div class="contactButtons">
                    <a href="https://wa.me/{content[lang].phone.replace(/[^0-9]/g, '')}?text={encodeURIComponent(content[lang].whatsappMessage)}" class="btn contactBtn whatsapp" target="_blank" rel="noopener noreferrer">
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

        h2 {
            font-size: 1.5rem !important;
        }

        h3 {
            font-size: 1.3rem !important;
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

    .imageContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 1em 0;
    }

    .eventImage {
        max-width: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
        border-radius: 1em;
        border: 2px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
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
    }

    .firstTimeBox {
        background: rgba(33, 150, 243, 0.1);
        padding: 1.5em;
        border-radius: 1em;
        border: 2px solid rgba(33, 150, 243, 0.3);
    }

    .date, .duration, .location {
        font-size: 1.3em;
        font-weight: bold;
        margin: 0.5em 0;
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
