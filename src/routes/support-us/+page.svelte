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

    <!-- Share Section -->
    <div class="shareSection">
        <h2>{t[lang]['support-share-title']}</h2>
        <p>{@html t[lang]['support-share-desc']}</p>
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

        <!-- Creative Funding Section -->
        <div class="creativeFunding">
            <!-- Alpian Promotion -->
            <div class="alpianPromo">
                <h3>{@html t[lang]['support-alpian-title']}</h3>
                <p class="alpianIntro">{@html t[lang]['support-alpian-desc']}</p>

                <div class="alpianCode">
                    <span class="codeLabel">{t[lang]['support-alpian-code']}</span>
                    <span class="codeValue">{t[lang]['support-alpian-code-value']}</span>
                    <button on:click={(e) => copyToClipboard(t[lang]['support-alpian-code-value'], e.currentTarget)} class="btn btnCopy">{t[lang]['support-btn-copy-code']}</button>
                </div>

                <div class="alpianSteps">
                    <h4>{t[lang]['support-alpian-steps-title']}</h4>
                    <ol>
                        <li>{@html t[lang]['support-alpian-step-1']}</li>
                        <li>{@html t[lang]['support-alpian-step-2']}</li>
                        <li>{@html t[lang]['support-alpian-step-3']}</li>
                        <li>{@html t[lang]['support-alpian-step-4']}</li>
                        <li>{@html t[lang]['support-alpian-step-5']}</li>
                    </ol>
                </div>

                <a href="https://play.google.com/store/apps/details?id=com.alpian.alpian" target="_blank" rel="noopener noreferrer" class="btn btnPrimary btnAlpian">{t[lang]['support-btn-alpian-app']}</a>
            </div>

            <!-- Creative Ideas -->
            <div class="creativeIdeas">
                <h3>{@html t[lang]['support-creative-title']}</h3>
                <p class="creativeIntro">{@html t[lang]['support-creative-desc']}</p>

                <div class="ideasList">
                    <h4>{t[lang]['support-creative-ideas-title']}</h4>
                    <ul>
                        <li>{@html t[lang]['support-creative-idea-1']}</li>
                        <li>{@html t[lang]['support-creative-idea-2']}</li>
                        <li>{@html t[lang]['support-creative-idea-3']}</li>
                        <li>{@html t[lang]['support-creative-idea-4']}</li>
                    </ul>
                </div>

                <a href="/contact" class="btn btnPrimary btnAlpian">{t[lang]['support-btn-contact-ideas']}</a>
            </div>
        </div>

        <div class="donationsSection">
            <h3 class="donationsTitle">{t[lang]['support-donations-title']}</h3>
            <p class="donationsIntro">{t[lang]['support-donations-intro']}</p>
        </div>

        <div class="donationOptions">
            <div class="donationCard membership">
                <div class="cardHeader">
                    <h3>{t[lang]['support-membership-core-title']}</h3>
                    <div class="price">CHF 100<span>/month</span></div>
                </div>
                <p>{t[lang]['support-membership-core-desc']}</p>
            </div>

            <div class="donationCard membership regular">
                <div class="cardHeader">
                    <h3>{t[lang]['support-membership-regular-title']}</h3>
                    <div class="price">CHF 50<span>/year</span></div>
                </div>
                <p>{t[lang]['support-membership-regular-desc']}</p>
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

    /* Share Section */
    .shareSection {
        background: linear-gradient(135deg, rgba(255, 183, 77, 0.2), rgba(255, 138, 101, 0.2));
        border: 3px solid rgba(255, 183, 77, 0.5);
        border-radius: 1.2em;
        padding: 2.5em;
        margin-bottom: 3em;
        text-align: center;
        box-shadow: 0 8px 25px rgba(255, 183, 77, 0.2);
    }

    .shareSection h2 {
        font-size: 2.2em;
        font-weight: bold;
        margin: 0 0 0.8em 0;
        color: #fff;
    }

    .shareSection p {
        font-size: 1.25em;
        line-height: 1.7;
        opacity: 0.95;
        max-width: 750px;
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

    .donationsSection {
        text-align: center;
        margin-bottom: 2em;
        padding: 2em;
        background: rgba(162, 128, 218, 0.1);
        border-radius: 1em;
        border: 2px solid rgba(162, 128, 218, 0.3);
    }

    .donationsTitle {
        font-size: 2em;
        font-weight: bold;
        margin: 0 0 0.8em 0;
        color: #fff;
    }

    .donationsIntro {
        font-size: 1.15em;
        line-height: 1.7;
        opacity: 0.95;
        max-width: 800px;
        margin: 0 auto;
    }

    .donationOptions {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5em;
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

    /* Creative Funding Section */
    .creativeFunding {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 2em;
        margin-bottom: 3em;
    }

    /* Alpian Promotion */
    .alpianPromo {
        background: linear-gradient(135deg, rgba(58, 152, 189, 0.15), rgba(108, 72, 167, 0.15));
        border: 2px solid rgba(58, 152, 189, 0.4);
        border-radius: 1em;
        padding: 2.5em;
    }

    /* Creative Ideas */
    .creativeIdeas {
        background: linear-gradient(135deg, rgba(108, 72, 167, 0.15), rgba(255, 183, 77, 0.15));
        border: 2px solid rgba(108, 72, 167, 0.4);
        border-radius: 1em;
        padding: 2.5em;
        display: flex;
        flex-direction: column;
    }

    .creativeIdeas h3 {
        font-size: 1.8em;
        font-weight: bold;
        margin: 0 0 0.8em 0;
        text-align: center;
    }

    .creativeIntro {
        font-size: 1.1em;
        line-height: 1.6;
        opacity: 0.95;
        text-align: center;
        margin-bottom: 2em;
    }

    .ideasList {
        flex: 1;
        margin-bottom: 2em;
    }

    .ideasList h4 {
        font-size: 1.4em;
        font-weight: bold;
        margin-bottom: 1em;
    }

    .ideasList ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .ideasList li {
        padding: 1em;
        margin-bottom: 0.8em;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 0.5em;
        font-size: 1.05em;
        line-height: 1.6;
    }

    .alpianPromo h3 {
        font-size: 1.8em;
        font-weight: bold;
        margin: 0 0 0.8em 0;
        text-align: center;
    }

    .alpianIntro {
        font-size: 1.1em;
        line-height: 1.6;
        opacity: 0.95;
        text-align: center;
        margin-bottom: 2em;
    }

    .alpianCode {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
        flex-wrap: wrap;
        background: rgba(0, 0, 0, 0.3);
        padding: 1.5em;
        border-radius: 0.8em;
        margin-bottom: 2em;
    }

    .codeLabel {
        font-size: 1.1em;
        font-weight: 600;
        opacity: 0.9;
    }

    .codeValue {
        font-size: 1.8em;
        font-weight: bold;
        font-family: monospace;
        letter-spacing: 2px;
        color: #a280da;
        background: rgba(0, 0, 0, 0.3);
        padding: 0.3em 0.8em;
        border-radius: 0.5em;
    }

    .alpianSteps {
        margin-bottom: 2em;
    }

    .alpianSteps h4 {
        font-size: 1.4em;
        font-weight: bold;
        margin-bottom: 1em;
        text-align: center;
    }

    .alpianSteps ol {
        list-style: none;
        counter-reset: step-counter;
        padding: 0;
        max-width: 600px;
        margin: 0 auto 1.5em;
    }

    .alpianSteps li {
        counter-increment: step-counter;
        position: relative;
        padding: 0.8em 0.8em 0.8em 3em;
        margin-bottom: 0.8em;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 0.5em;
        font-size: 1.05em;
        line-height: 1.5;
    }

    .alpianSteps li::before {
        content: counter(step-counter);
        position: absolute;
        left: 0.8em;
        top: 50%;
        transform: translateY(-50%);
        background: linear-gradient(135deg, rgba(108, 72, 167, 0.8), rgba(58, 152, 189, 0.8));
        color: white;
        font-weight: bold;
        width: 1.8em;
        height: 1.8em;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9em;
    }

    .alpianResult {
        background: rgba(162, 128, 218, 0.2);
        border: 2px solid rgba(162, 128, 218, 0.4);
        padding: 1.2em;
        border-radius: 0.8em;
        text-align: center;
        font-size: 1.15em;
        font-weight: 600;
        margin: 0;
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

    .btnAlpian {
        max-width: 450px;
        margin: 0 auto;
        display: block;
        padding: 1em 1.5em;
        font-size: 0.95em;
        white-space: normal;
        line-height: 1.4;
        text-align: center;
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

        .shareSection {
            padding: 1.8em;
            margin-bottom: 2em;
        }

        .shareSection h2 {
            font-size: 1.5em;
        }

        .shareSection p {
            font-size: 1.05em;
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

        .donationsSection {
            padding: 1.5em;
        }

        .donationsTitle {
            font-size: 1.4em;
        }

        .donationsIntro {
            font-size: 1em;
        }

        .creativeFunding {
            grid-template-columns: 1fr;
            gap: 1.5em;
        }

        .alpianPromo {
            padding: 1.5em;
        }

        .creativeIdeas {
            padding: 1.5em;
        }

        .creativeIdeas h3 {
            font-size: 1.4em;
        }

        .creativeIntro {
            font-size: 1em;
        }

        .ideasList h4 {
            font-size: 1.2em;
        }

        .ideasList li {
            font-size: 0.95em;
            padding: 0.9em;
        }

        .alpianPromo h3 {
            font-size: 1.4em;
        }

        .alpianIntro {
            font-size: 1em;
        }

        .alpianCode {
            flex-direction: column;
            gap: 0.8em;
            padding: 1.2em;
        }

        .codeValue {
            font-size: 1.4em;
        }

        .alpianSteps h4 {
            font-size: 1.2em;
        }

        .alpianSteps li {
            font-size: 0.95em;
            padding: 0.7em 0.7em 0.7em 2.8em;
        }

        .alpianSteps li::before {
            width: 1.6em;
            height: 1.6em;
            font-size: 0.85em;
        }

        .alpianResult {
            font-size: 1em;
        }

        .btnAlpian {
            max-width: 100%;
            font-size: 0.9em;
            padding: 0.9em 1.2em;
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
