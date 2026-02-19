<script lang="ts">
	import { t } from '$lib/i18n';

	let showTooltip = $state(false);
	let visible = $state(false);

	// Format phone number for WhatsApp link (remove spaces and +)
	const phoneRaw = '+62 857 0946 6801';
	const phoneFormatted = phoneRaw.replace(/[\s+]/g, '');
	const waMessage = encodeURIComponent('Halo! Saya tertarik dengan layanan Anda. Bisa bantu saya?');
	const waUrl = `https://wa.me/${phoneFormatted}?text=${waMessage}`;

	import { onMount } from 'svelte';

	onMount(() => {
		// Show popup after a short delay
		const timer = setTimeout(() => {
			visible = true;
		}, 1500);
		return () => clearTimeout(timer);
	});
</script>

<!-- WhatsApp Floating Button -->
<div
	class="wa-wrapper fixed right-6 bottom-24 z-40 flex flex-col items-end gap-3 {visible
		? 'translate-y-0 opacity-100'
		: 'pointer-events-none translate-y-6 opacity-0'}"
	style="transition: opacity 0.5s ease, transform 0.5s ease;"
>
	<!-- Tooltip / Chat Bubble -->
	{#if showTooltip}
		<div
			class="wa-tooltip relative max-w-[220px] rounded-2xl rounded-br-sm bg-white px-4 py-3 shadow-2xl"
			style="animation: fadeSlideIn 0.25s ease;"
		>
			<p class="text-sm font-semibold text-gray-800">👋 Halo! Ada yang bisa kami bantu?</p>
			<p class="mt-0.5 text-xs text-gray-500">Balas dalam hitungan menit</p>
			<!-- Tail -->
			<div
				class="absolute right-3 -bottom-2 h-0 w-0"
				style="border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 10px solid white;"
			></div>
		</div>
	{/if}

	<!-- Main Button -->
	<a
		href={waUrl}
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Chat via WhatsApp"
		onmouseenter={() => (showTooltip = true)}
		onmouseleave={() => (showTooltip = false)}
		onfocus={() => (showTooltip = true)}
		onblur={() => (showTooltip = false)}
		class="wa-btn group relative flex h-16 w-16 items-center justify-center rounded-full shadow-2xl focus:outline-none"
	>
		<!-- Pulse rings -->
		<span class="wa-pulse absolute inset-0 rounded-full"></span>
		<span class="wa-pulse wa-pulse-delay absolute inset-0 rounded-full"></span>

		<!-- WA Icon -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			class="relative z-10 h-9 w-9 drop-shadow transition-transform duration-300 group-hover:scale-110"
			fill="none"
		>
			<circle cx="24" cy="24" r="24" fill="#25D366" />
			<path
				fill="white"
				d="M34.5 13.5A14.85 14.85 0 0 0 24 9C16.27 9 10 15.27 10 23a13.94 13.94 0 0 0 2 7.2L9 39l9.1-2.38A14.06 14.06 0 0 0 24 38c7.73 0 14-6.27 14-14a13.93 13.93 0 0 0-3.5-10.5ZM24 35.5a11.6 11.6 0 0 1-5.9-1.6l-.42-.25-4.35 1.14 1.16-4.24-.28-.44A11.5 11.5 0 0 1 12.5 23c0-6.35 5.15-11.5 11.5-11.5a11.5 11.5 0 0 1 0 23Zm6.3-8.6c-.35-.17-2.05-1.01-2.37-1.13-.32-.11-.55-.17-.78.18-.23.34-.9 1.13-1.1 1.36-.2.23-.4.26-.75.09-.35-.18-1.47-.54-2.8-1.73a10.5 10.5 0 0 1-1.94-2.41c-.2-.35-.02-.54.15-.71.16-.16.35-.4.53-.6.17-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.18-.78-1.88-1.07-2.57-.28-.67-.57-.58-.78-.59h-.67c-.23 0-.6.09-.91.43-.32.34-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.18.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.05-.84 2.34-1.65.29-.81.29-1.5.2-1.65-.08-.14-.3-.23-.65-.4Z"
			/>
		</svg>
	</a>
</div>

<style>
	.wa-btn {
		background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
		box-shadow:
			0 8px 32px rgba(37, 211, 102, 0.45),
			0 2px 8px rgba(0, 0, 0, 0.2);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.wa-btn:hover {
		transform: scale(1.08);
		box-shadow:
			0 12px 40px rgba(37, 211, 102, 0.6),
			0 4px 12px rgba(0, 0, 0, 0.25);
	}

	.wa-pulse {
		background: rgba(37, 211, 102, 0.4);
		animation: waPulse 2.5s ease-out infinite;
	}

	.wa-pulse-delay {
		animation-delay: 1.2s;
	}

	@keyframes waPulse {
		0% {
			transform: scale(1);
			opacity: 0.7;
		}
		100% {
			transform: scale(1.7);
			opacity: 0;
		}
	}

	@keyframes fadeSlideIn {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.wa-tooltip {
		box-shadow:
			0 10px 40px rgba(0, 0, 0, 0.15),
			0 2px 8px rgba(0, 0, 0, 0.1);
	}
</style>
