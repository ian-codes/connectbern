<svelte:head>
	<title>Tips • Connect Bern </title>
</svelte:head>


<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;
</script>



<section>
    <div class="topbarWrapper">
        <h2>Tips</h2>
        <p>
            {@html t[lang]['swiss-tips-description']}
        </p>
    </div>
    <ul>
        <h3>Random Tips</h3>
        <li>
            You can drink the water from the fountains which you can find all around town!
        </li>
        <li>
            <h4>
                Looking for a flat?
            </h4>
            <ol>
                <li>
                    https://meinwgzimmer.ch/ (the nicest)
                </li>
                <li>
                    https://wgzimmer.ch (most used)
                </li>
                <li>
                    https://flatfox.ch (foreigners use this a lot)
                </li>
                <li>
                    https://ronorp.ch/
                </li>

                <li>
                    https://www.facebook.com/groups/251733488892455/
                </li>
                <li>
                    https://www.facebook.com/wohnung.frei.bern/
                </li>
                <li>
                    https://t.me/joinchat/LIezUBJgr4IRDyv8jYTWkg
                </li>
            </ol>
        </li>
    </ul>
</section>