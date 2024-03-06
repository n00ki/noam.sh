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
	import ProjectsGrid from '$components/ProjectsGrid.svelte';

	let ready = false;

	onMount(() => (ready = true));
</script>

<div>
	{#if ready}
		<div class="grid h-screen w-full content-center justify-center">
			<h1 transition:fly={{ y: 15 }} class="text-3xl font-semibold">Noam Shemesh</h1>
			<h3 transition:fly={{ y: 15, delay: 100 }} class="py-1 text-lg font-thin text-foreground/80">
				Life Enthusiast on an Entrepreneurial Journey
			</h3>
			<p
				transition:fly={{ y: 15, delay: 200 }}
				class="text-sm font-extralight tracking-tight text-muted-foreground"
			>
				Crafting Web Experiences for fellow Creatives and Makers
			</p>

			<nav transition:fly={{ y: 15, delay: 300 }} class="my-12 flex flex-col gap-2">
				<a href="#projects" class="group inline-flex items-center gap-2">
					<div
						class="h-[2px] w-8 bg-primary transition-all duration-300 ease-in-out group-hover:w-12"
					/>
					<span
						class="text-base font-medium tracking-wide transition-all duration-300 ease-in-out group-hover:tracking-wider"
						>PROJECTS</span
					>
				</a>

				<a href="#blog" class="group inline-flex items-center gap-2">
					<div
						class="h-[2px] w-8 bg-primary transition-all duration-300 ease-in-out group-hover:w-12"
					/>
					<span
						class="text-base font-medium tracking-wide transition-all duration-300 ease-in-out group-hover:tracking-wider"
						>BLOG</span
					>
				</a>
			</nav>

			<div transition:fade={{ delay: 150 }}>
				<span class="inline-flex w-full space-x-4 text-2xl text-muted-foreground/70">
					<a
						href="mailto:noams@hey.com"
						class="transition-colors duration-300 ease-in-out hover:text-muted-foreground"
					>
						<EnvelopeClosed class="size-4" />
					</a>
					<a
						rel="noreferrer"
						href="https://www.linkedin.com/in/noam-shemesh-a57931186/"
						target="_blank"
						class="transition-colors duration-300 ease-in-out hover:text-muted-foreground"
					>
						<GithubLogo class="size-4" />
					</a>
					<a
						rel="noreferrer"
						href="https://twitter.com/noam__shemesh"
						target="_blank"
						class="transition-colors duration-300 ease-in-out hover:text-muted-foreground"
					>
						<TwitterLogo class="size-4" />
					</a>
					<a
						rel="noreferrer"
						href="https://www.instagram.com/noamshemesh/"
						target="_blank"
						class="transition-colors duration-300 ease-in-out hover:text-muted-foreground"
					>
						<LinkedinLogo class="size-4" />
					</a>
					<a
						rel="noreferrer"
						href="https://github.com/n00ki"
						target="_blank"
						class="transition-colors duration-300 ease-in-out hover:text-muted-foreground"
					>
						<InstagramLogo class="size-4" />
					</a>
				</span>
			</div>
		</div>

		<div id="projects" class="min-h-screen">
			<div class="flex w-full justify-center py-8">
				<Button variant="ghost" size="icon" href="#" class="rounded-full">
					<ArrowUp class="size-6 text-secondary-foreground" />
				</Button>
			</div>
			<ProjectsGrid />
		</div>
	{/if}
</div>

<div class="fixed bottom-0 left-0">
	<Marquee />
</div>
