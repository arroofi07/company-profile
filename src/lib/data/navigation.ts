import type { NavItem, SocialLink } from '$lib/types';

export const navItems: NavItem[] = [
	{ label: 'Beranda', href: '#hero' },
	{ label: 'Layanan', href: '#services' },
	{ label: 'Portfolio', href: '#portfolio' },
	{ label: 'Proses', href: '#process' },
	{ label: 'Harga', href: '#pricing' },
	{ label: 'FAQ', href: '#faq' },
	{ label: 'Kontak', href: '#contact' }
];

export const socialLinks: SocialLink[] = [
	{ platform: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
	{ platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
	{ platform: 'GitHub', url: 'https://github.com', icon: 'github' },
	{ platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' }
];

export const companyInfo = {
	name: 'WebDev Studio',
	tagline: 'Membangun Pengalaman Digital yang Luar Biasa',
	email: 'hello@webdevstudio.com',
	phone: '+62 812 3456 7890',
	address: 'Jakarta, Indonesia'
};
