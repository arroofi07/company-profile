<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'default' | 'elevated' | 'bordered' | 'glass' | 'light';
		hover?: boolean;
		glow?: boolean;
		class?: string;
		children: Snippet;
	}

	let {
		variant = 'default',
		hover = true,
		glow = false,
		class: className = '',
		children
	}: Props = $props();

	const baseStyles = 'rounded-2xl p-6 transition-all duration-300';

	const variants = {
		default: 'bg-bg-tertiary',
		elevated: 'bg-bg-elevated shadow-lg',
		bordered: 'bg-bg-tertiary border border-border-subtle',
		glass: 'glass-purple',
		light: 'bg-white shadow-lg'
	};

	const hoverStyles = hover ? 'hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10' : '';
	const glowStyles = glow ? 'hover:border-purple-500/40 border border-purple-500/20 hover:shadow-purple-500/20 hover:shadow-lg' : '';

	const classes = `${baseStyles} ${variants[variant]} ${hoverStyles} ${glowStyles} ${className}`;
</script>

<div class={classes}>
	{@render children()}
</div>
