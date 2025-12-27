import type { SupabaseClient } from '@supabase/supabase-js';
import type { PortfolioProject, PortfolioProjectInsert, PortfolioProjectUpdate } from '$lib/supabase/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnySupabaseClient = SupabaseClient<any>;

export async function getPortfolios(supabase: AnySupabaseClient): Promise<PortfolioProject[]> {
	const { data, error } = await supabase
		.from('portfolio_projects')
		.select('*')
		.order('sort_order', { ascending: true });

	if (error) throw error;
	return data || [];
}

export async function getPortfolioById(supabase: AnySupabaseClient, id: string): Promise<PortfolioProject | null> {
	const { data, error } = await supabase
		.from('portfolio_projects')
		.select('*')
		.eq('id', id)
		.single();

	if (error) throw error;
	return data;
}

export async function getPublishedPortfolios(supabase: AnySupabaseClient): Promise<PortfolioProject[]> {
	const { data, error } = await supabase
		.from('portfolio_projects')
		.select('*')
		.eq('published', true)
		.order('sort_order', { ascending: true });

	if (error) throw error;
	return data || [];
}

export async function createPortfolio(
	supabase: AnySupabaseClient,
	portfolio: PortfolioProjectInsert
): Promise<PortfolioProject> {
	const { data, error } = await supabase
		.from('portfolio_projects')
		.insert(portfolio)
		.select()
		.single();

	if (error) throw error;
	return data;
}

export async function updatePortfolio(
	supabase: AnySupabaseClient,
	id: string,
	portfolio: PortfolioProjectUpdate
): Promise<PortfolioProject> {
	const { data, error } = await supabase
		.from('portfolio_projects')
		.update(portfolio)
		.eq('id', id)
		.select()
		.single();

	if (error) throw error;
	return data;
}

export async function deletePortfolio(supabase: AnySupabaseClient, id: string): Promise<void> {
	const { error } = await supabase.from('portfolio_projects').delete().eq('id', id);

	if (error) throw error;
}

export async function uploadImage(
	supabase: AnySupabaseClient,
	file: File,
	path: string
): Promise<string> {
	const { data, error } = await supabase.storage
		.from('portfolio-images')
		.upload(path, file, { upsert: true });

	if (error) throw error;

	const { data: urlData } = supabase.storage.from('portfolio-images').getPublicUrl(data.path);

	return urlData.publicUrl;
}

export async function deleteImage(supabase: AnySupabaseClient, path: string): Promise<void> {
	const { error } = await supabase.storage.from('portfolio-images').remove([path]);

	if (error) throw error;
}

// Transform Supabase data to match i18n PortfolioProject format
export function transformToI18nFormat(
	projects: PortfolioProject[],
	locale: 'id' | 'en'
) {
	return projects.map((item) => ({
		id: item.slug,
		title: locale === 'id' ? item.title_id : item.title_en,
		description: locale === 'id' ? item.description_id : item.description_en,
		image: item.image_url || item.slug,
		tags: item.tags,
		link: item.link,
		featured: item.featured
	}));
}
