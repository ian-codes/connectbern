<svelte:head>
	<title>Tichu Abend • Events • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    const content = {
        de: {
            title: "Tichu Abend",
            description: "Connect Bern ist ein Ort, um in Bern unkompliziert neue Leute kennenzulernen – wir haben einen offenen Raum, WhatsApp Gruppen, Events und eine kleine Community, die es leichter macht, Kontakte zu knüpfen. Komm vorbei und spiel mit uns Tichu! 🃏🎉",
            instructions: "Wenn du beim Tichu-Abend dabei sein willst, schreib kurz an unsere Nummer, dann können wir dir die genaue Adresse mitteilen 😊",
            phone: "+41783166727",
            whatsappMessage: "Hi, ich würde gerne am 23. Dezember zum Tichu-Abend kommen!",
            date: "📅 Dienstag, 23. Dezember 2025 von 18:30 bis 20:30 Uhr",
            closing: "Wir freuen uns darauf, mit euch Tichu zu spielen!",
            spontactsLink: "Spontacts",
            meetupLink: "Meetup",
            facebookLink: "Facebook",
            ronorpLink: "Ronorp",
            registerTitle: "📢 Lass uns mehr Leute erreichen!",
            registerDesc: "Wir haben das Event auf diesen Plattformen registriert. Wenn du ein Konto hast, registriere dich auch dort – der Algorithmus mag es, wenn etwas passiert, und es hilft uns, mehr Menschen zu erreichen! 🚀",
            communityTitle: "💬 Fragen? Tritt unserer Spielegruppe bei!",
            communityDesc: "Wenn du Fragen hast oder dich mit anderen Spielebegeisterten vernetzen möchtest, tritt unserer Spielegruppe bei (mehr als 300 Mitglieder):",
            gamesGroupLink: "Zur Spielegruppe"
        },
        en: {
            title: "Tichu Evening at Connect Bern",
            description: "Connect Bern is a place to easily meet new people in Bern – we have an open space, WhatsApp groups, events and a small community that makes it easier to connect. Come join us for a game of Tichu! 🃏🎉",
            instructions: "If you want to join the Tichu evening, please write to our number and we'll share the exact address with you 😊",
            phone: "+41783166727",
            whatsappMessage: "Hi, I would like to join the Tichu evening on December 23rd!",
            date: "📅 Tuesday, December 23rd, 2025 from 6:30 PM to 8:30 PM",
            closing: "Looking forward to playing Tichu with you!",
            spontactsLink: "Spontacts",
            meetupLink: "Meetup",
            facebookLink: "Facebook",
            ronorpLink: "Ronorp",
            registerTitle: "📢 Let's reach more people!",
            registerDesc: "We've registered the event on these platforms. If you have an account, please also register there – the algorithm likes it when something is happening, and it helps us reach more people! 🚀",
            communityTitle: "💬 Questions? Join our Game Group!",
            communityDesc: "If you have questions or want to connect with other game enthusiasts, join our game group (over 300 members):",
            gamesGroupLink: "Go to Game Group"
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

            <div class="imageContainer">
                <img src="/images/tichu.webp" alt="Tichu cards" class="tichuImage" />
            </div>

            <div class="infoBox">
                <p class="date">{content[lang].date}</p>
            </div>

            <div class="contactBox">
                <p class="instructions">{content[lang].instructions}</p>
                <a href="tel:{content[lang].phone}" class="phoneLink">
                    {content[lang].phone}
                </a>
                <div class="contactButtons">
                    <a href="https://wa.me/{content[lang].phone.replace(/[^0-9]/g, '')}?text={encodeURIComponent(content[lang].whatsappMessage)}" class="btn contactBtn whatsapp" target="_blank" rel="noopener noreferrer">
                        💬 WhatsApp
                    </a>
                </div>
            </div>

            <div class="registerBox">
                <h2 class="registerTitle">{content[lang].registerTitle}</h2>
                <p class="registerDesc">{content[lang].registerDesc}</p>
                <div class="registerButtons">
                    <a href="https://community.spontacts.com/community/spiele/appointments/jin2dz3oxg4" class="btn registerBtn spontacts" target="_blank" rel="noopener noreferrer">
                        🎯 {content[lang].spontactsLink}
                    </a>
                    <a href="https://www.meetup.com/meetup-bern/events/312238053" class="btn registerBtn meetup" target="_blank" rel="noopener noreferrer">
                        👥 {content[lang].meetupLink}
                    </a>
                    <a href="https://www.facebook.com/events/1405348811214832" class="btn registerBtn facebook" target="_blank" rel="noopener noreferrer">
                        📘 {content[lang].facebookLink}
                    </a>
                    <a href="https://ronorp.net/market/boost-post/tichu-spielen-bei-connect-bern?city=bern" class="btn registerBtn ronorp" target="_blank" rel="noopener noreferrer">
                        🌐 {content[lang].ronorpLink}
                    </a>
                </div>
            </div>

            <div class="communityBox">
                <h2 class="communityTitle">{content[lang].communityTitle}</h2>
                <p class="communityDesc">{content[lang].communityDesc}</p>
                <a href="/groups/game-group" class="btn gamesGroupBtn">
                    🎲 {content[lang].gamesGroupLink}
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

    .imageContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2em 0;
    }

    .tichuImage {
        width: 100%;
        max-width: 500px;
        height: auto;
        border-radius: 1em;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
        object-fit: cover;
    }

    .tichuImage:hover {
        transform: scale(1.05);
    }

    .infoBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
    }

    .date {
        font-size: 1.4em;
        font-weight: bold;
        margin: 0;
    }

    .contactBox {
        background: rgba(255, 255, 255, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.15);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .instructions {
        text-align: center;
        margin: 0;
    }

    .phoneLink {
        font-size: 1.5em;
        font-weight: bold;
        color: white;
        text-decoration: none;
        padding: 0.5em 1em;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 0.5em;
        transition: all 0.2s ease;
    }

    .phoneLink:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.05);
    }

    .contactButtons {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 0.5em;
    }

    .contactBtn {
        padding: 0.6em 1em;
        font-size: 0.95em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        display: inline-block;
        width: auto;
    }

    .whatsapp {
        background: #25D366;
        color: white;
    }

    .whatsapp:hover {
        background: #1fb855;
        transform: scale(1.05);
    }

    .spontacts {
        background: #FF6B35;
        color: white;
    }

    .spontacts:hover {
        background: #e55a2a;
        transform: scale(1.05);
    }

    .meetup {
        background: #F64060;
        color: white;
    }

    .meetup:hover {
        background: #d63550;
        transform: scale(1.05);
    }

    .registerBox {
        background: rgba(255, 255, 255, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.15);
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        align-items: center;
    }

    .registerTitle {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .registerDesc {
        text-align: center;
        margin: 0;
        font-size: 1.05em;
        line-height: 1.6;
        max-width: 600px;
    }

    .registerButtons {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }

    .registerBtn {
        padding: 0.6em 1em;
        font-size: 0.95em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        display: inline-block;
        width: auto;
    }

    .facebook {
        background: #1877F2;
        color: white;
    }

    .facebook:hover {
        background: #0d65d9;
        transform: scale(1.05);
    }

    .ronorp {
        background: #7C3AED;
        color: white;
    }

    .ronorp:hover {
        background: #6d28d9;
        transform: scale(1.05);
    }

    .communityBox {
        background: rgba(255, 220, 100, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 2px solid rgba(255, 220, 100, 0.3);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .communityTitle {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .communityDesc {
        text-align: center;
        margin: 0;
        font-size: 1.1em;
    }

    .gamesGroupBtn {
        padding: 0.7em 1.3em;
        font-size: 1.05em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        background: #10B981;
        color: white;
        display: inline-block;
        width: auto;
    }

    .gamesGroupBtn:hover {
        background: #059669;
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
