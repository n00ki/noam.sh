<script lang="ts">
	// Env Variables
	import { PUBLIC_BASE_URL } from '$env/static/public';

	export let title: string;
	export let description: string;
	export let image: string;
	export let url: string;

	const metaWide =
		'https://res.cloudinary.com/nshemesh/image/upload/v1710746827/noam.sh/meta_wide.png';
	const metaSquare =
		'https://res.cloudinary.com/nshemesh/image/upload/v1710746830/noam.sh/meta_square.png';

	$: title = title ? `${title} | Noam Shemesh` : 'Noam Shemesh';
	$: description = description ?? 'Life Enthusiast on an Entrepreneurial Journey';
	$: image =
		image ?? 'https://res.cloudinary.com/nshemesh/image/upload/v1636022984/noam.sh/noamshemesh.png';
	$: url = url ?? PUBLIC_BASE_URL;
</script>

<svelte:head>
	<!-- Primary tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="image" content={metaWide} />
	<meta name="robots" content="index, follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={metaSquare} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={metaWide} />
</svelte:head>
