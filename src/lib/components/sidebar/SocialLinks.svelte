<script lang="ts">
	import BrandIcon from '#lib/components/ui/BrandIcon.svelte';
	import type { SocialLink } from '#lib/data/types';
	import { cn } from '#lib/utils/cn';

	interface Props {
		links: readonly SocialLink[];
		label?: string;
		class?: string;
	}

	let { links, label = 'Social links', class: className }: Props = $props();
</script>

<nav aria-label={label} class={cn(className)}>
	<ul class="grid grid-cols-3 gap-3">
		{#each links as link}
			<li>
				<a
					href={link.href}
					target="_blank"
					rel="noopener noreferrer me"
					aria-label={link.label}
					class="flex h-12 items-center justify-center border-2 border-ink bg-cobalt text-white shadow-brutal-sm brutal-press focus-visible:outline-industrial"
				>
					<BrandIcon icon={link.icon} size={20} />
				</a>
			</li>
		{/each}
	</ul>
</nav>
