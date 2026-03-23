
<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    import { MenuData } from "$lib/models/MenuData.js";
    import { onMount } from 'svelte';
    $: language = $currentLanguage;

    const PARTY_START = new Date('2026-03-24T18:00:00+01:00');

    let showPartyBanner = false;
    let countdown = '';
    let partyLive = false;

    function updateCountdown() {
        const now = new Date();
        const y = now.getFullYear(), m = now.getMonth(), d = now.getDate();
        showPartyBanner = (y === 2026 && m === 2 && (d === 23 || d === 24));
        if (!showPartyBanner) return;
        const diff = PARTY_START - now;
        if (diff <= 0) {
            partyLive = true;
            countdown = '';
        } else {
            partyLive = false;
            const totalSec = Math.floor(diff / 1000);
            const s = totalSec % 60;
            const totalMin = Math.floor(totalSec / 60);
            const min = totalMin % 60;
            const totalH = Math.floor(totalMin / 60);
            const h = totalH % 24;
            const days = Math.floor(totalH / 24);
            countdown = days > 0
                ? `${days}d ${h}h ${String(min).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`
                : `${h}h ${String(min).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`;
        }
    }

    onMount(() => {
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    });
</script>

<section class="landing">
    <!-- <div class="logo" title="Connect Bern" /> -->
    <h1>Connect Bern</h1>
    <p class="subtitle">{@html t[language]["description"]}</p>

    {#if showPartyBanner}
    <a href="/map" class="party-banner">
        <span class="party-pulse"></span>
        <span class="party-emoji">🎉</span>
        <span class="party-content">
            <span class="party-title">{language === 'de' ? 'Feier mit uns ONLINE!' : 'Join the ONLINE party!'}</span>
            {#if partyLive}
                <span class="party-live">{language === 'de' ? '🔴 JETZT LIVE' : '🔴 LIVE NOW'}</span>
            {:else}
                <span class="party-countdown">
                    {language === 'de' ? 'Startet in' : 'Starts in'} <strong>{countdown}</strong>
                </span>
            {/if}
            <span class="party-sub">{language === 'de' ? 'Zum Space →' : 'Go to the space →'}</span>
        </span>
        <span class="party-emoji">🥳</span>
    </a>
    {/if}

    <a href="/events/welcome-party" class="featured-event-bubble">
        <img src="/images/connect-bern-welcome-party.png" alt="Connect Bern Welcome Party" class="bubble-img" />
        <span class="bubble-badge">🎉 {language === 'de' ? 'Welcome Party' : 'Welcome Party'}</span>
        <span class="bubble-title">Connect Bern Welcome Party</span>
        <span class="bubble-desc">{language === 'de' ? '24. März · Feier mit uns den Start!' : 'Mar 24 · Celebrate the beginning with us!'}</span>
        <span class="bubble-cta">{language === 'de' ? 'Mehr erfahren →' : 'Learn more →'}</span>
    </a>

    <div class="menu-grid">
        {#each MenuData as item}
            <a href="/{item.slug}" class="menu-card" title={typeof item.title === 'string' ? item.title : item.title[language]}>
                <span class="menu-icon" style={`background-image: url('${(item.homeImg ?? '').startsWith('/') ? item.homeImg : '/icons/' + (item.homeImg ?? item.img)}')`} />
                <span class="menu-title">{typeof item.title === 'string' ? item.title : item.title[language]}</span>
                {#if item.chips}
                    {#each item.chips as chip}
                        <span class="menu-chip menu-chip--{chip.pos}" title={chip.label}>
                            {#if chip.emoji}
                                <span class="menu-chip-emoji">{chip.emoji}</span>
                            {:else}
                                <span class="menu-chip-img" style="background-image: url('{chip.icon}');"></span>
                            {/if}
                        </span>
                    {/each}
                {/if}
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
        position: relative;
    }
    .menu-chip {
        position: absolute;
        width: 1.3rem;
        height: 1.3rem;
        opacity: 0.7;
        transition: opacity 0.15s ease;
    }
    .menu-card:hover .menu-chip { opacity: 1; }
    .menu-chip--top-left     { top: 6px;    left: 7px; }
    .menu-chip--top-right    { top: 6px;    right: 7px; }
    .menu-chip--bottom-left  { bottom: 6px; left: 7px; }
    .menu-chip--bottom-right { bottom: 6px; right: 7px; }
    .menu-chip-img {
        display: block;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        filter: drop-shadow(0 1px 2px rgba(0,0,0,.3));
    }
    .menu-chip-emoji {
        display: block;
        font-size: 1rem;
        line-height: 1.3rem;
        text-align: center;
        filter: drop-shadow(0 1px 2px rgba(0,0,0,.3));
    }
    .menu-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(255,255,255,.35); }
    .menu-icon { width: 40px; height: 40px; background-size: contain; background-repeat: no-repeat; background-position: center; filter: invert(1); }
    .menu-title { font-size: 1rem; }

    /* Online Party Banner */
    .party-banner {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.85rem 1.4rem;
        margin: 0.25rem 0 0.5rem;
        background: linear-gradient(135deg, rgba(120, 60, 220, 0.35), rgba(60, 160, 220, 0.35));
        border: 1.5px solid rgba(160, 120, 255, 0.55);
        border-radius: 1rem;
        text-decoration: none;
        color: white;
        box-shadow: 0 0 20px rgba(140, 80, 255, 0.25);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        position: relative;
        overflow: hidden;
        max-width: 480px;
        width: 100%;
        animation: partyGlow 2.5s ease-in-out infinite;
    }

    .party-banner:hover {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 6px 24px rgba(140, 80, 255, 0.4);
    }

    @keyframes partyGlow {
        0%, 100% { box-shadow: 0 0 18px rgba(140, 80, 255, 0.25); }
        50% { box-shadow: 0 0 28px rgba(140, 80, 255, 0.45); }
    }

    .party-pulse {
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
        animation: partyShine 3s ease-in-out infinite;
    }

    @keyframes partyShine {
        0% { transform: translateX(-100%); }
        60%, 100% { transform: translateX(100%); }
    }

    .party-emoji {
        font-size: 1.6rem;
        flex-shrink: 0;
        position: relative;
    }

    .party-content {
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
        flex: 1;
        position: relative;
    }

    .party-title {
        font-size: 1rem;
        font-weight: 800;
        letter-spacing: 0.01em;
    }

    .party-countdown {
        font-size: 0.88rem;
        opacity: 0.92;
    }

    .party-countdown strong {
        font-variant-numeric: tabular-nums;
    }

    .party-live {
        font-size: 0.88rem;
        font-weight: bold;
        color: #ff6b6b;
        animation: livePulse 1s ease-in-out infinite;
    }

    @keyframes livePulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
    }

    .party-sub {
        font-size: 0.8rem;
        opacity: 0.8;
        font-weight: 600;
    }

    /* Featured Event Bubble */
    .featured-event-bubble {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.4rem;
        padding: 1rem 1.5rem;
        margin: 0.5rem 0 1rem;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 1rem;
        text-decoration: none;
        color: white;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        max-width: 400px;
        width: 100%;
    }

    .featured-event-bubble:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        background: rgba(255, 255, 255, 0.12);
    }

    .bubble-img {
        width: 100%;
        border-radius: 0.6rem;
        object-fit: cover;
        max-height: 160px;
    }

    .bubble-badge {
        font-size: 0.75rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        background: rgba(255, 180, 100, 0.4);
        padding: 0.25em 0.75em;
        border-radius: 1em;
        color: #fff;
    }

    .bubble-title {
        font-size: 1.4rem;
        font-weight: bold;
        margin: 0.1rem 0;
    }

    .bubble-desc {
        font-size: 0.9rem;
        opacity: 0.95;
        text-align: center;
    }

    .bubble-cta {
        font-size: 0.85rem;
        font-weight: 600;
        margin-top: 0.3rem;
        opacity: 0.9;
    }

    @media (max-width: 768px) {
        .featured-event-bubble {
            padding: 0.8rem 1.2rem;
            margin: 0.5rem 1rem 1rem;
        }

        .bubble-title {
            font-size: 1.2rem;
        }

        .bubble-desc {
            font-size: 0.85rem;
        }
    }

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