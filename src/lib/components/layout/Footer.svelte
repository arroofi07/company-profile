<script lang="ts">
	import { Instagram, MessageCircle, Send, Mail, MapPin } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import { t } from '$lib/i18n';
	import logo from '$lib/assets/solaria.png';

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-purple-500/20 bg-bg-primary py-12 md:py-16">
	<Container>
		<!-- Mobile: stacked layout with 2-col links -->
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
			<!-- Company Info - full width on mobile, 1 col on lg -->
			<div class="sm:col-span-2 lg:col-span-1">
				<a href="#hero" class="flex items-center gap-3 text-2xl font-bold">
					<img src={logo} alt="Solaria Logo" class="h-10 w-auto" />
					<span class="gradient-text">{$t.company.name}</span>
				</a>
				<p class="mt-4 text-sm text-text-secondary md:text-base">
					{$t.company.tagline}
				</p>
				<div class="mt-5 flex gap-3">
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
				<h3 class="mb-4 text-base font-semibold text-text-primary">{$t.footer.quickLinks}</h3>
				<ul class="space-y-2.5">
					<li>
						<a
							href="#hero"
							class="text-sm text-text-secondary transition-colors hover:text-purple-400"
						>
							{$t.nav.home}
						</a>
					</li>
					<li>
						<a
							href="#services"
							class="text-sm text-text-secondary transition-colors hover:text-purple-400"
						>
							{$t.nav.services}
						</a>
					</li>
					<li>
						<a
							href="#portfolio"
							class="text-sm text-text-secondary transition-colors hover:text-purple-400"
						>
							{$t.nav.portfolio}
						</a>
					</li>
					<li>
						<a
							href="#process"
							class="text-sm text-text-secondary transition-colors hover:text-purple-400"
						>
							{$t.nav.process}
						</a>
					</li>
					<li>
						<a
							href="#pricing"
							class="text-sm text-text-secondary transition-colors hover:text-purple-400"
						>
							{$t.nav.pricing}
						</a>
					</li>
					<li>
						<a
							href="#faq"
							class="text-sm text-text-secondary transition-colors hover:text-purple-400"
						>
							{$t.nav.faq}
						</a>
					</li>
					<li>
						<a
							href="#contact"
							class="text-sm text-text-secondary transition-colors hover:text-purple-400"
						>
							{$t.nav.contact}
						</a>
					</li>
				</ul>
			</div>

			<!-- Services -->
			<div>
				<h3 class="mb-4 text-base font-semibold text-text-primary">{$t.footer.services}</h3>
				<ul class="space-y-2.5">
					{#each $t.footer.serviceList as service}
						<li>
							<span class="text-sm text-text-secondary">{service}</span>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact Info -->
			<div>
				<h3 class="mb-4 text-base font-semibold text-text-primary">{$t.footer.contact}</h3>
				<ul class="space-y-3">
					<li class="flex items-center gap-3 text-text-secondary">
						<Mail size={16} class="shrink-0 text-purple-400" />
						<a
							href="mailto:{$t.company.email}"
							class="text-sm break-all transition-colors hover:text-purple-400"
						>
							{$t.company.email}
						</a>
					</li>
					<li class="flex items-start gap-3 text-text-secondary">
						<MapPin size={16} class="mt-0.5 shrink-0 text-purple-400" />
						<span class="text-sm">{$t.company.address}</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="mt-10 border-t border-purple-500/20 pt-6 text-center md:mt-12 md:pt-8">
			<p class="text-sm text-text-muted">
				&copy; {currentYear}
				{$t.company.name}. {$t.footer.copyright}
			</p>
		</div>
	</Container>
</footer>
