<script>
    import { eventsStore } from '$lib/stores/eventsStore.js';
    import { currentLanguage } from '$lib/stores/languageStore.js';
    import dayjs from 'dayjs';
    
    export let isOpen = false;
    export let onClose = () => {};
    
    $: lang = $currentLanguage;
    $: pendingEvents = $eventsStore.filter(event => event.status === 'pending');
    $: approvedEvents = $eventsStore.filter(event => event.status === 'approved');
    $: rejectedEvents = $eventsStore.filter(event => event.status === 'rejected');
    
    let activeTab = 'pending';
    
    function approveEvent(eventId) {
        eventsStore.approveEvent(eventId);
    }
    
    function rejectEvent(eventId) {
        eventsStore.rejectEvent(eventId);
    }
    
    function deleteEvent(eventId) {
        if (confirm(lang === 'de' ? 'Event wirklich löschen?' : 'Are you sure you want to delete this event?')) {
            eventsStore.deleteEvent(eventId);
        }
    }
</script>

<div class="backdrop" class:active={isOpen} on:click={onClose} on:keydown={(e) => e.key === 'Escape' && onClose()}></div>

{#if isOpen}
<div class="modal" on:click|stopPropagation>
    <div class="modal-header">
        <h2>{lang === 'de' ? 'Event-Verwaltung' : 'Event Management'}</h2>
        <button class="close-btn" on:click={onClose} aria-label="Close">×</button>
    </div>
    
    <div class="tabs">
        <button 
            class="tab" 
            class:active={activeTab === 'pending'}
            on:click={() => activeTab = 'pending'}>
            {lang === 'de' ? 'Wartend' : 'Pending'} ({pendingEvents.length})
        </button>
        <button 
            class="tab" 
            class:active={activeTab === 'approved'}
            on:click={() => activeTab = 'approved'}>
            {lang === 'de' ? 'Genehmigt' : 'Approved'} ({approvedEvents.length})
        </button>
        <button 
            class="tab" 
            class:active={activeTab === 'rejected'}
            on:click={() => activeTab = 'rejected'}>
            {lang === 'de' ? 'Abgelehnt' : 'Rejected'} ({rejectedEvents.length})
        </button>
    </div>
    
    <div class="content">
        {#if activeTab === 'pending'}
            <div class="event-list">
                {#each pendingEvents as event}
                    <div class="event-card">
                        <div class="event-info">
                            <h3>{event.title}</h3>
                            <p class="event-date">{dayjs(event.start).format('MMMM D, YYYY [at] h:mm A')}</p>
                            <p class="event-location">{event.extendedProps?.location || ''}</p>
                            <p class="event-description">{event.extendedProps?.description || ''}</p>
                            <div class="event-meta">
                                <span>{lang === 'de' ? 'Organisator:' : 'Organizer:'} {event.extendedProps?.organizerName || 'Unknown'}</span>
                                <span>{lang === 'de' ? 'Kategorie:' : 'Category:'} {event.extendedProps?.category || 'Other'}</span>
                            </div>
                        </div>
                        <div class="event-actions">
                            <button class="approve-btn" on:click={() => approveEvent(event.id)}>
                                ✓ {lang === 'de' ? 'Genehmigen' : 'Approve'}
                            </button>
                            <button class="reject-btn" on:click={() => rejectEvent(event.id)}>
                                ✗ {lang === 'de' ? 'Ablehnen' : 'Reject'}
                            </button>
                            <button class="delete-btn" on:click={() => deleteEvent(event.id)}>
                                🗑️ {lang === 'de' ? 'Löschen' : 'Delete'}
                            </button>
                        </div>
                    </div>
                {/each}
                
                {#if pendingEvents.length === 0}
                    <div class="empty-state">
                        <p>{lang === 'de' ? 'Keine Events warten auf Genehmigung.' : 'No events pending approval.'}</p>
                    </div>
                {/if}
            </div>
        {/if}
        
        {#if activeTab === 'approved'}
            <div class="event-list">
                {#each approvedEvents as event}
                    <div class="event-card approved">
                        <div class="event-info">
                            <h3>{event.title}</h3>
                            <p class="event-date">{dayjs(event.start).format('MMMM D, YYYY [at] h:mm A')}</p>
                            <p class="event-location">{event.extendedProps?.location || ''}</p>
                            <div class="event-stats">
                                <span>👥 {event.views || 0} {lang === 'de' ? 'Aufrufe' : 'views'}</span>
                                <span>❤️ {event.likes || 0} {lang === 'de' ? 'Likes' : 'likes'}</span>
                            </div>
                        </div>
                        <div class="event-actions">
                            <button class="reject-btn" on:click={() => rejectEvent(event.id)}>
                                ✗ {lang === 'de' ? 'Entfernen' : 'Remove'}
                            </button>
                            <button class="delete-btn" on:click={() => deleteEvent(event.id)}>
                                🗑️ {lang === 'de' ? 'Löschen' : 'Delete'}
                            </button>
                        </div>
                    </div>
                {/each}
                
                {#if approvedEvents.length === 0}
                    <div class="empty-state">
                        <p>{lang === 'de' ? 'Keine genehmigten Events.' : 'No approved events.'}</p>
                    </div>
                {/if}
            </div>
        {/if}
        
        {#if activeTab === 'rejected'}
            <div class="event-list">
                {#each rejectedEvents as event}
                    <div class="event-card rejected">
                        <div class="event-info">
                            <h3>{event.title}</h3>
                            <p class="event-date">{dayjs(event.start).format('MMMM D, YYYY [at] h:mm A')}</p>
                            <p class="event-location">{event.extendedProps?.location || ''}</p>
                        </div>
                        <div class="event-actions">
                            <button class="approve-btn" on:click={() => approveEvent(event.id)}>
                                ✓ {lang === 'de' ? 'Genehmigen' : 'Approve'}
                            </button>
                            <button class="delete-btn" on:click={() => deleteEvent(event.id)}>
                                🗑️ {lang === 'de' ? 'Löschen' : 'Delete'}
                            </button>
                        </div>
                    </div>
                {/each}
                
                {#if rejectedEvents.length === 0}
                    <div class="empty-state">
                        <p>{lang === 'de' ? 'Keine abgelehnten Events.' : 'No rejected events.'}</p>
                    </div>
                {/if}
            </div>
        {/if}
    </div>
</div>
{/if}

<style lang="postcss">
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(3px);
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }
    
    .backdrop.active {
        opacity: 1;
        visibility: visible;
    }
    
    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border-radius: 12px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        max-width: 800px;
        width: 90vw;
        max-height: 90vh;
        overflow: hidden;
        z-index: 1001;
        display: flex;
        flex-direction: column;
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 2rem;
        border-bottom: 1px solid #e5e5e5;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
    }
    
    .modal-header h2 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
    }
    
    .close-btn {
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s;
    }
    
    .close-btn:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    
    .tabs {
        display: flex;
        border-bottom: 1px solid #e5e5e5;
        background: #f8f9fa;
    }
    
    .tab {
        flex: 1;
        padding: 1rem;
        border: none;
        background: none;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        color: #666;
        transition: all 0.2s;
        border-bottom: 2px solid transparent;
    }
    
    .tab:hover {
        color: #333;
        background: rgba(102, 126, 234, 0.1);
    }
    
    .tab.active {
        color: #667eea;
        border-bottom-color: #667eea;
        background: white;
    }
    
    .content {
        flex: 1;
        overflow-y: auto;
        padding: 0;
    }
    
    .event-list {
        padding: 1rem;
    }
    
    .event-card {
        background: white;
        border: 1px solid #e5e5e5;
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
        transition: all 0.2s;
    }
    
    .event-card:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transform: translateY(-1px);
    }
    
    .event-card.approved {
        border-left: 4px solid #27ae60;
        background: #f8fff9;
    }
    
    .event-card.rejected {
        border-left: 4px solid #e74c3c;
        background: #fff8f8;
    }
    
    .event-info {
        flex: 1;
    }
    
    .event-info h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.25rem;
        color: #333;
    }
    
    .event-date {
        margin: 0 0 0.5rem 0;
        color: #666;
        font-weight: 500;
    }
    
    .event-location {
        margin: 0 0 0.5rem 0;
        color: #888;
    }
    
    .event-description {
        margin: 0 0 1rem 0;
        color: #666;
        font-size: 0.95rem;
        line-height: 1.4;
    }
    
    .event-meta {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        font-size: 0.85rem;
        color: #888;
    }
    
    .event-stats {
        display: flex;
        gap: 1rem;
        font-size: 0.9rem;
        color: #666;
    }
    
    .event-actions {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        min-width: 120px;
    }
    
    .event-actions button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 6px;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .approve-btn {
        background: #27ae60;
        color: white;
    }
    
    .approve-btn:hover {
        background: #219a52;
    }
    
    .reject-btn {
        background: #e74c3c;
        color: white;
    }
    
    .reject-btn:hover {
        background: #c0392b;
    }
    
    .delete-btn {
        background: #95a5a6;
        color: white;
    }
    
    .delete-btn:hover {
        background: #7f8c8d;
    }
    
    .empty-state {
        text-align: center;
        padding: 3rem 1rem;
        color: #666;
    }
    
    .empty-state p {
        margin: 0;
        font-size: 1.1rem;
    }
    
    @media (max-width: 768px) {
        .modal {
            width: 95vw;
            max-height: 95vh;
        }
        
        .modal-header {
            padding: 1rem;
        }
        
        .event-card {
            flex-direction: column;
            gap: 1rem;
        }
        
        .event-actions {
            flex-direction: row;
            min-width: auto;
            width: 100%;
        }
        
        .event-actions button {
            flex: 1;
        }
        
        .tabs {
            overflow-x: auto;
        }
        
        .tab {
            white-space: nowrap;
            min-width: 120px;
        }
    }
</style>
