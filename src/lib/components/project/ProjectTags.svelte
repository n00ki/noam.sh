<script lang="ts">
	// Props
	export let tags: string[];

	let tagColorClass = function (tag: string) {
		switch (tag) {
			case 'ruby':
			case 'svelte':
			case 'sveltekit':
				return 'bg-red-400';
			case 'rails':
			case 'AI':
				return 'bg-pink-400';
			case 'javascript':
			case 'sidekiq':
			case 'ableton live':
				return 'bg-yellow-400';
			case 'typescript':
			case 'stimulus':
			case 'studio one':
				return 'bg-blue-400';
			case 'render':
			case 'supabase':
			case 'cloudinary':
				return 'bg-green-400';
			case 'MySQL':
			case 'heroku':
				return 'bg-indigo-400';
			case 'PostgreSQL':
			case 'figma':
				return 'bg-purple-400';
			default:
				return 'bg-gray-200';
		}
	};
</script>

{#if tags}
	<p class="text-gray-900">
		{#each tags as tag}
			<span
				class="m-1 ml-0 inline-flex items-center rounded px-2 py-1 text-xs font-medium lowercase {tagColorClass(
					tag
				)}"
			>
				{tag}
			</span>
		{/each}
	</p>
{/if}
