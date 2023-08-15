<script>
	// Components
	import ProjectCard from '$components/project/ProjectCard.svelte';

	// Props
	export let data;
</script>

<section class="mx-2 grid gap-4 pb-4 md:mx-0 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
	{#each data.projects as project}
		<ProjectCard
			type={project.type}
			title={project.title}
			description={project.description}
			role={project.role}
			imageUrl={project.imageUrl}
			link={project.link}
			tags={project.tags}
		/>
	{/each}
</section>
