import { expect, test } from 'vitest';
import {
	capitalizeFirstLetter,
	isDigit,
	isAlnum,
	normalizeString,
	AGES,
	AGES_UPPER,
	stringToAge,
	COLORS,
	COLORS_UPPER,
	stringToColor,
	scoreToMod,
	signFromNumber,
	numberWithSign,
	expectedDiceResult,
	type RGB,
	RGBToRGBA
} from '.';

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

test('AGES_UPPER are Wyrmling, Young, Adult, and Ancient', () => {
	expect(AGES_UPPER).toStrictEqual(['Wyrmling', 'Young', 'Adult', 'Ancient']);
});

test('stringToAge() behavior', () => {
	expect(stringToAge('This is not a valid age.')).toBe(undefined);

	for (const age of AGES) {
		expect(stringToAge(age)).toBe(age);
	}
});

test('COLORS_UPPER are Red, Orange, Yellow, Green, Blue, Indigo, and Violet', () => {
	expect(COLORS_UPPER).toStrictEqual([
		'Red',
		'Orange',
		'Yellow',
		'Green',
		'Blue',
		'Indigo',
		'Violet'
	]);
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

test('stringToColor() behavior', () => {
	expect(stringToColor('This is not a valid color.')).toBe(undefined);

	for (const color of COLORS) {
		expect(stringToColor(color)).toBe(color);
	}
});

test('RGBToRGBA() behavior', () => {
	const rgb: RGB = `rgb(${0}, ${0}, ${0})`;
	expect(RGBToRGBA(rgb, 0.5)).toBe(`rgba(${0}, ${0}, ${0}, ${0.5})`);
});
