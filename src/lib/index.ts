import { normalizeString } from './text-utils';

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
