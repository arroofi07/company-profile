import type { PageServerLoad } from './$types';
import { getPortfolioById } from '$lib/services/portfolio';

export const load: PageServerLoad = async ({ params, locals }) => {
	try {
		const portfolio = await getPortfolioById(locals.supabase, params.id);
		return { portfolio };
	} catch (error) {
		console.error('Error loading portfolio for preview:', error);
		return { portfolio: null };
	}
};
