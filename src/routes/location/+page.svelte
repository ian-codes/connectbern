<svelte:head>
	<title>Physical Space • Connect Bern</title>
</svelte:head>

<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    import { onMount } from 'svelte';

    $: lang = $currentLanguage;
    let copyButton;

    function copyPhone(number, button) {
        navigator.clipboard.writeText(number).then(() => {
            const originalText = button.innerHTML;
            button.innerHTML = 'Copied!';
            button.classList.add('copied');
            button.classList.add('pulse');

            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('copied', 'pulse');
            }, 5000);
        }).catch(() => {
            button.innerHTML = 'Failed';
            setTimeout(() => {
                button.innerHTML = '📋 Copy';
            }, 5000);
        });
    }

    onMount(() => {
        copyButton = document.getElementById('copy-button');
    });
</script>

<section>
    <div class="topbarWrapper">
        <h1>{@html t[lang]['location-title']}</h1>
        <p class="page-description">
            {@html t[lang]['location-description']}
        </p>
    </div>

    <div class="info-box highlight">
        <p>{@html t[lang]['location-visit-info']}</p>
    </div>

    <div class="ideas-section">
        <h2 class="ideas-title">{t[lang]['location-ideas-title']}</h2>
        <div class="ideas-grid">
            {#each t[lang]['location-ideas'] as idea, i (i)}
                <div class="idea-card">
                    {idea}
                </div>
            {/each}
        </div>
    </div>

    <div class="phone-highlight">
        <div class="phone-number">{t[lang]['location-phone']}</div>
        <button
            id="copy-button"
            class="btn btn-copy"
            on:click={() => copyPhone(t[lang]['location-phone'], copyButton)}
        >
            📋 Copy
        </button>
        <p class="contact-info">{@html t[lang]['location-contact-intro']}</p>
        <p class="volunteers-note">{@html t[lang]['location-volunteers']}</p>
    </div>

    <div class="button-group">
        <a href="https://wa.me/41783166727?text={encodeURIComponent(t[lang]['location-whatsapp-message'])}"
           class="btn btn-whatsapp"
           target="_blank">
            {t[lang]['location-btn-whatsapp']}
        </a>
        <a href="tel:+41783166727" class="btn btn-phone mobile-only">
            {t[lang]['location-btn-call']}
        </a>
    </div>

    <div class="info-box warning">
        <p>{@html t[lang]['location-call-first']}</p>
    </div>

</section>

<style>
    /* Mobile-first styles */
    .ideas-section {
        margin: 2rem 0;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .ideas-title {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        margin: 0 0 1.5rem 0;
        color: white;
    }

    .ideas-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .idea-card {
        background: rgba(255, 255, 255, 0.08);
        padding: 1.25rem;
        border-radius: 10px;
        border-left: 4px solid rgba(102, 126, 234, 0.6);
        font-size: 1.1rem;
        line-height: 1.6;
        transition: all 0.3s ease;
    }

    .idea-card:hover {
        background: rgba(255, 255, 255, 0.12);
        transform: translateX(5px);
        border-left-color: rgba(102, 126, 234, 0.9);
    }

    .phone-highlight {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
        padding: 1rem;
        border-radius: 12px;
        text-align: center;
        margin: 1rem 0;
        border: 2px solid rgba(255, 255, 255, 0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
    }

    .phone-number {
        font-size: 1.3rem;
        font-weight: bold;
        color: white;
        margin: 0;
        word-break: break-all;
        padding: 0.5rem 0;
    }

    .contact-info {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        line-height: 1.6;
    }

    .volunteers-note {
        font-style: italic;
        opacity: 0.9;
        margin-top: 0.75rem;
        font-size: 0.95rem;
    }

    .button-group {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin: 1rem 0;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
    }

    .btn {
        display: inline-block;
        text-decoration: none;
        padding: 0.875rem 1.25rem;
        border-radius: 25px;
        text-align: center;
        font-weight: bold;
        font-size: 1rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        border: none;
        cursor: pointer;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
    }

    .btn-copy {
        background: rgba(255, 255, 255, 0.15);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 0.35rem 0.65rem;
        font-size: 0.75rem;
        border-radius: 6px;
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
        font-weight: 500;
        width: auto;
    }

    .btn-copy:hover {
        background: rgba(255, 255, 255, 0.25);
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-1px);
    }

    .btn-copy.copied {
        background: rgba(255, 255, 255, 0.3);
        color: white;
        border-color: rgba(255, 255, 255, 0.6);
    }

    .btn-copy.pulse {
        animation: pulse 0.6s ease-in-out;
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }

    .btn-whatsapp {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
    }

    .btn-phone {
        background: linear-gradient(135deg, #48cae4, #0077b6);
        color: white;
    }

    .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    }

    .info-box {
        background: rgba(255, 255, 255, 0.08);
        padding: 1rem;
        border-radius: 10px;
        margin-bottom: 0.875rem;
        border-left: 4px solid rgba(255, 255, 255, 0.3);
        line-height: 1.6;
        font-size: 0.95rem;
    }

    .info-box.warning {
        background: rgba(255, 193, 7, 0.15);
        border-left-color: #ffc107;
    }

    .info-box.highlight {
        background: rgba(102, 126, 234, 0.15);
        border-left-color: #667eea;
    }

    .info-box p {
        margin: 0;
    }

    .mobile-only {
        display: block;
    }

    /* Mobile-specific styles */
    @media (max-width: 767px) {
        .ideas-section {
            margin: 1.5rem 0.5rem;
            padding: 1rem;
        }

        .ideas-title {
            font-size: 1.3rem;
        }

        .idea-card {
            font-size: 1rem;
            padding: 1rem;
        }

        .phone-highlight {
            margin: 1rem 0.5rem;
            padding: 1rem 0.75rem;
        }

        .button-group {
            margin: 1rem 0.5rem;
            padding: 0 0.5rem;
        }

        .btn {
            width: calc(100% - 1rem);
            margin: 0 0.5rem;
            padding: 0.875rem 1rem;
        }
    }

    /* Tablet and up */
    @media (min-width: 640px) {
        .phone-number {
            font-size: 1.5rem;
        }

        .btn-copy {
            font-size: 0.8rem;
        }
    }

    /* Desktop */
    @media (min-width: 768px) {
        .ideas-section {
            padding: 2rem;
        }

        .ideas-title {
            font-size: 1.8rem;
        }

        .ideas-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }

        .idea-card {
            font-size: 1.15rem;
            padding: 1.5rem;
        }

        .phone-highlight {
            padding: 1.5rem;
            margin: 1.5rem 0;
            gap: 1rem;
        }

        .button-group {
            flex-direction: row;
            gap: 1rem;
            margin: 1.5rem 0;
        }

        .btn {
            padding: 1rem 1.5rem;
            font-size: 1.1rem;
        }

        .phone-number {
            font-size: 1.8rem;
        }

        .contact-info {
            font-size: 1.1rem;
        }

        .volunteers-note {
            font-size: 1rem;
        }

        .info-box {
            padding: 1.25rem;
            margin-bottom: 1rem;
            font-size: 1rem;
        }

        .mobile-only {
            display: none;
        }

        .btn-copy {
            font-size: 0.8rem;
        }
    }
</style>
