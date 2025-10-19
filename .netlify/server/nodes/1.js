

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c457400f.js","_app/immutable/chunks/scheduler.8e784f9d.js","_app/immutable/chunks/index.cca70a41.js","_app/immutable/chunks/stores.c149d300.js","_app/immutable/chunks/singletons.ff7e6000.js","_app/immutable/chunks/index.3ec1ddd2.js","_app/immutable/chunks/paths.c300ce0b.js"];
export const stylesheets = [];
export const fonts = [];
