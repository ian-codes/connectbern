<script>
    import dayjs from 'dayjs';
    import { currentLanguage } from '$lib/stores/languageStore.js';
    import { eventsStore } from '$lib/stores/eventsStore.js';
    import { events } from "$lib/components/calendar/events.js";
    
    export let onEventClick = () => {};
    
    $: lang = $currentLanguage;
    
    // Combine static events with user-created events
    $: allEvents = [
        ...events,
        ...$eventsStore.filter(e => e.status === 'approved')
    ];
    
    // Sort events by date and filter for upcoming events
    $: sortedEvents = allEvents
        .filter(event => dayjs(event.start).isAfter(dayjs().subtract(1, 'day'))) // Show events from today onwards
        .sort((a, b) => dayjs(a.start).unix() - dayjs(b.start).unix());
    
    // Group events by date
    $: groupedEvents = sortedEvents.reduce((groups, event) => {
        const date = dayjs(event.start).format('YYYY-MM-DD');
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(event);
        return groups;
    }, {});
    
    function handleEventClick(event) {
        onEventClick(event);
    }
    
    function isToday(date) {
        return dayjs(date).isSame(dayjs(), 'day');
    }
    
    function isTomorrow(date) {
        return dayjs(date).isSame(dayjs().add(1, 'day'), 'day');
    }
    
    function getRelativeDate(date) {
        const today = dayjs();
        const eventDate = dayjs(date);
        
        if (eventDate.isSame(today, 'day')) {
            return lang === 'de' ? 'HEUTE' : 'TODAY';
        } else if (eventDate.isSame(today.add(1, 'day'), 'day')) {
            return lang === 'de' ? 'MORGEN' : 'TOMORROW';
        } else if (eventDate.isBefore(today.add(7, 'day'))) {
            return eventDate.format('dddd').toUpperCase();
        } else {
            return null;
        }
    }
</script>

<div class="agenda-view">
    {#if Object.keys(groupedEvents).length === 0}
        <div class="no-events">
            <div class="no-events-icon">📅</div>
            <h3>{lang === 'de' ? 'Keine bevorstehenden Events' : 'No upcoming events'}</h3>
            <p>{lang === 'de' ? 'Fügen Sie ein neues Event hinzu, um loszulegen!' : 'Add a new event to get started!'}</p>
        </div>
    {:else}
        {#each Object.entries(groupedEvents) as [date, dayEvents]}
            <div class="date-section" class:today={isToday(date)}>
                <div class="date-header" class:today-header={isToday(date)}>
                    <div class="date-number">{dayjs(date).format('D')}</div>
                    <div class="date-text">
                        <div class="date-day">{dayjs(date).format('MMM, ddd').toUpperCase()}</div>
                        {#if isToday(date)}
                            <div class="today-indicator">
                                ●
                            </div>
                        {/if}
                    </div>
                </div>
                
                <div class="events-list">
                    {#each dayEvents as event}
                        <div 
                            class="event-row" 
                            class:sold-out={event.extendedProps?.soldOut}
                            on:click={() => handleEventClick(event)} 
                            on:keydown={(e) => e.key === 'Enter' && handleEventClick(event)}
                            role="button"
                            tabindex="0"
                        >
                            <div class="event-dot">●</div>
                            <div class="event-time">{dayjs(event.start).format('h:mma')}</div>
                            <div class="event-title">
                                {event.title}
                                {#if event.extendedProps?.soldOut}
                                    <span class="sold-out-badge">(Sold out)</span>
                                {/if}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    {/if}
</div>

<style lang="postcss">
    .agenda-view {
        padding: 1rem;
        max-width: 600px;
        margin: 0 auto;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: white;
        border-radius: 8px;
    }
    
    .no-events {
        text-align: center;
        padding: 4rem 2rem;
        color: #666;
    }
    
    .no-events-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
        opacity: 0.5;
    }
    
    .no-events h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
        color: #333;
    }
    
    .no-events p {
        margin: 0;
        font-size: 1rem;
    }
    
    .date-section {
        margin-bottom: 1.5rem;
        border-left: 2px solid #e5e5e5;
        position: relative;
    }
    
    .date-section.today {
        border-left-color: #ff4444;
    }
    
    .date-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.5rem;
        margin-left: -1rem;
        background: white;
        padding: 0.5rem;
        border-radius: 4px;
        position: relative;
    }
    
    .date-header.today-header {
        background: #ff4444;
        color: white;
    }
    
    .date-header::before {
        content: '';
        position: absolute;
        left: -0.5rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1rem;
        height: 1rem;
        background: white;
        border: 2px solid #e5e5e5;
        border-radius: 50%;
        z-index: 1;
    }
    
    .date-header.today-header::before {
        background: #ff4444;
        border-color: #ff4444;
    }
    
    .date-number {
        font-size: 1.2rem;
        font-weight: 700;
        min-width: 2rem;
        text-align: center;
    }
    
    .date-text {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .date-day {
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 0.5px;
    }
    
    .today-indicator {
        color: #ff4444;
        font-size: 0.8rem;
        animation: pulse 2s infinite;
    }
    
    .date-header.today-header .today-indicator {
        color: white;
    }
    
    @keyframes pulse {
        0%, 50% { opacity: 1; }
        25%, 75% { opacity: 0.5; }
    }
    
    .events-list {
        padding-left: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }
    
    .event-row {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem 0.75rem;
        cursor: pointer;
        transition: background-color 0.2s ease;
        border-radius: 4px;
        font-size: 0.95rem;
    }
    
    .event-row:hover {
        background-color: #f8f9fa;
    }
    
    .event-row.sold-out {
        opacity: 0.6;
    }
    
    .event-dot {
        color: #ff6b4a;
        font-size: 0.6rem;
        width: 0.5rem;
        text-align: center;
        flex-shrink: 0;
    }
    
    .event-time {
        font-size: 0.85rem;
        color: #666;
        min-width: 4rem;
        text-align: left;
        flex-shrink: 0;
    }
    
    .event-title {
        flex: 1;
        font-weight: 500;
        color: #333;
        line-height: 1.3;
    }
    
    .sold-out-badge {
        color: #999;
        font-weight: 400;
        font-size: 0.9em;
    }
    
    @media (max-width: 768px) {
        .agenda-view {
            padding: 0.5rem;
            margin: 0;
            border-radius: 0;
        }
        
        .date-header {
            margin-left: -0.75rem;
            padding: 0.4rem;
        }
        
        .date-number {
            font-size: 1.1rem;
            min-width: 1.8rem;
        }
        
        .date-day {
            font-size: 0.85rem;
        }
        
        .event-row {
            padding: 0.4rem 0.5rem;
            gap: 0.75rem;
        }
        
        .event-time {
            min-width: 3.5rem;
            font-size: 0.8rem;
        }
        
        .event-title {
            font-size: 0.9rem;
        }
        
        .events-list {
            padding-left: 0.25rem;
        }
    }
</style>
