

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.8c0281cb.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.619ddb4d.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/2.3e9b8866.css"];
export const fonts = [];
