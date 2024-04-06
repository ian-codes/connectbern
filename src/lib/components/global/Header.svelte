<script>
    import LanguageToggler from "$lib/components/global/LanguageToggler.svelte";
    import Nav from "$lib/components/global/Nav.svelte";

    import { currentLanguage } from '$lib/stores/languageStore';
    $: language = $currentLanguage;
    
    import { t } from "$lib/locales/translations.js";
</script>



<header>
    <a href="/" title="home" class="titleWrapper">
        <div class="logo" style="background: url('logo.svg');" id="logo"></div>
        <div class="textWrapper">
            <h1>Connect Bern</h1>
            <p>{t[language]["logo-description"]}</p>
        </div>
    </a>

    <div class="side-wrapper">
        <LanguageToggler />
        <Nav />
    </div>
</header>


<style>
    @media (max-width: 420px) {
        p {
            display: none !important;
        }
    }

    @media (max-width: 800px) {
        header {
            margin: 1em !important;
            margin-top: 2em !important;
            padding: 0 !important;
            align-items: start !important;
            gap: 1em;
        }
        .titleWrapper {
            align-items: start;
            padding: 0 !important;
        }
        h1 {
            font-size: 1.5em !important;
            word-spacing: normal !important;
        }
        p {
            font-size: .7rem !important;
            word-spacing: normal !important;
            letter-spacing: 1px !important;
        }
        .logo {
            width: 50px !important;
            height: 50px !important;
            background-size: contain !important;
            border-width: 1px !important;
        } 

        .side-wrapper {
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 0 !important;
        }
    }

    .side-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2em;
    }
    
    .logo {
        background-repeat: no-repeat;
        background-position: center;
        height: 100px;
        aspect-ratio: 1;
        border-radius: 100%;
        border: 2px solid white;
        animation: spin 2s ease forwards, rotate infinite 30s linear;
    }

    @keyframes spin {
        0% {
            transform: rotate(-360deg);
        }
        100% {
            filter: blur(0);
            transform: rotate(360deg);
        }
    }
    
    @keyframes rotate {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    
    @keyframes blur {
        0% {
            filter: blur(20px);
        }
        100% {
            filter: blur(0);
        }
    }

    header {
        position: relative;
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 2em;
        padding-bottom: 2em;
        margin: 0 2em;
        user-select: none;
    }

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 1em;
        transition: all .1s ease;
    }

    .titleWrapper {
        animation: blur 1s forwards ease;
        align-items: start;
    }

    a:hover {
        box-shadow: 0 0 0 1px white;
    }

    p {
        letter-spacing: 1px;
        color: white;
        font-size: 1rem;
        margin-left: 4px !important;
    }

    h1 {
        margin: 0;
        font-weight: normal;
        font-size: 3rem;
        text-transform: uppercase;
        letter-spacing: 4px;
        color: white;
    }
</style>