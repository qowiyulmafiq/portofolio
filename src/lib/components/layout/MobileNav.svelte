<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import type { NavItem } from '#lib/data/types';
	import { cn } from '#lib/utils/cn';
	import Container from './Container.svelte';

	interface Props {
		open: boolean;
		items: readonly NavItem[];
		onclose: () => void;
	}

	let { open, items, onclose }: Props = $props();

	function handleKeydown(event: KeyboardEvent) {
		if (open && event.key === 'Escape') {
			event.preventDefault();
			onclose();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div
	id="mobile-nav"
	class={cn('border-t-2 border-ink bg-surface lg:hidden', !open && 'hidden')}
>
	<Container class="py-4">
		<nav aria-label="Primary mobile">
			<ul class="flex flex-col">
				{#each items as item}
					<li class="border-b-2 border-ink last:border-b-0">
						{#if item.external}
							<a
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								onclick={onclose}
								class="flex items-center justify-between px-2 py-3 text-sm font-bold transition-colors hover:bg-industrial"
							>
								{item.label}
								<ArrowUpRight size={16} strokeWidth={2.5} aria-hidden="true" />
							</a>
						{:else}
							<a
								href={item.href}
								onclick={onclose}
								class="block px-2 py-3 text-sm font-bold transition-colors hover:bg-industrial"
							>
								{item.label}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>
	</Container>
</div>
