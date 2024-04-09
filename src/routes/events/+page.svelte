<svelte:head>
	<title>Events • Connect Bern </title>
</svelte:head>


<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    import Calendar from "$lib/components/calendar/Calendar.svelte";

    $: lang = $currentLanguage;
</script>

<section>
    <div class="topbarWrapper">
        <h1>Events</h1>
        <p>
            {@html t[lang]['events-description']}
        </p>
    </div>

    <ul>
        <li>
            Check for events on Facebook on the 'local' tab:
            <a href="https://www.facebook.com/events/?date_filter_option=TODAY&discover_tab=LOCAL">
                Link
            </a>
        </li>
        <li>
            On <a href="https://meetup.com">Meetup.com</a> and 
            <a href="https://gemeinsamerleben.com/orte-und-regionen/schweiz/bern">
                Gemeinsam Erleben
            </a>
        </li>

        <li>
            On <a href="https://www.pusterum.ch/kultur">Pusterum's website</a>.
        </li>

        <li>
            On the <a href="https://www.reitschule.ch/reitschule/?programm">Reitschule</a>  
            and <a href="https://www.dieheiterefahne.ch/menu">Heitere Fahne</a> websites.
        </li>
        <li>
            <a href="https://bern.impacthub.net/events-erleben">Impact Hub Bern</a> 
        </li>
        <li>
            Check the <a href="https://www.reddit.com/r/bern/"> Bern Subreddit</a> to meet people
        </li>

        <li>
            Monday:
            <ul>
                <li>
                    Denk:Mal - Swiss German course
                </li>
            </ul>
        </li>
        
        <li>
            Tuesday:
            <ul>
                <li>
                    International Meetup Blabla language exchange
                </li>
                <li>
                    CCC weekly meeting
                </li>
            </ul>
        </li>

            

        <li>
            Wednesday:
            <ul>
                <li>
                    Once a month posterum for games night - second Wednesday of the month usually.
                </li>
                <li>
                    After work - JYoB, every first Wednesday of the month
                </li>
                <li>
                    Social get together of effective altruism group.
                </li>
            </ul>
        </li>
            

        <li>
            Thursday:
            <ul>
                <li>
                    English club (Englishclub.ch)
                </li>
                <li>
                    Once a month Polyamorous meetup on the first Thursday of the month usually.
                </li>
                <li>
                    Chess club
                </li>
                <li>
                    German language exchange meetup (usually gut gelaunt or grosse Schanze check MeetUp)
                </li>
                <li>
                    Erupt games night
                </li>
            </ul>
        </li>
            
        <li>
            Friday:
            <ul>
                <li>
                    English speaking club (Englishclub.ch)
                </li>
            </ul>
        </li>

        <li>
            Saturday:
            <ul>
                <li>
                    Karaoke night at DELFINO
                </li>
                <li>
                    Once a month from 17.00 to 23.00 https://patt.be
                </li>
            </ul>
        </li>
    </ul>
</section>

    <Calendar />

