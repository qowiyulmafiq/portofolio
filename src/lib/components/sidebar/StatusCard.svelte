<script lang="ts">
	import Badge from '#lib/components/ui/Badge.svelte';
	import type { SiteConfig } from '#lib/data/types';

	interface Props {
		profile: SiteConfig;
	}

	let { profile }: Props = $props();
</script>

<div class="brutal-card">
	<h2 class="border-b-2 border-ink p-4 font-display text-xl leading-none tracking-wide">
		STATUS
	</h2>

	<dl class="divide-y-2 divide-ink px-4">
		{#each profile.status as item}
			<div class="flex items-center justify-between gap-3 py-2.5">
				<dt class="text-[10px] font-bold tracking-[0.12em] uppercase">{item.label}</dt>
				<dd class="text-xs font-bold">
					{#if item.emphasis}
						<Badge>{item.value}</Badge>
					{:else}
						{item.value}
					{/if}
				</dd>
			</div>
		{/each}
	</dl>
</div>
