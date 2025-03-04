<script lang="ts">
  import { type Project } from '$lib/data/projects';
  import Card from '$components/project/Card.svelte';

  interface Props {
    projects: Project[];
  }

  let { projects }: Props = $props();
</script>

<section class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4">
  {#each projects as project (project.title)}
    <Card {project} />
  {/each}
</section>
