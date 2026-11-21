<script lang="ts">
	import BrutalCard from '#lib/components/ui/BrutalCard.svelte';
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte';
	import type { AboutContent } from '#lib/data/types';

	interface Props {
		about: AboutContent;
	}

	let { about }: Props = $props();

	const bodyParts = $derived(about.body.split(about.university));
</script>

<section id="about-me" class="mt-10 scroll-mt-24 border-t-2 border-ink pt-10 lg:scroll-mt-28">
	<SectionHeading lines={about.heading} />

	<BrutalCard padding="lg" class="mt-8">
		<p class="text-sm sm:text-base">
			{#each bodyParts as part, index}{part}{#if index < bodyParts.length - 1}<strong
						class="font-bold underline decoration-2 underline-offset-4"
						>{about.university}</strong
					>{/if}{/each}
		</p>
	</BrutalCard>

	<div class="mt-6 grid gap-6 md:grid-cols-2">
		<BrutalCard as="article" tone="cobalt" padding="lg">
			<h3 class="text-2xl">VISION</h3>
			<p class="mt-3 text-sm text-white">{about.vision}</p>
		</BrutalCard>

		<BrutalCard as="article" tone="industrial" padding="lg">
			<h3 class="text-2xl">SPECIALIZATION</h3>
			<p class="mt-3 text-sm">{about.specialization}</p>
		</BrutalCard>
	</div>
</section>
