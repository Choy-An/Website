

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/skills/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.971e43c7.js","_app/immutable/chunks/scheduler.8e784f9d.js","_app/immutable/chunks/index.cca70a41.js","_app/immutable/chunks/UIcon.a9458db4.js","_app/immutable/chunks/index.3ec1ddd2.js","_app/immutable/chunks/paths.c300ce0b.js","_app/immutable/chunks/skills.97c35c31.js","_app/immutable/chunks/SearchPage.82afdd71.js","_app/immutable/chunks/CommonPage.881e00ff.js","_app/immutable/chunks/app.aa2e452b.js","_app/immutable/chunks/TabTitle.314ac334.js","_app/immutable/chunks/stores.c149d300.js","_app/immutable/chunks/singletons.ff7e6000.js","_app/immutable/chunks/Card.d11bd9a8.js","_app/immutable/chunks/index.adac4119.js"];
export const stylesheets = ["_app/immutable/assets/SearchPage.d63b558a.css","_app/immutable/assets/Card.7a6abfc5.css"];
export const fonts = [];
