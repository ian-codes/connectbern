<svelte:head>
    <title>{data?.group?.name?.[lang] ?? "Loading..."} • Connect Bern</title>
</svelte:head>

<script>
    export let data;
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const facebookGroups = [
        {
            name: "What's Up Bern",
            description: {
                de: "11'000+ Mitglieder - Hauptsächlich Englisch",
                en: "11,000+ members - Mainly English"
            },
            link: "https://www.facebook.com/groups/whatsupbern"
        },
        {
            name: "WasWieWo in Bern",
            description: {
                de: "9'000+ Mitglieder - Hauptsächlich Deutsch",
                en: "9,000+ members - Mainly German"
            },
            link: "https://www.facebook.com/groups/1635471893334659"
        },
        {
            name: "People Of Bern",
            description: {
                de: "7'000+ Mitglieder - Beide Sprachen gleichmässig",
                en: "7,000+ members - Both languages equally"
            },
            link: "https://www.facebook.com/groups/1939547412940225/"
        }
    ];
</script>

<section>
    <a class="btn back" href="/groups#{data?.group?.slug ?? ""}">
        <span>→</span>Back
    </a>

    <div class="content">
        <h1>{data?.group?.name?.[lang] ?? "Loading..."}</h1>

        <p class="intro">
            {#if lang === "de"}
                Hier sind aktive Facebook-Gruppen in Bern, in denen du Leute finden kannst:
            {:else}
                Here are active Facebook groups in Bern where you can find people:
            {/if}
        </p>

        <div class="groups-list">
            {#each facebookGroups as group}
                <a href={group.link} target="_blank" rel="noopener noreferrer" class="group-card">
                    <div class="group-icon">📘</div>
                    <div class="group-info">
                        <h3>{group.name}</h3>
                        <p>{group.description[lang]}</p>
                    </div>
                    <div class="join-arrow">→</div>
                </a>
            {/each}
        </div>
    </div>
</section>

<style>
    section {
        padding: 2em 1em;
        max-width: 1000px;
        margin: 0 auto;
    }

    .back {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        background: black;
        opacity: .5;
        width: max-content;
        padding: .8em 1.2em;
        transition: all .1s ease;
        text-decoration: none;
        color: white;
        border-radius: 0.5em;
        margin-bottom: 2em;
    }

    .back span {
        margin-top: 3px;
        transform: rotate(180deg);
    }

    .back:hover {
        transform: scale(1.02);
        opacity: 0.8;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    h1 {
        font-size: 2.5em;
        font-weight: bold;
        margin: 0;
        color: white;
    }

    .intro {
        font-size: 1.2em;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.9);
        margin: 0;
    }

    .groups-list {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .group-card {
        display: flex;
        align-items: center;
        gap: 1.5em;
        padding: 1.5em 2em;
        background: linear-gradient(135deg, rgba(24, 119, 242, 0.1), rgba(13, 93, 191, 0.1));
        border: 2px solid rgba(24, 119, 242, 0.3);
        border-radius: 1em;
        text-decoration: none;
        color: white;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .group-card:hover {
        transform: translateY(-3px);
        background: linear-gradient(135deg, rgba(24, 119, 242, 0.2), rgba(13, 93, 191, 0.2));
        border-color: rgba(24, 119, 242, 0.5);
        box-shadow: 0 8px 25px rgba(24, 119, 242, 0.3);
    }

    .group-icon {
        font-size: 3em;
        flex-shrink: 0;
    }

    .group-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .group-info h3 {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        color: white;
    }

    .group-info p {
        font-size: 1em;
        margin: 0;
        color: rgba(255, 255, 255, 0.8);
    }

    .join-arrow {
        font-size: 2em;
        flex-shrink: 0;
        transition: transform 0.3s ease;
    }

    .group-card:hover .join-arrow {
        transform: translateX(5px);
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2em;
        }

        .intro {
            font-size: 1.1em;
        }

        .group-card {
            padding: 1.2em 1.5em;
            gap: 1em;
        }

        .group-icon {
            font-size: 2.5em;
        }

        .group-info h3 {
            font-size: 1.2em;
        }

        .group-info p {
            font-size: 0.9em;
        }

        .join-arrow {
            font-size: 1.5em;
        }
    }
</style>
