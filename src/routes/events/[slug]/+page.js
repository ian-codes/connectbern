import { events } from "$lib/components/calendar/events.js";

export function load({ params }) {
    return events.find(e => e.extendedProps.slug === params.slug);
}