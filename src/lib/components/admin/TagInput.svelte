<script lang="ts">
	import { X, Plus } from 'lucide-svelte';

	interface Props {
		value: string[];
		onchange: (tags: string[]) => void;
		placeholder?: string;
	}

	let { value = [], onchange, placeholder = 'Tambah tag...' }: Props = $props();
	let inputValue = $state('');

	function addTag() {
		const tag = inputValue.trim();
		if (tag && !value.includes(tag)) {
			const newTags = [...value, tag];
			onchange(newTags);
			inputValue = '';
		}
	}

	function removeTag(index: number) {
		const newTags = value.filter((_, i) => i !== index);
		onchange(newTags);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			addTag();
		} else if (e.key === 'Backspace' && !inputValue && value.length > 0) {
			removeTag(value.length - 1);
		}
	}
</script>

<div class="space-y-3">
	<!-- Tags Display -->
	{#if value.length > 0}
		<div class="flex flex-wrap gap-2">
			{#each value as tag, i}
				<span class="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
					{tag}
					<button
						type="button"
						onclick={() => removeTag(i)}
						class="hover:text-purple-200 transition-colors"
					>
						<X size={14} />
					</button>
				</span>
			{/each}
		</div>
	{/if}

	<!-- Input -->
	<div class="flex gap-2">
		<input
			type="text"
			bind:value={inputValue}
			onkeydown={handleKeydown}
			{placeholder}
			class="flex-1 px-4 py-2 bg-bg-tertiary border border-border-subtle rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-purple-500 transition-colors"
		/>
		<button
			type="button"
			onclick={addTag}
			disabled={!inputValue.trim()}
			class="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
		>
			<Plus size={20} />
		</button>
	</div>
</div>
