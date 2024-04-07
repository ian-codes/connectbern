<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import '@event-calendar/core/index.css';
    import Calendar from '@event-calendar/core';
    import DayGrid from '@event-calendar/day-grid';
    import TimeGrid from "@event-calendar/time-grid";
    import { events } from "$lib/components/calendar/events.js";
    import EventInfoModal from './EventInfoModal.svelte';


    function handleEventClick(info) {
        event = info.event;
        isOpen = true;
        console.log(event);
    }

    function closeEventInfoModal() {
        isOpen = false;
    }

    const currentView = writable("dayGridMonth");

    function checkViewportAndSetView() {
        if (window.innerWidth <= 800) {
            $currentView = "timeGridDay";
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
    let isOpen;

    let plugins = [TimeGrid, DayGrid];
    let options = {
        view: $currentView,
        events: events,
        eventClick: handleEventClick,
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
    section {
        position: relative;
        padding: 2em 1em;
        border-radius: .5em;
        background: linear-gradient(rgba(25, 33, 53, 0.2), rgba(25, 33, 53, 0.5), rgba(25, 33, 53, 0.4));
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.411);
    }
</style>