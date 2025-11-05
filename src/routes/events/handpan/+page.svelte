<svelte:head>
	<title>Handpan Lesson • Events • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Handpan-Lektion für Anfänger",
            mainText: "Jeden Sonntag veranstaltet Berni eine Handpan-Lektion für Anfänger! 🎶",
            callToAction: "Wenn du neugierig bist, die Handpan auszuprobieren, oder einfach ihren wunderschönen Klang erleben möchtest, lies bitte die Details zur Anmeldung unten.",
            registrationTitle: "💛 Anmeldung (Verpflichtend)",
            registrationSteps: "Um teilzunehmen, bitte:",
            step1: "1️⃣ Fülle das Anmeldeformular sorgfältig aus:",
            formLink: "https://forms.gle/P9g45KCBPmLjQkW1A",
            step2: "2️⃣ Tritt der WhatsApp-Gruppe für Updates und die genaue Adresse bei:",
            whatsappLink: "https://tiny.cc/handpan",
            depositTitle: "Über die Kaution:",
            depositInfo: "Wir bitten um eine Kaution von 20 CHF, um deinen Platz zu sichern. Dies hilft, kurzfristige Absagen zu vermeiden, die für andere, die teilnehmen wollten, aber nicht konnten, weil die Session voll war, unfair sein können. Du kannst die Kaution nach der Session zurückfordern oder als Spende zur Unterstützung des Raums anbieten (sie hilft, Miete, Getränke, Essen und zukünftige Events zu decken). Zahlungsdetails findest du im Anmeldeformular.",
            depositAlternative: "Wenn du lieber keine Kaution zahlen möchtest, kannst du trotzdem teilnehmen, falls ein Platz frei wird, und ich werde dich im Voraus informieren.",
            recurringInfo: "Neue Termine werden regelmäßig hinzugefügt — bitte melde dich an, auch wenn diese Termine nicht für dich passen.",
            date: "📅 Jeden Sonntag",
            closing: "Ich freue mich darauf, diese wunderschöne Erfahrung mit dir zu teilen! 🤗 🌸"
        },
        en: {
            title: "Beginner Handpan Lesson",
            mainText: "Every Sunday Berni is hosting a beginner handpan lesson! 🎶",
            callToAction: "If you're curious to try the handpan or simply want to experience its beautiful sound, please read the registration details below.",
            registrationTitle: "💛 Registration (Mandatory)",
            registrationSteps: "To join, please:",
            step1: "1️⃣ Fill out the registration form carefully:",
            formLink: "https://forms.gle/P9g45KCBPmLjQkW1A",
            step2: "2️⃣ Join the WhatsApp group for updates and the exact address:",
            whatsappLink: "https://tiny.cc/handpan",
            depositTitle: "About the deposit:",
            depositInfo: "We've decided to request a 20 CHF deposit to secure your spot. This helps avoid last-minute no-shows, which can be unfair to others who wanted to join but couldn't because the session was full. You can reclaim the deposit after the session or offer it as a donation to support the space (it helps cover rent, drinks, food, and future events). Payment details are in the registration form.",
            depositAlternative: "If you prefer not to pay the deposit, you may still join if a spot becomes available, and I'll let you know in advance.",
            recurringInfo: "New dates are added regularly — please register even if these dates don't fit you.",
            date: "📅 Every Sunday",
            closing: "I'm looking forward to sharing this beautiful experience with you! 🤗 🌸"
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

            <div class="imageGallery">
                <img src="/images/handpan-1.jpg" alt="Handpan" class="handpanImage" />
                <img src="/images/handpan-2.jpg" alt="Handpan" class="handpanImage" />
                <img src="/images/handpan-3.jpg" alt="Handpan" class="handpanImage" />
            </div>

            <div class="infoBox">
                <p class="date">{content[lang].date}</p>
            </div>

            <div class="registrationBox">
                <h2 class="registrationTitle">{content[lang].registrationTitle}</h2>
                <p class="registrationSteps">{content[lang].registrationSteps}</p>

                <div class="step">
                    <p class="stepText">{content[lang].step1}</p>
                    <a href={content[lang].formLink} class="actionLink formLink" target="_blank" rel="noopener noreferrer">
                        📝 Registration Form
                    </a>
                </div>

                <div class="step">
                    <p class="stepText">{content[lang].step2}</p>
                    <a href={content[lang].whatsappLink} class="actionLink whatsappLink" target="_blank" rel="noopener noreferrer">
                        💬 WhatsApp Group
                    </a>
                </div>

                <div class="depositBox">
                    <h3 class="depositTitle">{content[lang].depositTitle}</h3>
                    <p class="depositInfo">{content[lang].depositInfo}</p>
                    <p class="depositAlternative">{content[lang].depositAlternative}</p>
                </div>

                <p class="recurringInfo">{content[lang].recurringInfo}</p>
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

        .registrationBox {
            padding: 1.5em;
        }

        .registrationTitle {
            font-size: 1.5em;
        }

        .actionLink {
            font-size: 1.1em;
            padding: 0.8em 1.5em;
        }

        .depositTitle {
            font-size: 1.2em;
        }

        .imageGallery {
            flex-direction: column;
            gap: 1em;
        }

        .handpanImage {
            max-width: 100%;
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
        font-size: 1.1em;
        opacity: 0.9;
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

    .imageGallery {
        display: flex;
        flex-direction: row;
        gap: 1em;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 2em 0;
    }

    .handpanImage {
        width: 100%;
        max-width: 280px;
        height: auto;
        border-radius: 1em;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
        object-fit: cover;
    }

    .handpanImage:hover {
        transform: scale(1.05);
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

    .registrationBox {
        background: rgba(255, 220, 100, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(255, 220, 100, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }

    .registrationTitle {
        font-size: 1.8em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .registrationSteps {
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

    .formLink {
        background: #4285F4;
    }

    .formLink:hover {
        background: #3367D6;
        transform: scale(1.05);
    }

    .whatsappLink {
        background: #25D366;
    }

    .whatsappLink:hover {
        background: #1fb855;
        transform: scale(1.05);
    }

    .depositBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 0.8em;
        border: 1px solid rgba(255, 255, 255, 0.15);
        margin-top: 0.5em;
    }

    .depositTitle {
        font-size: 1.3em;
        font-weight: bold;
        margin: 0 0 1em 0;
        text-align: center;
    }

    .depositInfo {
        font-size: 1.05em;
        line-height: 1.7;
        margin: 0 0 1em 0;
    }

    .depositAlternative {
        font-size: 1.05em;
        line-height: 1.7;
        margin: 0;
        font-style: italic;
    }

    .recurringInfo {
        margin: 0;
        text-align: center;
        font-size: 1.1em;
        font-weight: bold;
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
