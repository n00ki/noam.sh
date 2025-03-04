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
  id="marquee"
  aria-label="marquee"
  class="group text-muted-foreground -z-50 flex overflow-x-scroll opacity-25 select-none [mask-image:_linear-gradient(to_right,transparent_0,_black_200px,_black_calc(100%-200px),transparent_100%)] motion-safe:overflow-x-hidden"
>
  <div class="relative">
    <ul
      class="motion-safe:animate-marquee flex py-4 motion-safe:group-hover:[animation-play-state:paused]"
    >
      {#each words as word, i (`${word}-${i}`)}
        <li
          class="hover:from-muted-foreground hover:to-accent-foreground px-8 whitespace-nowrap transition-all duration-500 ease-in-out hover:scale-125 hover:bg-linear-to-r hover:bg-clip-text hover:font-black hover:text-clip hover:text-transparent"
        >
          {word}.
        </li>
      {/each}
    </ul>
    <ul
      aria-hidden="true"
      class="motion-safe:animate-marquee2 absolute top-0 flex py-4 group-hover:[animation-play-state:paused]"
    >
      {#each words as word, i (`${word}-${i}`)}
        <li
          class="hover:from-muted-foreground hover:to-accent-foreground px-8 whitespace-nowrap transition-all duration-500 ease-in-out hover:scale-125 hover:bg-linear-to-r hover:bg-clip-text hover:font-black hover:text-clip hover:text-transparent"
        >
          {word}.
        </li>
      {/each}
    </ul>
  </div>
</article>
