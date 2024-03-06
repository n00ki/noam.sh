<script>
	import { Button } from '$lib/components/ui/button';
	import Card from '$lib/components/Card.svelte';
	import { ArrowUp } from 'radix-icons-svelte';
</script>

<section class="grid grid-cols-2 gap-2">
	{#each Array(10) as item}
		<Card />
	{/each}
</section>
