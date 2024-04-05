<script>
    import Header from "../components/global/Header.svelte";
</script>

<div class="gradient"></div>
<div class="bg"></div>

<div class="outerWrapper">
    <Header />
    <main>
        <slot />
    </main>
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
        overflow: hidden;
        padding: 1em 0;
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
        opacity: .2;
        pointer-events: none;
    }
</style>

