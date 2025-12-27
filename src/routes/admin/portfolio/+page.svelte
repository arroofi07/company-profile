<script lang="ts">
	import { enhance } from '$app/forms';
	import { Plus, Edit, Trash2, Eye, EyeOff, Star, ExternalLink } from 'lucide-svelte';
	import type { PageData, ActionData } from './$types';

	let { data, form }: { data: PageData; form: ActionData } = $props();
	let deleteId = $state<string | null>(null);
</script>

<svelte:head>
	<title>Portfolio | Admin</title>
</svelte:head>

<div class="space-y-6">
	<!-- Header -->
	<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
		<div>
			<h1 class="text-2xl font-bold text-text-primary">Portfolio</h1>
			<p class="text-text-secondary mt-1">Kelola project portfolio Anda</p>
		</div>
		<a
			href="/admin/portfolio/new"
			class="inline-flex items-center gap-2 px-4 py-2 bg-accent-cta hover:bg-accent-cta-hover text-black font-semibold rounded-xl transition-colors"
		>
			<Plus size={20} />
			<span>Tambah Portfolio</span>
		</a>
	</div>

	<!-- Success/Error Messages -->
	{#if form?.success}
		<div class="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400">
			{form.message}
		</div>
	{/if}
	{#if form?.error}
		<div class="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
			{form.error}
		</div>
	{/if}

	<!-- Portfolio Table -->
	<div class="glass-purple rounded-2xl overflow-hidden">
		{#if data.portfolios.length === 0}
			<div class="p-12 text-center">
				<div class="w-16 h-16 rounded-full bg-bg-elevated mx-auto mb-4 flex items-center justify-center">
					<Plus size={32} class="text-text-muted" />
				</div>
				<h3 class="text-lg font-semibold text-text-primary mb-2">Belum ada portfolio</h3>
				<p class="text-text-secondary mb-4">Mulai dengan menambahkan portfolio pertama Anda</p>
				<a
					href="/admin/portfolio/new"
					class="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-xl hover:bg-purple-500/30 transition-colors"
				>
					<Plus size={20} />
					<span>Tambah Portfolio</span>
				</a>
			</div>
		{:else}
			<div class="overflow-x-auto">
				<table class="w-full">
					<thead>
						<tr class="border-b border-border-subtle">
							<th class="text-left p-4 text-text-secondary font-medium">Project</th>
							<th class="text-left p-4 text-text-secondary font-medium hidden md:table-cell">Tags</th>
							<th class="text-center p-4 text-text-secondary font-medium">Status</th>
							<th class="text-center p-4 text-text-secondary font-medium">Featured</th>
							<th class="text-right p-4 text-text-secondary font-medium">Aksi</th>
						</tr>
					</thead>
					<tbody>
						{#each data.portfolios as portfolio}
							<tr class="border-b border-border-subtle/50 hover:bg-bg-hover/30 transition-colors">
								<!-- Project Info -->
								<td class="p-4">
									<div class="flex items-center gap-3">
										{#if portfolio.image_url}
											<img
												src={portfolio.image_url}
												alt={portfolio.title_id}
												class="w-12 h-12 rounded-lg object-cover"
											/>
										{:else}
											<div class="w-12 h-12 rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-900"></div>
										{/if}
										<div>
											<h3 class="font-semibold text-text-primary">{portfolio.title_id}</h3>
											<p class="text-sm text-text-muted truncate max-w-[200px]">
												{portfolio.description_id}
											</p>
										</div>
									</div>
								</td>

								<!-- Tags -->
								<td class="p-4 hidden md:table-cell">
									<div class="flex flex-wrap gap-1">
										{#each portfolio.tags.slice(0, 2) as tag}
											<span class="px-2 py-0.5 text-xs bg-bg-elevated rounded-full text-text-muted">
												{tag}
											</span>
										{/each}
										{#if portfolio.tags.length > 2}
											<span class="px-2 py-0.5 text-xs bg-bg-elevated rounded-full text-text-muted">
												+{portfolio.tags.length - 2}
											</span>
										{/if}
									</div>
								</td>

								<!-- Status -->
								<td class="p-4 text-center">
									{#if portfolio.published}
										<span class="inline-flex items-center gap-1 px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
											<Eye size={12} />
											Published
										</span>
									{:else}
										<span class="inline-flex items-center gap-1 px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">
											<EyeOff size={12} />
											Draft
										</span>
									{/if}
								</td>

								<!-- Featured -->
								<td class="p-4 text-center">
									{#if portfolio.featured}
										<Star size={18} class="text-yellow-400 mx-auto fill-yellow-400" />
									{:else}
										<Star size={18} class="text-text-muted mx-auto" />
									{/if}
								</td>

								<!-- Actions -->
								<td class="p-4">
									<div class="flex items-center justify-end gap-2">
										<a
											href="/admin/portfolio/preview/{portfolio.id}"
											class="p-2 text-text-muted hover:text-text-primary hover:bg-bg-elevated rounded-lg transition-colors"
											title="Preview"
										>
											<ExternalLink size={18} />
										</a>
										<a
											href="/admin/portfolio/{portfolio.id}"
											class="p-2 text-text-muted hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-colors"
											title="Edit"
										>
											<Edit size={18} />
										</a>
										<button
											type="button"
											onclick={() => (deleteId = portfolio.id)}
											class="p-2 text-text-muted hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
											title="Hapus"
										>
											<Trash2 size={18} />
										</button>
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	</div>
</div>

<!-- Delete Confirmation Modal -->
{#if deleteId}
	<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
		<div class="absolute inset-0 bg-black/70" onclick={() => (deleteId = null)} role="button" tabindex="-1"></div>
		<div class="relative glass-purple rounded-2xl p-6 max-w-md w-full">
			<h3 class="text-xl font-bold text-text-primary mb-2">Hapus Portfolio?</h3>
			<p class="text-text-secondary mb-6">
				Tindakan ini tidak dapat dibatalkan. Portfolio akan dihapus secara permanen.
			</p>
			<div class="flex gap-3 justify-end">
				<button
					type="button"
					onclick={() => (deleteId = null)}
					class="px-4 py-2 text-text-secondary hover:text-text-primary transition-colors"
				>
					Batal
				</button>
				<form action="?/delete" method="POST" use:enhance={() => {
					return async ({ update }) => {
						await update();
						deleteId = null;
					};
				}}>
					<input type="hidden" name="id" value={deleteId} />
					<button
						type="submit"
						class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-colors"
					>
						Hapus
					</button>
				</form>
			</div>
		</div>
	</div>
{/if}
