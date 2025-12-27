<script lang="ts">
	import { t } from '$lib/i18n';

	const SITE_URL = 'https://solaria.icu';

	// Organization Schema
	let organizationSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: $t.company.name,
		description: $t.meta.description,
		url: SITE_URL,
		logo: `${SITE_URL}/og-image.png`,
		email: $t.company.email,
		telephone: $t.company.whatsapp,
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Padang',
			addressCountry: 'ID'
		},
		sameAs: [
			'https://wa.me/6285709466801'
		]
	});

	// WebSite Schema with SearchAction
	let websiteSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: $t.company.name,
		description: $t.meta.description,
		url: SITE_URL,
		inLanguage: ['id', 'en'],
		publisher: {
			'@type': 'Organization',
			name: $t.company.name
		}
	});

	// LocalBusiness Schema
	let localBusinessSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		name: $t.company.name,
		description: $t.meta.description,
		url: SITE_URL,
		image: `${SITE_URL}/og-image.png`,
		telephone: $t.company.whatsapp,
		email: $t.company.email,
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Padang',
			addressRegion: 'Sumatera Barat',
			addressCountry: 'ID'
		},
		priceRange: '$$',
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:00',
			closes: '18:00'
		},
		areaServed: {
			'@type': 'Country',
			name: 'Indonesia'
		},
		serviceType: ['Web Development', 'Web Applications', 'E-Commerce', 'UI/UX Design']
	});

	// Service Schema
	let serviceSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: $t.services.items.map((service, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			item: {
				'@type': 'Service',
				name: service.title,
				description: service.description,
				provider: {
					'@type': 'Organization',
					name: $t.company.name
				},
				areaServed: {
					'@type': 'Country',
					name: 'Indonesia'
				}
			}
		}))
	});

	// FAQ Schema
	let faqSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: $t.faq.items.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer
			}
		}))
	});

	// BreadcrumbList Schema
	let breadcrumbSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: SITE_URL
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Services',
				item: `${SITE_URL}/#services`
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: 'Portfolio',
				item: `${SITE_URL}/#portfolio`
			},
			{
				'@type': 'ListItem',
				position: 4,
				name: 'Pricing',
				item: `${SITE_URL}/#pricing`
			},
			{
				'@type': 'ListItem',
				position: 5,
				name: 'Contact',
				item: `${SITE_URL}/#contact`
			}
		]
	});
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(websiteSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(localBusinessSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(serviceSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`}
</svelte:head>
