<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import '@event-calendar/core/index.css';
    import Calendar from '@event-calendar/core';
    import DayGrid from '@event-calendar/day-grid';
    import TimeGrid from "@event-calendar/time-grid";
    import ListPlugin from '@event-calendar/list';
    import { events } from "$lib/components/calendar/events.js";
    import { eventsStore, needsApproval } from '$lib/stores/eventsStore.js';
    import { currentLanguage } from '$lib/stores/languageStore.js';
    import EventInfoModal from './EventInfoModal.svelte';
    import EventCreationModal from './EventCreationModal.svelte';
    import EventsListAgenda from './EventsListAgenda.svelte';
    import EventsList from './EventsList.svelte';

    $: lang = $currentLanguage;

    function handleEventClick(info) {
        event = info.event;
        isOpen = true;
        console.log(event);
    }

    function closeEventInfoModal() {
        isOpen = false;
    }
    
    function openEventCreationModal() {
        showCreateModal = true;
    }
    
    function closeEventCreationModal() {
        showCreateModal = false;
    }
    
    function handleListEventClick(selectedEvent) {
        event = selectedEvent;
        isOpen = true;
    }
    
    function toggleViewType() {
        currentViewType = currentViewType === 'calendar' ? 'list' : 'calendar';
    }

    const currentView = writable("dayGridMonth");

    function checkViewportAndSetView() {
        if (window.innerWidth <= 800) {
            $currentView = "timeGridDay";
        } else {
            $currentView = "dayGridMonth";
        }
    }

    onMount(() => {
        checkViewportAndSetView();
        window.addEventListener('resize', checkViewportAndSetView);

        return () => {
            window.removeEventListener('resize', checkViewportAndSetView);
        };
    });

    let event;
    let isOpen = false;
    let showCreateModal = false;
    let currentViewType = 'calendar'; // 'calendar' or 'list'
    let plugins = [TimeGrid, DayGrid, ListPlugin];
    
    // Combine static events with user-created events
    $: allEvents = [
        ...events,
        ...$eventsStore.filter(e => !$needsApproval || e.status === 'approved')
    ];
    
    $: options = {
        view: $currentView,
        events: allEvents,
        eventClick: handleEventClick,
        headerToolbar: {
            start: 'prev,next today',
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        buttonText: {
            today: lang === 'de' ? 'Heute' : 'Today',
            dayGridMonth: lang === 'de' ? 'Monat' : 'Month',
            timeGridWeek: lang === 'de' ? 'Woche' : 'Week', 
            timeGridDay: lang === 'de' ? 'Tag' : 'Day',
            listMonth: lang === 'de' ? 'Agenda' : 'Agenda'
        },
        height: 'auto',
        eventColor: '#667eea',
        eventTextColor: '#fff',
        dayMaxEvents: 3,
        moreLinkText: lang === 'de' ? 'weitere' : 'more',
        noEventsText: lang === 'de' ? 'Keine Events' : 'No events',
        firstDay: 1, // Start week on Monday
    };
</script>

<section>
    <EventInfoModal 
        event={event} 
        isOpen={isOpen} 
        onClose={closeEventInfoModal} />
    
    <EventCreationModal 
        isOpen={showCreateModal}
        onClose={closeEventCreationModal} />
    
    <div class="calendar-header">
        <div class="calendar-title">
            <h2>{lang === 'de' ? 'Event-Kalender' : 'Events Calendar'}</h2>
            <p class="calendar-subtitle">
                {lang === 'de' ? 'Entdecke und teile Events in der Berner Community' : 'Discover and share events in the Bern community'}
            </p>
        </div>
        
        <div class="calendar-actions">
            <button class="add-event-btn" on:click={openEventCreationModal}>
                <span class="add-icon">+</span>
                {lang === 'de' ? 'Event hinzufügen' : 'Add Event'}
            </button>
        </div>
    </div>
    
    <div class="legend">
        <div class="legend-item">
            <span class="legend-color static-event"></span>
            {lang === 'de' ? 'Regelmäßige Events' : 'Regular Events'}
        </div>
        <div class="legend-item">
            <span class="legend-color user-event"></span>
            {lang === 'de' ? 'Community Events' : 'Community Events'}
        </div>
    </div>

    <!-- Calendar/List View Container -->
    <div class="view-container">
        {#if currentViewType === 'list'}
            <EventsListAgenda onEventClick={handleListEventClick} />
        {:else}
            <div class="calendar-wrapper">
                <Calendar {plugins} {options} />
            </div>
        {/if}
    </div>
    
    <div class="event-stats">
        <div class="stat">
            <span class="stat-number">{allEvents.length}</span>
            <span class="stat-label">{lang === 'de' ? 'Events insgesamt' : 'Total Events'}</span>
        </div>
        <div class="stat">
            <span class="stat-number">{$eventsStore.filter(e => e.status === 'pending').length}</span>
            <span class="stat-label">{lang === 'de' ? 'Wartend' : 'Pending'}</span>
        </div>
        <div class="stat">
            <span class="stat-number">{$eventsStore.filter(e => e.status === 'approved').length}</span>
            <span class="stat-label">{lang === 'de' ? 'Genehmigt' : 'Approved'}</span>
        </div>
    </div>
</section>

<style lang="postcss">
    section {
        position: relative;
        padding: 2rem;
        border-radius: 12px;
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
    }
    
    .calendar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        gap: 2rem;
    }
    
    .calendar-title h2 {
        font-size: 2rem;
        font-weight: 700;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0 0 0.5rem 0;
    }
    
    .calendar-subtitle {
        color: #666;
        font-size: 1rem;
        margin: 0;
    }
    
    .calendar-actions {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1rem;
    }
    
    .view-toggle {
        display: flex;
        background: white;
        border-radius: 8px;
        padding: 0.25rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    
    .view-btn {
        background: none;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #666;
    }
    
    .view-btn:hover {
        color: #333;
        background: #f8f9fa;
    }
    
    .view-btn.active {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
    }
    
    .view-icon {
        font-size: 1rem;
    }
    
    .add-event-btn {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 25px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    
    .add-event-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }
    
    .add-event-btn:hover::before {
        left: 100%;
    }
    
    .add-event-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    }
    
    .add-icon {
        font-size: 1.25rem;
        font-weight: 300;
    }
    
    .approval-badge {
        background: #fff3cd;
        color: #856404;
        padding: 0.5rem 1rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
        border: 1px solid #ffeaa7;
    }
    
    .legend {
        display: flex;
        gap: 2rem;
        margin-bottom: 1.5rem;
        justify-content: center;
    }
    
    .legend-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.9rem;
        color: #666;
    }
    
    .legend-color {
        width: 16px;
        height: 16px;
        border-radius: 4px;
    }
    
    .static-event {
        background: #667eea;
    }
    
    .user-event {
        background: #27ae60;
    }
    
    .view-container {
        margin-bottom: 2rem;
    }
    
    .calendar-wrapper {
        background: white;
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .event-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 1rem;
        margin-top: 2rem;
    }
    
    .stat {
        background: white;
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .stat-number {
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
        color: #667eea;
    }
    
    .stat-label {
        font-size: 0.8rem;
        color: #666;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    /* Global calendar styling */
    :global(.ec) {
        --ec-border-color: #e5e5e5;
        --ec-button-border-color: #667eea;
        --ec-button-bg-color: #667eea;
        --ec-button-text-color: white;
        --ec-button-active-bg-color: #5a6fd8;
        --ec-event-bg-color: #667eea;
        --ec-event-border-color: #667eea;
        --ec-event-text-color: white;
    }
    
    :global(.ec-toolbar) {
        margin-bottom: 1rem;
    }
    
    :global(.ec-button) {
        border-radius: 6px;
        font-weight: 500;
        transition: all 0.2s ease;
    }
    
    :global(.ec-button:hover) {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
    }
    
    :global(.ec-event) {
        border-radius: 4px;
        border-left: 3px solid var(--ec-event-border-color);
        transition: all 0.2s ease;
    }
    
    :global(.ec-event:hover) {
        transform: scale(1.02);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    
    /* User-generated events styling */
    :global(.ec-event[data-source="user"]) {
        --ec-event-bg-color: #27ae60;
        --ec-event-border-color: #27ae60;
    }
    
    @media (max-width: 768px) {
        section {
            padding: 1rem;
        }
        
        .calendar-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
        }
        
        .calendar-actions {
            align-items: flex-start;
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        
        .view-toggle {
            order: 1;
            width: 100%;
            justify-content: center;
            margin-bottom: 1rem;
        }
        
        .add-event-btn {
            order: 2;
            flex: 1;
            justify-content: center;
            min-width: 0;
        }
        
        .approval-badge {
            order: 3;
            width: 100%;
            text-align: center;
            margin-top: 0.5rem;
        }
        
        .legend {
            justify-content: flex-start;
            flex-wrap: wrap;
        }
        
        .calendar-title h2 {
            font-size: 1.5rem;
        }
    }
</style>