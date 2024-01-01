<script lang="ts">
	import image_png from '$lib/assets/noam.png';
	import image_webp from '$lib/assets/noam.webp';
	import {
		MailIcon,
		LinkedinIcon,
		TwitterIcon,
		FacebookIcon,
		InstagramIcon,
		GithubIcon
	} from 'lucide-svelte';
</script>

<div class="mt-16 flex w-full flex-wrap justify-between">
	<section class="flex w-1/2 flex-col justify-between">
		<div>
			<h1 class="text-5xl font-extrabold">Noam Shemesh</h1>
			<h3 class="py-3 text-xl font-semibold">Life Enthusiast on an Entrepreneurial Journey</h3>
			<p class="text-md text-lg font-extralight">
				Web Developer & Music Producer. Crafting Web Experiences for Fellow Creatives and Makers.
			</p>

			<nav class="my-12 flex flex-col gap-2">
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
			<!-- <p class="text-sm leading-9">
				Pick my brain in the
				<a href="https://noams.blog">
					<button cl<div class="w-12 h-4 bg-slate-50"></div>ass="btn btn-accent btn-outline btn-sm">Blog</button>
					<a href="/projects">
				</a>, checkout my recent
					<button class="btn btn-accent btn-outline btn-sm">Projects</button>
				</a>
				, or simply say Hi :)
			</p> -->
		</div>

		<div>
			<span class="inline-flex w-full space-x-4 py-8 text-2xl">
				<a
					href="mailto:noams@hey.com"
					class="transition-colors duration-300 ease-in-out hover:text-accent-focus"
				>
					<MailIcon />
				</a>
				<a
					rel="noreferrer"
					href="https://www.linkedin.com/in/noam-shemesh-a57931186/"
					target="_blank"
					class="transition-colors duration-300 ease-in-out hover:text-accent-focus"
				>
					<LinkedinIcon />
				</a>
				<a
					rel="noreferrer"
					href="https://twitter.com/noam__shemesh"
					target="_blank"
					class="transition-colors duration-300 ease-in-out hover:text-accent-focus"
				>
					<TwitterIcon />
				</a>
				<a
					rel="noreferrer"
					href="https://www.instagram.com/noamshemesh/"
					target="_blank"
					class="transition-colors duration-300 ease-in-out hover:text-accent-focus"
				>
					<InstagramIcon />
				</a>
				<a
					rel="noreferrer"
					href="https://github.com/n00ki"
					target="_blank"
					class="transition-colors duration-300 ease-in-out hover:text-accent-focus"
				>
					<GithubIcon />
				</a>
			</span>
		</div>
	</section>

	<section class="flex w-1/2 items-center justify-center">
		<!-- <picture>
			<source srcset={image_webp} type="image/webp" />
			<img src={image_png} alt="Noam" class="p-8" />
		</picture> -->
	</section>
</div>
