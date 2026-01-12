<svelte:head>
	<title>Tuesday Jazz Jam • Events • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';
    import { onMount } from 'svelte';

    $: lang = $currentLanguage;

    let isMobile = false;
    let copyButton;

    onMount(() => {
        isMobile = window.innerWidth <= 768;
    });

    function copyPhone(number, button) {
        navigator.clipboard.writeText(number).then(() => {
            const originalText = button.innerHTML;
            button.innerHTML = lang === 'de' ? '✓ Kopiert!' : '✓ Copied!';
            button.classList.add('copied', 'pulse');
            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('copied', 'pulse');
            }, 2000);
        }).catch(() => {
            button.innerHTML = lang === 'de' ? 'Fehler' : 'Failed';
            setTimeout(() => {
                button.innerHTML = '📋 ' + (lang === 'de' ? 'Kopieren' : 'Copy');
            }, 5000);
        });
    }

    const content = {
        de: {
            title: "Tuesday Jazz Jam",
            subtitle: "Wöchentliche Jamsession im 5ème ETAGE",
            description: "Der Tuesday Jam ist der Berner Treffpunkt für die aktive Jazzszene. Jeden Dienstag treffen sich lokale und internationale Musiker*innen für eine öffentliche Jamsession.",
            meetingTitle: "🤝 Connect Bern Treffpunkt",
            meetingDesc: "Wir treffen uns gemeinsam am Zytglogge um 19:30 Uhr und gehen zusammen zum Jam. So muss niemand alleine hingehen!",
            contactHeader: "Wenn du mitkommen möchtest oder Fragen hast, schreib dem Organisator:",
            contactName: "Tomáš",
            phone: "+41782287764",
            whatsappMessage: "Hallo Tomáš, ich möchte gerne zum Tuesday Jazz Jam kommen!",
            whatToExpect: "Was dich erwartet",
            schedule: "⏰ Zeitplan",
            schedule1: "20:00 Uhr - Türen öffnen, Risotto wird serviert",
            schedule2: "21:00 Uhr - Live Jamband startet (ca. 1,5 Stunden)",
            schedule3: "Danach - Offene Jamsession für alle",
            schedule4: "00:30 Uhr - Ende der Session",
            food: "🍽️ Essen & Trinken",
            foodDesc: "Ab 20:00 Uhr gibt es leckeres Risotto (vegetarisch) für CHF 5, zubereitet von einem italienischen Koch. Optional Wienerli für CHF 5 zusätzlich, Salat für CHF 5.",
            music: "🎵 Die Musik",
            musicDesc: "Eine professionelle Jamband (Gitarre/Klavier, Bass, Schlagzeug, teilweise Sax) spielt ab 21 Uhr. Danach ist die Session offen für alle Musiker*innen – bring dein Instrument mit oder komm einfach zum Zuhören!",
            venue: "📍 Ort & Anfahrt",
            venueInfo: "5ème ETAGE, Mühlenplatz 11, Matte Bern (mit Lift erreichbar)",
            venueTransport: "Gut erreichbar mit Bus Nr. 30, hält direkt am Mühlenplatz und fährt zum Bahnhof.",
            mapsButton: "🗺️ Google Maps öffnen",
            pricing: "💰 Kosten",
            pricingEntry: "CHF 5 Eintritt",
            pricingFood: "CHF 5 Risotto (optional)",
            pricingNote: "Das Geld geht direkt an den Verein Tuesday Jam, nicht an Connect Bern. Wir organisieren nur die gemeinsame Anfahrt, damit niemand alleine gehen muss.",
            atmosphere: "✨ Atmosphäre",
            atmosphereDesc: "Klein, gemütlich, direkt unter dem Dach – ein intimer Ort mit toller Stimmung. Der Platz ist begrenzt, daher empfiehlt es sich, früh zu kommen.",
            website: "🌐 Mehr Informationen",
            websiteLink: "Offizielle Website: jazz-jam.ch",
            websiteUrl: "https://www.jazz-jam.ch/",
            closingText: "Wir freuen uns darauf, mit dir zum Jam zu gehen! 🎷✨"
        },
        en: {
            title: "Tuesday Jazz Jam",
            subtitle: "Weekly jam session at 5ème ETAGE",
            description: "The Tuesday Jam is Bern's meeting point for the active jazz scene. Every Tuesday, local and international musicians gather for a public jam session.",
            meetingTitle: "🤝 Connect Bern Meeting Point",
            meetingDesc: "We meet together at Zytglogge at 7:30 PM and head to the jam together. So no one has to go alone!",
            contactHeader: "If you plan on coming or have any questions, contact the organizer:",
            contactName: "Tomáš",
            phone: "+41782287764",
            whatsappMessage: "Hi Tomáš, I would like to join the Tuesday Jazz Jam!",
            whatToExpect: "What to Expect",
            schedule: "⏰ Schedule",
            schedule1: "8:00 PM - Doors open, risotto is served",
            schedule2: "9:00 PM - Live jam band starts (about 1.5 hours)",
            schedule3: "After - Open jam session for everyone",
            schedule4: "12:30 AM - Session ends",
            food: "🍽️ Food & Drinks",
            foodDesc: "Starting at 8 PM, there's delicious risotto (vegetarian) for CHF 5, prepared by an Italian chef. Optional Wienerli for CHF 5 extra, salad for CHF 5.",
            music: "🎵 The Music",
            musicDesc: "A professional jam band (guitar/piano, bass, drums, sometimes sax) plays from 9 PM. After that, the session is open to all musicians – bring your instrument or just come to listen!",
            venue: "📍 Location & Getting There",
            venueInfo: "5ème ETAGE, Mühlenplatz 11, Matte Bern (accessible by elevator)",
            venueTransport: "Easily accessible by bus no. 30, stops directly at Mühlenplatz and goes to the train station.",
            mapsButton: "🗺️ Open Google Maps",
            pricing: "💰 Costs",
            pricingEntry: "CHF 5 entry",
            pricingFood: "CHF 5 risotto (optional)",
            pricingNote: "The money goes directly to the Tuesday Jam association, not to Connect Bern. We only organize going together so no one has to go alone.",
            atmosphere: "✨ Atmosphere",
            atmosphereDesc: "Small, cozy, right under the roof – an intimate spot with great vibes. Space is limited, so it's recommended to arrive early.",
            website: "🌐 More Information",
            websiteLink: "Official website: jazz-jam.ch",
            websiteUrl: "https://www.jazz-jam.ch/",
            closingText: "We're looking forward to going to the jam with you! 🎷✨"
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

            <div class="meetingBox">
                <h2 class="meetingTitle">{content[lang].meetingTitle}</h2>
                <p class="meetingDesc">{content[lang].meetingDesc}</p>

                <div class="contactInfo">
                    <p class="contactHeader">{content[lang].contactHeader}</p>
                    <p class="contactName">{content[lang].contactName}</p>
                    <div class="contactRow">
                        <div class="phoneDisplay">
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
                        <a
                            href="https://wa.me/{content[lang].phone}?text={encodeURIComponent(content[lang].whatsappMessage)}"
                            class="contactBtn whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            💬 WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <div class="whatToExpectBox">
                <h2 class="whatToExpectTitle">{content[lang].whatToExpect}</h2>

                <div class="activityItem">
                    <h3 class="activityTitle">{content[lang].schedule}</h3>
                    <ul class="scheduleList">
                        <li>{content[lang].schedule1}</li>
                        <li>{content[lang].schedule2}</li>
                        <li>{content[lang].schedule3}</li>
                        <li>{content[lang].schedule4}</li>
                    </ul>
                </div>

                <div class="activityItem">
                    <h3 class="activityTitle">{content[lang].food}</h3>
                    <p class="activityDesc">{content[lang].foodDesc}</p>
                </div>

                <div class="activityItem">
                    <h3 class="activityTitle">{content[lang].music}</h3>
                    <p class="activityDesc">{content[lang].musicDesc}</p>
                </div>

                <div class="activityItem">
                    <h3 class="activityTitle">{content[lang].atmosphere}</h3>
                    <p class="activityDesc">{content[lang].atmosphereDesc}</p>
                </div>
            </div>

            <div class="infoBox">
                <h2 class="infoTitle">{content[lang].venue}</h2>
                <p class="venueInfo">{content[lang].venueInfo}</p>
                <p class="transportInfo">{content[lang].venueTransport}</p>
                <a
                    href="https://www.google.com/maps/search/?api=1&query=5ème+ETAGE,+Mühlenplatz+11,+3011+Bern"
                    class="mapsBtn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {content[lang].mapsButton}
                </a>
            </div>

            <div class="pricingBox">
                <h2 class="pricingTitle">{content[lang].pricing}</h2>
                <div class="priceItems">
                    <div class="priceItem">💵 {content[lang].pricingEntry}</div>
                    <div class="priceItem">🍚 {content[lang].pricingFood}</div>
                </div>
                <p class="pricingNote">{content[lang].pricingNote}</p>
            </div>

            <div class="websiteBox">
                <h2 class="websiteTitle">{content[lang].website}</h2>
                <a href={content[lang].websiteUrl} class="btn websiteBtn" target="_blank" rel="noopener noreferrer">
                    {content[lang].websiteLink}
                </a>
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

        .contactRow {
            flex-direction: column;
            gap: 0.8em;
        }

        .phoneDisplay {
            flex-direction: column;
            gap: 0.5em;
        }

        .contactBtn {
            font-size: 1em;
            padding: 0.8em 1.5em;
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

    .meetingBox {
        background: linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(79, 70, 229, 0.15));
        padding: 1.5em;
        border-radius: 1em;
        border: 2px solid rgba(147, 51, 234, 0.4);
        display: flex;
        flex-direction: column;
        gap: 0.8em;
    }

    .meetingTitle {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .meetingDesc {
        font-size: 1.1em;
        margin: 0;
        text-align: center;
    }

    .contactInfo {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        align-items: center;
        margin: 1em 0;
    }

    .contactHeader {
        font-size: 1em;
        margin: 0;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.8);
    }

    .contactName {
        font-size: 1.4em;
        margin: 0;
        font-weight: 700;
        color: white;
    }

    .contactRow {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
        gap: 2em;
    }

    .phoneDisplay {
        display: flex;
        align-items: center;
        gap: 1em;
        flex-wrap: wrap;
        justify-content: center;
    }

    .phoneNumber {
        font-size: 1.1em;
        font-weight: 600;
        color: white;
        padding: 0.5em 1em;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 0.5em;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .phoneNumberLink {
        font-size: 1.1em;
        font-weight: 600;
        color: white;
        padding: 0.5em 1em;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 0.5em;
        border: 1px solid rgba(255, 255, 255, 0.2);
        text-decoration: none;
        transition: all 0.2s ease;
    }

    .phoneNumberLink:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.02);
    }

    .btnCopy {
        background: rgba(255, 255, 255, 0.15);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 0.5em 0.5em;
        border-radius: 0.5em;
        font-size: 0.85em;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        text-transform: none;
        letter-spacing: normal;
        white-space: nowrap;
        width: fit-content;
    }

    .btnCopy:hover {
        background: rgba(255, 255, 255, 0.25);
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-1px);
    }

    .btnCopy.copied {
        background: rgba(76, 175, 80, 0.3);
        color: white;
        border-color: rgba(76, 175, 80, 0.6);
    }

    .btnCopy.pulse {
        animation: pulse 0.6s ease-in-out;
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }

    .contactBtn {
        padding: 0.5em 0.8em;
        font-size: 0.85em;
        text-decoration: none;
        border-radius: 0.5em;
        font-weight: 600;
        transition: all 0.2s ease;
        border: 2px solid white;
        background: #25D366;
        color: white;
        display: inline-block;
        width: max-content;
        white-space: nowrap;
        text-transform: none;
        letter-spacing: normal;
    }

    .contactBtn:hover {
        background: #128C7E;
        transform: scale(1.05);
    }

    .whatToExpectBox {
        background: rgba(255, 180, 100, 0.1);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(255, 180, 100, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }

    .whatToExpectTitle {
        font-size: 1.8em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .activityItem {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.2em;
        border-radius: 0.8em;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .activityTitle {
        font-size: 1.3em;
        font-weight: bold;
        margin: 0 0 0.5em 0;
    }

    .activityDesc {
        font-size: 1.05em;
        line-height: 1.6;
        margin: 0;
        opacity: 0.9;
    }

    .scheduleList {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .scheduleList li {
        font-size: 1.05em;
        line-height: 1.6;
        opacity: 0.9;
        padding-left: 0;
    }

    .infoBox {
        background: rgba(100, 200, 255, 0.1);
        padding: 1.5em;
        border-radius: 1em;
        border: 2px solid rgba(100, 200, 255, 0.3);
        text-align: center;
    }

    .infoTitle {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0 0 0.5em 0;
    }

    .venueInfo {
        font-size: 1.1em;
        margin: 0.5em 0;
        font-weight: 600;
    }

    .transportInfo {
        font-size: 1em;
        margin: 0.5em 0;
        opacity: 0.9;
    }

    .mapsBtn {
        display: inline-block;
        margin-top: 1em;
        padding: 0.8em 1.5em;
        font-size: 1em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        background: #4285F4;
        color: white;
        text-transform: none;
        letter-spacing: normal;
    }

    .mapsBtn:hover {
        background: #3367D6;
        transform: scale(1.05);
    }

    .pricingBox {
        background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(255, 215, 0, 0.08));
        padding: 1.5em;
        border-radius: 1em;
        border: 2px solid rgba(212, 175, 55, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .pricingTitle {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
    }

    .priceItems {
        display: flex;
        gap: 1.5em;
        flex-wrap: wrap;
        justify-content: center;
    }

    .priceItem {
        font-size: 1.2em;
        font-weight: 600;
        color: rgb(255, 215, 100);
        padding: 0.5em 1em;
        background: rgba(212, 175, 55, 0.15);
        border-radius: 0.8em;
        border: 1px solid rgba(212, 175, 55, 0.3);
    }

    .pricingNote {
        font-size: 0.9em;
        margin: 0;
        text-align: center;
        opacity: 0.9;
        max-width: 600px;
    }

    .websiteBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .websiteTitle {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
    }

    .websiteBtn {
        padding: 1em 2em;
        font-size: 1em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        background: #3B82F6;
        color: white;
        display: inline-block;
        width: max-content;
        white-space: nowrap;
        text-transform: none;
        letter-spacing: normal;
    }

    .websiteBtn:hover {
        background: #2563EB;
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
