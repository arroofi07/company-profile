<script lang="ts">
	import { Star, Quote } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import { t } from '$lib/i18n';
</script>

<section id="testimonials" class="section-light relative overflow-hidden py-16 md:py-24">
	<!-- Decorative elements -->
	<div class="absolute top-20 left-10 hidden opacity-5 sm:block">
		<Quote size={120} class="text-purple-600" />
	</div>
	<div class="absolute right-10 bottom-20 hidden rotate-180 opacity-5 sm:block">
		<Quote size={120} class="text-purple-600" />
	</div>

	<Container>
		<!-- Section Header -->
		<ScrollReveal>
			<div class="mb-10 text-center md:mb-16">
				<h2 class="text-2xl font-bold text-text-dark sm:text-4xl md:text-5xl">
					What Our Happy <span class="text-elegant text-purple-600">Customers</span><br
						class="hidden sm:block"
					/>
					Are Saying About Us
				</h2>
				<p class="mx-auto mt-3 max-w-2xl text-base text-text-dark-secondary md:mt-4 md:text-lg">
					{$t.testimonials.subtitle}
				</p>
			</div>
		</ScrollReveal>

		<!-- Mobile: Horizontal scroll -->
		<div class="md:hidden">
			<div class="testimonial-scroll-container">
				{#each $t.testimonials.items as testimonial, i}
					<div class="testimonial-card-mobile">
						<div
							class="group h-full rounded-3xl bg-white p-5 shadow-lg transition-all duration-300"
						>
							<!-- Rating Stars -->
							<div class="mb-3 flex gap-1">
								{#each Array(testimonial.rating) as _}
									<Star size={16} class="fill-amber-400 text-amber-400" />
								{/each}
							</div>

							<!-- Content -->
							<blockquote class="mb-5 text-sm leading-relaxed text-text-dark">
								"{testimonial.content}"
							</blockquote>

							<!-- Author -->
							<div class="flex items-center gap-3 border-t border-gray-100 pt-4">
								<div
									class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-purple-600 text-sm font-bold text-white"
								>
									{testimonial.avatar}
								</div>
								<div>
									<div class="text-sm font-semibold text-text-dark">
										{testimonial.name}
									</div>
									<div class="text-xs text-text-dark-secondary">
										{testimonial.role}, {testimonial.company}
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<p class="mt-4 text-center text-xs text-gray-400">← Geser untuk lihat semua →</p>
		</div>

		<!-- Desktop: 3 Cards Horizontal Layout -->
		<div class="hidden gap-6 md:grid md:grid-cols-3">
			{#each $t.testimonials.items as testimonial, i}
				<ScrollReveal delay={i * 100}>
					<div
						class="group h-full rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<!-- Rating Stars -->
						<div class="mb-4 flex gap-1">
							{#each Array(testimonial.rating) as _}
								<Star size={18} class="fill-amber-400 text-amber-400" />
							{/each}
						</div>

						<!-- Content -->
						<blockquote class="mb-6 leading-relaxed text-text-dark">
							"{testimonial.content}"
						</blockquote>

						<!-- Author -->
						<div class="flex items-center gap-3 border-t border-gray-100 pt-4">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-purple-600 text-sm font-bold text-white"
							>
								{testimonial.avatar}
							</div>
							<div>
								<div class="font-semibold text-text-dark">
									{testimonial.name}
								</div>
								<div class="text-sm text-text-dark-secondary">
									{testimonial.role}, {testimonial.company}
								</div>
							</div>
						</div>
					</div>
				</ScrollReveal>
			{/each}
		</div>
	</Container>
</section>

<style>
	.testimonial-scroll-container {
		display: flex;
		gap: 12px;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
		padding: 8px 4px 8px;
		scrollbar-width: none;
	}

	.testimonial-scroll-container::-webkit-scrollbar {
		display: none;
	}

	.testimonial-card-mobile {
		scroll-snap-align: center;
		width: 82vw;
		max-width: 300px;
		flex-shrink: 0;
	}
</style>
