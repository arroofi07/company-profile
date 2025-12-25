<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import Marquee from '$lib/components/ui/Marquee.svelte';
	import { t } from '$lib/i18n';

	const technologies = [
		'Laravel',
		'Svelte',
		'Php',
		'TypeScript',
		'JavaScript',
		'Bootstrap',
		'React',
		'NodeJs',
		'PostgreSQL',
		'MySQL',
		'Tailwind',
		'HTML',
		'CSS',
		'ExpressJs',
		'NestJS'
	];

	// Warna berbeda untuk setiap teknologi berdasarkan brand identity
	const colorMap: Record<string, { bg: string; text: string }> = {
		Laravel: { bg: 'bg-red-600/10', text: 'text-red-600' },
		Svelte: { bg: 'bg-orange-500/10', text: 'text-orange-500' },
		Php: { bg: 'bg-purple-600/10', text: 'text-purple-600' },
		TypeScript: { bg: 'bg-blue-600/10', text: 'text-blue-600' },
		JavaScript: { bg: 'bg-yellow-400/10', text: 'text-yellow-400' },
		Bootstrap: { bg: 'bg-purple-500/10', text: 'text-purple-500' },
		React: { bg: 'bg-cyan-500/10', text: 'text-cyan-500' },
		NodeJs: { bg: 'bg-green-600/10', text: 'text-green-600' },
		PostgreSQL: { bg: 'bg-blue-700/10', text: 'text-blue-700' },
		MySQL: { bg: 'bg-blue-500/10', text: 'text-blue-500' },
		Tailwind: { bg: 'bg-teal-400/10', text: 'text-teal-400' },
		HTML: { bg: 'bg-orange-400/10', text: 'text-orange-400' },
		CSS: { bg: 'bg-blue-400/10', text: 'text-blue-400' },
		ExpressJs: { bg: 'bg-yellow-700/10', text: 'text-yellow-400' },
		NestJS: { bg: 'bg-red-500/10', text: 'text-red-500' }
	};
</script>

<section id="tech-stack" class="overflow-hidden bg-bg-secondary py-24">
	<Container>
		<ScrollReveal>
			<SectionHeading title={$t.techStack.title} subtitle={$t.techStack.subtitle} />
		</ScrollReveal>

		<!-- Marquee Rows -->
		<div class="space-y-6">
			<!-- First Row - Left to Right -->
			<ScrollReveal delay={100}>
				<Marquee speed={40} pauseOnHover={true}>
					{#each technologies as tech}
						{@const colors = colorMap[tech]}
						<div
							class="card-glow group mx-3 flex flex-col items-center justify-center rounded-2xl bg-bg-tertiary p-6"
							style="min-width: 140px;"
						>
							<div
								class="mb-4 flex h-16 w-16 items-center justify-center rounded-xl {colors.bg} text-2xl font-bold {colors.text} transition-all duration-300 group-hover:scale-110"
							>
								{tech.charAt(0)}
							</div>
							<span
								class="text-sm font-medium text-text-secondary transition-colors group-hover:text-text-primary"
							>
								{tech}
							</span>
						</div>
					{/each}
				</Marquee>
			</ScrollReveal>

			<!-- Second Row - Right to Left -->
			<ScrollReveal delay={200}>
				<Marquee speed={35} reverse={true} pauseOnHover={true}>
					{#each [...technologies].reverse() as tech}
						{@const colors = colorMap[tech]}
						<div
							class="card-glow group mx-3 flex flex-col items-center justify-center rounded-2xl bg-bg-tertiary p-6"
							style="min-width: 140px;"
						>
							<div
								class="mb-4 flex h-16 w-16 items-center justify-center rounded-xl {colors.bg} text-2xl font-bold {colors.text} transition-all duration-300 group-hover:scale-110"
							>
								{tech.charAt(0)}
							</div>
							<span
								class="text-sm font-medium text-text-secondary transition-colors group-hover:text-text-primary"
							>
								{tech}
							</span>
						</div>
					{/each}
				</Marquee>
			</ScrollReveal>
		</div>

		<!-- Category Labels -->
		<ScrollReveal delay={300}>
			<div class="mt-12 flex flex-wrap justify-center gap-4">
				<span
					class="rounded-full border border-border-default bg-bg-elevated px-4 py-2 text-sm font-medium text-text-secondary"
				>
					Frontend
				</span>
				<span
					class="rounded-full border border-border-default bg-bg-elevated px-4 py-2 text-sm font-medium text-text-secondary"
				>
					Backend
				</span>
				<span
					class="rounded-full border border-border-default bg-bg-elevated px-4 py-2 text-sm font-medium text-text-secondary"
				>
					Database
				</span>
				<span
					class="rounded-full border border-border-default bg-bg-elevated px-4 py-2 text-sm font-medium text-text-secondary"
				>
					DevOps
				</span>
			</div>
		</ScrollReveal>
	</Container>
</section>
