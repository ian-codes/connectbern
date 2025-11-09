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
            title: "Kostenloses Essen",
            madamefrigo: {
                title: "Madame Frigo Kühlschränke",
                text: "Es gibt eine Initiative namens Madame Frigo und sie haben Kühlschränke in der ganzen Stadt, in denen du nach Essen suchen kannst.",
                button: "Standorte ansehen"
            },
            telegram: {
                title: "Food Sharing Telegram Gruppe",
                text: "Du kannst auch der Food Sharing Gruppe auf Telegram beitreten und nach Essen fragen oder warten, bis jemand etwas anbietet.",
                button: "Telegram Gruppe beitreten"
            },
            foodsharing: {
                title: "Food Sharing Website",
                text: "Es gibt eine Website namens Food Sharing, auf der du einen kurzen Test bestehen musst (frag um Hilfe, wenn du nicht weiterkommst) und dann kannst du fast jeden Abend kostenlos Essen von einigen Restaurants und anderen Orten abholen. Die Idee dieser Bewegung ist es, Lebensmittelverschwendung zu reduzieren, also geht es nicht darum, dass du kostenloses Essen bekommst, sondern darum, Lebensmittelverschwendung zu reduzieren. Du kannst das Essen, das du sammelst, auch in der Food Sharing Gruppe oder in den Kühlschränken weitergeben.",
                button: "Food Sharing besuchen"
            },
            toogood: {
                title: "Too Good To Go App",
                text: "Die App Too Good To Go ist nicht kostenlos, aber sie hat viele Geschäfte, die kurz vor Ladenschluss sehr günstiges Essen anbieten.",
                button: "App herunterladen"
            },
            supermarket: {
                title: "Supermarkt-Rabatte",
                text: "Am Ende des Tages findest du in Supermärkten oft Lebensmittel, die viel günstiger sind als normal, besonders bei Migros und Coop.",
            },
            microwave: {
                title: "Mikrowelle im Supermarkt",
                text: "Du kannst die Mikrowelle im Supermarkt benutzen, wenn sie geöffnet sind. Zum Beispiel bei Coop/Migros.",
            },
            fountain: {
                title: "Trinkbrunnen",
                text: "Du kannst das Wasser aus den Brunnen trinken, die du überall in der Stadt findest!",
            }
        },
        en: {
            title: "Free Food",
            madamefrigo: {
                title: "Madame Frigo Fridges",
                text: "There is an initiative called Madame Frigo and they have fridges all around the city, which you can check for food.",
                button: "View Locations"
            },
            telegram: {
                title: "Food Sharing Telegram Group",
                text: "You can also join the food sharing group on Telegram and ask for food or wait until someone posts something they are offering.",
                button: "Join Telegram Group"
            },
            foodsharing: {
                title: "Food Sharing Website",
                text: "There is a website called Food Sharing you need to pass a short test (ask them for help if you get stuck) and then you can pick up food from some restaurants and other places for free nearly every evening. The idea of this movement is to reduce food waste so it's not about you getting free food, but about reducing food waste, you can also give out the food that you collect in the food sharing group or in the fridges.",
                button: "Visit Food Sharing"
            },
            toogood: {
                title: "Too Good To Go App",
                text: "The app Too Good to go is not free but it has a lot of stores offering very cheap food just before closing.",
                button: "Download App"
            },
            supermarket: {
                title: "Supermarket Discounts",
                text: "At the end of the day at supermarkets you can often find food that will be much cheaper than normal, especially at Migros and Coop.",
            },
            microwave: {
                title: "Supermarket Microwave",
                text: "You can use the microwave in the supermarket when they are open. For example in Coop/Migros.",
            },
            fountain: {
                title: "Drinking Fountains",
                text: "You can drink the water from the fountains which you can find all around town!",
            }
        }
    };
</script>

<div class="section">
    <div class="header">
        <h2>{content[lang].title}</h2>
    </div>

    <!-- Madame Frigo -->
    <div class="tip-card accent">
        <h3 class="title-with-icon">
            <span class="icon">🧊</span>
            {content[lang].madamefrigo.title}
        </h3>
        <p>{content[lang].madamefrigo.text}</p>
        <a href="https://www.madamefrigo.ch/de/standorte/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            📍 {content[lang].madamefrigo.button}
        </a>
    </div>

    <!-- Telegram Group -->
    <div class="tip-card">
        <h3 class="title-with-icon">
            <span class="icon-svg" style="background-image: url('/icons/telegram.svg');"></span>
            {content[lang].telegram.title}
        </h3>
        <p>{content[lang].telegram.text}</p>
        <a href="https://t.me/foodsharingbern" class="btn btn-info" target="_blank" rel="noopener noreferrer">
            ✈️ {content[lang].telegram.button}
        </a>
    </div>

    <!-- Food Sharing -->
    <div class="tip-card highlight">
        <h3 class="title-with-icon">
            <span class="icon">🍱</span>
            {content[lang].foodsharing.title}
        </h3>
        <p>{content[lang].foodsharing.text}</p>
        <a href="https://foodsharing.de" class="btn btn-success" target="_blank" rel="noopener noreferrer">
            🌱 {content[lang].foodsharing.button}
        </a>
    </div>

    <!-- Too Good To Go -->
    <div class="tip-card">
        <h3 class="title-with-icon">
            <span class="icon">🛍️</span>
            {content[lang].toogood.title}
        </h3>
        <p>{content[lang].toogood.text}</p>
        <a href="https://play.google.com/store/apps/details?id=com.app.tgtg&hl=de_CH" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            📱 {content[lang].toogood.button}
        </a>
    </div>

    <!-- Supermarket Discounts -->
    <div class="tip-card">
        <h3 class="title-with-icon">
            <span class="icon">🏪</span>
            {content[lang].supermarket.title}
        </h3>
        <p>{content[lang].supermarket.text}</p>
    </div>

    <!-- Tips Section -->
    <div class="tips-grid">
        <div class="tip-box">
            <span class="tip-icon">🔥</span>
            <h4>{content[lang].microwave.title}</h4>
            <p>{content[lang].microwave.text}</p>
        </div>

        <div class="tip-box">
            <span class="tip-icon">💧</span>
            <h4>{content[lang].fountain.title}</h4>
            <p>{content[lang].fountain.text}</p>
        </div>
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

    .tip-card {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        transition: all 0.3s ease;
    }

    .tip-card:hover {
        background: rgba(255, 255, 255, 0.08);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .tip-card.highlight {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.15);
    }

    .tip-card.accent {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.15);
    }

    .title-with-icon {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
    }

    .icon {
        font-size: 2rem;
        flex-shrink: 0;
    }

    .icon-svg {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        flex-shrink: 0;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0;
        color: white;
    }

    h4 {
        font-size: 1.2rem;
        font-weight: bold;
        margin: 0 0 0.5rem 0;
        color: white;
    }

    p {
        font-size: 1.05rem;
        line-height: 1.7;
        margin-bottom: 1rem;
        color: rgba(255, 255, 255, 0.9);
    }

    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1.25rem;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        transition: all 0.2s ease;
        border: none;
        cursor: pointer;
        white-space: nowrap;
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

    .btn-success {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .btn-success:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-2px);
    }

    .btn-info {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .btn-info:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-2px);
    }

    .tips-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }

    .tip-box {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 1.5rem;
        text-align: center;
        transition: all 0.3s ease;
    }

    .tip-box:hover {
        background: rgba(255, 255, 255, 0.08);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .tip-icon {
        font-size: 3rem;
        display: block;
        margin-bottom: 1rem;
    }

    .tip-box h4 {
        text-align: center;
        margin-bottom: 0.75rem;
    }

    .tip-box p {
        margin: 0;
        text-align: center;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2rem;
        }

        .tip-card {
            padding: 1.25rem;
        }

        .icon {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.3rem;
        }

        .tips-grid {
            grid-template-columns: 1fr;
        }

        .btn {
            width: 100%;
        }
    }
</style>
