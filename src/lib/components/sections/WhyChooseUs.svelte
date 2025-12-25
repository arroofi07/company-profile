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
</script>

<section id="why-us" class="bg-bg-secondary py-24 relative overflow-hidden">
	<!-- Background Orb -->
	<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-150 w-150 orb-glow opacity-20"></div>

	<Container>
		<!-- Section Header -->
		<ScrollReveal>
			<div class="mb-16 text-center">
				<div class="mb-6 inline-flex items-center gap-2 rounded-full glass-purple px-5 py-2.5 text-sm font-medium text-purple-300">
					<span class="h-2 w-2 rounded-full bg-purple-400"></span>
					Revolutionary Power
				</div>
				<h2 class="text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
					{$t.whyUs.title.split('?')[0]}? <br />
					<span class="text-elegant gradient-text">Capabilities</span>
				</h2>
				<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
					{$t.whyUs.subtitle}
				</p>
			</div>
		</ScrollReveal>

		<!-- 2x3 Grid with Phone Mockup -->
		<div class="grid gap-8 lg:grid-cols-2 items-center">
			<!-- Left: Feature Cards 2x2 Grid -->
			<div class="grid gap-4 sm:grid-cols-2">
				{#each $t.whyUs.features.slice(0, 4) as feature, i}
					{@const Icon = iconMap[feature.icon]}

					<ScrollReveal delay={i * 80}>
						<div class="card-glow group glass-purple rounded-2xl p-6 h-full transition-all duration-300">
							<!-- Icon -->
							<div class="mb-4 inline-flex rounded-xl bg-purple-500/20 p-3">
								{#if Icon}
									<Icon size={24} class="text-purple-400" />
								{/if}
							</div>

							<!-- Title -->
							<h3 class="mb-2 text-lg font-bold text-text-primary">
								{feature.title}
							</h3>

							<!-- Description -->
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
		<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-2xl lg:mx-auto">
			{#each $t.whyUs.features.slice(4, 6) as feature, i}
				{@const Icon = iconMap[feature.icon]}

				<ScrollReveal delay={(i + 4) * 80}>
					<div class="card-glow group glass-purple rounded-2xl p-6 h-full transition-all duration-300">
						<!-- Icon -->
						<div class="mb-4 inline-flex rounded-xl bg-purple-500/20 p-3">
							{#if Icon}
								<Icon size={24} class="text-purple-400" />
							{/if}
						</div>

						<!-- Title -->
						<h3 class="mb-2 text-lg font-bold text-text-primary">
							{feature.title}
						</h3>

						<!-- Description -->
						<p class="text-sm leading-relaxed text-text-secondary">
							{feature.description}
						</p>
					</div>
				</ScrollReveal>
			{/each}
		</div>
	</Container>
</section>
