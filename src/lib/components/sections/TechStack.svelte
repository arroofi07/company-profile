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
						<div
							class="card-glow group flex flex-col items-center justify-center rounded-2xl bg-bg-tertiary p-6 mx-3"
							style="min-width: 140px;"
						>
							<div
								class="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-bg-elevated text-2xl font-bold text-text-primary transition-all duration-300 group-hover:scale-110"
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
						<div
							class="card-glow group flex flex-col items-center justify-center rounded-2xl bg-bg-tertiary p-6 mx-3"
							style="min-width: 140px;"
						>
							<div
								class="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-bg-elevated text-2xl font-bold text-text-primary transition-all duration-300 group-hover:scale-110"
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
