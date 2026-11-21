<script lang="ts">
	import { siGithub, siInstagram } from 'simple-icons';
	import type { SocialKey } from '#lib/data/types';
	import { cn } from '#lib/utils/cn';

	interface Props {
		icon: SocialKey;
		size?: number;
		class?: string;
		title?: string;
	}

	let { icon, size = 20, class: className, title }: Props = $props();

	const paths: Record<SocialKey, string> = {
		github: siGithub.path,
		instagram: siInstagram.path,
		linkedin:
			'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
		dicoding:
			'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-3.2 5.2h3.6c3.1 0 5.2 2.2 5.2 5.6s-2.1 5.6-5.2 5.6H8.8V7.2zm3 2.4v6.4h.5c1.6 0 2.5-1.2 2.5-3.2s-.9-3.2-2.5-3.2h-.5z'
	};
</script>

<svg
	viewBox="0 0 24 24"
	width={size}
	height={size}
	fill="currentColor"
	class={cn('shrink-0', className)}
	role={title ? 'img' : undefined}
	aria-hidden={title ? undefined : 'true'}
>
	{#if title}
		<title>{title}</title>
	{/if}
	<path d={paths[icon]} />
</svg>
