<script lang="ts">
  import type { Project } from '$lib/data/projects';

  // Icons
  import { SquareArrowOutUpRight } from '@lucide/svelte';
  import MusicalNote from '$lib/assets/icons/MusicalNote.svelte';
  import CodeBracket from '$lib/assets/icons/CodeBracket.svelte';
  import Users from '$lib/assets/icons/Users.svelte';

  interface Props {
    project: Project;
  }

  let { project }: Props = $props();
</script>

<a href={project.link ?? '#projects'} target={project.link ? '_blank' : '_self'}>
  <div
    class="card group text-foreground ring-border z-10 rounded-md bg-transparent p-4 transition-all duration-300 ease-in-out md:h-40 {project.link
      ? 'cursor-pointer'
      : 'cursor-default'} hover:bg-accent hover:ring-1 hover:drop-shadow-lg"
  >
    <div class="flex items-center justify-between">
      <div>
        <span class="inline-flex items-center gap-2">
          <h3
            class="transitionall text-foreground group-hover:text-foreground lg:text-foreground/90 text-lg leading-7 font-bold tracking-wider duration-300 ease-in-out"
          >
            {project.title}
          </h3>
          {#if project.link}
            <SquareArrowOutUpRight size="16" />
          {/if}
        </span>
        <span class="flex items-center gap-2">
          {#if project.type === 'dev'}
            <CodeBracket />
          {/if}
          {#if project.type === 'music'}
            <MusicalNote />
          {/if}
          {#if project.type === 'community'}
            <Users />
          {/if}
          <h4 class="text-muted-foreground text-xs font-light tracking-widest uppercase">
            {project.role}
          </h4>
        </span>
      </div>
      <div class="p-0.5">
        <img
          src={project.icon}
          alt="{project.title} icon"
          class="size-6 rounded-lg opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-90"
        />
      </div>
    </div>
    <p class="py-2 text-xs font-extralight">{project.description}</p>
  </div>
</a>
