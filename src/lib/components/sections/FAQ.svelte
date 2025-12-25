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

<section id="faq" class="py-24 relative overflow-hidden bg-bg-primary">
	<!-- Background Orb -->
	<div class="absolute right-0 top-1/3 h-96 w-96 orb-glow opacity-20"></div>

	<Container>
		<!-- Section Header -->
		<ScrollReveal>
			<div class="mb-16 text-center">
				<h2 class="text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
					Frequently Asked <span class="text-elegant gradient-text">Questions</span>
				</h2>
				<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
					{$t.faq.subtitle}
				</p>
			</div>
		</ScrollReveal>

		<div class="max-w-3xl mx-auto">
			<!-- FAQ Items -->
			<div class="divide-y divide-purple-500/20">
				{#each $t.faq.items as item, i}
					<ScrollReveal delay={i * 50}>
						<div class="group">
							<button
								class="flex w-full items-center justify-between py-6 text-left"
								onclick={() => toggleFaq(item.id)}
								aria-expanded={openId === item.id}
							>
								<span
									class="pr-6 text-lg font-medium text-text-primary group-hover:text-purple-400 transition-colors"
								>
									{item.question}
								</span>
								<div
									class="shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300
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
										<p class="text-text-secondary leading-relaxed">
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
