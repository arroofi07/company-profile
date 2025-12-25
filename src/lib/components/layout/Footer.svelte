<script lang="ts">
	import { Instagram, MessageCircle, Send, Mail, MapPin } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import { t } from '$lib/i18n';
	import logo from '$lib/assets/solaria.png';

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-purple-500/20 bg-bg-primary py-16">
	<Container>
		<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
			<!-- Company Info -->
			<div class="lg:col-span-1">
				<a href="#hero" class="flex items-center gap-3 text-2xl font-bold">
					<img src={logo} alt="Solaria Logo" class="h-10 w-auto" />
					<span class="gradient-text">{$t.company.name}</span>
				</a>
				<p class="mt-4 text-text-secondary">
					{$t.company.tagline}
				</p>
				<div class="mt-6 flex gap-4">
					<a
						href="https://wa.me/+6285709466801"
						class="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-400 transition-all hover:bg-green-500/20"
						aria-label="WhatsApp"
					>
						<MessageCircle size={18} />
					</a>
					<a
						href="https://t.me/han_arpansi"
						class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 transition-all hover:bg-blue-500/20"
						aria-label="Telegram"
					>
						<Send size={18} />
					</a>
					<a
						href="https://instagram.com"
						class="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/10 text-pink-400 transition-all hover:bg-pink-500/20"
						aria-label="Instagram"
					>
						<Instagram size={18} />
					</a>
					<a
						href="mailto:solariadev7@gmail.com"
						class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 transition-all hover:bg-purple-500/20"
						aria-label="Email"
					>
						<Mail size={18} />
					</a>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-4 text-lg font-semibold text-text-primary">{$t.footer.quickLinks}</h3>
				<ul class="space-y-3">
					<li>
						<a href="#hero" class="text-text-secondary transition-colors hover:text-purple-400">
							{$t.nav.home}
						</a>
					</li>
					<li>
						<a href="#services" class="text-text-secondary transition-colors hover:text-purple-400">
							{$t.nav.services}
						</a>
					</li>
					<li>
						<a href="#portfolio" class="text-text-secondary transition-colors hover:text-purple-400">
							{$t.nav.portfolio}
						</a>
					</li>
					<li>
						<a href="#process" class="text-text-secondary transition-colors hover:text-purple-400">
							{$t.nav.process}
						</a>
					</li>
					<li>
						<a href="#pricing" class="text-text-secondary transition-colors hover:text-purple-400">
							{$t.nav.pricing}
						</a>
					</li>
					<li>
						<a href="#faq" class="text-text-secondary transition-colors hover:text-purple-400">
							{$t.nav.faq}
						</a>
					</li>
					<li>
						<a href="#contact" class="text-text-secondary transition-colors hover:text-purple-400">
							{$t.nav.contact}
						</a>
					</li>
				</ul>
			</div>

			<!-- Services -->
			<div>
				<h3 class="mb-4 text-lg font-semibold text-text-primary">{$t.footer.services}</h3>
				<ul class="space-y-3">
					{#each $t.footer.serviceList as service}
						<li>
							<span class="text-text-secondary">{service}</span>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact Info -->
			<div>
				<h3 class="mb-4 text-lg font-semibold text-text-primary">{$t.footer.contact}</h3>
				<ul class="space-y-4">
					<li class="flex items-center gap-3 text-text-secondary">
						<Mail size={18} class="text-purple-400" />
						<a href="mailto:{$t.company.email}" class="hover:text-purple-400 transition-colors">
							{$t.company.email}
						</a>
					</li>
					<li class="flex items-center gap-3 text-text-secondary">
						<MapPin size={18} class="text-purple-400" />
						<span>{$t.company.address}</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="mt-12 border-t border-purple-500/20 pt-8 text-center">
			<p class="text-text-muted">
				&copy; {currentYear} {$t.company.name}. {$t.footer.copyright}
			</p>
		</div>
	</Container>
</footer>
