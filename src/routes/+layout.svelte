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
	<link rel="icon" href={logo} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if !isAdmin}
	<BubbleBackground />
	<Navbar />
{/if}

{@render children()}

{#if !isAdmin}
	<Footer />
{/if}
