import { normalizeString } from './dragon';

// https://stackoverflow.com/a/13627586/17934762
export function numberWithOrdinalSuffix(i: number): string {
	const j = Math.abs(i) % 10,
		k = Math.abs(i) % 100;
	if (j == 1 && k != 11) {
		return `${i}st`;
	}
	if (j == 2 && k != 12) {
		return `${i}nd`;
	}
	if (j == 3 && k != 13) {
		return `${i}rd`;
	}
	return `${i}th`;
}

export const NAV_LINKS = [
	{
		href: '/prismatic-dragons/',
		text: 'Prismatic Dragons',
		children: [{ href: '/prismatic-dragons/colors/', text: 'Colors' }]
	},
	{
		href: '/dragon-builder/',
		text: 'Dragon Builder',
		children: []
	},
	{
		href: '/spells/',
		text: 'Spells',
		children: []
	},
	{
		href: '/about/',
		text: 'About',
		children: []
	}
] as const;

export function getNavLinkId(link: (typeof NAV_LINKS)[number]): string {
	return `navLink__${normalizeString(link.text)}`;
}

export const BASE_SHARE_URL = 'https://dragon.petal.quest/';
