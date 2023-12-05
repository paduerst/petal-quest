import { expect, test } from 'vitest';
import { AGES, stringToAge, COLORS, stringToColor } from '.';

test('stringToAge() behavior', () => {
	expect(stringToAge('This is not a valid age.')).toBe(undefined);

	for (const age of AGES) {
		expect(stringToAge(age)).toBe(age);
	}
});

test('stringToColor() behavior', () => {
	expect(stringToColor('This is not a valid color.')).toBe(undefined);

	for (const color of COLORS) {
		expect(stringToColor(color)).toBe(color);
	}
});
