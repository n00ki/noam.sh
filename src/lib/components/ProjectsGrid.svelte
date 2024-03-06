<script lang="ts">
	import { type Project } from '$lib/data/projects';
	import Card from '$lib/components/Card.svelte';

	export let projects: Project[];
</script>

<section class="grid grid-cols-2 gap-2">
	{#each projects as project}
		<Card {project} />
	{/each}
</section>
