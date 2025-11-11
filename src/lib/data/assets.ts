import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';

const gh = (file: string) => `/logos/${file}`;
const ph = (file: string) => `/projects/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

const Assets = {
	C: a('c.svg'),
	FastApi: a('fastapi'),
	Figma: a('figma.svg'),
	Numpy: a('numpy.svg'),
	Pandas: a('pandas.svg'),
	Csharp: a('csharp.svg'),
	TypeScript: a('ts.png'),
	ReactJs: a('react.svg'),
	Python: a('python.png'),
	NodeJs: a('node.png'),
	Svelte: a('svelte.png'),
	ExpressJs: a('express.png'),
	JavaScript: a('js.png'),
	Flutter: a('flutter.svg'),
	Java: a('java.png'),
	Android: a('android.png'),
	Firebase: a('firebase.png'),
	Sass: a('sass.png'),
	Unknown: a('no-img.svg'),
	Excel: a('excel.svg'),
	Tailwind: a('tailwind.svg'),
	HTML: a('html.svg'),
	Premiere: a('premiere.svg'),
	Photoshop: a('photoshop.svg'),
	CSS: a('css.svg'),
	AfterEffects: a('after-effects.svg'),
	Illustrator: a('illustrator.svg'),
	Vite: a('vite.png'),
	Vitest: a('vitest.svg'),
	Postcss: a('postcss.svg'),
	Aswanth: a('favicon.png'),
	SPA: a('SPA.svg'),
	NID: a('NID.svg'),
	JNV: a('JNV.svg'),
	Chatgpt: a('ChatGPT.png'),
	Tangible: a('Tangible.png'),
	DP: a('Kaavu.png'),
	DPR: a('Yin Yang.png'),
	DT: a('Tribute.png'),
	SCR: a('mancity.png'),
	Hunga: a('Hunga.png'),
	AswanthC: a('AswanthC.png'),
	Theyyam: a('Theyyam.png'),
	Trial: a('trial.webp'),
	Tangi: a('Tangi.png'),
	Tonga: a('HungaTonga.png'),
	Sacred: a('Sacred.png'),
	Aadhaar: a('Aadhaar.png')
};


export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
