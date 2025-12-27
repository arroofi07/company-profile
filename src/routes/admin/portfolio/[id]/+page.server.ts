import { fail, redirect, isRedirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { getPortfolioById, updatePortfolio, uploadImage, deleteImage } from '$lib/services/portfolio';

export const load: PageServerLoad = async ({ params, locals }) => {
	try {
		const portfolio = await getPortfolioById(locals.supabase, params.id);
		return { portfolio };
	} catch (error) {
		console.error('Error loading portfolio:', error);
		return { portfolio: null };
	}
};

export const actions: Actions = {
	default: async ({ params, request, locals }) => {
		const formData = await request.formData();

		const title_id = formData.get('title_id') as string;
		const title_en = formData.get('title_en') as string;
		const description_id = formData.get('description_id') as string;
		const description_en = formData.get('description_en') as string;
		const tagsJson = formData.get('tags') as string;
		const link = formData.get('link') as string;
		const featured = formData.get('featured') === 'on';
		const published = formData.get('published') === 'on';
		const imageChanged = formData.get('imageChanged') === 'true';

		// Validation
		if (!title_id || !title_en || !description_id || !description_en) {
			return fail(400, { error: 'Semua field wajib harus diisi' });
		}

		let tags: string[] = [];
		try {
			tags = JSON.parse(tagsJson || '[]');
		} catch {
			tags = [];
		}

		try {
			// Get current portfolio
			const current = await getPortfolioById(locals.supabase, params.id);
			if (!current) {
				return fail(404, { error: 'Portfolio tidak ditemukan' });
			}

			let image_url = current.image_url;

			// Handle image change
			if (imageChanged) {
				const imageFile = formData.get('image') as File;

				// Delete old image if exists
				if (current.image_url) {
					const oldPath = current.image_url.split('/').pop();
					if (oldPath) {
						try {
							await deleteImage(locals.supabase, oldPath);
						} catch (e) {
							console.error('Error deleting old image:', e);
						}
					}
				}

				// Upload new image if provided
				if (imageFile && imageFile.size > 0) {
					const ext = imageFile.name.split('.').pop();
					const path = `${current.slug}.${ext}`;
					image_url = await uploadImage(locals.supabase, imageFile, path);
				} else {
					image_url = null;
				}
			}

			// Update portfolio
			await updatePortfolio(locals.supabase, params.id, {
				title_id,
				title_en,
				description_id,
				description_en,
				tags,
				link: link || null,
				featured,
				published,
				image_url
			});

			throw redirect(303, '/admin/portfolio');
		} catch (error) {
			if (isRedirect(error)) throw error;
			console.error('Error updating portfolio:', error);
			return fail(500, { error: 'Gagal memperbarui portfolio' });
		}
	}
};
