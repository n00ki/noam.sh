<script lang="ts">
	// Utils
	import { onMount } from 'svelte';
	import { onNavigate, disableScrollHandling } from '$app/navigation';

	// Stores
	import { page } from '$app/stores';

	// Components
	import SEO from '$components/SEO.svelte';
	import ThemeSwitcher from '$components/ThemeSwitcher.svelte';

	// Styles
	import '../styles/app.css';

	import * as Fathom from 'fathom-client';

	onMount(() => {
		Fathom.load('CSZUFTWO');
	});

	// Disable scroll handling on same route navigation for theme switching
	onNavigate((navigation) => {
		const previousRoute = navigation.from?.url.pathname;
		const currentRoute = navigation.to?.url.pathname;

		if (previousRoute === currentRoute) {
			disableScrollHandling();
		}
	});
</script>

<SEO {...$page.data.metadata} url={$page.url.href} />

<main
	class="container mx-auto min-h-screen bg-background font-primary text-foreground antialiased selection:bg-cyan-300 selection:text-cyan-900"
>
	<slot />

	<div class="fixed right-5 top-5 z-50">
		<ThemeSwitcher />
	</div>
</main>
