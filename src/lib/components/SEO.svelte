<script lang="ts">
	// Env Variables
	import { PUBLIC_BASE_URL } from '$env/static/public';

	// Assets
	import meta_image from '$lib/assets/meta.png';

	export let title: string;
	export let description: string;
	export let image: string;
	export let url: string;

	$: title = title ? `${title} | Noam Shemesh` : 'Noam Shemesh';
	$: description =
		description ?? 'Music Producer, Web Developer & Life Enthusiast based in Tel Aviv';
	$: image =
		image ??
		'https://res.cloudinary.com/nshemesh/image/upload/v1636022984/noamshemesh.com/noamshemesh.png';
	$: url = url ?? PUBLIC_BASE_URL;
</script>

<svelte:head>
	<!-- Primary tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="image" content={image} />
	<meta name="robots" content="index, follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
</svelte:head>
