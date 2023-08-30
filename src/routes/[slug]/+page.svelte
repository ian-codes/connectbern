<script>
    export let data;
</script>


<section>
    <a class="btn back" href="/">
        <span>→</span>Back
    </a>

    <div class="container">
        <div class="textContainer">
            <div>
                <h2>
                    {data.name}
                </h2>
            
                <p>
                    {data.desc}
                </p>
            </div>

            <a class="join" href="{data.link}">
                JOIN THIS GROUP
                <span class="linkImg"></span>
            </a>

            <div class="placeholder"></div>
        </div>
    
        <div style="background-image: url(groups/{data.img})" class="img"></div>
    </div>

</section>


<style>
    @media (max-width: 800px) {
        .container {
            flex-wrap: wrap;
            gap: 3em !important;
        }

        h2 {
            font-size: 1.5rem !important;
        }

        p {
            font-size: 1rem !important;
        }

        .img {
            width: 200px !important;
        }
    }

    section {
        padding: 1em !important;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1em;
        margin: 2em 0;
    }

    .textContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 1em;
        width: 100%;
    }

    h2 {
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
        max-width: max-content;
        gap: 1em;
        display: flex;
        flex-direction: row;
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

    .linkImg {
        background-image: url('link.png');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 30px;
        width: 30px;
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