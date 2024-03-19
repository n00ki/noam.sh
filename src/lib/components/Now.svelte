<script lang="ts">
	import { nowItems } from '$lib/data/now';
</script>

<ul class="flex w-full flex-col gap-2 text-center">
	{#each nowItems as item}
		<li>
			<span
				class="cursor-default text-base font-medium tracking-wide transition-all duration-300 ease-in-out hover:font-semibold hover:tracking-wider"
				>{item}</span
			>
		</li>
	{/each}
</ul>
