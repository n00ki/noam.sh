<script lang="ts">
	// Utils
	import { onNavigate, disableScrollHandling } from '$app/navigation';

	// Stores
	import { dev } from '$app/environment';
	import { page } from '$app/stores';

	// Components
	import SEO from '$components/SEO.svelte';
	import ThemeSwitcher from '$components/ThemeSwitcher.svelte';

	// Styles
	import '../styles/app.css';

	// Disable scroll handling on same route navigation for theme switching
	onNavigate((navigation) => {
		const previousRoute = navigation.from?.url.pathname;
		const currentRoute = navigation.to?.url.pathname;

		if (previousRoute === currentRoute) {
			disableScrollHandling();
		}
	});
</script>

<svelte:head>
	{#if !dev}
		<script defer data-domain="noam.sh" src="https://plausible.io/js/script.js"></script>
	{/if}
</svelte:head>

<SEO {...$page.data.metadata} url={$page.url.href} />

<main
	class="container mx-auto min-h-screen bg-background font-primary text-foreground antialiased selection:bg-cyan-300 selection:text-cyan-900"
>
	<slot />

	<div class="fixed right-0 top-0 z-50">
		<ThemeSwitcher />
	</div>
</main>
