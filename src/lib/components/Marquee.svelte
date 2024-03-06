<script lang="ts">
	const words = [
		'creativity',
		'music',
		'code',
		'learning',
		'design',
		'art',
		'deep thinking',
		'technology',
		'productivity',
		'identity',
		'writing',
		'community',
		'reading',
		'growth',
		'business'
	];
</script>

<article
	class="group -z-10 flex select-none overflow-x-scroll text-muted-foreground opacity-25 [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-100px),transparent_100%)] motion-safe:overflow-x-hidden"
>
	<div class="relative">
		<ul
			class="flex py-4 motion-safe:animate-marquee motion-safe:group-hover:[animation-play-state:paused]"
		>
			{#each words as word}
				<li
					class="whitespace-nowrap px-8 transition-all duration-500 ease-in-out hover:scale-125 hover:text-clip hover:bg-gradient-to-r hover:from-muted-foreground hover:to-accent-foreground hover:bg-clip-text hover:font-black hover:text-transparent"
				>
					{word}.
				</li>
			{/each}
		</ul>
		<ul
			aria-hidden="true"
			class="absolute top-0 flex py-4 group-hover:[animation-play-state:paused] motion-safe:animate-marquee2"
		>
			{#each words as word}
				<li
					class="whitespace-nowrap px-8 transition-all duration-500 ease-in-out hover:scale-125 hover:text-clip hover:bg-gradient-to-r hover:from-muted-foreground hover:to-accent-foreground hover:bg-clip-text hover:font-black hover:text-transparent"
				>
					{word}.
				</li>
			{/each}
		</ul>
	</div>
</article>
