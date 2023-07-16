

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b1e31a7b.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.619ddb4d.js","_app/immutable/chunks/singletons.ae4706b7.js"];
export const stylesheets = [];
export const fonts = [];
