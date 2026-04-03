<script>
    import { t } from "$lib/locales/eventPageTranslations.js";
    import { date_trans } from "$lib/locales/dateTranslations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    $: lang = $currentLanguage;

    export let events;

    $: eventsGroupedByDate = (() => {
        const groups = {};
        events.forEach(event => {
            const dateKey = event.date.toDateString();
            if (!groups[dateKey]) {
                groups[dateKey] = {
                    date: event.date,
                    events: []
                };
            }
            groups[dateKey].events.push(event);
        });
        return Object.values(groups);
    })();

    $: formatDate = (date) => {
        const dayName = date_trans[lang].days[date.getDay()];
        const day = date.getDate();
        const month = date_trans[lang].months[date.getMonth()];
        const year = date.getFullYear();

        return lang === 'de'
            ? `${dayName}, ${day}. ${month} ${year}`
            : `${dayName}, ${month} ${day}, ${year}`;
    };

    $: getDaysUntil = (date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const dateClone = new Date(date);
        dateClone.setHours(0, 0, 0, 0);
        const diffTime = dateClone - today;
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    $: getDaysUntilText = (days) => {
        if (days === 0) return lang === 'de' ? 'Heute!' : 'Today!';
        if (days === 1) return lang === 'de' ? 'Morgen' : 'Tomorrow';
        return lang === 'de' ? `in ${days} Tagen` : `in ${days} days`;
    };

</script>

<div class="dateGroupsContainer">
    {#each eventsGroupedByDate as group, groupIndex}
        <div class="dateGroup {(getDaysUntil(group.date) === 0) ? 'today' : ''}" style="animation-delay: {groupIndex * 0.05}s">
            <div class="dateGroupHeader">
                <div class="dateGroupDate">
                    <div class="dayNumber">{group.date.getDate()}</div>
                    <div class="monthYear">{date_trans[lang].months_short[group.date.getMonth()]} </div>
                </div>
                <div class="dateGroupInfo">
                    <div class="fullDate">{formatDate(group.date)}</div>
                    <div class="daysUntilBadge">{getDaysUntilText(getDaysUntil(group.date))}</div>
                </div>
            </div>

            <div class="eventsGrid">
                {#each group.events as event, i}
                    <div class="eventCard" style="animation-delay: {(groupIndex * 0.05) + (i * 0.02)}s">
                        <div class="eventTags">
                            {#if event.recurring && event.recurring !== 'monthly-multiple'}
                                <span class="recurringTag">{t[lang][event.recurring]}</span>
                            {/if}
                            {#if event.paid}
                                            <span
                                                    class="paidTag"
                                                    class:optionalTag={event.optionalPaid}
                                                    title={t[lang][event.optionalPaid ? "optional-paid-event-tooltip" : "paid-event-tooltip"]}
                                            >
                                                {t[lang][event.optionalPaid ? "optional-paid-event-chip" : "paid-event-chip"]}
                                            </span>
                            {/if}
                        </div>

                        <div class="eventHeader">
                            <h2>{event.title[lang]}</h2>
                        </div>

                        <div class="eventDate">
                            <span class="dateIcon">📅</span>
                            <div class="dateInfo">
                                <span class="dateText">{formatDate(event.date)}</span>
                                {#if event.time}
                                    <span class="timeText">⏰ {event.time}</span>
                                {/if}
                            </div>
                        </div>

                        <div class="daysUntil">
                            {getDaysUntilText(getDaysUntil(event.date))}
                        </div>

                        {#if event.description}
                            <p class="eventDescription">
                                {event.description[lang]}
                            </p>
                        {/if}

                        {#if event.link}
                            <a
                                    href={event.link}
                                    class="eventLink"
                                    target={event.link.startsWith('http') ? '_blank' : '_self'}
                                    rel={event.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            >
                                {t[lang]["more-info"]} →
                            </a>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>

    .dateGroupsContainer {
        display: flex;
        flex-direction: column;
        gap: 3em;
        margin-top: 2em;
    }

    .dateGroup {
        animation: fadeInUp 0.5s ease forwards;
        opacity: 0;
    }

    .dateGroupHeader {
        display: flex;
        align-items: flex-start;
        gap: 1.5em;
        padding: 0 0 1em 0;
        margin-bottom: 1.5em;
        border-bottom: 2px solid rgba(255, 255, 255, 0.1);
        min-height: 70px;
    }

    .dateGroup.today .dateGroupHeader {
        border-bottom-color: rgba(255, 200, 100, 0.4);
    }

    .dateGroupDate {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 60px;
        flex-shrink: 0;
    }

    .dayNumber {
        font-size: 2em;
        font-weight: 700;
        line-height: 1;
        color: white;
    }

    .dateGroup.today .dayNumber {
        color: rgb(255, 200, 100);
    }

    .monthYear {
        font-size: 0.85em;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        opacity: 0.7;
        color: white;
    }

    .dateGroupInfo {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.3em;
        min-height: 52px;
    }

    .fullDate {
        font-size: 1.1em;
        font-weight: 600;
        color: white;
        line-height: 1.4;
        min-height: 1.5em;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .daysUntilBadge {
        font-size: 0.9em;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.7);
        margin-top: auto;
    }

    .dateGroup.today .daysUntilBadge {
        color: rgb(255, 200, 100);
    }

    /* Events Grid */
    .eventsGrid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 2em;
    }

    .eventCard {
        background: linear-gradient(135deg,
        rgb(183, 200, 244),
        rgb(182, 199, 255)
        );
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 1em;
        padding: 1.5em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        transition: all 0.3s ease;
        animation: fadeInUp 0.5s ease forwards;
        opacity: 0;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        position: relative;
        color: #2a2a2a;
        min-height: 250px;
    }

    .eventCard:hover {
        transform: translateY(-5px);
        background: linear-gradient(135deg,
        rgb(160, 193, 243),
        rgb(161, 185, 222)
        );
        border-color: rgba(0, 0, 0, 0.2);
        box-shadow: 0 10px 35px rgba(0, 0, 0, 0.25);
    }

    .dateGroup.today .eventCard {
        border: 2px solid rgba(255, 200, 100, 0.6);
        box-shadow:
                0 4px 20px rgba(0, 0, 0, 0.15),
                0 0 30px rgba(255, 180, 80, 0.3),
                inset 0 0 20px rgba(255, 200, 100, 0.1);
    }

    .dateGroup.today .eventCard:hover {
        box-shadow:
                0 10px 35px rgba(0, 0, 0, 0.25),
                0 0 40px rgba(255, 180, 80, 0.4),
                inset 0 0 25px rgba(255, 200, 100, 0.15);
    }

    .eventCard h2,
    .eventCard p,
    .eventCard .dateText,
    .eventCard .timeText,
    .eventCard .daysUntil,
    .eventCard .eventDescription {
        color: #1e40af;
    }

    .eventHeader {
        display: flex;
        align-items: start;
    }

    .eventCard h2 {
        font-size: 1.4em;
        font-weight: bold;
        margin: 2.5em 0 0;
        min-height: 3.6em;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 1.3;
        padding-right: 0;
    }

    .eventTags {
        position: absolute;
        top: 1em;
        right: 1em;
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        align-items: center;
        z-index: 10;
    }

    .recurringTag {
        display: inline-block;
        padding: 0.4em 0.8em;
        font-size: 0.75em;
        font-weight: 600;
        background: rgba(59, 130, 246, 0.15);
        color: #3b82f6;
        border-radius: 999px;
        border: 1px solid rgba(59, 130, 246, 0.3);
        white-space: nowrap;
    }

    .paidTag {
        display: inline-block;
        padding: 0.4em 0.8em;
        font-size: 0.75em;
        font-weight: 600;
        background: rgba(76, 175, 80, 0.8);
        color: white;
        border-radius: 999px;
        border: 1px solid rgba(76, 175, 80, 1);
        white-space: nowrap;
        cursor: help;
        transition: all 0.2s ease;
    }

    .paidTag:hover {
        transform: scale(1.05);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .paidTag.optionalTag {
        background: rgba(255, 167, 38, 0.8);
        border: 1px solid rgba(255, 167, 38, 1);
        color: white;
    }

    .eventDate {
        display: flex;
        gap: 1em;
        align-items: center;
        padding: 1em;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 0.5em;
        flex-shrink: 0;
    }

    .dateIcon {
        font-size: 2em;
    }

    .dateInfo {
        display: flex;
        flex-direction: column;
        gap: 0.3em;
    }

    .dateText {
        font-size: 1.1em;
        font-weight: bold;
    }

    .timeText {
        font-size: 0.95em;
        opacity: 0.8;
    }

    .daysUntil {
        font-size: 1.1em;
        font-weight: bold;
        padding: 0.6em 1em;
        background: linear-gradient(135deg, rgba(108, 72, 167, 0.3), rgba(58, 152, 189, 0.3));
        border-radius: 0.5em;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.1);
        flex-shrink: 0;
    }

    .eventDescription {
        font-size: 1em;
        opacity: 0.85;
        margin: 0;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        min-height: 2.5em;
        flex-grow: 1;
    }

    .eventLink {
        display: inline-flex;
        align-items: center;
        gap: 0.5em;
        padding: 0.8em 1.2em;
        background: rgba(255, 255, 255, 0.1);
        color: #1e40af;
        text-decoration: none;
        border-radius: 0.5em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
        align-self: flex-start;
        margin-top: auto;
    }

    .eventLink:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateX(5px);
        border-color: rgba(255, 255, 255, 0.3);
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

    /* Responsive */
    @media (max-width: 768px) {



        .dateGroupsContainer {
            gap: 2em;
        }

        .dateGroupHeader {
            flex-direction: column;
            align-items: flex-start;
            gap: 1em;
            padding: 0 0 0.8em 0;
            margin-bottom: 1em;
        }

        .dateGroupDate {
            min-width: auto;
        }

        .dayNumber {
            font-size: 1.8em;
        }

        .fullDate {
            font-size: 1em;
        }

        .eventsGrid {
            grid-template-columns: 1fr;
            gap: 1em;
        }

        .eventCard {
            min-height: 460px;
        }

        .eventCard h2 {
            font-size: 1.2em;
            min-height: 3.1em;
        }

        .eventTags {
            top: 0.8em;
            right: 0.8em;
        }

        .recurringTag,
        .paidTag {
            font-size: 0.65em;
            padding: 0.3em 0.6em;
        }

        .eventCard h2 {
            padding-right: 0;
            font-size: 1.1em;
            margin-top: 2em;
        }

        .eventDescription {
            font-size: 0.95em;
            min-height: 7.1em;
            -webkit-line-clamp: 5;
        }

        .dateIcon {
            font-size: 1em;
        }

    }

</style>