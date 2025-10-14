
<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    import { MenuData } from "$lib/models/MenuData.js";
    $: language = $currentLanguage;
    function goTo(slug) {
        window.location.href = `/${slug}`;
    }
</script>

<section class="landing">
    <!-- <div class="logo" title="Connect Bern" /> -->
    <h1>Connect Bern</h1>
    <p class="subtitle">{@html t[language]["description"]}</p>

    <div class="menu-grid">
        {#each MenuData as item}
            <button class="menu-card" on:click={() => goTo(item.slug)} title={typeof item.title === 'string' ? item.title : item.title[language]}>
                <span class="menu-icon" style={`background-image: url('${(item.homeImg ?? '').startsWith('/') ? item.homeImg : '/icons/' + (item.homeImg ?? item.img)}')`} />
                <span class="menu-title">{typeof item.title === 'string' ? item.title : item.title[language]}</span>
            </button>
        {/each}
    </div>
</section>

<style>
    .landing {
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        text-align: center;
        padding: 2rem 1rem;
    }
    h1 { margin: .25rem 0; }
    .subtitle { opacity: .9; max-width: 720px; }
    .menu-grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
        max-width: 960px;
    }
    .menu-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        padding: 1rem;
        border-radius: 12px;
        border: none;
        cursor: pointer;
        color: white;
        background: linear-gradient(rgba(255,255,255,.12), rgba(255,255,255,.04));
        box-shadow: 0 2px 6px rgba(0,0,0,.35);
        transition: transform .08s ease, box-shadow .08s ease;
    }
    .menu-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(255,255,255,.35); }
    .menu-icon { width: 40px; height: 40px; background-size: contain; background-repeat: no-repeat; background-position: center; filter: invert(1); }
    .menu-title { font-size: 1rem; }
</style>