<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import { ArrowLeft, Save } from 'lucide-svelte';
	import ImageUpload from '$lib/components/admin/ImageUpload.svelte';
	import TagInput from '$lib/components/admin/TagInput.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
	let loading = $state(false);
	let imageFile = $state<File | null>(null);
	let tags = $state<string[]>([]);

	function slugify(text: string): string {
		return text
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)/g, '');
	}
</script>

<svelte:head>
	<title>Tambah Portfolio | Admin</title>
</svelte:head>

<div class="max-w-4xl mx-auto space-y-6">
	<!-- Header -->
	<div class="flex items-center gap-4">
		<a
			href="/admin/portfolio"
			class="p-2 text-text-muted hover:text-text-primary hover:bg-bg-elevated rounded-lg transition-colors"
		>
			<ArrowLeft size={24} />
		</a>
		<div>
			<h1 class="text-2xl font-bold text-text-primary">Tambah Portfolio</h1>
			<p class="text-text-secondary mt-1">Buat project portfolio baru</p>
		</div>
	</div>

	<!-- Error Message -->
	{#if form?.error}
		<div class="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
			{form.error}
		</div>
	{/if}

	<!-- Form -->
	<form
		method="POST"
		enctype="multipart/form-data"
		use:enhance={() => {
			loading = true;
			return async ({ result, update }) => {
				loading = false;
				if (result.type === 'redirect') {
					await invalidateAll();
					goto(result.location);
				} else {
					await update();
				}
			};
		}}
		class="glass-purple rounded-2xl p-6 space-y-6"
	>
		<!-- Image Upload -->
		<div>
			<label class="block text-sm font-medium text-text-secondary mb-2">Gambar</label>
			<ImageUpload
				value={null}
				onchange={(file) => {
					imageFile = file;
				}}
			/>
			{#if imageFile}
				<input type="hidden" name="hasImage" value="true" />
			{/if}
		</div>

		<!-- Title ID -->
		<div>
			<label for="title_id" class="block text-sm font-medium text-text-secondary mb-2">
				Judul (Indonesia) <span class="text-red-400">*</span>
			</label>
			<input
				type="text"
				id="title_id"
				name="title_id"
				required
				class="w-full px-4 py-3 bg-bg-tertiary border border-border-subtle rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-purple-500 transition-colors"
				placeholder="Nama project dalam Bahasa Indonesia"
			/>
		</div>

		<!-- Title EN -->
		<div>
			<label for="title_en" class="block text-sm font-medium text-text-secondary mb-2">
				Judul (English) <span class="text-red-400">*</span>
			</label>
			<input
				type="text"
				id="title_en"
				name="title_en"
				required
				class="w-full px-4 py-3 bg-bg-tertiary border border-border-subtle rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-purple-500 transition-colors"
				placeholder="Project name in English"
			/>
		</div>

		<!-- Description ID -->
		<div>
			<label for="description_id" class="block text-sm font-medium text-text-secondary mb-2">
				Deskripsi (Indonesia) <span class="text-red-400">*</span>
			</label>
			<textarea
				id="description_id"
				name="description_id"
				required
				rows="3"
				class="w-full px-4 py-3 bg-bg-tertiary border border-border-subtle rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-purple-500 transition-colors resize-none"
				placeholder="Deskripsi project dalam Bahasa Indonesia"
			></textarea>
		</div>

		<!-- Description EN -->
		<div>
			<label for="description_en" class="block text-sm font-medium text-text-secondary mb-2">
				Deskripsi (English) <span class="text-red-400">*</span>
			</label>
			<textarea
				id="description_en"
				name="description_en"
				required
				rows="3"
				class="w-full px-4 py-3 bg-bg-tertiary border border-border-subtle rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-purple-500 transition-colors resize-none"
				placeholder="Project description in English"
			></textarea>
		</div>

		<!-- Tags -->
		<div>
			<label class="block text-sm font-medium text-text-secondary mb-2">Tags</label>
			<TagInput value={tags} onchange={(newTags) => (tags = newTags)} placeholder="React, Node.js, MongoDB..." />
			<input type="hidden" name="tags" value={JSON.stringify(tags)} />
		</div>

		<!-- Link -->
		<div>
			<label for="link" class="block text-sm font-medium text-text-secondary mb-2">
				Link Project (opsional)
			</label>
			<input
				type="url"
				id="link"
				name="link"
				class="w-full px-4 py-3 bg-bg-tertiary border border-border-subtle rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-purple-500 transition-colors"
				placeholder="https://example.com"
			/>
		</div>

		<!-- Toggles -->
		<div class="flex flex-wrap gap-6">
			<label class="flex items-center gap-3 cursor-pointer">
				<input
					type="checkbox"
					name="featured"
					class="w-5 h-5 rounded border-border-subtle bg-bg-tertiary text-purple-500 focus:ring-purple-500 focus:ring-offset-0"
				/>
				<span class="text-text-secondary">Featured</span>
			</label>
			<label class="flex items-center gap-3 cursor-pointer">
				<input
					type="checkbox"
					name="published"
					class="w-5 h-5 rounded border-border-subtle bg-bg-tertiary text-purple-500 focus:ring-purple-500 focus:ring-offset-0"
				/>
				<span class="text-text-secondary">Published</span>
			</label>
		</div>

		<!-- Submit -->
		<div class="flex justify-end gap-3 pt-4 border-t border-border-subtle">
			<a
				href="/admin/portfolio"
				class="px-4 py-2 text-text-secondary hover:text-text-primary transition-colors"
			>
				Batal
			</a>
			<button
				type="submit"
				disabled={loading}
				class="flex items-center gap-2 px-6 py-2 bg-accent-cta hover:bg-accent-cta-hover text-black font-semibold rounded-xl transition-colors disabled:opacity-50"
			>
				{#if loading}
					<div class="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
				{:else}
					<Save size={20} />
				{/if}
				<span>Simpan</span>
			</button>
		</div>
	</form>
</div>
