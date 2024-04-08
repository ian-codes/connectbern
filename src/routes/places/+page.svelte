<svelte:head>
	<title>Places • Connect Bern </title>
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
            {@html t[lang]['places-description']}
        </p>
    </div>

    <ul>
        <li>
            <a href="https://maps.app.goo.gl/KjFE3FX8mrqHDSQy5">
                English Club of Berne
            </a>
        </li>
        <li>
            <a href="https://maps.app.goo.gl/vLi6xDad6EdhPdF57">
                Erupt - Gaming Lounge
            </a>
        </li>
        <li>
            <a href="https://maps.app.goo.gl/JSP5R3n5Ume8qtLq8">
                Reitschule
            </a>
        </li>
        <li>
            <a href="https://maps.app.goo.gl/vgBkbAwSi9X1Rz717">
                PROGR Turnhalle
            </a>
        </li>
        <li>
            <a href="https://maps.app.goo.gl/w1YDLT3DYaBVSfMw6">
                Berner Generationenhaus
            </a>
        </li>
        <li>
            Free walking tour
        </li>
    </ul>

</section>