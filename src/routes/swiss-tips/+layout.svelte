<svelte:head>
	<title>Tips • Connect Bern </title>
</svelte:head>


<script>
    import { setContext } from 'svelte';
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    import { page } from "$app/stores";

    $: lang = $currentLanguage;

    let subpage = '';

    $: {
        const parts = $page.url.pathname.split('/').filter(Boolean);
        subpage = parts[parts.length - 1] || '/';
    }

    const scrollToContent = () => {
        requestAnimationFrame(() => {
            const targetElement = document.querySelector("#content");
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 2,
                    behavior: 'smooth'
                });
            }
        });
    }

    setContext('scrollToContent', scrollToContent);

    function handleClick(link) {
        subpage = link;
    }

    let navData = [
        {
            name: "Transportation",
            link: "transportation"
        },
        {
            name: "Free SIM Card (+Data)",
            link: "free-sim-card"
        },
        {
            name: "Free Food",
            link: "free-food"
        },
        {
            name: "Socialize",
            link: "socialize"
        },
        {
            name: "Random Tips!",
            link: "random-tips"
        },
        {
            name: "Looking for a Flat?",
            link: "looking-for-flat"
        }
    ];
</script>



<section>
    <div class="topbarWrapper">
        <h1>Swiss Tips</h1>
        <p>
            {@html t[lang]['swiss-tips-description']}
            <br />
            Select a topic below 👇
        </p>

        <nav>
            <ul class="menu">
                {#each navData as item}
                    <li>
                        <a href="/swiss-tips/{item.link}"
                            class:active={subpage == item.link}
                            on:click={() => handleClick(item.link)}>
                            {item.name}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    </div>

    <div id="content">
        <slot />
    </div>
</section>


<style>
    :global(.section a) {
        word-wrap: break-word;
        display: inline !important;
    }
    :global(.section) {
        animation: appear 1s forwards ease;
    }
    @keyframes appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .menu {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        gap: .5em;
        flex-wrap: wrap;
        list-style: none;
        padding: 0 !important;
    }
    .menu a {
        display: block;
        padding: .5em 1em;
        background: rgba(211, 211, 211, 0.356);
        border-radius: 2em;
        text-decoration: none;
    }
    .menu li {
        display: inline-block !important;
    }
    a:hover, .active {
        transition: all .2s ease;
        background: rgb(9, 58, 99) !important;
        text-wrap: wrap;
    }
    li {
        margin-left: 0 !important;
        padding-left: 0 !important;
    }
    .section {
        margin: 1em;
    }
    @media (max-width: 800px) { 
        .section {
            margin: 0 !important;
        }
    }
</style>