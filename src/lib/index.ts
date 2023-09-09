export const NAV_LINKS: readonly {
	href: string;
	text: string;
}[] = [
	{ href: '/prismatic-dragons', text: 'Prismatic Dragons' },
	{ href: '/dragon-builder', text: 'Dragon Builder' },
	{ href: '/about', text: 'About' }
] as const;

export const BASE_SHARE_URL = 'https://dragon.petal.quest/';
