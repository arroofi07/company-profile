<script lang="ts">
	import { Star, Quote } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import { t } from '$lib/i18n';
</script>

<section id="testimonials" class="section-light py-24 relative overflow-hidden">
	<!-- Decorative elements -->
	<div class="absolute top-20 left-10 opacity-5">
		<Quote size={120} class="text-purple-600" />
	</div>
	<div class="absolute bottom-20 right-10 opacity-5 rotate-180">
		<Quote size={120} class="text-purple-600" />
	</div>

	<Container>
		<!-- Section Header -->
		<ScrollReveal>
			<div class="mb-16 text-center">
				<h2 class="text-3xl font-bold text-text-dark sm:text-4xl md:text-5xl">
					What Our Happy <span class="text-elegant text-purple-600">Customers</span><br />
					Are Saying About Us
				</h2>
				<p class="mx-auto mt-4 max-w-2xl text-lg text-text-dark-secondary">
					{$t.testimonials.subtitle}
				</p>
			</div>
		</ScrollReveal>

		<!-- 3 Cards Horizontal Layout -->
		<div class="grid gap-6 md:grid-cols-3">
			{#each $t.testimonials.items as testimonial, i}
				<ScrollReveal delay={i * 100}>
					<div class="group h-full rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
						<!-- Rating Stars -->
						<div class="flex gap-1 mb-4">
							{#each Array(testimonial.rating) as _}
								<Star size={18} class="fill-amber-400 text-amber-400" />
							{/each}
						</div>

						<!-- Content -->
						<blockquote class="text-text-dark leading-relaxed mb-6">
							"{testimonial.content}"
						</blockquote>

						<!-- Author -->
						<div class="flex items-center gap-3 pt-4 border-t border-gray-100">
							<!-- Avatar -->
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
