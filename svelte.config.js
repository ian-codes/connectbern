import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/kit/vite';

const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            fallback: 'index.html' // may differ from host to host
        }),

        prerender: {
            entries: ['*']
        }
    }
};

export default config;