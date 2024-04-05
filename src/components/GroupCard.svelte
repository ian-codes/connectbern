<script>
    import { currentLanguage } from '../stores/languageStore';

    export let GroupDataObject

    $: language = $currentLanguage;

    function getLinkFromName(name) {
        return name.replaceAll(" ", "-").toLowerCase();
    }
</script>


<div class="container">
    <div class="img" style="background: url('/groups/{GroupDataObject.img}');"></div>
    <div class="textContainer">
        <h3>
            {typeof GroupDataObject.name === "string" ? GroupDataObject.name : GroupDataObject.name[language]}
        </h3>
        <p>{GroupDataObject.desc[language]}</p>
    </div>
    <div class="buttonContainer">
        <a href="{GroupDataObject.link}" target="_blank" class="button">
            Join
            <span class="linkImg" />
        </a>
        <a href="{getLinkFromName(typeof GroupDataObject.name === "string" ? GroupDataObject.name : GroupDataObject.name[language])}" class="button">
            Info
            <span class="eyeImg" />
        </a>
    </div>
</div>


<style>
    .button {
        max-width: max-content;
        gap: .5em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        font-weight: bold;
        letter-spacing: 1px;
        padding: .8em 1.2em;
        color: black;
        background: white;
        box-shadow: 0 2px 3px black;
        transition: all .1s ease;
    }

    .button:hover {
        background: rgb(77, 77, 77);
        color: white;
    }

    .button:hover span {
        filter: invert(1) !important;
    }

    .linkImg, .eyeImg {
        width: 1em;
        height: 1em;
    }

    .eyeImg {
        background-image: url('/eye.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

    .container {
        position: relative;
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
        aspect-ratio: 1;
        padding: 1em;
        transition: .2s ease all;
        z-index: 10;
        overflow: hidden;
        background: linear-gradient(rgba(196, 196, 196, 0.1), transparent);
        box-shadow: 0 5px 3px 2px rgba(0, 0, 0, 0.158), 0 0 5px rgba(255, 255, 255, 0.05);
    }

    .textContainer {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .container:hover, 
    .container:focus {
        transform: scale(1.02);
        box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.2);
        background: rgba(255, 255, 255, 0.493);
        color: black;
    }

    .container:hover .img, 
    .container:focus .img {
        filter: saturate(1);
        animation: rainbow 5s infinite linear;
    }

    .container:hover .buttonContainer,
    .container:focus .buttonContainer {
        display: flex;
    }

    .container:hover p,
    .container:focus p {
        display: none;
    }

    
    h3 {
        font-size: 1.5em;
        text-align: center;
    }

    .img {
        position: relative;
        background-position: center;
        background-size: contain !important;
        background-repeat: no-repeat;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        box-shadow: 0 5px 3px rgb(0, 0, 0);
        filter: saturate(0);
        transition: all .2s ease;
        margin-top: 1em;
    }
    
    .buttonContainer {
        position: absolute;
        bottom: 1em;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: .5em;
        display: none;
        transition: all .2s ease;
    }


    @keyframes rainbow {
        0% {
            filter: saturate(0) hue-rotate(0);
        }
        3% {
            filter: saturate(1) hue-rotate(0);
        }
        100% {
            filter: saturate(1) hue-rotate(360deg);
        }
    }
</style>