<script lang="ts">
	// Stores
	import { page } from '$app/stores';

	// Components
	import SEO from '$components/SEO.svelte';
	import { Toaster } from 'svelte-french-toast';
	import ThemeSwitcher from '$components/ThemeSwitcher.svelte';

	// Styles
	import '../styles/app.css';

	import * as Fathom from 'fathom-client';
	import { onMount } from 'svelte';

	onMount(() => {
		Fathom.load('CSZUFTWO');
	});
</script>

<SEO {...$page.data.metadata} url={$page.url.href} />

<Toaster />

<main
	class="container mx-auto max-h-screen min-h-screen bg-background font-primary text-foreground antialiased selection:bg-cyan-300 selection:text-cyan-900"
>
	<slot />

	<div class="fixed right-5 top-5">
		<ThemeSwitcher />
	</div>
</main>
