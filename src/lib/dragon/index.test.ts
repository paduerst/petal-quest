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
	COLOR_TO_THEME,
	RGBToRGBA,
	DragonConfig
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
	expect(scoreToMod(1)).toBe(-5);
	expect(scoreToMod(2)).toBe(-4);
	expect(scoreToMod(3)).toBe(-4);
	expect(scoreToMod(4)).toBe(-3);
	expect(scoreToMod(5)).toBe(-3);
	expect(scoreToMod(6)).toBe(-2);
	expect(scoreToMod(7)).toBe(-2);
	expect(scoreToMod(8)).toBe(-1);
	expect(scoreToMod(9)).toBe(-1);
	expect(scoreToMod(10)).toBe(0);
	expect(scoreToMod(11)).toBe(0);
	expect(scoreToMod(12)).toBe(+1);
	expect(scoreToMod(13)).toBe(+1);
	expect(scoreToMod(14)).toBe(+2);
	expect(scoreToMod(15)).toBe(+2);
	expect(scoreToMod(16)).toBe(+3);
	expect(scoreToMod(17)).toBe(+3);
	expect(scoreToMod(18)).toBe(+4);
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

test('DragonConfig.getTitle() behavior', () => {
	const dragonConfig = new DragonConfig();

	// default behavior
	expect(dragonConfig.getTitle()).toBe('Red Dragon Wyrmling');

	// other ages have a different format
	for (let i = 1; i < AGES.length; i++) {
		dragonConfig.age = AGES[i];
		expect(dragonConfig.getTitle()).toBe(`${AGES_UPPER[i]} Red Dragon`);
	}

	// adding a name puts the default title in parentheses
	dragonConfig.age = 'wyrmling'; // reset
	dragonConfig.name = 'Amara';
	expect(dragonConfig.getTitle()).toBe('Amara (Red Dragon Wyrmling)');

	// it will ignore the name if it's the empty string though
	dragonConfig.name = '';
	expect(dragonConfig.getTitle()).toBe('Red Dragon Wyrmling');
});

test('DragonConfig.getTheme() behavior', () => {
	const dragonConfig = new DragonConfig();

	// default behavior
	expect(dragonConfig.getTheme()).toBe(COLOR_TO_THEME['red']);

	for (const color of COLORS) {
		dragonConfig.color = color;
		expect(dragonConfig.getTheme()).toBe(COLOR_TO_THEME[color]);
	}
});

test('DragonConfig.toString() behavior', () => {
	const dragonConfig = new DragonConfig();
	const defaultString = 'age=wyrmling&color=red';
	expect(dragonConfig.toString()).toBe(defaultString);

	// toString is called when a DragonConfig is put into a string like so
	expect(`${dragonConfig}`).toBe(defaultString);

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
	let testStringOutput = dragonConfig.toString();
	let expectedStringOutput = 'age=wyrmling&color=red';
	expect(testStringOutput).toBe(expectedStringOutput);

	params1.append('color', 'blue'); // valid color, appended after invalid color
	expect(dragonConfig.fromURLSearchParams(params1)).toBe(false);
	testStringOutput = dragonConfig.toString();
	expectedStringOutput = 'age=wyrmling&color=red';
	expect(testStringOutput).toBe(expectedStringOutput);

	params1.set('color', 'blue'); // valid color, replacing all other color values
	expect(dragonConfig.fromURLSearchParams(params1)).toBe(true);
	testStringOutput = dragonConfig.toString();
	expectedStringOutput = 'age=young&color=blue';
	expect(testStringOutput).toBe(expectedStringOutput);

	params1.append('color', 'Jeremy'); // invalid color, appended after valid color
	expect(dragonConfig.fromURLSearchParams(params1)).toBe(true);
	testStringOutput = dragonConfig.toString();
	expectedStringOutput = 'age=young&color=blue';
	expect(testStringOutput).toBe(expectedStringOutput);

	const params2 = new URLSearchParams();
	// valid age and color, but in opposite order, which doesn't matter
	params2.set('color', 'indigo');
	params2.set('age', 'adult');
	expect(dragonConfig.fromURLSearchParams(params2)).toBe(true);
	testStringOutput = dragonConfig.toString();
	expectedStringOutput = 'age=adult&color=indigo';
	expect(testStringOutput).toBe(expectedStringOutput);
});

test('DragonConfig.fromString() behavior', () => {
	const dragonConfig = new DragonConfig();

	// empty string is not valid
	let testStringInput = '';
	expect(dragonConfig.fromString(testStringInput)).toBe(false);
	// results are unchanged by adding a '?' at the start of the string
	expect(dragonConfig.fromString(`?${testStringInput}`)).toBe(false);
	let testStringOutput = dragonConfig.toString();
	let expectedStringOutput = 'age=wyrmling&color=red';
	expect(testStringOutput).toBe(expectedStringOutput);

	// valid age, invalid color
	testStringInput = 'age=young&color=Jeremy';
	expect(dragonConfig.fromString(testStringInput)).toBe(false);
	expect(dragonConfig.fromString(`?${testStringInput}`)).toBe(false);
	testStringOutput = dragonConfig.toString();
	expectedStringOutput = 'age=wyrmling&color=red';
	expect(testStringOutput).toBe(expectedStringOutput);

	// valid color after invalid color
	testStringInput = 'age=young&color=Jeremy&color=blue';
	expect(dragonConfig.fromString(testStringInput)).toBe(false);
	expect(dragonConfig.fromString(`?${testStringInput}`)).toBe(false);
	testStringOutput = dragonConfig.toString();
	expectedStringOutput = 'age=wyrmling&color=red';
	expect(testStringOutput).toBe(expectedStringOutput);

	// valid age and color
	testStringInput = 'age=young&color=blue';
	expect(dragonConfig.fromString(testStringInput)).toBe(true);
	expect(dragonConfig.fromString(`?${testStringInput}`)).toBe(true);
	testStringOutput = dragonConfig.toString();
	expectedStringOutput = testStringInput; // input and output should be equal
	expect(testStringOutput).toBe(expectedStringOutput);

	// invalid color after valid color
	testStringInput = 'age=young&color=blue&color=Jeremy';
	expect(dragonConfig.fromString(testStringInput)).toBe(true);
	expect(dragonConfig.fromString(`?${testStringInput}`)).toBe(true);
	testStringOutput = dragonConfig.toString();
	expectedStringOutput = 'age=young&color=blue'; // Jeremy is gone!
	expect(testStringOutput).toBe(expectedStringOutput);

	// swap the order of age and color, still valid
	testStringInput = 'color=indigo&age=adult';
	expect(dragonConfig.fromString(testStringInput)).toBe(true);
	expect(dragonConfig.fromString(`?${testStringInput}`)).toBe(true);
	testStringOutput = dragonConfig.toString();
	expectedStringOutput = 'age=adult&color=indigo'; // back in the normal order
	expect(testStringOutput).toBe(expectedStringOutput);
});

test('DragonConfig.newFromDragonConfig() behavior', () => {
	const dragonConfig1 = new DragonConfig();
	dragonConfig1.name = 'Amara'; // making sure at least one value isn't default
	const dragonConfig2 = dragonConfig1;
	expect(dragonConfig2).toBe(dragonConfig1);
	expect(dragonConfig2.toString()).toBe(dragonConfig1.toString());

	const dragonConfig3 = DragonConfig.newFromDragonConfig(dragonConfig1);
	expect(dragonConfig3).not.toBe(dragonConfig1);
	expect(dragonConfig3.toString()).toBe(dragonConfig1.toString());
});
