function formatDate(date) {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
}

function generateGoogleCalendarLink(event) {
    const baseUrl = "https://www.google.com/calendar/render?action=TEMPLATE";
    const start = formatDate(event.start);
    const end = formatDate(event.end);

    const params = new URLSearchParams({
        text: event.title,
        dates: `${start}/${end}`,
        details: event.extendedProps?.description || event.description || '',
        location: event.extendedProps?.location || event.location || '',
        trp: false, // Mark as busy
    });

    return `${baseUrl}&${params.toString()}`;
}

function generateAppleCalendarLink(event) {
    // Apple Calendar uses .ics files, so we'll generate an ICS file
    return generateICSFile(event);
}

function generateOutlookCalendarLink(event) {
    const baseUrl = "https://outlook.live.com/calendar/0/deeplink/compose";
    const start = event.start.toISOString();
    const end = event.end.toISOString();

    const params = new URLSearchParams({
        subject: event.title,
        startdt: start,
        enddt: end,
        body: event.extendedProps?.description || event.description || '',
        location: event.extendedProps?.location || event.location || '',
    });

    return `${baseUrl}?${params.toString()}`;
}

function generateICSFile(event) {
    const start = formatDate(event.start);
    const end = formatDate(event.end);
    const now = formatDate(new Date());
    
    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Connect Bern//Events Calendar//EN',
        'CALSCALE:GREGORIAN',
        'BEGIN:VEVENT',
        `UID:${event.id || Date.now()}@connectbern.ch`,
        `DTSTAMP:${now}`,
        `DTSTART:${start}`,
        `DTEND:${end}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${(event.extendedProps?.description || event.description || '').replace(/\n/g, '\\n')}`,
        `LOCATION:${event.extendedProps?.location || event.location || ''}`,
        'STATUS:CONFIRMED',
        'TRANSP:OPAQUE',
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\r\n');

    // Create and download the ICS file
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${event.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

export { generateGoogleCalendarLink, generateAppleCalendarLink, generateOutlookCalendarLink, generateICSFile };