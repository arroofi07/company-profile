<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		target: number;
		duration?: number;
		suffix?: string;
		prefix?: string;
		class?: string;
	}

	let {
		target,
		duration = 2000,
		suffix = '',
		prefix = '',
		class: className = ''
	}: Props = $props();

	let count = $state(0);
	let element: HTMLSpanElement;
	let hasAnimated = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasAnimated) {
						hasAnimated = true;
						animateCount();
					}
				});
			},
			{ threshold: 0.5 }
		);

		if (element) {
			observer.observe(element);
		}

		return () => observer.disconnect();
	});

	function animateCount() {
		const startTime = performance.now();
		const startValue = 0;

		function update(currentTime: number) {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);

			// Easing function (ease-out)
			const easeOut = 1 - Math.pow(1 - progress, 3);
			count = Math.floor(startValue + (target - startValue) * easeOut);

			if (progress < 1) {
				requestAnimationFrame(update);
			} else {
				count = target;
			}
		}

		requestAnimationFrame(update);
	}
</script>

<span bind:this={element} class={className}>
	{prefix}{count}{suffix}
</span>
