<script>
    import { eventsStore, needsApproval } from '$lib/stores/eventsStore.js';
    import { currentLanguage } from '$lib/stores/languageStore.js';
    
    export let isOpen = false;
    export let onClose = () => {};
    
    let title = '';
    let description = '';
    let location = '';
    let startDate = '';
    let startTime = '';
    let endDate = '';
    let endTime = '';
    let category = 'social';
    let website = '';
    let contactInfo = '';
    let organizerName = '';
    let isRecurring = false;
    let recurringPattern = 'weekly';
    let recurringEnd = '';
    
    $: lang = $currentLanguage;
    
    const categories = {
        social: { en: 'Social', de: 'Social' },
        cultural: { en: 'Cultural', de: 'Kulturell' },
        sports: { en: 'Sports', de: 'Sport' },
        education: { en: 'Education', de: 'Bildung' },
        business: { en: 'Business', de: 'Business' },
        food: { en: 'Food & Drink', de: 'Essen & Trinken' },
        music: { en: 'Music', de: 'Musik' },
        art: { en: 'Art', de: 'Kunst' },
        outdoor: { en: 'Outdoor', de: 'Outdoor' },
        tech: { en: 'Technology', de: 'Technologie' },
        language: { en: 'Language Exchange', de: 'Sprachaustausch' },
        other: { en: 'Other', de: 'Andere' }
    };
    
    function handleSubmit() {
        if (!title || !startDate || !startTime || !location) {
            alert(lang === 'de' ? 'Bitte füllen Sie alle erforderlichen Felder aus.' : 'Please fill in all required fields.');
            return;
        }
        
        const start = new Date(`${startDate}T${startTime}`);
        const end = endDate && endTime ? new Date(`${endDate}T${endTime}`) : new Date(start.getTime() + 2 * 60 * 60 * 1000); // Default 2 hours
        
        const eventData = {
            title,
            description,
            location,
            start,
            end,
            category,
            website,
            contactInfo,
            organizerName,
            isRecurring,
            recurringPattern: isRecurring ? recurringPattern : null,
            recurringEnd: isRecurring && recurringEnd ? new Date(recurringEnd) : null,
            extendedProps: {
                slug: title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
                description,
                location,
                category,
                website,
                contactInfo,
                organizerName
            }
        };
        
        // Generate recurring events if needed
        if (isRecurring && recurringEnd) {
            const events = generateRecurringEvents(eventData);
            events.forEach(event => eventsStore.addEvent(event));
        } else {
            eventsStore.addEvent(eventData);
        }
        
        // Show success message
        alert($needsApproval ? 
            (lang === 'de' ? 'Event erfolgreich eingereicht! Es wird überprüft und dann veröffentlicht.' : 'Event submitted successfully! It will be reviewed and then published.') :
            (lang === 'de' ? 'Event erfolgreich erstellt!' : 'Event created successfully!')
        );
        
        resetForm();
        onClose();
    }
    
    function generateRecurringEvents(baseEvent) {
        const events = [];
        const endRecurrence = new Date(recurringEnd);
        let currentDate = new Date(baseEvent.start);
        
        while (currentDate <= endRecurrence) {
            const eventEnd = new Date(currentDate);
            eventEnd.setTime(eventEnd.getTime() + (baseEvent.end.getTime() - baseEvent.start.getTime()));
            
            events.push({
                ...baseEvent,
                start: new Date(currentDate),
                end: eventEnd,
                title: `${baseEvent.title} (${lang === 'de' ? 'Serie' : 'Series'})`,
                extendedProps: {
                    ...baseEvent.extendedProps,
                    slug: `${baseEvent.extendedProps.slug}-${currentDate.getTime()}`
                }
            });
            
            // Increment date based on pattern
            switch (recurringPattern) {
                case 'daily':
                    currentDate.setDate(currentDate.getDate() + 1);
                    break;
                case 'weekly':
                    currentDate.setDate(currentDate.getDate() + 7);
                    break;
                case 'monthly':
                    currentDate.setMonth(currentDate.getMonth() + 1);
                    break;
            }
        }
        
        return events;
    }
    
    function resetForm() {
        title = '';
        description = '';
        location = '';
        startDate = '';
        startTime = '';
        endDate = '';
        endTime = '';
        category = 'social';
        website = '';
        contactInfo = '';
        organizerName = '';
        isRecurring = false;
        recurringPattern = 'weekly';
        recurringEnd = '';
    }
    
    // Set default start time to current time + 1 hour
    function setDefaultDateTime() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(18, 0, 0, 0); // Default to 6 PM tomorrow
        
        startDate = tomorrow.toISOString().split('T')[0];
        startTime = tomorrow.toTimeString().substring(0, 5);
        
        const eventEnd = new Date(tomorrow);
        eventEnd.setHours(20, 0, 0, 0); // Default to 8 PM
        endDate = eventEnd.toISOString().split('T')[0];
        endTime = eventEnd.toTimeString().substring(0, 5);
    }
    
    // Auto-set defaults when modal opens
    $: if (isOpen && !startDate) {
        setDefaultDateTime();
    }
</script>

<div class="backdrop" class:active={isOpen} on:click={onClose} on:keydown={(e) => e.key === 'Escape' && onClose()}></div>

{#if isOpen}
<div class="modal" on:click|stopPropagation>
    <div class="modal-header">
        <h2>{lang === 'de' ? 'Neues Event erstellen' : 'Create New Event'}</h2>
        <button class="close-btn" on:click={onClose} aria-label="Close">×</button>
    </div>
    
    <form on:submit|preventDefault={handleSubmit} class="event-form">
        <div class="form-group">
            <label for="title">{lang === 'de' ? 'Event-Titel' : 'Event Title'} *</label>
            <input id="title" type="text" bind:value={title} required placeholder={lang === 'de' ? 'z.B. Sprachaustausch im Park' : 'e.g. Language Exchange in the Park'} />
        </div>
        
        <div class="form-group">
            <label for="description">{lang === 'de' ? 'Beschreibung' : 'Description'}</label>
            <textarea id="description" bind:value={description} rows="3" placeholder={lang === 'de' ? 'Beschreiben Sie Ihr Event...' : 'Describe your event...'}></textarea>
        </div>
        
        <div class="form-group">
            <label for="category">{lang === 'de' ? 'Kategorie' : 'Category'}</label>
            <select id="category" bind:value={category}>
                {#each Object.entries(categories) as [key, labels]}
                    <option value={key}>{labels[lang]}</option>
                {/each}
            </select>
        </div>
        
        <div class="form-group">
            <label for="location">{lang === 'de' ? 'Ort' : 'Location'} *</label>
            <input id="location" type="text" bind:value={location} required placeholder={lang === 'de' ? 'z.B. Rosengarten, Bern' : 'e.g. Rose Garden, Bern'} />
        </div>
        
        <div class="form-row">
            <div class="form-group">
                <label for="startDate">{lang === 'de' ? 'Start-Datum' : 'Start Date'} *</label>
                <input id="startDate" type="date" bind:value={startDate} required />
            </div>
            <div class="form-group">
                <label for="startTime">{lang === 'de' ? 'Start-Zeit' : 'Start Time'} *</label>
                <input id="startTime" type="time" bind:value={startTime} required />
            </div>
        </div>
        
        <div class="form-row">
            <div class="form-group">
                <label for="endDate">{lang === 'de' ? 'End-Datum' : 'End Date'}</label>
                <input id="endDate" type="date" bind:value={endDate} />
            </div>
            <div class="form-group">
                <label for="endTime">{lang === 'de' ? 'End-Zeit' : 'End Time'}</label>
                <input id="endTime" type="time" bind:value={endTime} />
            </div>
        </div>
        
        <div class="form-group">
            <label>
                <input type="checkbox" bind:checked={isRecurring} />
                {lang === 'de' ? 'Wiederkehrendes Event' : 'Recurring Event'}
            </label>
        </div>
        
        {#if isRecurring}
            <div class="form-row">
                <div class="form-group">
                    <label for="pattern">{lang === 'de' ? 'Wiederholungsmuster' : 'Repeat Pattern'}</label>
                    <select id="pattern" bind:value={recurringPattern}>
                        <option value="daily">{lang === 'de' ? 'Täglich' : 'Daily'}</option>
                        <option value="weekly">{lang === 'de' ? 'Wöchentlich' : 'Weekly'}</option>
                        <option value="monthly">{lang === 'de' ? 'Monatlich' : 'Monthly'}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="recurringEnd">{lang === 'de' ? 'Wiederholung bis' : 'Repeat Until'}</label>
                    <input id="recurringEnd" type="date" bind:value={recurringEnd} />
                </div>
            </div>
        {/if}
        
        <div class="form-group">
            <label for="organizerName">{lang === 'de' ? 'Organisator Name' : 'Organizer Name'}</label>
            <input id="organizerName" type="text" bind:value={organizerName} placeholder={lang === 'de' ? 'Ihr Name oder Organisation' : 'Your name or organization'} />
        </div>
        
        <div class="form-group">
            <label for="contactInfo">{lang === 'de' ? 'Kontaktinformationen' : 'Contact Information'}</label>
            <input id="contactInfo" type="text" bind:value={contactInfo} placeholder={lang === 'de' ? 'E-Mail oder Telefon' : 'Email or phone number'} />
        </div>
        
        <div class="form-group">
            <label for="website">{lang === 'de' ? 'Website (optional)' : 'Website (optional)'}</label>
            <input id="website" type="url" bind:value={website} placeholder="https://..." />
        </div>
        
        <div class="form-actions">
            <button type="button" class="btn-secondary" on:click={onClose}>
                {lang === 'de' ? 'Abbrechen' : 'Cancel'}
            </button>
            <button type="submit" class="btn-primary">
                {lang === 'de' ? 'Event erstellen' : 'Create Event'}
            </button>
        </div>
        
        {#if $needsApproval}
            <p class="approval-notice">
                {lang === 'de' ? '⚠️ Hinweis: Events müssen von einem Administrator genehmigt werden, bevor sie veröffentlicht werden.' : '⚠️ Note: Events must be approved by an administrator before they are published.'}
            </p>
        {/if}
    </form>
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
        max-width: 600px;
        width: 90vw;
        max-height: 90vh;
        overflow-y: auto;
        z-index: 1001;
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 2rem;
        border-bottom: 1px solid #e5e5e5;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-radius: 12px 12px 0 0;
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
    
    .event-form {
        padding: 2rem;
        color: #333;
    }
    
    .form-group {
        margin-bottom: 1.5rem;
    }
    
    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
    
    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: #333 !important;
    }
    
    input, textarea, select {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #e1e1e1;
        border-radius: 6px;
        font-size: 1rem;
        transition: border-color 0.2s;
        font-family: inherit;
    }
    
    input:focus, textarea:focus, select:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    textarea {
        resize: vertical;
        min-height: 100px;
    }
    
    input[type="checkbox"] {
        width: auto;
        margin-right: 0.5rem;
    }
    
    .form-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid #e5e5e5;
    }
    
    .btn-primary, .btn-secondary {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
    }
    
    .btn-primary {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
    }
    
    .btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }
    
    .btn-secondary {
        background: #f8f9fa;
        color: #6c757d;
        border: 1px solid #dee2e6;
    }
    
    .btn-secondary:hover {
        background: #e9ecef;
    }
    
    .approval-notice {
        background: #fff3cd;
        border: 1px solid #ffeaa7;
        border-radius: 6px;
        padding: 1rem;
        margin-top: 1rem;
        font-size: 0.9rem;
        color: #856404;
    }
    
    @media (max-width: 768px) {
        .modal {
            width: 95vw;
            max-height: 95vh;
        }
        
        .modal-header {
            padding: 1rem;
        }
        
        .event-form {
            padding: 1rem;
        }
        
        .form-row {
            grid-template-columns: 1fr;
        }
        
        .form-actions {
            flex-direction: column;
        }
    }
</style>
