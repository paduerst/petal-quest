import { error } from '@sveltejs/kit';
import { stringToAppMonster } from '$lib/monsters/index.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const monster = stringToAppMonster(params.monster);
	if (monster !== undefined) {
		return {
			monster: monster
		};
	} else {
		throw error(404, 'Monster Not Found');
	}
}
