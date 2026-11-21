<script lang="ts">
	import { asset } from '$app/paths';
	import type { SiteConfig } from '#lib/data/types';

	interface Props {
		profile: SiteConfig;
	}

	let { profile }: Props = $props();
</script>

<figure class="brutal-card overflow-hidden border-2 border-ink bg-surface p-0">
	<img
		src={asset(profile.photo)}
		alt={profile.photoAlt}
		width="1192"
		height="1192"
		decoding="async"
		fetchpriority="high"
		class="block aspect-[4/3] w-full scale-105 object-cover object-top"
	/>
	<figcaption
		class="border-t-2 border-ink bg-cobalt px-4 py-2.5 text-center font-display text-base leading-tight tracking-wide text-white uppercase"
	>
		{profile.tagline}
	</figcaption>
</figure>
