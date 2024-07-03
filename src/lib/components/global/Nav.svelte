<script>
    import { MenuData } from "$lib/models/MenuData.js";
    import { currentLanguage } from "$lib/stores/languageStore.js";
    import LanguageToggler from "$lib/components/global/LanguageToggler.svelte";

    $: lang = $currentLanguage;

    let isOpen = false;
</script>


<button   
    style="display: {isOpen ? "block" : "none"};" 
    on:click={() => {isOpen = false;}} 
    class="defocus" />

<nav>
    <button title="menu" on:click={() => isOpen = !isOpen} class="burger {isOpen ? "burgerOpen" : ""}">
        {#each {length: 3} as _, i}
            <span></span>
        {/each}
    </button>
    {#if (isOpen)}
        <ol>
            <div class="languages visible">
                <LanguageToggler dark={true} />
            </div>
            {#each MenuData as item}
                <li>
                    <a title="{item.title[lang]}" class="navlink" href="/{item.slug}" on:click={() => {isOpen = false;}}>
                        <span class="img" style="background-image: url(/navigation/{item.img});" />
                        {item.title[lang]}
                    </a>
                </li>
            {/each}
        </ol>
    {/if}
</nav>


<style>
    .defocus {
        position: fixed;
        inset: 0;
        opacity: 0;
        cursor: default;
    }
    .languages {
        display: none;
    }
    @media (max-width: 500px) {
        .visible {
            display: block !important;
        }
    }
    @media (max-width: 800px) {
        .burger {
            width: 40px !important;
            height: 40px !important;
        }
    }
    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 1em;
        transition: all .1s ease;
    }
    nav {
        position: relative;
    }
    ol {
        display: flex;
        z-index: 1;
        position: absolute;
        right: 0;
        margin: 0;
        margin-top: 1em;
        padding: 0;
        flex-direction: column;
        list-style: none;
        color: white;
        width: max-content;
        border: 5px solid white;
        filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.4));
    }
    ol::before {
        z-index: -1;
        background: white;
        position: absolute;
        right: 10px;
        top: -20px;
        content: '';
        width: 20px;
        height: 15px;
        clip-path: polygon(0 100%, 50% 0, 100% 100%)
    }
    .navlink {
        display: flex;
        flex-direction: row;
        gap: .5em;
        align-items: center;
        justify-content: start;
        box-shadow: 0 2px 1px 1px rgba(255, 255, 255, 0.411);
        padding: 1em 1.5em 1em 1em;
        color: black;
        background: white;
    }
    .navlink:hover {
        background: rgb(65, 65, 65);
        color: white;
    }
    .navlink:hover .img {
        filter: invert(1);
    }
    .navlink .img {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 20px;
        aspect-ratio: 1;
    }
    .navlink, .navlink .img {
        transition: all .2s ease;
    }
    .burger {
        position: relative;
        width: 50px;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background: none;
        cursor: pointer;
        padding: .5em;
    }
    .burgerOpen {
        position: relative;
    }
    .burger:hover {
        outline: 1px solid white;
    }
    .burger span {
        transition: all .2s ease;
        height: 2px;
        width: 100%;
        background: white;
    }
</style>