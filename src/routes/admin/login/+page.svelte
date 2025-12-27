<script lang="ts">
	import { enhance } from '$app/forms';
	import { Mail, Lock, LogIn, AlertCircle } from 'lucide-svelte';

	let { form } = $props();
	let loading = $state(false);
</script>

<svelte:head>
	<title>Admin Login | Solaria Dev</title>
</svelte:head>

<div class="min-h-screen bg-bg-primary flex items-center justify-center p-4">
	<div class="w-full max-w-md">
		<!-- Logo & Title -->
		<div class="text-center mb-8">
			<h1 class="text-3xl font-bold text-text-primary mb-2">Admin Panel</h1>
			<p class="text-text-secondary">Masuk untuk mengelola portfolio</p>
		</div>

		<!-- Login Card -->
		<div class="glass-purple rounded-2xl p-8">
			{#if form?.error}
				<div class="mb-6 flex items-center gap-3 rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-red-400">
					<AlertCircle size={20} />
					<span>{form.error}</span>
				</div>
			{/if}

			<form
				method="POST"
				use:enhance={() => {
					loading = true;
					return async ({ update }) => {
						await update();
						loading = false;
					};
				}}
				class="space-y-6"
			>
				<!-- Email -->
				<div>
					<label for="email" class="block text-sm font-medium text-text-secondary mb-2">
						Email
					</label>
					<div class="relative">
						<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
							<Mail size={18} class="text-text-muted" />
						</div>
						<input
							type="email"
							id="email"
							name="email"
							required
							class="w-full pl-11 pr-4 py-3 bg-bg-tertiary border border-border-subtle rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
							placeholder="admin@example.com"
						/>
					</div>
				</div>

				<!-- Password -->
				<div>
					<label for="password" class="block text-sm font-medium text-text-secondary mb-2">
						Password
					</label>
					<div class="relative">
						<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
							<Lock size={18} class="text-text-muted" />
						</div>
						<input
							type="password"
							id="password"
							name="password"
							required
							class="w-full pl-11 pr-4 py-3 bg-bg-tertiary border border-border-subtle rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
							placeholder="••••••••"
						/>
					</div>
				</div>

				<!-- Submit Button -->
				<button
					type="submit"
					disabled={loading}
					class="w-full flex items-center justify-center gap-2 py-3 px-4 bg-accent-cta hover:bg-accent-cta-hover text-black font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{#if loading}
						<div class="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
						<span>Memproses...</span>
					{:else}
						<LogIn size={20} />
						<span>Masuk</span>
					{/if}
				</button>
			</form>
		</div>

		<!-- Back to Home -->
		<div class="text-center mt-6">
			<a href="/" class="text-text-muted hover:text-text-secondary transition-colors">
				&larr; Kembali ke Beranda
			</a>
		</div>
	</div>
</div>
