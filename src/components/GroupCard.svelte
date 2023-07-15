<script>
    export let GroupDataObject
</script>

<div class="container">
    <div class="img" style="background: url('/groups/{GroupDataObject.img}');"></div>
    <div>
        <h3>{GroupDataObject.name}</h3>
        <p>{GroupDataObject.desc}</p>
    </div>
    <a href="{GroupDataObject.link}" target="_blank" class="joinButton">Join</a>
</div>


<style>
    .img {
        position: relative;
        background-position: center;
        background-size: contain !important;
        background-repeat: no-repeat;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        border: 2px solid black;
        box-shadow: 0 5px 3px rgb(0, 0, 0), 0 0 20px inset rgba(255, 255, 255, 0.137);
        filter: saturate(0);
        transition: all .2s ease;
        margin-top: 1em;
    }

    .joinButton {
        opacity: 0;
        position: absolute;
        bottom: 0;
        width: 100%;
        text-decoration: none;
        padding: 1em;
        background: black;
        border-radius: 1em;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: .8em;
        font-weight: bold;
        color: white;
        transition: all .2s ease;
    }

    h3 {
        font-size: 1.5em;
        text-align: center;
    }

    @keyframes rainbow {
        0% {
            filter: saturate(1) hue-rotate(0);
        }
        100% {
            filter: saturate(1) hue-rotate(360deg);
        }
    }

    .container {
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
        height: 300px;
        padding: 1em;
        cursor: pointer;
        transition: .2s ease all;
        position: relative;
        overflow: hidden;
        border: 3px solid white;
        background: linear-gradient(rgba(196, 196, 196, 0.03), transparent);
        box-shadow: 0 5px 3px 2px rgba(0, 0, 0, 0.158), 0 0 10px rgba(255, 255, 255, 0.089), 0 0 30px rgba(255, 255, 255, 0.199) inset;
    }

    .container:hover, .container:focus {
        transform: scale(1.05);
        box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.363);
        background: white;
        color: black;
    }

    .container:hover .img {
        animation: rainbow 5s infinite linear;
    }

    .container:hover .joinButton {
        opacity: 1;
    }

    .joinButton::after {
        opacity: 0;
        position: absolute;
        content: '→';
        right: 10em;
        pointer-events: none;
        transition: opacity .1s ease;
    }

    .container:hover .joinButton:hover::after {
        opacity: 1;
    }
</style>