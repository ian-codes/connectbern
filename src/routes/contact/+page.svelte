<script>
    import { currentLanguage } from '$lib/stores/languageStore.js';
    import { t } from '$lib/locales/translations.js';

    $: lang = $currentLanguage;

    let formStatus = '';
    let isSubmitting = false;

    async function handleSubmit(event) {
        event.preventDefault();
        isSubmitting = true;
        formStatus = '';

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mblqllvn', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            isSubmitting = false;

            if (response.ok) {
                formStatus = 'success';
                form.reset();
            } else {
                formStatus = 'error';
            }
        } catch (error) {
            isSubmitting = false;
            formStatus = 'error';
        }
    }
</script>

<svelte:head>
    <title>{t[lang]['contact-title']} • Connect Bern</title>
</svelte:head>

<section>
    <div class="topbarWrapper">
        <h2>{t[lang]['contact-title']}</h2>
        <p>
            {@html t[lang]['contact-description']}
        </p>
    </div>

    <div class="wrapper">
        <form
            on:submit={handleSubmit}
            id="contactForm"
        >
            <div class="inputWrapper">
                <label for="name">{t[lang]['contact-name']}</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={isSubmitting}
                />
            </div>

            <div class="inputWrapper">
                <label for="email">{t[lang]['contact-email']}</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                />
            </div>

            <div class="inputWrapper">
                <label for="phone">{t[lang]['contact-phone']}</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+41 XX XXX XX XX"
                    disabled={isSubmitting}
                />
            </div>

            <div class="inputWrapper">
                <label for="message">{t[lang]['contact-message']}</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    disabled={isSubmitting}
                ></textarea>
            </div>

            {#if formStatus === 'success'}
                <p class="success-message">{t[lang]['contact-success']}</p>
            {/if}

            {#if formStatus === 'error'}
                <p class="error-message">{t[lang]['contact-error']}</p>
            {/if}

            <div class="buttonWrapper">
                <button
                    type="submit"
                    class="primary"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? t[lang]['contact-submitting'] : t[lang]['contact-submit']}
                </button>
            </div>
        </form>

        <div class="image"></div>
    </div>
</section>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
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
        text-align: center;
        align-items: center;
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

    form {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        align-items: center;
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
        font-weight: 500;
    }

    input, textarea {
        padding: .8em;
        border-radius: .5em;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(0, 0, 0, 0.3);
        color: white;
        font-size: 1em;
        font-family: inherit;
    }

    input:focus, textarea:focus {
        outline: none;
        border-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    }

    textarea {
        max-width: calc(500px - 1.6em);
        min-height: 120px;
        resize: vertical;
    }

    .buttonWrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        max-width: 500px;
        gap: 1em;
    }

    button {
        padding: 1em 2em;
        border-radius: 1em;
        letter-spacing: 2px;
        font-size: 1em;
        cursor: pointer;
        background: none;
        border: none;
        box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.444), 1px 1px 2px rgba(0, 0, 0, 0.444), -1px 5px 20px rgba(0, 0, 0, 0.255);
        color: white;
        transition: all .1s ease;
    }

    button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    button:not(:disabled):hover {
        transform: scale(1.05);
        box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.444), 1px 1px 2px rgba(0, 0, 0, 0.444), 0 5px 1px black, 0 0 30px rgba(255, 255, 255, 0.447);
    }

    .primary {
        background: rgba(255, 255, 255, 0.578);
        color: black;
    }

    .primary:not(:disabled):hover {
        background: white;
    }

    .success-message {
        color: #4ade80;
        background: rgba(74, 222, 128, 0.1);
        padding: 1em;
        border-radius: 0.5em;
        border: 1px solid rgba(74, 222, 128, 0.3);
        max-width: 500px;
    }

    .error-message {
        color: #f87171;
        background: rgba(248, 113, 113, 0.1);
        padding: 1em;
        border-radius: 0.5em;
        border: 1px solid rgba(248, 113, 113, 0.3);
        max-width: 500px;
    }

    @media (max-width: 800px) {
        .wrapper {
            flex-direction: column;
        }

        .image {
            display: none;
        }

        form {
            align-items: flex-start;
        }
    }
</style>
