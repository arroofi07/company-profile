<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
		centered?: boolean;
		gradient?: boolean;
		class?: string;
	}

	let {
		title,
		subtitle = '',
		centered = true,
		gradient = true,
		class: className = ''
	}: Props = $props();

	const alignClass = centered ? 'text-center' : 'text-left';
	const titleClass = gradient
		? 'gradient-text'
		: 'text-text-primary';
</script>

<div class="mb-12 {alignClass} {className}">
	<h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl {titleClass}">
		{title}
	</h2>
	{#if subtitle}
		<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
			{subtitle}
		</p>
	{/if}
</div>
