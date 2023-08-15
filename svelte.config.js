import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svelte.md', '.md', '.svx'],

	kit: {
		adapter: adapter(),

		alias: {
			$components: 'src/lib/components',
			'$components/*': 'src/lib/components/*'
		}
	},

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svelte.md', '.md', '.svx'],
			smartypants: {
				dashes: 'oldschool'
			}
		})
	]
};

export default config;
