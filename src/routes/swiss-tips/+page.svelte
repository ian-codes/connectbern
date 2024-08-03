<svelte:head>
	<title>Tips • Connect Bern </title>
</svelte:head>


<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    let activeSection = "transportation";

    let navData = [
        {
            name: "Transportation",
            link: "#transportation"
        },
        {
            name: "Free SIM Card (+Data)",
            link: "#free-sim"
        },
        {
            name: "Free Food",
            link: "#free-food"
        },
        {
            name: "Socialize",
            link: "#socialize"
        },
        {
            name: "Random Tips!",
            link: "#random-tips"
        },
        {
            name: "Looking for a Flat?",
            link: "#looking-for-flat"
        }
    ];
</script>



