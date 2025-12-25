<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(false);

	function handleScroll() {
		visible = window.scrollY > 300;
	}

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<button
	onclick={scrollToTop}
	class="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:bg-purple-400 hover:shadow-purple-500/50 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:ring-offset-2 focus:ring-offset-bg-primary {visible
		? 'opacity-100 translate-y-0'
		: 'opacity-0 translate-y-4 pointer-events-none'}"
	aria-label="Scroll to top"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		stroke-width="2"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
	</svg>
</button>
