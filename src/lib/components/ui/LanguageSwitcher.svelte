<script lang="ts">
	import { Globe } from 'lucide-svelte';
	import { currentLocale, toggleLocale } from '$lib/i18n';
</script>

<button
	onclick={toggleLocale}
	class="flex items-center gap-2 rounded-lg border border-border-subtle bg-bg-tertiary/50 px-3 py-2 text-sm font-medium text-text-secondary transition-all hover:border-accent-cyan/50 hover:bg-bg-tertiary hover:text-text-primary"
	aria-label="Switch language"
>
	<Globe size={16} class="text-accent-cyan" />
	<span class="uppercase">{$currentLocale}</span>
</button>
