<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta';
		size?: 'sm' | 'md' | 'lg';
		href?: string;
		disabled?: boolean;
		class?: string;
		children: Snippet;
		onclick?: () => void;
		type?: 'button' | 'submit' | 'reset';
	}

	let {
		variant = 'primary',
		size = 'md',
		href,
		disabled = false,
		class: className = '',
		children,
		onclick,
		type = 'button'
	}: Props = $props();

	const baseStyles =
		'group inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:ring-offset-2 focus:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed';

	const variants = {
		primary:
			'bg-purple-500 text-white hover:bg-purple-400 hover:shadow-lg hover:shadow-purple-500/30',
		secondary:
			'bg-bg-elevated text-text-primary hover:bg-bg-hover border border-border-default',
		outline:
			'border border-purple-500/30 text-text-primary hover:bg-purple-500/10 hover:border-purple-500/50',
		ghost: 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated',
		cta: 'bg-gradient-to-r from-accent-cta to-amber-500 text-white hover:from-accent-cta-hover hover:to-amber-400 shadow-lg shadow-accent-cta/30 hover:shadow-accent-cta/50 hover:scale-105'
	};

	const sizes = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg'
	};

	const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
</script>

{#if href}
	<a {href} class={classes}>
		{@render children()}
	</a>
{:else}
	<button {disabled} class={classes} {onclick} {type}>
		{@render children()}
	</button>
{/if}
