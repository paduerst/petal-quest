import { error } from '@sveltejs/kit';
import { stringToAppSpell } from '$lib/spells/index.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const spell = stringToAppSpell(params.spell);
	if (spell !== undefined) {
		return {
			spell
		};
	} else {
		throw error(404, 'Spell Not Found');
	}
}
