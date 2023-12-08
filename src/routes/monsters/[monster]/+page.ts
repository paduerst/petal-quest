import { error } from '@sveltejs/kit';
import { type AppMonster, stringToAppMonster, APP_MONSTER_ALIASES } from '$lib/monsters/index.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const monster: AppMonster | undefined =
		stringToAppMonster(params.monster) ?? APP_MONSTER_ALIASES[params.monster];
	if (monster !== undefined) {
		return {
			monster: monster
		};
	} else {
		throw error(404, 'Monster Not Found');
	}
}
