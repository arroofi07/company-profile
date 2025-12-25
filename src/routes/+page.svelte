<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import Services from '$lib/components/sections/Services.svelte';
	import WhyChooseUs from '$lib/components/sections/WhyChooseUs.svelte';
	import Portfolio from '$lib/components/sections/Portfolio.svelte';
	import Process from '$lib/components/sections/Process.svelte';
	import TechStack from '$lib/components/sections/TechStack.svelte';
	import Pricing from '$lib/components/sections/Pricing.svelte';
	import FAQ from '$lib/components/sections/FAQ.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import ScrollToTop from '$lib/components/ui/ScrollToTop.svelte';
	import { t } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$t.company.name} - {$t.meta.title}</title>
	<meta name="description" content={$t.meta.description} />
	<meta name="keywords" content={$t.meta.keywords} />
	<meta property="og:title" content="{$t.company.name} - {$t.meta.title}" />
	<meta property="og:description" content={$t.meta.ogDescription} />
	<meta property="og:type" content="website" />
</svelte:head>

<main class="relative z-10">
	<Hero />
	<Services />
	<WhyChooseUs />
	<Portfolio />
	<Process />
	<TechStack />
	<Pricing />
	<Contact />
	<FAQ />
</main>

<ScrollToTop />
