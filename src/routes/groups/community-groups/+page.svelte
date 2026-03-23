<svelte:head>
    <title>Connect Bern Groups • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';
    $: lang = $currentLanguage;

    const groups = [
        {
            slug: 'connect-bern',
            img: '/groups/connect-bern-logo-orange.png',
            link: 'https://tiny.cc/connectbernwhatsapp',
            name: { en: 'Our Main Groups', de: 'Our Main Groups' },
            desc: {
                en: 'Our main groups on WhatsApp, Telegram and Facebook , for organising activities, sharing events and inviting others to join.',
                de: 'Unsere Hauptgruppen auf WhatsApp, Telegram und Facebook , zum Organisieren von Aktivitäten, Teilen von Events und Einladen anderer.'
            }
        },
        {
            slug: 'hang-out',
            img: '/groups/hang-out.jpg',
            link: 'https://tiny.cc/connectbernhangout',
            name: { en: 'Hang Out', de: 'Hang Out' },
            desc: {
                en: 'A relaxed space to connect. Say hi, invite people to events, or just suggest a spontaneous meetup.',
                de: 'Ein lockerer Ort zum Vernetzen. Sag Hallo, lade Leute zu Events ein oder schlage ein spontanes Treffen vor.'
            }
        },
        {
            slug: 'ask-for-help',
            img: '/groups/ask-for-help.jpg',
            link: 'https://tiny.cc/askforhelp',
            name: { en: 'Ask for Help', de: 'Fragen & Hilfe' },
            desc: {
                en: 'Have a question or need help with anything? Ask here , and if you like helping people, you\'re welcome to stick around.',
                de: 'Hast du eine Frage oder brauchst du Hilfe? Frag hier , und wenn du helfen möchtest, bleib einfach in der Gruppe.'
            }
        }
    ];

    const moreGroups = [
        { emoji: '🏓', en: 'Ping pong', de: 'Tischtennis' },
        { emoji: '📚', en: 'Book club', de: 'Buchclub' },
        { emoji: '🎵', en: 'Music', de: 'Musik' },
        { emoji: '📷', en: 'Photography', de: 'Fotografie' },
        { emoji: '👩', en: 'Girls Hangout', de: 'Girls Hangout' },
        { emoji: '🏳️‍🌈', en: 'Queer friends', de: 'Queer Friends' },
    ];
</script>

<section>
    <a class="back" href="/groups">← {lang === 'de' ? 'Alle Gruppen' : 'All groups'}</a>

    <div class="hero">
        <img src="/groups/connect-bern-logo-orange.png" alt="Connect Bern" class="heroLogo" />
        <h1>{lang === 'de' ? 'Connect Bern Gruppen' : 'Connect Bern Groups'}</h1>
        <p class="heroSub">{lang === 'de' ? 'Gruppen, die wir für die Community organisieren , für verschiedene Zwecke und Interessen.' : 'Groups we organise for the community , for different purposes and interests.'}</p>
    </div>

    <div class="groupCards">
        {#each groups as g}
            <a href="/groups/{g.slug}" class="groupCard">
                <div class="cardImg" style="background-image: url('{g.img}');"></div>
                <div class="cardBody">
                    <h2>{g.name[lang]}</h2>
                    <p>{g.desc[lang]}</p>
                </div>
            </a>
        {/each}
    </div>

    <div class="moreSection">
        <h2>{lang === 'de' ? 'Weitere Community-Gruppen' : 'More community groups'}</h2>
        <p class="moreSub">{lang === 'de' ? 'Tritt der WhatsApp-Community bei, um Zugang zu allen Gruppen zu bekommen:' : 'Join the WhatsApp community to get access to all groups:'}</p>
        <div class="moreList">
            {#each moreGroups as g}
                <span class="moreItem">{g.emoji} {g[lang]}</span>
            {/each}
            <span class="moreItem moreEtc">{lang === 'de' ? '…und mehr!' : '…and more!'}</span>
        </div>

        <a href="https://tiny.cc/connectbernwhatsapp" target="_blank" rel="noopener noreferrer" class="joinBtn">
            <img src="/icons/whatsapp.svg" alt="WhatsApp" class="waIcon" />
            {lang === 'de' ? 'WhatsApp Community beitreten' : 'Join WhatsApp Community'}
        </a>
    </div>
</section>

<style>
    section {
        max-width: 800px;
        margin: 0 auto;
        padding: 1.5rem 1rem 4rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .back {
        color: white;
        text-decoration: none;
        opacity: 0.7;
        font-size: 0.9em;
        transition: opacity 0.2s;
    }

    .back:hover { opacity: 1; }

    .hero {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
    }

    .heroLogo {
        width: 64px;
        height: 64px;
        object-fit: contain;
    }

    .hero h1 {
        font-size: 2rem;
        margin: 0;
    }

    .heroSub {
        opacity: 0.75;
        max-width: 520px;
        line-height: 1.6;
        margin: 0;
    }

    .groupCards {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .groupCard {
        display: flex;
        gap: 1.25rem;
        background: rgba(255,255,255,0.07);
        border-radius: 16px;
        overflow: hidden;
        text-decoration: none;
        color: white;
        transition: background 0.2s ease, transform 0.2s ease;
    }

    .groupCard:hover {
        background: rgba(255,255,255,0.12);
        transform: translateY(-2px);
    }

    .cardImg {
        width: 110px;
        flex-shrink: 0;
        background-size: cover;
        background-position: center;
    }

    .cardBody {
        padding: 1.1rem 1.1rem 1.1rem 0;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    .cardBody h2 {
        margin: 0;
        font-size: 1.1rem;
    }

    .cardBody p {
        margin: 0;
        opacity: 0.75;
        font-size: 0.9rem;
        line-height: 1.5;
    }

    .moreSection {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.25rem;
        text-align: center;
    }

    .moreSection h2 {
        margin: 0;
        font-size: 1.3rem;
    }

    .moreSub {
        margin: 0;
        opacity: 0.75;
        font-size: 0.95rem;
    }

    .moreList {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        justify-content: center;
    }

    .moreItem {
        background: rgba(255,255,255,0.1);
        border-radius: 2em;
        padding: 0.35em 0.9em;
        font-size: 0.9rem;
    }

    .moreEtc {
        opacity: 0.6;
        font-style: italic;
    }

    .joinBtn {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.8rem 2rem;
        background: linear-gradient(135deg, #25D366, #128C7E);
        border-radius: 3em;
        color: white;
        font-weight: 700;
        font-size: 1rem;
        text-decoration: none;
        transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
    }

    .joinBtn:hover {
        background: linear-gradient(135deg, #128C7E, #075E54);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
    }

    .waIcon {
        width: 1.4rem;
        height: 1.4rem;
        object-fit: contain;
    }

    @media (max-width: 600px) {
        .cardImg {
            width: 80px;
        }

        .hero h1 {
            font-size: 1.6rem;
        }
    }
</style>
