<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '#lib/utils/cn';

	type Element = 'div' | 'article';

	interface Props {
		children: Snippet;
		as?: Element;
		tone?: 'surface' | 'cobalt' | 'industrial';
		padding?: 'none' | 'sm' | 'md' | 'lg';
		class?: string;
	}

	let {
		children,
		as = 'div',
		tone = 'surface',
		padding = 'md',
		class: className
	}: Props = $props();

	const tones: Record<NonNullable<Props['tone']>, string> = {
		surface: 'bg-surface text-ink',
		cobalt: 'bg-cobalt text-white',
		industrial: 'bg-industrial text-ink'
	};

	const paddings: Record<NonNullable<Props['padding']>, string> = {
		none: '',
		sm: 'p-4',
		md: 'p-6',
		lg: 'p-6 sm:p-8'
	};
</script>

<svelte:element this={as} class={cn('brutal-card', tones[tone], paddings[padding], className)}>
	{@render children()}
</svelte:element>
