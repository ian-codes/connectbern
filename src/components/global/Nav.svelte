<script>
    let isOpen = false
</script>


<nav>
    <button title="menu" on:click={() => isOpen = !isOpen} class="burger {isOpen ? "burgerOpen" : ""}">
        {#each {length: 3} as _, i}
            <span></span>
        {/each}
    </button>
    {#if (isOpen)}
        <ol>
            <li>
                <a class="navlink" href="/">
                    Groups      
                </a>
            </li>
            <li>
                <a class="navlink" href="/about">
                    About
                </a>
            </li>
            <li>
                <a class="navlink" href="/contact">
                    Contact
                </a>
            </li>
        </ol>
    {/if}
</nav>


<style>
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
        filter: drop-shadow(0 5px 50px rgba(0, 0, 0, 0.247));
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
        box-shadow: 0 2px 1px 1px rgba(255, 255, 255, 0.411);
        padding: 1em 1.5em 1em 1em;
        color: black;
        transition: all .2s ease;
        background: white;
    }


    .navlink:hover {
        background: black;
        color: white
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

    .burger, .burger span {
        transition: all .2s ease;
    }

    .burger:hover {
        padding: 0;
        border: 0;
    }

    .burger span {
        transition: all .2s ease;
        height: 2px;
        width: 100%;
        background: white;
    }
</style>