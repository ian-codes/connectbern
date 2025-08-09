<script>
    import { generateGoogleCalendarLink, generateAppleCalendarLink, generateOutlookCalendarLink, generateICSFile } from '$lib/services/calendarService.js';
    import { currentLanguage } from '$lib/stores/languageStore.js';
    
    export let event = {};
    
    $: lang = $currentLanguage;
    
    let showDropdown = false;
    
    function addToGoogleCalendar() {
        const link = generateGoogleCalendarLink(event);
        window.open(link, '_blank');
        showDropdown = false;
    }
    
    function addToAppleCalendar() {
        generateICSFile(event);
        showDropdown = false;
    }
    
    function addToOutlookCalendar() {
        const link = generateOutlookCalendarLink(event);
        window.open(link, '_blank');
        showDropdown = false;
    }
    
    function downloadICS() {
        generateICSFile(event);
        showDropdown = false;
    }
    
    function toggleDropdown() {
        showDropdown = !showDropdown;
    }
</script>

<div class="calendar-dropdown">
    <button class="event-modal-button" on:click={toggleDropdown}>
        <span class="icon calendar-add-icon" />
        {lang === 'de' ? 'Zum Kalender hinzufügen' : 'Add to Calendar'}
    </button>
    
    {#if showDropdown}
        <div class="dropdown-menu">
            <button class="dropdown-item" on:click={addToGoogleCalendar}>
                <span class="dropdown-icon google-icon"></span>
                Google Calendar
            </button>
            <button class="dropdown-item" on:click={addToAppleCalendar}>
                <span class="dropdown-icon apple-icon"></span>
                Apple Calendar
            </button>
            <button class="dropdown-item" on:click={addToOutlookCalendar}>
                <span class="dropdown-icon outlook-icon"></span>
                Outlook
            </button>
            <button class="dropdown-item" on:click={downloadICS}>
                <span class="dropdown-icon download-icon"></span>
                {lang === 'de' ? '.ics Datei herunterladen' : 'Download .ics file'}
            </button>
        </div>
    {/if}
</div>

<style>
    .calendar-add-icon {
        background-image: url("/icons/calendar-add.svg");
    }
    
    .calendar-dropdown {
        position: relative;
        display: inline-block;
    }
    
    .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #e1e1e1;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10;
        overflow: hidden;
        margin-top: 4px;
    }
    
    .dropdown-item {
        width: 100%;
        padding: 0.75rem 1rem;
        border: none;
        background: white;
        text-align: left;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.9rem;
        transition: background-color 0.2s;
    }
    
    .dropdown-item:hover {
        background: #f8f9fa;
    }
    
    .dropdown-icon {
        width: 16px;
        height: 16px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    
    .google-icon {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%234285f4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath fill='%2334a853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath fill='%23fbbc05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath fill='%23ea4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E");
    }
    
    .apple-icon {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000'%3E%3Cpath d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'/%3E%3C/svg%3E");
    }
    
    .outlook-icon {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%230078d4' d='M7 9c-2.2 0-4 1.8-4 4s1.8 4 4 4c2.2 0 4-1.8 4-4S9.2 9 7 9zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'/%3E%3Cpath fill='%230078d4' d='M20 4H9c-1.1 0-2 .9-2 2v3.5c.3-.3.6-.5 1-.5V6h12v12h-7.5c.3.4.5.7.5 1H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z'/%3E%3C/svg%3E");
    }
    
    .download-icon {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23666'%3E%3Cpath d='M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z'/%3E%3C/svg%3E");
    }
    
    @media (max-width: 768px) {
        .dropdown-menu {
            left: 50%;
            transform: translateX(-50%);
            min-width: 200px;
        }
    }
</style>