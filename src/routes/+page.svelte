<script lang="ts">
  // Utils
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';

  // Components
  import Marquee from '$components/Marquee.svelte';
  import Grid from '$components/project/Grid.svelte';

  // Icons
  import {
    EnvelopeClosed,
    GithubLogo,
    LinkedinLogo,
    InstagramLogo,
    ArrowUp,
    ExternalLink
  } from 'svelte-radix';
  import BlueskyLogo from '$lib/assets/icons/BlueskyLogo.svelte';

  let { data } = $props();

  let ready = $state(false);
  let isHeroMinified = $state(false);

  function handleHeroSectionEnter() {
    isHeroMinified = false;
  }

  function handleHeroSectionLeave() {
    isHeroMinified = true;
  }

  onMount(() => (ready = true));
</script>

<div>
  {#if ready}
    {#if isHeroMinified}
      <section
        transition:fly={{ x: -100, duration: 500 }}
        class="bg-background fixed top-0 left-0 z-50 w-full p-4"
      >
        <button
          class="hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-9 items-center justify-center rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap focus-visible:ring-1 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        >
          <a href="/" class="inline-flex items-center justify-center">
            <ArrowUp class="text-secondary-foreground size-5" />
            <h1 transition:fly={{ y: 15 }} class="text-lg font-semibold">NS</h1>
          </a>
        </button>
      </section>
    {/if}

    <div
      use:inview={{ rootMargin: '-50%' }}
      oninview_enter={handleHeroSectionEnter}
      oninview_leave={handleHeroSectionLeave}
      class="grid h-screen w-full content-center justify-center"
    >
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
          ></div>
          <span
            class="text-base font-medium tracking-wide transition-all duration-300 ease-in-out group-hover:tracking-wider"
            >PROJECTS</span
          >
        </a>

        <a href="https://noams.blog" target="_blank" class="group inline-flex items-center gap-2">
          <div
            class="bg-primary h-[2px] w-8 transition-all duration-300 ease-in-out group-hover:w-12"
          ></div>
          <span
            class="text-base font-medium tracking-wide transition-all duration-300 ease-in-out group-hover:tracking-wider"
          >
            BLOG
          </span>
          <ExternalLink size="16" />
        </a>
      </nav>

      <div transition:fade={{ delay: 150 }}>
        <span class="text-muted-foreground/70 inline-flex w-full space-x-4 text-2xl">
          <a
            href="mailto:noams@hey.com"
            class="hover:text-muted-foreground transition-colors duration-300 ease-in-out"
          >
            <EnvelopeClosed class="size-5" />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/n00ki"
            target="_blank"
            class="hover:text-muted-foreground transition-colors duration-300 ease-in-out"
          >
            <GithubLogo class="size-5" />
          </a>
          <a
            rel="noreferrer"
            href="https://bsky.app/profile/noam.sh"
            target="_blank"
            class="hover:text-muted-foreground transition-colors duration-300 ease-in-out"
          >
            <BlueskyLogo />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/noam-shemesh-a57931186/"
            target="_blank"
            class="hover:text-muted-foreground transition-colors duration-300 ease-in-out"
          >
            <LinkedinLogo class="size-5" />
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/noamshemesh/"
            target="_blank"
            class="hover:text-muted-foreground transition-colors duration-300 ease-in-out"
          >
            <InstagramLogo class="size-5" />
          </a>
        </span>
      </div>
    </div>

    <div id="projects" class="min-h-screen pt-16 md:pt-24">
      <Grid projects={data.projects} />
    </div>
  {/if}
</div>

<div class="absolute bottom-0 left-0 hidden w-full md:block">
  <Marquee />
</div>
