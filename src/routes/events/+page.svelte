<svelte:head>
    <title>Events • Connect Bern</title>
</svelte:head>

<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    // Event submission template
    const eventTemplate = encodeURIComponent(`🎉 NEW EVENT SUBMISSION

📅 Date: 
⏰ Time:
📍 Location: 
🎯 Event Name: 

📝 Description: 

💰 Cost: 
🗣️ Language: 
👥 Target audience:

📞 Contact: 
🔗 Link:`);

    const whatsappEventUrl = `https://wa.me/41783166727?text=${eventTemplate}`;
</script>

<section>
    <div class="topbarWrapper">
        <h1>Events</h1>
        <p>
            {@html t[lang]['events-description']}
        </p>
    </div>

    <div class="events-content">
        <div class="event-sources">
            <h2>Where to Find Events</h2>
            <ul>
                <li>
                    <strong>Facebook Local Events:</strong>
                    <a href="https://www.facebook.com/events/?date_filter_option=TODAY&discover_tab=LOCAL" target="_blank" rel="noopener">
                        Browse local events
                    </a>
                </li>
                <li>
                    <strong>Meetup Platforms:</strong>
                    <a href="https://meetup.com" target="_blank" rel="noopener">Meetup.com</a> and 
                    <a href="https://gemeinsamerleben.com/orte-und-regionen/schweiz/bern" target="_blank" rel="noopener">
                        Gemeinsam Erleben
                    </a>
                </li>
                <li>
                    <strong>Cultural Venues:</strong>
                    <a href="https://www.pusterum.ch/kultur" target="_blank" rel="noopener">Pusterum</a>,
                    <a href="https://www.reitschule.ch/reitschule/?programm" target="_blank" rel="noopener">Reitschule</a>, and
                    <a href="https://www.dieheiterefahne.ch/menu" target="_blank" rel="noopener">Heitere Fahne</a>
                </li>
                <li>
                    <strong>Community Spaces:</strong>
                    <a href="https://bern.impacthub.net/events-erleben" target="_blank" rel="noopener">Impact Hub Bern</a>
                </li>
                <li>
                    <strong>Reddit Community:</strong>
                    <a href="https://www.reddit.com/r/bern/" target="_blank" rel="noopener">r/bern subreddit</a>
                </li>
            </ul>
        </div>

        <div class="weekly-events">
            <h2>Weekly Recurring Events</h2>
            
            <div class="day-section">
                <h3>Monday</h3>
                <ul>
                    <li>
                        <strong>Denk:Mal - Swiss German Course</strong><br>
                        Join the <a href="https://tiny.cc/germanbern" target="_blank" rel="noopener">WhatsApp Group</a>
                    </li>
                </ul>
            </div>

            <div class="day-section">
                <h3>Tuesday</h3>
                <ul>
                    <li>
                        <strong>Beer on Tuesday</strong> (Every 3rd Tuesday)<br>
                        Hackers and infosec professionals meetup with drinks. Free entry except for special events.<br>
                        <a href="https://beerontuesday.ch" target="_blank" rel="noopener">beerontuesday.ch</a>
                    </li>
                    <li>
                        <strong>International Meetup</strong> - Blabla language exchange
                    </li>
                    <li>
                        <strong>CCC Weekly Meeting</strong>
                    </li>
                </ul>
            </div>

            <div class="day-section">
                <h3>Wednesday</h3>
                <ul>
                    <li>
                        <strong>Games Night at Posterum</strong> (2nd Wednesday of the month)
                    </li>
                    <li>
                        <strong>After Work - JYoB</strong> (1st Wednesday of the month)
                    </li>
                    <li>
                        <strong>Effective Altruism</strong> - Social gathering
                    </li>
                </ul>
            </div>

            <div class="day-section">
                <h3>Thursday</h3>
                <ul>
                    <li>
                        <strong>English Club</strong> - <a href="https://englishclub.ch" target="_blank" rel="noopener">englishclub.ch</a>
                    </li>
                    <li>
                        <strong>Polyamorous Meetup</strong> (1st Thursday of the month)
                    </li>
                    <li>
                        <strong>Chess Club</strong>
                    </li>
                    <li>
                        <strong>German Language Exchange</strong> - Usually at Gut Gelaunt or Grosse Schanze (check Meetup)
                    </li>
                    <li>
                        <strong>Erupt Games Night</strong>
                    </li>
                </ul>
            </div>

            <div class="day-section">
                <h3>Friday</h3>
                <ul>
                    <li>
                        <strong>English Speaking Club</strong> - <a href="https://englishclub.ch" target="_blank" rel="noopener">englishclub.ch</a>
                    </li>
                </ul>
            </div>

            <div class="day-section">
                <h3>Saturday</h3>
                <ul>
                    <li>
                        <strong>Karaoke Night at DELFINO</strong>
                    </li>
                    <li>
                        <strong>Monthly Event</strong> - 17:00 to 23:00<br>
                        <a href="https://patt.be" target="_blank" rel="noopener">patt.be</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="google-calendar">
            <h2>Event Calendar</h2>
            <iframe 
                src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FZurich&showPrint=0&showTitle=0&mode=AGENDA&showTz=0&showCalendars=0&showTabs=0&showDate=0&showNav=0&src=c3RheWluZ2luYmVybkBnbWFpbC5jb20&color=%23039be5" 
                style="border: solid 1px #777; border-radius: 8px; width: 100%; max-width: 100%;" 
                width="100%" 
                height="600" 
                frameborder="0" 
                scrolling="no"
                title="Events Calendar">
            </iframe>
        </div>

        <!-- Event Submission Section -->
        <div class="event-submission">
            <h2>Submit Your Event</h2>
            <div class="submission-content">
                <p>Have an event to share with the Bern community? Submit it directly via WhatsApp!</p>
                <a href={whatsappEventUrl} class="whatsapp-btn" target="_blank" rel="noopener">
                    <svg class="btn-icon" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                    </svg>
                    Submit Event via WhatsApp
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    /* Event Submission Styles */
    .event-submission {
        margin-top: 2rem;
        background: var(--color-bg-secondary, #f8f9fa);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--color-border, #e1e5e9);
    }

    .event-submission h2 {
        margin-top: 0;
        margin-bottom: 1rem;
        color: var(--color-primary, #0066cc);
        border-bottom: 2px solid var(--color-primary, #0066cc);
        padding-bottom: 0.5rem;
    }

    .submission-content {
        text-align: center;
    }

    .submission-content p {
        color: var(--color-text-primary, #333);
        margin-bottom: 1.5rem;
        font-size: 1rem;
        line-height: 1.5;
    }

    .whatsapp-btn {
        background: linear-gradient(135deg, #25D366, #128C7E);
        color: white;
        border: none;
        padding: 14px 28px;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 50px;
        cursor: pointer;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
        position: relative;
        overflow: hidden;
    }

    .whatsapp-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        background: linear-gradient(135deg, #22c55e, #16a085);
    }

    .whatsapp-btn:active {
        transform: translateY(0);
    }

    .whatsapp-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }

    .whatsapp-btn:hover::before {
        left: 100%;
    }

    .btn-icon {
        width: 20px;
        height: 20px;
        fill: currentColor;
    }

    /* Existing Events Page Styles */
    .events-content {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .event-sources, .weekly-events {
        background: var(--color-bg-secondary, #f8f9fa);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--color-border, #e1e5e9);
    }

    .event-sources h2, .weekly-events h2 {
        margin-top: 0;
        color: var(--color-primary, #0066cc);
        border-bottom: 2px solid var(--color-primary, #0066cc);
        padding-bottom: 0.5rem;
    }

    .day-section {
        margin-bottom: 1.5rem;
    }

    .day-section h3 {
        color: var(--color-secondary, #666);
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
        border-left: 3px solid var(--color-accent, #ff6b35);
        padding-left: 0.75rem;
    }

    .day-section ul {
        margin-left: 1rem;
    }

    .day-section li {
        margin-bottom: 0.75rem;
        line-height: 1.5;
    }

    .day-section strong {
        color: var(--color-text-primary, #333);
    }

    .event-sources ul li, .day-section ul li {
        margin-bottom: 0.5rem;
        color: var(--color-text-primary, #333);
    }

    .event-sources li strong, .day-section li strong {
        color: var(--color-text-primary, #333);
    }

    .google-calendar {
        margin-top: 2rem;
    }

    .google-calendar h2 {
        margin-bottom: 1rem;
        color: var(--color-primary, #0066cc);
    }

    .google-calendar iframe {
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    a {
        color: var(--color-link, #0066cc);
        text-decoration: none;
        transition: color 0.2s ease;
    }

    a:hover {
        color: var(--color-link-hover, #0052a3);
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        .google-calendar iframe {
            height: 400px;
        }
        
        .event-sources, .weekly-events, .event-submission {
            padding: 1rem;
        }

        .whatsapp-btn {
            font-size: 0.9rem;
            padding: 12px 24px;
        }
    }
</style>

