

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.5066d992.js","_app/immutable/chunks/scheduler.8e784f9d.js","_app/immutable/chunks/index.cca70a41.js","_app/immutable/chunks/Chip.778bce14.js","_app/immutable/chunks/TabTitle.314ac334.js","_app/immutable/chunks/app.aa2e452b.js","_app/immutable/chunks/CommonPage.881e00ff.js"];
export const stylesheets = ["_app/immutable/assets/8.c6b04c59.css"];
export const fonts = [];
