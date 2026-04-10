<script>
    import { currentLanguage } from "$lib/stores/languageStore";
    import { t } from "$lib/locales/translations.js";
    import { TeamData } from "$lib/models/TeamData.js";

    $: lang = $currentLanguage;
</script>

<svelte:head>
    <title>{t[lang]["team-title"]} • Connect Bern</title>
</svelte:head>

<section class="team-page">
    <h1 class="title">{t[lang]["team-title"]}</h1>
    <p class="description">
        {t[lang]["team-p1"]}
    </p>

    <div class="grid">
        {#each TeamData as member}
            <div class="card">
                <div class="image-wrapper">
                    {#if member.image}
                        <img
                            src={member.image}
                            alt={member.name}
                            class="profile-pic"
                        />
                    {:else}
                        <div class="placeholder-avatar">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                ></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                    {/if}
                </div>

                <h3 class="name">{member.name}</h3>
                {#if member.role && member.role[lang]}
                    <p class="role">{member.role[lang]}</p>
                {/if}

                <div class="socials">
                    {#if member.socials?.instagram}
                        <a
                            href={member.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="social-icon"
                            aria-label="Instagram"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="5"
                                    ry="5"
                                />
                                <path
                                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                                />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>
                    {/if}
                    {#if member.socials?.linkedin}
                        <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="social-icon"
                            aria-label="LinkedIn"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                />
                            </svg>
                        </a>
                    {/if}
                    {#if member.socials?.email}
                        <a
                            href={member.socials.email}
                            class="social-icon"
                            aria-label="Email"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <rect
                                    x="2"
                                    y="4"
                                    width="20"
                                    height="16"
                                    rx="2"
                                />
                                <path d="M2 7l10 7 10-7" />
                            </svg>
                        </a>
                    {/if}
                    {#if member.socials?.website}
                        <a
                            href={member.socials.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="social-icon"
                            aria-label="Website"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path
                                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                                ></path>
                            </svg>
                        </a>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .team-page {
        padding: 2rem;
        max-width: 1000px;
        margin: 0 auto;
        min-height: 50vh;
    }

    .title {
        color: white;
        margin-bottom: 1rem;
        text-align: center;
    }

    .description {
        color: white;
        line-height: 1.6;
        text-align: center;
        max-width: 800px;
        margin: 0 auto 3rem auto;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        max-width: 800px;
        margin: 0 auto;
        gap: 4rem;
        justify-items: center;
        /*  Ensure to leave some space at the bottom */
        padding-bottom: 2rem;
    }

    .card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        padding: 1.5rem;
        width: 100%;
        max-width: 220px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }

    .image-wrapper {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 1rem;
        background: rgba(255, 255, 255, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid rgba(255, 255, 255, 0.5);
    }

    .profile-pic {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .placeholder-avatar {
        color: rgba(255, 255, 255, 0.7);
    }

    .name {
        color: white;
        margin: 0 0 0.5rem 0;
        font-size: 1.25rem;
    }

    .role {
        color: rgba(255, 255, 255, 0.8);
        margin: 0 0 1.5rem 0;
        font-size: 0.9rem;
    }

    .socials {
        display: flex;
        gap: 1rem;
        justify-content: center;
        width: 100%;
    }

    .social-icon {
        color: white;
        opacity: 0.7;
        transition:
            opacity 0.2s ease,
            transform 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .social-icon:hover {
        opacity: 1;
        transform: scale(1.1);
    }
</style>
