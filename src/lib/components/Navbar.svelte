<script lang="ts">
	import { slide } from 'svelte/transition';

	// Icons
	import { MenuIcon, X } from 'lucide-svelte';

	let menu_state = false;

	const toggle_menu_state = (e: Event) => {
		if (e.type === 'focusout' && !menu_state) return;
		menu_state = !menu_state;
	};
</script>

<nav class="md:px-6">
	<div class="navbar p-1">
		<div class="flex-1 px-2 lg:flex-none">
			<a href="/" class="btn btn-ghost text-4xl font-extrabold normal-case">noam.</a>
		</div>
		<div class="flex flex-1 justify-end px-2">
			<div class="flex items-stretch">
				<button
					type="button"
					on:click={toggle_menu_state}
					tabindex="0"
					aria-haspopup="true"
					aria-expanded={menu_state}
					class="btn btn-square btn-ghost md:hidden {menu_state && 'bg-base-200'}"
				>
					{#if menu_state}
						<X />
					{:else}
						<MenuIcon />
					{/if}
				</button>

				<ul class="menu hidden px-1 md:menu-horizontal">
					<li>
						<a href="/projects">PROJECTS</a>
					</li>
					<li>
						<a href="https://noams.blog" target="_blank">BLOG</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	{#if menu_state}
		<ul
			transition:slide={{ duration: 100 }}
			class="mx-2 flex flex-col gap-1 rounded-2xl bg-base-200 p-2 md:hidden"
		>
			<li>
				<a href="/projects" class="btn btn-ghost btn-sm w-full" on:click={toggle_menu_state}
					>PROJECTS</a
				>
			</li>
			<li>
				<a
					href="https://noams.blog"
					target="_blank"
					class="btn btn-ghost btn-sm w-full"
					on:click={toggle_menu_state}>BLOG</a
				>
			</li>
		</ul>
	{/if}
</nav>
