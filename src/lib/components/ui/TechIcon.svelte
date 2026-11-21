<script lang="ts">
	import Palette from '@lucide/svelte/icons/palette';
	import {
		siCss,
		siDart,
		siFirebase,
		siFlutter,
		siHtml5,
		siLaravel,
		siPhp,
		siSqlite
	} from 'simple-icons';
	import type { IconKey } from '#lib/data/types';
	import { cn } from '#lib/utils/cn';

	interface Props {
		icon: IconKey;
		tone?: 'cobalt' | 'yellow';
		label?: string;
		size?: number;
		class?: string;
	}

	let { icon, tone = 'cobalt', label, size = 22, class: className }: Props = $props();

	const paths: Partial<Record<IconKey, string>> = {
		flutter: siFlutter.path,
		laravel: siLaravel.path,
		dart: siDart.path,
		php: siPhp.path,
		html5: siHtml5.path,
		css3: siCss.path,
		sqlite: siSqlite.path,
		firebase: siFirebase.path
	};
</script>

<span
	class={cn(
		'inline-flex h-12 w-12 items-center justify-center border-2 border-ink shadow-brutal-xs',
		tone === 'cobalt' ? 'bg-cobalt text-white' : 'bg-industrial text-ink',
		className
	)}
	role={label ? 'img' : undefined}
	aria-label={label}
	aria-hidden={label ? undefined : 'true'}
>
	{#if icon === 'palette'}
		<Palette size={size} strokeWidth={2.5} aria-hidden="true" />
	{:else}
		<svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
			<path d={paths[icon]} />
		</svg>
	{/if}
</span>
