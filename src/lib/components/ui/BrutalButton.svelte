<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '#lib/utils/cn';

	interface Props {
		children: Snippet;
		href?: string;
		variant?: 'ink' | 'cobalt' | 'yellow' | 'outline';
		external?: boolean;
		onclick?: (event: MouseEvent) => void;
		class?: string;
	}

	let {
		children,
		href,
		variant = 'ink',
		external = false,
		onclick,
		class: className
	}: Props = $props();

	const variants: Record<NonNullable<Props['variant']>, string> = {
		ink: 'bg-ink text-white focus-visible:outline-white',
		cobalt: 'bg-cobalt text-white focus-visible:outline-industrial',
		yellow: 'bg-industrial text-ink',
		outline: 'bg-surface text-ink'
	};

	const classes = $derived(cn('brutal-btn', variants[variant], className));
</script>

{#if href}
	<a
		{href}
		class={classes}
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}
		{onclick}
	>
		{@render children()}
	</a>
{:else}
	<button type="button" class={classes} {onclick}>
		{@render children()}
	</button>
{/if}
