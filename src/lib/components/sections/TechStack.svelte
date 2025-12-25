<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import Marquee from '$lib/components/ui/Marquee.svelte';
	import { t } from '$lib/i18n';

	const technologies = [
		'React',
		'Svelte',
		'Vue.js',
		'Next.js',
		'Node.js',
		'TypeScript',
		'Python',
		'PostgreSQL',
		'MongoDB',
		'AWS',
		'Docker',
		'Tailwind'
	];

	// Warna berbeda untuk setiap teknologi berdasarkan brand identity
	const colorMap: Record<string, { bg: string; text: string }> = {
		'React': { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
		'Svelte': { bg: 'bg-orange-500/20', text: 'text-orange-400' },
		'Vue.js': { bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
		'Next.js': { bg: 'bg-white/20', text: 'text-white' },
		'Node.js': { bg: 'bg-green-500/20', text: 'text-green-400' },
		'TypeScript': { bg: 'bg-blue-500/20', text: 'text-blue-400' },
		'Python': { bg: 'bg-yellow-500/20', text: 'text-yellow-400' },
		'PostgreSQL': { bg: 'bg-indigo-500/20', text: 'text-indigo-400' },
		'MongoDB': { bg: 'bg-green-600/20', text: 'text-green-500' },
		'AWS': { bg: 'bg-amber-500/20', text: 'text-amber-400' },
		'Docker': { bg: 'bg-sky-500/20', text: 'text-sky-400' },
		'Tailwind': { bg: 'bg-teal-500/20', text: 'text-teal-400' }
	};
</script>

<section id="tech-stack" class="bg-bg-secondary py-24 overflow-hidden">
	<Container>
		<ScrollReveal>
			<SectionHeading
				title={$t.techStack.title}
				subtitle={$t.techStack.subtitle}
			/>
		</ScrollReveal>

		<!-- Marquee Rows -->
		<div class="space-y-6">
			<!-- First Row - Left to Right -->
			<ScrollReveal delay={100}>
				<Marquee speed={40} pauseOnHover={true}>
					{#each technologies as tech}
						{@const colors = colorMap[tech]}
						<div
							class="card-glow group flex flex-col items-center justify-center rounded-2xl bg-bg-tertiary p-6 mx-3"
							style="min-width: 140px;"
						>
							<div
								class="mb-4 flex h-16 w-16 items-center justify-center rounded-xl {colors.bg} text-2xl font-bold {colors.text} transition-all duration-300 group-hover:scale-110"
							>
								{tech.charAt(0)}
							</div>
							<span class="text-sm font-medium text-text-secondary transition-colors group-hover:text-text-primary">
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
							class="card-glow group flex flex-col items-center justify-center rounded-2xl bg-bg-tertiary p-6 mx-3"
							style="min-width: 140px;"
						>
							<div
								class="mb-4 flex h-16 w-16 items-center justify-center rounded-xl {colors.bg} text-2xl font-bold {colors.text} transition-all duration-300 group-hover:scale-110"
							>
								{tech.charAt(0)}
							</div>
							<span class="text-sm font-medium text-text-secondary transition-colors group-hover:text-text-primary">
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
				<span class="rounded-full border border-border-default bg-bg-elevated px-4 py-2 text-sm font-medium text-text-secondary">
					Frontend
				</span>
				<span class="rounded-full border border-border-default bg-bg-elevated px-4 py-2 text-sm font-medium text-text-secondary">
					Backend
				</span>
				<span class="rounded-full border border-border-default bg-bg-elevated px-4 py-2 text-sm font-medium text-text-secondary">
					Database
				</span>
				<span class="rounded-full border border-border-default bg-bg-elevated px-4 py-2 text-sm font-medium text-text-secondary">
					DevOps
				</span>
			</div>
		</ScrollReveal>
	</Container>
</section>
