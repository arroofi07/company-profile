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
	import WhatsAppPopup from '$lib/components/ui/WhatsAppPopup.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import JsonLd from '$lib/components/JsonLd.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<SEO />
<JsonLd />

<main class="relative z-10">
	<Hero />
	<Services />
	<WhyChooseUs />
	<Portfolio portfolioItems={data.portfoliosRaw} />
	<Process />
	<TechStack />
	<Pricing />
	<Contact />
	<FAQ />
</main>

<ScrollToTop />
<WhatsAppPopup />
