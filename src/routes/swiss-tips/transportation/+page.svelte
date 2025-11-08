<script>
    import { getContext, onMount } from 'svelte';

    const scrollToContent = getContext('scrollToContent');

    onMount(() => {
        scrollToContent();
    });
</script>


<div class="section">
    <h2>Transportation</h2>
    <i class="text-white">WARNING: Beware of the price changes on the SBB app - the price is actually double!</i>
    <h3>Long-distance Traveling</h3>
    <ul>
        <li>
            <h3>If you want to hitchhike:</h3>
            <ul>
                <li>
                    <a href="https://hitchspots.me" target="_blank">
                        https://hitchspots.me
                    </a>
                </li>
                <li>
                    <a href="https://hitchwiki.org/en/Bern" target="_blank">
                        https://hitchwiki.org/en/Bern
                    </a>
                </li>
            </ul>
        </li>

        <li>
            You can get a ride on
            <a href="https://blablacar.com" target="_blank">
                https://blablacar.com
            </a>
            for very cheap and you can try
            <a href="https://www.blablacardaily.com/" target="_blank">
                https://www.blablacardaily.com/
            </a>
        </li>

        <li>
            Traveling via Flixbus is also possible inside of Switzerland.
            Flixbus is apparently not allowed yet to offer rides inside of Switzerland (Kabotageverbots)
            so they don't do it but if you buy a ticket to Freiburg in Germany when you're
            going to Basel from Bern you can just get off in Basel and it's still much cheaper
            in some cases than paying for the train. The same goes for Zürich if you travel to Lindau
            in Germany or Bregenz in Austria from Bern or to Bern as cheap as 13.50 you can just get off at Zürich.
            No guarantee but it seems like when you look for these rides from Bern and then from Basel/Zürich it shows
            the same arrival time which is a pretty strong indicator, check on the trip tab, it shows all the stops.
        </li>

        <li>
            If you're very lucky you can maybe find a ride for free in these groups
            to or from Bern:
            WhatsApp:
            <a href="https://tiny.cc/mitfahrenbernwhatsapp" target="_blank">
                https://tiny.cc/mitfahrenbernwhatsapp
            </a>

            Telegram:
            <a href="https://tiny.cc/mitfahrenbern" target="_blank">
                https://tiny.cc/mitfahrenbern
            </a>
            Other cities, if you want to also try your luck in other similiar groups besides
            the Bernese one you can look for the "mitfahren" or "mitfahrgelegenheit" here:
            <a href="https://t.me/unkomarkt_sammlung" target="_blank">
                https://t.me/unkomarkt_sammlung
            </a>
            (there is also 1 for all of Switzerland)
        </li>

        <li>
            If you are under 25 years old, you can travel around switzerland for 
            one year for 99 francs, always after 7pm.
            Some gondola lifts and boats are included.
            you can buy it here: 
            <a href="https://www.sbb.ch/de/kampagne/night.html" target="_blank">
                https://www.sbb.ch/de/kampagne/night.html
            </a>
            Here is the map showing where in Switzerland you can travel for free with 
            this ticket: 
            <a href="https://www.sbb.ch/de/abos-billette/abonnemente" target="_blank">
                https://www.sbb.ch/de/abos-billette/abonnemente
            </a>
        </li>
    </ul>
    <h3>Inside the City (Bern)</h3>
    <ul>
        <li>
            You can check at the project house if we have a bike available.
            You can also try this website to borrow a bike for free
            <a href="https://map.pumpipumpe.ch" target="_blank">
                https://map.pumpipumpe.ch
            </a>
        </li>
        <li>
            You can get 1 free ride (only 3 franks) with public transportation if
            you register to an app called FAIRTIQ if you use a code from someone else - for example this code MCW8ZTR5S
            and here are links to the app: 
            <ul>
                <li>
                    Android: 
                    <a href="https://play.google.com/store/apps/details?id=com.fairtiq.android" target="_blank">
                        https://play.google.com/store/apps/details?id=com.fairtiq.android
                    </a>
                </li>
                <li>
                    Apple:
                    <a href="https://apps.apple.com/ch/app/fairtiq/id1094360403?l=en" target="_blank">
                        https://apps.apple.com/ch/app/fairtiq/id1094360403?l=en
                    </a>
                </li>
                <li>
                    Here you can find the different bus stops ("Kanten") at the 
                    central station (tap on it for bigger size):
                    <a href="https://chagai.website/hbf_plan.jpg" target="_blank" style="display: block !important;">
                        <img style="width: full; max-width: 80%;"
                        src="https://chagai.website/hbf_plan.jpg" 
                        alt="Bern Hauptbahnhof with 'Kanten'">
                    </a>
                </li>
            </ul>
        </li>
    </ul>
    <h3>Parking</h3>
    <p>
        Parking spots with blue line are only free on sunday. 
        But also not every blue parking zone. Always read the signs 
        carefully, use google lens to translate if needed. There is a ticket 
        to buy to park the car on the blue lines:
    </p>
    <ul>
        <li>
            19 francs for 24 hours
        </li>
        <li>
            9 francs for 4 hours
        </li>
    </ul>
</div>


<style>
    ul {
        padding-left: 1em;
    }
</style>