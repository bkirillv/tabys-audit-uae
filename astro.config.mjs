// @ts-check
import { defineConfig } from 'astro/config';
import astroIntl from 'astro-intl';

// https://astro.build/config
export default defineConfig({
	integrations: [
		astroIntl({
			defaultLocale: 'en',
			locales: ['en', 'ru'],
		}),
	],
	site: 'https://bkirillv.github.io',
	base: '/tabys-audit-uae',
});
