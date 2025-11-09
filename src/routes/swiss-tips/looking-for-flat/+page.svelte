<script>
    import { getContext, onMount } from 'svelte';
    import { currentLanguage } from '$lib/stores/languageStore';

    const scrollToContent = getContext('scrollToContent');
    $: lang = $currentLanguage;

    onMount(() => {
        scrollToContent();
    });

    const content = {
        de: {
            title: "Wohnung gesucht?",
            subtitle: "Hier sind einige Websites und Gruppen zum Finden einer Wohnung:",
            platforms: [
                { name: "Telegram Gruppe", note: "für befristete und unbefristete Wohnangebote (WG-Zimmer, Wohnung, u.ä.) bzw. Suche nach einer Wohnung. Fast 10k Mitglieder, sehr aktiv!", url: "https://t.me/joinchat/LIezUBJgr4IRDyv8jYTWkg", icon: "/icons/telegram.svg", iconType: "svg" },
                { name: "Facebook Gruppen", note: "WG Zimmer Bern & Wohnung Frei Bern (und vielleicht weitere)", url: "https://www.facebook.com/groups/251733488892455/", url2: "https://www.facebook.com/wohnung.frei.bern/", icon: "/icons/facebook.svg", iconType: "svg", multiLink: true },
                { name: "meinwgzimmer.ch", note: "(sehr schönes und neues UI, aber weniger genutzt)", url: "https://meinwgzimmer.ch/", icon: "🏠" },
                { name: "wgzimmer.ch", note: "(am meisten genutzt, nur WG-Zimmer)", url: "https://wgzimmer.ch", icon: "🏘️" },
                { name: "flatfox.ch", note: "(Ausländer nutzen dies viel für WG-Zimmer, generell beliebt für ganze Wohnungen)", url: "https://flatfox.ch", icon: "🦊" },
                { name: "ronorp.net", note: "(alternative Website, bietet auch Wohnungssuche)", url: "https://ronorp.net/market/housing", icon: "🔍" }
            ],
            feedback: {
                title: "Hast du weitere Tipps?",
                text: "Wir freuen uns sehr über weitere Tipps, Anpassungen und Vorschläge! Du kannst uns gerne auf WhatsApp kontaktieren:",
                phone: "+41 78 316 67 27"
            },
            accommodation: {
                title: "Brauchst du einen Schlafplatz während der Wohnungssuche?",
                subtitle: "Du kannst diese Plattformen für kostenlose Unterkunft ausprobieren:",
                platforms: [
                    { name: "Trustroots", url: "https://trustroots.org", icon: "/icons/trustroots.png", iconType: "image" },
                    { name: "BeWelcome", url: "https://bewelcome.org", icon: "/icons/bewelcome.png", iconType: "image", largeIcon: true },
                    { name: "Couchers", url: "https://couchers.org", icon: "/icons/couchers.jpg", iconType: "image" }
                ],
                help: "Wenn du immer noch nichts finden kannst, frag in der",
                helpLink: "Ask for Help Gruppe",
                helpUrl: "http://tiny.cc/askforhelp"
            }
        },
        en: {
            title: "Looking for a Flat?",
            subtitle: "Check out these websites and groups to find an apartment:",
            platforms: [
                { name: "Telegram Group", note: "for temporary and permanent housing offers (shared rooms, apartments, etc.) or searching for an apartment. Nearly 10k members, very active!", url: "https://t.me/joinchat/LIezUBJgr4IRDyv8jYTWkg", icon: "/icons/telegram.svg", iconType: "svg" },
                { name: "Facebook Groups", note: "WG Zimmer Bern & Wohnung Frei Bern (and perhaps more)", url: "https://www.facebook.com/groups/251733488892455/", url2: "https://www.facebook.com/wohnung.frei.bern/", icon: "/icons/facebook.svg", iconType: "svg", multiLink: true },
                { name: "meinwgzimmer.ch", note: "(a very nice and new UI, but less used)", url: "https://meinwgzimmer.ch/", icon: "🏠" },
                { name: "wgzimmer.ch", note: "(most used, shared flats only)", url: "https://wgzimmer.ch", icon: "🏘️" },
                { name: "flatfox.ch", note: "(foreigners use this a lot for shared flats, generally popular for flats alone)", url: "https://flatfox.ch", icon: "🦊" },
                { name: "ronorp.net", note: "(alternative website which also offers apartment search)", url: "https://ronorp.net/market/housing", icon: "🔍" }
            ],
            feedback: {
                title: "Do you have more tips?",
                text: "We are very happy to receive more tips, adjustments and suggestions! You can contact us on WhatsApp:",
                phone: "+41 78 316 67 27"
            },
            accommodation: {
                title: "Need a place to sleep while looking for an apartment?",
                subtitle: "You can try these platforms for free accommodation:",
                platforms: [
                    { name: "Trustroots", url: "https://trustroots.org", icon: "/icons/trustroots.png", iconType: "image" },
                    { name: "BeWelcome", url: "https://bewelcome.org", icon: "/icons/bewelcome.png", iconType: "image", largeIcon: true },
                    { name: "Couchers", url: "https://couchers.org", icon: "/icons/couchers.jpg", iconType: "image" }
                ],
                help: "If you still can't find anything, ask in the",
                helpLink: "Ask for Help Group",
                helpUrl: "http://tiny.cc/askforhelp"
            }
        }
    };
</script>

<div class="section">
    <div class="header">
        <h2>{content[lang].title}</h2>
        <p class="subtitle">{content[lang].subtitle}</p>
    </div>

    <div class="platforms-grid">
        {#each content[lang].platforms as platform, i (i)}
            {#if platform.multiLink}
                <div class="platform-card multi-link">
                    <div class="platform-content">
                        <div class="title-row">
                            {#if platform.iconType === "svg"}
                                <span class="platform-icon-svg" style="background-image: url('{platform.icon}');"></span>
                            {:else}
                                <span class="platform-icon">{platform.icon}</span>
                            {/if}
                            <h3>{platform.name}</h3>
                        </div>
                        {#if platform.note}
                            <p class="platform-note">{platform.note}</p>
                        {/if}
                        <div class="multi-link-buttons">
                            <a href={platform.url} class="mini-btn" target="_blank" rel="noopener noreferrer">
                                Bern Wohnung, Zimmer, WG →
                            </a>
                            <a href={platform.url2} class="mini-btn" target="_blank" rel="noopener noreferrer">
                                Wohnung Frei Bern →
                            </a>
                        </div>
                    </div>
                </div>
            {:else}
                <a href={platform.url} class="platform-card" target="_blank" rel="noopener noreferrer">
                    <div class="platform-content">
                        <div class="title-row">
                            {#if platform.iconType === "svg"}
                                <span class="platform-icon-svg" style="background-image: url('{platform.icon}');"></span>
                            {:else}
                                <span class="platform-icon">{platform.icon}</span>
                            {/if}
                            <h3>{platform.name}</h3>
                        </div>
                        {#if platform.note}
                            <p class="platform-note">{platform.note}</p>
                        {/if}
                    </div>
                    <div class="arrow">→</div>
                </a>
            {/if}
        {/each}
    </div>

    <!-- Accommodation Section -->
    <div class="accommodation-section">
        <h3 class="section-title">{content[lang].accommodation.title}</h3>
        <p class="section-subtitle">{content[lang].accommodation.subtitle}</p>

        <div class="accommodation-grid">
            {#each content[lang].accommodation.platforms as platform, i (i)}
                <a href={platform.url} class="accommodation-card" target="_blank" rel="noopener noreferrer">
                    {#if platform.iconType === "image"}
                        <img src={platform.icon} alt={platform.name} class="card-icon-img {platform.largeIcon ? 'large-icon' : ''}" />
                    {:else}
                        <span class="card-icon">{platform.icon}</span>
                    {/if}
                    <h4>{platform.name}</h4>
                </a>
            {/each}
        </div>

        <div class="help-box">
            <p>
                {content[lang].accommodation.help}
                <a href={content[lang].accommodation.helpUrl} class="inline-link" target="_blank" rel="noopener noreferrer">
                    {content[lang].accommodation.helpLink}
                </a>
            </p>
        </div>
    </div>

    <!-- Feedback Section -->
    <div class="feedback-section">
        <h3 class="section-title">{content[lang].feedback.title}</h3>
        <p class="feedback-text">{content[lang].feedback.text}</p>
        <a href="https://wa.me/{content[lang].feedback.phone.replace(/\s/g, '')}" class="whatsapp-btn" target="_blank" rel="noopener noreferrer">
            <img src="/icons/whatsapp.svg" alt="WhatsApp" class="whatsapp-icon" />
            <span>{content[lang].feedback.phone}</span>
        </a>
    </div>
</div>

<style>
    .section {
        padding: 0;
    }

    .header {
        margin-bottom: 2.5rem;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: white;
    }

    .subtitle {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
    }

    .platforms-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
        margin-bottom: 3rem;
    }

    .platform-card {
        display: flex;
        align-items: center;
        gap: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 1.25rem;
        text-decoration: none;
        transition: all 0.2s ease;
        color: white;
    }

    .platform-card:hover {
        background: rgba(255, 255, 255, 0.08);
        transform: translateX(3px);
        border-color: rgba(255, 255, 255, 0.2);
    }

    .platform-icon {
        font-size: 1.8rem;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .platform-icon-svg {
        display: inline-block;
        width: 1.8rem;
        height: 1.8rem;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        flex-shrink: 0;
    }

    .platform-content {
        flex: 1;
    }

    .title-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .platform-card h3 {
        font-size: 1.05rem;
        font-weight: 600;
        margin: 0;
        color: white;
    }

    .platform-note {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.75);
        margin: 0.5rem 0 0 0;
        font-style: normal;
        line-height: 1.5;
    }

    .arrow {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.4);
        transition: transform 0.2s ease;
    }

    .platform-card:hover .arrow {
        transform: translateX(3px);
        color: rgba(255, 255, 255, 0.7);
    }

    .accommodation-section {
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .section-title {
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: white;
    }

    .section-subtitle {
        font-size: 1.05rem;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 2rem;
        line-height: 1.6;
    }

    .accommodation-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .accommodation-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 1.5rem 1rem;
        text-decoration: none;
        transition: all 0.2s ease;
    }

    .accommodation-card:hover {
        background: rgba(255, 255, 255, 0.08);
        transform: translateY(-2px);
        border-color: rgba(255, 255, 255, 0.2);
    }

    .card-icon {
        font-size: 2.5rem;
    }

    .card-icon-img {
        width: 4rem;
        height: 4rem;
        object-fit: contain;
        border-radius: 8px;
    }

    .card-icon-img.large-icon {
        width: 6rem;
        height: 6rem;
    }

    .accommodation-card h4 {
        font-size: 1.1rem;
        font-weight: 600;
        margin: 0;
        color: white;
        text-align: center;
    }

    .help-box {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 1.25rem;
        text-align: center;
    }

    .help-box p {
        font-size: 1.05rem;
        line-height: 1.7;
        margin: 0;
        color: rgba(255, 255, 255, 0.9);
    }

    .inline-link {
        color: #5ac8fa;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.2s ease;
    }

    .inline-link:hover {
        color: #70d7ff;
        text-decoration: underline;
    }

    .multi-link {
        cursor: default;
    }

    .multi-link:hover {
        transform: none;
    }

    .multi-link-buttons {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 0.75rem;
    }

    .mini-btn {
        display: inline-flex;
        align-items: center;
        padding: 0.5rem 0.75rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 6px;
        text-decoration: none;
        color: white;
        font-size: 0.9rem;
        transition: all 0.2s ease;
    }

    .mini-btn:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateX(3px);
    }

    .feedback-section {
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
    }

    .feedback-text {
        font-size: 1.05rem;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 1.5rem;
        line-height: 1.7;
    }

    .whatsapp-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        background: rgba(37, 211, 102, 0.15);
        border: 2px solid rgba(37, 211, 102, 0.4);
        border-radius: 12px;
        padding: 1rem 1.5rem;
        text-decoration: none;
        color: white;
        font-size: 1.1rem;
        font-weight: 600;
        transition: all 0.3s ease;
    }

    .whatsapp-btn:hover {
        background: rgba(37, 211, 102, 0.25);
        border-color: rgba(37, 211, 102, 0.6);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
    }

    .whatsapp-icon {
        width: 1.5rem;
        height: 1.5rem;
        filter: brightness(0) invert(1);
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2rem;
        }

        .platforms-grid {
            grid-template-columns: 1fr;
        }

        .accommodation-grid {
            grid-template-columns: 1fr;
        }

        .section-title {
            font-size: 1.4rem;
        }
    }
</style>
