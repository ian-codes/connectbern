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
        <h2>Events</h2>
        <p>
            {@html t[lang]['events-description']}
        </p>
    </div>

    <ul>
        <li>
            Check for events on Facebook on the local tab:
            <a href="https://www.facebook.com/events/?date_filter_option=TODAY&discover_tab=LOCAL">
                https://www.facebook.com/events/?date_filter_option=TODAY&discover_tab=LOCAL
            </a>
        </li>
        <li>
            On https://meetup.com and gemeinsam erleben (spontacts).
        </li>

        <li>
            On pusterum's website. (https://www.pusterum.ch/kultur)
        </li>

        <li>
            On the Reitschule and heitere Fahne Website.
        </li>
        <li>
            unko agenda on telegram
        </li>
        <li>
            impact hub Bern
        </li>
        <li>
            Check Reddit to meet people
        </li>

        <li>
            Places to be sociable:
            <ol>
                <li>
                    Backpacker Hostel open 
                </li>
                <li>
                    English club
                </li>
                <li>
                    Erupt
                </li>
                <li>
                    Reitschule restaurant
                </li>
                <li>
                    Turnhalle
                </li>
                <li>
                    Generationshaus
                </li>
                <li>
                    Free walking tour
                </li>
            </ol>
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

<!-- <Calendar /> -->


<style>
    .topbarWrapper {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin: 0;
        gap: 1em;
        margin-bottom: 1em;
    }

    ul, ol {
        list-style: square;
        display: flex;
        flex-direction: column;
        gap: 1em;
        font-size: 1.2rem;
    }

    li {
        color: white;
    }
</style>