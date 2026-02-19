<script lang="ts">
	import { Zap, Shield, Users, Clock, Award, HeartHandshake } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import PhoneMockup from '$lib/components/ui/PhoneMockup.svelte';
	import { t } from '$lib/i18n';

	const iconMap: Record<string, typeof Zap> = {
		zap: Zap,
		shield: Shield,
		users: Users,
		clock: Clock,
		award: Award,
		'heart-handshake': HeartHandshake
	};

	const colorMap: Record<number, { bg: string; icon: string }> = {
		0: { bg: 'bg-yellow-500/20', icon: 'text-yellow-400' },
		1: { bg: 'bg-green-500/20', icon: 'text-green-400' },
		2: { bg: 'bg-blue-500/20', icon: 'text-blue-400' },
		3: { bg: 'bg-orange-500/20', icon: 'text-orange-400' },
		4: { bg: 'bg-red-500/20', icon: 'text-red-400' },
		5: { bg: 'bg-pink-500/20', icon: 'text-pink-400' }
	};
</script>

<section id="why-us" class="relative overflow-hidden bg-bg-secondary py-16 md:py-24">
	<!-- Background Orb -->
	<div
		class="orb-glow absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 opacity-20 md:h-150 md:w-150"
	></div>

	<Container>
		<!-- Section Header -->
		<ScrollReveal>
			<div class="mb-10 text-center md:mb-16">
				<div
					class="glass-purple mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-purple-300 sm:px-5 sm:py-2.5 sm:text-sm md:mb-6"
				>
					<span class="h-2 w-2 rounded-full bg-purple-400"></span>
					Revolutionary Power
				</div>
				<h2 class="text-2xl font-bold text-text-primary sm:text-4xl md:text-5xl">
					{$t.whyUs.title.split('?')[0]}? <br />
					<span class="text-elegant gradient-text">Capabilities</span>
				</h2>
				<p class="mx-auto mt-3 max-w-2xl text-base text-text-secondary md:mt-4 md:text-lg">
					{$t.whyUs.subtitle}
				</p>
			</div>
		</ScrollReveal>

		<!-- Mobile: 3x2 grid of all 6 features (no phone mockup) -->
		<div class="grid grid-cols-2 gap-3 lg:hidden">
			{#each $t.whyUs.features as feature, i}
				{@const Icon = iconMap[feature.icon]}
				{@const colors = colorMap[i] || colorMap[0]}
				<ScrollReveal delay={i * 60}>
					<div
						class="card-glow group glass-purple h-full rounded-2xl p-4 transition-all duration-300"
					>
						<div class="mb-3 inline-flex rounded-xl {colors.bg} p-2.5">
							{#if Icon}
								<Icon size={20} class={colors.icon} />
							{/if}
						</div>
						<h3 class="mb-1.5 text-sm leading-tight font-bold text-text-primary">
							{feature.title}
						</h3>
						<p class="text-xs leading-relaxed text-text-secondary">
							{feature.description}
						</p>
					</div>
				</ScrollReveal>
			{/each}
		</div>

		<!-- Desktop: 2x2 grid + phone mockup + bottom 2 cards -->
		<div class="hidden lg:block">
			<!-- 2x2 Grid with Phone Mockup -->
			<div class="grid items-center gap-8 lg:grid-cols-2">
				<!-- Left: Feature Cards 2x2 Grid -->
				<div class="grid gap-4 sm:grid-cols-2">
					{#each $t.whyUs.features.slice(0, 4) as feature, i}
						{@const Icon = iconMap[feature.icon]}
						{@const colors = colorMap[i] || colorMap[0]}

						<ScrollReveal delay={i * 80}>
							<div
								class="card-glow group glass-purple h-full rounded-2xl p-6 transition-all duration-300"
							>
								<div class="mb-4 inline-flex rounded-xl {colors.bg} p-3">
									{#if Icon}
										<Icon size={24} class={colors.icon} />
									{/if}
								</div>
								<h3 class="mb-2 text-lg font-bold text-text-primary">
									{feature.title}
								</h3>
								<p class="text-sm leading-relaxed text-text-secondary">
									{feature.description}
								</p>
							</div>
						</ScrollReveal>
					{/each}
				</div>

				<!-- Right: Phone Mockup with Orb -->
				<ScrollReveal delay={200}>
					<div class="relative flex items-center justify-center">
						<PhoneMockup size="lg" showGlow={true} />
					</div>
				</ScrollReveal>
			</div>

			<!-- Bottom 2 cards -->
			<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:mx-auto lg:max-w-2xl">
				{#each $t.whyUs.features.slice(4, 6) as feature, i}
					{@const Icon = iconMap[feature.icon]}
					{@const colors = colorMap[i + 4] || colorMap[0]}

					<ScrollReveal delay={(i + 4) * 80}>
						<div
							class="card-glow group glass-purple h-full rounded-2xl p-6 transition-all duration-300"
						>
							<div class="mb-4 inline-flex rounded-xl {colors.bg} p-3">
								{#if Icon}
									<Icon size={24} class={colors.icon} />
								{/if}
							</div>
							<h3 class="mb-2 text-lg font-bold text-text-primary">
								{feature.title}
							</h3>
							<p class="text-sm leading-relaxed text-text-secondary">
								{feature.description}
							</p>
						</div>
					</ScrollReveal>
				{/each}
			</div>
		</div>
	</Container>
</section>
