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
</script>

<section id="process" class="py-24 overflow-hidden bg-bg-tertiary">
	<Container>
		<ScrollReveal>
			<SectionHeading title={$t.process.title} subtitle={$t.process.subtitle} />
		</ScrollReveal>

		<!-- Desktop Timeline -->
		<div class="hidden lg:block">
			<div class="relative">
				<!-- Connection Line -->
				<div class="absolute left-0 right-0 top-16 h-px bg-border-default rounded-full"></div>

				<div class="grid grid-cols-4 gap-8">
					{#each $t.process.steps as step, i}
						{@const Icon = iconMap[step.icon]}

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
											class="card-glow relative flex h-24 w-24 items-center justify-center rounded-full bg-bg-elevated"
										>
											{#if Icon}
												<Icon size={36} class="text-text-primary" strokeWidth={1.5} />
											{/if}
										</div>
										<!-- Step number badge -->
										<div
											class="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-bg-primary border border-border-default text-lg font-bold text-text-primary"
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
									<p class="text-text-secondary leading-relaxed">
										{step.description}
									</p>
								</div>
							</div>
						</ScrollReveal>
					{/each}
				</div>
			</div>
		</div>

		<!-- Mobile/Tablet Timeline -->
		<div class="lg:hidden">
			<div class="relative">
				<!-- Vertical Line -->
				<div class="absolute left-8 top-0 bottom-0 w-px bg-border-default"></div>

				<div class="space-y-8">
					{#each $t.process.steps as step, i}
						{@const Icon = iconMap[step.icon]}

						<ScrollReveal direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 100}>
							<div class="relative flex gap-6 pl-4">
								<!-- Step Circle -->
								<div class="relative shrink-0">
									<div
										class="card-glow flex h-16 w-16 items-center justify-center rounded-full bg-bg-elevated ring-4 ring-bg-primary"
									>
										{#if Icon}
											<Icon size={24} class="text-text-primary" />
										{/if}
									</div>
									<div
										class="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-bg-primary border border-border-default text-sm font-bold text-text-primary"
									>
										{step.step}
									</div>
								</div>

								<!-- Content -->
								<div class="card-glow flex-1 rounded-xl bg-bg-elevated p-5">
									<h3 class="mb-2 text-lg font-bold text-text-primary">
										{step.title}
									</h3>
									<p class="text-sm text-text-secondary">
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
			<div class="mt-16 text-center">
				<Button href="#contact" size="lg">
					Mulai Project Anda
					<ArrowRight size={20} class="ml-2" />
				</Button>
			</div>
		</ScrollReveal>
	</Container>
</section>
