<script lang="ts">
	import { t, currentLocale as localeStore } from '$lib/i18n';

	interface Props {
		title?: string;
		description?: string;
		keywords?: string;
		ogImage?: string;
		ogType?: 'website' | 'article';
		canonical?: string;
		noindex?: boolean;
	}

	const SITE_URL = 'https://solaria.icu';

	let {
		title = $t.meta.title,
		description = $t.meta.description,
		keywords = $t.meta.keywords,
		ogImage = `${SITE_URL}/og-image.png`,
		ogType = 'website',
		canonical = SITE_URL,
		noindex = false
	}: Props = $props();

	let fullTitle = $derived(`${$t.company.name} - ${title}`);
	let locale = $derived($localeStore);
	let alternateLocale = $derived(locale === 'en' ? 'id' : 'en');
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{fullTitle}</title>
	<meta name="title" content={fullTitle} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={$t.company.name} />
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{:else}
		<meta name="robots" content="index, follow" />
	{/if}

	<!-- Canonical URL -->
	<link rel="canonical" href={canonical} />

	<!-- Hreflang Tags for Multilingual SEO -->
	<link rel="alternate" hreflang={locale} href={canonical} />
	<link
		rel="alternate"
		hreflang={alternateLocale}
		href={canonical}
	/>
	<link rel="alternate" hreflang="x-default" href={SITE_URL} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={$t.meta.ogDescription} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={$t.company.name} />
	<meta property="og:site_name" content={$t.company.name} />
	<meta property="og:locale" content={locale === 'id' ? 'id_ID' : 'en_US'} />
	<meta property="og:locale:alternate" content={locale === 'id' ? 'en_US' : 'id_ID'} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonical} />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={$t.meta.ogDescription} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content={$t.company.name} />

	<!-- Additional Meta Tags -->
	<meta name="theme-color" content="#8B5CF6" />
	<meta name="msapplication-TileColor" content="#8B5CF6" />
</svelte:head>
