import { createSupabaseServerClient } from '$lib/supabase/server';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const supabase = createSupabaseServerClient(event.cookies);

	const {
		data: { session }
	} = await supabase.auth.getSession();

	event.locals.supabase = supabase;
	event.locals.session = session;

	// Protect admin routes (except login)
	if (event.url.pathname.startsWith('/admin') && !event.url.pathname.startsWith('/admin/login')) {
		if (!session) {
			throw redirect(303, '/admin/login');
		}
	}

	// Redirect logged-in users away from login page
	if (event.url.pathname === '/admin/login' && session) {
		throw redirect(303, '/admin/portfolio');
	}

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range' || name === 'x-supabase-api-version';
		}
	});
};
