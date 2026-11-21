<script lang="ts">
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import { asset, resolve } from '$app/paths';
	import Badge from '#lib/components/ui/Badge.svelte';
	import BrutalButton from '#lib/components/ui/BrutalButton.svelte';
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte';
	import { projects, projectsHeading } from '#lib/data/index';
	import type { Project } from '#lib/data/types';
	import { cn } from '#lib/utils/cn';

	interface Props {
		items?: readonly Project[];
	}

	let { items = projects }: Props = $props();

	let index = $state(0);

	const total = $derived(items.length);
	const current = $derived(items[index]);
	const canNavigate = $derived(total > 1);

	const pad = (value: number) => String(value).padStart(2, '0');

	// Route IDs are generated from the filesystem, so resolve() needs a cast for
	// data-driven links that may point at a future internal page.
	const resolvePathname = resolve as (pathname: string) => string;

	function detailsHref(url: string): string {
		return url.startsWith('/') ? resolvePathname(url) : url;
	}

	$effect(() => {
		if (total > 0 && index >= total) index = 0;
	});

	function go(delta: number) {
		if (!canNavigate) return;
		index = (index + delta + total) % total;
	}

	function goTo(target: number) {
		index = target;
	}

	const controlClass =
		'inline-flex items-center justify-center gap-1.5 rounded-none border-2 border-ink bg-surface px-2.5 py-1.5 font-mono text-[11px] font-bold tracking-wider text-ink shadow-brutal-xs brutal-press';
</script>

<section id="projects" class="scroll-mt-24 lg:scroll-mt-28" aria-label="Projects">
	<SectionHeading lines={projectsHeading} />

	{#if current}
		<article class="brutal-card mt-6 overflow-hidden">
			{#if current.image}
				<div class="aspect-[21/9] max-h-56 overflow-hidden border-b-2 border-ink bg-canvas">
					<img
						src={asset(current.image)}
						alt={current.imageAlt ?? current.title}
						width="1600"
						height="1000"
						loading="lazy"
						decoding="async"
						class="h-full w-full object-cover"
					/>
				</div>
			{:else}
				<div class="relative overflow-hidden border-b-2 border-ink bg-cobalt p-5 text-white sm:p-6">
					<div
						class="pointer-events-none absolute inset-0 opacity-20"
						aria-hidden="true"
						style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 1.5rem 1.5rem;"
					></div>

					<div class="relative flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
						<div class="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
							<p class="font-display text-3xl uppercase leading-none text-white sm:text-4xl">
								{current.category}
							</p>
							{#if current.year}
								<span class="font-mono text-xs font-bold tabular-nums tracking-wider text-white">
									{current.year}
								</span>
							{/if}
						</div>

						<span
							class="rounded-none border-2 border-white px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.18em] tabular-nums"
						>
							PROJECT {pad(index + 1)} / {pad(total)}
						</span>
					</div>
				</div>
			{/if}

			<div class="space-y-3 p-5 sm:p-6">
				<div class="flex flex-wrap items-center gap-2">
					<Badge>{current.category}</Badge>
					{#if current.year}
						<span class="font-mono text-xs font-bold tabular-nums tracking-wider">
							{current.year}
						</span>
					{/if}
				</div>

				<h3 class="text-2xl sm:text-3xl">{current.title}</h3>
				<p class="text-sm">{current.description}</p>

				{#if current.stack?.length}
					<ul class="flex flex-wrap gap-2" aria-label="Tech stack">
						{#each current.stack as tech}
							<li
								class="inline-flex items-center rounded-none border-2 border-ink bg-canvas px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-wider tabular-nums"
							>
								{tech}
							</li>
						{/each}
					</ul>
				{/if}

				{#if current.detailsUrl}
					<div>
						<BrutalButton href={detailsHref(current.detailsUrl)} variant="cobalt">
							VIEW DETAILS
							<ArrowUpRight size={16} strokeWidth={2.5} aria-hidden="true" />
						</BrutalButton>
					</div>
				{/if}
			</div>

			{#if canNavigate}
				<div class="flex flex-wrap items-center gap-2 border-t-2 border-ink bg-canvas px-5 py-3">
					<button
						type="button"
						class={controlClass}
						onclick={() => go(-1)}
						aria-label="Previous project — PREV"
					>
						<ArrowLeft size={16} strokeWidth={2.5} aria-hidden="true" />
						PREV
					</button>

					<p
						class="min-w-[4.5rem] rounded-none border-2 border-ink bg-industrial px-2 py-1.5 text-center font-mono text-[11px] font-bold tabular-nums text-ink shadow-brutal-xs"
						aria-live="polite"
						aria-atomic="true"
					>
						<span class="sr-only">Project {index + 1} of {total}: {current.title}</span>
						<span aria-hidden="true">{pad(index + 1)} / {pad(total)}</span>
					</p>

					<button
						type="button"
						class={controlClass}
						onclick={() => go(1)}
						aria-label="Next project — NEXT"
					>
						NEXT
						<ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
					</button>

					<div class="ml-auto flex items-center gap-2" role="group" aria-label="Choose project">
						{#each items as item, i}
							<button
								type="button"
								class="flex h-8 w-8 items-center justify-center rounded-none border-2 border-ink bg-surface shadow-brutal-xs brutal-press"
								aria-label="Go to project {i + 1}: {item.title}"
								aria-current={i === index ? 'true' : undefined}
								onclick={() => goTo(i)}
							>
								<span
									class={cn('h-3 w-3', i === index ? 'bg-ink' : 'bg-industrial')}
									aria-hidden="true"
								></span>
							</button>
						{/each}
					</div>
				</div>
			{/if}
		</article>
	{:else}
		<p class="mt-6 rounded-none border-2 border-ink bg-surface p-6 font-bold shadow-brutal">
			NO PROJECTS PUBLISHED YET.
		</p>
	{/if}
</section>
