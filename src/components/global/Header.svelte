<script>
    let isOpen = false
</script>



<header>
    <a id="createdBy" href="https://ian-codes.com" target="_blank">
        website by ian-codes.com
        <span style="background-image: url('link.png');" class="linkImg"></span>
    </a>

    <a href="/" title="home" class="titleWrapper">
        <div class="logo" style="background: url('logo.svg');" id="logo"></div>
        <div class="textWrapper">
            <h1>Connect Bern</h1>
            <p>Collection of social groups in Bern</p>
        </div>
    </a>

    <!-- <nav>
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
    </nav> -->
</header>


<style>
    @media (max-width: 800px) {
        header {
            margin: 1em !important;
            margin-top: 2em !important;
            padding: 1em 0 3em 0 !important;
            align-items: start !important;
            gap: 1em;
        }
        .titleWrapper {
            align-items: start;
            padding: 0 !important;
        }
        h1 {
            font-size: 1.5em !important;
            word-spacing: normal !important;
        }
        p {
            font-size: .7em;
            word-spacing: normal !important;
            letter-spacing: 1px !important;
        }
        .logo {
            width: 50px !important;
            height: 50px !important;
            background-size: contain !important;
            border-width: 2px !important;
        } 
        .burger {
            width: 40px !important;
            height: 40px !important;
        }
        #createdBy {
            font-size: .6rem !important;
            bottom: -1rem !important;
        }
    }

    #createdBy {
        position: absolute;
        color: white;
        opacity: .6;
        font-size: .8rem;
        letter-spacing: 1px;
        right: 0rem;
        bottom: -2rem;
        transition: all .1s ease;
        gap: .5em !important;
    }

    #createdBy:hover {
        opacity: 1;
    }

    .linkImg {
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 1rem;
        width: 1rem;
        filter: invert(1);
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
        border: 1px dotted white;
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

    .logo {
        background-repeat: no-repeat;
        background-position: center;
        height: 100px;
        aspect-ratio: 1;
        border-radius: 100%;
        border: 2px solid white;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.267) inset, 0 0 10px rgba(0, 0, 0, 0.206);
        animation: spin 2s ease forwards, rotate infinite 30s linear;
    }

    @keyframes spin {
        0% {
            box-shadow: 0 0 200px rgba(255, 255, 255, 0.493) inset, 0 0 10px rgba(192, 192, 192, 0.206);
            transform: rotate(-360deg);
        }
        100% {
            filter: blur(0);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.267) inset, 0 0 10px rgba(0, 0, 0, 0.123);
            transform: rotate(360deg);
        }
    }
    
    @keyframes rotate {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    
    @keyframes blur {
        0% {
            filter: blur(20px);
        }
        100% {
            filter: blur(0);
        }
    }

    header {
        position: relative;
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 2em;
        padding-bottom: 2em;
        margin: 0 2em;
        user-select: none;
    }

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 1em;
        transition: all .1s ease;
    }

    .titleWrapper {
        animation: blur 1s forwards ease;
    }

    a:hover {
        box-shadow: 0 0 0 1px white;
    }

    p {
        letter-spacing: 1px;
        color: white;
        margin-left: 4px !important;
    }

    h1 {
        margin: 0;
        margin-bottom: .5rem;
        font-weight: normal;
        font-size: 2.5em;
        text-transform: uppercase;
        letter-spacing: 4px;
        color: white;
    }
</style>