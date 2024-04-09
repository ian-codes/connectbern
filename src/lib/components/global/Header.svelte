<script>
    import { onMount } from "svelte";
    import LanguageToggler from "$lib/components/global/LanguageToggler.svelte";
    import Nav from "$lib/components/global/Nav.svelte";

    import { currentLanguage } from '$lib/stores/languageStore';
    $: language = $currentLanguage;
    
    import { t } from "$lib/locales/translations.js";

    export let isSticky = false;

    onMount(() => {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            isSticky = Math.round(scrollTop) > 1;
        });
    });
</script>



<header>
    <div class:sticky={isSticky} class="container">
        <a href="/" title="home" class="titleWrapper">
            <div class="logo" style="background: url('/icons/logo.svg');" id="logo"></div>
            <div class="textWrapper">
                <span class="logo-text">Connect Bern</span>
                <p>{t[language]["logo-description"]}</p>
            </div>
        </a>
    
        <div class="side-wrapper">
            <div class="invisible">
                <LanguageToggler />
            </div>
            <Nav />
        </div>
    </div>
</header>


<style>
    @media (max-width: 500px) {
        .container {
            align-items: center !important;
            padding: 1em !important;
        }

        p {
            display: none !important;
        }

        .invisible {
            display: none !important;
        }

        header .side-wrapper {
            flex-direction: column !important;
            gap: 0 !important;
        }
    }

    @media (max-width: 800px) {
        header {
            align-items: start !important;
            gap: 1em;
        }
        header .container {
            justify-content: start;
            align-items: start;
            flex-direction: row !important;
            gap: 1em;
        }
        .side-wrapper {
            flex-direction: row;
            justify-content: end;
        }
        .titleWrapper {
            width: 100%;
            align-items: center !important;
            padding: 0 !important;
            gap: .5em !important;
        }
        .logo-text {
            font-size: 1.5em !important;
            word-spacing: normal !important;
        }
        p {
            font-size: .7rem !important;
            word-spacing: normal !important;
            letter-spacing: 1px !important;
        }
        .logo {
            height: 30px !important;
            width: 30px !important;
            min-width: 30px !important;
            min-height: 30px !important;
            background-size: contain !important;
            border-width: 1px !important;
        } 
    }

    header {
        z-index: 30;
        width: 100%;
        position: fixed;
        top: 0;
        user-select: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 3em;
    }

    .container {
        max-width: 1200px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 2em;
        transition: all .2s ease;
    }
    .container * {
        transition: all .2s ease;
    }
    .container.sticky {
        top: 0;
        left: 0;
        padding: 1em;
    }
    .container.sticky::before {
        opacity: 1;
    }
    .container.sticky p {
        display: none;
    }
    .container.sticky .titleWrapper {
        align-items: center;
    }
    .container.sticky .logo {
        width: 40px;
        height: 40px;
    }
    .container::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        background: linear-gradient(120deg, rgb(58, 152, 189), rgb(108, 72, 167));
        box-shadow: 0 0 50px rgba(255, 255, 255, 0.2) inset, 0 10px 30px rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: all .2s ease;
    }

    .side-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
        transition: all .3s ease;
    }
    
    .logo {
        background-repeat: no-repeat;
        background-position: center;
        height: 100px;
        width: 100px;
        border-radius: 100%;
        border: 2px solid white;
        transition: all .2s ease;
        animation: rotate infinite 30s linear;
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

    @keyframes disappear {
        0% {
            font-size: 1rem;
        }
        99% {
            font-size: 0;
        }
        100% {
            display: none;
        }
    }

    p {
        letter-spacing: 1px;
        color: white;
        font-size: 1rem;
        margin-left: 4px !important;
    }

    .logo-text {
        margin: 0;
        font-weight: normal;
        font-size: 3rem;
        text-transform: uppercase;
        letter-spacing: 4px;
        color: white;
        transition: all .3s ease;
    }
</style>