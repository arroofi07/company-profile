<script lang="ts">
	import { ArrowRight, MessageCircle, Send, Instagram, Mail } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import PhoneMockup from '$lib/components/ui/PhoneMockup.svelte';
	import { t } from '$lib/i18n';

	const socialLinks = [
		{
			icon: MessageCircle,
			label: 'WhatsApp',
			href: 'https://wa.me/+6285709466801',
			color: 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
		},
		{
			icon: Send,
			label: 'Telegram',
			href: 'https://t.me/han_arpansi',
			color: 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
		},
		// {
		// 	icon: Instagram,
		// 	label: 'Instagram',
		// 	href: 'https://instagram.com',
		// 	color: 'bg-pink-500/20 text-pink-400 hover:bg-pink-500/30'
		// },
		{
			icon: Mail,
			label: 'Email',
			href: 'mailto:solariadev7@gmail.com',
			color: 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30'
		}
	];
</script>

<section id="hero" class="relative min-h-screen overflow-hidden pt-32">
	<!-- Purple Orb Background Effects -->
	<div class="orb-glow animate-float-slow absolute top-20 left-1/4 h-96 w-96"></div>
	<div class="orb-glow animate-float-delayed absolute right-1/4 bottom-40 h-64 w-64"></div>
	<div
		class="orb-glow absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 opacity-50"
	></div>

	<!-- Subtle grid overlay -->
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.03]"
		style="background-image: linear-gradient(rgba(139,92,246,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.2) 1px, transparent 1px); background-size: 60px 60px;"
	></div>

	<Container>
		<div class="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
			<!-- Left Content -->
			<div class="text-center lg:text-left">
				<!-- Badge -->
				<div
					class="animate-fade-in-up glass-purple mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-purple-300"
				>
					<span class="h-2 w-2 animate-pulse rounded-full bg-purple-400"></span>
					{$t.hero.badge}
				</div>

				<!-- Headline -->
				<h1
					class="animate-fade-in-up text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
					style="animation-delay: 0.1s;"
				>
					<span class="text-text-primary">{$t.hero.title1}</span>
					<br class="hidden sm:block" />
					<span class="text-elegant gradient-text">{$t.hero.titleHighlight}</span>
					<br class="hidden sm:block" />
					<span class="text-text-primary">{$t.hero.title2}</span>
				</h1>

				<!-- Subheadline -->
				<p
					class="animate-fade-in-up mx-auto mt-8 max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl lg:mx-0"
					style="animation-delay: 0.2s;"
				>
					{$t.hero.subtitle}
					<span class="font-semibold text-purple-400">{$t.company.name}</span>.
				</p>

				<!-- CTA Buttons -->
				<div
					class="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
					style="animation-delay: 0.3s;"
				>
					<Button href="#contact" size="lg" variant="cta">
						{$t.hero.ctaPrimary}
						<ArrowRight size={20} class="ml-2 transition-transform group-hover:translate-x-1" />
					</Button>
					<Button href="#portfolio" variant="outline" size="lg">
						{$t.hero.ctaSecondary}
					</Button>
				</div>

				<!-- Social Media Links -->
				<div
					class="animate-fade-in-up mt-16 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
					style="animation-delay: 0.4s;"
				>
					{#each socialLinks as social}
						{@const Icon = social.icon}
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							class="group glass-purple flex items-center gap-3 rounded-full px-5 py-3 transition-all duration-300 hover:scale-105 {social.color}"
						>
							<Icon size={22} />
							<span class="text-sm font-medium text-text-primary">{social.label}</span>
						</a>
					{/each}
				</div>
			</div>

			<!-- Right Content - Phone Mockup -->
			<div
				class="animate-fade-in-up relative flex items-center justify-center lg:justify-end"
				style="animation-delay: 0.3s;"
			>
				<!-- Floating Card - Top Right -->
				<!-- <div class="animate-float-delayed absolute top-16 -right-8 z-20 hidden lg:block">
					<div class="glass-purple rounded-2xl p-4 shadow-xl">
						<div class="flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/20">
								<Instagram size={20} class="text-pink-400" />
							</div>
							<div>
								<p class="text-sm font-semibold text-text-primary">Instagram</p>
								<p class="text-xs text-text-muted">@solaria</p>
							</div>
						</div>
					</div>
				</div> -->

				<!-- Floating Card - Bottom Left -->
				<div class="animate-float-slow absolute bottom-1/3 left-2 z-20 hidden lg:block">
					<div class="glass-purple rounded-2xl p-4 shadow-xl">
						<div class="flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20">
								<Send size={20} class="text-blue-400" />
							</div>
							<div>
								<p class="text-sm font-semibold text-text-primary">Telegram</p>
								<p class="text-xs text-text-muted">Fast Response</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Floating Card - Bottom Right -->
				<div
					class="animate-float absolute -right-4 bottom-1/4 z-20 hidden lg:block"
					style="animation-delay: 0.5s;"
				>
					<div class="glass-purple rounded-2xl p-4 shadow-xl">
						<div class="flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20">
								<Mail size={20} class="text-purple-400" />
							</div>
							<div>
								<p class="text-sm font-semibold text-text-primary">Email</p>
								<p class="text-xs text-text-muted">solariadev7@gmail.com</p>
							</div>
						</div>
					</div>
				</div>

				<PhoneMockup size="lg" showGlow={true} />
			</div>
		</div>
	</Container>
</section>
