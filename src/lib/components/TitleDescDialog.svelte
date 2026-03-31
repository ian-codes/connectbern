<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    $: lang = $currentLanguage;

    export let showDialog;
    export let icon;
    export let titleKey;
    export let descKey;
    export let buttonKey;
    export let buttonHref;
</script>

{#if showDialog}
    <div class="dialogOverlay" on:click={() => showDialog = false}>
        <div class="dialogBox" on:click|stopPropagation>
            <button class="closeButton" on:click={() => showDialog = false}>×</button>
            <div class="dialogIcon">{icon}</div>
            <h2>{t[lang][titleKey]}</h2>
            <p class="dialogDescription">{t[lang][descKey]}</p>
            {#if buttonKey && buttonHref}
                <a href={buttonHref} class="dialogButton">
                    {t[lang][buttonKey]} →
                </a>
            {/if}
        </div>
    </div>
{/if}

<style>

.dialogOverlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.dialogBox {
    background: linear-gradient(135deg, rgb(30, 40, 60), rgb(20, 30, 50));
    border: 2px solid rgba(255, 200, 100, 0.3);
    border-radius: 1.5em;
    padding: 2em 1.5em;
    max-width: 450px;
    width: 85%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    animation: slideUp 0.3s ease;
    text-align: center;
}

@keyframes slideUp {
    from {
        transform: translateY(50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.closeButton {
    position: absolute;
    top: 1em;
    right: 1em;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    font-size: 2em;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    line-height: 1;
}

.closeButton:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
}

.dialogIcon {
    font-size: 3em;
    margin-bottom: 0.4em;
}

.dialogBox h2 {
    color: white;
    font-size: 1.3em;
    margin-bottom: 0.5em;
    line-height: 1.3;
}

.dialogDescription {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.85em;
    line-height: 1.4;
    margin-bottom: 1.2em;
}

.dialogButton {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.9em 1.8em;
    background: linear-gradient(135deg, rgb(255, 200, 100), rgb(255, 180, 80));
    color: rgb(20, 20, 30);
    border: none;
    border-radius: 2em;
    font-size: 0.9em;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 180, 80, 0.4);
    margin-top: 0.5em;
}

.dialogButton:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 25px rgba(255, 180, 80, 0.6);
}

@media (max-width: 768px) {

    .dialogBox {
        padding: 1.2em 0.9em;
        width: 92%;
        max-width: 92%;
    }

    .dialogBox h2 {
        font-size: 1.1em;
        margin-bottom: 0.4em;
    }

    .dialogDescription {
        font-size: 0.75em;
        line-height: 1.3;
        margin-bottom: 1em;
    }

    .dialogIcon {
        font-size: 2em;
        margin-bottom: 0.3em;
    }

    .closeButton {
        width: 32px;
        height: 32px;
        font-size: 1.3em;
        top: 0.7em;
        right: 0.7em;
    }
}

</style>