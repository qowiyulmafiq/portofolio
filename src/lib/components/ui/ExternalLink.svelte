<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import type { Snippet } from 'svelte';
	import { cn } from '#lib/utils/cn';

	interface Props {
		href: string;
		children: Snippet;
		label?: string;
		class?: string;
	}

	let { href, children, label, class: className }: Props = $props();
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	aria-label={label}
	class={cn(
		'inline-flex items-center gap-1.5 font-bold underline decoration-2 underline-offset-4 transition-colors hover:text-cobalt',
		className
	)}
>
	{@render children()}
	<ArrowUpRight size={16} strokeWidth={2.5} aria-hidden="true" />
</a>
