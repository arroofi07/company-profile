<script lang="ts">
	import { Check } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { t } from '$lib/i18n';

	let isYearly = $state(false);

	function formatPrice(price: number | null, customText: string): string {
		if (price === null) return customText;
		const adjustedPrice = isYearly ? Math.floor(price * 0.8) : price;
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(adjustedPrice);
	}
</script>

<section id="pricing" class="bg-bg-secondary py-24 relative overflow-hidden">
	<!-- Background Orb -->
	<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-150 w-150 orb-glow opacity-20"></div>

	<Container>
		<!-- Section Header -->
		<ScrollReveal>
			<div class="mb-12 text-center">
				<h2 class="text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
					{$t.pricing.title}
				</h2>
				<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
					{$t.pricing.subtitle}
				</p>
			</div>
		</ScrollReveal>

		<!-- Monthly/Yearly Toggle -->
		<ScrollReveal delay={50}>
			<div class="flex items-center justify-center gap-4 mb-12">
				<button
					onclick={() => isYearly = false}
					class="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
					{!isYearly ? 'bg-purple-500 text-white shadow-lg' : 'glass-purple text-text-secondary hover:text-text-primary'}"
				>
					Monthly
				</button>
				<button
					onclick={() => isYearly = true}
					class="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2
					{isYearly ? 'bg-purple-500 text-white shadow-lg' : 'glass-purple text-text-secondary hover:text-text-primary'}"
				>
					Yearly
					<span class="rounded-full bg-green-500 px-2 py-0.5 text-xs text-white">
						Save 20%
					</span>
				</button>
			</div>
		</ScrollReveal>

		<div class="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
			{#each $t.pricing.plans as plan, i}
				<ScrollReveal delay={i * 100}>
					<div
						class="relative h-full rounded-3xl p-8 transition-all duration-500 card-glow
						{plan.highlighted
							? 'glass-purple ring-2 ring-accent-cta scale-105 z-10'
							: 'glass-purple'}"
					>
						<!-- Popular Badge -->
						{#if plan.highlighted}
							<div class="absolute -top-4 left-1/2 -translate-x-1/2">
								<div
									class="rounded-full bg-accent-cta px-5 py-1.5 text-sm font-bold text-white shadow-lg"
								>
									Most Popular
								</div>
							</div>
						{/if}

						<!-- Plan Header -->
						<div class="mb-6 {plan.highlighted ? 'mt-2' : ''}">
							<span class="text-sm font-medium text-text-secondary">{plan.name} Plan</span>
							<h3 class="text-2xl font-bold text-text-primary mt-1">{plan.name}</h3>
						</div>

						<!-- Price -->
						<div class="mb-6">
							<div class="flex items-baseline gap-1">
								<span class="text-3xl md:text-3xl font-extrabold text-text-primary">
									{formatPrice(plan.price, $t.pricing.customPrice)}
								</span>
							</div>
							{#if plan.price !== null}
								<span class="text-text-secondary text-sm">{$t.pricing.perProject}</span>
							{/if}
						</div>

						<!-- Features -->
						<ul class="space-y-3 mb-8">
							{#each plan.features as feature}
								<li class="flex items-start gap-3">
									<div
										class="shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full
										{plan.highlighted ? 'bg-green-500/20' : 'bg-purple-500/20'}"
									>
										<Check size={12} class="{plan.highlighted ? 'text-green-400' : 'text-purple-400'}" strokeWidth={3} />
									</div>
									<span class="text-text-secondary text-sm">{feature}</span>
								</li>
							{/each}
						</ul>

						<!-- CTA Button -->
						<Button
							href="#contact"
							variant={plan.highlighted ? 'cta' : 'outline'}
							class="w-full"
						>
							{plan.cta}
						</Button>
					</div>
				</ScrollReveal>
			{/each}
		</div>

		<!-- Trust info -->
		<ScrollReveal delay={400}>
			<p class="mt-12 text-center text-sm text-text-secondary">
				<a href="#faq" class="text-purple-400 hover:underline">See FAQ</a> for more details about our plans
			</p>
		</ScrollReveal>
	</Container>
</section>
