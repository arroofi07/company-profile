<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import LanguageSwitcher from '$lib/components/ui/LanguageSwitcher.svelte';
	import { t } from '$lib/i18n';
	import logo from '$lib/assets/solaria.png';

	let isMenuOpen = $state(false);
	let scrolled = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	$effect(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		// Check initial scroll position on mount
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 border border-purple-500/20 bg-bg-primary transition-all duration-300
	{scrolled ? 'py-3' : 'py-4'}"
>
	<Container>
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a href="#hero" class="flex items-center gap-2 text-xl font-bold">
				<img src={logo} alt="Solaria Logo" class="h-9 w-14 md:h-10 md:w-16" />
				<span class="gradient-text">{$t.company.name}</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center gap-8 md:flex">
				<a
					href="#hero"
					class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400"
					>{$t.nav.home}</a
				>
				<a
					href="#services"
					class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400"
					>{$t.nav.services}</a
				>
				<a
					href="#portfolio"
					class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400"
					>{$t.nav.portfolio}</a
				>
				<a
					href="#process"
					class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400"
					>{$t.nav.process}</a
				>
				<a
					href="#pricing"
					class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400"
					>{$t.nav.pricing}</a
				>
				<a
					href="#contact"
					class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400"
					>{$t.nav.contact}</a
				>
				<a
					href="#faq"
					class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400"
					>{$t.nav.faq}</a
				>
			</div>

			<!-- CTA Button & Language Switcher -->
			<div class="hidden items-center gap-3 md:flex">
				<LanguageSwitcher />
				<Button href="#contact" size="sm" variant="cta">{$t.nav.cta}</Button>
			</div>

			<!-- Mobile Language Switcher & Menu Button -->
			<div class="flex items-center gap-3 md:hidden">
				<LanguageSwitcher />
				<button
					class="hamburger"
					class:active={isMenuOpen}
					onclick={toggleMenu}
					aria-label="Toggle menu"
				>
					<span class="bar"></span>
					<span class="bar"></span>
					<span class="bar"></span>
				</button>
			</div>
		</div>
	</Container>

	<!-- Mobile Navigation - Full overlay style -->
	{#if isMenuOpen}
		<!-- Backdrop -->
		<div class="mobile-backdrop md:hidden" onclick={closeMenu} role="presentation"></div>
	{/if}

	<div class="mobile-menu md:hidden" class:open={isMenuOpen}>
		<div class="mobile-menu-inner">
			<!-- Nav links -->
			<nav class="flex flex-col">
				<a href="#hero" class="menu-item mobile-nav-link" onclick={closeMenu}>{$t.nav.home}</a>
				<a href="#services" class="menu-item mobile-nav-link" onclick={closeMenu}
					>{$t.nav.services}</a
				>
				<a href="#portfolio" class="menu-item mobile-nav-link" onclick={closeMenu}
					>{$t.nav.portfolio}</a
				>
				<a href="#process" class="menu-item mobile-nav-link" onclick={closeMenu}>{$t.nav.process}</a
				>
				<a href="#pricing" class="menu-item mobile-nav-link" onclick={closeMenu}>{$t.nav.pricing}</a
				>
				<a href="#faq" class="menu-item mobile-nav-link" onclick={closeMenu}>{$t.nav.faq}</a>
				<a href="#contact" class="menu-item mobile-nav-link" onclick={closeMenu}>{$t.nav.contact}</a
				>
			</nav>

			<!-- CTA button pinned at bottom -->
			<div class="menu-item mobile-menu-cta">
				<Button href="#contact" size="lg" variant="cta" onclick={closeMenu} class="w-full">
					{$t.nav.cta}
				</Button>
			</div>
		</div>
	</div>
</nav>

<style>
	/* Hamburger Button Animation */
	.hamburger {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5px;
		width: 36px;
		height: 36px;
		cursor: pointer;
		background: rgba(139, 92, 246, 0.1);
		border: 1px solid rgba(139, 92, 246, 0.2);
		border-radius: 8px;
		padding: 6px;
	}

	@media (max-width: 767px) {
		.hamburger {
			display: flex;
		}
	}

	@media (min-width: 768px) {
		.hamburger {
			display: none;
		}
	}

	.bar {
		display: block;
		width: 18px;
		height: 2px;
		background-color: #c4b5fd;
		border-radius: 2px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		transform-origin: center;
	}

	.hamburger.active .bar:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}

	.hamburger.active .bar:nth-child(2) {
		opacity: 0;
		transform: scaleX(0);
	}

	.hamburger.active .bar:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	/* Backdrop */
	.mobile-backdrop {
		position: fixed;
		inset: 0;
		background: rgba(13, 5, 21, 0.6);
		backdrop-filter: blur(4px);
		z-index: -1;
		animation: fadeIn 0.2s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Mobile Menu Container */
	.mobile-menu {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.mobile-menu.open {
		max-height: 600px;
	}

	.mobile-menu-inner {
		border-top: 1px solid rgba(139, 92, 246, 0.2);
		background: rgba(13, 5, 21, 0.97);
		backdrop-filter: blur(24px);
		-webkit-backdrop-filter: blur(24px);
		padding: 8px 0 16px;
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	/* Nav Link items */
	:global(.mobile-nav-link) {
		display: block;
		padding: 14px 20px;
		font-size: 0.9375rem;
		font-weight: 500;
		color: #c4b5d4;
		border-bottom: 1px solid rgba(139, 92, 246, 0.08);
		transition:
			background 0.2s,
			color 0.2s;
	}

	:global(.mobile-nav-link:hover) {
		background: rgba(139, 92, 246, 0.08);
		color: #c4b5fd;
	}

	:global(.mobile-nav-link:last-of-type) {
		border-bottom: none;
	}

	.mobile-menu-cta {
		margin: 12px 16px 0;
	}

	/* Menu Items Stagger Animation */
	.menu-item {
		opacity: 0;
		transform: translateY(-8px);
	}

	.mobile-menu.open .menu-item {
		animation: fadeInDown 0.3s ease forwards;
	}

	.mobile-menu.open .menu-item:nth-child(1) {
		animation-delay: 40ms;
	}
	.mobile-menu.open .menu-item:nth-child(2) {
		animation-delay: 80ms;
	}
	.mobile-menu.open .menu-item:nth-child(3) {
		animation-delay: 120ms;
	}
	.mobile-menu.open .menu-item:nth-child(4) {
		animation-delay: 160ms;
	}
	.mobile-menu.open .menu-item:nth-child(5) {
		animation-delay: 200ms;
	}
	.mobile-menu.open .menu-item:nth-child(6) {
		animation-delay: 240ms;
	}
	.mobile-menu.open .menu-item:nth-child(7) {
		animation-delay: 280ms;
	}
	.mobile-menu.open .menu-item:nth-child(8) {
		animation-delay: 320ms;
	}

	@keyframes fadeInDown {
		from {
			opacity: 0;
			transform: translateY(-8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
