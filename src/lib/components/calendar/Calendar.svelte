<script>
    import '@event-calendar/core/index.css';
    import Calendar from '@event-calendar/core';
    import DayGrid from '@event-calendar/day-grid';
    import { events } from "$lib/components/calendar/events.js";
    import EventInfoModal from './EventInfoModal.svelte';

    function handleEventClick(info) {
        event = info.event;
        isOpen = true;
        console.log(isOpen);
    }

    function closeEventInfoModal() {
        isOpen = false;
    }

    let event;
    let isOpen;

    let plugins = [DayGrid];
    let options = {
        view: 'dayGridMonth',
        events: events,
        eventClick: handleEventClick
    };
</script>


<section>
    <EventInfoModal 
        event={event} 
        isOpen={isOpen} 
        onClose={closeEventInfoModal} />

    <Calendar {plugins} {options} />
</section>


<style>
    @media (max-width: 800px) {
        
    }

    section {
        position: relative;
        padding: 2em 1em;
        border-radius: .5em;
        background: linear-gradient(rgba(25, 33, 53, 0.2), rgba(25, 33, 53, 0.5), rgba(25, 33, 53, 0.4));
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.411);
    }
</style>