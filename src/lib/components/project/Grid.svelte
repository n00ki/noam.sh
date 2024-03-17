<script lang="ts">
	import { type Project } from '$lib/data/projects';
	import Card from '$components/project/Card.svelte';

	export let projects: Project[];
</script>

<section class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2">
	{#each projects as project}
		<Card {project} />
	{/each}
</section>
