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

            {#if data?.slug !== "connect-bern"}
                <div class="w-full flex flex-col gap-4">
                    {#if data?.telegramLink}
                        <div class="flex flex-col sm:flex-row gap-4">
                            <a class="join flex-1 whatsapp-btn" href="{data?.link}" target="_blank" rel="noopener noreferrer">
                                <span class="platform-icon">💬</span>
                                JOIN WHATSAPP
                            </a>
                            <a class="join flex-1 telegram-btn" href="{data?.telegramLink}" target="_blank" rel="noopener noreferrer">
                                <span class="platform-icon">✈️</span>
                                JOIN TELEGRAM
                            </a>
                        </div>
                    {:else}
                        <a class="join flex-1" href="{data?.slug}/join">
                            <span class="icon" style="background-image: url(/icons/link.png);" />
                            JOIN GROUP
                        </a>
                    {/if}

                    <button on:click={copyLink}
                        class="join copyImgButton relative">

                        <span class="tooltip">
                            {copyLinkTooltipText}
                        </span>

                        <span class="icon copyImg" style="background-image: url(/icons/link.svg);" />
                        Copy Link
                    </button>
                </div>
            {:else}
                <div class="platform-links-detail">
                    <a class="platform-detail-btn whatsapp" href="{data?.link}" target="_blank" rel="noopener noreferrer">
                        <span class="platform-icon-large">💬</span>
                        <span>WhatsApp</span>
                    </a>
                    <a class="platform-detail-btn telegram" href="{data?.telegramLink}" target="_blank" rel="noopener noreferrer">
                        <span class="platform-icon-large">✈️</span>
                        <span>Telegram</span>
                    </a>
                </div>
            {/if}
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
        justify-content: center;
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

    .whatsapp-btn {
        background: linear-gradient(135deg, #25D366, #128C7E);
        color: white;
    }

    .whatsapp-btn:hover {
        background: linear-gradient(135deg, #128C7E, #075E54);
        box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
    }

    .telegram-btn {
        background: linear-gradient(135deg, #0088cc, #005580);
        color: white;
    }

    .telegram-btn:hover {
        background: linear-gradient(135deg, #005580, #003d5c);
        box-shadow: 0 5px 15px rgba(0, 136, 204, 0.4);
    }

    .platform-icon {
        font-size: 1.5em;
    }

    .platform-links-detail {
        display: flex;
        flex-direction: column;
        gap: 1em;
        width: 100%;
    }

    .platform-detail-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
        padding: 1.2em 2em;
        border-radius: 1em;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2em;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .platform-detail-btn.whatsapp {
        background: linear-gradient(135deg, #25D366, #128C7E);
        color: white;
    }

    .platform-detail-btn.whatsapp:hover {
        background: linear-gradient(135deg, #128C7E, #075E54);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
    }

    .platform-detail-btn.telegram {
        background: linear-gradient(135deg, #0088cc, #005580);
        color: white;
    }

    .platform-detail-btn.telegram:hover {
        background: linear-gradient(135deg, #005580, #003d5c);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 136, 204, 0.5);
    }

    .platform-icon-large {
        font-size: 2em;
    }

    @media (max-width: 800px) {
        .platform-detail-btn {
            font-size: 1em;
            padding: 1em 1.5em;
        }

        .platform-icon-large {
            font-size: 1.5em;
        }
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