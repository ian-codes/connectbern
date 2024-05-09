<script>
    export let socialPlatform;
    let platformImg = `/icons/${socialPlatform}.svg`;;
</script>


{#if socialPlatform == 'whatsapp' || socialPlatform == 'telegram'}
    <div style="background-image: url('{platformImg}');"
    class="icon w-7 h-7" />
{/if}