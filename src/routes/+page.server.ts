import type { PageServerLoad } from './$types';
import { getPublishedPortfolios, transformToI18nFormat } from '$lib/services/portfolio';

export const load: PageServerLoad = async ({ locals, cookies }) => {
	try {
		const portfolios = await getPublishedPortfolios(locals.supabase);

		// Get current locale from cookie or default to 'id'
		const locale = (cookies.get('locale') as 'id' | 'en') || 'id';

		// Transform to i18n compatible format
		const portfolioItems = transformToI18nFormat(portfolios, locale);

		return {
			portfolioItems,
			portfoliosRaw: portfolios
		};
	} catch (error) {
		console.error('Error loading portfolios:', error);
		return {
			portfolioItems: [],
			portfoliosRaw: []
		};
	}
};
