<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		speed?: number;
		reverse?: boolean;
		pauseOnHover?: boolean;
		class?: string;
	}

	let {
		children,
		speed = 30,
		reverse = false,
		pauseOnHover = true,
		class: className = ''
	}: Props = $props();

	const animationClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';
</script>

<div
	class="overflow-hidden {className}"
	style="--marquee-speed: {speed}s"
>
	<div
		class="flex gap-8 w-max {animationClass} {pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}"
		style="animation-duration: {speed}s"
	>
		{@render children()}
		<!-- Duplicate for seamless loop -->
		{@render children()}
	</div>
</div>
