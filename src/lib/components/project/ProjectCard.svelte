<script lang="ts">
	// Components
	import ProjectTags from '$lib/components/project/ProjectTags.svelte';
	import ProjectIcon from '$lib/components/project/ProjectIcon.svelte';
	import ProjectImage from '$lib/components/project/ProjectImage.svelte';

	// Props
	export let type: string;
	export let title: string;
	export let description: string;
	export let role: string;
	export let imageUrl: string;
	export let link: string;
	export let tags: string[];
</script>

<a href={link} rel="noreferrer" target="_blank">
	<div
		class="hover:scale-102 flex h-full transform cursor-pointer flex-col overflow-hidden rounded-md bg-base-100 shadow-sm shadow-accent transition duration-500 ease-in-out hover:-translate-y-1"
	>
		<span class="absolute right-0 top-0 z-50 rounded-bl-md bg-accent p-4 text-white">
			<ProjectIcon {type} />
		</span>

		<div class="relative h-64">
			<ProjectImage {imageUrl} imageAlt={title} />
		</div>

		<div class="flex flex-1 flex-col p-4">
			<h2 class="mb-2 text-xl tracking-wide">
				{title}
			</h2>
			<h4
				class="mb-2 bg-gradient-to-r from-pink-500 via-pink-700 to-indigo-500 bg-clip-text text-lg text-transparent"
			>
				{role}
			</h4>
			<p class="text-md mb-2 flex-1 text-gray-500">
				{description}
			</p>
			<ProjectTags {tags} />
		</div>
	</div>
</a>
