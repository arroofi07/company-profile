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

	// Web3Forms Access Key - dapatkan dari https://web3forms.com/
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
				// Reset after 3 seconds
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

<section id="contact" class="relative overflow-hidden bg-bg-secondary py-24">
	<!-- Background Orbs -->
	<div class="orb-glow absolute top-1/4 left-0 h-96 w-96 opacity-20"></div>
	<div class="orb-glow absolute right-0 bottom-1/4 h-64 w-64 opacity-15"></div>

	<Container>
		<!-- Section Header -->
		<ScrollReveal>
			<div class="mb-16 text-center">
				<h2 class="text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
					{$t.contact.title.split(' ')[0]}
					<span class="text-elegant gradient-text"
						>{$t.contact.title.split(' ').slice(1).join(' ')}</span
					>
				</h2>
				<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
					{$t.contact.subtitle}
				</p>
			</div>
		</ScrollReveal>

		<div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
			<!-- Contact Info -->
			<ScrollReveal direction="left">
				<div class="relative">
					<div class="mb-8">
						<h3 class="mb-4 text-3xl font-bold text-text-primary">
							{$t.contact.heading}
						</h3>
						<p class="text-lg leading-relaxed text-text-secondary">
							{$t.contact.description}
						</p>
					</div>

					<div class="space-y-6">
						<div
							class="card-glow group glass-purple flex items-start gap-5 rounded-2xl p-5 transition-all"
						>
							<div
								class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-500/20"
							>
								<Mail class="text-purple-400" size={24} />
							</div>
							<div>
								<div class="mb-1 font-semibold text-text-primary">{$t.contact.email}</div>
								<a
									href="mailto:{$t.company.email}"
									class="text-text-secondary transition-colors hover:text-purple-400"
								>
									{$t.company.email}
								</a>
							</div>
						</div>
						<div
							class="card-glow group glass-purple flex items-start gap-5 rounded-2xl p-5 transition-all"
						>
							<div
								class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-500/20"
							>
								<MessageCircle class="text-purple-400" size={24} />
							</div>
							<div>
								<div class="mb-1 font-semibold text-text-primary">{$t.contact.whatsapp}</div>
								<a
									href="tel:{$t.company.whatsapp}"
									class="text-text-secondary transition-colors hover:text-purple-400"
								>
									{$t.company.whatsapp}
								</a>
							</div>
						</div>

						<div
							class="card-glow group glass-purple flex items-start gap-5 rounded-2xl p-5 transition-all"
						>
							<div
								class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-500/20"
							>
								<MapPin class="text-purple-400" size={24} />
							</div>
							<div>
								<div class="mb-1 font-semibold text-text-primary">{$t.contact.location}</div>
								<span class="text-text-secondary">{$t.company.address}</span>
							</div>
						</div>
					</div>
				</div>
			</ScrollReveal>

			<!-- Contact Form -->
			<ScrollReveal direction="right" delay={100}>
				<div class="card-glow glass-purple relative overflow-hidden rounded-3xl p-8 md:p-10">
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
						<form onsubmit={handleSubmit} class="relative space-y-6">
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

							<div class="grid gap-6 sm:grid-cols-2">
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
							</div>

							<div>
								<label for="message" class="mb-2 block text-sm font-semibold text-text-primary">
									{$t.contact.form.message}
								</label>
								<textarea
									id="message"
									bind:value={formData.message}
									required
									rows={5}
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
