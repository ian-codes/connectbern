import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.4b7b5d5d.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.619ddb4d.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/0.9ae6f733.css"];
export const fonts = [];
