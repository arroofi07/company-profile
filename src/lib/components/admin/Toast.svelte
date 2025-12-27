<script lang="ts">
	import { X, CheckCircle, AlertCircle, Info } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';

	interface Toast {
		id: string;
		type: 'success' | 'error' | 'info';
		message: string;
	}

	let toasts = $state<Toast[]>([]);

	const icons = {
		success: CheckCircle,
		error: AlertCircle,
		info: Info
	};

	const colors = {
		success: 'bg-green-500/10 border-green-500/30 text-green-400',
		error: 'bg-red-500/10 border-red-500/30 text-red-400',
		info: 'bg-blue-500/10 border-blue-500/30 text-blue-400'
	};

	export function show(type: Toast['type'], message: string, duration = 4000) {
		const id = crypto.randomUUID();
		toasts = [...toasts, { id, type, message }];

		setTimeout(() => {
			remove(id);
		}, duration);
	}

	function remove(id: string) {
		toasts = toasts.filter((t) => t.id !== id);
	}
</script>

<div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
	{#each toasts as toast (toast.id)}
		<div
			in:fly={{ x: 100, duration: 300 }}
			out:fade={{ duration: 200 }}
			class="flex items-center gap-3 px-4 py-3 rounded-xl border {colors[toast.type]} min-w-[300px] max-w-md"
		>
			<svelte:component this={icons[toast.type]} size={20} />
			<span class="flex-1">{toast.message}</span>
			<button onclick={() => remove(toast.id)} class="opacity-70 hover:opacity-100 transition-opacity">
				<X size={16} />
			</button>
		</div>
	{/each}
</div>
