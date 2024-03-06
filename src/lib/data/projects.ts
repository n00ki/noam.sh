import fav1 from '$lib/assets/favicon1.png';

export type Project = {
	title: string;
	description: string;
	icon: string;
	role: string;
	imageUrl: string;
	link?: string;
	type: string;
	tags?: string[];
};

export const projects: Project[] = [
	{
		title: 'Hayde!',
		description:
			'a nonprofit, community driven platform modestly aspiring to equip modern day independent musicians with a set of essential digital tools to support their music creation, distribution & promotion journeys.',
		icon: fav1,
		role: 'Founder & Solo Developer',
		imageUrl:
			'https://res.cloudinary.com/nshemesh/image/upload/v1635935208/noamshemesh.com/hayde.png',
		link: 'https://hayde.net',
		type: 'dev',
		tags: ['sveltekit', 'tailwindcss', 'supabase', 'cloudinary', 'stripe', 'vercel']
	},
	{
		title: 'Noam Shemesh',
		description:
			'An independent musician, songwriter, producer and a solo developer. I am passionate about creating music and building digital products.',
		icon: fav1,
		role: 'Founder & Solo Developer',
		imageUrl:
			'https://res.cloudinary.com/nshemesh/image/upload/v1635935208/noamshemesh.com/noamshemesh.png',
		link: 'https://noamshemesh.com',
		type: 'dev',
		tags: ['sveltekit', 'tailwindcss', 'supabase', 'cloudinary', 'vercel']
	},
	{
		title: "DALIA'S COLLECTIVE",
		description:
			"DALIA'S Collective aimed to assist promising talents and bridge the gap between local musicians and relevant audiences, focusing on creating meaningful content and establishing creative performing environments.",
		icon: fav1,
		role: 'Co-Founder & Team Member',
		imageUrl:
			'https://res.cloudinary.com/nshemesh/image/upload/v1635947610/noamshemesh.com/dalias.png',
		type: 'non-curricular'
	}
];
