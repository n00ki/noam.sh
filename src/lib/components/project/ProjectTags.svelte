<script lang="ts">
	// Props
	export let tags: string[];

	let tagColorClass = function (tag: string) {
		switch (tag) {
			case 'ruby':
			case 'svelte':
				return 'bg-red-400';
			case 'rails':
				return 'bg-pink-400';
			case 'javascript':
			case 'sidekiq':
			case 'ableton live':
				return 'bg-yellow-400';
			case 'stimulus':
			case 'studio one':
				return 'bg-blue-400';
			case 'render':
			case 'supabase':
			case 'cloudinary':
				return 'bg-green-400';
			case 'heroku':
				return 'bg-indigo-400';
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
