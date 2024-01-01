<script lang="ts">
	// Stores
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	// Components
	import SEO from '$components/SEO.svelte';
	import Navbar from '$components/Navbar.svelte';
	import { Toaster } from 'svelte-french-toast';
	import ThemeSwitcher from '$components/ThemeSwitcher.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';

	// Styles
	import '../styles/app.css';

	import * as Fathom from 'fathom-client';

	if (browser) {
		Fathom.load('CSZUFTWO');
	}

	$: $page.url.pathname, browser && Fathom.trackPageview();
</script>

<SEO {...$page.data.metadata} url={$page.url.href} />

<Toaster />

<main class="container mx-auto flex min-h-screen font-primary">
	<PageTransition refresh={$page.url.pathname}>
		<slot />
	</PageTransition>

	<div class="fixed bottom-5 right-0">
		<ThemeSwitcher />
	</div>
</main>
