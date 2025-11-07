<svelte:head>
	<title>Similar Projects • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';
    import { getContext, onMount } from 'svelte';

    const scrollToContent = getContext('scrollToContent');

    onMount(() => {
        scrollToContent();
    });

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Ähnliche Projekte",
            intro: "Andere großartige Projekte und Ressourcen, um Verbindungen zu schaffen und Einsamkeit zu bekämpfen.",
            bern: {
                title: "Projekte in Bern",
                subtitle: "Verbindungen in Bern schaffen"
            },
            cities: {
                title: "🏔️ Projekte in anderen Schweizer Städten",
                subtitle: "Menschen in der ganzen Schweiz verbinden"
            }
        },
        en: {
            title: "Similar Projects",
            intro: "Other great projects and resources to build connections and combat loneliness.",
            bern: {
                title: "Projects in Bern",
                subtitle: "Building connections in Bern"
            },
            cities: {
                title: "🏔️ Projects in Other Swiss Cities",
                subtitle: "Connecting people across Switzerland"
            }
        }
    };

    const projects = {
        bern: [
            {
                name: "Uneinsam",
                location: { de: "Bern & Schweiz", en: "Bern & Switzerland" },
                description: {
                    de: "Großartige Ratschläge und Ressourcen, um weniger einsam zu sein – besonders in Bern und der ganzen Schweiz.",
                    en: "Great advice and resources on how to be less lonely – especially in Bern and throughout Switzerland."
                },
                url: "https://uneinsam.ch/",
                icon: "💙",
                image: "/images/uneinsam.png",
                rectangular: true  // Makes this image rectangular instead of circular
            },
            {
                name: "Let's Bern",
                location: { de: "Bern", en: "Bern" },
                description: {
                    de: "Community-Projekt, das Menschen in Bern durch Events und Aktivitäten zusammenbringt.",
                    en: "Community project bringing people together in Bern through events and activities."
                },
                url: "https://linktr.ee/letsbern",
                icon: "🎉",
                image: "/groups/lets-bern.webp"
            }
        ],
        cities: [
            {
                name: "The Social Circle",
                location: { de: "Zürich", en: "Zurich" },
                description: {
                    de: "Menschen in Zürich verbinden durch soziale Events und Aktivitäten.",
                    en: "Connecting people in Zurich through social events and activities."
                },
                url: "https://social-circle.ch/",
                icon: "🎯",
                image: "/images/socialcircle.jpg"
            },
            {
                name: "Oh So Social Club",
                location: { de: "Basel", en: "Basel" },
                description: {
                    de: "Soziale Events und Community-Building in Basel.",
                    en: "Social events and community building in Basel."
                },
                url: "https://www.instagram.com/ohsosocialclub",
                icon: "🎪",
                image: "/images/ohsosocial.jpg"
            },
            {
                name: "GoSocial",
                location: { de: "Lausanne & Genf", en: "Lausanne & Geneva" },
                description: {
                    de: "Menschen in der französischsprachigen Schweiz zusammenbringen.",
                    en: "Bringing people together in French-speaking Switzerland."
                },
                url: "https://www.instagram.com/gosocial_ch",
                icon: "🎉",
                image: "/images/gosocial.jpg"
            }
        ]
    };
</script>

<section>
    <div class="header">
        <h1>{content[lang].title}</h1>
        <p class="intro">{content[lang].intro}</p>
    </div>

    <!-- Bern Projects -->
    <div class="categorySection">
        <div class="categoryHeader">
            <h2>{content[lang].bern.title}</h2>
            <p class="categorySubtitle">{content[lang].bern.subtitle}</p>
        </div>
        <div class="projectsGrid">
            {#each projects.bern as project}
                <a href={project.url} class="projectCard" target="_blank" rel="noopener noreferrer">
                    {#if project.image}
                        <div class="projectImageWrapper" class:rectangular={project.rectangular}>
                            <img
                                src={project.image}
                                alt={project.name}
                                class="projectImage"
                                class:scaled={project.imageScale}
                                style={project.imageScale ? `--image-scale: ${project.imageScale}` : ''}
                            />
                        </div>
                    {:else}
                        <div class="projectIcon">{project.icon}</div>
                    {/if}
                    <div class="projectContent">
                        <h3>{project.name}</h3>
                        <p class="location">{project.location[lang]}</p>
                        <p class="description">{project.description[lang]}</p>
                    </div>
                    <div class="linkArrow">→</div>
                </a>
            {/each}
        </div>
    </div>

    <!-- Other Cities -->
    <div class="categorySection">
        <div class="categoryHeader">
            <h2>{content[lang].cities.title}</h2>
            <p class="categorySubtitle">{content[lang].cities.subtitle}</p>
        </div>
        <div class="projectsGrid">
            {#each projects.cities as project}
                <a href={project.url} class="projectCard" target="_blank" rel="noopener noreferrer">
                    {#if project.image}
                        <div class="projectImageWrapper" class:rectangular={project.rectangular}>
                            <img
                                src={project.image}
                                alt={project.name}
                                class="projectImage"
                                class:scaled={project.imageScale}
                                style={project.imageScale ? `--image-scale: ${project.imageScale}` : ''}
                            />
                        </div>
                    {:else}
                        <div class="projectIcon">{project.icon}</div>
                    {/if}
                    <div class="projectContent">
                        <h3>{project.name}</h3>
                        <p class="location">{project.location[lang]}</p>
                        <p class="description">{project.description[lang]}</p>
                    </div>
                    <div class="linkArrow">→</div>
                </a>
            {/each}
        </div>
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

    .intro {
        font-size: 1.3em;
        opacity: 0.9;
        line-height: 1.6;
        max-width: 800px;
        margin: 0 auto;
    }

    .categorySection {
        margin-bottom: 4em;
    }

    .categoryHeader {
        text-align: center;
        margin-bottom: 2em;
    }

    .categoryHeader h2 {
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 0.3em;
    }

    .categorySubtitle {
        font-size: 1.1em;
        opacity: 0.8;
    }

    .projectsGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 300px));
        justify-content: center;
        gap: 1.5em;
        margin-top: 2em;
    }

    .projectCard {
        max-width: 300px;
        margin: 0 auto;
        background: linear-gradient(135deg,
            rgba(108, 72, 167, 0.15),
            rgba(58, 152, 189, 0.15)
        );
        border: 2px solid rgba(108, 72, 167, 0.3);
        border-radius: 1em;
        padding: 2em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        text-decoration: none;
        color: white;
        transition: all 0.3s ease;
        position: relative;
    }

    .projectCard:hover {
        transform: translateY(-5px);
        background: linear-gradient(135deg,
            rgba(108, 72, 167, 0.25),
            rgba(58, 152, 189, 0.25)
        );
        border-color: rgba(108, 72, 167, 0.5);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .projectIcon {
        font-size: 2.4em;
        text-align: center;
        margin-bottom: 0.5em;
    }

    .projectImageWrapper {
        width: 160px;
        height: 160px;
        overflow: hidden;
        border-radius: 50%;
        margin: 0 auto 1em;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .projectImageWrapper.rectangular {
        width: auto;
        height: auto;
        max-width: 100%;
        border-radius: 0.5em;
    }

    .projectImageWrapper.rectangular .projectImage {
        width: auto;
        height: auto;
        max-width: 100%;
        object-fit: contain;
    }

    .projectImage {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .projectImage.scaled {
        transform: scale(var(--image-scale, 1));
    }

    .projectCard:hover .projectImage {
        transform: scale(1.05);
    }

    .projectCard:hover .projectImage.scaled {
        transform: scale(calc(var(--image-scale, 1) * 1.05));
    }

    .projectContent {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .projectContent h3 {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
    }

    .location {
        font-size: 1em;
        opacity: 0.8;
        font-weight: 600;
        margin: 0;
    }

    .description {
        font-size: 1.1em;
        line-height: 1.5;
        opacity: 0.9;
        margin: 0;
    }

    .linkArrow {
        position: absolute;
        top: 1.5em;
        right: 1.5em;
        font-size: 1.5em;
        opacity: 0.5;
        transition: all 0.3s ease;
    }

    .projectCard:hover .linkArrow {
        opacity: 1;
        transform: translateX(5px);
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2em;
        }

        .intro {
            font-size: 1.1em;
        }

        .categoryHeader h2 {
            font-size: 1.5em;
        }

        .projectsGrid {
            grid-template-columns: 1fr;
            gap: 1em;
        }

        .projectCard {
            padding: 1.5em;
        }
    }
</style>
