<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		itemCount: number;
		autoPlay?: boolean;
		autoPlayInterval?: number;
		showDots?: boolean;
		showArrows?: boolean;
		class?: string;
	}

	let {
		children,
		itemCount,
		autoPlay = false,
		autoPlayInterval = 5000,
		showDots = true,
		showArrows = true,
		class: className = ''
	}: Props = $props();

	let currentIndex = $state(0);
	let intervalId: ReturnType<typeof setInterval> | null = null;

	$effect(() => {
		if (autoPlay) {
			startAutoPlay();
		}
		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	});

	function startAutoPlay() {
		if (intervalId) clearInterval(intervalId);
		intervalId = setInterval(() => {
			next();
		}, autoPlayInterval);
	}

	function next() {
		currentIndex = (currentIndex + 1) % itemCount;
		if (autoPlay) startAutoPlay();
	}

	function prev() {
		currentIndex = (currentIndex - 1 + itemCount) % itemCount;
		if (autoPlay) startAutoPlay();
	}

	function goTo(index: number) {
		currentIndex = index;
		if (autoPlay) startAutoPlay();
	}
</script>

<div class="relative {className}">
	<!-- Carousel Content -->
	<div class="overflow-hidden">
		<div
			class="flex transition-transform duration-500 ease-out"
			style="transform: translateX(-{currentIndex * 100}%)"
		>
			{@render children()}
		</div>
	</div>

	<!-- Navigation Arrows -->
	{#if showArrows && itemCount > 1}
		<button
			onclick={prev}
			class="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-bg-tertiary/80 backdrop-blur-sm border border-border-subtle text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-all hover:scale-110"
			aria-label="Previous"
		>
			<ChevronLeft size={24} />
		</button>
		<button
			onclick={next}
			class="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-bg-tertiary/80 backdrop-blur-sm border border-border-subtle text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-all hover:scale-110"
			aria-label="Next"
		>
			<ChevronRight size={24} />
		</button>
	{/if}

	<!-- Dots -->
	{#if showDots && itemCount > 1}
		<div class="flex justify-center gap-2 mt-6">
			{#each Array(itemCount) as _, i}
				<button
					onclick={() => goTo(i)}
					class="w-3 h-3 rounded-full transition-all duration-300 {i === currentIndex
						? 'bg-accent-cyan w-8'
						: 'bg-border-subtle hover:bg-text-muted'}"
					aria-label="Go to slide {i + 1}"
				></button>
			{/each}
		</div>
	{/if}
</div>
