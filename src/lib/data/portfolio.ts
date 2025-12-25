import type { PortfolioProject } from '$lib/types';

export const portfolioProjects: PortfolioProject[] = [
	{
		id: 'ecommerce-fashion',
		title: 'Fashion Store',
		description: 'Platform e-commerce modern untuk brand fashion dengan fitur AR try-on.',
		image: 'fashion',
		tags: ['E-Commerce', 'React', 'Node.js'],
		featured: true
	},
	{
		id: 'saas-dashboard',
		title: 'Analytics Dashboard',
		description: 'Dashboard analitik real-time untuk perusahaan SaaS dengan visualisasi data interaktif.',
		image: 'dashboard',
		tags: ['Web App', 'Svelte', 'D3.js'],
		featured: true
	},
	{
		id: 'restaurant-app',
		title: 'Restaurant Booking',
		description: 'Aplikasi reservasi restoran dengan sistem manajemen meja dan review.',
		image: 'restaurant',
		tags: ['Web App', 'Next.js', 'PostgreSQL'],
		featured: false
	},
	{
		id: 'healthcare-portal',
		title: 'Healthcare Portal',
		description: 'Portal kesehatan digital dengan fitur telemedicine dan rekam medis elektronik.',
		image: 'healthcare',
		tags: ['Web App', 'Vue.js', 'Python'],
		featured: true
	},
	{
		id: 'education-platform',
		title: 'E-Learning Platform',
		description: 'Platform pembelajaran online dengan fitur video streaming dan quiz interaktif.',
		image: 'education',
		tags: ['Web App', 'React', 'AWS'],
		featured: false
	},
	{
		id: 'fintech-app',
		title: 'FinTech App',
		description: 'Aplikasi keuangan digital dengan fitur pembayaran dan investasi.',
		image: 'fintech',
		tags: ['Mobile Web', 'Flutter', 'Firebase'],
		featured: false
	}
];
