export const load = (async (event) => {
	const theme = event.locals.theme;
	return {
		theme: theme ?? null
	};
});
