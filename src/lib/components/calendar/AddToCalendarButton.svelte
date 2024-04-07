<button id="add-to-calendar" class="cta-button">
    <span class="icon calendar-add-icon" />
    Add to Calendar
</button>

<style>
    .calendar-add-icon {
        background-image: url("$lib/components/calendar/calendar-add.svg");
    }
    .icon {
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
    .icon {
        display: block;
        height: 20px;
        aspect-ratio: 1;
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5em;
        padding: 1em;
        font-size: .8rem;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        transition: all .2s ease;
    }
    button:hover {
        scale: 1.05;
        box-shadow: 0 3px 5px black;
    }
</style>