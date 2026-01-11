<script>
    import "../app.css";
    import { onMount } from "svelte";
    import Header from "$lib/components/global/Header.svelte";
    import Footer from "$lib/components/global/Footer.svelte";
    import { currentLanguage } from "$lib/stores/languageStore.js";

    onMount(() => {
        // Check localStorage first, then fall back to browser language
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            currentLanguage.set(savedLanguage);
        } else {
            currentLanguage.set(navigator.language.includes('en') ? 'en' : 'de');
        }
    });
</script>

<div class="gradient"></div>
<div class="bg"></div>

<Header />
<main>
    <slot />
</main>
<Footer />


<style>
    /* Additional scrollbar hiding at component level */
    :global(*) {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
    }

    :global(*::-webkit-scrollbar) {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
    }

    :global(html),
    :global(body) {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
    }

    :global(html::-webkit-scrollbar),
    :global(body::-webkit-scrollbar) {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
    }

    @media (max-width: 800px) {
        main {
            margin-top: 120px !important;
        }
    }

    main {
        overflow-x: hidden;
        max-width: 1200px;
        margin: auto;
        margin-top: 200px;
    }

    .gradient {
        background: linear-gradient(120deg, skyblue, rgb(162, 128, 218));
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        inset: 0;
        position: fixed;
        z-index: -2;
        opacity: 1;
        animation: glow 40s infinite linear;
    }

    .bg {
        height: 120vh;
        background: black;
        inset: 0;
        position: fixed;
        z-index: -2;
        opacity: .2;
        pointer-events: none;
    }
</style>

