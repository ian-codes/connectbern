<script>
    import { t } from "$lib/locales/eventPageTranslations.js";
    import { date_trans } from "$lib/locales/dateTranslations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    $: lang = $currentLanguage;

    export let events;

    $: eventsByMonth = (() => {
        const result = [];

        events.forEach(event => {
            const date = event.date;
            const key = `${date.getFullYear()}-${date.getMonth()}`
            const day = date.getDate();

            result[key] ||= [];
            result[key][day] ||= [];
            result[key][day].push(event);
        });

        return result;
    })();

    const today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let key = `${year}-${month}`;
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let firstDayOfMonth = new Date(year, month, 1);

    $: prev = (() => {
      if (month === 0) {
        month = 11;
        year = year - 1;
      } else {
        month--;
      }
      key = `${year}-${month}`;
      daysInMonth = new Date(year, month + 1, 0).getDate();
      firstDayOfMonth = new Date(year, month, 1);
    });

    $: next = (() => {
      if (month === 11) {
        month = 0;
        year = year + 1;
      } else {
        month++;
      }
      key = `${year}-${month}`;
      daysInMonth = new Date(year, month + 1, 0).getDate();
      firstDayOfMonth = new Date(year, month, 1);
    });



</script>
<div class="calendar-container">
    <div class="title-container">
        <button class="round-bttn" on:click={() => { prev() }}>←</button>
        <h1>
            {date_trans[lang].months[month]}
            {#if year !== today.getFullYear()}<span>{year}</span>{/if}
        </h1>
        <button class="round-bttn" on:click={() => { next() }}>→</button>
    </div>

    <p class="info-text">{t[lang]['calendar.info.recurring-events']}</p>

    <div class="event-grid">
        {#each Array((firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay()) + daysInMonth) as day, i}
            {#if ((i - (firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay()) + 2) > 0) }
                <div class="event-cell">{i - (firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay()) + 2}

                    <div>
                        {#each ((eventsByMonth[key] || [])[(i - (firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay()) + 2)] || []) as event }
                            <div class="event-line">
                                <a
                                        href={event.link}
                                        class="event-link"
                                        target={event.link.startsWith('http') ? '_blank' : '_self'}
                                        rel={event.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                >
                                    {#if event.recurring}<span>🔄&nbsp;</span>{/if}
                                    <span>{event.title[lang]}</span>
                                </a>
                            </div>
                        {/each}
                    </div>
                </div>
            {:else}
                <div class="grey-border event-cell"> </div>
            {/if}
        {/each}
    </div>




</div>




<style>
    .calendar-container {
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-top: 2em;
        margin-bottom: 2em;
        opacity: 0;
        animation: fadeInUp 0.5s ease forwards;
    }

    h1 {
        color: white;
    }

    .title-container {
        border-bottom: 2px solid rgba(255, 255, 255, 0.6);
    }

    .event-grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5em;
        margin-top: 2em;
    }

    .event-cell {
        display: flex;
        flex-direction: column;
        width: calc(100% / 8);
        min-height: 100px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        border-radius: 30%;

    }

    .event-cell:hover {
        box-shadow: 0 4px 30px rgba(255, 255, 255, 0.4);
    }


    .event-line {
        background-color: rgba(0, 0, 0, 0.15);
        margin: 1em;
        font-size: x-small;
        cursor: pointer;
    }

    .event-link {
        display: inline-flex;
        text-decoration: none;
        border-radius: 0.5em;
        color: black
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .info-text {
        margin: 1em;
        font-size: small;
    }


</style>