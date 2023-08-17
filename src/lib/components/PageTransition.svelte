<script>
	// Transitions
	import { fade } from 'svelte/transition';

	// Props
	export let refresh = '';
</script>

{#key refresh}
	<div class="flex flex-1" in:fade={{ duration: 250, delay: 250 }}>
		<slot />
	</div>
{/key}
