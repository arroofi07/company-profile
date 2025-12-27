<script lang="ts">
	import { Upload, X, Image as ImageIcon } from 'lucide-svelte';

	interface Props {
		value: string | null;
		onchange: (file: File | null) => void;
	}

	let { value, onchange }: Props = $props();
	let preview = $state<string | null>(null);
	let dragOver = $state(false);
	let fileInput = $state<HTMLInputElement | null>(null);

	// Sync preview with value prop
	$effect(() => {
		if (value !== null) {
			preview = value;
		}
	});

	function handleFile(file: File | null) {
		if (file && file.type.startsWith('image/')) {
			preview = URL.createObjectURL(file);
			onchange(file);
		}
	}

	function handleDrop(e: DragEvent) {
		e.preventDefault();
		dragOver = false;
		const file = e.dataTransfer?.files[0];
		if (file) handleFile(file);
	}

	function handleChange(e: Event) {
		const target = e.target as HTMLInputElement;
		const file = target.files?.[0] || null;
		handleFile(file);
	}

	function remove() {
		preview = null;
		onchange(null);
		if (fileInput) fileInput.value = '';
	}

</script>

<div
	class="relative border-2 border-dashed rounded-xl transition-colors {dragOver
		? 'border-purple-500 bg-purple-500/10'
		: 'border-border-subtle hover:border-border-default'}"
	ondragover={(e) => {
		e.preventDefault();
		dragOver = true;
	}}
	ondragleave={() => (dragOver = false)}
	ondrop={handleDrop}
	role="button"
	tabindex="0"
>
	<!-- Hidden file input - ALWAYS in DOM for form submission -->
	<input
		bind:this={fileInput}
		type="file"
		name="image"
		accept="image/*"
		onchange={handleChange}
		class="hidden"
	/>

	{#if preview}
		<div class="relative aspect-video">
			<img src={preview} alt="Preview" class="w-full h-full object-cover rounded-xl" />
			<div class="absolute top-2 right-2 flex gap-2">
				<button
					type="button"
					onclick={() => fileInput?.click()}
					class="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
				>
					<ImageIcon size={16} />
				</button>
				<button
					type="button"
					onclick={remove}
					class="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
				>
					<X size={16} />
				</button>
			</div>
		</div>
	{:else}
		<label
			class="flex flex-col items-center justify-center p-8 cursor-pointer"
			onclick={() => fileInput?.click()}
		>
			<div class="p-4 rounded-full bg-bg-elevated mb-4">
				<Upload size={24} class="text-text-muted" />
			</div>
			<p class="text-text-secondary mb-1">Drag & drop gambar atau klik untuk upload</p>
			<p class="text-sm text-text-muted">PNG, JPG, WebP (max 5MB)</p>
		</label>
	{/if}
</div>
