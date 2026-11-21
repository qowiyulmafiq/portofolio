<script lang="ts">
	import type { HeadingLine } from '#lib/data/types';
	import { cn } from '#lib/utils/cn';

	interface Props {
		lines: readonly HeadingLine[];
		as?: 'h1' | 'h2';
		class?: string;
	}

	let { lines, as = 'h2', class: className }: Props = $props();
</script>

<svelte:element this={as} class={cn('text-4xl sm:text-5xl', className)}>
	{#each lines as line, lineIndex}
		<span class="block" class:mt-1={lineIndex > 0}>
			{#each line.segments as segment}{#if segment.accent}<span
						class="mx-1 inline-block border-2 border-ink bg-industrial px-1.5 pb-0.5 shadow-brutal-xs"
						>{segment.text}</span
					>{:else}{segment.text}{/if}{/each}
		</span>
	{/each}
</svelte:element>
