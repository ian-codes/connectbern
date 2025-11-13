<svelte:head>
	<title>{data?.name?.[lang] ?? "Loading..."} • Connect Bern </title>
    <link rel="canonical" href="https://connectbern.ch/groups/{data?.slug}">
</svelte:head>


<script>
    export let data;
    import { page } from '$app/stores';
    import { currentLanguage } from '$lib/stores/languageStore';

    let linkWasCopied = false;
    // For multiplatform groups, copy the page link instead of /join link
    $: link = (data?.type === "multiplatform" || (data?.facebookLink && data?.whatsappLink))
        ? $page.url.href.replace(/\/$/, '')
        : $page.url.href.replace(/\/$/, '') + '/join';
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
                    {@html data?.desc?.[lang] ?? "Loading..."}
                </p>
            </div>

            {#if data?.slug === "connect-bern" || data?.slug === "vegan-bern"}
                <div class="w-full flex flex-col gap-4">
                    {#if data?.slug === "connect-bern"}
                        <div class="platform-explanation">
                            <p>
                                {#if lang === "de"}
                                    Die WhatsApp- und Telegram-Gruppen sind verbunden – Nachrichten werden zwischen beiden synchronisiert. Die Facebook-Gruppe ist separat.
                                {:else}
                                    The WhatsApp and Telegram groups are connected – messages are synchronized between both. The Facebook group is separate.
                                {/if}
                            </p>
                        </div>
                    {:else if data?.slug === "vegan-bern"}
                        <div class="platform-explanation">
                            <p>
                                {#if lang === "de"}
                                    Die WhatsApp- und Telegram-Gruppen sind getrennt.
                                {:else}
                                    The WhatsApp and Telegram groups are separate.
                                {/if}
                            </p>
                        </div>
                    {/if}
                    <div class="platform-links-detail">
                        {#if data?.link}
                            <a class="platform-detail-btn whatsapp" href="{data?.link}" target="_blank" rel="noopener noreferrer">
                                <span>WhatsApp</span>
                            </a>
                        {/if}
                        {#if data?.telegramLink}
                            <a class="platform-detail-btn telegram" href="{data?.telegramLink}" target="_blank" rel="noopener noreferrer">
                                <span>Telegram</span>
                            </a>
                        {/if}
                        {#if data?.facebookLink}
                            <a class="platform-detail-btn facebook" href="{data?.facebookLink}" target="_blank" rel="noopener noreferrer">
                                <span>Facebook</span>
                            </a>
                        {/if}
                    </div>
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
                <div class="w-full flex flex-col gap-4">
                    {#if data?.telegramLink && data?.slug === "game-group"}
                        <!-- Game Group with Linktree -->
                        <div class="platform-links-detail">
                            <a class="platform-detail-btn whatsapp" href="{data?.link}" target="_blank" rel="noopener noreferrer">
                                <span>WhatsApp</span>
                            </a>
                            <a class="platform-detail-btn telegram" href="{data?.telegramLink}" target="_blank" rel="noopener noreferrer">
                                <span>Telegram</span>
                            </a>
                            {#if data?.linktreeLink}
                                <a class="platform-detail-btn linktree" href="{data?.linktreeLink}" target="_blank" rel="noopener noreferrer">
                                    <span>All Links</span>
                                </a>
                            {/if}
                        </div>
                    {:else if data?.facebookLink && data?.whatsappLink}
                        <!-- WhatsApp and Facebook combination -->
                        <div class="platform-links-detail">
                            <a class="platform-detail-btn whatsapp" href="{data?.whatsappLink}" target="_blank" rel="noopener noreferrer">
                                <span>WhatsApp</span>
                            </a>
                            <a class="platform-detail-btn facebook" href="{data?.facebookLink}" target="_blank" rel="noopener noreferrer">
                                <span>Facebook</span>
                            </a>
                        </div>
                    {:else if data?.telegramLink}
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
                            {data?.isCollection ? "VIEW GROUPS" : (data?.slug === "community-groups" ? "JOIN WHATSAPP COMMUNITY" : "JOIN GROUP")}
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
            {/if}
        </div>
    
        <div style="background-image: url(/groups/{data.img})" class="img"></div>
    </div>

</section>


<style lang='postcss'>
    @media (max-width: 1150px) {
        .cntr {
            flex-wrap: wrap;
            gap: 3em !important;
        }

        h1 {
            font-size: 1.8rem !important;
        }

        .textcntr {
            min-width: 300px;
        }

        .img {
            width: 200px !important;
        }
    }

    @media (max-width: 700px) {
        .cntr {
            flex-direction: column;
            align-items: stretch;
            gap: 1.5em !important;
        }

        h1 {
            font-size: 1.5rem !important;
        }

        .textcntr {
            min-width: 0;
            width: 100%;
        }

        .img {
            width: 220px !important;
            height: 220px !important;
            min-width: 220px !important;
            margin: 0 auto;
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
        align-items: flex-start;
        gap: 2em;
        margin: 2em 0;
    }

    .textcntr {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 2em;
        flex: 1;
        min-width: 250px;
    }

    h1 {
        font-size: 2.5em;
        font-weight: bold;
    }

    p {
        font-size: 1.25rem !important;
        min-font-size: 1.25rem !important;
        line-height: 1.6 !important;
        word-wrap: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
    }

    p :global(a) {
        color: #FFD700;
        text-decoration: underline;
        transition: color 0.2s ease;
        font-weight: 600;
    }

    p :global(a:hover) {
        color: #FFF;
        text-decoration: none;
    }

    p :global(strong) {
        font-weight: bold;
        color: rgba(255, 255, 255, 0.95);
    }

    p :global(br) {
        display: block;
        content: "";
        margin: 0.5em 0;
    }

    .img {
        width: 300px;
        height: 300px;
        min-width: 300px;
        flex-shrink: 0;
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

    .platform-explanation {
        margin-bottom: 1.5em;
    }

    .platform-explanation p {
        font-size: 1em;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.9);
        margin: 0;
    }

    .platform-links-detail {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.75em;
        width: 100%;
    }

    .platform-detail-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        padding: 0.6em 1.2em;
        border-radius: 0.5em;
        text-decoration: none;
        font-weight: bold;
        font-size: 0.9em;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        flex: 0 0 auto;
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

    .platform-detail-btn.facebook {
        background: linear-gradient(135deg, #1877F2, #0d5dbf);
        color: white;
    }

    .platform-detail-btn.facebook:hover {
        background: linear-gradient(135deg, #0d5dbf, #084a94);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(24, 119, 242, 0.5);
    }

    .platform-detail-btn.linktree {
        background: linear-gradient(135deg, #43E660, #2ea845);
        color: white;
    }

    .platform-detail-btn.linktree:hover {
        background: linear-gradient(135deg, #2ea845, #1f7830);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(67, 230, 96, 0.5);
    }

    @media (max-width: 800px) {
        .platform-detail-btn {
            font-size: 0.85em;
            padding: 0.5em 1em;
        }

        .platform-links-detail {
            gap: 0.5em;
        }

        .platform-explanation p {
            font-size: 0.95em;
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