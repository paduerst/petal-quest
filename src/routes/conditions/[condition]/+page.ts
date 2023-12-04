import { error } from '@sveltejs/kit';
import { stringToCondition } from '$lib/conditions/index.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const condition = stringToCondition(params.condition);
	if (condition !== undefined) {
		return {
			condition: condition
		};
	} else {
		throw error(404, 'Condition Not Found');
	}
}
