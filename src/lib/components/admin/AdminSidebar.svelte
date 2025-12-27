<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { LayoutDashboard, FolderOpen, LogOut, Menu, X } from 'lucide-svelte';

	let { user } = $props<{ user: { email?: string } | null }>();
	let mobileMenuOpen = $state(false);

	const navItems = [
		{ href: '/admin/portfolio', label: 'Portfolio', icon: FolderOpen }
	];

	function isActive(href: string) {
		return $page.url.pathname.startsWith(href);
	}
</script>

<!-- Mobile Menu Button -->
<button
	onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
	class="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-bg-elevated border border-border-subtle text-text-primary"
>
	{#if mobileMenuOpen}
		<X size={24} />
	{:else}
		<Menu size={24} />
	{/if}
</button>

<!-- Overlay -->
{#if mobileMenuOpen}
	<div
		class="lg:hidden fixed inset-0 bg-black/50 z-30"
		onclick={() => (mobileMenuOpen = false)}
		onkeydown={(e) => e.key === 'Escape' && (mobileMenuOpen = false)}
		role="button"
		tabindex="-1"
	></div>
{/if}

<!-- Sidebar -->
<aside
	class="fixed top-0 left-0 h-full w-64 bg-bg-secondary border-r border-border-subtle z-40 transform transition-transform duration-300 lg:translate-x-0 {mobileMenuOpen
		? 'translate-x-0'
		: '-translate-x-full'}"
>
	<div class="flex flex-col h-full">
		<!-- Logo -->
		<div class="p-6 border-b border-border-subtle">
			<h1 class="text-xl font-bold text-text-primary">Solaria Admin</h1>
			<p class="text-sm text-text-muted mt-1 truncate">{user?.email || 'Admin'}</p>
		</div>

		<!-- Navigation -->
		<nav class="flex-1 p-4 space-y-2">
			{#each navItems as item}
				<a
					href={item.href}
					onclick={() => (mobileMenuOpen = false)}
					class="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors {isActive(item.href)
						? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
						: 'text-text-secondary hover:bg-bg-hover hover:text-text-primary'}"
				>
					<item.icon size={20} />
					<span>{item.label}</span>
				</a>
			{/each}
		</nav>

		<!-- Logout -->
		<div class="p-4 border-t border-border-subtle">
			<form action="/admin/logout" method="POST" use:enhance>
				<button
					type="submit"
					class="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-text-secondary hover:bg-red-500/10 hover:text-red-400 transition-colors"
				>
					<LogOut size={20} />
					<span>Keluar</span>
				</button>
			</form>
		</div>
	</div>
</aside>
