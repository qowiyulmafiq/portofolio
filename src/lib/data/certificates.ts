import type { Certificate, CertificateProfile, HeadingLine } from './types';

const DICODING_PROFILE_URL = 'https://www.dicoding.com/users/afiq_qowiyul/academies';

export const certificatesHeading = [
	{ segments: [{ text: 'DICODING' }] },
	{ segments: [{ text: 'CERTIFICATES', accent: true }] }
] satisfies readonly HeadingLine[];

export const dicodingProfile = {
	summary: '15 academy classes · 3,437 XP · Joined 2024',
	href: DICODING_PROFILE_URL
} satisfies CertificateProfile;

export const certificates = [
	{
		id: 'belajar-strategi-pengembangan-diri',
		title: 'Belajar Strategi Pengembangan Diri',
		issuer: 'Dicoding',
		status: 'completed',
		hours: 12,
		level: 'Dasar',
		credentialUrl: DICODING_PROFILE_URL
	},
	{
		id: 'belajar-membuat-aplikasi-web-dengan-react',
		title: 'Belajar Membuat Aplikasi Web dengan React',
		issuer: 'Dicoding',
		status: 'completed',
		hours: 35,
		level: 'Pemula',
		credentialUrl: DICODING_PROFILE_URL
	},
	{
		id: 'belajar-membuat-front-end-web-untuk-pemula',
		title: 'Belajar Membuat Front-End Web untuk Pemula',
		issuer: 'Dicoding',
		status: 'completed',
		hours: 45,
		level: 'Pemula',
		credentialUrl: DICODING_PROFILE_URL
	},
	{
		id: 'belajar-dasar-pemrograman-javascript',
		title: 'Belajar Dasar Pemrograman JavaScript',
		issuer: 'Dicoding',
		status: 'completed',
		hours: 46,
		level: 'Dasar',
		credentialUrl: DICODING_PROFILE_URL
	},
	{
		id: 'belajar-dasar-pemrograman-web',
		title: 'Belajar Dasar Pemrograman Web',
		issuer: 'Dicoding',
		status: 'completed',
		hours: 45,
		level: 'Dasar',
		credentialUrl: DICODING_PROFILE_URL
	}
] satisfies readonly Certificate[];
