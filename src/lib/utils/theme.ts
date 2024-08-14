import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

const userTheme = browser && (localStorage.getItem('theme') as Theme);
const browserThemePreference =
	browser && window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: ('light' as Theme);
export const theme = writable<Theme>(userTheme || browserThemePreference);

export function toggleTheme() {
	theme.update((current) => {
		const newTheme = current === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('class', newTheme);
		localStorage.setItem('theme', newTheme);
		return newTheme;
	});
}

export function setTheme(newTheme: Theme) {
	theme.set(newTheme);
}
