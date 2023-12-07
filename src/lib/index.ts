import { normalizeString } from './text-utils';

export const NAV_LINKS = [
	{
		href: '/prismatic-dragons/',
		text: 'Prismatic Dragons',
		children: []
	},
	{
		href: '/dragon-builder/',
		text: 'Dragon Builder',
		children: []
	},
	{
		href: '/about/',
		text: 'About',
		children: []
	}
] as const;

export const DEV_NAV_LINKS = [
	{
		href: '/monsters/',
		text: 'Monsters'
	},
	{
		href: '/spells/',
		text: 'Spells'
	},
	{
		href: '/conditions/',
		text: 'Conditions'
	}
] as const;

/**
 * Returns a unique ID string for the given Nav Link. Uniqueness is guaranteed by testing.
 * @export
 * @param {(typeof NAV_LINKS)[number]} link
 * @return {*}  {string}
 */
export function getNavLinkId(link: (typeof NAV_LINKS)[number]): string {
	return `navLink__${normalizeString(link.text)}`;
}

export const BASE_SHARE_URL = 'https://dragon.petal.quest/';
