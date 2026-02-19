<script lang="ts">
	import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import { t, currentLocale } from '$lib/i18n';
	import type { PortfolioProject } from '$lib/supabase/types';

	interface Props {
		portfolioItems?: PortfolioProject[];
	}

	let { portfolioItems = [] }: Props = $props();

	// Transform Supabase data to display format based on current locale
	let displayItems = $derived(
		portfolioItems.length > 0
			? portfolioItems.map((item) => ({
					id: item.slug,
					title: $currentLocale === 'id' ? item.title_id : item.title_en,
					description: $currentLocale === 'id' ? item.description_id : item.description_en,
					image: item.image_url || item.slug,
					tags: item.tags,
					link: item.link,
					featured: item.featured
				}))
			: $t.portfolio.items
	);

	let currentIndex = $state(0);
	let itemsPerView = $state(1);
	let expandedItems = $state(new Set<string>()); // Use Set<string> for storing expanded IDs

	function toggleExpand(event: Event, id: string) {
		event.stopPropagation(); // Prevent card click
		const newSet = new Set(expandedItems);
		if (newSet.has(id)) {
			newSet.delete(id);
		} else {
			newSet.add(id);
		}
		expandedItems = newSet;
	}

	// Responsive itemsPerView
	$effect(() => {
		function updateItemsPerView() {
			if (typeof window === 'undefined') return;

			if (window.innerWidth >= 1024) {
				itemsPerView = 3;
			} else if (window.innerWidth >= 768) {
				itemsPerView = 2;
			} else {
				itemsPerView = 1;
			}
			// Reset index if it exceeds new maxIndex
			const newMaxIndex = Math.max(0, displayItems.length - itemsPerView);
			if (currentIndex > newMaxIndex) {
				currentIndex = newMaxIndex;
			}
		}

		updateItemsPerView();
		window.addEventListener('resize', updateItemsPerView);

		return () => window.removeEventListener('resize', updateItemsPerView);
	});

	// Reactive to get total items
	let totalItems = $derived(displayItems.length);
	let maxIndex = $derived(Math.max(0, totalItems - itemsPerView));

	// Calculate slide width percentage
	let slideWidth = $derived(100 / itemsPerView);

	function next() {
		currentIndex = Math.min(currentIndex + 1, maxIndex);
	}

	function prev() {
		currentIndex = Math.max(currentIndex - 1, 0);
	}

	function goTo(index: number) {
		currentIndex = Math.min(Math.max(index, 0), maxIndex);
	}
</script>

<section id="portfolio" class="bg-bg-secondary py-24">
	<Container>
		<ScrollReveal>
			<SectionHeading title={$t.portfolio.title} subtitle={$t.portfolio.subtitle} />
		</ScrollReveal>

		<!-- Carousel Container -->
		<ScrollReveal delay={100}>
			<div class="relative">
				<!-- Navigation Arrows -->
				<button
					onclick={prev}
					disabled={currentIndex === 0}
					class="absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full border border-border-subtle bg-bg-elevated p-2 text-text-secondary transition-all hover:bg-bg-hover hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-30 md:-left-6 md:p-3"
					aria-label="Previous"
				>
					<ChevronLeft size={20} class="md:h-6 md:w-6" />
				</button>
				<button
					onclick={next}
					disabled={currentIndex >= maxIndex}
					class="absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full border border-border-subtle bg-bg-elevated p-2 text-text-secondary transition-all hover:bg-bg-hover hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-30 md:-right-6 md:p-3"
					aria-label="Next"
				>
					<ChevronRight size={20} class="md:h-6 md:w-6" />
				</button>

				<!-- Carousel Track -->
				<div class="mx-8 overflow-hidden rounded-2xl md:mx-0">
					<div
						class="flex transition-transform duration-500 ease-out"
						style="transform: translateX(-{currentIndex * slideWidth}%)"
					>
						{#each displayItems as project, i}
							<div class="shrink-0 px-2 md:px-3" style="width: {slideWidth}%">
								<div
									role="button"
									tabindex="0"
									onclick={() => window.open(project.link || '#', '_blank')}
									onkeydown={(e) => {
										if (e.key === 'Enter' || e.key === ' ') {
											window.open(project.link || '#', '_blank');
										}
									}}
									class="card-lift group relative block h-full cursor-pointer overflow-hidden rounded-xl border border-border-subtle bg-bg-tertiary text-left transition-all duration-300 hover:border-border-hover"
								>
									<!-- Image Container -->
									<div class="relative aspect-4/3 overflow-hidden">
										{#if project.image?.startsWith('http')}
											<img
												src={project.image}
												alt={project.title}
												class="absolute inset-0 h-full w-full object-cover"
											/>
										{:else}
											<div
												class="absolute inset-0 bg-linear-to-br from-neutral-700 to-neutral-900"
											></div>
										{/if}
										<!-- Pattern overlay -->
										<div
											class="absolute inset-0 opacity-10"
											style="background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;);"
										></div>

										<!-- Featured badge -->
										{#if project.featured}
											<div class="absolute top-4 left-4 z-10">
												<span
													class="rounded-full bg-text-primary px-3 py-1 text-xs font-semibold text-bg-primary"
												>
													Featured
												</span>
											</div>
										{/if}

										<!-- Hover Overlay -->
										<div
											class="absolute inset-0 flex flex-col items-center justify-center bg-bg-primary/90 opacity-0 transition-all duration-300 group-hover:opacity-100"
										>
											<span class="mb-4 text-xl font-bold text-text-primary">{project.title}</span>
											<div
												class="flex items-center gap-2 rounded-full bg-accent-cta px-6 py-3 font-medium text-black transition-transform hover:scale-105"
											>
												{$t.portfolio.viewProject}
												<ExternalLink size={16} />
											</div>
										</div>
									</div>

									<!-- Content -->
									<div class="p-6">
										<h3
											class="mb-2 text-lg font-bold text-text-primary transition-colors group-hover:text-accent-cta"
										>
											{project.title}
										</h3>

										<div class="mb-4 text-sm text-text-secondary">
											<p class={!expandedItems.has(project.id) ? 'line-clamp-2' : ''}>
												{project.description}
											</p>
											{#if project.description.length > 100}
												<button
													type="button"
													class="relative z-10 mt-1 text-xs font-semibold text-purple-400 hover:text-purple-300"
													onclick={(e) => toggleExpand(e, project.id)}
												>
													{expandedItems.has(project.id) ? 'Sembunyikan' : 'Selengkapnya'}
												</button>
											{/if}
										</div>

										<div class="flex flex-wrap gap-2">
											{#each project.tags.slice(0, 3) as tag}
												<span
													class="rounded-full bg-bg-elevated px-3 py-1 text-xs font-medium text-text-muted"
												>
													{tag}
												</span>
											{/each}
											{#if project.tags.length > 3}
												<span
													class="rounded-full bg-bg-elevated px-3 py-1 text-xs font-medium text-text-secondary"
												>
													+{project.tags.length - 3}
												</span>
											{/if}
										</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Dots Navigation -->
				<div class="mt-8 flex justify-center gap-2">
					{#each Array(maxIndex + 1) as _, i}
						<button
							onclick={() => goTo(i)}
							class="h-2 rounded-full transition-all duration-300 {i === currentIndex
								? 'w-8 bg-text-primary'
								: 'w-2 bg-border-default hover:bg-border-hover'}"
							aria-label="Go to slide {i + 1}"
						></button>
					{/each}
				</div>
			</div>
		</ScrollReveal>
	</Container>
</section>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
