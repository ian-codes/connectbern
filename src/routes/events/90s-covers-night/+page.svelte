<svelte:head>
	<title>Acoustic '90s • Events • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    let showWhyCostDialog = false;

    function copyToClipboard(text, button) {
        navigator.clipboard.writeText(text).then(() => {
            const originalText = button.innerHTML;
            button.innerHTML = lang === 'de' ? 'Kopiert!' : 'Copied!';
            button.classList.add('copied');
            button.classList.add('pulse');

            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('copied', 'pulse');
            }, 3000);
        }).catch(() => {
            button.innerHTML = lang === 'de' ? 'Fehler' : 'Failed';
            setTimeout(() => {
                button.innerHTML = lang === 'de' ? 'Kopieren' : 'Copy';
            }, 3000);
        });
    }

    const content = {
        de: {
            title: "Acoustic '90s",
            subtitle: "Akustische 90er-Cover in einer intimen Wohnzimmeratmosphäre 🎸✨",
            description: "Wir veranstalten einen weiteren intimen Musikabend in Bern ✨\n\nDiesmal mit dem Thema 90er-Cover-Abend - fünf verschiedene Musiker:innen, jede:r mit ihrer eigenen akustischen Interpretation beliebter Songs aus den 1990er Jahren.",
            conceptTitle: "Das Konzept",
            conceptDesc: "Die Idee ist einfach und gemütlich: ein gemeinsamer Wohnraum, akustische Sets, vertraute Songs und echtes Zuhören. Keine Bühne, kein Druck - nur Musik, Nostalgie und Verbindung.",
            details: "🎤 5 Musiker:innen\n🎸 Akustische 90er-Cover\n🛋️ Eine warme, intime Wohnzimmeratmosphäre\n👥 Begrenzte Teilnehmerzahl für persönliche Atmosphäre",
            comeAloneTitle: "💫 Kommst du alleine? Perfekt!",
            comeAloneDesc: "Viele kommen alleine zu diesen Events! Du bist herzlich willkommen, neue Menschen kennenzulernen und dich durch die Musik zu verbinden. Es ist ein sicherer, warmer Raum für echte Begegnungen.",
            date: "📅 Samstag, 31. Januar 2026",
            time: "🕕 18:00–22:00",
            location: "📍 Bern",
            entry: "💰 Eintritt: CHF 10",
            capacity: "Der Raum bietet bequem Platz für 20–25 Personen, und wir haben noch Platz für ein paar mehr.",
            snacks: "Hausgemachte Snacks und Getränke können gekauft werden.",
            whyCostTitle: "💡 Warum kostet es etwas?",
            whyCostDesc: "Connect Bern macht mit dieser Veranstaltung keinen Gewinn. Alle Beiträge gehen direkt an die Organisator:innen Rahel und Idan und helfen, Folgendes zu decken:",
            whyCostReasons: "• Bezahlung für Reinigung, Vorbereitung des Raums und Müllentsorgung\n\n• Einkauf von Zutaten und Produkten für Essen und Getränke\n\n• Zuverlässige Teilnahme gewährleisten. Die Registrierung mit einem Beitrag ermutigt die Leute, tatsächlich zu erscheinen - und die Zeit zu respektieren, die in die Organisation dieser Veranstaltung investiert wurde\n\n• Wertschätzung für die Musiker:innen. Je mehr Leute sich anmelden, desto mehr können wir als Dankeschön für ihre Musik und Zeit anbieten - Schokolade, Kuchen, Getränke oder vielleicht sogar etwas Schöneres 😊",
            paymentTitle: "💳 Bezahlung",
            paymentDesc: "Sobald du bezahlt hast, bist du registriert!\n\nBitte bezahle so bald wie möglich, damit wir wissen, für wie viele Personen wir vorbereiten müssen.",
            paymentTwintTitle: "Twint",
            paymentTwintDesc: "Das Geld geht direkt an Rahel - am einfachsten für uns!",
            paymentTwintNumber: "+41 77 400 60 80",
            paymentNoTwint: "Kein Twint? Kein Problem - nutze die anderen Optionen, wir überweisen es dann.",
            paymentSumUpTitle: "Karte",
            paymentSumUpDesc: "Online bezahlen",
            paymentSumUpButton: "Mit Karte bezahlen",
            paymentBankTitle: "Banküberweisung",
            paymentBankDesc: "",
            paymentBankName: "Connect Bern",
            paymentBankIBAN: "CH83 0630 0508 3149 8090 2",
            paymentCashTitle: "Bar",
            paymentCashDesc: "Du kannst gerne zum Connect Bern Raum kommen - wir haben fast immer offen - und bar bezahlen, um dich für das Event zu registrieren.",
            btnCopy: "Kopieren",
            registrationTitle: "📝 Anmeldung",
            registrationDesc: "Bitte schreibe Rahel oder Idan eine Nachricht, um dich anzumelden, damit wir wissen, für wie viele Personen wir vorbereiten müssen.",
            contactName1: "Rahel Hirt",
            phone1: "+41774006080",
            whatsappMessage1: "Hallo Rahel, ich möchte gerne zum Acoustic '90s am 31. Januar kommen!",
            contactName2: "Idan",
            phone2: "+972549450060",
            whatsappMessage2: "Hi Idan, ich möchte gerne zum Acoustic '90s am 31. Januar kommen!",
            closingText: "Wenn du 90er-Musik und intime Live-Sessions liebst, bist du herzlich eingeladen! 💛"
        },
        en: {
            title: "Acoustic '90s",
            subtitle: "Acoustic '90s covers in an intimate living-room atmosphere 🎸✨",
            description: "We're hosting another intimate living-room music evening in Bern ✨\n\nThis time, the theme is '90s Covers Night - five different musicians, each bringing their own acoustic interpretation of beloved songs from the 1990s.",
            conceptTitle: "The Concept",
            conceptDesc: "The idea is simple and cozy: a shared living-room space, acoustic sets, familiar songs, and real listening. No stage, no pressure - just music, nostalgia, and connection.",
            details: "🎤 5 musicians\n🎸 Acoustic '90s covers\n🛋️ A warm, intimate living-room atmosphere\n👥 Limited audience to keep it personal",
            comeAloneTitle: "💫 Coming Alone? Perfect!",
            comeAloneDesc: "Many people come alone to these events! You're welcome to meet new people and connect through the music. It's a safe, warm space for authentic connections.",
            date: "📅 Saturday, January 31, 2026",
            time: "🕕 18:00–22:00",
            location: "📍 Bern",
            entry: "💰 Entry: CHF 10",
            capacity: "The space comfortably holds 20–25 people, and we still have room for a few more.",
            snacks: "Homemade snacks and drinks will be available for purchase.",
            whyCostTitle: "💡 Why does it cost money?",
            whyCostDesc: "Connect Bern is not making any profit from this event. All contributions go directly to the organizers, Rahel and Idan, and help cover the following:",
            whyCostReasons: "• Hiring someone to clean, prepare the space for the event, and take out the trash\n\n• Buying ingredients and supplies to prepare food and drinks\n\n• Helping ensure reliable attendance. Registering with a contribution encourages people to actually show up - and respect the time invested into organising this event\n\n• Appreciation for the musicians. The more people register, the more we can offer something genuinely nice in return for their music and time - chocolate, cake, drinks or maybe even something nicer 😊",
            paymentTitle: "💳 Payment",
            paymentDesc: "Once you've paid, you're registered!\n\nPlease pay as soon as possible so we know how many people to prepare for.",
            paymentTwintTitle: "Twint",
            paymentTwintDesc: "Money goes directly to Rahel - easiest for us!",
            paymentTwintNumber: "+41 77 400 60 80",
            paymentNoTwint: "No Twint? No problem - use the other options, we'll transfer it.",
            paymentSumUpTitle: "Card",
            paymentSumUpDesc: "Pay online",
            paymentSumUpButton: "Pay with Card",
            paymentBankTitle: "Bank Transfer",
            paymentBankDesc: "",
            paymentBankName: "Connect Bern",
            paymentBankIBAN: "CH83 0630 0508 3149 8090 2",
            paymentCashTitle: "Cash",
            paymentCashDesc: "You're welcome to come to the Connect Bern space - we are nearly always open - and pay in cash to register for the event.",
            btnCopy: "Copy",
            registrationTitle: "📝 Sign Up",
            registrationDesc: "Please message Rahel or Idan to sign up so we know how many people to prepare for.",
            contactName1: "Rahel Hirt",
            phone1: "+41774006080",
            whatsappMessage1: "Hi Rahel, I would like to come to Acoustic '90s on January 31st!",
            contactName2: "Idan",
            phone2: "+972549450060",
            whatsappMessage2: "Hi Idan, I would like to come to Acoustic '90s on January 31st!",
            closingText: "If you love '90s music and intimate live sessions, you're warmly invited to join us! 💛"
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
                <img src="/images/music.jpeg" alt="Acoustic '90s" class="eventImage" />
            </div>

            <div class="conceptBox">
                <h2 class="conceptTitle">{content[lang].conceptTitle}</h2>
                <p class="conceptDesc">{content[lang].conceptDesc}</p>
            </div>

            <div class="detailsBox">
                <p class="details">{content[lang].details}</p>
            </div>

            <div class="comeAloneBox">
                <h2 class="comeAloneTitle">{content[lang].comeAloneTitle}</h2>
                <p class="comeAloneDesc">{content[lang].comeAloneDesc}</p>
            </div>

            <div class="infoBox">
                <p class="date">{content[lang].date}</p>
                <p class="eventDetail">{content[lang].time}</p>
                <p class="eventDetail">{content[lang].location}</p>
                <div class="entryContainer">
                    <p class="entry">{content[lang].entry}</p>
                    <button class="whyCostButton" on:click={() => showWhyCostDialog = true} aria-label="Why does it cost money?">
                        ℹ️
                    </button>
                </div>
            </div>

            <div class="atmosphereBox">
                <p class="capacity">{content[lang].capacity}</p>
                <p class="snacks">{content[lang].snacks}</p>
            </div>

            <div class="paymentBox">
                <h2 class="paymentTitle">{content[lang].paymentTitle}</h2>
                <p class="paymentDesc">{content[lang].paymentDesc}</p>

                <div class="paymentMethods">
                    <div class="paymentMethod twintHighlight">
                        <div class="twintLogoContainer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Twint.svg" alt="Twint" class="twintLogo" />
                        </div>
                        <p>{content[lang].paymentTwintDesc}</p>
                        <p class="phoneNumber">{content[lang].paymentTwintNumber}</p>
                        <button on:click={(e) => copyToClipboard(content[lang].paymentTwintNumber, e.currentTarget)} class="btn btnPrimary btnCopyTwint">{content[lang].btnCopy}</button>
                    </div>

                    <p class="noTwintText">{content[lang].paymentNoTwint}</p>

                    <div class="paymentMethod">
                        <h4>💳 {content[lang].paymentSumUpTitle}</h4>
                        <p>{content[lang].paymentSumUpDesc}</p>
                        <a
                            href="https://pay.sumup.com/b2c/QGW1709K"
                            class="btn btnPrimary btnFull"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {content[lang].paymentSumUpButton}
                        </a>
                    </div>

                    <div class="paymentMethod">
                        <h4>🏦 {content[lang].paymentBankTitle}</h4>
                        <div class="bankInfo">
                            <p class="bankName">{content[lang].paymentBankName}</p>
                            <p class="bankIBAN">{content[lang].paymentBankIBAN}</p>
                        </div>
                        <button on:click={(e) => copyToClipboard(`${content[lang].paymentBankName}\n${content[lang].paymentBankIBAN}`, e.currentTarget)} class="btn btnCopy">{content[lang].btnCopy}</button>
                    </div>

                    <div class="paymentMethod">
                        <h4>💵 {content[lang].paymentCashTitle}</h4>
                        <p>{content[lang].paymentCashDesc}</p>
                    </div>
                </div>
            </div>

            <div class="contactBox">
                <h2 class="registrationTitle">{content[lang].registrationTitle}</h2>
                <p class="registrationDesc">{content[lang].registrationDesc}</p>

                <div class="contactsRow">
                    <div class="contactInfo">
                        <p class="contactName">{content[lang].contactName1}</p>
                        <a href="tel:{content[lang].phone1}" class="phoneLink">
                            {content[lang].phone1}
                        </a>
                        <a
                            href="https://wa.me/{content[lang].phone1.replace(/[^0-9]/g, '')}?text={encodeURIComponent(content[lang].whatsappMessage1)}"
                            class="contactBtn whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            💬 WhatsApp Rahel
                        </a>
                    </div>

                    <div class="contactInfo">
                        <p class="contactName">{content[lang].contactName2}</p>
                        <a href="tel:{content[lang].phone2}" class="phoneLink">
                            {content[lang].phone2}
                        </a>
                        <a
                            href="https://wa.me/{content[lang].phone2.replace(/[^0-9]/g, '')}?text={encodeURIComponent(content[lang].whatsappMessage2)}"
                            class="contactBtn whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            💬 WhatsApp Idan
                        </a>
                    </div>
                </div>
            </div>

            <p class="closing">
                {content[lang].closingText}
            </p>
        </div>
    </div>

    <!-- Why Cost Dialog -->
    {#if showWhyCostDialog}
        <div class="dialogOverlay" on:click={() => showWhyCostDialog = false} role="button" tabindex="0" on:keydown={(e) => e.key === 'Escape' && (showWhyCostDialog = false)}>
            <div class="dialogBox" on:click|stopPropagation role="dialog" aria-modal="true">
                <button class="closeButton" on:click={() => showWhyCostDialog = false} aria-label="Close">×</button>
                <div class="dialogIcon">💡</div>
                <h2>{content[lang].whyCostTitle}</h2>
                <p class="dialogDescription">{content[lang].whyCostDesc}</p>
                <p class="dialogReasons">{content[lang].whyCostReasons}</p>
            </div>
        </div>
    {/if}
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
        white-space: pre-line;
    }

    .imageContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2em 0;
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
        transform: scale(1.05);
    }

    .conceptBox {
        background: rgba(255, 180, 100, 0.1);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(255, 180, 100, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .conceptTitle {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .conceptDesc {
        text-align: center;
        margin: 0;
        font-size: 1.1em;
        line-height: 1.7;
    }

    .detailsBox {
        background: rgba(100, 150, 255, 0.1);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(100, 150, 255, 0.3);
    }

    .details {
        text-align: center;
        font-size: 1.1em;
        line-height: 2;
        margin: 0;
        white-space: pre-line;
    }

    .comeAloneBox {
        background: rgba(167, 139, 250, 0.1);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(167, 139, 250, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .comeAloneTitle {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .comeAloneDesc {
        text-align: center;
        margin: 0;
        font-size: 1.1em;
        line-height: 1.7;
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

    .entryContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8em;
        margin-top: 1em;
    }

    .entry {
        font-size: 1.3em;
        font-weight: bold;
        margin: 0;
        color: rgba(255, 200, 100, 1);
    }

    .whyCostButton {
        background: rgba(255, 200, 100, 0.2);
        border: 2px solid rgba(255, 200, 100, 0.4);
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 1.2em;
        transition: all 0.2s ease;
        padding: 0;
    }

    .whyCostButton:hover {
        background: rgba(255, 200, 100, 0.3);
        border-color: rgba(255, 200, 100, 0.6);
        transform: scale(1.1);
    }

    .atmosphereBox {
        background: rgba(100, 200, 255, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(100, 200, 255, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .capacity {
        text-align: center;
        font-size: 1.05em;
        line-height: 1.7;
        margin: 0;
    }

    .snacks {
        text-align: center;
        font-size: 1.05em;
        line-height: 1.7;
        margin: 0;
        font-style: italic;
        opacity: 0.9;
    }

    .dialogOverlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .dialogBox {
        background: linear-gradient(135deg, rgb(30, 40, 60), rgb(20, 30, 50));
        border: 2px solid rgba(255, 200, 100, 0.3);
        border-radius: 1.5em;
        padding: 2em 1.5em;
        max-width: 550px;
        width: 85%;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        animation: slideUp 0.3s ease;
        text-align: center;
    }

    @keyframes slideUp {
        from {
            transform: translateY(50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .closeButton {
        position: absolute;
        top: 1em;
        right: 1em;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: white;
        font-size: 2em;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        line-height: 1;
    }

    .closeButton:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: rotate(90deg);
    }

    .dialogIcon {
        font-size: 3em;
        margin-bottom: 0.4em;
    }

    .dialogBox h2 {
        color: white;
        font-size: 1.5em;
        margin-bottom: 0.5em;
        line-height: 1.3;
    }

    .dialogDescription {
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.05em;
        line-height: 1.6;
        margin-bottom: 1em;
    }

    .dialogReasons {
        color: rgba(255, 255, 255, 0.85);
        font-size: 1em;
        line-height: 1.8;
        white-space: pre-line;
        text-align: left;
        padding-left: 1em;
        margin: 0;
    }

    .paymentBox {
        background: rgba(100, 255, 150, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(100, 255, 150, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }

    .paymentTitle {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .paymentDesc {
        text-align: center;
        margin: 0;
        font-size: 1.1em;
        line-height: 1.7;
        white-space: pre-line;
    }

    .paymentMethods {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5em;
        margin-top: 1em;
    }

    @media (min-width: 768px) {
        .paymentMethods {
            grid-template-columns: repeat(3, 1fr);
        }

        .twintHighlight {
            grid-column: 1 / -1;
            max-width: 100%;
        }
    }

    @media (max-width: 767px) {
        .twintHighlight {
            max-width: 100%;
        }

        .paymentMethod {
            padding: 1.2em;
        }
    }

    .paymentMethod {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.8em;
        padding: 1.5em;
        transition: all 0.3s ease;
    }

    .paymentMethod:hover {
        background: rgba(0, 0, 0, 0.3);
        border-color: rgba(255, 255, 255, 0.2);
    }

    .paymentMethod h4 {
        font-size: 1.3em;
        font-weight: bold;
        margin: 0 0 0.8em 0;
    }

    .twintHeader h4 {
        margin: 0;
    }

    .paymentMethod p {
        font-size: 1em;
        line-height: 1.5;
        opacity: 0.9;
        margin: 0 0 1em 0;
    }

    .phoneNumber {
        font-size: 1.3em !important;
        font-weight: bold !important;
        letter-spacing: 1px;
        margin: 1em 0 !important;
        text-align: center;
    }

    .twintHighlight .phoneNumber {
        font-size: 1.5em !important;
    }

    .bankInfo {
        background: rgba(0, 0, 0, 0.3);
        padding: 1em;
        border-radius: 0.5em;
        margin-bottom: 1em;
    }

    .bankName {
        font-size: 1.1em !important;
        font-weight: 600 !important;
        margin: 0 0 0.5em 0 !important;
    }

    .bankIBAN {
        font-size: 0.75em !important;
        font-weight: bold !important;
        font-family: monospace;
        letter-spacing: 0.5px;
        margin: 0 !important;
        word-break: keep-all;
        white-space: nowrap;
        overflow-x: auto;
    }

    .twintHighlight {
        background: rgba(0, 150, 255, 0.1) !important;
        border: 2px solid rgba(0, 150, 255, 0.4) !important;
        transform: scale(1.02);
        box-shadow: 0 4px 20px rgba(0, 150, 255, 0.2);
        text-align: center;
    }

    .twintHighlight:hover {
        background: rgba(0, 150, 255, 0.15) !important;
        border-color: rgba(0, 150, 255, 0.5) !important;
    }

    .twintLogoContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1.5em;
    }

    .twintLogo {
        width: 120px;
        height: auto;
    }

    .btn {
        display: inline-block;
        padding: 0.7em 1.2em;
        border-radius: 0.5em;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9em;
        transition: all 0.2s ease;
        cursor: pointer;
        border: none;
        font-family: inherit;
        text-align: center;
        white-space: normal;
        line-height: 1.4;
        box-sizing: border-box;
    }

    .btnPrimary {
        background: linear-gradient(135deg, rgba(108, 72, 167, 0.9), rgba(58, 152, 189, 0.9));
        color: white;
    }

    .btnPrimary:hover {
        background: linear-gradient(135deg, rgba(108, 72, 167, 1), rgba(58, 152, 189, 1));
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .btnCopy {
        background: rgba(255, 255, 255, 0.15);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 0.6em 1em;
        font-size: 0.9em;
        width: 100%;
    }

    .btnCopy:hover {
        background: rgba(255, 255, 255, 0.25);
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-1px);
    }

    .btnCopy.copied {
        background: rgba(255, 255, 255, 0.3);
        color: white;
        border-color: rgba(255, 255, 255, 0.6);
    }

    .btnCopy.pulse {
        animation: pulseBtn 0.6s ease-in-out;
    }

    @keyframes pulseBtn {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }

    .btnFull {
        width: 100%;
    }

    .btnCopyTwint {
        width: auto !important;
        display: block;
        margin: 0 auto;
        padding: 0.8em 2em;
    }

    .noTwintText {
        text-align: center;
        font-size: 1.05em;
        opacity: 0.9;
        margin: 1.5em 0;
        padding: 1em;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 0.5em;
        grid-column: 1 / -1;
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

    .contactsRow {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2em;
        width: 100%;
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

    .contactBtn {
        padding: 0.8em 1.5em;
        font-size: 1em;
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

    @media (max-width: 800px) {
        .whyCostButton {
            width: 28px;
            height: 28px;
            font-size: 1em;
        }

        .dialogBox {
            width: 90%;
            padding: 1.5em 1em;
        }

        .dialogBox h2 {
            font-size: 1.2em;
        }

        .dialogDescription {
            font-size: 0.95em;
        }

        .dialogReasons {
            font-size: 0.9em;
            padding-left: 0.5em;
        }

        .closeButton {
            width: 32px;
            height: 32px;
            font-size: 1.5em;
        }

        .paymentMethods {
            grid-template-columns: 1fr;
        }

        .btn {
            width: 100%;
        }

        .contactsRow {
            grid-template-columns: 1fr;
            gap: 1.5em;
        }

        .twintLogo {
            width: 80px;
        }

        .twintHighlight .phoneNumber {
            font-size: 1.3em !important;
        }

        .twintHighlight {
            transform: scale(1);
        }

        .btnCopyTwint {
            padding: 0.7em 1.5em;
        }
    }
</style>
