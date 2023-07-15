
<script>
    import { GroupsData, searchGroups, filterByGroupType } from "../models/GroupsData";
    import GroupCard from "./GroupCard.svelte";

    let groupType = "All"
    let groupTypes = ["All", "WhatsApp", "Telegram", "Other"]

    let groups = GroupsData

    let searchTerm = ""

    function handleSearch() {
        groups = searchGroups(searchTerm)
    }

    function handleGroupTypeChange() {
        groups = filterByGroupType(groupType.toLowerCase())
        console.log(groupType)
    }
</script>


<section>
    <div class="topbarWrapper">
        <h2>Groups</h2>
        <p>
            In these groups you can do many different things. If you have a general 
            question, ask in the <a href="https://chat.whatsapp.com/FxFhMEQirDLHoRqQzY4UDz">Connect Bern</a> group or read the descriptions 
            of the groups or translate the name of the group to English if it's in German, 
            so you understand what the group is about.
        </p>
    </div>

    <div class="settingsBar">
        <div class="groupTypeFilter">
            <label for="type">Type</label>
            <select bind:value={groupType} on:change={handleGroupTypeChange} id="type" name="type">
                {#each groupTypes as type}
                    <option value={type}>{type}</option>
                {/each}
            </select>
        </div>
        
        <div class="searchbar">
            <input on:change={handleSearch} bind:value={searchTerm} type="text" id="search" name="search" placeholder="Search groups" />
            <button class="iconWrapper">
                <span class="searchIcon" style="background: url('/search.svg');"></span>
            </button>
        </div>
    </div>


    <div class="cardsContainer">
        {#each groups as groupDataObject}
            <GroupCard GroupDataObject={groupDataObject} />
        {/each}
    </div>
</section>


<style>
    @media (max-width: 800px) {
        section {
            padding: 2em 1em !important;
            margin: 0 .5em !important;
        }

        h2 {
            font-size: 1.8em !important;
            width: 100vw;
            text-align: left;
        }

        p {
            margin: 0 !important;
        }

        .topbarWrapper {
            flex-wrap: wrap;
            gap: 1em;
            margin: 0 !important;
            padding: 0 0 1em 0 !important;
        }

        .settingsBar {
            margin: 0 !important;
            padding: 0 !important;
        }
    }

    section {
        padding: 3em 1em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        border-radius: 1em;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.281);
        border: 2px dotted rgba(128, 128, 128, 0.253);
        margin: 2em .5em;
        background: rgba(255, 255, 255, 0.055);
    }

    h2 {
        font-size: 2em;
        letter-spacing: 2px;
        font-weight: lighter;
        color: white;
    }

    p {
        line-height: 1.5em;
        font-size: 1.1em;
        color: white;
    }

    p a {
        text-decoration: none;
        color: white;
        text-shadow: 1px 1px 2px black;
    }

    .groupTypeFilter {
        color: white;
        background: rgba(255, 255, 255, 0.062);
        font-size: 1em;
        border-radius: .5em;
        border: none;
        box-shadow: 0 2px 2px rgba(50, 50, 50, 0.425);
        display: flex;
        align-items: center;
        gap: 1em;
        padding-left: .5em;
    }

    select {
        background: linear-gradient(rgba(255, 255, 255, 0.202), transparent);
        color: white;
        font-size: 1em;
        border: none;
        padding: .5em;
        border-radius: 0 .5em .5em 0;
        cursor: pointer;
    }

    .topbarWrapper {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin: 0 1rem;
        gap: 1em;
        margin-bottom: 1em;
        padding-bottom: 2em;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.486);
    }

    .settingsBar {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        align-items: start;
        justify-content: space-between;
        margin: 0 1rem;
        margin-bottom: 1em;
        padding-bottom: 2em;
    }

    .searchbar {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 1em;
    }

    .iconWrapper {
        padding: .5em;
        border-radius: 100%;
        box-shadow: 0 2px 2px rgba(50, 50, 50, 0.425);
        cursor: pointer;
        transition: all .1s ease;
        border: none;
        background: linear-gradient(rgba(255, 255, 255, 0.202), transparent);
    }

    .iconWrapper:hover, input:hover, input:focus {
        box-shadow: 0 2px 1px 2px rgba(255, 255, 255, 0.815);
    }

    .searchIcon {
        filter: invert(1);
        display: block;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 20px;
        height: 20px;
    }

    input {
        color: white;
        background: linear-gradient(rgba(255, 255, 255, 0.124), transparent);
        padding: .5em;
        font-size: 1em;
        border-radius: .5em;
        border: none;
        box-shadow: 0 2px 2px rgba(50, 50, 50, 0.425);
        transition: all .1s ease;
    }

    input::placeholder {
        color: white;
    }

    .cardsContainer {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>