<script>
    import Footer from "../components/global/Footer.svelte";
    import Header from "../components/global/Header.svelte";
</script>

<div class="gradient"></div>
<div class="bg"></div>

<div class="outerWrapper">
    <Header />

    <main>
        <slot>
    
        </slot>
    </main>
    
    <!-- <Footer /> -->
</div>

<style>
    @media (max-width: 800px) {
        .outerWrapper {
            padding: 0 !important;
        }
    }

    .outerWrapper {
        position: relative;
        max-width: 1100px;
        min-height: 120vh;
        width: 100%;
        margin: auto;
        /* background: rgba(128, 128, 128, 0.37); */
        /* box-shadow: 0 0 30px rgba(0, 0, 0, 0.089) inset, 0 0 500px rgba(255, 255, 255, 0.295), 0 0 50px rgba(0, 0, 0, 0.192); */
        overflow: hidden;
        padding: 1em 2em;
    }

    .gradient {
        background: linear-gradient(120deg, skyblue, rgb(162, 128, 218));
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        inset: 0;
        height: 100vh;
        position: fixed;
        z-index: -2;
        opacity: 1;
        animation: glow 40s infinite linear;
    }

    @keyframes glow {
        0% {
            filter: hue-rotate(0);
        }
        100% {
            filter: hue-rotate(360deg);
        }
    }

    .bg {
        height: 120vh;
        background: black;
        inset: 0;
        position: fixed;
        z-index: -2;
        opacity: .1;
        pointer-events: none;
    }
</style>

