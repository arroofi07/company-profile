<script lang="ts">
	import AdminSidebar from '$lib/components/admin/AdminSidebar.svelte';
	import Toast from '$lib/components/admin/Toast.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		data: { session: { user: { email?: string } } | null };
		children: Snippet;
	}

	let { data, children }: Props = $props();
</script>

<div class="min-h-screen bg-bg-primary">
	<AdminSidebar user={data.session?.user || null} />

	<!-- Main Content -->
	<main class="lg:ml-64 min-h-screen">
		<div class="p-4 lg:p-8 pt-16 lg:pt-8">
			{@render children()}
		</div>
	</main>

	<Toast />
</div>
