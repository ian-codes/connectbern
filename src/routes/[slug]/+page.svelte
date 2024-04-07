<svelte:head>
	<title>Home • Connect Bern </title>
</svelte:head>


<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    export let data;

    onMount(() => {
        goto("/groups/" + data.slug);
    })
</script>