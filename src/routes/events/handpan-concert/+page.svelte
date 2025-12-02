<svelte:head>
	<title>Sound journey HANDPAN CONCERT • Events • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Sound journey HANDPAN CONCERT",
            subtitle: "Lass dich von den dunkleren Dezembertagen in die Stille führen 🛋☕🎶",
            description: "Komm zu uns für eine Handpan-Klangreise, wo du dich vollständig entspannen, in gemütliche Kissen und Decken schmelzen und die sanften, meditativen Klänge der Handpan genießen kannst. Bring deine eigenen Decken oder Kissen mit, wenn du möchtest (wir stellen auch welche zur Verfügung), schnapp dir eine Tasse warmen Tee und versinke in einer beruhigenden, träumerischen Stunde, um deinen Körper zu entspannen und deinen Geist zu beruhigen.",
            closingText: "Lass uns zusammenkommen, atmen, entspannen und die winterliche Dunkelheit gemeinsam aufwärmen. ❄✨",
            date: "📅 13. Dezember 2025, 18:00 Uhr",
            duration: "⏱️ Dauer: ~1 Stunde",
            bring: "🎒 Mitbringen: Bequeme Kleidung, deine Decke/Kissen, falls du deine eigenen bevorzugst",
            registrationTitle: "📝 Anmeldung (erforderlich)",
            registrationDesc: "Das Event ist spendenbasiert / zahl-was-du-willst, mit der Absicht, es für alle zugänglich zu halten. Die Plätze sind begrenzt, also fülle bitte das Anmeldeformular aus:",
            depositTitle: "💳 Kaution (optional)",
            depositDesc: "Du kannst deinen Platz mit einer rückerstattbaren Kaution von 20 CHF sichern, zahlbar via Twint oder Kreditkarte. (Details im Anmeldeformular)",
            depositOptions: "Du kannst wählen:",
            depositOption1: "• Hole dir deine 20 CHF nach dem Event zurück",
            depositOption2: "• Verwende es als deine Spende",
            depositOption3: "• Oder spende einen anderen Betrag",
            noDepositInfo: "Wenn du lieber keine Kaution zahlen möchtest, werden wir dich benachrichtigen, falls kurz vor dem Event freie Plätze verfügbar sind.",
            afterRegistration: "Nachdem du dich registriert hast, werde ich mich per WhatsApp bei dir melden, um deinen Platz zu bestätigen, genaue Details zu teilen und alle Fragen zu beantworten. 🙂",
            formButton: "📝 Anmeldeformular",
            otherHandpanEvents: "Interessiert an anderen Handpan-Events? Schau dir unsere Seite an:",
            handpanPageLink: "Handpan-Lektion",
            phone: "+41783166727",
            whatsappMessage: "Hi, ich würde gerne zum Handpan-Konzert am 13. Dezember kommen!",
            downloadFlyer: "📥 Flyer herunterladen",
            shareFlyer: "Lade den Flyer herunter und teile ihn, um mehr Menschen zu erreichen! 🚀",
            platformsTitle: "📢 Hilf uns, mehr Leute zu erreichen!",
            platformsDesc: "Wir haben das Event auf diesen Plattformen registriert. Wenn du ein Konto hast, registriere dich auch dort – der Algorithmus mag es, wenn etwas passiert, und es hilft uns, mehr Menschen zu erreichen! 🚀",
            facebookLink: "Facebook",
            meetupLink: "Meetup"
        },
        en: {
            title: "Sound journey HANDPAN CONCERT",
            subtitle: "Let the darker days of December guide you into stillness 🛋☕🎶",
            description: "Join us for a handpan sound journey where you can fully relax, melt into cozy pillows and blankets, and enjoy the gentle, meditative sounds of the handpan. Bring your own blankets or pillows if you like (we'll also provide some), grab a cup of warm tea, and sink into a calming, dreamy hour to rest your body and soften your mind.",
            closingText: "Let's gather, breathe, relax, and warm up the winter darkness together. ❄✨",
            date: "📅 December 13th, 2025, 6:00 PM",
            duration: "⏱️ Duration: ~1 hour",
            bring: "🎒 Bring: Comfy clothes, your blanket/pillow if you prefer to use your own",
            registrationTitle: "📝 Registration (Required)",
            registrationDesc: "The event is donation-based / pay-what-you-want, with the intention to keep it accessible for everyone. Spaces are limited, so please fill out the registration form:",
            depositTitle: "💳 Deposit (Optional)",
            depositDesc: "You can secure your spot with a 20 CHF refundable deposit, payable via Twint or credit card. (Details in the registration form)",
            depositOptions: "You can choose to:",
            depositOption1: "• Get your 20 CHF back after the event",
            depositOption2: "• Use it as your donation",
            depositOption3: "• Or donate a different amount",
            noDepositInfo: "If you prefer not to pay a deposit, we'll notify you if free spots are available shortly before the event.",
            afterRegistration: "After you register, I'll get in touch with you via WhatsApp to confirm your spot, share exact details, and answer any questions. 🙂",
            formButton: "📝 Registration Form",
            otherHandpanEvents: "Interested in other handpan events? Check out our page:",
            handpanPageLink: "Handpan Lesson",
            phone: "+41783166727",
            whatsappMessage: "Hi, I would like to come to the handpan concert on December 13th!",
            downloadFlyer: "📥 Download Flyer",
            shareFlyer: "Download the flyer and share it to reach more people! 🚀",
            platformsTitle: "📢 Let's reach more people!",
            platformsDesc: "We've registered the event on these platforms. If you have an account, please also register there – the algorithm likes it when something is happening, and it helps us reach more people! 🚀",
            facebookLink: "Facebook",
            meetupLink: "Meetup"
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
                <img src="/images/handpan-concet.jpeg" alt="Handpan Concert Flyer" class="concertFlyer" />
            </div>

            <div class="flyerDownloadBox">
                <p class="shareFlyer">{content[lang].shareFlyer}</p>
                <a href="/images/handpan-concet.jpeg" download="handpan-concert-flyer.jpeg" class="downloadBtn">
                    {content[lang].downloadFlyer}
                </a>
            </div>

            <div class="infoBox">
                <p class="date">{content[lang].date}</p>
                <p class="eventDetail">{content[lang].duration}</p>
                <p class="eventDetail">{content[lang].bring}</p>
            </div>

            <div class="registrationBox">
                <h2 class="registrationTitle">{content[lang].registrationTitle}</h2>
                <p class="registrationDesc">{content[lang].registrationDesc}</p>
                <a href="https://forms.gle/2RfhFiCXCELPUETR7" class="btn formBtn" target="_blank" rel="noopener noreferrer">
                    {content[lang].formButton}
                </a>

                <div class="depositBox">
                    <h3 class="depositTitle">{content[lang].depositTitle}</h3>
                    <p class="depositDesc">{content[lang].depositDesc}</p>
                    <p class="depositOptions">{content[lang].depositOptions}</p>
                    <p class="depositOption">{content[lang].depositOption1}</p>
                    <p class="depositOption">{content[lang].depositOption2}</p>
                    <p class="depositOption">{content[lang].depositOption3}</p>
                    <p class="noDepositInfo">{content[lang].noDepositInfo}</p>
                </div>

                <p class="afterRegistration">{content[lang].afterRegistration}</p>
            </div>

            <div class="handpanEventsBox">
                <p class="otherHandpanEvents">{content[lang].otherHandpanEvents}</p>
                <a href="/events/handpan" class="handpanPageLink">
                    🎶 {content[lang].handpanPageLink}
                </a>
            </div>

            <div class="registerBox">
                <h2 class="registerTitle">{content[lang].platformsTitle}</h2>
                <p class="registerDesc">{content[lang].platformsDesc}</p>
                <div class="registerButtons">
                    <a href="https://www.facebook.com/share/1L8cjXG2S9/" class="btn registerBtn facebook" target="_blank" rel="noopener noreferrer">
                        📘 {content[lang].facebookLink}
                    </a>
                    <a href="https://meetu.ps/e/PHPjk/DpMCB/i" class="btn registerBtn meetup" target="_blank" rel="noopener noreferrer">
                        👥 {content[lang].meetupLink}
                    </a>
                </div>
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

    .imageContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2em 0;
    }

    .concertFlyer {
        width: 100%;
        max-width: 600px;
        height: auto;
        border-radius: 1em;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
        object-fit: cover;
    }

    .concertFlyer:hover {
        transform: scale(1.05);
    }

    .flyerDownloadBox {
        background: rgba(100, 200, 255, 0.1);
        padding: 1.5em;
        border-radius: 1em;
        border: 2px solid rgba(100, 200, 255, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .shareFlyer {
        text-align: center;
        margin: 0;
        font-size: 1.1em;
        font-weight: 600;
    }

    .downloadBtn {
        padding: 0.8em 1.5em;
        font-size: 1.1em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        background: #3B82F6;
        color: white;
        display: inline-block;
        width: auto;
    }

    .downloadBtn:hover {
        background: #2563EB;
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

    .eventDetail {
        font-size: 1.1em;
        margin: 0.5em 0 0 0;
        opacity: 0.9;
    }

    .registrationBox {
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

    .formBtn {
        padding: 1em 2em;
        font-size: 1.2em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        background: #4285F4;
        color: white;
        display: inline-block;
        width: auto;
    }

    .formBtn:hover {
        background: #3367D6;
        transform: scale(1.05);
    }

    .depositBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 0.8em;
        border: 1px solid rgba(255, 255, 255, 0.15);
        width: 100%;
        max-width: 600px;
    }

    .depositTitle {
        font-size: 1.3em;
        font-weight: bold;
        margin: 0 0 1em 0;
        text-align: center;
    }

    .depositDesc {
        font-size: 1.05em;
        line-height: 1.7;
        margin: 0 0 1em 0;
    }

    .depositOptions {
        font-size: 1.05em;
        font-weight: bold;
        margin: 1em 0 0.5em 0;
    }

    .depositOption {
        font-size: 1.05em;
        line-height: 1.7;
        margin: 0.3em 0;
    }

    .noDepositInfo {
        font-size: 1.05em;
        line-height: 1.7;
        margin: 1em 0 0 0;
        font-style: italic;
        opacity: 0.9;
    }

    .afterRegistration {
        text-align: center;
        font-size: 1.1em;
        line-height: 1.6;
        margin: 0;
        max-width: 600px;
    }

    .handpanEventsBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .otherHandpanEvents {
        text-align: center;
        margin: 0;
        font-size: 1.1em;
    }

    .handpanPageLink {
        padding: 0.7em 1.3em;
        font-size: 1.05em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        background: #8B5CF6;
        color: white;
        display: inline-block;
        width: auto;
    }

    .handpanPageLink:hover {
        background: #7C3AED;
        transform: scale(1.05);
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

    .facebook {
        background: #1877F2;
        color: white;
    }

    .facebook:hover {
        background: #0d65d9;
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
