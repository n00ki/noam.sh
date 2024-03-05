<script lang="ts">
	import { Button } from '$components/ui/button';
	import Card from '$components/Card.svelte';
	import Marquee from '$components/Marquee.svelte';
	import {
		EnvelopeClosed,
		GithubLogo,
		TwitterLogo,
		LinkedinLogo,
		InstagramLogo,
		ArrowUp
	} from 'radix-icons-svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let ready = false;

	onMount(() => (ready = true));
</script>

<div>
	{#if ready}
		<div class="grid h-screen w-full content-center justify-center">
			<h1 transition:fly={{ y: 15 }} class="text-3xl font-semibold">Noam Shemesh</h1>
			<h3 transition:fly={{ y: 15, delay: 100 }} class="text-foreground/80 py-1 text-lg font-thin">
				Life Enthusiast on an Entrepreneurial Journey
			</h3>
			<p
				transition:fly={{ y: 15, delay: 200 }}
				class="text-muted-foreground text-sm font-extralight tracking-tight"
			>
				Crafting Web Experiences for fellow Creatives and Makers
			</p>

			<nav transition:fly={{ y: 15, delay: 300 }} class="my-12 flex flex-col gap-2">
				<a href="#projects" class="group inline-flex items-center gap-2">
					<div
						class="bg-primary h-[2px] w-8 transition-all duration-300 ease-in-out group-hover:w-12"
					/>
					<span
						class="text-base font-medium tracking-wide transition-all duration-300 ease-in-out group-hover:tracking-wider"
						>PROJECTS</span
					>
				</a>

				<a href="#blog" class="group inline-flex items-center gap-2">
					<div
						class="bg-primary h-[2px] w-8 transition-all duration-300 ease-in-out group-hover:w-12"
					/>
					<span
						class="text-base font-medium tracking-wide transition-all duration-300 ease-in-out group-hover:tracking-wider"
						>BLOG</span
					>
				</a>
			</nav>

			<div transition:fade={{ delay: 150 }}>
				<span class="text-muted-foreground/70 inline-flex w-full space-x-4 text-2xl">
					<a
						href="mailto:noams@hey.com"
						class="hover:text-muted-foreground transition-colors duration-300 ease-in-out"
					>
						<EnvelopeClosed class="size-4" />
					</a>
					<a
						rel="noreferrer"
						href="https://www.linkedin.com/in/noam-shemesh-a57931186/"
						target="_blank"
						class="hover:text-muted-foreground transition-colors duration-300 ease-in-out"
					>
						<GithubLogo class="size-4" />
					</a>
					<a
						rel="noreferrer"
						href="https://twitter.com/noam__shemesh"
						target="_blank"
						class="hover:text-muted-foreground transition-colors duration-300 ease-in-out"
					>
						<TwitterLogo class="size-4" />
					</a>
					<a
						rel="noreferrer"
						href="https://www.instagram.com/noamshemesh/"
						target="_blank"
						class="hover:text-muted-foreground transition-colors duration-300 ease-in-out"
					>
						<LinkedinLogo class="size-4" />
					</a>
					<a
						rel="noreferrer"
						href="https://github.com/n00ki"
						target="_blank"
						class="hover:text-muted-foreground transition-colors duration-300 ease-in-out"
					>
						<InstagramLogo class="size-4" />
					</a>
				</span>
			</div>
		</div>

		<div id="projects" class="w-full text-center">
			<div class="flex w-full justify-center py-8">
				<Button variant="ghost" size="icon" href="#" class="rounded-full">
					<ArrowUp class="text-secondary-foreground size-6" />
				</Button>
			</div>
			<section class="mx-auto grid grid-cols-2 content-center">
				{#each Array(10) as item}
					<Card />
				{/each}
			</section>
		</div>
	{/if}
</div>

<div class="fixed bottom-0 left-0">
	<Marquee />
</div>
