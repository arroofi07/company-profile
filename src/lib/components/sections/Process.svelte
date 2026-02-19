<script lang="ts">
	import { MessageSquare, PenTool, Code, Rocket, ArrowRight } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { t } from '$lib/i18n';

	const iconMap: Record<string, typeof MessageSquare> = {
		'message-square': MessageSquare,
		'pen-tool': PenTool,
		code: Code,
		rocket: Rocket
	};

	const colorMap: Record<number, { bg: string; icon: string; ring: string }> = {
		0: { bg: 'bg-red-500/20', icon: 'text-red-400', ring: 'ring-red-500/30' },
		1: { bg: 'bg-yellow-500/20', icon: 'text-yellow-400', ring: 'ring-yellow-500/30' },
		2: { bg: 'bg-green-500/20', icon: 'text-green-400', ring: 'ring-green-500/30' },
		3: { bg: 'bg-blue-500/20', icon: 'text-blue-400', ring: 'ring-blue-500/30' }
	};
</script>

<section id="process" class="overflow-hidden bg-bg-tertiary py-16 md:py-24">
	<Container>
		<ScrollReveal>
			<SectionHeading title={$t.process.title} subtitle={$t.process.subtitle} />
		</ScrollReveal>

		<!-- Desktop Timeline -->
		<div class="hidden lg:block">
			<div class="relative">
				<!-- Connection Line -->
				<div class="absolute top-16 right-0 left-0 h-px rounded-full bg-border-default"></div>

				<div class="grid grid-cols-4 gap-8">
					{#each $t.process.steps as step, i}
						{@const Icon = iconMap[step.icon]}
						{@const colors = colorMap[i] || colorMap[0]}

						<ScrollReveal delay={i * 150}>
							<div class="relative text-center">
								<!-- Step Circle -->
								<div class="relative mx-auto mb-8">
									<div class="relative mx-auto flex h-32 w-32 items-center justify-center">
										<!-- Outer ring -->
										<div
											class="absolute inset-2 rounded-full border border-border-default bg-bg-primary"
										></div>
										<!-- Inner circle -->
										<div
											class="card-glow relative flex h-24 w-24 items-center justify-center rounded-full {colors.bg}"
										>
											{#if Icon}
												<Icon size={36} class={colors.icon} strokeWidth={1.5} />
											{/if}
										</div>
										<!-- Step number badge -->
										<div
											class="absolute -top-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full border border-border-default bg-bg-primary text-lg font-bold text-text-primary"
										>
											{step.step}
										</div>
									</div>
								</div>

								<!-- Content Card -->
								<div
									class="card-glow rounded-2xl bg-bg-elevated p-6 transition-all hover:bg-bg-hover"
								>
									<h3 class="mb-3 text-xl font-bold text-text-primary">
										{step.title}
									</h3>
									<p class="leading-relaxed text-text-secondary">
										{step.description}
									</p>
								</div>
							</div>
						</ScrollReveal>
					{/each}
				</div>
			</div>
		</div>

		<!-- Mobile/Tablet Timeline - improved layout -->
		<div class="lg:hidden">
			<div class="relative">
				<!-- Vertical Line - aligned to center of circles -->
				<div class="absolute top-0 bottom-0 left-[22px] w-px bg-border-default"></div>

				<div class="space-y-6">
					{#each $t.process.steps as step, i}
						{@const Icon = iconMap[step.icon]}
						{@const colors = colorMap[i] || colorMap[0]}

						<ScrollReveal direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 100}>
							<div class="relative flex gap-4">
								<!-- Step Circle -->
								<div class="relative shrink-0">
									<div
										class="card-glow flex h-11 w-11 items-center justify-center rounded-full {colors.bg} ring-4 ring-bg-tertiary"
									>
										{#if Icon}
											<Icon size={18} class={colors.icon} />
										{/if}
									</div>
									<div
										class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border border-border-default bg-bg-primary text-xs font-bold text-text-primary"
									>
										{step.step}
									</div>
								</div>

								<!-- Content -->
								<div class="card-glow flex-1 rounded-xl bg-bg-elevated p-4">
									<h3 class="mb-1.5 text-base font-bold text-text-primary">
										{step.title}
									</h3>
									<p class="text-xs leading-relaxed text-text-secondary">
										{step.description}
									</p>
								</div>
							</div>
						</ScrollReveal>
					{/each}
				</div>
			</div>
		</div>

		<!-- CTA -->
		<ScrollReveal delay={400}>
			<div class="mt-12 text-center md:mt-16">
				<Button href="#contact" size="lg">
					Mulai Project Anda
					<ArrowRight size={20} class="ml-2" />
				</Button>
			</div>
		</ScrollReveal>
	</Container>
</section>
