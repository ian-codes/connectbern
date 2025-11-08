<script>
    import { getContext, onMount } from 'svelte';

    const scrollToContent = getContext('scrollToContent');

    onMount(() => {
        scrollToContent();
    });
</script>


<div class="section">
    <h2>More Random Tips</h2>
    <ul>
        <li>
            More tips coming soon!
        </li>
    </ul>
</div>