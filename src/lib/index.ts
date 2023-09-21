export const NAV_LINKS = [
	{
		href: '/prismatic-dragons/',
		text: 'Prismatic Dragons',
		children: [{ href: '/prismatic-dragons/colors/', text: 'Colors' }]
	},
	{ href: '/dragon-builder/', text: 'Dragon Builder', children: [] },
	{ href: '/about/', text: 'About', children: [] }
] as const;

export const BASE_SHARE_URL = 'https://dragon.petal.quest/';
