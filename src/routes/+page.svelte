<script lang="ts">
	import Container from '#lib/components/layout/Container.svelte';
	import AboutSection from '#lib/components/sections/AboutSection.svelte';
	import HeroSection from '#lib/components/sections/HeroSection.svelte';
	import ProjectsSection from '#lib/components/sections/ProjectsSection.svelte';
	import TechStackSection from '#lib/components/sections/TechStackSection.svelte';
	import ProfileCard from '#lib/components/sidebar/ProfileCard.svelte';
	import SocialLinks from '#lib/components/sidebar/SocialLinks.svelte';
	import StatusCard from '#lib/components/sidebar/StatusCard.svelte';
	import SectionDivider from '#lib/components/ui/SectionDivider.svelte';
	import { site } from '#lib/data/index';
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<meta name="author" content={site.name} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.brand} />
	<meta property="og:title" content={site.title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:image" content={site.photo} />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1192" />
	<meta property="og:image:height" content="1192" />
	<meta property="og:image:alt" content={site.photoAlt} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={site.title} />
	<meta name="twitter:description" content={site.description} />
	<meta name="twitter:image" content={site.photo} />
	<meta name="twitter:image:alt" content={site.photoAlt} />
</svelte:head>

<Container class="py-12 lg:py-16">
	<div class="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
		<div class="order-1 lg:col-span-8 lg:col-start-1 lg:row-start-1">
			<HeroSection hero={site.hero} />
		</div>

		<aside
			class="order-2 flex w-full flex-col gap-4 self-start lg:sticky lg:top-24 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1"
		>
			<ProfileCard profile={site} />
			<StatusCard profile={site} />
			<SocialLinks links={site.socials} label="Profiles" class="mt-3" />
		</aside>

		<div class="order-3 flex flex-col lg:col-span-8 lg:col-start-1 lg:row-start-2">
			<AboutSection about={site.about} />
			<SectionDivider class="my-12" />
			<TechStackSection />
			<SectionDivider class="my-12" />
			<ProjectsSection />
		</div>
	</div>
</Container>
