<script>
    import { t } from "$lib/locales/eventPageTranslations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    $: lang = $currentLanguage;
</script>




<div class="appBanner">
    <p class="appBannerTitle">{t[lang]['app-banner-title']}</p>
    <p class="appBannerSub">{t[lang]['app-banner-subtitle']}</p>
    <div class="storeBadges">
        <a href="https://app.connectbern.ch" class="storeBadge webBadge" target="_blank" rel="noopener noreferrer">
            <svg class="storeIcon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <div class="storeText">
                <span class="storeSmall">{lang === 'de' ? 'Öffnen im' : 'Open in'}</span>
                <span class="storeBig">Browser</span>
            </div>
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.innr.app" class="storeBadge androidBadge" target="_blank" rel="noopener noreferrer">
            <svg class="storeIcon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.575a1 1 0 0 1 0 1.736l-2.035 1.175L13.315 12l2.348-2.348 2.035 1.48zM5.864 3.658L16.8 10.09l-2.302 2.302-8.635-8.734z" fill="white"/>
            </svg>
            <div class="storeText">
                <span class="storeSmall">GET IT ON</span>
                <span class="storeBig">Google Play</span>
            </div>
        </a>
        <a href="https://apps.apple.com/de/app/connect-bern/id6751537380" class="storeBadge iosBadge" target="_blank" rel="noopener noreferrer">
            <svg class="storeIcon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div class="storeText">
                <span class="storeSmall">Download on the</span>
                <span class="storeBig">App Store</span>
            </div>
        </a>
    </div>
</div>

<style>
    .appBanner {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        padding: 1.2rem 1rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    .appBannerTitle {
        font-size: 1rem;
        font-weight: 700;
        margin: 0 0 0.2rem 0;
    }
    .appBannerSub {
        font-size: 0.85rem;
        opacity: 0.7;
        margin: 0 0 1rem 0;
    }
    .storeBadges {
        display: flex;
        gap: 0.6rem;
        justify-content: center;
        flex-wrap: wrap;
    }
    .storeBadge {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        background: #111;
        border: 1px solid rgba(255,255,255,0.18);
        border-radius: 10px;
        padding: 0.45rem 0.9rem;
        text-decoration: none;
        color: white;
        transition: transform 0.15s ease, background 0.15s ease;
        min-width: 130px;
    }
    .storeBadge:hover { transform: translateY(-2px); background: #222; }
    .storeIcon { width: 22px; height: 22px; flex-shrink: 0; }
    .storeText {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        line-height: 1.15;
    }
    .storeSmall {
        font-size: 0.6rem;
        opacity: 0.75;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }
    .storeBig {
        font-size: 0.95rem;
        font-weight: 700;
        white-space: nowrap;
    }

</style>