<script>
    const bears = [
        { src: "/mascot/bear-dabbing.png", alt: "Bear dabbing" },
        { src: "/mascot/bears-celebrating.png", alt: "Bears celebrating" },
        { src: "/mascot/bears-hugging.png", alt: "Bears hugging" },
        { src: "/mascot/bear-grumpy.png", alt: "Grumpy bear" },
    ];

    let index = 0;

    function next() {
        index = (index + 1) % bears.length;
    }
</script>

<button class="mascot" on:click={next} aria-label="ConnectBern mascot">
    <img src={bears[index].src} alt={bears[index].alt} />
</button>

<style>
    .mascot {
        position: fixed;
        top: 235px;
        right: 5rem;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;
        border: none;
        padding: 0;
        cursor: pointer;
        background: transparent;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
        animation: float 3s ease-in-out infinite;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
        z-index: 50;
    }

    .mascot:hover {
        transform: scale(1.08) translateY(-4px);
        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
        animation-play-state: paused;
    }

    .mascot img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50%       { transform: translateY(-18px); }
    }

    @media (max-width: 768px) {
        .mascot {
            width: 64px;
            height: 64px;
            top: auto;
            bottom: 1rem;
            right: 1rem;
        }
    }
</style>
