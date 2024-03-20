import { dev } from '$app/environment';
import { logsnag } from '$lib/server/logsnag';

export const load = async (event) => {
	if (!dev) {
		const ip = event.getClientAddress();
		try {
			await logsnag.track({
				channel: 'visits',
				event: 'New Visit',
				description: `New visit from ${ip}`,
				icon: '👀',
				notify: true,
				tags: {
					ip: ip
				}
			});
		} catch (error) {
			console.log(error);
		}
	}

	const theme = event.locals.theme;
	return {
		theme: theme ?? null
	};
};
