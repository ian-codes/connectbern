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
</section>