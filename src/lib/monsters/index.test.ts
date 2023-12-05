import { expect, test } from 'vitest';
import { SIZES, stringToSize, scoreToMod, expectedDiceResult } from '.';

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

test('scoreToMod() behavior', () => {
	expect(scoreToMod(0)).toBe(-5);
	expect(scoreToMod(8)).toBe(-1);
	expect(scoreToMod(9)).toBe(-1);
	expect(scoreToMod(10)).toBe(0);
	expect(scoreToMod(11)).toBe(0);
	expect(scoreToMod(12)).toBe(+1);
	expect(scoreToMod(19)).toBe(+4);
	expect(scoreToMod(20)).toBe(+5);
	expect(scoreToMod(11.99999)).toBe(0);
	expect(scoreToMod(9.99999)).toBe(-1);
	expect(scoreToMod(-790)).toBe(-400);
	expect(scoreToMod(+810)).toBe(+400);
});

test('expectedDiceResult() behavior', () => {
	expect(expectedDiceResult(0, 4)).toBe(0);
	expect(expectedDiceResult(1, 4)).toBe(2);
	expect(expectedDiceResult(2, 4)).toBe(5);
	expect(expectedDiceResult(1, 4, +0.5)).toBe(3);
	expect(expectedDiceResult(-1, 4)).toBe(0);
	expect(expectedDiceResult(-1, 4, +3)).toBe(0);
	expect(expectedDiceResult(-1, 4, +3.5)).toBe(1);
	expect(expectedDiceResult(-9, 20, -9, 5)).toBe(5);
	expect(expectedDiceResult(7, 8, 14, 1)).toBe(45);
});
