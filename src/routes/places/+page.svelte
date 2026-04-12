<svelte:head>
	<title>Places • Connect Bern </title>
</svelte:head>

<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    import { getContext, onMount } from 'svelte';
    import BernMap from "$lib/components/map/BernMap.svelte";
    import { TOP_5_PLACES } from "$lib/data/places.data.js";


    let scrollToContent;
    try {
        scrollToContent = getContext('scrollToContent');
    } catch (e) {
        // Context not available, create a no-op function
        scrollToContent = () => {};
    }

    onMount(() => {
        if (scrollToContent) {
            scrollToContent();
        }
    });

    $: lang = $currentLanguage;
    const places = TOP_5_PLACES;
</script>

<section>
    <div class="header">
        <h1>Places</h1>
        <p class="page-description">
            {@html t[lang]['places-description']}
        </p>
    </div>

    <BernMap></BernMap>

    <div class="placesGrid">
        {#each places as place}
            <div class="placeCard">
                <div class="placeIcon">{place.icon}</div>
                <div class="placeContent">
                    <div>
                        <h3>{place.name}</h3>
                        <p class="placeDescription">{place.description[lang]}</p>
                    </div>
                    <div class="placeLinks">
                        <a href={place.website} class="placeLink websiteLink" target="_blank" rel="noopener noreferrer">
                            🌐 {t[lang]['places-website']} →
                        </a>
                        <a href={place.mapUrl} class="placeLink mapLink" target="_blank" rel="noopener noreferrer">
                            📍 {t[lang]['places-map']} →
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
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }

    h3 {
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
        width: 100%;
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