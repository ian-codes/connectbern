<svelte:head>
    <title>Events • Connect Bern</title>
</svelte:head>

<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;
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
    </div>
</section>

<style>
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
        
        .event-sources, .weekly-events {
            padding: 1rem;
        }
    }
</style>

