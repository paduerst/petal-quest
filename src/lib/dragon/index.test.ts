import { expect, test } from 'vitest';
import { capitalizeFirstLetter, AGES_UPPER, COLORS_UPPER, DragonConfig } from '.';

test('capitalizeFirstLetter only does the first letter', () => {
	expect(capitalizeFirstLetter('aa')).toBe('Aa');
});

test('capitalizing an empty string does nothing', () => {
	expect(capitalizeFirstLetter('')).toBe('');
});

test('AGES_UPPER are Wyrmling, Young, Adult, and Ancient', () => {
	expect(AGES_UPPER).toStrictEqual(['Wyrmling', 'Young', 'Adult', 'Ancient']);
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

test('DragonConfig.toString() behavior', () => {
	const dragonConfig = new DragonConfig();
	const defaultString = 'age=wyrmling&color=red';
	expect(dragonConfig.toString()).toBe(defaultString);

	const testName = 'Amara';
	const testAlignment = 'Chaotic';
	dragonConfig.name = testName;
	dragonConfig.alignment = testAlignment;
	expect(dragonConfig.toString()).toBe(`${defaultString}&name=Amara&alignment=Chaotic`);

	dragonConfig.name = '';
	dragonConfig.alignment = '';
	expect(dragonConfig.toString()).toBe(`${defaultString}&name=&alignment=`);

	dragonConfig.cleanup();
	expect(dragonConfig.toString()).toBe(defaultString);
});
