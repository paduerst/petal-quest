import { expect, test } from 'vitest';
import { DragonConfig } from './dragon-config';
import { AGES, AGES_UPPER, COLORS, COLOR_TO_THEME } from '.';

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
