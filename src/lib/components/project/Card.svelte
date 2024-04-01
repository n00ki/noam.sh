<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import { Badge } from '$components/ui/badge';

	// Icons
	import ExternalLink from 'svelte-radix/ExternalLink.svelte';
	import MusicalNote from '$lib/assets/icons/MusicalNote.svelte';
	import CodeBracket from '$lib/assets/icons/CodeBracket.svelte';
	import Users from '$lib/assets/icons/Users.svelte';

	export let project: Project;
</script>

<a href={project.link ?? '#projects'} target={project.link ? '_blank' : '_self'}>
	<div
		class="card group z-10 rounded-md bg-transparent p-4 text-foreground ring-border transition-all duration-300 ease-in-out md:h-40 {project.link
			? 'cursor-pointer'
			: 'cursor-default'} hover:bg-accent hover:ring-1 hover:drop-shadow-lg"
	>
		<div class="flex items-center justify-between">
			<div>
				<span class="inline-flex items-center gap-2">
					<h3
						class="transitionall text-lg font-bold leading-7 tracking-wider text-foreground duration-300 ease-in-out group-hover:text-foreground lg:text-foreground/90"
					>
						{project.title}
					</h3>
					{#if project.link}
						<ExternalLink size={16} />
					{/if}
				</span>
				<span class="flex items-center gap-2">
					{#if project.type === 'dev'}
						<CodeBracket />
					{/if}
					{#if project.type === 'music'}
						<MusicalNote />
					{/if}
					{#if project.type === 'community'}
						<Users />
					{/if}
					<h4 class="text-xs font-light uppercase tracking-widest text-muted-foreground">
						{project.role}
					</h4>
				</span>
			</div>
			<div class="p-0.5">
				<img
					src={project.icon}
					alt="{project.title} icon"
					class="size-6 rounded-lg opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-90"
				/>
			</div>
		</div>
		<p class="py-2 text-sm font-extralight">{project.description}</p>
		<!-- {#if project.tags}
			<div class="flex flex-wrap gap-1 py-2">
				{#each project.tags as tag}
					<Badge variant="default">{tag}</Badge>
				{/each}
			</div>
		{/if} -->
	</div>
</a>
