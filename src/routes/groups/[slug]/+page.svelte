<svelte:head>
	<title>{data?.name?.[lang] ?? "Loading..."} • Connect Bern </title>
    <link rel="canonical" href="https://connectbern.ch/groups/{data?.slug}">
</svelte:head>


<script>
    export let data;
    import { page } from '$app/stores';
    import { currentLanguage } from '$lib/stores/languageStore';

    let linkWasCopied = false;
    $: link = $page.url.href.replace(/\/$/, '') + '/join';
    $: copyLinkTooltipText = linkWasCopied ? "Copied!" : "Copy to clipboard";

    $: lang = $currentLanguage;

    async function copyLink() {
        try {
            await navigator.clipboard.writeText(link);
            linkWasCopied = true;

            console.log(copyLinkTooltipText);

            setTimeout(() => {
                linkWasCopied = false;
            }, 4000);
        }
        catch {
            alert("Couldn't copy link");
        }
    }
</script>


<section>
    <a class="btn back" href="/groups#{data?.slug ?? ""}">
        <span>→</span>Back
    </a>

    <div class="cntr">
        <div class="textcntr">
            <div>
                <h1>
                    {data?.name?.[lang] ?? "Loading..."}
                </h1>
            
                <p>
                    {data?.desc?.[lang] ?? "Loading..."}
                </p>
            </div>

            <div class="w-full flex flex-col sm:flex-row gap-4">
                <a class="join flex-1" href="{data?.slug}/join">
                    <span class="icon" style="background-image: url(/icons/link.png);" />
                    JOIN GROUP
                </a>
    
                <button on:click={copyLink} 
                    class="join copyImgButton flex-1 relative">

                    <span class="tooltip">
                        {copyLinkTooltipText}
                    </span>

                    <span class="icon copyImg" style="background-image: url(/icons/link.svg);" />
                    Copy Link
                </button>
            </div>
        </div>
    
        <div style="background-image: url(/groups/{data.img})" class="img"></div>
    </div>

</section>


<style lang='postcss'>
    @media (max-width: 800px) {
        .cntr {
            flex-wrap: wrap;
            gap: 3em !important;
        }

        h1 {
            font-size: 1.5rem !important;
        }

        .img {
            width: 200px !important;
        }
    }

    section {
        padding: 1em !important;
    }

    .copyImg {
        width: 20px;
        height: 20px;
    }

    .copyImgButton:hover .tooltip {
        opacity: 1;
        transition-delay: .4s;
    }
    
    .tooltip {
        text-transform: capitalize;
        transition: all .2s ease;
        opacity: 0;
        pointer-events: none;
        display: flex;
        align-items: center;
        padding: 1em;
        content: 'Copy to clipboard';
        position: relative;
        font-weight: lighter;
        font-size: .8em;
        position: absolute;
        @apply bg-gray-200;
        top: -3em;
        right: 0;
        width: max-content;
        height: 2em;
        border-radius: 1em;
        box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
        outline: 1px solid rgba(0, 0, 0, 0.253);
    }

    .tooltip::before {
        content: '';
        font-weight: lighter;
        font-size: .8em;
        position: absolute;
        @apply bg-gray-200;
        bottom: -.8em;
        right: calc(50% - 10px);
        width: 20px;
        height: 1em;
        clip-path: polygon(0 0, 100% 0, 50% 100%);
    }

    .cntr {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1em;
        margin: 2em 0;
    }

    .textcntr {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 2em;
        width: 100%;
    }

    h1 {
        font-size: 2.5em;
        font-weight: bold;
        margin-bottom: 1rem !important;
    }

    p {
        font-size: 1.5em;
    }

    .img {
        width: 100%;
        max-width: 300px;
        aspect-ratio: 1;
        pointer-events: none;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 100%;
        border: 2px solid white;
        box-shadow: 0 5px 50px rgba(255, 255, 255, 0.123);
    }


    .join {
        text-transform: uppercase;
        max-width: max-content;
        gap: .5em;
        display: flex;
        flex-direction: row;
        font-size: 1em;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        font-weight: bold;
        letter-spacing: 1px;
        padding: .8em 1.2em;
        border-radius: 1em;
        color: black;
        background: white;
        box-shadow: 0 2px 3px black;
        transition: all .1s ease;
    }

    .join:hover {
        transform: scale(1.02);
    }

    .back {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        background: black;
        opacity: .5;
        width: max-content;
        padding: .8em 1.2em;
        transition: all .1s ease;
    }

    .back span {
        margin-top: 3px;
        transform: rotate(180deg);
    }

    .back:hover {
        transform: scale(1.02);
    }
</style>