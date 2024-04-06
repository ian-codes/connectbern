<svelte:head>
	<title>Swiss Tips • Connect Bern </title>
</svelte:head>


<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;
</script>



<section>
    <div class="topbarWrapper">
        <h2>Swiss Tips</h2>
        <p>
            {@html t[lang]['swiss-tips-description']}
        </p>
    </div>
</section>