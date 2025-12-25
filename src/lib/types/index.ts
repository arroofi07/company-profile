export interface Service {
	id: string;
	title: string;
	description: string;
	icon: string;
	features: string[];
}

export interface PortfolioProject {
	id: string;
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	featured?: boolean;
}

export interface Testimonial {
	id: string;
	name: string;
	role: string;
	company: string;
	avatar: string;
	content: string;
	rating: number;
}

export interface PricingPlan {
	id: string;
	name: string;
	description: string;
	price: number | null;
	period: string;
	features: string[];
	highlighted?: boolean;
	cta: string;
}

export interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

export interface ProcessStep {
	id: string;
	step: number;
	title: string;
	description: string;
	icon: string;
}

export interface TechItem {
	id: string;
	name: string;
	icon: string;
	category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface NavItem {
	label: string;
	href: string;
}

export interface SocialLink {
	platform: string;
	url: string;
	icon: string;
}

export interface Feature {
	id: string;
	title: string;
	description: string;
	icon: string;
}
