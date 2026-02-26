<svelte:head>
	<title>About • Connect Bern </title>
</svelte:head>


<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;
</script>


<section>
    <div class="topbarWrapper">
        <h1>Places</h1>
        <p class="page-description">
            {@html t[lang]['about-description']}
        </p>
    </div>
    <p>
        We are all about connecting people, check out our volunteer project at stayinginbern.com
    </p>
    <p>
        If you have any feedback, questions or concerns, don't hesitate to reach out!
    </p>

    <div class="legalBox">
        <h2>{lang === 'de' ? 'Impressum' : 'Legal Notice'}</h2>
        <div class="legalGrid">
            <span class="legalKey">{lang === 'de' ? 'Name' : 'Name'}</span>
            <span>Connect Bern</span>

            <span class="legalKey">{lang === 'de' ? 'Rechtsform' : 'Legal form'}</span>
            <span>{lang === 'de' ? 'Verein' : 'Association (Verein)'}</span>

            <span class="legalKey">{lang === 'de' ? 'Adresse' : 'Address'}</span>
            <span>Gutenbergstrasse 27, 3011 Bern</span>

            <span class="legalKey">{lang === 'de' ? 'E-Mail' : 'Email'}</span>
            <a href="mailto:connectbern@gmail.com">connectbern@gmail.com</a>

            <span class="legalKey">{lang === 'de' ? 'Telefon' : 'Phone'}</span>
            <a href="tel:+41783166727">+41 78 316 67 27</a>
        </div>
    </div>
</section>

<style>
    section {
        padding: 2em;
        max-width: 900px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1.2em;
    }

    .legalBox {
        margin-top: 2em;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 1em;
        padding: 2em;
    }

    .legalBox h2 {
        font-size: 1.4em;
        font-weight: bold;
        margin: 0 0 1.2em 0;
        opacity: 0.9;
    }

    .legalGrid {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 0.6em 2em;
        font-size: 1.05em;
        line-height: 1.6;
    }

    .legalKey {
        font-weight: 600;
        opacity: 0.6;
        white-space: nowrap;
    }

    .legalGrid a {
        color: inherit;
        text-decoration: underline;
        text-underline-offset: 3px;
    }

    .legalGrid a:hover {
        opacity: 0.8;
    }

    @media (max-width: 500px) {
        .legalGrid {
            grid-template-columns: 1fr;
            gap: 0.1em;
        }

        .legalKey {
            margin-top: 0.8em;
        }
    }
</style>