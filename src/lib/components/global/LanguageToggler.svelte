<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    export let dark = false;

    function handleLanguageToggle(lang) {
        currentLanguage.set(lang);
    }
</script>

<div class="container" class:dark={dark}>
    <div class="languageToggler">
        <button id="en" title="English"
            on:click={() => handleLanguageToggle("en")}
            class:active={$currentLanguage == "en"}>
            EN
        </button>
        <button id="de" title="Deutsch"
            on:click={() => handleLanguageToggle("de")}
            class:active={$currentLanguage == "de"}>
            DE
        </button>
    </div>
</div>



<style>
    @media (max-width: 800px) { 
        .languageToggler {
            font-size: .8em !important;
        }
    }

    .container {
        padding: .5em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .container * {
        color: white;
    }

    .container.dark * {
        color: black;
    }

    .container.dark {
        background: white;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    .container.dark button:hover {
        text-decoration: underline;
    }

    .languageToggler {
        display: flex;
        align-items: center;
        gap: .5em;
        right: .5em;
        top: 2em;
    }

    button {
        background: none;
        padding: .7em;
        cursor: pointer;
        opacity: 1;
        aspect-ratio: 1;
        font-size: .8em;
        border-radius: 100%;
        opacity: .4;
        transition: all .2s ease;
    }

    .active {
        position: relative;
        font-weight: bold;
        opacity: 1 !important;
    }
    .active::before {
        content: '•';
        position: absolute;
        left: -3px;
    }
</style>