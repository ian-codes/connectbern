import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/kit/vite';

const config = {
    preprocess: vitePreprocess(),

    kit: {
        paths: {
            relative: false,
        },
        adapter: adapter({
            fallback: '404.html'
        }),
    }
};

export default config;