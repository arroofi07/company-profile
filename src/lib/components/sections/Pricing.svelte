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

	const WA_NUMBER = '6285709466801';

	function buildWaUrl(plan: (typeof $t.pricing.plans)[number]): string {
		const priceText = plan.price
			? formatPrice(plan.price, $t.pricing.currency)
			: 'Negosiasi (custom)';

		const featureList = plan.features.map((f) => `  ✅ ${f}`).join('\n');

		const message =
			`Halo SOLARIA DEV! 👋\n\n` +
			`Saya tertarik dengan *Paket ${plan.name}* (${priceText}).\n\n` +
			`📋 *Fitur yang saya butuhkan:*\n${featureList}\n\n` +
			`Boleh saya tahu lebih lanjut mengenai paket ini? Terima kasih! 🙏`;

		return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
	}
</script>

<section id="pricing" class="relative overflow-hidden bg-bg-secondary py-24">
	<!-- Background Orb -->
	<div
		class="orb-glow absolute top-1/2 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 opacity-20"
	></div>

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

		<div class="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each $t.pricing.plans as plan, i}
				<ScrollReveal delay={i * 100}>
					<div
						class="card-glow relative flex h-full flex-col rounded-3xl p-6 transition-all duration-500
						{plan.highlighted ? 'glass-purple ring-2 ring-accent-cta' : 'glass-purple'}"
					>
						<!-- Popular Badge -->
						{#if plan.highlighted}
							<div class="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
								<span
									class="rounded-full bg-accent-cta px-4 py-1 text-xs font-bold whitespace-nowrap text-white shadow-lg"
								>
									Paling Populer
								</span>
							</div>
						{/if}

						<!-- Icon -->
						<div
							class="mb-4 w-fit rounded-xl bg-purple-500/10 p-3 {plan.highlighted ? 'mt-2' : ''}"
						>
							<svelte:component this={iconMap[plan.icon]} size={24} class="text-purple-400" />
						</div>

						<!-- Header -->
						<h3 class="text-xl font-bold text-text-primary">{plan.name}</h3>
						<p class="mt-1 mb-4 text-sm text-text-secondary">{plan.description}</p>

						<!-- Divider -->
						<div class="my-4 h-px bg-white/10"></div>

						<!-- Price -->
						<div class="mb-4">
							{#if !plan.hideStartingFrom}
								<p class="mb-1 text-xs text-text-secondary">{$t.pricing.startingFrom}</p>
							{/if}
							<p class="text-2xl font-bold text-text-primary">
								{plan.price ? formatPrice(plan.price, $t.pricing.currency) : $t.pricing.customPrice}
							</p>
						</div>

						<!-- Divider -->
						<div class="my-4 h-px bg-white/10"></div>

						<!-- Features -->
						<ul class="mb-6 grow space-y-2">
							{#each plan.features as feature}
								<li class="flex items-start gap-2">
									<div
										class="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-purple-500/20"
									>
										<Check size={10} class="text-purple-400" strokeWidth={3} />
									</div>
									<span class="text-sm text-text-secondary">{feature}</span>
								</li>
							{/each}
						</ul>

						<!-- CTA Button -->
						<Button
							href={buildWaUrl(plan)}
							target="_blank"
							rel="noopener noreferrer"
							variant={plan.highlighted ? 'cta' : 'outline'}
							class="mt-auto w-full"
						>
							{plan.cta}
						</Button>
					</div>
				</ScrollReveal>
			{/each}
		</div>
	</Container>
</section>
