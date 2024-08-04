<script>
    import { getContext, onMount } from 'svelte';

    const scrollToContent = getContext('scrollToContent');

    onMount(() => {
        scrollToContent();
    });
</script>


<div class="section">
    <h2>
        Looking for a flat? Check out these:
    </h2>
    <ul>
        <li>
            <a href="https://meinwgzimmer.ch/" target="_blank">
                https://meinwgzimmer.ch/
            </a>
            (the nicest)
        </li>
        <li>
            <a href="https://wgzimmer.ch" target="_blank">
                https://wgzimmer.ch
            </a>
            (most used)
        </li>
        <li>
            <a href="https://flatfox.ch" target="_blank">
                https://flatfox.ch
            </a>
            (foreigners use this a lot)
        </li>
        <li>
            <a href="https://ronorp.ch/" target="_blank">
                https://ronorp.ch/
            </a>
        </li>
        <li>
            <a href="https://www.facebook.com/groups/251733488892455/" target="_blank">
                https://www.facebook.com/groups/251733488892455/
            </a>
        </li>
        <li>
            <a href="https://www.facebook.com/wohnung.frei.bern/" target="_blank">
                https://www.facebook.com/wohnung.frei.bern/
            </a>
        </li>
        <li>
            <a href="https://t.me/joinchat/LIezUBJgr4IRDyv8jYTWkg" target="_blank">
                https://t.me/joinchat/LIezUBJgr4IRDyv8jYTWkg
            </a>
        </li>
    </ul>
</div>