import { expect, test } from 'vitest';
import { numberWithOrdinalSuffix, NAV_LINKS, getNavLinkId } from '$lib';

test('numberWithOrdinalSuffix() behavior', () => {
	expect(numberWithOrdinalSuffix(0)).toBe('0th');
	expect(numberWithOrdinalSuffix(1)).toBe('1st');
	expect(numberWithOrdinalSuffix(2)).toBe('2nd');
	expect(numberWithOrdinalSuffix(3)).toBe('3rd');
	expect(numberWithOrdinalSuffix(4)).toBe('4th');

	expect(numberWithOrdinalSuffix(10)).toBe('10th');
	expect(numberWithOrdinalSuffix(11)).toBe('11th');
	expect(numberWithOrdinalSuffix(12)).toBe('12th');
	expect(numberWithOrdinalSuffix(13)).toBe('13th');
	expect(numberWithOrdinalSuffix(14)).toBe('14th');

	expect(numberWithOrdinalSuffix(20)).toBe('20th');
	expect(numberWithOrdinalSuffix(21)).toBe('21st');
	expect(numberWithOrdinalSuffix(22)).toBe('22nd');
	expect(numberWithOrdinalSuffix(23)).toBe('23rd');
	expect(numberWithOrdinalSuffix(24)).toBe('24th');

	expect(numberWithOrdinalSuffix(-0)).toBe('0th');
	expect(numberWithOrdinalSuffix(-1)).toBe('-1st');
	expect(numberWithOrdinalSuffix(-2)).toBe('-2nd');
	expect(numberWithOrdinalSuffix(-3)).toBe('-3rd');
	expect(numberWithOrdinalSuffix(-4)).toBe('-4th');
});

test('getNavLinkId() uniqueness', () => {
	const linkIds = new Set();

	for (const link of NAV_LINKS) {
		const linkId = getNavLinkId(link);
		expect(linkIds.has(linkId)).toBe(false);
		linkIds.add(linkId);
	}
});
