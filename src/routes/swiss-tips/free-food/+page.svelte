<script>
    import { getContext, onMount } from 'svelte';

    const scrollToContent = getContext('scrollToContent');

    onMount(() => {
        scrollToContent();
    });
</script>


<div class="section">
    <h2>Free Food</h2>
    <ul>
        <li>
            There is an initiative called madamefrigo and they have frides all around the city, which you can check for food.
            <a href="https://www.madamefrigo.ch/de/standorte/" target="_blank">
                https://www.madamefrigo.ch/de/standorte/
            </a>
        </li>

        <li>
            You can also join the food sharing group on Telegram and ask for food or wait until someone posts something they are offering.
            <a href="https://t.me/foodsharingbern" target="_blank">
                https://t.me/foodsharingbern
            </a>
        </li>
        <li>
            <p>
                There is a website called
                <a href="https://foodsharing.de" target="_blank">
                    Food Sharing
                </a> 
                you need to pass a short test (ask them for help if you get stuck) and then 
                you can pick up 
                food from some restaurants and other places for free nearly every evening.
                The idea of this movement is to reduce food waste so it's not about you getting free food,
                but about reducing food waste, you can also give out the food that you collect in the food sharing group or in the fridges.
            </p>
        </li>


        <li>
            The app Too Good to go is not free but it has a lot of stores offering very cheap 
            food just before closing
            <a href="https://play.google.com/store/apps/details?id=com.app.tgtg&hl=de_CH" target="_blank">
                https://play.google.com/store/apps/details?id=com.app.tgtg&hl=de_CH
            </a>
        </li>

        <li>At the end of the day at supermarkets you can often find food that will be much cheaper than normal.
            especially at Migros and Coop.
        </li>

        <li>
            You can use the microwave in the supermarket when they are open.
            For example in Coop/Migros.
        </li>

        <li>
            You can drink the water from the fountains which you can
            find all around town!
        </li>

    </ul>
</div>