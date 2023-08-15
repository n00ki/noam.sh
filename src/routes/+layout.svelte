<script lang="ts">
	// Stores
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { js_enabled } from '$lib/stores/js_status';

	// Components
	import SEO from '$components/SEO.svelte';
	import Navbar from '$components/Navbar.svelte';
	import { Toaster } from 'svelte-french-toast';
	import ThemeSwitcher from '$components/ThemeSwitcher.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';

	// Styles
	import '../styles/app.css';

	if (browser) {
		$js_enabled = true;
	}
</script>

<SEO {...$page.data.metadata} url={$page.url.href} />

<Toaster />

<div class="flex min-h-screen flex-col font-primary">
	<Navbar />

	<main class="container mx-auto flex flex-1 flex-col py-4">
		<PageTransition refresh={$page.url.pathname}>
			<slot />
		</PageTransition>

		<div class="fixed bottom-5 right-0">
			<ThemeSwitcher />
		</div>
	</main>
</div>
