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
	class="text-muted-foreground group -z-10 flex select-none overflow-x-scroll opacity-25 [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-100px),transparent_100%)] motion-safe:overflow-x-hidden"
>
	<div class="relative">
		<ul
			class="motion-safe:animate-marquee flex py-4 motion-safe:group-hover:[animation-play-state:paused]"
		>
			{#each words as word}
				<li
					class="hover:scale-85 hover:from-muted-foreground hover:to-accent-foreground whitespace-nowrap px-8 transition-all duration-500 ease-in-out hover:scale-125 hover:text-clip hover:bg-gradient-to-r hover:bg-clip-text hover:font-black hover:text-transparent"
				>
					{word}.
				</li>
			{/each}
		</ul>
		<ul
			aria-hidden="true"
			class="motion-safe:animate-marquee2 absolute top-0 flex py-4 group-hover:[animation-play-state:paused]"
		>
			{#each words as word}
				<li
					class="hover:from-muted-foreground hover:to-accent-foreground whitespace-nowrap px-8 transition-all duration-500 ease-in-out hover:scale-125 hover:text-clip hover:bg-gradient-to-r hover:bg-clip-text hover:font-black hover:text-transparent"
				>
					{word}.
				</li>
			{/each}
		</ul>
	</div>
</article>
