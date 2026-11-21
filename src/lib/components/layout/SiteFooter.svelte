<script lang="ts">
	import Container from './Container.svelte';

	interface Props {
		copyright: string;
		brand?: string;
	}

	let { copyright, brand = 'QOWIYUL.' }: Props = $props();
</script>

<footer class="border-t-2 border-ink bg-surface">
	<Container class="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
		<a
			href="#top"
			class="font-display text-2xl leading-none tracking-wide text-ink transition-colors hover:text-cobalt"
		>
			{brand}
		</a>
		<p class="text-xs leading-relaxed font-bold tracking-wide text-ink">
			{copyright}
		</p>
	</Container>
</footer>
