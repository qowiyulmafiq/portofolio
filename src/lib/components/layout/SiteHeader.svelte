<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import { tick } from 'svelte';
	import type { NavItem } from '#lib/data/types';
	import { cn } from '#lib/utils/cn';
	import Container from './Container.svelte';
	import MobileNav from './MobileNav.svelte';

	interface Props {
		items: readonly NavItem[];
		brand?: string;
	}

	let { items, brand = 'QOWIYUL.' }: Props = $props();

	let menuOpen = $state(false);
	let active = $state<string>();
	let menuButton: HTMLButtonElement | undefined;

	const sectionHrefs = $derived(
		items
			.filter((item) => !item.external && item.href.startsWith('#'))
			.map((item) => item.href)
	);

	function closeMenu() {
		menuOpen = false;
		tick().then(() => menuButton?.focus());
	}

	$effect(() => {
		if (typeof IntersectionObserver === 'undefined') return;

		const sections = sectionHrefs
			.map((href) => document.querySelector<HTMLElement>(href))
			.filter((section): section is HTMLElement => section !== null);

		if (sections.length === 0) return;

		const firstSection = sectionHrefs[0];

		function syncTop() {
			if (window.scrollY < 120) {
				active = firstSection;
				return true;
			}
			return false;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				// The top-of-page state always points at the first section.
				if (window.scrollY < 120) return;

				const visible = entries.filter((entry) => entry.isIntersecting);
				if (visible.length === 0) return;
				active = `#${visible[0].target.id}`;
			},
			{ rootMargin: '-20% 0px -65% 0px', threshold: 0 }
		);

		const onScroll = () => {
			syncTop();
		};

		syncTop();
		window.addEventListener('scroll', onScroll, { passive: true });
		sections.forEach((section) => observer.observe(section));

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<header id="top" class="sticky top-0 z-50 border-b-2 border-ink bg-canvas">
	<Container class="flex h-20 items-center justify-between gap-4">
		<a
			href="#top"
			class="font-display text-2xl leading-none tracking-wide text-cobalt transition-colors hover:text-ink sm:text-3xl"
			aria-label="{brand} — back to top"
		>
			{brand}
		</a>

		<nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
			{#each items as item}
				{#if item.external}
					<a
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1 border-b-4 border-transparent px-3 py-2 text-sm font-bold transition-colors hover:border-cobalt hover:text-cobalt"
					>
						{item.label}
						<ArrowUpRight size={14} strokeWidth={2.5} aria-hidden="true" />
					</a>
				{:else}
					<a
						href={item.href}
						aria-current={active === item.href ? 'location' : undefined}
						class={cn(
							'border-b-4 px-3 py-2 text-sm font-bold transition-colors',
							active === item.href
								? 'border-cobalt text-cobalt'
								: 'border-transparent hover:border-cobalt hover:text-cobalt'
						)}
						onclick={() => (active = item.href)}
					>
						{item.label}
					</a>
				{/if}
			{/each}
		</nav>

		<button
			bind:this={menuButton}
			type="button"
			class="inline-flex h-10 w-10 items-center justify-center border-2 border-ink bg-industrial text-ink shadow-brutal-sm brutal-press lg:hidden"
			aria-expanded={menuOpen}
			aria-controls="mobile-nav"
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			onclick={() => (menuOpen = !menuOpen)}
		>
			{#if menuOpen}
				<X size={20} strokeWidth={2.5} aria-hidden="true" />
			{:else}
				<Menu size={20} strokeWidth={2.5} aria-hidden="true" />
			{/if}
		</button>
	</Container>

	<MobileNav open={menuOpen} {items} onclose={closeMenu} />
</header>
