import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/kit/vite';

// BASE_PATH lets per-PR preview builds live under /pr-N/.
// Leave it unset for production (deployed at connectbern.ch root).
const base = process.env.BASE_PATH ?? '';

const config = {
    preprocess: vitePreprocess(),

    kit: {
        paths: {
            base,
            relative: false,
        },
        adapter: adapter({
            fallback: '404.html'
        }),
    }
};

export default config;
