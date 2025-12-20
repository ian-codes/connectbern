<svelte:head>
	<title>Christmas Together in Bern • Events • Connect Bern</title>
	<meta name="description" content="December 25th – spend Christmas together. Open to everyone who doesn't want to spend the day alone." />

	<!-- Open Graph -->
	<meta property="og:url" content="https://connectbern.ch/events/christmas-together" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Christmas Together in Bern • Connect Bern" />
	<meta property="og:description" content="December 25th – spend Christmas together. Open to everyone who doesn't want to spend the day alone." />
	<meta property="og:image" content="https://connectbern.ch/images/peru-food.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="connectbern.ch" />
	<meta property="twitter:url" content="https://connectbern.ch/events/christmas-together" />
	<meta name="twitter:title" content="Christmas Together in Bern • Connect Bern" />
	<meta name="twitter:description" content="December 25th – spend Christmas together. Open to everyone who doesn't want to spend the day alone." />
	<meta name="twitter:image" content="https://connectbern.ch/images/peru-food.png" />
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    let isMobile = false;
    let copyButton;

    const content = {
        de: {
            title: "Christmas Together in Bern",
            date: "25. Dezember",
            time: "⏰ 19:00 Uhr",
            description: "Weihnachten muss man nicht allein verbringen. Am 25. Dezember laden wir alle ein, die die kalten Tage gemeinsam verbringen, neue Leute kennenlernen und einen entspannten Abend genießen möchten.",
            details: "Wir starten um 19:00 Uhr. Lia bereitet peruanisches Essen und Kuchen vor, und du bist herzlich eingeladen, kreativ zu sein und etwas zum Teilen mitzubringen, wenn du möchtest.",
            addressNote: "Wenn du noch nie bei Connect Bern warst, schreib uns einfach für die Adresse.<br>Bitte lass uns wissen, ob du kommst, damit wir wissen, mit wie vielen Leuten wir rechnen können und uns vorbereiten können.",
            closing: "Warm, einfach und offen für alle.",
            preferWhatsapp: "Lieber auf WhatsApp:",
            alternativeContact: "SMS oder Anruf geht aber auch:",
            phone: "+41783166727",
            whatsappMessage: "Hi, ich würde gerne zu Christmas Together kommen!"
        },
        en: {
            title: "Christmas Together in Bern",
            date: "December 25th",
            time: "⏰ 7:00 PM",
            description: "Christmas doesn't have to be spent alone. On December 25th, we're inviting anyone who wants to spend the cold days together, meet new people, and enjoy a relaxed evening.",
            details: "We start at 7:00 pm. Lia will prepare Peruvian food and cake, and you're very welcome to be creative and bring something to share if you'd like.",
            addressNote: "If you've never been to Connect Bern before, just write us for the address.<br>Please let us know if you're coming, so we know how many people to expect and can prepare.",
            closing: "Warm, simple, and open to everyone.",
            preferWhatsapp: "Preferably on WhatsApp:",
            alternativeContact: "SMS or call works too though:",
            phone: "+41783166727",
            whatsappMessage: "Hi, I would like to join Christmas Together!"
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
            <h1>{content[lang].title} 🎄</h1>

            <p class="date">{content[lang].date}</p>
            <p class="time">{content[lang].time}</p>

            <div class="imageContainer">
                <img src="/images/peru-food.png" alt="Peruvian Food" class="eventImage" />
            </div>

            <p class="description">
                {content[lang].description}
            </p>

            <p class="details">
                {content[lang].details}
            </p>

            <div class="contactBox">
                <p class="addressNote">{@html content[lang].addressNote}</p>

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
            text-align: center;
        }

        p {
            font-size: 1rem !important;
            text-align: center;
        }

        .date,
        .time,
        .description,
        .details,
        .addressNote,
        .closing {
            text-align: center !important;
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

    .date {
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        color: #FFD700;
    }

    .time {
        text-align: center;
        font-size: 1.3em;
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

    .details {
        text-align: center;
        font-size: 1.2em;
        background: rgba(255, 215, 0, 0.1);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 215, 0, 0.3);
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

    .addressNote {
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
        padding: 0.7em 1.4em;
        font-size: 1em;
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

    .closing {
        text-align: center;
        font-size: 1.3em;
        font-style: italic;
        margin-top: 1em;
        color: #FFD700;
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
