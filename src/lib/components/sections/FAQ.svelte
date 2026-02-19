<script lang="ts">
	import { Plus, Minus } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import { t } from '$lib/i18n';

	let openId = $state<string | null>(null);

	function toggleFaq(id: string) {
		openId = openId === id ? null : id;
	}
</script>

<section id="faq" class="relative overflow-hidden bg-bg-primary py-16 md:py-24">
	<!-- Background Orb -->
	<div class="orb-glow absolute top-1/3 right-0 h-96 w-96 opacity-20"></div>

	<Container>
		<!-- Section Header -->
		<ScrollReveal>
			<div class="mb-10 text-center md:mb-16">
				<h2 class="text-2xl font-bold text-text-primary sm:text-4xl md:text-5xl">
					Frequently Asked <span class="text-elegant gradient-text">Questions</span>
				</h2>
				<p class="mx-auto mt-3 max-w-2xl text-base text-text-secondary md:mt-4 md:text-lg">
					{$t.faq.subtitle}
				</p>
			</div>
		</ScrollReveal>

		<div class="mx-auto max-w-3xl">
			<!-- FAQ Items -->
			<div class="divide-y divide-purple-500/20">
				{#each $t.faq.items as item, i}
					<ScrollReveal delay={i * 50}>
						<div class="group">
							<button
								class="flex w-full items-center justify-between py-4 text-left md:py-6"
								onclick={() => toggleFaq(item.id)}
								aria-expanded={openId === item.id}
							>
								<span
									class="pr-4 text-base font-medium text-text-primary transition-colors group-hover:text-purple-400 md:pr-6 md:text-lg"
								>
									{item.question}
								</span>
								<div
									class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300
									{openId === item.id ? 'bg-purple-500' : 'bg-purple-500/20'}"
								>
									{#if openId === item.id}
										<Minus size={18} class="text-white" />
									{:else}
										<Plus size={18} class="text-purple-400" />
									{/if}
								</div>
							</button>

							<!-- Animated Content -->
							<div
								class="grid transition-all duration-300 ease-out"
								style="grid-template-rows: {openId === item.id ? '1fr' : '0fr'};"
							>
								<div class="overflow-hidden">
									<div class="pb-6">
										<p class="leading-relaxed text-text-secondary">
											{item.answer}
										</p>
									</div>
								</div>
							</div>
						</div>
					</ScrollReveal>
				{/each}
			</div>
		</div>
	</Container>
</section>
