import type { FAQItem } from '$lib/types';

export const faqItems: FAQItem[] = [
	{
		id: '1',
		question: 'Berapa lama waktu pengerjaan website?',
		answer: 'Waktu pengerjaan kami lebih cepat dibandingkan dengan yang lain. Waktu pengerjaan bervariasi tergantung kompleksitas project. Website standar biasanya membutuhkan 1-2 minggu, sedangkan web application bisa memakan waktu 1-1.5 bulan. Kami akan memberikan timeline yang jelas setelah diskusi kebutuhan.'
	},
	{
		id: '2',
		question: 'Apakah ada biaya maintenance setelah website selesai?',
		answer: 'Setiap paket sudah termasuk periode support gratis (6 bulan). Setelah itu, kami menawarkan paket maintenance bulanan yang bisa disesuaikan dengan kebutuhan Anda.'
	},
	{
		id: '3',
		question: 'Teknologi apa yang digunakan untuk development?',
		answer: 'Kami menggunakan teknologi modern seperti Svelte, Next.js, Node.js, Golang, Laravel dan berbagai framework lainnya. Pemilihan teknologi akan disesuaikan dengan kebutuhan project untuk hasil yang optimal.'
	},
	{
		id: '4',
		question: 'Bagaimana proses pembayarannya?',
		answer: 'Pembayaran dilakukan dalam 2-3 tahap: DP 50% di awal, 25% saat progress 50%, dan pelunasan setelah project selesai. Kami menerima transfer bank dan berbagai metode pembayaran digital.'
	},
	{
		id: '5',
		question: 'Apakah bisa request revisi setelah project selesai?',
		answer: 'Tentu! Setiap paket sudah termasuk revisi (jumlah tergantung paket yang dipilih). Revisi di luar kuota atau setelah periode support dapat dilakukan dengan biaya tambahan.'
	},
	{
		id: '6',
		question: 'Apakah kalian menyediakan hosting dan domain?',
		answer: 'Kami dapat membantu setup hosting dan domain dengan biaya terpisah. Kami juga bisa membantu deployment ke berbagai platform cloud seperti Vercel, AWS, atau hosting pilihan Anda.'
	}
];
