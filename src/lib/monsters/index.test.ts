import { expect, test } from 'vitest';
import { SIZES, stringToSize } from '.';
import { PETAL_MONSTERS } from './petal-monsters';
import { stringToSRDMonster } from './srd-monsters';

test('Monster subcategories do not share monsters', () => {
	for (const monster in PETAL_MONSTERS) {
		expect(stringToSRDMonster(monster)).toBe(undefined);
	}
});

test('stringToSize() behavior', () => {
	expect(stringToSize('This is not a valid size.')).toBe(undefined);

	for (const size of SIZES) {
		expect(stringToSize(size)).toBe(size);
	}
});
