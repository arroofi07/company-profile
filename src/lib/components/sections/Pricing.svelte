<script lang="ts">
	import { Check, FileText, Database, Rocket, Sparkles } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { t } from '$lib/i18n';

	const iconMap: Record<string, typeof FileText> = {
		FileText,
		Database,
		Rocket,
		Sparkles
	};

	function formatPrice(price: number, currency: string): string {
		const locale = currency === 'USD' ? 'en-US' : 'id-ID';
		return new Intl.NumberFormat(locale, {
			style: 'currency',
			currency: currency,
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(price);
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

		<div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
			{#each $t.pricing.plans as plan, i}
				<ScrollReveal delay={i * 100}>
					<div
						class="relative h-full rounded-3xl p-6 transition-all duration-500 card-glow flex flex-col
						{plan.highlighted
							? 'glass-purple ring-2 ring-accent-cta'
							: 'glass-purple'}"
					>
						<!-- Popular Badge -->
						{#if plan.highlighted}
							<div class="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
								<span class="rounded-full bg-accent-cta px-4 py-1 text-xs font-bold text-white shadow-lg whitespace-nowrap">
									Paling Populer
								</span>
							</div>
						{/if}

						<!-- Icon -->
						<div class="mb-4 p-3 rounded-xl bg-purple-500/10 w-fit {plan.highlighted ? 'mt-2' : ''}">
							<svelte:component this={iconMap[plan.icon]} size={24} class="text-purple-400" />
						</div>

						<!-- Header -->
						<h3 class="text-xl font-bold text-text-primary">{plan.name}</h3>
						<p class="text-sm text-text-secondary mt-1 mb-4">{plan.description}</p>

						<!-- Divider -->
						<div class="h-px bg-white/10 my-4"></div>

						<!-- Price -->
						<div class="mb-4">
							{#if !plan.hideStartingFrom}
								<p class="text-xs text-text-secondary mb-1">{$t.pricing.startingFrom}</p>
							{/if}
							<p class="text-2xl font-bold text-text-primary">
								{plan.price ? formatPrice(plan.price, $t.pricing.currency) : $t.pricing.customPrice}
							</p>
						</div>

						<!-- Divider -->
						<div class="h-px bg-white/10 my-4"></div>

						<!-- Features -->
						<ul class="space-y-2 mb-6 grow">
							{#each plan.features as feature}
								<li class="flex items-start gap-2">
									<div class="shrink-0 mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-purple-500/20">
										<Check size={10} class="text-purple-400" strokeWidth={3} />
									</div>
									<span class="text-text-secondary text-sm">{feature}</span>
								</li>
							{/each}
						</ul>

						<!-- CTA Button -->
						<Button
							href="#contact"
							variant={plan.highlighted ? 'cta' : 'outline'}
							class="w-full mt-auto"
						>
							{plan.cta}
					</Button>
					</div>
				</ScrollReveal>
			{/each}
		</div>

		
	</Container>
</section>
