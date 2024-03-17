import haydeFavicon from '$lib/assets/favicons/hayde.png';
import snippetryFavicon from '$lib/assets/favicons/snippetry.png';
import ksFavicon from '$lib/assets/favicons/ks.png';
import bokerFavicon from '$lib/assets/favicons/boker.png';
import personalWebsiteFavicon from '$lib/assets/favicons/noamshemesh.png';
import daliasFavicon from '$lib/assets/favicons/dalias.png';
import ninetyPercentFavicon from '$lib/assets/favicons/90.png';

export type Project = {
	title: string;
	description: string;
	icon: string;
	role: string;
	link?: string;
	type: string;
	tags?: string[];
};

export const projects: Project[] = [
	{
		title: 'Hayde!',
		description:
			'a nonprofit, community driven platform modestly aspiring to equip modern day independent musicians with a set of essential digital tools to support their music distribution and promotion journeys',
		icon: haydeFavicon,
		role: 'Developer',
		link: 'https://hayde.net',
		type: 'dev',
		tags: ['sveltekit', 'tailwindcss', 'vercel']
	},
	{
		title: 'Snippetry',
		description:
			"Snippetry is a platform that aims to make it easier for independent musicians to find and collaborate with other musicians. It's a place where musicians can share their music and find other musicians to collaborate with",
		icon: snippetryFavicon,
		role: 'Developer',
		link: 'https://snippetry.com',
		type: 'dev',
		tags: ['sveltekit', 'tailwindcss', 'supabase', 'cloudinary', 'vercel']
	},
	{
		title: 'Kickoff SvelteKit',
		description:
			'an open source template for kickstarting SvelteKit projects with pre-configured authentication out of the box and a few other goodies',
		icon: ksFavicon,
		role: 'Creator & Maintainer',
		link: 'https://github.com/n00ki/kickoff-sveltekit',
		type: 'dev',
		tags: ['sveltekit', 'tailwindcss', 'typescript', 'vercel']
	},
	{
		title: 'boker.app',
		description:
			'a platform that aims to make it easier for independent musicians to find and book gigs. It is a place where musicians can find venues and book gigs',
		icon: bokerFavicon,
		role: 'Developer',
		link: 'https://boker.app',
		type: 'dev',
		tags: ['sveltekit', 'tailwindcss', 'supabase', 'cloudinary', 'vercel']
	},
	{
		title: 'Personal Website',
		description:
			'An independent musician, songwriter, producer and a developer. I am passionate about creating music and building digital products',
		icon: personalWebsiteFavicon,
		role: 'Developer',
		link: 'https://noam.sh',
		type: 'dev',
		tags: ['web development', 'sveltekit', 'tailwindcss', 'supabase', 'cloudinary', 'vercel']
	},
	{
		title: "DALIA'S Collective",
		description:
			"DALIA'S Collective aimed to assist promising talents and bridge the gap between local musicians and relevant audiences, focusing on creating meaningful content and establishing creative performing environments",
		icon: daliasFavicon,
		role: 'Co-Founder & Member',
		type: 'non-curricular',
		tags: ['non curricular', 'community', 'music', 'events']
	},
	{
		title: '90%',
		description:
			'90% is a music project that I started with my friend, Eran. We write, produce and perform our own music',
		link: 'https://open.spotify.com/album/14Sknxi0kQfcaQwvThTVWP?si=HpvxpkFURM6hd74tRkKfbw',
		icon: ninetyPercentFavicon,
		role: 'Music Producer & Sound Engineer',
		type: 'non-curricular',
		tags: ['non curricular', 'music', 'events']
	}
];
