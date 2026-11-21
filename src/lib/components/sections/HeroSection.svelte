<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Badge from '#lib/components/ui/Badge.svelte';
	import BrutalButton from '#lib/components/ui/BrutalButton.svelte';
	import type { SiteConfig } from '#lib/data/types';

	interface Props {
		hero: SiteConfig['hero'];
	}

	let { hero }: Props = $props();

	const words = $derived(hero.name.split(' '));
	const lines = $derived([
		{ words: words.slice(0, 1), offset: 0 },
		{ words: words.slice(1), offset: 1 }
	]);
</script>

<div>
	<Badge>{hero.eyebrow}</Badge>

	<h1 class="mt-6 text-5xl leading-[0.95] sm:text-6xl lg:text-[3.5rem]" aria-label={hero.name}>
		{#each lines as line}
			<span class="block">
				{#each line.words as word, i}<span class:text-cobalt={line.offset + i === 1}>{word}</span>{#if i < line.words.length - 1}{' '}{/if}{/each}
			</span>
		{/each}
	</h1>

	<p class="mt-6 max-w-[54ch] text-sm sm:text-base">
		{hero.intro}
	</p>

	<div class="mt-8">
		<BrutalButton href={hero.cta.href} external={hero.cta.external} variant="cobalt">
			{hero.cta.label}
			<ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
		</BrutalButton>
	</div>
</div>
