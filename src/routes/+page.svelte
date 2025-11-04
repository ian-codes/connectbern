
<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    import { MenuData } from "$lib/models/MenuData.js";
    $: language = $currentLanguage;
</script>

<section class="landing">
    <!-- <div class="logo" title="Connect Bern" /> -->
    <h1>Connect Bern</h1>
    <p class="subtitle">{@html t[language]["description"]}</p>

    <div class="menu-grid">
        {#each MenuData as item}
            <a href="/{item.slug}" class="menu-card" title={typeof item.title === 'string' ? item.title : item.title[language]}>
                <span class="menu-icon" style={`background-image: url('${(item.homeImg ?? '').startsWith('/') ? item.homeImg : '/icons/' + (item.homeImg ?? item.img)}')`} />
                <span class="menu-title">{typeof item.title === 'string' ? item.title : item.title[language]}</span>
            </a>
        {/each}
    </div>
</section>

<section class="about-section">
    <h2>{t[language]["about-title"]}</h2>

    <div class="about-intro">
        <p class="highlight">{t[language]["about-highlight"]}</p>
    </div>

    <div class="about-content">
        <p>{t[language]["about-p1"]}</p>

        <p>{t[language]["about-p1b"]}</p>

        <p>{t[language]["about-p2"]}</p>

        <p><strong>{t[language]["about-p3"]}</strong></p>
    </div>

    <div class="what-we-do-section">
        <h3>{t[language]["what-we-do-title"]}</h3>

        <div class="what-we-do-content">
            <p><strong>🏠 {t[language]["what-we-do-physical-title"]}:</strong> {t[language]["what-we-do-physical-desc"]}</p>

            <p><strong>🗺️ {t[language]["what-we-do-digital-title"]}:</strong> {t[language]["what-we-do-digital-desc"]}</p>

            <p><strong>👥 {t[language]["what-we-do-groups-title"]}:</strong> {t[language]["what-we-do-groups-desc"]}</p>

            <p><strong>🎉 {t[language]["what-we-do-events-title"]}:</strong> {t[language]["what-we-do-events-desc"]}</p>

            <p><strong>☕ {t[language]["what-we-do-places-title"]}:</strong> {t[language]["what-we-do-places-desc"]}</p>

            <p><strong>💡 {t[language]["what-we-do-tips-title"]}:</strong> {t[language]["what-we-do-tips-desc"]}</p>
        </div>
    </div>

    <div class="values-section">
        <h3>{t[language]["about-values-title"]}</h3>

        <div class="value-cards">
            <div class="value-card">
                <h4><span class="value-icon">🛡️</span>{t[language]["about-safe-space-title"]}</h4>
                <p>{t[language]["about-safe-space-desc"]}</p>
            </div>

            <div class="value-card">
                <h4><span class="value-icon">😊</span>{t[language]["about-positive-title"]}</h4>
                <p>{t[language]["about-positive-desc"]}</p>
            </div>

            <div class="value-card">
                <h4><span class="value-icon">🧼</span>{t[language]["about-hygiene-title"]}</h4>
                <p>{t[language]["about-hygiene-desc"]}</p>
            </div>

            <div class="value-card">
                <h4><span class="value-icon">🤝</span>{t[language]["about-boundaries-title"]}</h4>
                <p>{t[language]["about-boundaries-desc"]}</p>
            </div>

            <div class="value-card">
                <h4><span class="value-icon">⚠️</span>{t[language]["about-no-dating-title"]}</h4>
                <p>{t[language]["about-no-dating-desc"]}</p>
            </div>

            <div class="value-card">
                <h4><span class="value-icon">💪</span>{t[language]["about-active-title"]}</h4>
                <p>{t[language]["about-active-desc"]}</p>
            </div>
        </div>
    </div>
</section>

<style>
    .landing {
        min-height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        text-align: center;
        padding: 2rem 1rem 3rem;
    }
    h1 { margin: .25rem 0; font-size: 2.5rem; }
    .subtitle {
        opacity: .95;
        max-width: 720px;
        line-height: 1.6;
        font-size: 1.1rem;
    }
    .subtitle :global(strong) {
        font-size: 1.25rem;
        opacity: 1;
        display: block;
        margin-bottom: 0.25rem;
    }
    .menu-grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
        margin-bottom: 0;
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
        text-decoration: none;
        background: linear-gradient(rgba(255,255,255,.12), rgba(255,255,255,.04));
        box-shadow: 0 2px 6px rgba(0,0,0,.35);
        transition: transform .08s ease, box-shadow .08s ease;
    }
    .menu-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(255,255,255,.35); }
    .menu-icon { width: 40px; height: 40px; background-size: contain; background-repeat: no-repeat; background-position: center; filter: invert(1); }
    .menu-title { font-size: 1rem; }

    /* About Section */
    .about-section {
        max-width: 1200px;
        margin: 4rem auto;
        padding: 2rem 1rem;
        text-align: center;
    }

    .about-section h2 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        font-weight: bold;
    }

    .about-intro {
        max-width: 800px;
        margin: 0 auto 2rem;
    }

    .about-intro .highlight {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 1rem;
        line-height: 1.6;
        background: linear-gradient(135deg, rgba(108, 72, 167, 0.3), rgba(58, 152, 189, 0.3));
        padding: 1.5rem;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .about-intro p {
        font-size: 1.2rem;
        line-height: 1.7;
        margin: 1.5rem 0;
    }

    .about-intro p:last-child {
        margin-top: 2rem;
    }

    .about-content {
        max-width: 800px;
        margin: 2rem auto;
        text-align: center;
        padding: 2rem;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .about-content p {
        font-size: 1.1rem;
        line-height: 1.8;
        margin: 1.5rem 0;
    }

    .about-content p:first-child {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 2rem;
    }

    .about-content strong {
        font-size: 1.15rem;
    }

    .what-we-do-section {
        margin-top: 3rem;
    }

    .what-we-do-section h3 {
        font-size: 2rem;
        margin-bottom: 2rem;
        font-weight: bold;
    }

    .what-we-do-content {
        max-width: 800px;
        margin: 0 auto;
        background: rgba(108, 72, 167, 0.08);
        padding: 2rem;
        border-radius: 12px;
        border: 1px solid rgba(108, 72, 167, 0.2);
    }

    .what-we-do-content p {
        font-size: 1.05rem;
        line-height: 1.8;
        margin: 1.5rem 0;
        text-align: left;
    }

    .what-we-do-content p:first-child {
        margin-top: 0;
    }

    .what-we-do-content p:last-child {
        margin-bottom: 0;
    }

    .what-we-do-content strong {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.95);
    }

    .values-section {
        margin-top: 3rem;
    }

    .values-section h3 {
        font-size: 2rem;
        margin-bottom: 2rem;
        font-weight: bold;
    }

    .value-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }

    .value-card {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 1.5rem;
        text-align: left;
    }

    .value-icon {
        font-size: 1.5rem;
        margin-right: 0.5rem;
        display: inline-block;
    }

    .value-card h4 {
        font-size: 1.4rem;
        margin-bottom: 0.8rem;
        font-weight: bold;
        display: flex;
        align-items: center;
    }

    .value-card p {
        font-size: 1rem;
        line-height: 1.6;
        opacity: 0.9;
        margin: 0;
    }

    @media (max-width: 768px) {
        .about-section {
            margin: 2rem auto;
            padding: 1rem;
        }

        .about-section h2 {
            font-size: 2rem;
        }

        .about-intro .highlight {
            font-size: 1.2rem;
            padding: 1rem;
        }

        .about-intro p {
            font-size: 1.1rem;
        }

        .about-intro p:last-child {
            margin-top: 2rem;
        }

        .about-content {
            padding: 1.5rem;
        }

        .about-content p {
            font-size: 1rem;
        }

        .about-content p:first-child {
            font-size: 1.1rem;
        }

        .what-we-do-section h3 {
            font-size: 1.6rem;
        }

        .what-we-do-content {
            padding: 1.5rem;
        }

        .what-we-do-content p {
            font-size: 1rem;
            margin: 1.2rem 0;
        }

        .values-section h3 {
            font-size: 1.6rem;
        }

        .value-cards {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .value-card h4 {
            font-size: 1.2rem;
        }

        .value-card p {
            font-size: 0.95rem;
        }
    }
</style>