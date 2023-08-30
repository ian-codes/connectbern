<script>
    export let GroupDataObject

    function generateDetailsPageLinkFromGroupName(name) {
        return name.replaceAll(" ", "-").toLowerCase();
    }
</script>


<div class="container">
    <div class="img" style="background: url('/groups/{GroupDataObject.img}');"></div>
    <div>
        <h3>{GroupDataObject.name}</h3>
        <p>{GroupDataObject.desc}</p>
    </div>
    <div class="buttonContainer">
        <a href="{GroupDataObject.link}" target="_blank" class="btn joinButton">
            Join
        </a>
        <a href="{generateDetailsPageLinkFromGroupName(GroupDataObject.name)}" class="btn detailsButton">
            Details
        </a>
    </div>
</div>


<style>
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
        box-shadow: 0 5px 3px rgb(0, 0, 0), 0 0 20px inset rgba(255, 255, 255, 0.137);
        filter: saturate(0);
        transition: all .2s ease;
        margin-top: 1em;
    }
    
    .buttonContainer {
        position: absolute;
        width: 100%;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 3px;
        opacity: 0;
        display: none;
        transition: all .2s ease;
    }

    .btn::after {
        opacity: 0;
        position: absolute;
        content: '→';
        right: 7em;
        pointer-events: none;
        transition: opacity .1s ease;
    }

    .container:hover .buttonContainer {
        display: flex;
        opacity: 1;
    }

    .container:hover .btn:hover::after {
        display: flex;
        opacity: 1;
    }

    @keyframes rainbow {
        0% {
            filter: saturate(1) hue-rotate(0);
        }
        100% {
            filter: saturate(1) hue-rotate(360deg);
        }
    }
</style>