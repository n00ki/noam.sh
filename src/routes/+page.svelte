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

<div class="flex w-full flex-col-reverse px-2 lg:flex-row lg:justify-evenly 2xl:px-24">
	<section class="flex flex-1 flex-col justify-center text-center">
		<h1 class="pb-3 text-5xl font-extrabold sm:py-4 sm:text-5xl">Hi, I'm Noam! &#x1F44B</h1>
		<p class="text-md px-1 leading-7 sm:px-0 sm:leading-8 md:text-lg">
			Music Producer, Web Developer & Life Enthusiast based in Israel.
		</p>
		<p class="text-sm leading-9">
			Pick my brain in the
			<a href="https://noams.blog">
				<button class="btn btn-accent btn-outline btn-sm">Blog</button>
			</a>, checkout my recent
			<a href="/projects">
				<button class="btn btn-accent btn-outline btn-sm">Projects</button>
			</a>
			, or simply say Hi :)
		</p>

		<span class="inline-flex w-full justify-center space-x-4 py-8 text-2xl">
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
				href="https://www.facebook.com/noam.shemesh.526"
				target="_blank"
				class="transition-colors duration-300 ease-in-out hover:text-accent-focus"
			>
				<FacebookIcon />
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
	</section>

	<section class="flex flex-1 items-center justify-center">
		<picture>
			<source srcset={image_webp} type="image/webp" />
			<img src={image_png} alt="Noam" class="p-8" />
		</picture>
	</section>
</div>
