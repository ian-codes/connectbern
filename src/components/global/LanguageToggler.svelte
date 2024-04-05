<script>
    import { currentLanguage } from '../../stores/languageStore';

    $: language = $currentLanguage;

    function handleLanguageToggle(lang) {
        currentLanguage.set(lang);
    }
</script>


<div class="languageToggler">
    <button id="en" 
        on:click={() => handleLanguageToggle("en")}
        class:active={language == "en"}>
        EN
    </button>
    <button id="de" 
        on:click={() => handleLanguageToggle("de")}
        class:active={language == "de"}>
        DE
    </button>
</div>


<style>
    @media (max-width: 800px) { 
        .languageToggler {
            font-size: .8em !important;

        }
    }


    .languageToggler {
        display: flex;
        gap: .3em;
        right: .5em;
        top: 2em;
    }

    .languageToggler button {
        background: none;
        padding: .7em;
        border: 1px dashed white;
        cursor: pointer;
        opacity: .8;
        font-size: .8em;
        color: white;
        border-radius: 100%;
    }

    .active {
        background: linear-gradient(white, rgb(226, 226, 226)) !important;
        color: black !important;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.363)
    }
</style>