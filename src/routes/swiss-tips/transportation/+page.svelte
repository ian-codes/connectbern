<script>
    import { getContext, onMount } from 'svelte';
    import { currentLanguage } from '$lib/stores/languageStore';

    const scrollToContent = getContext('scrollToContent');
    $: lang = $currentLanguage;

    onMount(() => {
        scrollToContent();
    });

    const content = {
        de: {
            title: "Transport",
            warning: "WARNUNG für Erstnutzer der SBB: Vorsicht bei Preisänderungen in der SBB App - der Preis ist tatsächlich doppelt so hoch!",
            longDistance: "Fernreisen",
            hitchhike: {
                title: "Wenn du trampen möchtest:",
                spots: "Tramperstellen",
                wiki: "Tramperwiki"
            },
            blablacar: {
                title: "Mitfahrgelegenheiten",
                text: "Du kannst eine Fahrt auf",
                cheap: "für sehr günstig bekommen und du kannst auch",
                try: "ausprobieren"
            },
            flixbus: {
                title: "Flixbus-Trick",
                text: "Reisen mit Flixbus innerhalb der Schweiz ist ebenfalls möglich. Flixbus darf anscheinend noch keine Fahrten innerhalb der Schweiz anbieten (Kabotageverbots), deshalb tun sie es nicht, aber wenn du ein Ticket nach Freiburg in Deutschland kaufst, wenn du von Bern nach Basel fährst, kannst du einfach in Basel aussteigen und es ist in manchen Fällen immer noch viel günstiger als der Zug. Dasselbe gilt für Zürich, wenn du von Bern nach Lindau in Deutschland oder Bregenz in Österreich reist oder nach Bern für nur 13,50, kannst du einfach in Zürich aussteigen. Keine Garantie, aber es scheint so, als ob wenn du diese Fahrten von Bern und dann von Basel/Zürich suchst, die gleiche Ankunftszeit angezeigt wird, was ein ziemlich starker Indikator ist, schau dir den Trip-Tab an, er zeigt alle Haltestellen."
            },
            freeRides: {
                title: "Kostenlose Mitfahrgelegenheiten",
                text: "Mit viel Glück kannst du vielleicht eine kostenlose Fahrt in diesen Gruppen nach oder von Bern finden:",
                whatsapp: "WhatsApp",
                telegram: "Telegram",
                other: "Andere Städte, wenn du auch in anderen ähnlichen Gruppen außer der Berner dein Glück versuchen möchtest, kannst du nach \"mitfahren\" oder \"mitfahrgelegenheit\" hier suchen:",
                switzerland: "(es gibt auch eine für die ganze Schweiz)"
            },
            nightPass: {
                title: "Nachtabonnement (Unter 25)",
                text: "Wenn du unter 25 Jahre alt bist, kannst du für 99 Franken ein Jahr lang durch die Schweiz reisen, immer nach 19 Uhr. Einige Gondelbahnen und Boote sind inbegriffen.",
                buy: "Auf SBB Website ansehen"
            },
            cityTitle: "Innerhalb der Stadt (Bern)",
            bike: {
                title: "Fahrräder",
                text: "Du kannst im Projekthaus nachfragen, ob wir ein Fahrrad verfügbar haben. Du kannst auch diese Website ausprobieren, um kostenlos ein Fahrrad zu leihen",
                link: "Pumpipumpe Karte"
            },
            fairtiq: {
                title: "FAIRTIQ App - 3 CHF gratis",
                text: "Du kannst 1 kostenlose Fahrt (nur 3 Franken) mit öffentlichen Verkehrsmitteln bekommen, wenn du dich bei einer App namens FAIRTIQ registrierst und einen Code von jemand anderem verwendest - zum Beispiel diesen Code",
                android: "Android App",
                apple: "iOS App"
            },
            busMap: {
                title: "Bushaltestellenplan",
                subtitle: "Bushaltestellenplan am Hauptbahnhof (zum Vergrößern klicken):"
            },
            parking: {
                title: "Parken",
                text: "Parkplätze mit blauer Linie sind nur sonntags kostenlos. Aber auch nicht jede blaue Parkzone. Lies immer die Schilder sorgfältig durch, verwende Google Lens zum Übersetzen, falls nötig. Es gibt ein Ticket zu kaufen, um auf den blauen Linien zu parken:",
                day: "19 Franken für 24 Stunden",
                hours: "9 Franken für 4 Stunden"
            }
        },
        en: {
            title: "Transportation",
            warning: "WARNING for first-time users of the SBB: Beware of price changes on the SBB app - the price is actually double!",
            longDistance: "Long-distance Traveling",
            hitchhike: {
                title: "If you want to hitchhike:",
                spots: "Hitchhike Spots",
                wiki: "Hitchhike Wiki"
            },
            blablacar: {
                title: "Ridesharing",
                text: "You can get a ride on",
                cheap: "for very cheap and you can try",
                try: "try"
            },
            flixbus: {
                title: "Flixbus Hack",
                text: "Traveling via Flixbus is also possible inside of Switzerland. Flixbus is apparently not allowed yet to offer rides inside of Switzerland (Kabotageverbots) so they don't do it but if you buy a ticket to Freiburg in Germany when you're going to Basel from Bern you can just get off in Basel and it's still much cheaper in some cases than paying for the train. The same goes for Zürich if you travel to Lindau in Germany or Bregenz in Austria from Bern or to Bern as cheap as 13.50 you can just get off at Zürich. No guarantee but it seems like when you look for these rides from Bern and then from Basel/Zürich it shows the same arrival time which is a pretty strong indicator, check on the trip tab, it shows all the stops."
            },
            freeRides: {
                title: "Free Rides",
                text: "If you're very lucky you can maybe find a ride for free in these groups to or from Bern:",
                whatsapp: "WhatsApp",
                telegram: "Telegram",
                other: "Other cities, if you want to also try your luck in other similiar groups besides the Bernese one you can look for the \"mitfahren\" or \"mitfahrgelegenheit\" here:",
                switzerland: "(there is also 1 for all of Switzerland)"
            },
            nightPass: {
                title: "Night Pass (Under 25)",
                text: "If you are under 25 years old, you can travel around switzerland for one year for 99 francs, always after 7pm. Some gondola lifts and boats are included.",
                buy: "See on SBB Website"
            },
            cityTitle: "Inside the City (Bern)",
            bike: {
                title: "Bikes",
                text: "You can check at the project house if we have a bike available. You can also try this website to borrow a bike for free",
                link: "Pumpipumpe Map"
            },
            fairtiq: {
                title: "FAIRTIQ App - 3 CHF Free",
                text: "You can get 1 free ride (only 3 franks) with public transportation if you register to an app called FAIRTIQ if you use a code from someone else - for example this code",
                android: "Android App",
                apple: "iOS App"
            },
            busMap: {
                title: "Bus Stop Map",
                subtitle: "Bus stop map at central station (tap to enlarge):"
            },
            parking: {
                title: "Parking",
                text: "Parking spots with blue line are only free on sunday. But also not every blue parking zone. Always read the signs carefully, use google lens to translate if needed. There is a ticket to buy to park the car on the blue lines:",
                day: "19 francs for 24 hours",
                hours: "9 francs for 4 hours"
            }
        }
    };
</script>

<div class="section">
    <div class="header">
        <h2>{content[lang].title}</h2>
        <div class="warning-box">
            <span class="warning-icon">⚠️</span>
            {content[lang].warning}
        </div>
    </div>

    <!-- Long Distance -->
    <div class="category-section">
        <h3 class="category-title">🚗 {content[lang].longDistance}</h3>

        <!-- Hitchhiking -->
        <div class="tip-card">
            <h4>{content[lang].hitchhike.title}</h4>
            <div class="button-group compact">
                <a href="https://hitchspots.me" class="btn btn-compact btn-primary" target="_blank" rel="noopener noreferrer">
                    🗺️ {content[lang].hitchhike.spots}
                </a>
                <a href="https://hitchwiki.org/en/Bern" class="btn btn-compact btn-primary" target="_blank" rel="noopener noreferrer">
                    📖 {content[lang].hitchhike.wiki}
                </a>
            </div>
        </div>

        <!-- BlaBlaCar -->
        <div class="tip-card">
            <h4>{content[lang].blablacar.title}</h4>
            <p>{content[lang].blablacar.text} <strong>BlaBlaCar</strong> {content[lang].blablacar.cheap} <strong>BlaBlaCar Daily</strong></p>
            <div class="button-group compact">
                <a href="https://blablacar.com" class="btn btn-compact btn-primary" target="_blank" rel="noopener noreferrer">
                    🚗 BlaBlaCar
                </a>
                <a href="https://www.blablacardaily.com/" class="btn btn-compact btn-primary" target="_blank" rel="noopener noreferrer">
                    🚙 BlaBlaCar Daily
                </a>
            </div>
        </div>

        <!-- Flixbus -->
        <div class="tip-card highlight">
            <h4>💡 {content[lang].flixbus.title}</h4>
            <p>{content[lang].flixbus.text}</p>
        </div>

        <!-- Free Rides -->
        <div class="tip-card">
            <h4>{content[lang].freeRides.title}</h4>
            <p>{content[lang].freeRides.text}</p>
            <div class="button-group compact">
                <a href="https://tiny.cc/mitfahrenbernwhatsapp" class="btn btn-compact btn-success" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/whatsapp.svg" alt="WhatsApp" class="btn-icon" />
                    {content[lang].freeRides.whatsapp}
                </a>
                <a href="https://tiny.cc/mitfahrenbern" class="btn btn-compact btn-info" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/telegram.svg" alt="Telegram" class="btn-icon" />
                    {content[lang].freeRides.telegram}
                </a>
            </div>

            <p class="sub-text">{content[lang].freeRides.other} <a href="/groups/non-commercial-marketplaces" class="inline-link">🌍 Telegram Sammlung</a> {content[lang].freeRides.switzerland}</p>
        </div>

        <!-- Night Pass -->
        <div class="tip-card accent">
            <h4>🌙 {content[lang].nightPass.title}</h4>
            <p>{content[lang].nightPass.text}</p>
            <div class="button-spacer">
                <a href="https://www.sbb.ch/de/kampagne/night.html" class="btn btn-compact btn-primary" target="_blank" rel="noopener noreferrer">
                    🎫 {content[lang].nightPass.buy}
                </a>
            </div>
        </div>
    </div>

    <!-- City Transportation -->
    <div class="category-section">
        <h3 class="category-title">🚲 {content[lang].cityTitle}</h3>

        <!-- Bikes -->
        <div class="tip-card">
            <h4>{content[lang].bike.title}</h4>
            <p>{content[lang].bike.text}</p>
            <div class="button-spacer">
                <a href="https://map.pumpipumpe.ch" class="btn btn-compact btn-primary" target="_blank" rel="noopener noreferrer">
                    🚴 {content[lang].bike.link}
                </a>
            </div>
        </div>

        <!-- FAIRTIQ -->
        <div class="tip-card accent">
            <h4>🎁 {content[lang].fairtiq.title}</h4>
            <p>{content[lang].fairtiq.text} <code class="code-badge">MCW8ZTR5S</code></p>
            <div class="button-group compact">
                <a href="https://play.google.com/store/apps/details?id=com.fairtiq.android" class="btn btn-compact btn-success" target="_blank" rel="noopener noreferrer">
                    📱 {content[lang].fairtiq.android}
                </a>
                <a href="https://apps.apple.com/ch/app/fairtiq/id1094360403?l=en" class="btn btn-compact btn-primary" target="_blank" rel="noopener noreferrer">
                    📱 {content[lang].fairtiq.apple}
                </a>
            </div>
        </div>

        <!-- Bus Stop Map -->
        <div class="tip-card">
            <h4>🗺️ {content[lang].busMap.title}</h4>
            <p class="sub-text">{content[lang].busMap.subtitle}</p>
            <a href="https://chagai.website/hbf_plan.jpg" target="_blank" class="map-link">
                <img src="https://chagai.website/hbf_plan.jpg" alt="Bern Hauptbahnhof map" class="map-image">
            </a>
        </div>
    </div>

    <!-- Parking -->
    <div class="category-section">
        <h3 class="category-title">🅿️ {content[lang].parking.title}</h3>
        <div class="tip-card">
            <p>{content[lang].parking.text}</p>
            <ul class="pricing-list">
                <li>💰 {content[lang].parking.day}</li>
                <li>💰 {content[lang].parking.hours}</li>
            </ul>
        </div>
    </div>
</div>

<style>
    .section {
        padding: 0;
    }

    .header {
        margin-bottom: 2rem;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: white;
    }

    .warning-box {
        background: rgba(255, 193, 7, 0.15);
        border-left: 4px solid #ffc107;
        padding: 1rem 1.25rem;
        border-radius: 8px;
        font-size: 0.95rem;
        line-height: 1.6;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .warning-icon {
        font-size: 1.5rem;
    }

    .category-section {
        margin-bottom: 3rem;
    }

    .category-title {
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
        color: white;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    }

    .tip-card {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        transition: all 0.3s ease;
    }

    .tip-card:hover {
        background: rgba(255, 255, 255, 0.08);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .tip-card.highlight {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.15);
    }

    .tip-card.accent {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.15);
    }

    h4 {
        font-size: 1.3rem;
        font-weight: bold;
        margin: 0 0 1rem 0;
        color: white;
    }

    p {
        font-size: 1.05rem;
        line-height: 1.7;
        margin-bottom: 1rem;
        color: rgba(255, 255, 255, 0.9);
    }

    .sub-text {
        font-size: 0.95rem;
        opacity: 0.8;
        margin-top: 1rem;
    }

    .button-group {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 1rem;
    }

    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1.25rem;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        transition: all 0.2s ease;
        border: none;
        cursor: pointer;
        white-space: nowrap;
    }

    .btn-primary {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .btn-primary:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-2px);
    }

    .btn-success {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .btn-success:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-2px);
    }

    .btn-info {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .btn-info:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-2px);
    }

    .btn-secondary {
        background: rgba(255, 255, 255, 0.15);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.25);
        transform: translateY(-2px);
    }

    .btn-compact {
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
        width: auto;
        max-width: fit-content;
    }

    .btn-icon {
        width: 1.2rem;
        height: 1.2rem;
        margin-right: 0.5rem;
    }

    .button-group.compact {
        flex-wrap: wrap;
    }

    .inline-link {
        color: rgba(255, 255, 255, 0.9);
        text-decoration: underline;
        text-decoration-color: rgba(255, 255, 255, 0.5);
        transition: all 0.2s ease;
    }

    .inline-link:hover {
        color: white;
        text-decoration-color: rgba(255, 255, 255, 0.8);
    }

    .button-spacer {
        padding-top: 2.5rem;
        display: block;
    }

    .code-badge {
        background: rgba(0, 0, 0, 0.3);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-family: monospace;
        font-size: 0.9rem;
        color: #ffc107;
        font-weight: bold;
    }

    .map-link {
        display: block;
        margin-top: 1rem;
        border-radius: 8px;
        overflow: hidden;
        transition: transform 0.3s ease;
    }

    .map-link:hover {
        transform: scale(1.02);
    }

    .map-image {
        width: 100%;
        max-width: 600px;
        height: auto;
        display: block;
        border-radius: 8px;
    }

    .pricing-list {
        list-style: none;
        padding: 0;
        margin: 1rem 0 0 0;
    }

    .pricing-list li {
        padding: 0.5rem 0;
        font-size: 1.05rem;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2rem;
        }

        .category-title {
            font-size: 1.5rem;
        }

        .tip-card {
            padding: 1.25rem;
        }

        .button-group {
            flex-direction: column;
        }

        .button-group.compact {
            flex-direction: row;
            flex-wrap: wrap;
        }

        .btn {
            width: 100%;
        }

        .btn-compact {
            width: auto;
            max-width: fit-content;
        }

        .button-spacer {
            padding-top: 3rem;
        }
    }
</style>
