import { events } from "$lib/components/calendar/events.js";

export const prerender = true;

export function entries() {
    return events
        .filter(e => e.extendedProps?.slug)
        .map(e => ({ slug: e.extendedProps.slug }));
}

export function load({ params }) {
    return events.find(e => e.extendedProps.slug === params.slug);
}