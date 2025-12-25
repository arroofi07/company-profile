export const id = {
	nav: {
		home: 'Beranda',
		services: 'Layanan',
		portfolio: 'Portfolio',
		process: 'Proses',
		pricing: 'Harga',
		faq: 'FAQ',
		contact: 'Kontak',
		cta: 'Hubungi Kami'
	},
	hero: {
		badge: 'Web Development',
		title1: 'Kami Membangun',
		titleHighlight: 'Pengalaman Digital',
		title2: 'yang Luar Biasa',
		subtitle:
			'Kami membantu mewujudkan website untuk berbagai kebutuhan—personal, komunitas, hingga profesional. kami siap mendampingi Anda dari awal hingga online',
		ctaPrimary: 'Order Sekarang',
		ctaSecondary: 'Lihat Portfolio',
		stats: {
			projects: 'Project Selesai',
			clients: 'Klien Puas',
			experience: 'Tahun Pengalaman',
			support: 'Support'
		}
	},
	services: {
		title: 'Layanan Kami',
		subtitle: 'Solusi digital komprehensif untuk mengembangkan bisnis Anda',
		items: [
			{
				id: 'web-development',
				title: 'Web Development',
				description:
					'Website custom dengan teknologi modern untuk performa optimal dan pengalaman pengguna yang luar biasa.',
				icon: 'code',
				features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern Tech Stack']
			},
			{
				id: 'web-applications',
				title: 'Web Applications',
				description:
					'Aplikasi web full-stack yang scalable dan dapat berkembang sesuai kebutuhan bisnis Anda.',
				icon: 'layers',
				features: ['SPA/PWA', 'Real-time Features', 'Cloud Deployment', 'API Integration']
			},
			{
				id: 'ecommerce',
				title: 'E-Commerce',
				description:
					'Toko online yang mengkonversi pengunjung menjadi pelanggan dengan fitur lengkap.',
				icon: 'shopping-cart',
				features: ['Payment Gateway', 'Inventory System', 'Analytics Dashboard', 'Multi-platform']
			},
			{
				id: 'ui-ux-design',
				title: 'UI/UX Design',
				description:
					'Desain yang user-centered untuk menciptakan pengalaman digital yang memorable.',
				icon: 'palette',
				features: ['Wireframing', 'Prototyping', 'User Research', 'Design System']
			}
		]
	},
	whyUs: {
		title: 'Mengapa Memilih Kami?',
		subtitle: 'Kami berkomitmen untuk memberikan hasil terbaik bagi setiap klien',
		features: [
			{
				icon: 'zap',
				title: 'Teknologi Terkini',
				description:
					'Kami menggunakan stack teknologi modern untuk hasil yang optimal dan future-proof.'
			},
			{
				icon: 'shield',
				title: 'Keamanan Terjamin',
				description: 'Implementasi best practices keamanan untuk melindungi data dan aplikasi Anda.'
			},
			{
				icon: 'users',
				title: 'Tim Berpengalaman',
				description: 'Developer dan designer profesional dengan pengalaman bertahun-tahun.'
			},
			{
				icon: 'clock',
				title: 'Tepat Waktu',
				description: 'Komitmen untuk menyelesaikan project sesuai timeline yang disepakati.'
			}
			// {
			// 	icon: 'award',
			// 	title: 'Kualitas Premium',
			// 	description: 'Standar kualitas tinggi di setiap baris kode dan pixel desain.'
			// },
			// {
			// 	icon: 'heart-handshake',
			// 	title: 'Support Berkelanjutan',
			// 	description: 'Dukungan teknis dan maintenance setelah project selesai.'
			// }
		]
	},
	portfolio: {
		title: 'Portfolio Kami',
		subtitle: 'Project-project terbaik yang telah kami kerjakan',
		viewProject: 'Lihat Project',
		items: [
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
				description:
					'Dashboard analitik real-time untuk perusahaan SaaS dengan visualisasi data interaktif.',
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
				description:
					'Portal kesehatan digital dengan fitur telemedicine dan rekam medis elektronik.',
				image: 'healthcare',
				tags: ['Web App', 'Vue.js', 'Python'],
				featured: true
			},
			{
				id: 'education-platform',
				title: 'E-Learning Platform',
				description:
					'Platform pembelajaran online dengan fitur video streaming dan quiz interaktif.',
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
		]
	},
	process: {
		title: 'Cara Kerja Kami',
		subtitle: 'Proses terstruktur untuk memastikan hasil yang optimal',
		steps: [
			{
				step: 1,
				icon: 'message-square',
				title: 'Konsultasi',
				description: 'Diskusi mendalam tentang kebutuhan, goals, dan visi project Anda.'
			},
			{
				step: 2,
				icon: 'pen-tool',
				title: 'Desain',
				description: 'Pembuatan wireframe dan desain UI/UX yang sesuai dengan brand Anda.'
			},
			{
				step: 3,
				icon: 'code',
				title: 'Development',
				description: 'Pengembangan dengan teknologi modern dan best practices.'
			},
			{
				step: 4,
				icon: 'rocket',
				title: 'Launch',
				description: 'Deployment, testing, dan launch project dengan dukungan penuh.'
			}
		]
	},
	techStack: {
		title: 'Teknologi yang Kami Gunakan',
		subtitle: 'Tools dan framework modern untuk membangun solusi terbaik'
	},
	testimonials: {
		title: 'Apa Kata Klien Kami',
		subtitle: 'Testimoni dari klien yang telah bekerja sama dengan kami',
		items: [
			{
				id: '1',
				name: 'Budi Santoso',
				role: 'CEO',
				company: 'TechStartup Indonesia',
				avatar: 'BS',
				content:
					'Tim WebDev Studio sangat profesional dan responsif. Mereka berhasil mentransformasi ide kami menjadi platform yang luar biasa. Highly recommended!',
				rating: 5
			},
			{
				id: '2',
				name: 'Sarah Wijaya',
				role: 'Marketing Director',
				company: 'Fashion Brand Co.',
				avatar: 'SW',
				content:
					'Website e-commerce yang mereka buat meningkatkan penjualan kami hingga 200%. Desainnya modern dan user-friendly. Terima kasih tim!',
				rating: 5
			},
			{
				id: '3',
				name: 'Ahmad Prasetyo',
				role: 'Founder',
				company: 'EduTech Platform',
				avatar: 'AP',
				content:
					'Kerjasama yang sangat menyenangkan. Mereka mengerti kebutuhan kami dan memberikan solusi yang tepat. Support after-sales juga sangat baik.',
				rating: 5
			}
		]
	},
	pricing: {
		title: 'Pilih Paket yang Sesuai',
		subtitle: 'Investasi terbaik untuk pertumbuhan bisnis digital Anda',
		customPrice: 'Custom',
		perProject: '/project',
		plans: [
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
		]
	},
	faq: {
		title: 'Pertanyaan yang Sering Diajukan',
		subtitle: 'Jawaban untuk pertanyaan umum tentang layanan kami',
		items: [
			{
				id: '1',
				question: 'Berapa lama waktu pengerjaan website?',
				answer:
					'Waktu pengerjaan bervariasi tergantung kompleksitas project. Website standar biasanya membutuhkan 2-4 minggu, sedangkan web application bisa memakan waktu 1-3 bulan. Kami akan memberikan timeline yang jelas setelah diskusi kebutuhan.'
			},
			{
				id: '2',
				question: 'Apakah ada biaya maintenance setelah website selesai?',
				answer:
					'Setiap paket sudah termasuk periode support gratis (30-90 hari atau 12 bulan tergantung paket). Setelah itu, kami menawarkan paket maintenance bulanan yang bisa disesuaikan dengan kebutuhan Anda.'
			},
			{
				id: '3',
				question: 'Teknologi apa yang digunakan untuk development?',
				answer:
					'Kami menggunakan teknologi modern seperti React, Svelte, Next.js, Node.js, dan berbagai framework lainnya. Pemilihan teknologi akan disesuaikan dengan kebutuhan project untuk hasil yang optimal.'
			},
			{
				id: '4',
				question: 'Bagaimana proses pembayarannya?',
				answer:
					'Pembayaran dilakukan dalam 2-3 tahap: DP 50% di awal, 25% saat progress 50%, dan pelunasan setelah project selesai. Kami menerima transfer bank dan berbagai metode pembayaran digital.'
			},
			{
				id: '5',
				question: 'Apakah bisa request revisi setelah project selesai?',
				answer:
					'Tentu! Setiap paket sudah termasuk revisi (jumlah tergantung paket yang dipilih). Revisi di luar kuota atau setelah periode support dapat dilakukan dengan biaya tambahan.'
			},
			{
				id: '6',
				question: 'Apakah kalian menyediakan hosting dan domain?',
				answer:
					'Kami dapat membantu setup hosting dan domain dengan biaya terpisah. Kami juga bisa membantu deployment ke berbagai platform cloud seperti Vercel, AWS, atau hosting pilihan Anda.'
			}
		]
	},
	contact: {
		title: 'Hubungi Kami',
		subtitle: 'Siap memulai project Anda? Mari diskusikan kebutuhan Anda',
		heading: 'Mari Bekerja Sama',
		description:
			'Kami siap membantu mewujudkan visi digital Anda. Hubungi kami untuk konsultasi gratis dan diskusi project.',
		email: 'Email',
		whatsapp: 'WhatsApp',
		location: 'Lokasi',
		form: {
			name: 'Nama Lengkap',
			namePlaceholder: 'Masukkan nama Anda',
			email: 'Email',
			emailPlaceholder: 'email@example.com',
			whatsapp: 'WhatsApp',
			whatsappPlaceholder: '+62 857 0946 6801',
			message: 'Pesan',
			messagePlaceholder: 'Ceritakan tentang project Anda...',
			submit: 'Kirim Pesan',
			submitting: 'Mengirim...',
			success: 'Pesan Terkirim!',
			successMessage: 'Kami akan segera menghubungi Anda.'
		}
	},
	footer: {
		quickLinks: 'Quick Links',
		services: 'Layanan',
		serviceList: ['Web Development', 'Web Applications', 'E-Commerce', 'UI/UX Design'],
		contact: 'Kontak',
		copyright: 'All rights reserved.'
	},
	meta: {
		title: 'Jasa Pembuatan Website Profesional',
		description:
			'WebDev Studio adalah agensi web development profesional yang menyediakan jasa pembuatan website, web application, e-commerce, dan UI/UX design.',
		keywords:
			'web development, jasa pembuatan website, web design, e-commerce, UI UX design, Jakarta, Indonesia',
		ogDescription: 'Membangun pengalaman digital yang luar biasa. Dari konsep hingga peluncuran.'
	},
	company: {
		name: 'SOLARIA',
		tagline: 'Membangun Pengalaman Digital yang Luar Biasa',
		whatsapp: '+62 857 0946 6801',
		email: 'solariadev7@gmail.com',
		address: 'Padang, Indonesia'
	}
};
