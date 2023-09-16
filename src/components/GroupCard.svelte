<script>
    export let GroupDataObject
    export let selectedGroup = ""

    function generateDetailsPageLinkFromGroupName(name) {
        return name.replaceAll(" ", "-").toLowerCase();
    }

    function changeSelectedGroup() {
        if (selectedGroup === GroupDataObject.name) deselectGroup()

        else {
            selectedGroup = GroupDataObject.name
        }
        
        console.log(selectedGroup)
    }

    function deselectGroup() {
        selectedGroup = ""
    }
</script>

{#if selectedGroup === GroupDataObject.name}
    <button on:click={deselectGroup} class="deselect"></button>
{/if}

<div class="container {selectedGroup === GroupDataObject.name ? "selected" : ""}">
    <button on:click={changeSelectedGroup}></button>
    <div class="img" style="background: url('/groups/{GroupDataObject.img}');"></div>
    <div class="textContainer">
        <h3>{GroupDataObject.name}</h3>
        <p>{GroupDataObject.desc}</p>
    </div>
    <div class="buttonContainer">
        <a href="{GroupDataObject.link}" target="_blank" class="btn join">
            Join
            <span class="linkImg"></span>
        </a>
        <a href="{generateDetailsPageLinkFromGroupName(GroupDataObject.name)}" class="btn detailsButton">
            Details
            <span class="eyeImg"></span>
        </a>
    </div>
</div>


<style>
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5em;
        letter-spacing: 1px;
        font-size: 1em;
    }

    .linkImg, .eyeImg {
        width: 1em;
        height: 1em;
    }

    .linkImg {
        filter: invert(1);
    }

    .eyeImg {
        filter: invert(1) !important;
        background-image: url('/eye.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

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
        border-radius: 1em;
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
        border: 1px dotted white;
        background: linear-gradient(rgba(196, 196, 196, 0.03), transparent);
        box-shadow: 0 5px 3px 2px rgba(0, 0, 0, 0.158), 0 0 5px rgba(255, 255, 255, 0.05), 0 0 30px rgba(255, 255, 255, 0.199) inset;
    }

    .textContainer {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .selected {
        transform: scale(1.02);
        box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.2);
        background: white;
        color: black;
        border-radius: 1em;
    }

    .container:hover {
        box-shadow: 0 5px 3px 2px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.199) inset;
        transform: scale(1.02);
    }

    .selected .img, .container:hover .img {
        filter: saturate(1);
        animation: rainbow 5s infinite linear;
    }
    
    .selected .buttonContainer {
        display: flex;
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