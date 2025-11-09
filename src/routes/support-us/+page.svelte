<svelte:head>
	<title>Support Us • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';
    import { t } from "$lib/locales/translations.js";
    import { getContext, onMount } from 'svelte';

    let scrollToContent;
    try {
        scrollToContent = getContext('scrollToContent');
    } catch (e) {
        scrollToContent = () => {};
    }

    onMount(() => {
        if (scrollToContent) {
            scrollToContent();
        }
    });

    $: lang = $currentLanguage;

    function copyToClipboard(text, button) {
        navigator.clipboard.writeText(text).then(() => {
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
                button.innerHTML = t[lang]['support-btn-copy-number'];
            }, 5000);
        });
    }
</script>

<section>
    <div class="header">
        <h1>{t[lang]['support-us-title']}</h1>
        <p class="intro">{t[lang]['support-us-description']}</p>
    </div>

    <!-- Ways to Help Cards -->
    <div class="waysToHelp">
        <div class="helpCard">
            <div class="helpIcon">🎯</div>
            <h3>{t[lang]['support-events-title'].replace('🎯 ', '')}</h3>
            <p>{@html t[lang]['support-events-desc']}</p>
        </div>

        <div class="helpCard">
            <div class="helpIcon">🤝</div>
            <h3>{t[lang]['support-physical-title'].replace('🤝 ', '')}</h3>
            <p>{t[lang]['support-physical-desc']}</p>
        </div>
    </div>

    <!-- Financial Support Section -->
    <div class="financialSection">
        <h2>{t[lang]['support-financial-title']}</h2>
        <p class="financialIntro">{t[lang]['support-financial-desc']}</p>

        <div class="donationOptions">
            <div class="donationCard membership">
                <div class="cardHeader">
                    <h3>{t[lang]['support-membership-title']}</h3>
                    <div class="price">CHF 100<span>/month</span></div>
                </div>
                <p>{@html t[lang]['support-membership-desc'].replace('<strong>CHF 100 pro Monat</strong>', '').replace('<strong>CHF 100 per month</strong>', '').replace('Werde Ehrenmitglied für . Als Mitglied erhältst du', 'Als Mitglied erhältst du').replace('Become an honorary member for . As a member, you\'ll get', 'As a member, you\'ll get')}</p>
            </div>

            <div class="donationCard oneTime">
                <div class="cardHeader">
                    <h3>{t[lang]['support-donate-title']}</h3>
                    <div class="suggested">{@html t[lang]['support-donate-per-event']}</div>
                </div>
                <p class="smallText">{t[lang]['support-donate-per-event-desc']}</p>
            </div>
        </div>

        <!-- Payment Methods -->
        <h3 class="methodsTitle">{t[lang]['support-ways-to-donate']}</h3>
        <div class="paymentMethods">
            <div class="methodCard">
                <h4>{t[lang]['support-twint-title']}</h4>
                <p>{t[lang]['support-twint-desc']}</p>
                <p class="phoneNumber">{t[lang]['support-twint-number-value']}</p>
                <button on:click={(e) => copyToClipboard(t[lang]['support-twint-number-value'], e.currentTarget)} class="btn btnCopy">{t[lang]['support-btn-copy-number']}</button>
            </div>

            <div class="methodCard">
                <h4>{t[lang]['support-credit-card-title']}</h4>
                <p>{t[lang]['support-credit-card-desc']}</p>
                <a href="https://pay.sumup.com/b2c/QYBH4SPE" target="_blank" rel="noopener noreferrer" class="btn btnPrimary btnFull">{t[lang]['support-btn-credit-card']}</a>
            </div>

            <div class="methodCard">
                <h4>{t[lang]['support-bank-title']}</h4>
                <p>{t[lang]['support-bank-desc']}</p>
            </div>

            <div class="methodCard">
                <h4>{t[lang]['support-cash-title']}</h4>
                <p>{t[lang]['support-cash-desc']}</p>
                <p>{t[lang]['support-cash-details']}</p>
            </div>
        </div>
    </div>

    <!-- Thank You -->
    <div class="thankYou">
        <h2>{t[lang]['support-thank-you']}</h2>
        <p>{t[lang]['support-thank-you-desc']}</p>
    </div>
</section>

<style>
    section {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2em 1em 4em;
    }

    .header {
        text-align: center;
        margin-bottom: 3em;
    }

    h1 {
        font-size: 3em;
        font-weight: bold;
        margin-bottom: 0.5em;
    }

    .intro {
        font-size: 1.3em;
        opacity: 0.9;
        line-height: 1.6;
        max-width: 700px;
        margin: 0 auto;
    }

    /* Ways to Help */
    .waysToHelp {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5em;
        margin-bottom: 4em;
    }

    .helpCard {
        background: linear-gradient(135deg, rgba(108, 72, 167, 0.15), rgba(58, 152, 189, 0.15));
        border: 2px solid rgba(108, 72, 167, 0.3);
        border-radius: 1em;
        padding: 2em;
        transition: all 0.3s ease;
    }

    .helpCard:hover {
        transform: translateY(-5px);
        border-color: rgba(108, 72, 167, 0.5);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .helpIcon {
        font-size: 3em;
        margin-bottom: 0.5em;
    }

    .helpCard h3 {
        font-size: 1.6em;
        font-weight: bold;
        margin-bottom: 0.8em;
    }

    .helpCard p {
        font-size: 1.05em;
        line-height: 1.6;
        opacity: 0.9;
        margin: 0;
    }

    /* Financial Support */
    .financialSection {
        margin-bottom: 3em;
    }

    .financialSection h2 {
        font-size: 2.5em;
        font-weight: bold;
        text-align: center;
        margin-bottom: 0.5em;
    }

    .financialIntro {
        font-size: 1.2em;
        text-align: center;
        opacity: 0.9;
        max-width: 800px;
        margin: 0 auto 3em;
        line-height: 1.6;
    }

    .donationOptions {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2em;
        margin-bottom: 3em;
    }

    .donationCard {
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 1em;
        padding: 2em;
        transition: all 0.3s ease;
    }

    .donationCard:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(162, 128, 218, 0.5);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .membership {
        border-color: rgba(162, 128, 218, 0.4);
        background: rgba(162, 128, 218, 0.1);
    }

    .cardHeader {
        border-bottom: 2px solid rgba(255, 255, 255, 0.1);
        padding-bottom: 1em;
        margin-bottom: 1em;
    }

    .cardHeader h3 {
        font-size: 1.6em;
        font-weight: bold;
        margin: 0 0 0.5em 0;
    }

    .price {
        font-size: 2.5em;
        font-weight: bold;
        color: #fff;
    }

    .price span {
        font-size: 0.5em;
        opacity: 0.7;
    }

    .suggested {
        font-size: 1.3em;
        font-weight: 600;
        opacity: 0.9;
    }

    .donationCard p {
        font-size: 1.05em;
        line-height: 1.6;
        opacity: 0.9;
        margin: 0;
    }

    .smallText {
        font-size: 0.95em !important;
        opacity: 0.8 !important;
    }

    /* Payment Methods */
    .methodsTitle {
        font-size: 2em;
        font-weight: bold;
        text-align: center;
        margin-bottom: 2em;
    }

    .paymentMethods {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5em;
        margin-bottom: 2em;
    }

    .methodCard {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.8em;
        padding: 1.5em;
        transition: all 0.3s ease;
    }

    .methodCard:hover {
        background: rgba(0, 0, 0, 0.3);
        border-color: rgba(255, 255, 255, 0.2);
    }

    .methodCard h4 {
        font-size: 1.3em;
        font-weight: bold;
        margin: 0 0 0.8em 0;
    }

    .methodCard p {
        font-size: 1em;
        line-height: 1.5;
        opacity: 0.9;
        margin: 0 0 1em 0;
    }

    .note {
        font-size: 0.9em;
        opacity: 0.7;
        font-style: italic;
    }

    .phoneNumber {
        font-size: 1.3em !important;
        font-weight: bold !important;
        letter-spacing: 1px;
        margin: 1em 0 !important;
    }

    .bankInfo {
        background: rgba(0, 0, 0, 0.2);
        padding: 1em;
        border-radius: 0.5em;
        font-size: 0.95em;
    }

    .bankInfo div {
        margin: 0.5em 0;
        word-break: break-all;
    }

    .buttonGroup {
        display: flex;
        gap: 0.8em;
        flex-wrap: wrap;
        margin-top: 1em;
        width: 100%;
    }

    .buttonGroup .btn {
        flex: 1 1 auto;
        min-width: 0;
    }

    .btn {
        display: inline-block;
        padding: 0.7em 1.2em;
        border-radius: 0.5em;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9em;
        transition: all 0.2s ease;
        cursor: pointer;
        border: none;
        font-family: inherit;
        text-align: center;
        white-space: nowrap;
        line-height: 1.4;
        box-sizing: border-box;
    }

    .btnPrimary {
        background: linear-gradient(135deg, rgba(108, 72, 167, 0.9), rgba(58, 152, 189, 0.9));
        color: white;
    }

    .btnPrimary:hover {
        background: linear-gradient(135deg, rgba(108, 72, 167, 1), rgba(58, 152, 189, 1));
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .btnSecondary {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .btnSecondary:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-2px);
    }

    .btnCopy {
        background: rgba(255, 255, 255, 0.15);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 0.6em 1em;
        font-size: 0.9em;
        width: auto;
        margin: 0 auto;
        display: block;
    }

    .btnCopy:hover {
        background: rgba(255, 255, 255, 0.25);
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-1px);
    }

    .btnCopy.copied {
        background: rgba(255, 255, 255, 0.3);
        color: white;
        border-color: rgba(255, 255, 255, 0.6);
    }

    .btnCopy.pulse {
        animation: pulse 0.6s ease-in-out;
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }

    .btnFull {
        width: 100%;
        max-width: 100%;
    }

    /* Thank You */
    .thankYou {
        text-align: center;
        margin-top: 4em;
        padding: 2.5em 2em;
        background: linear-gradient(135deg, rgba(108, 72, 167, 0.2), rgba(58, 152, 189, 0.2));
        border-radius: 1em;
        border: 2px solid rgba(108, 72, 167, 0.4);
    }

    .thankYou h2 {
        font-size: 2.2em;
        font-weight: bold;
        margin-bottom: 0.5em;
    }

    .thankYou p {
        font-size: 1.2em;
        opacity: 0.95;
        max-width: 700px;
        margin: 0 auto;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 1.8em;
        }

        .intro {
            font-size: 1em;
        }

        .waysToHelp {
            grid-template-columns: 1fr;
            gap: 1.2em;
        }

        .helpIcon {
            font-size: 2.5em;
        }

        .helpCard h3 {
            font-size: 1.2em;
        }

        .financialSection h2 {
            font-size: 1.6em;
        }

        .financialIntro {
            font-size: 1em;
        }

        .donationOptions {
            grid-template-columns: 1fr;
            gap: 1.5em;
        }

        .price {
            font-size: 2em;
        }

        .methodsTitle {
            font-size: 1.3em;
        }

        .paymentMethods {
            grid-template-columns: 1fr;
            gap: 1.2em;
        }

        .buttonGroup {
            flex-direction: column;
        }

        .btn {
            width: 100%;
        }

        .thankYou {
            padding: 2em 1.5em;
        }

        .thankYou h2 {
            font-size: 1.5em;
        }

        .thankYou p {
            font-size: 1em;
        }
    }
</style>
