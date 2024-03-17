<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import { Badge } from '$components/ui/badge';
	import fav1 from '$lib/assets/favicon1.png';

	// Icons
	import ExternalLink from 'svelte-radix/ExternalLink.svelte';

	export let project: Project;

	// const name = 'noam';
	// const project = {
	// 	icon: fav1,
	// 	title: 'Hayde!',
	// 	description: 'Hayde! is a platform for creating and sharing interactive stories.',
	// 	role: 'DEVELOPER',
	// 	tech: ['tech1', 'tech2', 'tech3'],
	// 	link: 'https://link.com'
	// };
</script>

<div
	class="card group z-10 cursor-pointer rounded-md bg-transparent p-4 text-foreground ring-border transition-all duration-300 ease-in-out hover:bg-accent hover:ring-1 hover:drop-shadow-lg"
>
	<div class="flex items-center justify-between">
		<div>
			<span class="inline-flex items-center gap-2">
				<h3
					class="transitionall text-lg font-bold leading-7 tracking-wider text-foreground duration-300 ease-in-out group-hover:text-foreground lg:text-foreground/90"
				>
					{project.title}
				</h3>
				<ExternalLink size={16} />
			</span>
			<h4 class="text-xs font-light uppercase tracking-widest text-muted-foreground">
				{project.role}
			</h4>
		</div>
		<div>
			<img
				src={fav1}
				alt="{project.title} icon"
				class="h-6 w-6 object-fill opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-90"
			/>
		</div>
	</div>
	<p class="py-2 text-sm font-extralight">{project.description}</p>
	{#if project.tags}
		<div class="flex flex-wrap gap-1 py-2">
			{#each project.tags as tag}
				<Badge variant="default">{tag}</Badge>
			{/each}
		</div>
	{/if}
</div>
