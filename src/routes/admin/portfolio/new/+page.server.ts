import { fail, redirect, isRedirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { createPortfolio, uploadImage } from '$lib/services/portfolio';

function slugify(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();

		const title_id = formData.get('title_id') as string;
		const title_en = formData.get('title_en') as string;
		const description_id = formData.get('description_id') as string;
		const description_en = formData.get('description_en') as string;
		const tagsJson = formData.get('tags') as string;
		const link = formData.get('link') as string;
		const featured = formData.get('featured') === 'on';
		const published = formData.get('published') === 'on';

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

		const slug = slugify(title_en) + '-' + Date.now().toString(36);

		try {
			// Handle image upload if present
			let image_url: string | null = null;
			const imageFile = formData.get('image') as File;

			if (imageFile && imageFile.size > 0) {
				const ext = imageFile.name.split('.').pop();
				const path = `${slug}.${ext}`;
				image_url = await uploadImage(locals.supabase, imageFile, path);
			}

			// Create portfolio
			await createPortfolio(locals.supabase, {
				slug,
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
			console.error('Error creating portfolio:', error);
			return fail(500, { error: 'Gagal membuat portfolio' });
		}
	}
};
