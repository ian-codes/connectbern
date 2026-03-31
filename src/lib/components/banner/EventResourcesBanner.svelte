<script>
    import { t } from "$lib/locales/eventResourcesTranslations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    $: lang = $currentLanguage;
    
    const data = [
        {
            link: "https://www.facebook.com/events/?date_filter_option=TODAY&discover_tab=LOCAL",
            icon: "📘",
            langKey: "fb"
        },
        {
            link: "https://meetup.com",
            icon: "👥", 
            langKey: "meetup"
        },
        {
            link: "https://gemeinsamerleben.com/orte-und-regionen/schweiz/bern",
            icon: "🤝",
            langKey: "spontacts"
        },
        {
            link: "https://www.reitschule.ch/reitschule/?programm",
            icon: "🏛️",
            langKey: "reitschule"
        },
        {
            link: "https://www.dieheiterefahne.ch/menu",
            icon: "🎪",
            langKey: "heitere-fahne"
        },
        {
            link: "https://bern.impacthub.net/events-erleben",
            icon: "💡",
            langKey: "impact-hub"
        },
        {
            link: "https://www.reddit.com/r/bern/",
            icon: "💬",
            langKey: "reddit"
        }
    ]
</script>


<div class="resourcesTile">
    <p class="tileDescription">{t[lang]["event-resources-title"]}</p>

    <div class="resourceCards">
        {#each data as res, i}
        <a href={res.link} class="resourceCard" target="_blank" rel="noopener noreferrer">
            <span class="resourceIcon">{res.icon}</span>
            <h3>{t[lang][res.langKey]}</h3>
            <p>{t[lang][res.langKey+"-desc"]}</p>
        </a>
        {/each}
    </div>
</div>

<style>
    .resourcesTile {
        background: linear-gradient(135deg, rgba(108, 72, 167, 0.1), rgba(58, 152, 189, 0.1));
        border: 2px solid rgba(108, 72, 167, 0.3);
        border-radius: 1.5em;
        padding: 2.5em;
        margin: 0.5em 0 2em 0;
    }

    .tileDescription {
        text-align: center;
        font-size: 1.2em;
        opacity: 0.9;
        margin-bottom: 2em;
    }

    .resourceCards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1em;
        margin-top: 2em;
    }

    @media (max-width: 1000px) {
        .resourceCards {
            grid-template-columns: 1fr;
        }
    }

    .resourceCard {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1em;
        padding: 1.2em;
        text-align: center;
        text-decoration: none;
        color: white;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        transition: all 0.3s ease;
    }

    .resourceCard:hover {
        transform: translateY(-3px);
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }

    .resourceIcon {
        font-size: 2.5em;
        margin-bottom: 0.2em;
    }

    .resourceCard h3 {
        font-size: 1.1em;
        font-weight: bold;
        margin: 0;
        word-wrap: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
    }

    .resourceCard p {
        font-size: 0.9em;
        opacity: 0.8;
        margin: 0;
        line-height: 1.5;
        max-width: 100%;
    }

    @media (max-width: 768px) {
        .resourceCard h3 {
            font-size: 0.95em;
            line-height: 1.3;
        }

        .resourceCard p {
            font-size: 0.85em;
        }

        .resourcesTile {
            padding: 1.5em;
        }

        .resourceCards {
            grid-template-columns: 1fr;
            gap: 0.8em;
        }
    }
</style>