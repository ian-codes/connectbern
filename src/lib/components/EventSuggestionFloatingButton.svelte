<script>
    import TitleDescDialog from "$lib/components/TitleDescDialog.svelte";
    import {onMount} from "svelte";
    import { currentLanguage } from '$lib/stores/languageStore';
    $: lang = $currentLanguage;


    let floatingX = 85;
    let floatingY = 85;
    let buttonElement;
    let isDragging = false;
    let hasDragged = false;
    let isAutoMoving = false;
    let hasBeenManuallyMoved = false;
    let isNearButton = false;
    let moveInterval;
    let dragStartX = 0;
    let dragStartY = 0;
    let buttonStartX = 0;
    let buttonStartY = 0;

    let isFloatingButtonHidden = false;
    let showSuggestDialog = false;


    function moveFloatingButton() {
        if (typeof window === 'undefined' || isDragging || hasBeenManuallyMoved || isNearButton) return;

        const buttonWidth = 250;
        const buttonHeight = 60;
        const padding = 20;

        const maxX = window.innerWidth - buttonWidth - padding;
        const maxY = window.innerHeight - buttonHeight - padding;

        isAutoMoving = true;
        floatingX = Math.random() * (maxX - padding) + padding;
        floatingY = Math.random() * (maxY - padding) + padding;

        // Reset after transition completes
        setTimeout(() => {
            isAutoMoving = false;
        }, 2500);
    }

    function hideFloatingButton(event) {
        event.stopPropagation();
        event.preventDefault();
        isFloatingButtonHidden = true;
    }

    function handleCloseButtonTouch(event) {
        event.stopPropagation();
        event.preventDefault();
        isFloatingButtonHidden = true;
    }

    function startDrag(event) {
        // Only prevent default for mouse events immediately
        // For touch events, we'll prevent default only during actual dragging
        if (event.type === 'mousedown') {
            event.preventDefault();
        }

        isDragging = true;
        hasDragged = false;
        isAutoMoving = false;

        if (event.type === 'mousedown') {
            dragStartX = event.clientX;
            dragStartY = event.clientY;
        } else if (event.type === 'touchstart') {
            dragStartX = event.touches[0].clientX;
            dragStartY = event.touches[0].clientY;
        }

        buttonStartX = floatingX;
        buttonStartY = floatingY;

        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchmove', onDrag, { passive: false });
        document.addEventListener('touchend', stopDrag);
    }

    function onDrag(event) {
        if (!isDragging) return;

        // Prevent scrolling on touch devices
        if (event.type === 'touchmove') {
            event.preventDefault();
        }

        let currentX, currentY;
        if (event.type === 'mousemove') {
            currentX = event.clientX;
            currentY = event.clientY;
        } else if (event.type === 'touchmove') {
            currentX = event.touches[0].clientX;
            currentY = event.touches[0].clientY;
        }

        const deltaX = currentX - dragStartX;
        const deltaY = currentY - dragStartY;

        // If moved more than 5px, consider it a drag
        if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
            hasDragged = true;
        }

        floatingX = buttonStartX + deltaX;
        floatingY = buttonStartY + deltaY;
    }

    function stopDrag() {
        isDragging = false;

        // If the user actually dragged (not just clicked), stop automatic movements
        if (hasDragged) {
            hasBeenManuallyMoved = true;
            if (moveInterval) {
                clearInterval(moveInterval);
            }
        }

        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchmove', onDrag);
        document.removeEventListener('touchend', stopDrag);
    }

    onMount(() => {
        // Move button every 3-5 seconds randomly
        moveInterval = setInterval(() => {
            const randomDelay = 3000 + Math.random() * 2000;
            setTimeout(moveFloatingButton, randomDelay);
        }, 5000);

        // Initial random position after 1 second
        setTimeout(moveFloatingButton, 1000);

        // Track whether cursor is near the floating button (with generous margin)
        function checkCursorNearButton(e) {
            if (!buttonElement) return;
            const rect = buttonElement.getBoundingClientRect();
            const margin = 70;
            isNearButton = e.clientX >= rect.left - margin &&
                e.clientX <= rect.right + margin &&
                e.clientY >= rect.top - margin &&
                e.clientY <= rect.bottom + margin;
        }
        document.addEventListener('mousemove', checkCursorNearButton);

        return () => {
            if (moveInterval) {
                clearInterval(moveInterval);
            }
            document.removeEventListener('mousemove', checkCursorNearButton);
            document.removeEventListener('mousemove', onDrag);
            document.removeEventListener('mouseup', stopDrag);
            document.removeEventListener('touchmove', onDrag);
            document.removeEventListener('touchend', stopDrag);
        };
    });

</script>
{#if !isFloatingButtonHidden}
    <div
            class="floatingButton"
            class:autoMove={isAutoMoving}
            class:nearButton={isNearButton}
            bind:this={buttonElement}
            style="left: {floatingX}px; top: {floatingY}px; cursor: {isDragging ? 'grabbing' : 'grab'};"
            on:mousedown={startDrag}
            on:touchstart={startDrag}
            role="button"
            tabindex="0"
    >
        <button
                class="floatingCloseBtn"
                on:click={hideFloatingButton}
                on:touchstart={handleCloseButtonTouch}
                aria-label="Close"
                title={lang === 'de' ? 'Schließen' : 'Close'}
        >
            ✕
        </button>
        <button
                class="floatingContent"
                on:click={() => {
                    if (!hasDragged) {
                        showSuggestDialog = true;
                    }
                }}
                on:touchend={(e) => {
                    if (!hasDragged) {
                        e.preventDefault();
                        showSuggestDialog = true;
                    }
                }}
        >
            <span class="floatingIcon">🔥</span>
            <span class="floatingText">{lang === 'de' ? 'Event vorschlagen?' : 'Know of an event?'}</span>
        </button>
    </div>
{/if}

<!-- Suggest Event Dialog -->
<TitleDescDialog bind:showDialog={showSuggestDialog}
                 titleKey="events-suggest-title"
                 descKey="events-suggest-description"
                 buttonKey="events-suggest-button"
                 buttonHref="/contact"
                 icon="💡">
</TitleDescDialog>


<style>

.floatingButton {
    position: fixed;
    background: linear-gradient(135deg, rgb(255, 100, 80), rgb(255, 150, 50));
    border: 3px solid rgba(255, 255, 255, 0.8);
    border-radius: 2em;
    box-shadow: 0 8px 30px rgba(255, 100, 80, 0.6);
    z-index: 999;
    transition: transform 0.3s ease,
    box-shadow 0.3s ease;
    animation: wiggle 3s ease-in-out infinite, glow 2s ease-in-out infinite;
    white-space: nowrap;
    transform-origin: center;
    user-select: none;
}

.floatingButton.autoMove {
    transition: left 2.5s cubic-bezier(0.4, 0, 0.2, 1),
    top 2.5s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.floatingContent {
    background: none;
    border: none;
    padding: 1em 1.5em;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.7em;
    color: white;
    font: inherit;
}

.floatingCloseBtn {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: 2px solid white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    z-index: 1001;
    transition: all 0.2s ease;
    padding: 0;
    line-height: 1;
}

.floatingCloseBtn:hover {
    background: rgba(255, 50, 50, 0.9);
    transform: scale(1.1);
}

@keyframes wiggle {
    0%, 100% {
        transform: rotate(-3deg) scale(1);
    }
    25% {
        transform: rotate(3deg) scale(1.05);
    }
    50% {
        transform: rotate(-3deg) scale(1);
    }
    75% {
        transform: rotate(3deg) scale(0.95);
    }
}

@keyframes glow {
    0%, 100% {
        box-shadow: 0 8px 30px rgba(255, 100, 80, 0.6), 0 0 20px rgba(255, 150, 50, 0.4);
    }
    50% {
        box-shadow: 0 10px 40px rgba(255, 100, 80, 0.9), 0 0 30px rgba(255, 150, 50, 0.7);
    }
}

.floatingButton:hover,
.floatingButton.nearButton {
    animation: none;
    box-shadow: 0 15px 50px rgba(255, 100, 80, 0.9);
}

.floatingButton:hover {
    transform: scale(1.05);
}

.floatingButton:active {
    transform: scale(1.1);
}

.floatingIcon {
    font-size: 1.8em;
    line-height: 1;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
}

.floatingText {
    font-size: 1em;
    font-weight: bold;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: 0.3px;
}

@media (max-width: 800px) {
    .floatingButton {
        padding: 0.8em 1.2em;
        gap: 0.5em;
    }

    .floatingIcon {
        font-size: 1.5em;
    }

    .floatingText {
        font-size: 0.85em;
    }
}


@media (max-width: 768px) {
    /* Make floating button smaller on mobile */
    .floatingButton {
        font-size: 0.5em;
    }

    .floatingContent {
        padding: 0.5em 0.8em;
        gap: 0.5em;
    }

    .floatingIcon {
        font-size: 1.6em;
    }

    .floatingText {
        font-size: 1em;
    }

    .floatingCloseBtn {
        width: 20px;
        height: 20px;
        font-size: 12px;
        top: -6px;
        right: -6px;
    }


}

</style>