<script>
    import { eventsStore } from '$lib/stores/eventsStore.js';
    import { currentLanguage } from '$lib/stores/languageStore.js';
    import { events } from "$lib/components/calendar/events.js";
    import { t } from "$lib/locales/translations.js";
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    
    dayjs.extend(relativeTime);
    
    export let onEventClick = () => {};
    
    $: lang = $currentLanguage;
    
    // Combine static events with user-created events
    $: allEvents = [
        ...events,
        ...$eventsStore.filter(e => e.status === 'approved')
    ];
    
    // Sort events chronologically and group by date
    $: sortedEvents = allEvents
        .sort((a, b) => new Date(a.start) - new Date(b.start))
        .filter(event => new Date(event.start) >= new Date()) // Only future events
        .slice(0, 50); // Limit to next 50 events
    
    // Group events by date
    $: groupedEvents = sortedEvents.reduce((groups, event) => {
        const date = dayjs(event.start).format('YYYY-MM-DD');
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(event);
        return groups;
    }, {});
    
    function formatEventTime(start, end) {
        const startTime = dayjs(start);
        const endTime = dayjs(end);
        
        if (startTime.isSame(endTime, 'day')) {
            return `${startTime.format('h:mm A')} - ${endTime.format('h:mm A')}`;
        } else {
            return `${startTime.format('MMM D, h:mm A')} - ${endTime.format('MMM D, h:mm A')}`;
        }
    }
    
    function getEventTypeClass(event) {
        if (event.extendedProps?.category) {
            return `event-${event.extendedProps.category}`;
        }
        return 'event-default';
    }
    
    function getRelativeDate(date) {
        const eventDate = dayjs(date);
        const now = dayjs();
        
        if (eventDate.isSame(now, 'day')) {
            return lang === 'de' ? 'Heute' : 'Today';
        } else if (eventDate.isSame(now.add(1, 'day'), 'day')) {
            return lang === 'de' ? 'Morgen' : 'Tomorrow';
        } else if (eventDate.diff(now, 'days') < 7) {
            return eventDate.format('dddd');
        } else {
            return eventDate.format('MMMM D, YYYY');
        }
    }
</script>

<div class="events-list">
    <div class="list-header">
        <h3>{lang === 'de' ? 'Kommende Events' : 'Upcoming Events'}</h3>
        <p class="events-count">
            {sortedEvents.length} {lang === 'de' ? 'Events geplant' : 'events scheduled'}
        </p>
    </div>
    
    {#if Object.keys(groupedEvents).length === 0}
        <div class="empty-state">
            <div class="empty-icon">📅</div>
            <h4>{lang === 'de' ? 'Keine kommenden Events' : 'No upcoming events'}</h4>
            <p>{lang === 'de' ? 'Erstelle das erste Event für die Community!' : 'Create the first event for the community!'}</p>
        </div>
    {:else}
        {#each Object.entries(groupedEvents) as [date, dayEvents]}
            <div class="date-group">
                <div class="date-header">
                    <h4 class="date-title">{getRelativeDate(date)}</h4>
                    <span class="date-subtitle">{dayjs(date).format('MMMM D, YYYY')}</span>
                    <span class="events-count-badge">{dayEvents.length}</span>
                </div>
                
                <div class="events-for-date">
                    {#each dayEvents as event}
                        <div 
                            class="event-item {getEventTypeClass(event)}"
                            on:click={() => onEventClick(event)}
                            on:keydown={(e) => e.key === 'Enter' && onEventClick(event)}
                            tabindex="0"
                            role="button"
                        >
                            <div class="event-time">
                                <span class="time-main">{dayjs(event.start).format('h:mm A')}</span>
                                {#if event.end}
                                    <span class="time-duration">
                                        {dayjs(event.end).diff(dayjs(event.start), 'hours')}h {dayjs(event.end).diff(dayjs(event.start), 'minutes') % 60}m
                                    </span>
                                {/if}
                            </div>
                            
                            <div class="event-content">
                                <h5 class="event-title">{event.title}</h5>
                                
                                {#if event.extendedProps?.location}
                                    <div class="event-location">
                                        <span class="location-icon">📍</span>
                                        {event.extendedProps.location}
                                    </div>
                                {/if}
                                
                                {#if event.extendedProps?.description}
                                    <p class="event-description">
                                        {event.extendedProps.description.slice(0, 120)}{event.extendedProps.description.length > 120 ? '...' : ''}
                                    </p>
                                {/if}
                                
                                <div class="event-meta">
                                    {#if event.extendedProps?.category}
                                        <span class="category-tag">{event.extendedProps.category}</span>
                                    {/if}
                                    
                                    {#if event.extendedProps?.organizerName}
                                        <span class="organizer">
                                            {lang === 'de' ? 'von' : 'by'} {event.extendedProps.organizerName}
                                        </span>
                                    {/if}
                                    
                                    {#if event.likes !== undefined || event.views !== undefined}
                                        <div class="event-stats">
                                            {#if event.views}
                                                <span>👥 {event.views}</span>
                                            {/if}
                                            {#if event.likes}
                                                <span>❤️ {event.likes}</span>
                                            {/if}
                                        </div>
                                    {/if}
                                </div>
                            </div>
                            
                            <div class="event-actions">
                                <button class="action-btn" title={lang === 'de' ? 'Details anzeigen' : 'Show details'}>
                                    <span class="action-icon">👁️</span>
                                </button>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    {/if}
</div>

<style lang="postcss">
    .events-list {
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }
    
    .list-header {
        padding: 2rem 2rem 1rem 2rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        text-align: center;
    }
    
    .list-header h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.5rem;
        font-weight: 600;
    }
    
    .list-header .events-count {
        margin: 0;
        opacity: 0.9;
        font-size: 0.9rem;
    }
    
    .empty-state {
        text-align: center;
        padding: 4rem 2rem;
        color: #666;
    }
    
    .empty-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    
    .empty-state h4 {
        margin: 0 0 0.5rem 0;
        font-size: 1.25rem;
        color: #333;
    }
    
    .empty-state p {
        margin: 0;
        font-size: 1rem;
    }
    
    .date-group {
        border-bottom: 1px solid #f0f0f0;
    }
    
    .date-group:last-child {
        border-bottom: none;
    }
    
    .date-header {
        padding: 1.5rem 2rem 1rem 2rem;
        background: #f8f9fa;
        display: flex;
        align-items: center;
        gap: 1rem;
        border-bottom: 1px solid #e9ecef;
        position: sticky;
        top: 0;
        z-index: 1;
    }
    
    .date-title {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: #333;
    }
    
    .date-subtitle {
        color: #666;
        font-size: 0.9rem;
    }
    
    .events-count-badge {
        background: #667eea;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 500;
        margin-left: auto;
    }
    
    .events-for-date {
        padding: 0;
    }
    
    .event-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1.5rem 2rem;
        border-bottom: 1px solid #f0f0f0;
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
    }
    
    .event-item:last-child {
        border-bottom: none;
    }
    
    .event-item:hover {
        background: #f8f9ff;
        transform: translateX(4px);
    }
    
    .event-item:focus {
        outline: 2px solid #667eea;
        outline-offset: -2px;
    }
    
    .event-time {
        min-width: 80px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 0.25rem;
    }
    
    .time-main {
        font-size: 1rem;
        font-weight: 600;
        color: #333;
        line-height: 1.2;
    }
    
    .time-duration {
        font-size: 0.75rem;
        color: #666;
        margin-top: 0.25rem;
    }
    
    .event-content {
        flex: 1;
        min-width: 0;
    }
    
    .event-title {
        margin: 0 0 0.5rem 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: #333;
        line-height: 1.3;
    }
    
    .event-location {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        color: #666;
        font-size: 0.9rem;
    }
    
    .location-icon {
        font-size: 0.8rem;
    }
    
    .event-description {
        margin: 0 0 0.75rem 0;
        color: #666;
        font-size: 0.9rem;
        line-height: 1.4;
    }
    
    .event-meta {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        font-size: 0.8rem;
    }
    
    .category-tag {
        background: #e9ecef;
        color: #495057;
        padding: 0.25rem 0.5rem;
        border-radius: 6px;
        font-weight: 500;
        text-transform: capitalize;
    }
    
    .organizer {
        color: #666;
    }
    
    .event-stats {
        display: flex;
        gap: 0.75rem;
        margin-left: auto;
        color: #666;
    }
    
    .event-actions {
        display: flex;
        align-items: center;
    }
    
    .action-btn {
        background: none;
        border: 1px solid #e9ecef;
        border-radius: 6px;
        padding: 0.5rem;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .action-btn:hover {
        background: #f8f9fa;
        border-color: #667eea;
    }
    
    .action-icon {
        font-size: 0.9rem;
    }
    
    /* Category-specific styling */
    .event-social {
        border-left: 4px solid #3498db;
    }
    
    .event-cultural {
        border-left: 4px solid #9b59b6;
    }
    
    .event-sports {
        border-left: 4px solid #e74c3c;
    }
    
    .event-education {
        border-left: 4px solid #f39c12;
    }
    
    .event-business {
        border-left: 4px solid #34495e;
    }
    
    .event-food {
        border-left: 4px solid #e67e22;
    }
    
    .event-music {
        border-left: 4px solid #1abc9c;
    }
    
    .event-art {
        border-left: 4px solid #e91e63;
    }
    
    .event-outdoor {
        border-left: 4px solid #27ae60;
    }
    
    .event-tech {
        border-left: 4px solid #2c3e50;
    }
    
    .event-language {
        border-left: 4px solid #f1c40f;
    }
    
    .event-other {
        border-left: 4px solid #95a5a6;
    }
    
    .event-default {
        border-left: 4px solid #667eea;
    }
    
    @media (max-width: 768px) {
        .list-header {
            padding: 1.5rem 1rem 1rem 1rem;
        }
        
        .date-header {
            padding: 1rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }
        
        .events-count-badge {
            margin-left: 0;
            align-self: flex-start;
        }
        
        .event-item {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
        }
        
        .event-time {
            min-width: auto;
            text-align: left;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
        }
        
        .event-meta {
            gap: 0.5rem;
        }
        
        .event-stats {
            margin-left: 0;
        }
        
        .action-btn {
            display: none;
        }
    }
</style>
