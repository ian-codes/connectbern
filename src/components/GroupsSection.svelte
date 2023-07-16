
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

    select option {
        color: black !important;
    }

    .topbarWrapper {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin: 0;
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

    .cardsContainer {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>