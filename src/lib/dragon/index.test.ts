import { expect, test } from 'vitest';
import {
	capitalizeFirstLetter,
	AGES,
	AGES_UPPER,
	stringToAge,
	COLORS,
	COLORS_UPPER,
	stringToColor,
	DragonConfig
} from '.';

test('capitalizeFirstLetter only does the first letter', () => {
	expect(capitalizeFirstLetter('aa')).toBe('Aa');
});

test('capitalizing an empty string does nothing', () => {
	expect(capitalizeFirstLetter('')).toBe('');
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

test('stringToColor() behavior', () => {
	expect(stringToColor('This is not a valid color.')).toBe(undefined);

	for (const color of COLORS) {
		expect(stringToColor(color)).toBe(color);
	}
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

test('DragonConfig.fromURLSearchParams() behavior', () => {
	const dragonConfig = new DragonConfig();
	const params1 = new URLSearchParams();
	expect(dragonConfig.fromURLSearchParams(params1)).toBe(false);

	params1.set('age', 'young'); // valid age
	params1.set('color', 'Jeremy'); // invalid color
	expect(dragonConfig.fromURLSearchParams(params1)).toBe(false);

	params1.append('color', 'blue'); // valid color, appended after invalid color
	expect(dragonConfig.fromURLSearchParams(params1)).toBe(false);

	params1.set('color', 'blue'); // valid color, replacing all other color values
	expect(dragonConfig.fromURLSearchParams(params1)).toBe(true);

	params1.append('color', 'Jeremy'); // invalid color, appended after valid color
	expect(dragonConfig.fromURLSearchParams(params1)).toBe(true);
});

test('DragonConfig.fromString() behavior', () => {
	const dragonConfig = new DragonConfig();

	// empty string is not valid
	let testString = '';
	expect(dragonConfig.fromString(testString)).toBe(false);
	expect(dragonConfig.fromString(`?${testString}`)).toBe(false);

	// valid age, invalid color
	testString = 'age=young&color=Jeremy';
	expect(dragonConfig.fromString(testString)).toBe(false);
	expect(dragonConfig.fromString(`?${testString}`)).toBe(false);

	// valid color after invalid color
	testString = 'age=young&color=Jeremy&color=blue';
	expect(dragonConfig.fromString(testString)).toBe(false);
	expect(dragonConfig.fromString(`?${testString}`)).toBe(false);

	// valid age and color
	testString = 'age=young&color=blue';
	expect(dragonConfig.fromString(testString)).toBe(true);
	expect(dragonConfig.fromString(`?${testString}`)).toBe(true);

	// invalid color after valid color
	testString = 'age=young&color=blue&color=Jeremy';
	expect(dragonConfig.fromString(testString)).toBe(true);
	expect(dragonConfig.fromString(`?${testString}`)).toBe(true);
});
