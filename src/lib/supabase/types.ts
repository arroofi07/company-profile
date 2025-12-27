export interface Database {
	public: {
		Tables: {
			portfolio_projects: {
				Row: {
					id: string;
					created_at: string;
					updated_at: string;
					slug: string;
					image_url: string | null;
					tags: string[];
					link: string | null;
					featured: boolean;
					published: boolean;
					sort_order: number;
					title_id: string;
					title_en: string;
					description_id: string;
					description_en: string;
				};
				Insert: {
					id?: string;
					created_at?: string;
					updated_at?: string;
					slug: string;
					image_url?: string | null;
					tags?: string[];
					link?: string | null;
					featured?: boolean;
					published?: boolean;
					sort_order?: number;
					title_id: string;
					title_en: string;
					description_id: string;
					description_en: string;
				};
				Update: {
					id?: string;
					created_at?: string;
					updated_at?: string;
					slug?: string;
					image_url?: string | null;
					tags?: string[];
					link?: string | null;
					featured?: boolean;
					published?: boolean;
					sort_order?: number;
					title_id?: string;
					title_en?: string;
					description_id?: string;
					description_en?: string;
				};
			};
		};
	};
}

export type PortfolioProject = Database['public']['Tables']['portfolio_projects']['Row'];
export type PortfolioProjectInsert = Database['public']['Tables']['portfolio_projects']['Insert'];
export type PortfolioProjectUpdate = Database['public']['Tables']['portfolio_projects']['Update'];
