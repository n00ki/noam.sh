<script lang="ts">
	import Card from '$components/Card.svelte';
	import Marquee from '$components/Marquee.svelte';
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
	import { fade, fly } from 'svelte/transition';

	let ready = false;

	onMount(() => (ready = true));
</script>

<div class="flex min-h-screen w-full flex-1 justify-between gap-2 lg:px-16">
	{#if ready}
		<header
			class="flex flex-col justify-between lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:pb-4 lg:pt-16"
		>
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

			<div transition:fade={{ delay: 150 }}>
				<span class="inline-flex w-full space-x-4 text-2xl text-muted-foreground/70">
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

				<Marquee />
			</div>
		</header>
	{/if}

	<section class="flex scroll-mt-16 flex-col items-center gap-4 pt-24 lg:w-1/2 lg:py-16">
		<!-- <picture>
				 <source srcset={image_webp} type="image/webp" />
				 <img src={image_png} alt="Noam" class="p-8" />
			 </picture> -->
		{#each Array(10) as item}
			<!-- content here -->
			<Card />
		{/each}
	</section>
</div>
