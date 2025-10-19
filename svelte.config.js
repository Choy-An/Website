import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(), // default settings
        alias: {
            $lib: './src/lib',
            '@data': './src/lib/data',
            '@components': './src/lib/components',
            '@md': './src/lib/md',
            '@stores': './src/lib/stores',
            '@utils': './src/lib/utils'
        }
    }
};

export default config;
