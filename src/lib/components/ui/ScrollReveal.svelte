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
		threshold = 0.1,
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
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold }
		);

		if (element) {
			observer.observe(element);
		}

		return () => observer.disconnect();
	});
</script>

<div
	bind:this={element}
	class="{directionClasses[direction]} {isVisible ? 'animate-in' : ''} {className}"
	style="transition-delay: {delay}ms"
>
	{@render children()}
</div>
