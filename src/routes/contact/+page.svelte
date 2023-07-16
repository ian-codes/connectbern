<!-- 

<section>
    <div class="topbarWrapper">
        <h2>Contact</h2>
        <p>
            Have a suggestion for a group chat that could be added to the collection?
            Let us know!
            <br>
            Or if you have feedback on the site, or would like to chat about anything else, feel free to write us a message below.
        </p>
    </div>


    <div class="wrapper">
        <form>
            <div class="inputWrapper">
                <label for="name">Name</label>
                <input id="name" name="name" type="text" />
            </div>
        
            <div class="inputWrapper">
                <label for="email">Email</label>
                <input id="email" name="email" type="email" />
            </div>
        
            <div class="inputWrapper">
                <label for="message">Message</label>
                <textarea id="message" name="message"></textarea>
            </div>
    
            <div class="buttonWrapper">
                <button>Clear</button>
                <a href = 'mailto:my@email?body="Yourbody"&subject="a subject".com'>SEND EMAIL TO my@email.com</a>
                <button class="primary">Send</button>
            </div>
        </form>
    
        <div class="image"></div>
    </div>

    <p>Website created by Ian of kilendra.com. 
        <br>
        Do you like the look and feel of the site? Contact me about your
        project idea at ian@kilendra.com for a non-binding chat.
        Looking forward to working together!
    </p>
</section>




<style>
    .wrapper {
        display: flex;
        justify-content: space-between;
        gap: 2em;
    }

    .image {
        position: absolute;
        z-index: -1;
        height: 100%;
        width: 70%;
        right: 0;
        top: 0;
        background: url('/maybe.jpg');
        background-position: center;
        padding: 1em;
        background-size: cover;
        background-repeat: no-repeat;
        filter: invert(1);
        mix-blend-mode: color-burn;
        opacity: .4;
        clip-path: polygon(60% 0, 100% 0, 100% 100%, 40% 100%);
        box-shadow: -1px -1px 2px 1px black, 1px 1px 2px 1px white, 1px 5px 15px rgba(255, 255, 255, 0.145), 0 0 40px rgba(255, 255, 255, 0.211) inset;
    }

    .topbarWrapper {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    section {
        gap: 2em;
        position: relative;
        overflow: hidden;
    }
    
    p {
        color: white;
        font-size: 1em;
    }

    .inputWrapper {
        display: flex;
        flex-direction: column;
        gap: .5em;
        max-width: 500px;
        width: 100%;
    }

    .inputWrapper label {
        color: white;
    }

    textarea {
        max-width: calc(500px - 1em);
        max-height: 200px;
        padding: .5em;
    }

    .buttonWrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 500px;
        gap: 1em;
    }

    button {
        width: 100%;
        padding: 1em;
        border-radius: 1em;
        letter-spacing: 2px;
        font-size: 1em;
        cursor: pointer;
        background: none;
        box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.444), 1px 1px 2px rgba(0, 0, 0, 0.444), -1px 5px 20px rgba(0, 0, 0, 0.255);
        color: white;
        transition: all .1s ease;
    }

    button:hover {
        transform: scale(1.05);
        box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.444), 1px 1px 2px rgba(0, 0, 0, 0.444), 0 5px 1px black, 0 0 30px rgba(255, 255, 255, 0.447);
    }

    .primary {
        background: rgba(255, 255, 255, 0.578);
        color: black;
    }

    .primary:hover {
        background: white;
    }
</style> -->