<script>
    export let data;
</script>


<section>
    <a class="btn back" href="/">
        <span>→</span>Back
    </a>

    <div class="container">
        <div class="textContainer">
            <h2>
                {data.name}
            </h2>
        
            <p>
                {data.desc}
            </p>

            <div class="linkWrapper">
                Link to join:
                <a class="join" href="{data.link}">
                    {data.link}
                </a>
            </div>
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

        .linkWrapper {
            margin: 0 !important;
            font-size: 1rem !important;
        }
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
        gap: 2em;
        width: 100%;
    }

    h2 {
        font-size: 2.5em;
        font-weight: bold;
    }

    p {
        font-size: 1.5em;
    }

    .img {
        width: 100%;
        max-width: 300px;
        aspect-ratio: 1;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 100%;
        border: 2px solid white;
        box-shadow: 0 5px 50px rgba(255, 255, 255, 0.123);
    }


    .linkWrapper {
        text-decoration: none;
        color: white;
        font-size: 1.5em;
        margin: 0 1rem;
    }

    .join {
        color: white;
    }

    .back {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        background: black;
        width: max-content;
        padding: .8em 1.2em;
        transition: all .1s ease;
    }

    .back span {
        margin-top: 3px;
        transform: rotate(180deg);
    }

    .back:hover {
        background: white;
        transform: scale(1.02);
        color: black;
    }
</style>