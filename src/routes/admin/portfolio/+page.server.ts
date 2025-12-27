import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { getPortfolios, deletePortfolio, deleteImage } from '$lib/services/portfolio';

export const load: PageServerLoad = async ({ locals }) => {
	try {
		const portfolios = await getPortfolios(locals.supabase);
		return { portfolios };
	} catch (error) {
		console.error('Error loading portfolios:', error);
		return { portfolios: [] };
	}
};

export const actions: Actions = {
	delete: async ({ request, locals }) => {
		const formData = await request.formData();
		const id = formData.get('id') as string;

		if (!id) {
			return fail(400, { error: 'ID tidak valid' });
		}

		try {
			// Get portfolio to check for image
			const { data: portfolio } = await locals.supabase
				.from('portfolio_projects')
				.select('image_url')
				.eq('id', id)
				.single<{ image_url: string | null }>();

			// Delete image from storage if exists
			if (portfolio?.image_url) {
				const path = (portfolio.image_url as string).split('/').pop();
				if (path) {
					try {
						await deleteImage(locals.supabase, path);
					} catch (e) {
						console.error('Error deleting image:', e);
					}
				}
			}

			// Delete portfolio
			await deletePortfolio(locals.supabase, id);

			return { success: true, message: 'Portfolio berhasil dihapus' };
		} catch (error) {
			console.error('Error deleting portfolio:', error);
			return fail(500, { error: 'Gagal menghapus portfolio' });
		}
	}
};
