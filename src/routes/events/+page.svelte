<svelte:head>
	<title>Events • Connect Bern </title>
</svelte:head>


<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    import { eventsStore, needsApproval } from '$lib/stores/eventsStore.js';
    import Calendar from "$lib/components/calendar/Calendar.svelte";
    import EventAdminPanel from "$lib/components/calendar/EventAdminPanel.svelte";

    $: lang = $currentLanguage;
    
    let showAdminPanel = false;
    let adminPassword = '';
    let isAdmin = false;
    
    // Simple admin check (in production, use proper authentication)
    function checkAdminPassword() {
        if (adminPassword === 'admin123') { // Replace with secure authentication
            isAdmin = true;
            showAdminPanel = true;
            adminPassword = '';
        } else {
            alert(lang === 'de' ? 'Falsches Passwort' : 'Wrong password');
        }
    }
    
    function toggleApprovalMode() {
        needsApproval.update(n => !n);
    }
    
    $: pendingCount = $eventsStore.filter(e => e.status === 'pending').length;
</script>

<section class="events-main">
    <div class="topbarWrapper">
        <h1>Events</h1>
        <p>
            {@html t[lang]['events-description']}
        </p>
        
        <div class="admin-controls">
            {#if !isAdmin}
                <div class="admin-login">
                    <input 
                        type="password" 
                        bind:value={adminPassword} 
                        placeholder={lang === 'de' ? 'Admin-Passwort' : 'Admin password'}
                        on:keydown={(e) => e.key === 'Enter' && checkAdminPassword()}
                    />
                    <button on:click={checkAdminPassword} class="admin-btn">
                        {lang === 'de' ? 'Admin' : 'Admin'}
                    </button>
                </div>
            {:else}
                <div class="admin-panel-controls">
                    <button on:click={() => showAdminPanel = true} class="admin-btn">
                        {lang === 'de' ? 'Event-Verwaltung' : 'Manage Events'} 
                        {#if pendingCount > 0}
                            <span class="badge">{pendingCount}</span>
                        {/if}
                    </button>
                </div>
            {/if}
        </div>
    </div>

    <!-- Enhanced Interactive Calendar -->
    <Calendar />
    
    <!-- Admin Panel -->
    <EventAdminPanel 
        isOpen={showAdminPanel} 
        onClose={() => showAdminPanel = false} 
    />
</section>

<!-- Static Event Information (kept for reference) -->
<section class="static-events">
    <div class="section-header">
        <h2>{lang === 'de' ? 'Regelmäßige Events in Bern' : 'Regular Events in Bern'}</h2>
        <p>{lang === 'de' ? 'Diese Events finden regelmäßig statt - schaut auf den entsprechenden Plattformen für aktuelle Termine.' : 'These events happen regularly - check the respective platforms for current dates.'}</p>
    </div>
    
    <ul class="static-events-list">
        <li>
            {lang === 'de' ? 'Schaut auf Facebook im "lokal" Tab nach Events:' : 'Check for events on Facebook on the \'local\' tab:'}
            <a href="https://www.facebook.com/events/?date_filter_option=TODAY&discover_tab=LOCAL">
                Link
            </a>
        </li>
        <li>
            {lang === 'de' ? 'Auf' : 'On'} <a href="https://meetup.com">Meetup.com</a> {lang === 'de' ? 'und' : 'and'} 
            <a href="https://gemeinsamerleben.com/orte-und-regionen/schweiz/bern">
                Gemeinsam Erleben
            </a>
        </li>
        <li>
            {lang === 'de' ? 'Auf' : 'On'} <a href="https://www.pusterum.ch/kultur">Pusterum's website</a>
        </li>
        <li>
            {lang === 'de' ? 'Auf den Websites von' : 'On the'} <a href="https://www.reitschule.ch/reitschule/?programm">Reitschule</a>  
            {lang === 'de' ? 'und' : 'and'} <a href="https://www.dieheiterefahne.ch/menu">Heitere Fahne</a> {lang === 'de' ? '' : 'websites'}
        </li>
        <li>
            <a href="https://bern.impacthub.net/events-erleben">Impact Hub Bern</a> 
        </li>
        <li>
            {lang === 'de' ? 'Schaut im' : 'Check the'} <a href="https://www.reddit.com/r/bern/"> Bern Subreddit</a> {lang === 'de' ? 'um Leute zu treffen' : 'to meet people'}
        </li>
    </ul>

    <div class="weekly-events">
        <h3>{lang === 'de' ? 'Wöchentliche Events' : 'Weekly Events'}</h3>
        
        <div class="day-section">
            <h4>{lang === 'de' ? 'Montag:' : 'Monday:'}</h4>
            <ul>
                <li>
                    <a href="https://denkmal-bern.ch">Denk:Mal</a> - {lang === 'de' ? 'Schweizerdeutsch Kurs, tritt der' : 'Swiss German course, join the'} <a href="https://tiny.cc/germanbern">WhatsApp Group</a> {lang === 'de' ? 'bei' : ''}
                </li>
            </ul>
        </div>

        <div class="day-section">
            <h4>{lang === 'de' ? 'Dienstag:' : 'Tuesday:'}</h4>
            <ul>
                <li>
                    <strong>{lang === 'de' ? 'Jeden 3. Dienstag:' : 'Every 3rd Tuesday:'}</strong><br>
                    {lang === 'de' ? 'Treffe andere Hacker und Infosec Profis jeden 3. Dienstag des Monats für ein entspanntes Meetup mit Drinks in verschiedenen Schweizer Städten. Kostenlos, außer bei speziellen Events.' : 'Join fellow hackers and infosec professionals every 3rd Tuesday of the month for a relaxed meetup with drinks in various Swiss cities. It\'s free, except for special events.'} 
                    <a href="https://beerontuesday.ch">beerontuesday.ch</a>
                </li>
                <li>
                    International Meetup BlaBla language exchange
                </li>
                <li>
                    CCC weekly meeting
                </li>
            </ul>
        </div>

        <div class="day-section">
            <h4>{lang === 'de' ? 'Mittwoch:' : 'Wednesday:'}</h4>
            <ul>
                <li>
                    <strong>{lang === 'de' ? 'Einmal im Monat:' : 'Once a month:'}</strong> <a href="https://www.pusterum.ch/kultur">Pusterum</a> {lang === 'de' ? 'Spieleabend - normalerweise am zweiten Mittwoch des Monats' : 'games night - usually second Wednesday of the month'}
                </li>
                <li>
                    <strong>After work - JYoB:</strong> {lang === 'de' ? 'jeden ersten Mittwoch des Monats' : 'every first Wednesday of the month'}
                </li>
                <li>
                    {lang === 'de' ? 'Soziales Treffen der Effective Altruism Gruppe' : 'Social get together of effective altruism group'}
                </li>
            </ul>
        </div>

        <div class="day-section">
            <h4>{lang === 'de' ? 'Donnerstag:' : 'Thursday:'}</h4>
            <ul>
                <li>
                    <a href="https://englishclub.ch">English club</a> (Englishclub.ch)
                </li>
                <li>
                    <strong>{lang === 'de' ? 'Einmal im Monat:' : 'Once a month:'}</strong> {lang === 'de' ? 'Polyamorie-Meetup am ersten Donnerstag des Monats' : 'Polyamory meetup on the first Thursday of the month'}
                </li>
                <li>
                    {lang === 'de' ? 'Schachclub' : 'Chess club'}
                </li>
                <li>
                    {lang === 'de' ? 'Deutscher Sprachaustausch (meist Gut Gelaunt oder Große Schanze, schaut auf MeetUp)' : 'German language exchange (usually Gut Gelaunt or Große Schanze, check MeetUp)'}
                </li>
                <li>
                    Erupt {lang === 'de' ? 'Spieleabend' : 'game night'}
                </li>
            </ul>
        </div>

        <div class="day-section">
            <h4>{lang === 'de' ? 'Freitag:' : 'Friday:'}</h4>
            <ul>
                <li>
                    <a href="https://englishclub.ch">English speaking club</a> (Englishclub.ch)
                </li>
            </ul>
        </div>

        <div class="day-section">
            <h4>{lang === 'de' ? 'Samstag:' : 'Saturday:'}</h4>
            <ul>
                <li>
                    {lang === 'de' ? 'Karaoke-Nacht im' : 'Karaoke night at'} <strong>DELFINO</strong>
                </li>
                <li>
                    <strong>{lang === 'de' ? 'Einmal im Monat:' : 'Once a month:'}</strong> 17:00-23:00 <a href="https://patt.be">patt.be</a> {lang === 'de' ? '(wenn sie einen Tag haben, ansonsten bleibt es wie es war, aber vielleicht das Schreiben verbessern)' : '(when they have a day otherwise keep it where it was but maybe improve the writing)'}
                </li>
            </ul>
        </div>
    </div>
</section>


<style lang="postcss">
    .events-main {
        margin-bottom: 4rem;
    }
    
    .topbarWrapper {
        text-align: center;
        margin-bottom: 3rem;
        padding: 2rem 1rem;
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        border-radius: 12px;
    }
    
    .topbarWrapper h1 {
        font-size: 3rem;
        font-weight: 700;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 1rem;
    }
    
    .topbarWrapper p {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 2rem;
    }
    
    .admin-controls {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
    }
    
    .admin-login {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
    
    .admin-login input {
        padding: 0.5rem 1rem;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 0.9rem;
    }
    
    .admin-btn, .mode-btn {
        padding: 0.5rem 1rem;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        position: relative;
    }
    
    .admin-btn:hover, .mode-btn:hover {
        background: #5a6fd8;
        transform: translateY(-1px);
    }
    
    .mode-btn {
        background: #27ae60;
    }
    
    .mode-btn:hover {
        background: #219a52;
    }
    
    .badge {
        background: #e74c3c;
        color: white;
        font-size: 0.75rem;
        padding: 0.2rem 0.5rem;
        border-radius: 10px;
        font-weight: bold;
        min-width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .admin-panel-controls {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    
    .static-events {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    
    .section-header {
        text-align: center;
        margin-bottom: 2rem;
    }
    
    .section-header h2 {
        font-size: 2rem;
        font-weight: 600;
        color: #333;
        margin-bottom: 1rem;
    }
    
    .section-header p {
        color: #666;
        font-size: 1rem;
        max-width: 600px;
        margin: 0 auto;
    }
    
    .static-events-list {
        max-width: 800px;
        margin: 0 auto;
        text-align: left;
        color: #333;
    }
    
    .static-events-list li {
        margin-bottom: 1.5rem;
        line-height: 1.6;
        color: #333;
    }
    
    .static-events-list ul {
        margin-top: 0.5rem;
        margin-left: 1.5rem;
    }
    
    .static-events-list ul li {
        margin-bottom: 0.5rem;
        color: #333;
    }
    
    .static-events-list a {
        color: #667eea;
        text-decoration: none;
        font-weight: 500;
    }
    
    .static-events-list a:hover {
        text-decoration: underline;
    }
    
    .weekly-events {
        max-width: 800px;
        margin: 2rem auto 0;
        text-align: left;
    }
    
    .weekly-events h3 {
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 1.5rem;
        text-align: center;
    }
    
    .day-section {
        margin-bottom: 2rem;
        padding: 1rem;
        border-left: 3px solid #667eea;
        background: #f8f9fa;
        border-radius: 8px;
    }
    
    .day-section h4 {
        font-size: 1.2rem;
        color: #333;
        margin: 0 0 1rem 0;
        font-weight: 600;
    }
    
    .day-section ul {
        margin: 0;
        padding-left: 1.5rem;
    }
    
    .day-section ul li {
        margin-bottom: 0.75rem;
        color: #333;
        line-height: 1.5;
    }
    
    .day-section a {
        color: #667eea;
        text-decoration: none;
        font-weight: 500;
    }
    
    .day-section a:hover {
        text-decoration: underline;
    }
    
    .day-section strong {
        color: #333;
        font-weight: 600;
    }
    
    @media (max-width: 768px) {
        .topbarWrapper {
            padding: 1rem;
        }
        
        .topbarWrapper h1 {
            font-size: 2rem;
        }
        
        .admin-controls {
            flex-direction: column;
            align-items: center;
        }
        
        .admin-panel-controls {
            flex-direction: column;
        }
        
        .static-events {
            padding: 1rem;
        }
        
        .section-header h2 {
            font-size: 1.5rem;
        }
    }
</style>