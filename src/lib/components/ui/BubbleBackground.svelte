<script lang="ts">
	interface Bubble {
		id: number;
		size: number;
		x: number;
		y: number;
		duration: number;
		delay: number;
		opacity: number;
	}

	// Generate bubbles with varied, organic parameters
	const bubbles: Bubble[] = Array.from({ length: 10 }, (_, i) => ({
		id: i,
		size: 100 + Math.random() * 300, // 100px to 400px
		x: Math.random() * 100, // 0-100%
		y: Math.random() * 100, // 0-100%
		duration: 30 + Math.random() * 30, // 30-60s (very slow, organic)
		delay: Math.random() * -20, // Staggered starts
		opacity: 0.02 + Math.random() * 0.04 // 0.02-0.06 (very subtle)
	}));
</script>

<div class="bubble-container" aria-hidden="true">
	{#each bubbles as bubble}
		<div
			class="bubble"
			style="
				width: {bubble.size}px;
				height: {bubble.size}px;
				left: {bubble.x}%;
				top: {bubble.y}%;
				animation-duration: {bubble.duration}s;
				animation-delay: {bubble.delay}s;
				opacity: {bubble.opacity};
			"
		></div>
	{/each}
</div>

<style>
	.bubble-container {
		position: fixed;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
		z-index: 0;
	}

	.bubble {
		position: absolute;
		border-radius: 50%;
		background: radial-gradient(
			circle at 30% 30%,
			rgba(167, 139, 250, 0.15),
			rgba(139, 92, 246, 0.06) 40%,
			transparent 70%
		);
		filter: blur(60px);
		animation: float-bubble linear infinite;
	}

	@keyframes float-bubble {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		25% {
			transform: translate(30px, -50px) scale(1.05);
		}
		50% {
			transform: translate(-20px, -30px) scale(0.95);
		}
		75% {
			transform: translate(40px, 20px) scale(1.02);
		}
	}

	/* Respect reduced motion */
	@media (prefers-reduced-motion: reduce) {
		.bubble {
			animation: none;
		}
	}
</style>
