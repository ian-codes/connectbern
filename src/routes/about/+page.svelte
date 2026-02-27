<svelte:head>
	<title>About • Connect Bern </title>
</svelte:head>


<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;
</script>


<section>
    <p>
        We're all about connecting people, check out our volunteer project at stayinginbern.com
    </p>
    <p>
        If you have any feedback, questions or concerns, don't hesitate to reach out!
    </p>
</section>
