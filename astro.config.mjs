// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://blackswordstudio.github.io/',
    i18n: {
        locales: [ 'en-US','zh-CN'],
        defaultLocale: 'en-US',
    },
});
