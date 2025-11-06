<svelte:head>
	<title>Digital Map • Connect Bern</title>
</svelte:head>

<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    $: language = $currentLanguage;
    
    function goToMap() {
        window.open('https://play.workadventu.re/@/connect-bern-map/connect-bern-map/welcome', '_blank');
    }
</script>

<section class="map-section">
    <div class="hero">
        <h1>🗺️ {t[language]["map-title"]}</h1>
        <p class="description">{@html t[language]["map-description"]}</p>

        <button class="quick-access-button" on:click={goToMap}>
            <span class="quick-icon">🚀</span>
            <span class="quick-text">{t[language]["go-to-map"]}</span>
        </button>
    </div>

    <div class="features">
        <div class="feature-card">
            <span class="feature-icon">👋</span>
            <h3>{t[language]["map-feature-1-title"]}</h3>
            <p>{t[language]["map-feature-1-desc"]}</p>
        </div>
        
        <div class="feature-card">
            <span class="feature-icon">🤝</span>
            <h3>{t[language]["map-feature-2-title"]}</h3>
            <p>{t[language]["map-feature-2-desc"]}</p>
        </div>
        
        <div class="feature-card">
            <span class="feature-icon">💻</span>
            <h3>{t[language]["map-feature-3-title"]}</h3>
            <p>{t[language]["map-feature-3-desc"]}</p>
        </div>
        
        <div class="feature-card">
            <span class="feature-icon">😌</span>
            <h3>{t[language]["map-feature-4-title"]}</h3>
            <p>{t[language]["map-feature-4-desc"]}</p>
        </div>
        
        <div class="feature-card">
            <span class="feature-icon">🤝</span>
            <h3>{t[language]["map-feature-5-title"]}</h3>
            <p>{t[language]["map-feature-5-desc"]}</p>
        </div>
        
        <div class="feature-card">
            <span class="feature-icon">❓</span>
            <h3>{t[language]["map-feature-6-title"]}</h3>
            <p>{t[language]["map-feature-6-desc"]}</p>
        </div>
    </div>

    <div class="cta-section">
        <button class="mappy-button" on:click={goToMap}>
            <span class="button-icon">🗺️</span>
            <span class="button-text">{t[language]["go-to-map"]}</span>
            <span class="button-arrow">→</span>
        </button>
    </div>
</section>

<style>
    .map-section {
        min-height: 80vh;
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .hero {
        text-align: center;
        max-width: 800px;
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .description {
        font-size: 1.2rem;
        opacity: 0.9;
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    .quick-access-button {
        margin-top: 1.5rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border: none;
        border-radius: 50px;
        padding: 1rem 2.5rem;
        font-size: 1.2rem;
        font-weight: bold;
        color: white;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.8rem;
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        animation: pulse 2s infinite;
    }

    .quick-access-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        transition: left 0.6s ease;
    }

    .quick-access-button:hover::before {
        left: 100%;
    }

    .quick-access-button:hover {
        transform: translateY(-3px) scale(1.08);
        box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
    }

    .quick-access-button:active {
        transform: translateY(-1px) scale(1.05);
    }

    .quick-icon {
        font-size: 1.8rem;
        animation: rocketBounce 1.5s infinite;
    }

    .quick-text {
        position: relative;
        z-index: 1;
    }

    @keyframes pulse {
        0%, 100% {
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }
        50% {
            box-shadow: 0 8px 30px rgba(102, 126, 234, 0.6);
        }
    }

    @keyframes rocketBounce {
        0%, 100% {
            transform: translateY(0) rotate(0deg);
        }
        25% {
            transform: translateY(-4px) rotate(-5deg);
        }
        75% {
            transform: translateY(-2px) rotate(5deg);
        }
    }

    .features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        max-width: 1000px;
        width: 100%;
    }

    .feature-card {
        background: linear-gradient(rgba(255,255,255,.12), rgba(255,255,255,.04));
        border-radius: 16px;
        padding: 1.5rem;
        text-align: center;
        box-shadow: 0 4px 12px rgba(0,0,0,.2);
        cursor: default;
    }

    .feature-icon {
        font-size: 2.5rem;
        display: block;
        margin-bottom: 1rem;
    }

    .feature-card h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.2rem;
    }

    .feature-card p {
        margin: 0;
        opacity: 0.9;
        line-height: 1.5;
    }

    .cta-section {
        text-align: center;
    }

    .mappy-button {
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        border: none;
        border-radius: 50px;
        padding: 1rem 2rem;
        font-size: 1.2rem;
        font-weight: bold;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .mappy-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        transition: left 0.5s ease;
    }

    .mappy-button:hover::before {
        left: 100%;
    }

    .mappy-button:hover {
        transform: translateY(-2px) scale(1.05);
        box-shadow: 0 8px 25px rgba(255, 107, 107, 0.6);
    }

    .mappy-button:active {
        transform: translateY(0) scale(1.02);
    }

    .button-icon {
        font-size: 1.5rem;
        animation: bounce 2s infinite;
    }

    .button-arrow {
        font-size: 1.5rem;
        transition: transform 0.3s ease;
    }

    .mappy-button:hover .button-arrow {
        transform: translateX(4px);
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-4px); }
        60% { transform: translateY(-2px); }
    }

    @media (max-width: 768px) {
        .hero h1 {
            font-size: 2rem;
        }

        .description {
            font-size: 1rem;
        }

        .quick-access-button {
            font-size: 1rem;
            padding: 0.9rem 2rem;
            width: 100%;
            max-width: 300px;
            justify-content: center;
        }

        .quick-icon {
            font-size: 1.5rem;
        }

        .features {
            grid-template-columns: 1fr;
        }

        .mappy-button {
            font-size: 1rem;
            padding: 0.8rem 1.5rem;
        }
    }
</style>
