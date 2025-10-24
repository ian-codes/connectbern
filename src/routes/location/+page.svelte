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
            }, 2000);
        }).catch(() => {
            button.innerHTML = 'Failed';
            setTimeout(() => {
                button.innerHTML = '📋 Copy';
            }, 2000);
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

    <div class="phone-highlight">
        <div class="phone-container">
            <div class="phone-number">{t[lang]['location-phone']}</div>
            <button 
                id="copy-button"
                class="btn btn-copy"
                on:click={() => copyPhone(t[lang]['location-phone'], copyButton)}
            >
                📋 Copy
            </button>
        </div>
        <p class="contact-info">{@html t[lang]['location-contact-intro']}</p>
        <p class="volunteers-note">{@html t[lang]['location-volunteers']}</p>
    </div>

    <div class="button-group">
        <a href="https://wa.me/41783166727?text=Hi!%20I%20found%20Connect%20Bern%20online%2C%20my%20name%20is%20____%20%2C%20let%27s%20chat!"
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

    <div class="info-box">
        <p>{@html t[lang]['location-curious']}</p>
    </div>

</section>

<style>
    .phone-highlight {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
        padding: 1.5rem;
        border-radius: 12px;
        text-align: center;
        margin: 1.5rem 0;
        border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .phone-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        background: rgba(0, 0, 0, 0.3);
        padding: 0.75rem 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .phone-number {
        font-size: 1.4rem;
        font-weight: bold;
        color: white;
        margin: 0;
        flex-shrink: 0;
    }

    .contact-info {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        line-height: 1.6;
    }

    .volunteers-note {
        font-style: italic;
        opacity: 0.9;
        margin-top: 1rem;
    }

    .button-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 1.5rem 0;
    }

    .btn {
        display: inline-block;
        text-decoration: none;
        padding: 1rem 1.5rem;
        border-radius: 25px;
        text-align: center;
        font-weight: bold;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        border: none;
        cursor: pointer;
    }

    .btn-copy {
        background: rgba(102, 126, 234, 0.2);
        color: #a8b4ff;
        border: 2px solid #667eea;
        padding: 0.44rem 0.66rem;
        font-size: 0.825rem;
        border-radius: 6px;
        min-width: 66px;
        max-width: 88px;
        white-space: nowrap;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
    }

    .btn-copy:hover {
        background: rgba(102, 126, 234, 0.4);
        transform: translateY(-1px);
    }

    .btn-copy.copied {
        background: #667eea;
        color: white;
        border-color: #667eea;
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
        padding: 1.25rem;
        border-radius: 10px;
        margin-bottom: 1rem;
        border-left: 4px solid rgba(255, 255, 255, 0.3);
        line-height: 1.6;
    }

    .info-box.warning {
        background: rgba(255, 193, 7, 0.15);
        border-left-color: #ffc107;
    }

    .info-box p {
        margin: 0;
    }

    .mobile-only {
        display: block;
    }

    @media (min-width: 768px) {
        .button-group {
            flex-direction: row;
        }

        .phone-number {
            font-size: 1.6rem;
        }

        .mobile-only {
            display: none;
        }

        .phone-container {
            max-width: 600px;
            margin: 0 auto 1rem auto;
        }
    }
</style>
