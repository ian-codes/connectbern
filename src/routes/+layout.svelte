<script>
    import { onMount } from "svelte";
    import Header from "$lib/components/global/Header.svelte";
    import { currentLanguage } from "$lib/stores/languageStore.js";

    onMount(() => {
        currentLanguage.set(navigator.language.includes('en') ? 'en' : 'de'); 
    });
</script>

<div class="gradient"></div>
<div class="bg"></div>

<div class="outerWrapper">
    <Header />
    <main>
        <slot />
    </main>
</div>


<style>
    @media (max-width: 800px) {
        .outerWrapper {
            padding: 0 !important;
        }

        .topbarWrapper {
            flex-wrap: wrap;
            gap: 1em;
            margin: 0 !important;
            padding: 0 0 1em 0 !important;
        }

        .settingsBar {
            margin: 0 !important;
            padding: 0 !important;
        }

        p {
            font-size: 1em !important;
        }
    }

    .topbarWrapper {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin: 0;
        gap: 1em;
        margin-bottom: 1em;
        padding-bottom: 2em;
    }

    .outerWrapper {
        position: relative;
        max-width: 1100px;
        min-height: 120vh;
        width: 100%;
        margin: auto;
        padding: 1em 0;
        overflow: hidden;
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

