<script>
    import { onMount } from "svelte";
    import Header from "$lib/components/global/Header.svelte";
    import { currentLanguage } from "$lib/stores/languageStore.js";
    import LanguageToggler from "../lib/components/global/LanguageToggler.svelte";

    onMount(() => {
        currentLanguage.set(navigator.language.includes('en') ? 'en' : 'de'); 
    });
</script>

<div class="gradient"></div>
<div class="bg"></div>

<Header />
<main>
    <slot />
</main>


<style>
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

