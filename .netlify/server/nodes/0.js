import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.3e18bbbd.js","_app/immutable/chunks/scheduler.8e784f9d.js","_app/immutable/chunks/index.cca70a41.js","_app/immutable/chunks/UIcon.a9458db4.js","_app/immutable/chunks/index.3ec1ddd2.js","_app/immutable/chunks/stores.c149d300.js","_app/immutable/chunks/singletons.ff7e6000.js","_app/immutable/chunks/paths.c300ce0b.js","_app/immutable/chunks/home.41660d8c.js","_app/immutable/chunks/types.1ebf2f37.js","_app/immutable/chunks/skills.97c35c31.js"];
export const stylesheets = ["_app/immutable/assets/0.54e1c71e.css"];
export const fonts = [];
