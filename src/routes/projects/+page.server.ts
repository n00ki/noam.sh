import { redirect } from '@sveltejs/kit';

export const load = async ({ url }) => {
	const filter = url.searchParams.get('filter');
	const projects = import.meta.glob(`../../lib/data/projects/*.md`, { eager: true });
	const projects_list = Object.values(projects);

	const projects_metadata = projects_list.map((project: any) => {
		return project.metadata;
	});

	const filtered_projects = projects_metadata.filter((project) => {
		if (filter) {
			if (project.type === filter) {
				return project;
			}
		} else {
			return project;
		}
	});

	if (filtered_projects.length === 0) {
		throw redirect(301, '/projects');
	}

	return {
		metadata: {
			title: 'Projects'
		},
		projects: filtered_projects
	};
};
