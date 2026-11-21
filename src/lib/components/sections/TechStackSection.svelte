<script lang="ts">
	import BrutalCard from '#lib/components/ui/BrutalCard.svelte';
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte';
	import TechIcon from '#lib/components/ui/TechIcon.svelte';
	import { techStack, techStackHeading } from '#lib/data/index';
	import type { TechCategory } from '#lib/data/types';

	interface Props {
		categories?: readonly TechCategory[];
	}

	let { categories = techStack }: Props = $props();
</script>

<section id="tech-stack" class="scroll-mt-24 lg:scroll-mt-28">
	<SectionHeading lines={techStackHeading} />

	<div class="mt-8 grid gap-6 sm:grid-cols-2">
		{#each categories as category}
			<BrutalCard as="article" padding="lg" class="flex flex-col">
				<h3 class="text-2xl">{category.title}</h3>
				<p class="mt-3 text-sm">{category.description}</p>

				<ul class="mt-auto flex flex-wrap gap-3 pt-6" aria-label="{category.title} technologies">
					{#each category.items as item}
						<li>
							<TechIcon icon={item.icon} tone={item.tone} label={item.name} />
						</li>
					{/each}
				</ul>
			</BrutalCard>
		{/each}
	</div>
</section>
