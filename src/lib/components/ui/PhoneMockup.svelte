<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		showGlow?: boolean;
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		children?: Snippet;
	}

	let {
		showGlow = true,
		size = 'md',
		class: className = '',
		children
	}: Props = $props();

	const sizes = {
		sm: 'w-48',
		md: 'w-64',
		lg: 'w-80'
	};
</script>

<div class="relative {className}">
	{#if showGlow}
		<div class="absolute inset-0 orb-glow scale-150"></div>
	{/if}

	<div class="relative z-10 {sizes[size]} mx-auto">
		<!-- Phone Frame -->
		<div class="rounded-[2.5rem] border-4 border-gray-800 bg-gray-900 p-2 shadow-2xl">
			<!-- Notch -->
			<div class="absolute left-1/2 top-4 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-gray-900"></div>

			<!-- Screen -->
			<div class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple-600/20 via-bg-secondary to-purple-900/30 aspect-[9/19]">
				<!-- Screen Content - Placeholder UI -->
				<div class="absolute inset-0 p-4">
					{#if children}
						{@render children()}
					{:else}
						<!-- Default placeholder content -->
						<div class="space-y-4">
							<!-- Status bar placeholder -->
							<div class="flex items-center justify-between text-xs text-white/60">
								<span>9:41</span>
								<div class="flex gap-1">
									<div class="h-2 w-4 rounded-sm bg-white/40"></div>
									<div class="h-2 w-2 rounded-full bg-white/40"></div>
								</div>
							</div>

							<!-- Header placeholder -->
							<div class="mt-6 space-y-2">
								<div class="h-3 w-20 rounded bg-white/20"></div>
								<div class="h-6 w-32 rounded bg-white/30"></div>
							</div>

							<!-- Cards placeholder -->
							<div class="mt-6 space-y-3">
								<div class="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
									<div class="flex items-center gap-3">
										<div class="h-10 w-10 rounded-lg bg-purple-500/40"></div>
										<div class="space-y-1">
											<div class="h-2 w-16 rounded bg-white/30"></div>
											<div class="h-2 w-24 rounded bg-white/20"></div>
										</div>
									</div>
								</div>
								<div class="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
									<div class="flex items-center gap-3">
										<div class="h-10 w-10 rounded-lg bg-amber-500/40"></div>
										<div class="space-y-1">
											<div class="h-2 w-20 rounded bg-white/30"></div>
											<div class="h-2 w-16 rounded bg-white/20"></div>
										</div>
									</div>
								</div>
								<div class="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
									<div class="flex items-center gap-3">
										<div class="h-10 w-10 rounded-lg bg-green-500/40"></div>
										<div class="space-y-1">
											<div class="h-2 w-14 rounded bg-white/30"></div>
											<div class="h-2 w-20 rounded bg-white/20"></div>
										</div>
									</div>
								</div>
							</div>

							<!-- Bottom nav placeholder -->
							<div class="absolute bottom-4 left-4 right-4">
								<div class="flex justify-around rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
									<div class="h-6 w-6 rounded-full bg-purple-500/60"></div>
									<div class="h-6 w-6 rounded-full bg-white/20"></div>
									<div class="h-6 w-6 rounded-full bg-white/20"></div>
									<div class="h-6 w-6 rounded-full bg-white/20"></div>
								</div>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>

		<!-- Home indicator -->
		<div class="absolute bottom-3 left-1/2 z-20 h-1 w-20 -translate-x-1/2 rounded-full bg-white/30"></div>
	</div>
</div>
