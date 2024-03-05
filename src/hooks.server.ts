import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const theme = event.cookies.get('theme');
	if (theme) {
		event.locals.theme = theme;
	}

	return await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%theme%', String(theme))
	});
};
