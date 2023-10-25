import { expect, test } from 'vitest';
import {
	numberWithOrdinalSuffix,
	capitalizeFirstLetter,
	isDigit,
	isAlnum,
	normalizeString,
	signFromNumber,
	numberWithSign
} from '$lib/text-utils';

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

test('capitalizeFirstLetter only does the first letter', () => {
	expect(capitalizeFirstLetter('aa')).toBe('Aa');
});

test('capitalizing an empty string does nothing', () => {
	expect(capitalizeFirstLetter('')).toBe('');
});

test('isDigit() behavior', () => {
	expect(isDigit('0')).toBe(true);
	expect(isDigit('1')).toBe(true);
	expect(isDigit('9')).toBe(true);
	expect(isDigit('11')).toBe(true);
	expect(isDigit('-1')).toBe(false);
	expect(isDigit('a')).toBe(false);
	expect(isDigit('A')).toBe(false);
	expect(isDigit('A9')).toBe(false);
	expect(isDigit(' ')).toBe(false);
	expect(isDigit('-')).toBe(false);
	expect(isDigit('_')).toBe(false);
});

test('isAlnum() behavior', () => {
	expect(isAlnum('0')).toBe(true);
	expect(isAlnum('1')).toBe(true);
	expect(isAlnum('9')).toBe(true);
	expect(isAlnum('11')).toBe(true);
	expect(isAlnum('-1')).toBe(false);
	expect(isAlnum('a')).toBe(true);
	expect(isAlnum('A')).toBe(true);
	expect(isAlnum('A9')).toBe(true);
	expect(isAlnum(' ')).toBe(false);
	expect(isAlnum('-')).toBe(false);
	expect(isAlnum('_')).toBe(false);
});

test('normalizeString() behavior', () => {
	expect(normalizeString('0')).toBe('');
	expect(normalizeString('0 And stuff')).toBe('andStuff'); // ' ' resets uppercase
	expect(normalizeString('0-And-stuff')).toBe('andstuff'); // '-' does not
	expect(normalizeString('This is a string.')).toBe('thisIsAString');
});

test('signFromNumber() behavior', () => {
	expect(signFromNumber(-1)).toBe('-');
	expect(signFromNumber(1)).toBe('+');
	expect(signFromNumber(0)).toBe('+');
	expect(signFromNumber(-0)).toBe('+');
});

test('numberWithSign() behavior', () => {
	expect(numberWithSign(-1)).toBe('-1');
	expect(numberWithSign(1)).toBe('+1');
	expect(numberWithSign(0)).toBe('+0');
	expect(numberWithSign(-0)).toBe('+0');

	expect(numberWithSign(1, ' ')).toBe('+ 1');
	expect(numberWithSign(1, ' anything-can_g0 here ')).toBe('+ anything-can_g0 here 1');
});
