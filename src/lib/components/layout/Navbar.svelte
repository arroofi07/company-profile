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
	class="bg-bg-primary border border-purple-500/20 fixed top-0 right-0 left-0 z-50 transition-all duration-300
	{scrolled ? 'py-3' : 'py-5'}"
>
	<Container>
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a href="#hero" class="flex items-center gap-2 text-xl font-bold">
				<img src={logo} alt="Solaria Logo" class="h-10 w-16" />
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

		<!-- Mobile Navigation -->
		<div class="mobile-menu md:hidden" class:open={isMenuOpen}>
			<div class="flex flex-col gap-4 border-t border-purple-500/20 pt-4">
				<a
					href="#hero"
					class="menu-item text-sm font-medium text-text-secondary transition-colors hover:text-purple-400"
					onclick={closeMenu}>{$t.nav.home}</a
				>
				<a
					href="#services"
					class="menu-item text-sm font-medium text-text-secondary transition-colors hover:text-purple-400"
					onclick={closeMenu}>{$t.nav.services}</a
				>
				<a
					href="#portfolio"
					class="menu-item text-sm font-medium text-text-secondary transition-colors hover:text-purple-400"
					onclick={closeMenu}>{$t.nav.portfolio}</a
				>
				<a
					href="#process"
					class="menu-item text-sm font-medium text-text-secondary transition-colors hover:text-purple-400"
					onclick={closeMenu}>{$t.nav.process}</a
				>
				<a
					href="#pricing"
					class="menu-item text-sm font-medium text-text-secondary transition-colors hover:text-purple-400"
					onclick={closeMenu}>{$t.nav.pricing}</a
				>
				<a
					href="#faq"
					class="menu-item text-sm font-medium text-text-secondary transition-colors hover:text-purple-400"
					onclick={closeMenu}>{$t.nav.faq}</a
				>
				<a
					href="#contact"
					class="menu-item text-sm font-medium text-text-secondary transition-colors hover:text-purple-400"
					onclick={closeMenu}>{$t.nav.contact}</a
				>
				<div class="menu-item">
					<Button href="#contact" size="sm" variant="cta" onclick={closeMenu}>{$t.nav.cta}</Button>
				</div>
			</div>
		</div>
	</Container>
</nav>

<style>
	/* Hamburger Button Animation */
	.hamburger {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 6px;
		width: 32px;
		height: 32px;
		cursor: pointer;
		background: transparent;
		border: none;
		padding: 4px;
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
		width: 24px;
		height: 2px;
		background-color: currentColor;
		border-radius: 2px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		transform-origin: center;
	}

	.hamburger.active .bar:nth-child(1) {
		transform: translateY(8px) rotate(45deg);
	}

	.hamburger.active .bar:nth-child(2) {
		opacity: 0;
		transform: scaleX(0);
	}

	.hamburger.active .bar:nth-child(3) {
		transform: translateY(-8px) rotate(-45deg);
	}

	/* Mobile Menu Animation */
	.mobile-menu {
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		margin-top: 0;
		transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.mobile-menu.open {
		max-height: 500px;
		opacity: 1;
		margin-top: 1rem;
	}

	/* Menu Items Stagger Animation */
	.menu-item {
		opacity: 0;
		transform: translateY(-10px);
	}

	.mobile-menu.open .menu-item {
		animation: fadeInDown 0.3s ease forwards;
	}

	.mobile-menu.open .menu-item:nth-child(1) {
		animation-delay: 50ms;
	}
	.mobile-menu.open .menu-item:nth-child(2) {
		animation-delay: 100ms;
	}
	.mobile-menu.open .menu-item:nth-child(3) {
		animation-delay: 150ms;
	}
	.mobile-menu.open .menu-item:nth-child(4) {
		animation-delay: 200ms;
	}
	.mobile-menu.open .menu-item:nth-child(5) {
		animation-delay: 250ms;
	}
	.mobile-menu.open .menu-item:nth-child(6) {
		animation-delay: 300ms;
	}
	.mobile-menu.open .menu-item:nth-child(7) {
		animation-delay: 350ms;
	}
	.mobile-menu.open .menu-item:nth-child(8) {
		animation-delay: 400ms;
	}

	@keyframes fadeInDown {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
