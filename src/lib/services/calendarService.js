function generateGoogleCalendarLink(event) {
    const baseUrl = "https://www.google.com/calendar/render?action=TEMPLATE";
    let start = event.start.toISOString().replace(/-|:|\.\d\d\d/g, "");
    let end = event.end.toISOString().replace(/-|:|\.\d\d\d/g, "");

    // If your event uses specific time zones, adjust 'start' and 'end' accordingly before this step

    const params = new URLSearchParams({
        text: event.title,
        dates: `${start}/${end}`,
        details: event.description,
        location: event.location,
        trp: false, // Mark as busy
    });

    return `${baseUrl}&${params.toString()}`;
}