<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import { site } from '#lib/data/index';
	import SiteFooter from '#lib/components/layout/SiteFooter.svelte';
	import SiteHeader from '#lib/components/layout/SiteHeader.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:border-2 focus:border-ink focus:bg-industrial focus:px-4 focus:py-3 focus:font-mono focus:text-sm focus:font-bold focus:text-ink focus:uppercase focus:shadow-brutal-sm"
>
	Skip to content
</a>

<SiteHeader items={site.nav} brand={site.brand} />

<main id="main" tabindex="-1">
	{@render children()}
</main>

<SiteFooter copyright={site.copyright} brand={site.brand} />
