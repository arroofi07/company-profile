<script lang="ts">
	import { Code, Layers, ShoppingCart, Palette } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import { t } from '$lib/i18n';

	const iconMap: Record<string, typeof Code> = {
		code: Code,
		layers: Layers,
		'shopping-cart': ShoppingCart,
		palette: Palette
	};

	// Warna background dan icon untuk setiap service
	const colorMap: Record<number, { bg: string; icon: string; dot: string }> = {
		0: { bg: 'bg-red-500/20', icon: 'text-red-400', dot: 'bg-red-400' },
		1: { bg: 'bg-blue-500/20', icon: 'text-blue-400', dot: 'bg-blue-400' },
		2: { bg: 'bg-orange-500/20', icon: 'text-orange-400', dot: 'bg-orange-400' },
		3: { bg: 'bg-green-500/20', icon: 'text-green-400', dot: 'bg-green-400' }
	};
</script>

<section id="services" class="relative overflow-hidden bg-bg-primary py-16 md:py-24">
	<!-- Background Orbs -->
	<div class="orb-glow absolute top-1/4 right-0 h-64 w-64 opacity-30 md:h-96 md:w-96"></div>
	<div class="orb-glow absolute bottom-1/4 left-0 h-48 w-48 opacity-20 md:h-64 md:w-64"></div>

	<Container>
		<!-- Section Header -->
		<ScrollReveal>
			<div class="mb-10 text-center md:mb-16">
				<div
					class="glass-purple mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-purple-300 sm:px-5 sm:py-2.5 sm:text-sm md:mb-6"
				>
					<span class="h-2 w-2 rounded-full bg-purple-400"></span>
					Key Advantages
				</div>
				<h2 class="text-2xl font-bold text-text-primary sm:text-4xl md:text-5xl">
					{$t.services.title.split(' ')[0]}
					<span class="text-elegant gradient-text"
						>{$t.services.title.split(' ').slice(1).join(' ')}</span
					>
				</h2>
				<p class="mx-auto mt-3 max-w-2xl text-base text-text-secondary md:mt-4 md:text-lg">
					{$t.services.subtitle}
				</p>
			</div>
		</ScrollReveal>

		<!-- Grid Layout - 2 columns on mobile, 4 on desktop -->
		<div class="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
			{#each $t.services.items as service, i}
				{@const Icon = iconMap[service.icon]}
				{@const colors = colorMap[i] || colorMap[0]}

				<ScrollReveal delay={i * 80}>
					<div
						class="card-glow group glass-purple relative h-full overflow-hidden rounded-2xl p-4 transition-all duration-300 md:rounded-3xl md:p-6"
					>
						<!-- Gradient overlay on hover -->
						<div
							class="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>

						<div class="relative z-10 flex h-full flex-col">
							<!-- Icon -->
							<div
								class="mb-3 inline-flex rounded-xl {colors.bg} self-start p-3 md:mb-5 md:rounded-2xl md:p-4"
							>
								{#if Icon}
									<Icon size={22} class={colors.icon} />
								{/if}
							</div>

							<!-- Title -->
							<h3 class="mb-2 text-base font-bold text-text-primary md:mb-3 md:text-xl">
								{service.title}
							</h3>

							<!-- Description -->
							<p class="mb-3 text-xs leading-relaxed text-text-secondary md:mb-5 md:text-sm">
								{service.description}
							</p>

							<!-- Features -->
							<ul class="mt-auto space-y-2">
								{#each service.features.slice(0, 3) as feature}
									<li class="flex items-center gap-2 text-xs text-text-muted md:gap-3">
										<span class="h-1.5 w-1.5 rounded-full {colors.dot} shrink-0"></span>
										{feature}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</ScrollReveal>
			{/each}
		</div>
	</Container>
</section>
