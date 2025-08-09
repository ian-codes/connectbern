<script>
    import dayjs from "dayjs";
    import AddToCalendarButton from "./AddToCalendarButton.svelte";
    import OpenInMapsButton from "./OpenInMapsButton.svelte";
    import { eventsStore } from '$lib/stores/eventsStore.js';
    import { currentLanguage } from '$lib/stores/languageStore.js';

    export let event = {};
    export let isOpen;
    export let onClose;
    
    $: lang = $currentLanguage;
    
    function handleShare() {
        if (navigator.share) {
            navigator.share({
                title: event?.title,
                text: `Check out this event: ${event?.title}`,
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            const shareText = `${event?.title} - ${dayjs(event?.start).format('MMMM D, YYYY')} at ${event?.extendedProps?.location}`;
            navigator.clipboard.writeText(shareText).then(() => {
                alert(lang === 'de' ? 'Event-Details wurden in die Zwischenablage kopiert!' : 'Event details copied to clipboard!');
            });
        }
    }
    
    function handleLike() {
        if (event?.id) {
            eventsStore.toggleLike(event.id);
        }
    }
    
    // Increment views when modal opens
    $: if (isOpen && event?.id) {
        eventsStore.incrementViews(event.id);
    }
</script>


<div class="backdrop" class:blur={isOpen} />
<div class:isOpen={isOpen} class="event-info">
    <button class="unfocus" on:click={onClose} />
    <div class="inner-wrapper">
        <button
            id="close" 
            class="img"
            on:click={onClose} />

        <div class="event-header">
            <h3>{event?.title}</h3>
            {#if event?.extendedProps?.category}
                <span class="category-badge">{event.extendedProps.category}</span>
            {/if}
        </div>
        
        <div class="event-meta">
            {#if event?.likes !== undefined}
                <span class="meta-item">👥 {event.views || 0} {lang === 'de' ? 'Aufrufe' : 'views'}</span>
                <span class="meta-item">❤️ {event.likes || 0} {lang === 'de' ? 'Likes' : 'likes'}</span>
            {/if}
        </div>
        
        <ul class="infos">
            <li class="info-item">
                <span class="info-icon">📅</span>
                <div class="info-content">
                    <strong>{dayjs(event?.start).format('dddd, MMMM D, YYYY')}</strong>
                    <br>
                    {dayjs(event?.start).format('h:mm A')}
                    {#if event?.end}
                        - {dayjs(event?.end).format('h:mm A')}
                    {/if}
                </div>
            </li>
            
            {#if event?.extendedProps?.location}
                <li class="info-item">
                    <span class="info-icon">📍</span>
                    <div class="info-content">
                        <strong>{lang === 'de' ? 'Ort' : 'Location'}</strong>
                        <br>
                        {event.extendedProps.location}
                    </div>
                </li>
            {/if}
            
            {#if event?.extendedProps?.description}
                <li class="info-item">
                    <span class="info-icon">📝</span>
                    <div class="info-content">
                        <strong>{lang === 'de' ? 'Beschreibung' : 'Description'}</strong>
                        <br>
                        {event.extendedProps.description}
                    </div>
                </li>
            {/if}
            
            {#if event?.extendedProps?.organizerName}
                <li class="info-item">
                    <span class="info-icon">👤</span>
                    <div class="info-content">
                        <strong>{lang === 'de' ? 'Organisator' : 'Organizer'}</strong>
                        <br>
                        {event.extendedProps.organizerName}
                    </div>
                </li>
            {/if}
            
            {#if event?.extendedProps?.contactInfo}
                <li class="info-item">
                    <span class="info-icon">📧</span>
                    <div class="info-content">
                        <strong>{lang === 'de' ? 'Kontakt' : 'Contact'}</strong>
                        <br>
                        {event.extendedProps.contactInfo}
                    </div>
                </li>
            {/if}
            
            {#if event?.extendedProps?.website}
                <li class="info-item">
                    <span class="info-icon">🌐</span>
                    <div class="info-content">
                        <strong>Website</strong>
                        <br>
                        <a href={event.extendedProps.website} target="_blank" rel="noopener noreferrer">
                            {event.extendedProps.website}
                        </a>
                    </div>
                </li>
            {/if}
        </ul>
        
        <div class="buttonsContainer">
            <AddToCalendarButton {event} />
            <OpenInMapsButton location={event?.extendedProps?.location} />
            
            <button class="event-modal-button like-btn" on:click={handleLike}>
                <span class="icon heart-icon" />
                {lang === 'de' ? 'Gefällt mir' : 'Like Event'}
            </button>
            
            <button class="event-modal-button share-btn" on:click={handleShare}>
                <span class="icon share-icon" />
                {lang === 'de' ? 'Teilen' : 'Share'}
            </button>
            
            {#if event?.extendedProps?.slug}
                <a href="/events/{event.extendedProps.slug}"
                    class="event-modal-button">
                    <span class="icon eye-icon" />
                    {lang === 'de' ? 'Details-Seite' : 'Details Page'}
                </a>
            {/if}
        </div>
    </div>
</div>


<style>
    .eye-icon {
        background-image: url("/icons/go-to-details.svg");
    }
    
    .heart-icon {
        background-image: url("/icons/heart.svg");
    }
    
    .share-icon {
        background-image: url("/icons/share.svg");
    }

    .backdrop {
        position: fixed;
        inset: 0;
        z-index: 3;
        pointer-events: none;
        backdrop-filter: blur(0);
        transition: all .2s ease;
    }

    .backdrop.blur {
        backdrop-filter: blur(3px);
    }

    .event-info {
        display: none;
        position: fixed;
        inset: 0;
        text-align: left;
        padding: 1em;
        align-items: center;
        justify-content: center;
        z-index: 4;
    }

    .inner-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        background: white;
        min-width: 50%;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.267) inset, 0 5px 30px rgba(0, 0, 0, 0.384);
        z-index: 5;
        color: #333 !important;
        padding: 2em 2.5em;
        border-radius: 12px;
    }
    
    .inner-wrapper h3,
    .inner-wrapper p,
    .inner-wrapper div,
    .inner-wrapper span {
        color: #333 !important;
    }
    
    .event-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1rem;
    }
    
    .category-badge {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: capitalize;
        white-space: nowrap;
    }
    
    .event-meta {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
        font-size: 0.9rem;
        color: #666;
    }
    
    .meta-item {
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }

    .infos {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    .info-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid #667eea;
    }
    
    .info-icon {
        font-size: 1.2rem;
        min-width: 24px;
    }
    
    .info-content {
        flex: 1;
    }
    
    .info-content a {
        color: #667eea;
        text-decoration: none;
        word-break: break-all;
    }
    
    .info-content a:hover {
        text-decoration: underline;
    }

    h3 {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
        color: #333 !important;
        flex: 1;
    }

    .buttonsContainer {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0.75rem;
        margin-top: 1rem;
    }
    
    .event-modal-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        background: white;
        border: 2px solid #e1e1e1;
        border-radius: 8px;
        text-decoration: none;
        color: #333;
        font-weight: 500;
        transition: all 0.2s ease;
        cursor: pointer;
        font-size: 0.9rem;
        justify-content: center;
    }
    
    .event-modal-button:hover {
        border-color: #667eea;
        background: #f8f9ff;
        transform: translateY(-1px);
    }
    
    .like-btn:hover {
        border-color: #e74c3c;
        background: #fdf2f2;
    }
    
    .share-btn:hover {
        border-color: #27ae60;
        background: #f2fdf5;
    }
    
    .icon {
        width: 16px;
        height: 16px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .isOpen {
        display: flex !important;
    }

    .unfocus {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        cursor: default !important;
        z-index: 3;
    }

    #close {
        background: radial-gradient(red, rgb(90, 0, 0));
        box-shadow: 0 0 2px 1px white inset;
        position: absolute;
        right: 0;
        top: 0;
        width: 1.5em;
        aspect-ratio: 1;
        margin: .5em;
        border-radius: 100%;
        transition: all .1s ease;
        opacity: .6;
        border: none;
        cursor: pointer;
    }
    
    #close::before {
        content: '';
        position: absolute;
        inset: 0;
        margin: auto;
        background-image: url("/icons/close.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        filter: invert(1);
        opacity: .6;
        width: 15px;
    }
    
    #close:hover {
        opacity: 1;
    }

    .img {
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
    
    @media (max-width: 768px) {
        .inner-wrapper {
            min-width: 90%;
            max-width: 95%;
            padding: 1.5rem;
        }
        
        .buttonsContainer {
            grid-template-columns: 1fr;
        }
        
        .event-header {
            flex-direction: column;
            align-items: flex-start;
        }
        
        .info-item {
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .info-icon {
            align-self: flex-start;
        }
    }
</style>