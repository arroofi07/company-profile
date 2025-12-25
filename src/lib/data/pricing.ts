import type { PricingPlan } from '$lib/types';

export const pricingPlans: PricingPlan[] = [
	{
		id: 'starter',
		name: 'Starter',
		description: 'Cocok untuk bisnis kecil dan startup',
		price: 3000000,
		period: 'project',
		features: [
			'Website 5 halaman',
			'Responsive design',
			'Basic SEO setup',
			'Contact form',
			'2x revisi',
			'Support 30 hari'
		],
		cta: 'Pilih Paket'
	},
	{
		id: 'professional',
		name: 'Professional',
		description: 'Untuk bisnis yang ingin berkembang',
		price: 7500000,
		period: 'project',
		features: [
			'Website 10 halaman',
			'Responsive design',
			'Advanced SEO',
			'CMS integration',
			'Custom animations',
			'Revisi unlimited',
			'Support 90 hari',
			'Performance optimization'
		],
		highlighted: true,
		cta: 'Paling Populer'
	},
	{
		id: 'enterprise',
		name: 'Enterprise',
		description: 'Solusi custom untuk perusahaan besar',
		price: null,
		period: 'custom',
		features: [
			'Halaman unlimited',
			'Custom web application',
			'API integration',
			'Database design',
			'Dedicated PM',
			'Support 12 bulan',
			'Priority response',
			'SLA guarantee'
		],
		cta: 'Hubungi Kami'
	}
];
