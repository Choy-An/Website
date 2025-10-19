import * as universal from '../entries/pages/skills/_slug_/_page.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/skills/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/skills/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/11.bcdac749.js","_app/immutable/chunks/skills.97c35c31.js","_app/immutable/chunks/UIcon.a9458db4.js","_app/immutable/chunks/index.cca70a41.js","_app/immutable/chunks/scheduler.8e784f9d.js","_app/immutable/chunks/index.3ec1ddd2.js","_app/immutable/chunks/projects.bd17d106.js","_app/immutable/chunks/experience.7b6bc3fa.js","_app/immutable/chunks/types.1ebf2f37.js","_app/immutable/chunks/paths.c300ce0b.js","_app/immutable/chunks/app.aa2e452b.js","_app/immutable/chunks/CardDivider.6cc8e9d9.js","_app/immutable/chunks/CardLogo.2698d05d.js","_app/immutable/chunks/Banner.309e21f8.js","_app/immutable/chunks/TabTitle.314ac334.js","_app/immutable/chunks/Chip.778bce14.js"];
export const stylesheets = ["_app/immutable/assets/Banner.79dec521.css"];
export const fonts = [];
