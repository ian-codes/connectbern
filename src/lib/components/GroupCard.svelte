<script>
    import { currentLanguage } from '$lib/stores/languageStore';
    $: language = $currentLanguage;

    export let GroupDataObject
</script>


<div id="{GroupDataObject.slug}" class="container">
    <div class="top-container">
        <div class="img" style="background: url('/groups/{GroupDataObject.img}');"></div>
        <div class="textContainer">
            <h3>
                {typeof GroupDataObject.name === "string" ? GroupDataObject.name : GroupDataObject.name[language]}
            </h3>
            <span class="group-description">{GroupDataObject.desc[language]}</span>
        </div>
    </div>

    <div class="buttonContainer">
        <a title="Join group" href="{GroupDataObject.link}" target="_blank" class="button">
            <span class="linkImg" />
            Join
        </a>
        <a title="Show details" href="/groups/{GroupDataObject.slug}" class="button">
            <span class="eyeImg" />
            Info
        </a>
    </div>
</div>


<style>
    @media (max-width: 800px) { 
        .container {
            height: min-content !important;
        }
    }

    .top-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

        
    .buttonContainer {
        position: relativge;
        bottom: 1em;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: .5em;
        transition: all .2s ease;
    }

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
        background: rgba(255, 255, 255, 0.87);
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.37);
        border-radius: .5em;
        transition: all .3s ease;
    }

    .button, .button span {
        transition: all .3s ease;
    }

    .button:hover {
        background: black;
        color: white;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.233);
    }

    .button:hover span {
        filter: invert(1) !important;
    }

    .linkImg, .eyeImg {
        width: 1em;
        height: 1em;
    }

    .eyeImg {
        background-image: url('/icons/eye.png');
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
        justify-content: space-between;
        gap: 1em;
        width: 300px;
        height: 350px;
        min-height: max-content;
        padding: 2em;
        z-index: 10;
        overflow: hidden;
        transition: .4s ease all;
        border-top-left-radius: 1.5em;
        border-bottom-right-radius: 1.5em;
        box-shadow: 0 5px 3px 2px rgba(0, 0, 0, 0.158), 0 0 5px rgba(255, 255, 255, 0.05);
    }

    .container::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        background: linear-gradient(30deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.801));
        transition: .4s ease all;
        opacity: 0;
    }
    
    .container:hover::before,
    .container:focus::before {
        opacity: 1;
        background: linear-gradient(30deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.801));
        color: black;
    }

    .textContainer {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .container:hover, 
    .container:focus {
        transform: scale(1.02);
        color: black;
        box-shadow: 0 10px 30px rgba(255, 255, 255, 0.185), 0 5px 10px 2px rgba(0, 0, 0, 0.2);
    }

    .container:hover .img, 
    .container:focus .img {
        filter: saturate(1);
        /* animation: rainbow 5s infinite linear; */
    }

    .container:hover .buttonContainer,
    .container:focus .buttonContainer {
        opacity: 1;
    }

    .group-description {
        font-size: 1em;
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
        min-height: 100px;
        border-radius: 100%;
        box-shadow: 0 5px 3px rgb(0, 0, 0);
        filter: saturate(0);
        transition: all .2s ease;
        margin-top: 1em;
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