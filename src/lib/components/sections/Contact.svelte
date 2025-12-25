<script lang="ts">
	import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { t } from '$lib/i18n';

	let formData = $state({
		name: '',
		email: '',
		phone: '',
		message: ''
	});

	let isSubmitting = $state(false);
	let submitted = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		isSubmitting = false;
		submitted = true;

		// Reset after 3 seconds
		setTimeout(() => {
			submitted = false;
			formData = { name: '', email: '', phone: '', message: '' };
		}, 3000);
	}
</script>

<section id="contact" class="bg-bg-secondary py-24 relative overflow-hidden">
	<!-- Background Orbs -->
	<div class="absolute left-0 top-1/4 h-96 w-96 orb-glow opacity-20"></div>
	<div class="absolute right-0 bottom-1/4 h-64 w-64 orb-glow opacity-15"></div>

	<Container>
		<!-- Section Header -->
		<ScrollReveal>
			<div class="mb-16 text-center">
				<h2 class="text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
					{$t.contact.title.split(' ')[0]} <span class="text-elegant gradient-text">{$t.contact.title.split(' ').slice(1).join(' ')}</span>
				</h2>
				<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
					{$t.contact.subtitle}
				</p>
			</div>
		</ScrollReveal>

		<div class="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
			<!-- Contact Info -->
			<ScrollReveal direction="left">
				<div class="relative">
					<div class="mb-8">
						<h3 class="text-3xl font-bold text-text-primary mb-4">
							{$t.contact.heading}
						</h3>
						<p class="text-lg text-text-secondary leading-relaxed">
							{$t.contact.description}
						</p>
					</div>

					<div class="space-y-6">
						<div
							class="card-glow group flex items-start gap-5 rounded-2xl glass-purple p-5 transition-all"
						>
							<div
								class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-500/20"
							>
								<Mail class="text-purple-400" size={24} />
							</div>
							<div>
								<div class="font-semibold text-text-primary mb-1">{$t.contact.email}</div>
								<a
									href="mailto:{$t.company.email}"
									class="text-text-secondary hover:text-purple-400 transition-colors"
								>
									{$t.company.email}
								</a>
							</div>
						</div>

						<div
							class="card-glow group flex items-start gap-5 rounded-2xl glass-purple p-5 transition-all"
						>
							<div
								class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-500/20"
							>
								<Phone class="text-purple-400" size={24} />
							</div>
							<div>
								<div class="font-semibold text-text-primary mb-1">{$t.contact.phone}</div>
								<a
									href="tel:{$t.company.phone}"
									class="text-text-secondary hover:text-purple-400 transition-colors"
								>
									{$t.company.phone}
								</a>
							</div>
						</div>

						<div
							class="card-glow group flex items-start gap-5 rounded-2xl glass-purple p-5 transition-all"
						>
							<div
								class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-500/20"
							>
								<MapPin class="text-purple-400" size={24} />
							</div>
							<div>
								<div class="font-semibold text-text-primary mb-1">{$t.contact.location}</div>
								<span class="text-text-secondary">{$t.company.address}</span>
							</div>
						</div>
					</div>
				</div>
			</ScrollReveal>

			<!-- Contact Form -->
			<ScrollReveal direction="right" delay={100}>
				<div class="card-glow rounded-3xl glass-purple p-8 md:p-10 relative overflow-hidden">
					{#if submitted}
						<div
							class="relative flex h-full flex-col items-center justify-center py-16 text-center"
						>
							<div
								class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 animate-scale-in"
							>
								<CheckCircle class="text-green-400" size={40} />
							</div>
							<h4 class="mb-3 text-2xl font-bold text-text-primary">{$t.contact.form.success}</h4>
							<p class="text-text-secondary">{$t.contact.form.successMessage}</p>
						</div>
					{:else}
						<form onsubmit={handleSubmit} class="relative space-y-6">
							<div>
								<label for="name" class="mb-2 block text-sm font-semibold text-text-primary">
									{$t.contact.form.name}
								</label>
								<input
									type="text"
									id="name"
									bind:value={formData.name}
									required
									class="w-full rounded-xl border border-border-default bg-bg-tertiary px-4 py-3.5 text-text-primary placeholder-text-muted transition-all focus:border-border-hover focus:outline-none focus:ring-2 focus:ring-white/10"
									placeholder={$t.contact.form.namePlaceholder}
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
										class="w-full rounded-xl border border-border-default bg-bg-tertiary px-4 py-3.5 text-text-primary placeholder-text-muted transition-all focus:border-border-hover focus:outline-none focus:ring-2 focus:ring-white/10"
										placeholder={$t.contact.form.emailPlaceholder}
									/>
								</div>
								<div>
									<label for="phone" class="mb-2 block text-sm font-semibold text-text-primary">
										{$t.contact.form.phone}
									</label>
									<input
										type="tel"
										id="phone"
										bind:value={formData.phone}
										class="w-full rounded-xl border border-border-default bg-bg-tertiary px-4 py-3.5 text-text-primary placeholder-text-muted transition-all focus:border-border-hover focus:outline-none focus:ring-2 focus:ring-white/10"
										placeholder={$t.contact.form.phonePlaceholder}
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
									class="w-full resize-none rounded-xl border border-border-default bg-bg-tertiary px-4 py-3.5 text-text-primary placeholder-text-muted transition-all focus:border-border-hover focus:outline-none focus:ring-2 focus:ring-white/10"
									placeholder={$t.contact.form.messagePlaceholder}
								></textarea>
							</div>

							<Button type="submit" variant="cta" class="w-full py-4!" disabled={isSubmitting}>
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
