import { expect, test } from 'vitest';
import { PETAL_MONSTERS } from './petal-monsters';
import { stringToSRDMonster } from './srd-monsters';

test('Monster subcategories do not share monsters', () => {
	for (const monster in PETAL_MONSTERS) {
		expect(stringToSRDMonster(monster)).toBe(undefined);
	}
});
