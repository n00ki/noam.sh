/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Rubik', 'sans-serif']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['[data-theme=winter]'],
					primary: '#ffb6b9',
					secondary: '#bbded6',
					accent: '#61c0bf'
				},
				dark: {
					...require('daisyui/src/theming/themes')['[data-theme=night]'],
					'base-100': '#0f172a',
					'base-200': '#0e1426',
					'base-300': '#0c1222',
					primary: '#0ea6e9',
					secondary: '#6370f1',
					accent: '#db2776'
				}
			}
		],
		logs: false
	}
};
