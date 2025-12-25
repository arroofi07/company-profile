<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import LanguageSwitcher from '$lib/components/ui/LanguageSwitcher.svelte';
	import { t } from '$lib/i18n';

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
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="fixed left-0 right-0 top-0 z-50 transition-all duration-300
	{scrolled ? 'glass-purple border-b border-purple-500/20 py-3' : 'bg-transparent py-5'}"
>
	<Container>
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a href="#hero" class="text-xl font-bold">
				<span class="gradient-text">{$t.company.name}</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center gap-8 md:flex">
				<a href="#hero" class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400">{$t.nav.home}</a>
				<a href="#services" class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400">{$t.nav.services}</a>
				<a href="#portfolio" class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400">{$t.nav.portfolio}</a>
				<a href="#process" class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400">{$t.nav.process}</a>
				<a href="#pricing" class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400">{$t.nav.pricing}</a>
				<a href="#faq" class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400">{$t.nav.faq}</a>
				<a href="#contact" class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400">{$t.nav.contact}</a>
			</div>

			<!-- CTA Button & Language Switcher -->
			<div class="hidden items-center gap-3 md:flex">
				<LanguageSwitcher />
				<Button href="#contact" size="sm" variant="cta">{$t.nav.cta}</Button>
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="text-text-primary md:hidden"
				onclick={toggleMenu}
				aria-label="Toggle menu"
			>
				{#if isMenuOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>

		<!-- Mobile Navigation -->
		{#if isMenuOpen}
			<div class="mt-4 border-t border-purple-500/20 pt-4 md:hidden">
				<div class="flex flex-col gap-4">
					<a href="#hero" class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400" onclick={closeMenu}>{$t.nav.home}</a>
					<a href="#services" class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400" onclick={closeMenu}>{$t.nav.services}</a>
					<a href="#portfolio" class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400" onclick={closeMenu}>{$t.nav.portfolio}</a>
					<a href="#process" class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400" onclick={closeMenu}>{$t.nav.process}</a>
					<a href="#pricing" class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400" onclick={closeMenu}>{$t.nav.pricing}</a>
					<a href="#faq" class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400" onclick={closeMenu}>{$t.nav.faq}</a>
					<a href="#contact" class="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400" onclick={closeMenu}>{$t.nav.contact}</a>
					<div class="flex items-center gap-3">
						<LanguageSwitcher />
						<Button href="#contact" size="sm" variant="cta" onclick={closeMenu}>{$t.nav.cta}</Button>
					</div>
				</div>
			</div>
		{/if}
	</Container>
</nav>
