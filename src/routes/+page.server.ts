import { redirect } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';

// export const prerender = true;
// export const ssr = false;

export const load = async ({ url }) => {
	const filter = url.searchParams.get('filter');

	const filtered_projects = projects.filter((project) => {
		if (filter) {
			if (project.type === filter) {
				return project;
			}
		} else {
			return project;
		}
	});

	if (projects.length === 0) {
		redirect(301, '/projects');
	}

	return {
		projects: filtered_projects
	};
};
