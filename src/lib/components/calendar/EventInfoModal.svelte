<script>
    import dayjs from "dayjs";
    import AddToCalendarButton from "./AddToCalendarButton.svelte";
    import OpenInMapsButton from "./OpenInMapsButton.svelte";

    export let event = {};
    export let isOpen;
    export let onClose;
</script>


<div class="backdrop" class:blur={isOpen} />
<div class:isOpen={isOpen} class="event-info">
    <button class="unfocus" on:click={onClose} />
    <div class="inner-wrapper">
        <button
            id="close" 
            class="img"
            on:click={onClose} />

        <h3>{event?.title}</h3>
        <ul class="infos">
            <li>
                {dayjs(event?.start).format('dddd, MMMM D, YYYY')}
            </li>
            <li>
                {dayjs(event?.start).format('h:mm A')}
                - {dayjs(event?.end).format('h:mm A')}
            </li>
        </ul>
        <div class="buttonsContainer">
            <AddToCalendarButton />
            <OpenInMapsButton />
        </div>
    </div>
</div>


<style>
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
        position: absolute;
        inset: 0;
        text-align: center;
        padding: 1em;
        align-items: center;
        justify-content: center;
    }

    .inner-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1em;
        background: white;
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.384);
        border: 1px solid black;
        z-index: 5;
        color: black;
        padding: 2em 4em;
        border-radius: .5em;
    }

    .infos {
        display: flex;
        flex-direction: column;
        gap: .5em;
    }


    h3 {
        padding: 0;
        margin: 0;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }


    .buttonsContainer {
        display: flex;
        flex-direction: column;
        gap: .5em;
    }

    .isOpen {
        display: flex !important;
    }

    .unfocus {
        position: absolute;
        inset: 0;
        background: none;
        cursor: default !important;
        z-index: 4;
    }

    #close {
        background-image: url("$lib/components/calendar/close.svg");
        position: absolute;
        right: 0;
        top: 0;
        width: 30px;
        aspect-ratio: 1;
        margin: .5em;
        border-radius: 100%;
        transition: all .1s ease;
        opacity: .6;
    }
    #close:hover {
        opacity: 1;
    }

    .img {
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
</style>