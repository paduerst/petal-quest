import { expect, test } from 'vitest';
import { CR_NUMBERS, CR_STRINGS, CRNumberToString, CRStringToNumber } from './challenge-rating';

test('CR_NUMBERS and CR_STRINGS are the same size', () => {
	expect(CR_NUMBERS.length).toBe(CR_STRINGS.length);
});

test('CRNumberToString() and CRStringToNumber() behavior', () => {
	for (let i = 0; i < CR_NUMBERS.length; i++) {
		expect(CRNumberToString(CR_NUMBERS[i])).toBe(CR_STRINGS[i]);
		expect(CRStringToNumber(CR_STRINGS[i])).toBe(CR_NUMBERS[i]);
	}
});
