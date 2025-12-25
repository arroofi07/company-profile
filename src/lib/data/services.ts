import type { Service } from '$lib/types';

export const services: Service[] = [
	{
		id: 'web-development',
		title: 'Web Development',
		description: 'Website custom dengan teknologi modern untuk performa optimal dan pengalaman pengguna yang luar biasa.',
		icon: 'code',
		features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern Tech Stack']
	},
	{
		id: 'web-applications',
		title: 'Web Applications',
		description: 'Aplikasi web full-stack yang scalable dan dapat berkembang sesuai kebutuhan bisnis Anda.',
		icon: 'layers',
		features: ['SPA/PWA', 'Real-time Features', 'Cloud Deployment', 'API Integration']
	},
	{
		id: 'ecommerce',
		title: 'E-Commerce',
		description: 'Toko online yang mengkonversi pengunjung menjadi pelanggan dengan fitur lengkap.',
		icon: 'shopping-cart',
		features: ['Payment Gateway', 'Inventory System', 'Analytics Dashboard', 'Multi-platform']
	},
	{
		id: 'ui-ux-design',
		title: 'UI/UX Design',
		description: 'Desain yang user-centered untuk menciptakan pengalaman digital yang memorable.',
		icon: 'palette',
		features: ['Wireframing', 'Prototyping', 'User Research', 'Design System']
	}
];
