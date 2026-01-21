<svelte:head>
	<title>Berndeutsch Konversationsgruppe • Events • Connect Bern</title>
	<meta name="description" content="Every Friday evening – relaxed Swiss German practice. Part of the Connect Bern community project." />

	<!-- Open Graph -->
	<meta property="og:url" content="https://connectbern.ch/events/berndeutsch" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Berndeutsch Konversationsgruppe • Connect Bern" />
	<meta property="og:description" content="Every Friday evening – relaxed Swiss German practice. Part of the Connect Bern community project." />
	<meta property="og:image" content="https://connectbern.ch/images/swiss-german-event.avif" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="connectbern.ch" />
	<meta property="twitter:url" content="https://connectbern.ch/events/berndeutsch" />
	<meta name="twitter:title" content="Berndeutsch Konversationsgruppe • Connect Bern" />
	<meta name="twitter:description" content="Every Friday evening – relaxed Swiss German practice. Part of the Connect Bern community project." />
	<meta name="twitter:image" content="https://connectbern.ch/images/swiss-german-event.avif" />
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    let isMobile = false;
    let copyButton;

    const content = {
        de: {
            title: "Berndeutsch Konversationsgruppe",
            description: "Mir träffe üs am Abe zum gmüetlech Mundart mitanang rede. Mir tüe gärn Schwizerdütsch üebe. Mängisch chöme o Muettersprachler wo häufe (dir sit sehr willchume!). Mir freue üs uf aui, egau uf welem Niveau, chömet eifach verbi.",
            whatsappGroupTitle: "Tritt der WhatsApp Gruppe bei um zu sehen ob wir uns diese Woche treffen 😊",
            groupPageButton: "Zur Gruppe",
            phoneButton: "Telefon kopieren",
            confirmationNote: "⚠️ Findet nur dann statt wenn es in der WhatsApp gruppe bestätigt wird!",
            locationNote: "Für diejenigen, die uns noch nicht besucht haben - bitte schreib uns und wir teilen dir die Adresse mit 😊<br>Du kannst uns auch direkt fragen ob das Event diese Woche stattfindet.",
            preferWhatsapp: "Lieber auf WhatsApp:",
            alternativeContact: "SMS oder Anruf geht aber auch:",
            phone: "+41783166727",
            whatsappMessage: "Hi, ich würde gerne zur Berndeutsch Konversationsgruppe kommen!",
            time: "⏰ Jeden Freitag um 18:00 Uhr",
            closing: "Mir freue üs druuf, mit öich zäme Berndütsch z'üebe!",
            registerTitle: "📢 Lass uns mehr Leute erreichen!",
            registerDesc: "Wir haben das Event auf diesen Plattformen registriert. Wenn du ein Konto hast, registriere dich auch dort – der Algorithmus mag es, wenn etwas passiert, und es hilft uns, mehr Menschen zu erreichen! 🚀",
            meetupLink: "Meetup",
            facebookLink: "Facebook"
        },
        en: {
            title: "Berndeutsch Conversation Group",
            description: "We meet in the evening to practice Swiss German dialect together in a relaxed atmosphere. We love practicing Swiss German. Sometimes native speakers join us too (you are very welcome!). We welcome everyone, no matter what level, just come by.",
            whatsappGroupTitle: "Join the WhatsApp group to see if we're meeting this week 😊",
            groupPageButton: "Go to Group",
            phoneButton: "Copy Phone",
            confirmationNote: "⚠️ Only takes place if confirmed in the WhatsApp group!",
            locationNote: "For those who have not yet visited us - please write us and we'll share the address 😊<br>You can also ask us directly if the event is happening this week.",
            preferWhatsapp: "Preferably on WhatsApp:",
            alternativeContact: "SMS or call works too though:",
            phone: "+41783166727",
            whatsappMessage: "Hi, I would like to join the Berndeutsch conversation group!",
            time: "⏰ Every Friday at 6:00 PM",
            closing: "Looking forward to practicing Berndeutsch with you!",
            registerTitle: "📢 Let's reach more people!",
            registerDesc: "We've registered the event on these platforms. If you have an account, please also register there – the algorithm likes it when something is happening, and it helps us reach more people! 🚀",
            meetupLink: "Meetup",
            facebookLink: "Facebook"
        }
    };

    function copyPhone(number, button) {
        navigator.clipboard.writeText(number).then(() => {
            const originalText = button.innerHTML;
            button.innerHTML = lang === 'de' ? 'Kopiert!' : 'Copied!';
            button.classList.add('copied');
            button.classList.add('pulse');

            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('copied', 'pulse');
            }, 5000);
        }).catch(() => {
            button.innerHTML = lang === 'de' ? 'Fehler' : 'Failed';
            setTimeout(() => {
                button.innerHTML = '📋 ' + (lang === 'de' ? 'Kopieren' : 'Copy');
            }, 5000);
        });
    }

    if (typeof window !== 'undefined') {
        isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }
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

            <div class="imageContainer">
                <img src="/images/swiss-german-event.avif" alt="Berndeutsch practice" class="eventImage" />
            </div>

            <div class="infoBox">
                <p class="time">{content[lang].time}</p>
            </div>

            <div class="whatsappGroupBox">
                <h2 class="whatsappGroupTitle">{content[lang].whatsappGroupTitle}</h2>
                <a href="/groups/bernese-swiss-german-conversational-group" class="btn groupPageBtn">
                    👥 {content[lang].groupPageButton}
                </a>
                <p class="confirmationNote">{content[lang].confirmationNote}</p>
            </div>

            <div class="contactBox">
                <p class="locationNote">{@html content[lang].locationNote}</p>

                <div class="contactGrid">
                    <div class="contactRow">
                        <span class="contactLabel">{content[lang].preferWhatsapp}</span>
                        <a href="https://wa.me/{content[lang].phone.replace(/[^0-9]/g, '')}?text={encodeURIComponent(content[lang].whatsappMessage)}" class="btn contactBtn whatsapp" target="_blank" rel="noopener noreferrer">
                            💬 WhatsApp
                        </a>
                    </div>

                    <div class="contactRow">
                        <span class="contactLabel">{content[lang].alternativeContact}</span>
                        <div class="phoneGroup">
                            {#if !isMobile}
                                <span class="phoneNumber">{content[lang].phone}</span>
                                <button
                                    bind:this={copyButton}
                                    class="btn btnCopy"
                                    on:click={() => copyPhone(content[lang].phone, copyButton)}
                                >
                                    📋 {lang === 'de' ? 'Kopieren' : 'Copy'}
                                </button>
                            {:else}
                                <a href="tel:{content[lang].phone}" class="phoneNumberLink">
                                    {content[lang].phone}
                                </a>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>

            <div class="registerBox">
                <h2 class="registerTitle">{content[lang].registerTitle}</h2>
                <p class="registerDesc">{content[lang].registerDesc}</p>
                <div class="registerButtons">
                    <a href="https://www.meetup.com/meetup-bern/events/312225469" class="btn registerBtn meetup" target="_blank" rel="noopener noreferrer">
                        👥 {content[lang].meetupLink}
                    </a>
                    <a href="https://www.facebook.com/events/1461738099028282/1461738219028270" class="btn registerBtn facebook" target="_blank" rel="noopener noreferrer">
                        📘 {content[lang].facebookLink}
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

    .imageContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2em 0;
    }

    .eventImage {
        width: 100%;
        max-width: 500px;
        height: auto;
        border-radius: 1em;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
        object-fit: cover;
    }

    .eventImage:hover {
        transform: scale(1.05);
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

    .whatsappGroupBox {
        background: rgba(37, 211, 102, 0.1);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(37, 211, 102, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .whatsappGroupTitle {
        font-size: 1.1em;
        font-weight: bold;
        margin: 0;
        text-align: center;
        line-height: 1.5;
        max-width: 500px;
    }

    .groupPageBtn {
        padding: 0.6em 1em;
        font-size: 0.95em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        background: #6C48A7;
        color: white;
        width: fit-content;
    }

    .groupPageBtn:hover {
        background: #5a3a8f;
        transform: scale(1.05);
    }


    .confirmationNote {
        text-align: center;
        margin: 0;
        font-size: 1.1em;
        font-weight: bold;
        color: #FFD700;
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

    .locationNote {
        text-align: center;
        margin: 0 0 1.2em 0;
        font-size: 1.05em;
        line-height: 1.5;
    }

    .contactGrid {
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .contactRow {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.6em;
    }

    @media (min-width: 768px) {
        .contactGrid {
            flex-direction: row;
            justify-content: center;
            gap: 4em;
        }
    }

    .contactLabel {
        font-size: 0.95em;
        font-weight: 600;
        opacity: 0.9;
        text-align: center;
        line-height: 1.4;
    }

    .phoneGroup {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }

    .phoneNumber {
        font-size: 1.1em;
        font-weight: bold;
        color: white;
    }

    .phoneNumberLink {
        font-size: 1.3em;
        font-weight: bold;
        color: white;
        text-decoration: none;
        padding: 0.6em 1.2em;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        transition: all 0.3s ease;
        display: inline-block;
    }

    .phoneNumberLink:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.02);
    }

    .btnCopy {
        background: rgba(255, 255, 255, 0.15);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 0.8em 2em;
        font-size: 1.15em;
        border-radius: 6px;
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.4em;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.3s ease, border-color 0.3s ease;
        width: 160px;
        height: 48px;
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
        animation: pulse 0.6s ease-in-out;
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }

    .contactBtn {
        padding: 0.5em 1em;
        font-size: 0.9em;
        text-decoration: none;
        border-radius: 0.5em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
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

    .phone {
        background: #0077b6;
        color: white;
    }

    .phone:hover {
        background: #005f8a;
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

    .facebook {
        background: #1877F2;
        color: white;
    }

    .facebook:hover {
        background: #0d65d9;
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
