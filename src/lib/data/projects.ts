import type { HeadingLine, Project } from './types';

export const projectsHeading = [
	{ segments: [{ text: 'MY ' }, { text: 'PROJECTS', accent: true }] }
] satisfies readonly HeadingLine[];

export const projects = [
	{
		id: 'rice-leaf-disease-diagnosis-system',
		title: 'RICE LEAF DISEASE DIAGNOSIS SYSTEM',
		category: 'AI',
		description:
			'Digital plant health diagnosis system powered by a Custom CNN model in TensorFlow/Keras across six rice leaf classes, integrated with a local Flask web interface.',
		stack: ['Python', 'TensorFlow', 'Keras', 'Flask'],
		year: 2026
	},
	{
		id: 'keuangan-catatan-offline-finance',
		title: 'KEUANGAN CATATAN — OFFLINE FINANCE',
		category: 'Mobile',
		description:
			'Offline-first personal finance tracker built with Flutter and Drift (SQLite) for fast local transaction logging, category budgeting, and zero-latency access.',
		stack: ['Flutter', 'Dart', 'Drift', 'SQLite'],
		year: 2026
	}
] satisfies readonly Project[];
