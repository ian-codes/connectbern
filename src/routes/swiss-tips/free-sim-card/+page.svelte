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
            title: "Kostenlose SIM-Karte mit Daten",
            intro: "Es gibt viele verschiedene gute kostenlose Angebote, die für SIM-Karten mit Daten kommen und gehen. Derzeit kennen wir eines von Digital Republic für einen Monat unbegrenzte Daten kostenlos:",
            currentOffer: "Aktuelles Angebot",
            provider: "Digital Republic",
            details: "1 Monat unbegrenzte Daten kostenlos",
            getCard: "SIM-Karte holen"
        },
        en: {
            title: "Free SIM Card with Data",
            intro: "There are many different good free offers that come and go for SIM cards with data. Currently the one we know about is from Digital Republic for one month unlimited data for free:",
            currentOffer: "Current Offer",
            provider: "Digital Republic",
            details: "1 month unlimited data for free",
            getCard: "Get SIM Card"
        }
    };
</script>

<div class="section">
    <div class="header">
        <h2>{content[lang].title}</h2>
        <p class="intro-text">{content[lang].intro}</p>
    </div>

    <div class="offer-card">
        <div class="offer-badge">✨ {content[lang].currentOffer}</div>
        <h3>{content[lang].provider}</h3>
        <p class="offer-details">📱 {content[lang].details}</p>
        <a href="https://digitalrepublic.ch/en/mobile/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            🎁 {content[lang].getCard}
        </a>
    </div>
</div>

<style>
    .section {
        padding: 0;
    }

    .header {
        margin-bottom: 2rem;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: white;
    }

    .intro-text {
        font-size: 1.1rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 2rem;
    }

    .offer-card {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 16px;
        padding: 2rem;
        text-align: center;
        transition: all 0.3s ease;
    }

    .offer-card:hover {
        transform: translateY(-2px);
        background: rgba(255, 255, 255, 0.08);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .offer-badge {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: white;
        padding: 0.5rem 1.25rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

    h3 {
        font-size: 2rem;
        font-weight: bold;
        margin: 0 0 1rem 0;
        color: white;
    }

    .offer-details {
        font-size: 1.3rem;
        margin: 1.5rem 0;
        color: rgba(255, 255, 255, 0.9);
        font-weight: 500;
    }

    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 2rem;
        border-radius: 12px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.2s ease;
        border: none;
        cursor: pointer;
        margin-top: 1rem;
    }

    .btn-primary {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .btn-primary:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.6rem;
        }

        .offer-card {
            padding: 1.5rem;
        }

        .btn {
            width: 100%;
        }
    }
</style>
