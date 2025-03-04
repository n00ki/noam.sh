<script lang="ts">
  // Utils
  import { ModeWatcher } from 'mode-watcher';

  // Stores
  import { dev } from '$app/environment';
  import { page } from '$app/stores';

  // Components
  import SEO from '$components/SEO.svelte';
  import ThemeSwitcher from '$components/ThemeSwitcher.svelte';

  // Styles
  import '../styles/app.css';

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  {#if !dev}
    <script defer data-domain="noam.sh" src="https://plausible.io/js/script.js"></script>
  {/if}
</svelte:head>

<SEO {...$page.data.metadata} url={$page.url.href} />

<ModeWatcher modeStorageKey="mode" themeStorageKey="theme" disableTransitions={false} />

<main class="container mx-auto min-h-screen selection:bg-cyan-300 selection:text-cyan-900">
  {@render children?.()}

  <div class="fixed right-0 top-0 z-50">
    <ThemeSwitcher />
  </div>
</main>
