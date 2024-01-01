<script lang="ts">
	import image_png from '$lib/assets/noam.png';
	import image_webp from '$lib/assets/noam.webp';
	import {
		EnvelopeClosed,
		GithubLogo,
		TwitterLogo,
		LinkedinLogo,
		InstagramLogo
	} from 'radix-icons-svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let ready = false;

	onMount(() => (ready = true));

	const words = [
		'creativity',
		'music',
		'code',
		'learning',
		'design',
		'art',
		'thinking',
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

<div class="mt-16 grid w-full grid-cols-2 gap-2">
	{#if ready}
		<section class="flex flex-col justify-between">
			<div>
				<h1 transition:fly={{ y: 15 }} class="text-5xl font-extrabold">Noam Shemesh</h1>
				<h3
					transition:fly={{ y: 15, delay: 100 }}
					class="py-3 text-xl font-semibold text-foreground/80"
				>
					Life Enthusiast on an Entrepreneurial Journey
				</h3>
				<p
					transition:fly={{ y: 15, delay: 200 }}
					class="text-md text-lg font-extralight text-muted-foreground"
				>
					Web Developer & Music Producer. Crafting Web Experiences for Fellow Creatives and Makers.
				</p>

				<nav transition:fly={{ y: 15, delay: 300 }} class="my-12 flex flex-col gap-2">
					<a href="#projects" class="group inline-flex items-center gap-2">
						<div
							class="h-[2px] w-8 bg-primary transition-all duration-300 ease-in-out group-hover:w-16"
						/>
						<span
							class="text-lg font-medium tracking-wide transition-all duration-300 ease-in-out group-hover:tracking-wider"
							>PROJECTS</span
						>
					</a>

					<a href="#blog" class="group inline-flex items-center gap-2">
						<div
							class="h-[2px] w-8 bg-primary transition-all duration-300 ease-in-out group-hover:w-16"
						/>
						<span
							class="text-lg font-medium tracking-wide transition-all duration-300 ease-in-out group-hover:tracking-wider"
							>BLOG</span
						>
					</a>
				</nav>
			</div>

			<div>
				<span class="inline-flex w-full space-x-4 py-8 text-2xl text-muted-foreground/70">
					<a
						href="mailto:noams@hey.com"
						class="transition-colors duration-300 ease-in-out hover:text-muted-foreground"
					>
						<EnvelopeClosed class="h-6 w-6" />
					</a>
					<a
						rel="noreferrer"
						href="https://www.linkedin.com/in/noam-shemesh-a57931186/"
						target="_blank"
						class="transition-colors duration-300 ease-in-out hover:text-muted-foreground"
					>
						<GithubLogo class="h-6 w-6" />
					</a>
					<a
						rel="noreferrer"
						href="https://twitter.com/noam__shemesh"
						target="_blank"
						class="transition-colors duration-300 ease-in-out hover:text-muted-foreground"
					>
						<TwitterLogo class="h-6 w-6" />
					</a>
					<a
						rel="noreferrer"
						href="https://www.instagram.com/noamshemesh/"
						target="_blank"
						class="transition-colors duration-300 ease-in-out hover:text-muted-foreground"
					>
						<LinkedinLogo class="h-6 w-6" />
					</a>
					<a
						rel="noreferrer"
						href="https://github.com/n00ki"
						target="_blank"
						class="transition-colors duration-300 ease-in-out hover:text-muted-foreground"
					>
						<InstagramLogo class="h-6 w-6" />
					</a>
				</span>
			</div>
		</section>
	{/if}

	<section>
		<!-- <picture>
				 <source srcset={image_webp} type="image/webp" />
				 <img src={image_png} alt="Noam" class="p-8" />
			 </picture> -->

		<article
			class="whitespace-no-wrap group fixed bottom-0 right-0 flex -skew-y-6 select-none overflow-x-scroll text-muted-foreground opacity-25 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] motion-safe:overflow-x-hidden"
		>
			<div class="relative">
				<ul class="flex group-hover:[animation-play-state:paused] motion-safe:animate-marquee">
					{#each words as word}
						<li
							class="mx-6 whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-125 hover:text-clip hover:bg-gradient-to-r hover:from-muted-foreground hover:to-accent-foreground hover:bg-clip-text hover:font-black hover:text-transparent hover:shadow-md"
						>
							{word}.
						</li>
					{/each}
				</ul>
				<ul
					aria-hidden="true"
					class="absolute top-0 flex group-hover:[animation-play-state:paused] motion-safe:animate-marquee2"
				>
					{#each words as word}
						<li
							class="mx-6 whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-125 hover:text-clip hover:bg-gradient-to-r hover:from-muted-foreground hover:to-accent-foreground hover:bg-clip-text hover:font-black hover:text-transparent hover:shadow-md"
						>
							{word}.
						</li>
					{/each}
				</ul>
			</div>
		</article>
	</section>
</div>
