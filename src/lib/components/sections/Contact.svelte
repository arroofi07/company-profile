<script lang="ts">
	import { Send, Mail, MessageCircle, MapPin, CheckCircle } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { t } from '$lib/i18n';

	let formData = $state({
		name: '',
		email: '',
		whatsapp: '',
		message: ''
	});

	let isSubmitting = $state(false);
	let submitted = $state(false);
	let errorMessage = $state('');

	// Web3Forms Access Key
	const WEB3FORMS_ACCESS_KEY = '9a340f55-ec11-4e26-9c41-9f6a8c4082e6';

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		errorMessage = '';

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					access_key: WEB3FORMS_ACCESS_KEY,
					name: formData.name,
					email: formData.email,
					whatsapp: formData.whatsapp,
					message: formData.message,
					subject: `Pesan baru dari ${formData.name} - Website Contact Form`
				})
			});

			const result = await response.json();

			if (result.success) {
				submitted = true;
				setTimeout(() => {
					submitted = false;
					formData = { name: '', email: '', whatsapp: '', message: '' };
				}, 3000);
			} else {
				errorMessage = 'Gagal mengirim pesan. Silakan coba lagi.';
			}
		} catch {
			errorMessage = 'Terjadi kesalahan. Silakan coba lagi.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<section id="contact" class="relative overflow-hidden bg-bg-secondary py-16 md:py-24">
	<!-- Background Orbs -->
	<div class="orb-glow absolute top-1/4 left-0 h-64 w-64 opacity-20 md:h-96 md:w-96"></div>
	<div class="orb-glow absolute right-0 bottom-1/4 h-48 w-48 opacity-15 md:h-64 md:w-64"></div>

	<Container>
		<!-- Section Header -->
		<ScrollReveal>
			<div class="mb-10 text-center md:mb-16">
				<h2 class="text-2xl font-bold text-text-primary sm:text-4xl md:text-5xl">
					{$t.contact.title.split(' ')[0]}
					<span class="text-elegant gradient-text"
						>{$t.contact.title.split(' ').slice(1).join(' ')}</span
					>
				</h2>
				<p class="mx-auto mt-3 max-w-2xl text-base text-text-secondary md:mt-4 md:text-lg">
					{$t.contact.subtitle}
				</p>
			</div>
		</ScrollReveal>

		<!-- On mobile: form first, info second. On desktop: info left, form right -->
		<div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
			<!-- Contact Info (order-2 on mobile, order-1 on desktop) -->
			<ScrollReveal direction="left">
				<div class="relative order-2 lg:order-1">
					<div class="mb-6 md:mb-8">
						<h3 class="mb-3 text-xl font-bold text-text-primary md:mb-4 md:text-3xl">
							{$t.contact.heading}
						</h3>
						<p class="text-base leading-relaxed text-text-secondary md:text-lg">
							{$t.contact.description}
						</p>
					</div>

					<div class="space-y-4 md:space-y-6">
						<div
							class="card-glow group glass-purple flex items-start gap-4 rounded-2xl p-4 transition-all md:gap-5 md:p-5"
						>
							<div
								class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/20 md:h-14 md:w-14"
							>
								<Mail class="text-purple-400" size={22} />
							</div>
							<div>
								<div class="mb-1 font-semibold text-text-primary">{$t.contact.email}</div>
								<a
									href="mailto:{$t.company.email}"
									class="text-sm break-all text-text-secondary transition-colors hover:text-purple-400"
								>
									{$t.company.email}
								</a>
							</div>
						</div>
						<div
							class="card-glow group glass-purple flex items-start gap-4 rounded-2xl p-4 transition-all md:gap-5 md:p-5"
						>
							<div
								class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/20 md:h-14 md:w-14"
							>
								<MessageCircle class="text-purple-400" size={22} />
							</div>
							<div>
								<div class="mb-1 font-semibold text-text-primary">{$t.contact.whatsapp}</div>
								<a
									href="tel:{$t.company.whatsapp}"
									class="text-sm text-text-secondary transition-colors hover:text-purple-400"
								>
									{$t.company.whatsapp}
								</a>
							</div>
						</div>

						<div
							class="card-glow group glass-purple flex items-start gap-4 rounded-2xl p-4 transition-all md:gap-5 md:p-5"
						>
							<div
								class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/20 md:h-14 md:w-14"
							>
								<MapPin class="text-purple-400" size={22} />
							</div>
							<div>
								<div class="mb-1 font-semibold text-text-primary">{$t.contact.location}</div>
								<span class="text-sm text-text-secondary">{$t.company.address}</span>
							</div>
						</div>
					</div>
				</div>
			</ScrollReveal>

			<!-- Contact Form (order-1 on mobile = appears first, order-2 on desktop = right side) -->
			<ScrollReveal direction="right" delay={100}>
				<div
					class="card-glow glass-purple relative order-1 overflow-hidden rounded-3xl p-6 md:p-10 lg:order-2"
				>
					{#if submitted}
						<div
							class="relative flex h-full flex-col items-center justify-center py-16 text-center"
						>
							<div
								class="animate-scale-in mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20"
							>
								<CheckCircle class="text-green-400" size={40} />
							</div>
							<h4 class="mb-3 text-2xl font-bold text-text-primary">{$t.contact.form.success}</h4>
							<p class="text-text-secondary">{$t.contact.form.successMessage}</p>
						</div>
					{:else}
						<form onsubmit={handleSubmit} class="relative space-y-5">
							{#if errorMessage}
								<div
									class="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center text-red-400"
								>
									{errorMessage}
								</div>
							{/if}
							<div>
								<label for="name" class="mb-2 block text-sm font-semibold text-text-primary">
									{$t.contact.form.name}
								</label>
								<input
									type="text"
									id="name"
									bind:value={formData.name}
									required
									class="w-full rounded-xl border border-border-default bg-bg-tertiary px-4 py-3.5 text-text-primary placeholder-text-muted transition-all focus:border-border-hover focus:ring-2 focus:ring-white/10 focus:outline-none"
									placeholder={$t.contact.form.namePlaceholder}
								/>
							</div>

							<div>
								<label for="whatsapp" class="mb-2 block text-sm font-semibold text-text-primary">
									{$t.contact.form.whatsapp}
								</label>
								<input
									type="tel"
									id="whatsapp"
									bind:value={formData.whatsapp}
									required
									class="w-full rounded-xl border border-border-default bg-bg-tertiary px-4 py-3.5 text-text-primary placeholder-text-muted transition-all focus:border-border-hover focus:ring-2 focus:ring-white/10 focus:outline-none"
									placeholder={$t.contact.form.whatsappPlaceholder}
								/>
							</div>

							<div>
								<label for="email" class="mb-2 block text-sm font-semibold text-text-primary">
									{$t.contact.form.email}
								</label>
								<input
									type="email"
									id="email"
									bind:value={formData.email}
									required
									class="w-full rounded-xl border border-border-default bg-bg-tertiary px-4 py-3.5 text-text-primary placeholder-text-muted transition-all focus:border-border-hover focus:ring-2 focus:ring-white/10 focus:outline-none"
									placeholder={$t.contact.form.emailPlaceholder}
								/>
							</div>

							<div>
								<label for="message" class="mb-2 block text-sm font-semibold text-text-primary">
									{$t.contact.form.message}
								</label>
								<textarea
									id="message"
									bind:value={formData.message}
									required
									rows={4}
									class="w-full resize-none rounded-xl border border-border-default bg-bg-tertiary px-4 py-3.5 text-text-primary placeholder-text-muted transition-all focus:border-border-hover focus:ring-2 focus:ring-white/10 focus:outline-none"
									placeholder={$t.contact.form.messagePlaceholder}
								></textarea>
							</div>

							<Button
								type="submit"
								variant="cta"
								class="w-full cursor-pointer py-4!"
								disabled={isSubmitting}
							>
								{#if isSubmitting}
									<span
										class="mr-2 inline-block h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent"
									></span>
									{$t.contact.form.submitting}
								{:else}
									{$t.contact.form.submit}
									<Send size={18} class="ml-2" />
								{/if}
							</Button>
						</form>
					{/if}
				</div>
			</ScrollReveal>
		</div>
	</Container>
</section>
