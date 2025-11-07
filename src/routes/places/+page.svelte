<svelte:head>
	<title>Places • Connect Bern </title>
</svelte:head>

<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    import { getContext, onMount } from 'svelte';

    const scrollToContent = getContext('scrollToContent');

    onMount(() => {
        scrollToContent();
    });

    $: lang = $currentLanguage;

    const places = [
        {
            name: "Berner Generationenhaus",
            mapUrl: "https://maps.app.goo.gl/w1YDLT3DYaBVSfMw6",
            website: "https://www.begh.ch/",
            icon: "🏠",
            description: {
                en: "A place where you can just sit down without ordering anything. Bring your friends and study together! They organize lots of events. Very central, right next to the Central Station. A cozy government-organized space focused on bringing people together.",
                de: "Ein Ort, wo du einfach sitzen kannst, ohne etwas zu bestellen. Bring deine Freunde mit und lernt zusammen! Sie organisieren viele Events. Sehr zentral, direkt beim Hauptbahnhof. Ein gemütlicher, vom Staat organisierter Raum, der Menschen zusammenbringt."
            }
        },
        {
            name: "Erupt",
            mapUrl: "https://maps.app.goo.gl/vLi6xDad6EdhPdF57",
            website: "http://erupt.ch/",
            icon: "🎮",
            description: {
                en: "A gaming bar that's very social with lots of social events. Open to people meeting each other, running not for money but to be a social place. Main focus on gaming but everyone is welcome, even if you're not into gaming!",
                de: "Eine Gaming-Bar, die sehr sozial ist mit vielen sozialen Events. Offen für Menschen, die sich treffen möchten, läuft nicht für Geld, sondern um ein sozialer Ort zu sein. Hauptfokus auf Gaming, aber alle sind willkommen, auch wenn du nicht auf Gaming stehst!"
            }
        },
        {
            name: "Heitere Fahne",
            mapUrl: "https://maps.app.goo.gl/JSP5R3n5Ume8qtLq8",
            website: "https://www.dieheiterefahne.ch/",
            icon: "🎪",
            description: {
                en: "A place with a very strong left-wing orientation. Very social and accepting of everyone with lovely people. They have lots of events with a focus on being socially active in a left-wing sense.",
                de: "Ein Ort mit sehr starker linker Orientierung. Sehr sozial und offen für alle mit lieben Menschen. Sie haben viele Events mit Fokus darauf, sozial aktiv zu sein im linken Sinne."
            }
        },
        {
            name: "Reitschule",
            mapUrl: "https://maps.app.goo.gl/JSP5R3n5Ume8qtLq8",
            website: "https://reitschule.ch/",
            icon: "🏛️",
            description: {
                en: "A place with a very strong left-wing orientation. Very social and accepting of everyone with lovely people. They have lots of events with a focus on being socially active in a left-wing sense.",
                de: "Ein Ort mit sehr starker linker Orientierung. Sehr sozial und offen für alle mit lieben Menschen. Sie haben viele Events mit Fokus darauf, sozial aktiv zu sein im linken Sinne."
            }
        },
        {
            name: "PROGR Turnhalle",
            mapUrl: "https://maps.app.goo.gl/vgBkbAwSi9X1Rz717",
            website: "https://www.progr.ch/",
            icon: "🏢",
            description: {
                en: "A very left-wing place with a focus on concerts and cultural events. Especially dedicated to art and music concerts.",
                de: "Ein sehr linker Ort mit Fokus auf Konzerte und kulturelle Events. Besonders gewidmet Kunst und Musikkonzerten."
            }
        },
        {
            name: "English Club of Bern",
            mapUrl: "https://maps.app.goo.gl/KjFE3FX8mrqHDSQy5",
            website: "http://englishclub.ch/",
            icon: "🗣️",
            description: {
                en: "A very cool place to speak English and meet English-speaking people or others who came to practice English and meet people. Very international with a strong focus on connecting people. Public opening hours on Friday and Saturday, but they're very open to connecting outside those hours too!",
                de: "Ein sehr cooler Ort, um Englisch zu sprechen und englischsprachige Menschen oder andere zu treffen, die gekommen sind, um Englisch zu üben und Leute zu treffen. Sehr international mit starkem Fokus auf Menschen zu verbinden. Öffentliche Öffnungszeiten Freitag und Samstag, aber sie sind sehr offen dafür, auch außerhalb dieser Zeiten Menschen zu verbinden!"
            }
        }
    ];
</script>

<section>
    <div class="header">
        <h1>Places</h1>
        <p class="page-description">
            {@html t[lang]['places-description']}
        </p>
    </div>

    <div class="placesGrid">
        {#each places as place}
            <div class="placeCard">
                <div class="placeIcon">{place.icon}</div>
                <div class="placeContent">
                    <h3>{place.name}</h3>
                    <p class="placeDescription">{place.description[lang]}</p>
                    <div class="placeLinks">
                        <a href={place.website} class="placeLink websiteLink" target="_blank" rel="noopener noreferrer">
                            🌐 Website →
                        </a>
                        <a href={place.mapUrl} class="placeLink mapLink" target="_blank" rel="noopener noreferrer">
                            📍 Map →
                        </a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    section {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2em 1em;
    }

    .header {
        text-align: center;
        margin-bottom: 3em;
    }

    h1 {
        font-size: 3em;
        font-weight: bold;
        margin-bottom: 0.5em;
    }

    .page-description {
        font-size: 1.3em;
        opacity: 0.9;
        line-height: 1.6;
        max-width: 800px;
        margin: 0 auto;
    }

    .placesGrid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 1.5em;
        margin-top: 2em;
    }

    .placeCard {
        background: linear-gradient(135deg,
            rgba(108, 72, 167, 0.15),
            rgba(58, 152, 189, 0.15)
        );
        border: 2px solid rgba(108, 72, 167, 0.3);
        border-radius: 1em;
        padding: 2em;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
        color: white;
        transition: all 0.3s ease;
        text-align: center;
    }

    .placeCard:hover {
        transform: translateY(-5px);
        background: linear-gradient(135deg,
            rgba(108, 72, 167, 0.25),
            rgba(58, 152, 189, 0.25)
        );
        border-color: rgba(108, 72, 167, 0.5);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .placeIcon {
        font-size: 3em;
        margin-bottom: 0.3em;
    }

    .placeContent {
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
        width: 100%;
    }

    .placeContent h3 {
        font-size: 1.4em;
        font-weight: bold;
        margin: 0;
    }

    .placeDescription {
        font-size: 1em;
        line-height: 1.5;
        opacity: 0.9;
        margin: 0;
    }

    .placeLinks {
        display: flex;
        gap: 0.8em;
        margin-top: 0.5em;
        flex-wrap: wrap;
        justify-content: center;
    }

    .placeLink {
        padding: 0.6em 1.2em;
        border-radius: 0.5em;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95em;
        transition: all 0.2s ease;
        border: 2px solid rgba(255, 255, 255, 0.3);
        display: inline-flex;
        align-items: center;
        gap: 0.3em;
    }

    .websiteLink {
        background: rgba(58, 152, 189, 0.4);
        color: white;
    }

    .websiteLink:hover {
        background: rgba(58, 152, 189, 0.6);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(58, 152, 189, 0.4);
    }

    .mapLink {
        background: rgba(108, 72, 167, 0.4);
        color: white;
    }

    .mapLink:hover {
        background: rgba(108, 72, 167, 0.6);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(108, 72, 167, 0.4);
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2em;
        }

        .page-description {
            font-size: 1.1em;
        }

        .placesGrid {
            grid-template-columns: 1fr;
            gap: 1em;
        }

        .placeCard {
            padding: 1.5em;
        }
    }
</style>