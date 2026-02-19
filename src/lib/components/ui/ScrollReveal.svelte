<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		direction?: 'up' | 'left' | 'right' | 'scale';
		delay?: number;
		threshold?: number;
		class?: string;
	}

	let {
		children,
		direction = 'up',
		delay = 0,
		threshold = 0.05,
		class: className = ''
	}: Props = $props();

	let element: HTMLDivElement;
	let isVisible = $state(false);

	const directionClasses = {
		up: 'scroll-animate',
		left: 'scroll-animate-left',
		right: 'scroll-animate-right',
		scale: 'scroll-animate-scale'
	};

	onMount(() => {
		if (!element) return;

		// Cek langsung apakah elemen sudah di dalam viewport saat mount
		const rect = element.getBoundingClientRect();
		if (rect.top < window.innerHeight && rect.bottom > 0) {
			setTimeout(() => {
				isVisible = true;
			}, delay);
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0,
				rootMargin: '0px 0px -30px 0px'
			}
		);

		observer.observe(element);

		// Fallback: paksa tampil setelah 1.5s jika observer tidak menjangkau
		const fallback = setTimeout(() => {
			if (!isVisible) isVisible = true;
		}, 1500);

		return () => {
			observer.disconnect();
			clearTimeout(fallback);
		};
	});
</script>

<div
	bind:this={element}
	class="{directionClasses[direction]} {isVisible ? 'animate-in' : ''} {className}"
	style="transition-delay: {delay}ms"
>
	{@render children()}
</div>
