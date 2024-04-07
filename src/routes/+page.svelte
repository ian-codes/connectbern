<svelte:head>
	<title>Home • Connect Bern </title>
</svelte:head>


<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    onMount(() => {
        goto('/groups');
    })
</script>