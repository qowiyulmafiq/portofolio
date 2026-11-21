import type { HeadingLine, TechCategory } from './types';

export const techStackHeading = [
	{ segments: [{ text: 'TECH', accent: true }, { text: ' STACK' }] }
] satisfies readonly HeadingLine[];

export const techStack = [
	{
		title: 'FRAMEWORKS',
		description: 'Building cross-platform and web applications using Flutter and Laravel.',
		items: [
			{ name: 'Flutter', icon: 'flutter', tone: 'cobalt' },
			{ name: 'Laravel', icon: 'laravel', tone: 'yellow' }
		]
	},
	{
		title: 'LANGUAGES',
		description:
			'Proficient in Dart and PHP for core logic, complemented by HTML and CSS for structuring and styling modern interfaces.',
		items: [
			{ name: 'Dart', icon: 'dart', tone: 'cobalt' },
			{ name: 'PHP', icon: 'php', tone: 'yellow' },
			{ name: 'HTML5', icon: 'html5', tone: 'cobalt' },
			{ name: 'CSS3', icon: 'css3', tone: 'yellow' }
		]
	},
	{
		title: 'DATABASES',
		description: 'Data management and real-time syncing with Firebase and SQLite.',
		items: [
			{ name: 'SQLite', icon: 'sqlite', tone: 'cobalt' },
			{ name: 'Firebase', icon: 'firebase', tone: 'yellow' }
		]
	},
	{
		title: 'UI/UX',
		description: 'Implementing high-quality and consistent user interfaces.',
		items: [{ name: 'UI/UX', icon: 'palette', tone: 'yellow' }]
	}
] satisfies readonly TechCategory[];
