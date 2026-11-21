import type { AssetPath } from '$app/types';

export type IconKey =
	| 'flutter'
	| 'laravel'
	| 'dart'
	| 'php'
	| 'html5'
	| 'css3'
	| 'sqlite'
	| 'firebase'
	| 'palette';

export type SocialKey = 'github' | 'instagram' | 'linkedin' | 'dicoding';

export interface NavItem {
	readonly label: string;
	readonly href: string;
	readonly external?: boolean;
}

export interface SocialLink {
	readonly label: string;
	readonly href: string;
	readonly icon: SocialKey;
}

export interface StatusItem {
	readonly label: string;
	readonly value: string;
	readonly emphasis?: boolean;
}

export interface HeroContent {
	readonly eyebrow: string;
	readonly name: string;
	readonly intro: string;
	readonly cta: {
		readonly label: string;
		readonly href: string;
		readonly external?: boolean;
	};
}

export interface HeadingSegment {
	readonly text: string;
	readonly accent?: boolean;
}

export interface HeadingLine {
	readonly segments: readonly HeadingSegment[];
}

export interface AboutContent {
	readonly heading: readonly HeadingLine[];
	readonly body: string;
	readonly university: string;
	readonly vision: string;
	readonly specialization: string;
}

export interface SiteConfig {
	readonly brand: string;
	readonly name: string;
	readonly title: string;
	readonly description: string;
	readonly hero: HeroContent;
	readonly about: AboutContent;
	readonly tagline: string;
	readonly photo: AssetPath;
	readonly photoAlt: string;
	readonly status: readonly StatusItem[];
	readonly socials: readonly SocialLink[];
	readonly nav: readonly NavItem[];
	readonly copyright: string;
}

export interface TechItem {
	readonly name: string;
	readonly icon: IconKey;
	readonly tone: 'cobalt' | 'yellow';
}

export interface TechCategory {
	readonly title: string;
	readonly description: string;
	readonly items: readonly TechItem[];
}

export type ProjectCategory = 'Full Stack' | 'Mobile' | 'Web' | 'AI';

export interface Project {
	readonly id: string;
	readonly title: string;
	readonly category: ProjectCategory;
	readonly description: string;
	readonly image?: AssetPath;
	readonly imageAlt?: string;
	readonly detailsUrl?: string;
	readonly stack?: readonly string[];
	readonly year?: number;
}

export interface Certificate {
	readonly id: string;
	readonly title: string;
	readonly issuer: string;
	readonly status: 'completed' | 'in-progress';
	readonly hours?: number;
	readonly level?: 'Dasar' | 'Pemula' | 'Menengah' | 'Mahir';
	readonly credentialUrl: string;
	readonly issuedAt?: string;
}

export interface CertificateProfile {
	readonly summary: string;
	readonly href: string;
}
