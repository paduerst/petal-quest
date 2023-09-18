/**
 * Returns the given string with its first character capitalized.
 * @export
 * @param {string} string
 * @return {*}  {string}
 */
export function capitalizeFirstLetter(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Returns true if the given character is a digit. False otherwise.
 * @param {string} char
 * @return {*}  {boolean}
 */
export function isDigit(char: string): boolean {
	return char >= '0' && char <= '9';
}

/**
 * Returns true if the given character is a-z, A-Z, or 0-9. False otherwise.
 * @param {string} char
 * @return {*}  {boolean}
 */
export function isAlnum(char: string): boolean {
	return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || isDigit(char);
}

/**
 * Returns a normalized copy of the given string, with no non-alphanumeric characters.
 * @param {string} stringIn
 * @return {*}  {string} Normalized string. Starts with a lowercase letter.
 */
export function normalizeString(stringIn: string): string {
	let key = '';
	let upperCase = false;
	for (let i = 0; i < stringIn.length; ++i) {
		const letter = stringIn[i];
		if (letter == ' ' && key.length > 0) {
			upperCase = true;
			continue;
		}
		if (!isAlnum(letter)) {
			continue;
		}
		if (key.length === 0 && isDigit(letter)) {
			continue; // first character must be a letter
		}
		if (upperCase) {
			upperCase = false;
			key += letter.toUpperCase();
		} else {
			key += letter.toLowerCase();
		}
	}
	return key;
}

export const AGES = ['wyrmling', 'young', 'adult', 'ancient'] as const;
export const AGES_UPPER = AGES.map(capitalizeFirstLetter) as ReadonlyArray<string>;
export const AGES_CAPS = AGES.map((age) => age.toUpperCase()) as ReadonlyArray<string>;
export type Age = (typeof AGES)[number];

/**
 * Converts input string to Age if possible, returning undefined if not.
 * @export
 * @param {string} ageString
 * @return {*}  {(Age | undefined)}
 */
export function stringToAge(ageString: string): Age | undefined {
	return AGES.find((age) => age === ageString);
}

export const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'] as const;
export const COLORS_UPPER = COLORS.map(capitalizeFirstLetter) as ReadonlyArray<string>;
export const COLORS_CAPS = COLORS.map((color) => color.toUpperCase()) as ReadonlyArray<string>;
export type Color = (typeof COLORS)[number];

/**
 * Converts input string to Color if possible, returning undefined if not.
 * @export
 * @param {string} colorString
 * @return {*}  {(Color | undefined)}
 */
export function stringToColor(colorString: string): Color | undefined {
	return COLORS.find((color) => color === colorString);
}

export const COLOR_TO_ALIGNMENT: {
	[key in Color]: string;
} = {
	red: 'Typically Chaotic',
	orange: 'Typically Lawful',
	yellow: 'Typically Lawful',
	green: 'Typically Neutral',
	blue: 'Typically Chaotic',
	indigo: 'Typically Chaotic',
	violet: 'Typically Lawful'
} as const;

export type RGB = `rgb(${number}, ${number}, ${number})`;
export const COLOR_TO_THEME: {
	[key in Color]: RGB;
} = {
	red: 'rgb(154, 21, 21)',
	orange: 'rgb(156, 87, 14)',
	yellow: 'rgb(143, 133, 1)',
	green: 'rgb(28, 128, 0)',
	blue: 'rgb(0, 100, 150)',
	indigo: 'rgb(31, 0, 156)',
	violet: 'rgb(118, 43, 158)'
} as const;

export const SIZES = ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'] as const;
export type Size = (typeof SIZES)[number];

export const AGE_TO_SIZE: {
	[key in Age]: Size;
} = {
	wyrmling: 'Medium',
	young: 'Large',
	adult: 'Huge',
	ancient: 'Gargantuan'
} as const;

export const DICE = [4, 6, 8, 10, 12, 20] as const;
export type Die = (typeof DICE)[number];

export const SIZE_TO_HIT_DIE: {
	[key in Size]: Die;
} = {
	Tiny: 4,
	Small: 6,
	Medium: 8,
	Large: 10,
	Huge: 12,
	Gargantuan: 20
} as const;

export const ABILITIES = [
	['strength', 'str'],
	['dexterity', 'dex'],
	['constitution', 'con'],
	['intelligence', 'int'],
	['wisdom', 'wis'],
	['charisma', 'cha']
] as const;

export const SKILLS = [
	{
		name: 'Acrobatics',
		key: 'skillAcrobatics',
		ability: 'dex',
		defaultDescription: 'Varies based on age and color'
	},
	{
		name: 'Animal Handling',
		key: 'skillAnimalHandling',
		ability: 'wis',
		defaultDescription: 'Varies based on age and color'
	},
	{
		name: 'Arcana',
		key: 'skillArcana',
		ability: 'int',
		defaultDescription: 'Varies based on age and color'
	},
	{
		name: 'Athletics',
		key: 'skillAthletics',
		ability: 'str',
		defaultDescription: 'Varies based on age and color'
	},
	{
		name: 'Deception',
		key: 'skillDeception',
		ability: 'cha',
		defaultDescription: 'Varies based on age and color'
	},
	{
		name: 'History',
		key: 'skillHistory',
		ability: 'int',
		defaultDescription: 'Varies based on age and color'
	},
	{
		name: 'Insight',
		key: 'skillInsight',
		ability: 'wis',
		defaultDescription: 'Varies based on age and color'
	},
	{
		name: 'Intimidation',
		key: 'skillIntimidation',
		ability: 'cha',
		defaultDescription: 'Varies based on age and color'
	},
	{
		name: 'Investigation',
		key: 'skillInvestigation',
		ability: 'int',
		defaultDescription: 'Varies based on age and color'
	},
	{
		name: 'Medicine',
		key: 'skillMedicine',
		ability: 'wis',
		defaultDescription: 'Varies based on age and color'
	},
	{
		name: 'Nature',
		key: 'skillNature',
		ability: 'int',
		defaultDescription: 'Varies based on age and color'
	},
	{
		name: 'Perception',
		key: 'skillPerception',
		ability: 'wis',
		defaultDescription: 'Typically double proficiency'
	},
	{
		name: 'Performance',
		key: 'skillPerformance',
		ability: 'cha',
		defaultDescription: 'Varies based on age and color'
	},
	{
		name: 'Persuasion',
		key: 'skillPersuasion',
		ability: 'cha',
		defaultDescription: 'Varies based on age and color'
	},
	{
		name: 'Religion',
		key: 'skillReligion',
		ability: 'int',
		defaultDescription: 'Varies based on age and color'
	},
	{
		name: 'Sleight of Hand',
		key: 'skillSleightOfHand',
		ability: 'dex',
		defaultDescription: 'Varies based on age and color'
	},
	{
		name: 'Stealth',
		key: 'skillStealth',
		ability: 'dex',
		defaultDescription: 'Typically proficient'
	},
	{
		name: 'Survival',
		key: 'skillSurvival',
		ability: 'wis',
		defaultDescription: 'Varies based on age and color'
	}
] as const;
export type SkillKey = (typeof SKILLS)[number]['key'];

export type ProficiencyLevel = 0.0 | 0.5 | 1.0 | 2.0;

/**
 * Calculates the ability modifier given the ability score.
 * @export
 * @param {number} score
 * @return {*}  {number}
 */
export function scoreToMod(score: number): number {
	return Math.floor((score - 10) / 2);
}

/**
 * Returns '-' for a negative number. Otherwise returns '+'.
 * @export
 * @param {number} number
 * @return {*}  {('+' | '-')}
 */
export function signFromNumber(number: number): '+' | '-' {
	if (number < 0) {
		return '-';
	} else {
		return '+';
	}
}

/**
 * Returns the given number as a string with + or - in front of it. Optional spacing parameter is placed between number and sign.
 * @export
 * @param {number} number
 * @param {string} [spacing='']
 * @return {*}  {string}
 */
export function numberWithSign(number: number, spacing: string = ''): string {
	if (number < 0) {
		return number.toString();
	} else {
		return `+${spacing}${number.toString()}`;
	}
}

/**
 * Calculates the expected value of a dice roll, with an optional modifier and minimumResult
 * @export
 * @param {number} numberOfDice
 * @param {Die} typeOfDice
 * @param {number} [modifier=0]
 * @param {number} [minimumResult=0]
 * @return {*}  {number}
 */
export function expectedDiceResult(
	numberOfDice: number,
	typeOfDice: Die,
	modifier: number = 0,
	minimumResult: number = 0
): number {
	return Math.max(minimumResult, Math.floor(numberOfDice * (0.5 + typeOfDice / 2) + modifier));
}

/**
 * Returns an RGBA string with the given RGB and A value.
 * @export
 * @param {RGB} rgb
 * @param {number} a
 * @return {*}  {string}
 */
export function RGBToRGBA(rgb: RGB, a: number): string {
	return `rgba(${rgb.substring(4, rgb.length - 1)}, ${a})`;
}

export class DragonConfig {
	age: Age = 'wyrmling';
	color: Color = 'red';
	name?: string;
	alignment?: string;

	skillAcrobatics?: ProficiencyLevel;
	skillAnimalHandling?: ProficiencyLevel;
	skillArcana?: ProficiencyLevel;
	skillAthletics?: ProficiencyLevel;
	skillDeception?: ProficiencyLevel;
	skillHistory?: ProficiencyLevel;
	skillInsight?: ProficiencyLevel;
	skillIntimidation?: ProficiencyLevel;
	skillInvestigation?: ProficiencyLevel;
	skillMedicine?: ProficiencyLevel;
	skillNature?: ProficiencyLevel;
	skillPerception?: ProficiencyLevel;
	skillPerformance?: ProficiencyLevel;
	skillPersuasion?: ProficiencyLevel;
	skillReligion?: ProficiencyLevel;
	skillSleightOfHand?: ProficiencyLevel;
	skillStealth?: ProficiencyLevel;
	skillSurvival?: ProficiencyLevel;

	/**
	 * Returns the title for this DragonConfig.
	 * @return {*}  {string}
	 * @memberof DragonConfig
	 */
	getTitle(): string {
		let output = '';

		let descriptiveTitle = '';
		const capitalizedAge = capitalizeFirstLetter(this.age);
		const capitalizedColor = capitalizeFirstLetter(this.color);
		if (this.age === 'wyrmling') {
			descriptiveTitle = `${capitalizedColor} Dragon ${capitalizedAge}`;
		} else {
			descriptiveTitle = `${capitalizedAge} ${capitalizedColor} Dragon`;
		}

		if (this.name === undefined || this.name === '') {
			output = descriptiveTitle;
		} else {
			output = `${this.name} (${descriptiveTitle})`;
		}

		return output;
	}

	/**
	 * Returns the RGB theme for this DragonConfig.
	 * @return {*}  {RGB}
	 * @memberof DragonConfig
	 */
	getTheme(): RGB {
		return COLOR_TO_THEME[this.color];
	}

	/**
	 * Deletes unneeded members of this DragonConfig.
	 * @memberof DragonConfig
	 */
	cleanup(): void {
		if (this.name === '') {
			delete this.name;
		}
		if (this.alignment === '') {
			delete this.alignment;
		}
	}

	/**
	 * Returns a URLSearchParams containing all defined members of this DragonConfig.
	 * @return {*}  {URLSearchParams}
	 * @memberof DragonConfig
	 */
	toURLSearchParams(): URLSearchParams {
		const output = new URLSearchParams();

		output.set('age', this.age);
		output.set('color', this.color);
		if (this.name !== undefined) {
			output.set('name', this.name);
		}
		if (this.alignment !== undefined) {
			output.set('alignment', this.alignment);
		}

		for (const skill of SKILLS) {
			const thisSkillValue = this[skill.key];
			if (thisSkillValue !== undefined) {
				output.set(skill.key, thisSkillValue.toString());
			}
		}

		return output;
	}

	/**
	 * Returns a query string version of this DragonConfig suitable for a URL. Does not include the question mark.
	 * @return {*}  {string}
	 * @memberof DragonConfig
	 */
	toString(): string {
		return this.toURLSearchParams().toString();
	}

	/**
	 * If given params have valid DragonConfig values, sets this DragonConfig from them and returns true.
	 * @param {URLSearchParams} params
	 * @return {*}  {boolean} If given params have valid DragonConfig values, true. Otherwise false.
	 * @memberof DragonConfig
	 */
	fromURLSearchParams(params: URLSearchParams): boolean {
		// The params must contain a valid age and color to be used.
		const paramsAgeVal = params.get('age');
		const paramsColorVal = params.get('color');
		if (paramsAgeVal === null || paramsColorVal === null) {
			return false;
		}

		const paramsAge = stringToAge(paramsAgeVal);
		const paramsColor = stringToColor(paramsColorVal);
		if (paramsAge === undefined || paramsColor === undefined) {
			return false;
		}

		this.age = paramsAge;
		this.color = paramsColor;

		const paramsNameVal = params.get('name');
		if (paramsNameVal !== null) {
			this.name = paramsNameVal;
		}

		const paramsAlignmentVal = params.get('alignment');
		if (paramsAlignmentVal !== null) {
			this.alignment = paramsAlignmentVal;
		}

		for (const skill of SKILLS) {
			this.#skillFromURLSearchParams(skill.key, params);
		}

		return true;
	}

	#skillFromURLSearchParams(skillKey: SkillKey, params: URLSearchParams) {
		const paramsSkillVal = params.get(skillKey);
		if (paramsSkillVal !== null) {
			const paramsSkillFloat = parseFloat(paramsSkillVal);
			if (
				paramsSkillFloat === 0.0 ||
				paramsSkillFloat === 0.5 ||
				paramsSkillFloat === 1.0 ||
				paramsSkillFloat === 2.0
			) {
				this[skillKey] = paramsSkillFloat;
			}
		}
	}

	/**
	 * If given string has valid DragonConfig values, sets this DragonConfig from them and returns true.
	 * @param {string} paramsString
	 * @return {*}  {boolean} If given string has valid DragonConfig values, true. Otherwise false.
	 * @memberof DragonConfig
	 */
	fromString(paramsString: string): boolean {
		const params = new URLSearchParams(paramsString);
		return this.fromURLSearchParams(params);
	}

	/**
	 * Returns a new DragonConfig with the same params as the given one.
	 * @static
	 * @param {DragonConfig} configIn
	 * @return {*}  {DragonConfig}
	 * @memberof DragonConfig
	 */
	static newFromDragonConfig(configIn: DragonConfig): DragonConfig {
		const config = new DragonConfig();
		config.fromURLSearchParams(configIn.toURLSearchParams());
		return config;
	}
}
