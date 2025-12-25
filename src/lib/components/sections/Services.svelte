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
		0: { bg: 'bg-red-500/20', icon: 'text-red-400', dot: 'bg-red-400' }, // Web Development - Merah
		1: { bg: 'bg-blue-500/20', icon: 'text-blue-400', dot: 'bg-blue-400' }, // Web Application - Biru
		2: { bg: 'bg-orange-500/20', icon: 'text-orange-400', dot: 'bg-orange-400' }, // E-Commerce - Orange
		3: { bg: 'bg-green-500/20', icon: 'text-green-400', dot: 'bg-green-400' } // UI/UX Design - Hijau
	};
</script>

<section id="services" class="relative bg-bg-primary py-24 overflow-hidden">
	<!-- Background Orbs -->
	<div class="absolute right-0 top-1/4 h-96 w-96 orb-glow opacity-30"></div>
	<div class="absolute left-0 bottom-1/4 h-64 w-64 orb-glow opacity-20"></div>

	<Container>
		<!-- Section Header -->
		<ScrollReveal>
			<div class="mb-16 text-center">
				<div class="mb-6 inline-flex items-center gap-2 rounded-full glass-purple px-5 py-2.5 text-sm font-medium text-purple-300">
					<span class="h-2 w-2 rounded-full bg-purple-400"></span>
					Key Advantages
				</div>
				<h2 class="text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
					{$t.services.title.split(' ')[0]} <span class="text-elegant gradient-text">{$t.services.title.split(' ').slice(1).join(' ')}</span>
				</h2>
				<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
					{$t.services.subtitle}
				</p>
			</div>
		</ScrollReveal>

		<!-- Grid Layout - 4 equal columns -->
		<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
			{#each $t.services.items as service, i}
				{@const Icon = iconMap[service.icon]}

				<ScrollReveal delay={i * 80}>
					<div
						class="card-glow group relative h-full overflow-hidden rounded-3xl glass-purple p-6 transition-all duration-300"
					>
						<!-- Gradient overlay on hover -->
						<div
							class="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>

						<div class="relative z-10 flex h-full flex-col">
							<!-- Icon -->
							<div class="mb-5 inline-flex rounded-2xl bg-purple-500/20 p-4 self-start">
								{#if Icon}
									<Icon size={28} class="text-purple-400" />
								{/if}
							</div>

							<!-- Title -->
							<h3 class="mb-3 text-xl font-bold text-text-primary">
								{service.title}
							</h3>

							<!-- Description -->
							<p class="mb-5 leading-relaxed text-text-secondary text-sm">
								{service.description}
							</p>

							<!-- Features -->
							<ul class="space-y-2.5 mt-auto">
								{#each service.features.slice(0, 3) as feature}
									<li class="flex items-center gap-3 text-sm text-text-muted">
										<span class="h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0"></span>
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
