import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/kit/vite';

const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            fallback: '404.html'
        }),

        prerender: {
            entries: ['*']
        }
    }
};

export default config;