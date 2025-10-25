import { writable } from 'svelte/store';

// Create a writable store with localStorage persistence
function createLanguageStore() {
    const { subscribe, set, update } = writable('en');

    return {
        subscribe,
        set: (value) => {
            if (typeof window !== 'undefined') {
                localStorage.setItem('language', value);
            }
            set(value);
        },
        update
    };
}

export const currentLanguage = createLanguageStore();
