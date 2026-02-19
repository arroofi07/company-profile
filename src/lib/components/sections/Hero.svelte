<script lang="ts">
	import { ArrowRight, MessageCircle, Send, Instagram, Mail } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import heroImage from '$lib/assets/hero.png';
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
		{
			icon: Mail,
			label: 'Email',
			href: 'mailto:solariadev7@gmail.com',
			color: 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30'
		}
	];
</script>

<section id="hero" class="relative min-h-screen overflow-hidden pt-24 md:pt-32">
	<!-- Purple Orb Background Effects -->
	<div class="orb-glow animate-float-slow absolute top-20 left-1/4 h-64 w-64 md:h-96 md:w-96"></div>
	<div
		class="orb-glow animate-float-delayed absolute right-1/4 bottom-40 h-48 w-48 md:h-64 md:w-64"
	></div>
	<div
		class="orb-glow absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 opacity-50 md:h-80 md:w-80"
	></div>

	<!-- Subtle grid overlay -->
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.03]"
		style="background-image: linear-gradient(rgba(139,92,246,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.2) 1px, transparent 1px); background-size: 60px 60px;"
	></div>

	<Container>
		<div class="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-8">
			<!-- Left Content -->
			<div class="text-center lg:text-left">
				<!-- Badge -->
				<div
					class="animate-fade-in-up glass-purple mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-purple-300 sm:mb-8 sm:px-5 sm:py-2.5 sm:text-sm"
				>
					<span class="h-2 w-2 animate-pulse rounded-full bg-purple-400"></span>
					{$t.hero.badge}
				</div>

				<!-- Headline -->
				<h1
					class="animate-fade-in-up text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
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
					class="animate-fade-in-up mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:mt-8 sm:text-xl lg:mx-0"
					style="animation-delay: 0.2s;"
				>
					{$t.hero.subtitle}
					<span class="font-semibold text-purple-400">{$t.company.name}</span>.
				</p>

				<!-- CTA Buttons -->
				<div
					class="animate-fade-in-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start"
					style="animation-delay: 0.3s;"
				>
					<Button href="#contact" size="lg" variant="cta" class="w-full sm:w-auto">
						{$t.hero.ctaPrimary}
						<ArrowRight size={20} class="ml-2 transition-transform group-hover:translate-x-1" />
					</Button>
					<Button href="#portfolio" variant="outline" size="lg" class="w-full sm:w-auto">
						{$t.hero.ctaSecondary}
					</Button>
				</div>

				<!-- Social Media Links - Full on desktop, icon-only on mobile -->
				<div
					class="animate-fade-in-up mt-10 flex items-center justify-center gap-3 lg:justify-start"
					style="animation-delay: 0.4s;"
				>
					<!-- Mobile: icon-only pills -->
					<div class="flex items-center gap-3 sm:hidden">
						{#each socialLinks as social}
							{@const Icon = social.icon}
							<a
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								class="group glass-purple flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 {social.color}"
								aria-label={social.label}
							>
								<Icon size={20} />
							</a>
						{/each}
					</div>
					<!-- Desktop: full labels -->
					<div class="hidden flex-wrap items-center gap-3 sm:flex">
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
			</div>

			<!-- Right Content - Hero Image -->
			<div
				class="animate-fade-in-up relative flex items-center justify-center lg:justify-end"
				style="animation-delay: 0.3s;"
			>
				<!-- Floating Card - Bottom Left (desktop only) -->
				<div class="animate-float-slow absolute bottom-1/3 left-2 z-20 hidden lg:block">
					<div class="glass-purple rounded-2xl p-4 shadow-xl">
						<div class="flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-300/20">
								<MessageCircle size={20} class="text-teal-400" />
							</div>
							<div>
								<p class="text-sm font-semibold text-text-primary">WhatsApp</p>
								<p class="text-xs text-white">Fast Response</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Floating Card - Bottom Right (desktop only) -->
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
								<p class="text-xs text-white">solariadev7@gmail.com</p>
							</div>
						</div>
					</div>
				</div>

				<img
					src={heroImage}
					alt="Hero Illustration"
					class="relative z-10 w-full max-w-sm drop-shadow-[0_0_40px_rgba(139,92,246,0.3)] sm:max-w-md lg:max-w-xl"
				/>
			</div>
		</div>
	</Container>
</section>
