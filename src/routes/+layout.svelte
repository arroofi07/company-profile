<script lang="ts">
	import './layout.css';
	import logo from '$lib/assets/solaria.png';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import BubbleBackground from '$lib/components/ui/BubbleBackground.svelte';
	import { page } from '$app/stores';

	let { children } = $props();

	let isAdmin = $derived($page.url.pathname.startsWith('/admin'));
</script>

<svelte:head>
	<!-- Base Meta Tags -->
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="x-ua-compatible" content="IE=edge" />

	<!-- Favicon -->
	<link rel="icon" href={logo} />
	<link rel="apple-touch-icon" href={logo} />

	<!-- Preconnect for performance -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />

	<!-- DNS Prefetch -->
	<link rel="dns-prefetch" href="https://fonts.googleapis.com" />

	<!-- Fonts -->
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
		rel="stylesheet"
	/>

	<!-- Theme Color -->
	<meta name="theme-color" content="#8B5CF6" />
	<meta name="msapplication-TileColor" content="#8B5CF6" />

	<!-- Geo Tags -->
	<meta name="geo.region" content="ID-SB" />
	<meta name="geo.placename" content="Padang" />

	<!-- Verification (add your verification codes here) -->
	<!-- <meta name="google-site-verification" content="your-verification-code" /> -->
</svelte:head>

{#if !isAdmin}
	<BubbleBackground />
	<Navbar />
{/if}

{@render children()}

{#if !isAdmin}
	<Footer />
{/if}
