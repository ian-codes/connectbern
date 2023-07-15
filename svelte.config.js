import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/kit/vite';
 
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter()
    }
};
 
export default config;