<script>
    export let GroupDataObject

    function generateDetailsPageLinkFromGroupName(name) {
        return name.replaceAll(" ", "-").toLowerCase();
    }

    let isSelected = false
</script>

{#if isSelected}
    <button on:click={() => isSelected = !isSelected} class="deselect"></button>
{/if}

<div class="container {isSelected ? "selected" : ""}">
    <button on:click={() => isSelected = !isSelected}></button>
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
    .deselect {
        position: fixed;
        inset: 0;
        opacity: 0;
        background: none;
    }

    button {
        position: absolute;
        inset: 0;
        opacity: 0;
        background: none;
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
        transition: .2s ease all;
        position: relative;
        overflow: hidden;
        border: 3px solid white;
        background: linear-gradient(rgba(196, 196, 196, 0.03), transparent);
        box-shadow: 0 5px 3px 2px rgba(0, 0, 0, 0.158), 0 0 10px rgba(255, 255, 255, 0.089), 0 0 30px rgba(255, 255, 255, 0.199) inset;
    }

    .selected {
        transform: scale(1.02);
        box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.2);
        background: white;
        color: black;
        transform: scale(1.02);
        border-radius: 1em;
    }

    .container:hover {
        box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.2);
        border-radius: 1em;
    }

    .selected .img, .container:hover .img {
        animation: rainbow 5s infinite linear;
    }
    
    .selected .buttonContainer {
        display: flex;
        opacity: 1;
    }

    .selected .btn:hover::after {
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


    @keyframes rainbow {
        0% {
            filter: saturate(1) hue-rotate(0);
        }
        100% {
            filter: saturate(1) hue-rotate(360deg);
        }
    }
</style>