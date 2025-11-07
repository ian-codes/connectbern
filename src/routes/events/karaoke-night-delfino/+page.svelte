<svelte:head>
	<title>Karaoke Night at DELFINO • Events • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Karaoke Nacht bei DELFINO",
            description: "Finde Freunde beim Karaoke in dieser Bar jeden Freitag oder Samstag. Du kannst auch in einigen Gruppen fragen, ob jemand mit dir kommen möchte, damit du nicht alleine gehen musst.",
            time: "⏰ Jeden Freitag & Samstag ab 21:00",
            social: "🎤 Soziale Karaoke-Atmosphäre",
            openBar: "🍹 Bar",
            groups: "Du kannst in einigen Gruppen fragen, die du hier finden kannst, ob jemand mit dir kommen möchte, damit du nicht alleine gehen musst!",
            groupsLink: "Hier",
            websiteLink: "DELFINO Öffnungszeiten & Info",
            closing: "Wir freuen uns darauf, dich dort zu sehen! Sing dein Herz aus! 🎵"
        },
        en: {
            title: "Karaoke Night at DELFINO",
            description: "Go find friends while doing karaoke in this bar every Friday or Saturday. You can also ask in some groups if anybody wants to join you, so you don't have to go alone.",
            time: "⏰ Every Friday & Saturday from 21:00",
            social: "🎤 Social karaoke atmosphere",
            openBar: "🍹 Bar",
            groups: "You can ask in some groups that you can find here if anybody wants to join you, so you don't have to go alone!",
            groupsLink: "Here",
            websiteLink: "DELFINO Opening Hours & Info",
            closing: "Looking forward to seeing you there! Sing your heart out! 🎵"
        }
    };
</script>

<section>
    <a class="btn back" href="/events">
        <span>→</span>Back
    </a>

    <div class="cntr">
        <div class="textContainer">
            <h1>{content[lang].title}</h1>

            <p class="description">
                {content[lang].description}
            </p>

            <div class="infoBox">
                <p class="time">{content[lang].time}</p>
                <p class="feature">{content[lang].openBar}</p>
                <p class="feature">{content[lang].social}</p>
            </div>

            <div class="groupsBox">
                <p class="groupsText">
                    {content[lang].groups}
                </p>
                <a href="/groups" class="btn groupsBtn">
                    {content[lang].groupsLink} →
                </a>
            </div>

            <div class="linkBox">
                <a href="https://www.delfinobar.ch/oeffnungszeiten/index.aspx" class="btn websiteBtn" target="_blank" rel="noopener noreferrer">
                    🌐 {content[lang].websiteLink}
                </a>
            </div>

            <p class="closing">
                {content[lang].closing}
            </p>
        </div>
    </div>
</section>

<style>
    @media (max-width: 800px) {
        .cntr {
            flex-wrap: wrap;
            gap: 2em !important;
        }

        h1 {
            font-size: 2rem !important;
        }

        p {
            font-size: 1rem !important;
        }
    }

    section {
        padding: 2em;
        max-width: 900px;
        margin: 0 auto;
    }

    .cntr {
        display: flex;
        flex-direction: column;
        gap: 2em;
        margin: 2em 0;
    }

    .textContainer {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        width: 100%;
    }

    h1 {
        font-size: 3em;
        font-weight: bold;
        text-align: center;
    }

    p {
        font-size: 1.2em;
        line-height: 1.6;
    }

    .description {
        text-align: center;
        font-size: 1.3em;
    }

    .infoBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 0.8em;
    }

    .time {
        font-size: 1.4em;
        font-weight: bold;
        margin: 0;
    }

    .feature {
        font-size: 1.2em;
        margin: 0;
    }

    .groupsBox {
        background: rgba(108, 72, 167, 0.15);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(108, 72, 167, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .groupsText {
        text-align: center;
        margin: 0;
        font-size: 1.2em;
    }

    .groupsBtn {
        padding: 0.5em 1em;
        font-size: 0.95em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        background: rgba(108, 72, 167, 0.6);
        color: white;
        border: 2px solid rgba(108, 72, 167, 0.8);
    }

    .groupsBtn:hover {
        background: rgba(108, 72, 167, 0.8);
        transform: scale(1.05);
    }

    .linkBox {
        display: flex;
        justify-content: center;
        margin-top: 0.5em;
    }

    .websiteBtn {
        padding: 1em 2em;
        font-size: 1.2em;
        text-decoration: none;
        border-radius: 0.8em;
        font-weight: bold;
        transition: all 0.2s ease;
        background: rgba(58, 152, 189, 0.6);
        color: white;
        border: 2px solid rgba(58, 152, 189, 0.8);
    }

    .websiteBtn:hover {
        background: rgba(58, 152, 189, 0.8);
        transform: scale(1.05);
    }

    .closing {
        text-align: center;
        font-size: 1.2em;
        font-style: italic;
        margin-top: 1em;
    }

    .back {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        background: rgba(0, 0, 0, 0.5);
        width: max-content;
        padding: 0.8em 1.2em;
        transition: all 0.2s ease;
        text-decoration: none;
        color: white;
        border-radius: 0.5em;
        margin-bottom: 1em;
    }

    .back span {
        margin-top: 3px;
        transform: rotate(180deg);
    }

    .back:hover {
        transform: scale(1.02);
        background: rgba(0, 0, 0, 0.7);
    }
</style>
