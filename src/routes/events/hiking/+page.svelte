<svelte:head>
	<title>Hiking: First - Bachalpsee - Bort • Events • Connect Bern</title>
	<meta name="description" content="Join us for a chill hike from First to Bachalpsee and down to Bort! Medium difficulty, frozen lake, forests and mountain views." />

	<!-- Open Graph -->
	<meta property="og:url" content="https://connectbern.ch/events/hiking" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Hiking: First - Bachalpsee - Bort • Connect Bern" />
	<meta property="og:description" content="Chill hike from First to Bachalpsee and down to Bort. Beginner and dog friendly!" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="connectbern.ch" />
	<meta property="twitter:url" content="https://connectbern.ch/events/hiking" />
	<meta name="twitter:title" content="Hiking: First - Bachalpsee - Bort • Connect Bern" />
	<meta name="twitter:description" content="Chill hike from First to Bachalpsee and down to Bort. Beginner and dog friendly!" />


</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Wanderung: First - Bachalpsee - Bort",
            date: "Samstag, 14. März 2026",
            time: "09:00 Uhr",
            meetingPoint: "Bern Hauptbahnhof, beim SBB Treffpunkt",
            description: "Lust auf schöne Momente mit netten Menschen? Dann bist du hier genau richtig! Komm mit auf eine entspannte und wunderschöne Wanderung durch die Berge, vorbei an Wäldern und einem gefrorenen See. Anfängerfreundlich und Hunde willkommen (an der Leine). Komm einfach vorbei!",
            difficulty: "Schwierigkeit",
            difficultyLevel: "Mittel",
            duration: "Dauer",
            durationValue: "ca. 3 Stunden",
            distance: "Distanz",
            distanceValue: "10 km",
            ascent: "Aufstieg",
            ascentValue: "200 m",
            descent: "Abstieg",
            descentValue: "800 m",
            group: "Gruppe",
            groupValue: "Kleine Gruppe",
            routeTitle: "Die Route",
            routeDesc: "Wir nehmen den Zug von Bern nach Grindelwald und fahren mit der Gondelbahn hoch nach First (2'168 m). Von dort wandern wir zum wunderschönen Bachalpsee (2'265 m) - einem gefrorenen Bergsee mit atemberaubendem Panorama. Danach kehren wir zurück nach First und steigen ab nach Bort (1'570 m), durch Wälder und mit Blick auf die Berge.",
            mapTitle: "Karte",
            whatToBring: "Was du mitbringen solltest:",
            item1: "Gute Wanderschuhe (keine Turnschuhe!)",
            item2: "Wasser und Lunch / Snacks",
            item3: "Wetterfeste Kleidung und warme Schicht",
            item4: "Sonnenschutz (Sonnenbrille, Sonnencreme, Hut)",
            free: "Kostenlos! (Anreise auf eigene Kosten)",
            registerBtn: "Anmelden",
            questionsTitle: "Fragen?",
            questionsDesc: "Schreib uns auf WhatsApp:",
            whatsappMessage: "Hi, ich habe eine Frage zur Wanderung First-Bachalpsee-Bort!",
            phone: "+41783166727",
            closing: "Wir freuen uns auf dich!"
        },
        en: {
            title: "Hike: First - Bachalpsee - Bort",
            date: "Saturday, March 14, 2026",
            time: "9:00 AM",
            meetingPoint: "Bern main station, at the SBB meeting point",
            description: "Want to have good moments with nice people? You're at the right place! Come join us for a chill and wonderful hike among the mountains, passing through forests and seeing a frozen lake. Beginner and dog friendly (leashed). Feel free to join us!",
            difficulty: "Difficulty",
            difficultyLevel: "Medium",
            duration: "Duration",
            durationValue: "approx. 3 hours",
            distance: "Distance",
            distanceValue: "10 km",
            ascent: "Ascent",
            ascentValue: "200 m",
            descent: "Descent",
            descentValue: "800 m",
            group: "Group",
            groupValue: "Small group",
            routeTitle: "The Route",
            routeDesc: "We take the train from Bern to Grindelwald and the gondola up to First (2,168 m). From there we hike to the beautiful Bachalpsee (2,265 m) - a frozen mountain lake with breathtaking panoramic views. Then we head back to First and descend to Bort (1,570 m), through forests and with mountain views.",
            mapTitle: "Map",
            whatToBring: "What to bring:",
            item1: "Good hiking boots (no sneakers!)",
            item2: "Water and lunch / snacks",
            item3: "Weather-appropriate clothing and warm layer",
            item4: "Sun protection (sunglasses, sunscreen, hat)",
            free: "Free! (Travel costs on your own)",
            registerBtn: "Register",
            questionsTitle: "Questions?",
            questionsDesc: "Write us on WhatsApp:",
            whatsappMessage: "Hi, I have a question about the First-Bachalpsee-Bort hike!",
            phone: "+41783166727",
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
                <h1>{content[lang].title} 🥾</h1>
            </div>

            <div class="dateTimeBox">
                <p class="date">{content[lang].date}</p>
                <p class="time">{content[lang].time}</p>
                <p class="location">{content[lang].meetingPoint}</p>
            </div>

            <p class="description">
                {content[lang].description}
            </p>

            <div class="statsBox">
                <div class="stat">
                    <span class="statLabel">{content[lang].difficulty}</span>
                    <span class="statValue medium">{content[lang].difficultyLevel}</span>
                </div>
                <div class="stat">
                    <span class="statLabel">{content[lang].duration}</span>
                    <span class="statValue">{content[lang].durationValue}</span>
                </div>
                <div class="stat">
                    <span class="statLabel">{content[lang].distance}</span>
                    <span class="statValue">{content[lang].distanceValue}</span>
                </div>
                <div class="stat">
                    <span class="statLabel">{content[lang].ascent}</span>
                    <span class="statValue">{content[lang].ascentValue}</span>
                </div>
                <div class="stat">
                    <span class="statLabel">{content[lang].descent}</span>
                    <span class="statValue">{content[lang].descentValue}</span>
                </div>
                <div class="stat">
                    <span class="statLabel">{content[lang].group}</span>
                    <span class="statValue">{content[lang].groupValue}</span>
                </div>
            </div>

            <div class="routeBox">
                <h2>{content[lang].routeTitle}</h2>
                <p>{content[lang].routeDesc}</p>
            </div>

            <div class="mapBox">
                <h2>{content[lang].mapTitle}</h2>
                <a href="https://swisstopo.app/i/5/EFEVCGV9" target="_blank" rel="noopener noreferrer" class="mapLink">
                    <img src="/images/hiking-map.png" alt="Hiking route: First - Bachalpsee - Bort" class="mapImage" />
                </a>
            </div>

            <div class="bringBox">
                <h2>{content[lang].whatToBring}</h2>
                <div class="items">
                    <div class="item">
                        <span class="itemIcon">🥾</span>
                        <p>{content[lang].item1}</p>
                    </div>
                    <div class="item">
                        <span class="itemIcon">💧</span>
                        <p>{content[lang].item2}</p>
                    </div>
                    <div class="item">
                        <span class="itemIcon">🧥</span>
                        <p>{content[lang].item3}</p>
                    </div>
                    <div class="item">
                        <span class="itemIcon">☀️</span>
                        <p>{content[lang].item4}</p>
                    </div>
                </div>
            </div>

            <div class="registrationBox">
                <p class="free">{content[lang].free}</p>
                <a href="https://wa.me/{content[lang].phone.replace(/[^0-9]/g, '')}?text={encodeURIComponent(content[lang].whatsappMessage)}" class="btn registerMainBtn" target="_blank" rel="noopener noreferrer">
                    🥾 {content[lang].registerBtn}
                </a>
            </div>

            <div class="questionsBox">
                <h3>{content[lang].questionsTitle}</h3>
                <p>{content[lang].questionsDesc}</p>
                <a href="https://wa.me/{content[lang].phone.replace(/[^0-9]/g, '')}?text={encodeURIComponent(content[lang].whatsappMessage)}" class="btn whatsappBtn" target="_blank" rel="noopener noreferrer">
                    💬 WhatsApp
                </a>
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

    .statsBox {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0.8em;
    }

    @media (max-width: 500px) {
        .statsBox {
            grid-template-columns: 1fr 1fr;
        }
    }

    .stat {
        background: rgba(255, 255, 255, 0.05);
        padding: 1em;
        border-radius: 0.8em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        gap: 0.3em;
        text-align: center;
    }

    .statLabel {
        font-size: 0.85em;
        opacity: 0.7;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .statValue {
        font-size: 1.05em;
        font-weight: 600;
    }

    .statValue.medium {
        color: #000;
    }

    .mapBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .mapBox h2 {
        font-size: 1.3em;
        margin: 0 0 1em;
        text-align: center;
    }

    .mapLink {
        display: block;
        text-decoration: none;
        cursor: pointer;
        border-radius: 0.5em;
        overflow: hidden;
        transition: opacity 0.2s ease;
    }

    .mapLink:hover {
        opacity: 0.85;
    }

    .mapImage {
        width: 100%;
        border-radius: 0.5em;
        display: block;
    }

    .bringBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .bringBox h2 {
        font-size: 1.3em;
        margin: 0 0 1em;
        text-align: center;
    }

    .items {
        display: flex;
        flex-direction: column;
        gap: 0.8em;
    }

    .item {
        display: flex;
        align-items: flex-start;
        gap: 0.8em;
    }

    .itemIcon {
        font-size: 1.3em;
        min-width: 28px;
        text-align: center;
    }

    .item p {
        margin: 0;
        font-size: 1em;
        line-height: 1.5;
    }

    .routeBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
    }

    .routeBox h2 {
        font-size: 1.3em;
        margin: 0 0 0.5em;
    }

    .routeBox p {
        margin: 0;
        font-size: 1em;
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

    .free {
        font-size: 1.2em;
        font-weight: 600;
        margin: 0;
        color: #6ddb8a;
    }

    .registerMainBtn {
        padding: 0.8em 1.5em;
        font-size: 1.15em;
        text-decoration: none;
        border-radius: 0.5em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid rgba(255, 255, 255, 0.3);
        background: rgba(100, 180, 100, 0.3);
        color: white;
        display: inline-block;
        width: auto;
    }

    .registerMainBtn:hover {
        transform: scale(1.03);
        background: rgba(100, 180, 100, 0.4);
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
