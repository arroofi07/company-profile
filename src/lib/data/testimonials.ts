import type { Testimonial } from '$lib/types';

export const testimonials: Testimonial[] = [
	{
		id: '1',
		name: 'Budi Santoso',
		role: 'CEO',
		company: 'TechStartup Indonesia',
		avatar: 'BS',
		content: 'Tim WebDev Studio sangat profesional dan responsif. Mereka berhasil mentransformasi ide kami menjadi platform yang luar biasa. Highly recommended!',
		rating: 5
	},
	{
		id: '2',
		name: 'Sarah Wijaya',
		role: 'Marketing Director',
		company: 'Fashion Brand Co.',
		avatar: 'SW',
		content: 'Website e-commerce yang mereka buat meningkatkan penjualan kami hingga 200%. Desainnya modern dan user-friendly. Terima kasih tim!',
		rating: 5
	},
	{
		id: '3',
		name: 'Ahmad Prasetyo',
		role: 'Founder',
		company: 'EduTech Platform',
		avatar: 'AP',
		content: 'Kerjasama yang sangat menyenangkan. Mereka mengerti kebutuhan kami dan memberikan solusi yang tepat. Support after-sales juga sangat baik.',
		rating: 5
	}
];
