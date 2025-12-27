<script lang="ts">
	import { ExternalLink, ArrowLeft, Eye, EyeOff, Star } from 'lucide-svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let locale = $state<'id' | 'en'>('id');

	const portfolio = $derived(data.portfolio);
	const title = $derived(locale === 'id' ? portfolio?.title_id : portfolio?.title_en);
	const description = $derived(locale === 'id' ? portfolio?.description_id : portfolio?.description_en);
</script>

<svelte:head>
	<title>Preview: {portfolio?.title_id} | Admin</title>
</svelte:head>

<div class="space-y-6">
	<!-- Header -->
	<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
		<div class="flex items-center gap-4">
			<a
				href="/admin/portfolio"
				class="p-2 text-text-muted hover:text-text-primary hover:bg-bg-elevated rounded-lg transition-colors"
			>
				<ArrowLeft size={24} />
			</a>
			<div>
				<h1 class="text-2xl font-bold text-text-primary">Preview</h1>
				<div class="flex items-center gap-2 mt-1">
					{#if portfolio?.published}
						<span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded-full">
							<Eye size={12} />
							Published
						</span>
					{:else}
						<span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">
							<EyeOff size={12} />
							Draft
						</span>
					{/if}
					{#if portfolio?.featured}
						<span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-purple-500/20 text-purple-400 rounded-full">
							<Star size={12} class="fill-purple-400" />
							Featured
						</span>
					{/if}
				</div>
			</div>
		</div>

		<div class="flex items-center gap-3">
			<!-- Language Toggle -->
			<div class="flex rounded-lg overflow-hidden border border-border-subtle">
				<button
					onclick={() => (locale = 'id')}
					class="px-3 py-1.5 text-sm transition-colors {locale === 'id'
						? 'bg-purple-500/20 text-purple-400'
						: 'text-text-muted hover:text-text-primary'}"
				>
					ID
				</button>
				<button
					onclick={() => (locale = 'en')}
					class="px-3 py-1.5 text-sm transition-colors {locale === 'en'
						? 'bg-purple-500/20 text-purple-400'
						: 'text-text-muted hover:text-text-primary'}"
				>
					EN
				</button>
			</div>

			<a
				href="/admin/portfolio/{portfolio?.id}"
				class="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-xl hover:bg-purple-500/30 transition-colors"
			>
				Edit
			</a>
		</div>
	</div>

	{#if portfolio}
		<!-- Preview Card -->
		<div class="glass-purple rounded-2xl p-6">
			<h2 class="text-lg font-semibold text-text-secondary mb-4">Tampilan di Website</h2>

			<!-- Simulated Portfolio Card -->
			<div class="max-w-md mx-auto">
				<div class="card-lift group relative overflow-hidden rounded-xl border border-border-subtle bg-bg-tertiary transition-all duration-300 hover:border-border-hover">
					<!-- Image Container -->
					<div class="relative aspect-[4/3] overflow-hidden">
						{#if portfolio.image_url}
							<img
								src={portfolio.image_url}
								alt={title}
								class="absolute inset-0 w-full h-full object-cover"
							/>
						{:else}
							<div class="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900"></div>
						{/if}
						<!-- Pattern overlay -->
						<div
							class="absolute inset-0 opacity-10"
							style="background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;);"
						></div>

						<!-- Featured badge -->
						{#if portfolio.featured}
							<div class="absolute top-4 left-4 z-10">
								<span class="rounded-full bg-text-primary px-3 py-1 text-xs font-semibold text-bg-primary">
									Featured
								</span>
							</div>
						{/if}

						<!-- Hover Overlay -->
						<div class="absolute inset-0 flex flex-col items-center justify-center bg-bg-primary/90 opacity-0 transition-all duration-300 group-hover:opacity-100">
							<span class="mb-4 text-xl font-bold text-text-primary">{title}</span>
							<button class="flex items-center gap-2 rounded-full bg-accent-cta px-6 py-3 font-medium text-black transition-transform hover:scale-105">
								View Project
								<ExternalLink size={16} />
							</button>
						</div>
					</div>

					<!-- Content -->
					<div class="p-6">
						<h3 class="mb-2 text-lg font-bold text-text-primary group-hover:text-accent-cta transition-colors">
							{title}
						</h3>
						<p class="mb-4 text-sm text-text-secondary line-clamp-2">
							{description}
						</p>
						<div class="flex flex-wrap gap-2">
							{#each portfolio.tags.slice(0, 3) as tag}
								<span class="rounded-full bg-bg-elevated px-3 py-1 text-xs font-medium text-text-muted">
									{tag}
								</span>
							{/each}
							{#if portfolio.tags.length > 3}
								<span class="rounded-full bg-bg-elevated px-3 py-1 text-xs font-medium text-text-secondary">
									+{portfolio.tags.length - 3}
								</span>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Details -->
		<div class="glass-purple rounded-2xl p-6">
			<h2 class="text-lg font-semibold text-text-secondary mb-4">Detail</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<p class="text-sm text-text-muted">Slug</p>
					<p class="text-text-primary font-mono text-sm">{portfolio.slug}</p>
				</div>
				<div>
					<p class="text-sm text-text-muted">Link</p>
					<p class="text-text-primary">
						{#if portfolio.link}
							<a href={portfolio.link} target="_blank" class="text-purple-400 hover:underline">
								{portfolio.link}
							</a>
						{:else}
							<span class="text-text-muted">-</span>
						{/if}
					</p>
				</div>
				<div>
					<p class="text-sm text-text-muted">Dibuat</p>
					<p class="text-text-primary">{new Date(portfolio.created_at).toLocaleDateString('id-ID')}</p>
				</div>
				<div>
					<p class="text-sm text-text-muted">Diperbarui</p>
					<p class="text-text-primary">{new Date(portfolio.updated_at).toLocaleDateString('id-ID')}</p>
				</div>
			</div>
		</div>
	{:else}
		<div class="glass-purple rounded-2xl p-12 text-center">
			<p class="text-text-secondary">Portfolio tidak ditemukan</p>
			<a href="/admin/portfolio" class="text-purple-400 hover:underline mt-2 inline-block">
				Kembali ke daftar portfolio
			</a>
		</div>
	{/if}
</div>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
