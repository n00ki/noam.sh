import { redirect } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';

export const load = async ({ url }) => {
	if (projects.length === 0) {
		redirect(301, '/');
	}

	return {
		projects
	};
};
