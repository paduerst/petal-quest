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

const standardDefaultSkillDescription = 'Varies with age and color';
export const SKILLS = [
	{
		name: 'Acrobatics',
		key: 'skillAcrobatics',
		ability: 'dex',
		defaultDescription: standardDefaultSkillDescription
	},
	{
		name: 'Animal Handling',
		key: 'skillAnimalHandling',
		ability: 'wis',
		defaultDescription: standardDefaultSkillDescription
	},
	{
		name: 'Arcana',
		key: 'skillArcana',
		ability: 'int',
		defaultDescription: standardDefaultSkillDescription
	},
	{
		name: 'Athletics',
		key: 'skillAthletics',
		ability: 'str',
		defaultDescription: standardDefaultSkillDescription
	},
	{
		name: 'Deception',
		key: 'skillDeception',
		ability: 'cha',
		defaultDescription: standardDefaultSkillDescription
	},
	{
		name: 'History',
		key: 'skillHistory',
		ability: 'int',
		defaultDescription: standardDefaultSkillDescription
	},
	{
		name: 'Insight',
		key: 'skillInsight',
		ability: 'wis',
		defaultDescription: standardDefaultSkillDescription
	},
	{
		name: 'Intimidation',
		key: 'skillIntimidation',
		ability: 'cha',
		defaultDescription: standardDefaultSkillDescription
	},
	{
		name: 'Investigation',
		key: 'skillInvestigation',
		ability: 'int',
		defaultDescription: standardDefaultSkillDescription
	},
	{
		name: 'Medicine',
		key: 'skillMedicine',
		ability: 'wis',
		defaultDescription: standardDefaultSkillDescription
	},
	{
		name: 'Nature',
		key: 'skillNature',
		ability: 'int',
		defaultDescription: standardDefaultSkillDescription
	},
	{
		name: 'Perception',
		key: 'skillPerception',
		ability: 'wis',
		defaultDescription: 'Typically 2x proficiency'
	},
	{
		name: 'Performance',
		key: 'skillPerformance',
		ability: 'cha',
		defaultDescription: standardDefaultSkillDescription
	},
	{
		name: 'Persuasion',
		key: 'skillPersuasion',
		ability: 'cha',
		defaultDescription: standardDefaultSkillDescription
	},
	{
		name: 'Religion',
		key: 'skillReligion',
		ability: 'int',
		defaultDescription: standardDefaultSkillDescription
	},
	{
		name: 'Sleight of Hand',
		key: 'skillSleightOfHand',
		ability: 'dex',
		defaultDescription: standardDefaultSkillDescription
	},
	{
		name: 'Stealth',
		key: 'skillStealth',
		ability: 'dex',
		defaultDescription: 'Typically 1x proficiency'
	},
	{
		name: 'Survival',
		key: 'skillSurvival',
		ability: 'wis',
		defaultDescription: standardDefaultSkillDescription
	}
] as const;

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

export const BASIC_PRONOUN_OPTIONS = ['it-its', 'she-her', 'he-him', 'they-them'] as const;
export type BasicPronouns = (typeof BASIC_PRONOUN_OPTIONS)[number];
export const DEFAULT_PRONOUNS = 'she-her'; // assumed to be of type BasicPronouns

export const PRONOUN_OPTIONS = [...BASIC_PRONOUN_OPTIONS, 'none', 'custom'] as const;
export type Pronouns = (typeof PRONOUN_OPTIONS)[number];

export type PronounsConfig = {
	plural: boolean;
	nominative: string;
	objective: string;
	possessiveAdjective: string;
};
export const BASIC_PRONOUN_CONFIGS: {
	[key in BasicPronouns]: PronounsConfig;
} = {
	'it-its': {
		plural: false,
		nominative: 'it',
		objective: 'it',
		possessiveAdjective: 'its'
	},
	'she-her': {
		plural: false,
		nominative: 'she',
		objective: 'her',
		possessiveAdjective: 'her'
	},
	'he-him': {
		plural: false,
		nominative: 'he',
		objective: 'him',
		possessiveAdjective: 'his'
	},
	'they-them': {
		plural: true,
		nominative: 'they',
		objective: 'them',
		possessiveAdjective: 'their'
	}
} as const;

export const maxHPMin = 1;
export const maxHPMax = 9999;

export class DragonConfig {
	age: Age = 'wyrmling';
	color: Color = 'red';
	name?: string;
	disableNameCapitalization?: boolean;
	statBlockTitle?: string;
	alignment?: string;
	languages?: string;
	pronouns?: Pronouns;
	pronounsConfig?: PronounsConfig; // only needed if using custom pronouns

	maxHP?: number | null;

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
		if (this.statBlockTitle !== undefined) {
			return this.statBlockTitle;
		}

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
		if (this.disableNameCapitalization === false) {
			delete this.disableNameCapitalization;
		}
		if (this.statBlockTitle === '') {
			delete this.statBlockTitle;
		}
		if (this.alignment === '') {
			delete this.alignment;
		}
		if (this.languages === '') {
			delete this.languages;
		}
		if (this.pronouns === DEFAULT_PRONOUNS) {
			delete this.pronouns;
		}
		if (this.pronounsConfig !== undefined && this.pronouns !== 'custom') {
			// we only use the pronounsConfig if using custom pronouns
			delete this.pronounsConfig;
		}

		if (this.maxHP !== undefined && this.maxHP !== null) {
			if (Number.isNaN(this.maxHP)) {
				delete this.maxHP;
			}
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
		if (this.disableNameCapitalization === true) {
			output.set('disableNameCapitalization', '1');
		}
		if (this.statBlockTitle !== undefined) {
			output.set('statBlockTitle', this.statBlockTitle);
		}
		if (this.alignment !== undefined) {
			output.set('alignment', this.alignment);
		}
		if (this.languages !== undefined) {
			output.set('languages', this.languages);
		}
		if (this.pronouns !== undefined && this.pronouns !== DEFAULT_PRONOUNS) {
			output.set('pronouns', this.pronouns);
		}
		if (this.pronounsConfig !== undefined) {
			if (this.pronounsConfig.plural) {
				output.set('pronounsPlural', '1');
			}
			output.set('pronounNominative', this.pronounsConfig.nominative);
			output.set('pronounObjective', this.pronounsConfig.objective);
			output.set('pronounPossessiveAdjective', this.pronounsConfig.possessiveAdjective);
		}

		if (this.maxHP !== undefined && this.maxHP !== null && !Number.isNaN(this.maxHP)) {
			output.set('maxHP', Math.max(maxHPMin, Math.min(maxHPMax, this.maxHP)).toString());
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

		if (params.has('disableNameCapitalization') || params.has('forcelowercasename')) {
			this.disableNameCapitalization = true;
		}

		this.#setStatBlockTitleFromURLSearchParams(params);

		const paramsAlignmentVal = params.get('alignment');
		if (paramsAlignmentVal !== null) {
			this.alignment = paramsAlignmentVal;
		}

		const paramsLanguagesVal = params.get('languages');
		if (paramsLanguagesVal !== null) {
			this.languages = paramsLanguagesVal;
		}

		this.#setPronounsFromURLSearchParams(params);

		this.#setMaxHPFromURLSearchParams(params);

		this.#setSkillsFromURLSearchParams(params);

		return true;
	}

	#setStatBlockTitleFromURLSearchParams(params: URLSearchParams) {
		// maintaining backwards compatibility with older param names
		const keys = ['statBlockTitle', 'dragonTitle'] as const;
		for (const key of keys) {
			const paramsKeyVal = params.get(key);
			if (paramsKeyVal !== null) {
				this.statBlockTitle = paramsKeyVal;
				return;
			}
		}
	}

	#setPronounsFromURLSearchParams(params: URLSearchParams) {
		const paramsPronounsVal = params.get('pronouns');
		if (paramsPronounsVal !== null) {
			// we have to check several options here to maintain backwards compatibility
			if (paramsPronounsVal === DEFAULT_PRONOUNS || paramsPronounsVal === 'default') {
				this.pronouns = undefined;
			} else if (paramsPronounsVal === 'it-its' || paramsPronounsVal === 'neutral') {
				this.pronouns = 'it-its';
			} else if (paramsPronounsVal === 'she-her' || paramsPronounsVal === 'feminine') {
				this.pronouns = 'she-her';
			} else if (paramsPronounsVal === 'he-him' || paramsPronounsVal === 'masculine') {
				this.pronouns = 'he-him';
			} else if (paramsPronounsVal === 'they-them' || paramsPronounsVal === 'singularthey') {
				this.pronouns = 'they-them';
			} else if (paramsPronounsVal === 'none' || paramsPronounsVal === 'no-pronouns') {
				this.pronouns = 'none';
			} else if (paramsPronounsVal === 'custom' || paramsPronounsVal === 'custom-pronouns') {
				this.pronouns = 'custom';
			} else if (paramsPronounsVal === 'ey-em' || paramsPronounsVal === 'spivak') {
				// we want to support these URL options, using them as custom pronouns
				this.pronouns = 'custom';
				this.pronounsConfig = {
					plural: false,
					nominative: 'ey',
					objective: 'em',
					possessiveAdjective: 'eir'
				};
				return; // don't check the URL for custom pronouns
			} else {
				console.log(`Unable to parse URL pronouns value of ${paramsPronounsVal}`);
				this.pronouns = undefined;
			}
		}

		if (this.pronouns === 'custom') {
			// we only use the PronounsConfig from the URL if we're using custom pronouns
			let pronounsPlural: boolean;
			if (params.has('pronounsPlural')) {
				pronounsPlural = true;
			} else {
				pronounsPlural = false;
			}

			let pronounNominative = '';
			const pronounNominativeKeys = ['pronounNominative', 'pronoun-nominative'] as const;
			for (const key of pronounNominativeKeys) {
				const paramsKeyVal = params.get(key);
				if (paramsKeyVal !== null) {
					pronounNominative = paramsKeyVal;
					break;
				}
			}

			let pronounObjective = '';
			const pronounObjectiveKeys = ['pronounObjective', 'pronoun-objective'] as const;
			for (const key of pronounObjectiveKeys) {
				const paramsKeyVal = params.get(key);
				if (paramsKeyVal !== null) {
					pronounObjective = paramsKeyVal;
					break;
				}
			}

			let pronounPossessiveAdjective = '';
			const pronounPossessiveAdjectiveKeys = [
				'pronounPossessiveAdjective',
				'pronoun-possessive-adj'
			] as const;
			for (const key of pronounPossessiveAdjectiveKeys) {
				const paramsKeyVal = params.get(key);
				if (paramsKeyVal !== null) {
					pronounPossessiveAdjective = paramsKeyVal;
					break;
				}
			}

			const customConfig: PronounsConfig = {
				plural: pronounsPlural,
				nominative: pronounNominative,
				objective: pronounObjective,
				possessiveAdjective: pronounPossessiveAdjective
			};
			this.pronounsConfig = customConfig;
		}
	}

	#setMaxHPFromURLSearchParams(params: URLSearchParams) {
		const keys = ['maxHP', 'hp-override'] as const;
		for (const key of keys) {
			const paramsKeyVal = params.get(key);
			if (paramsKeyVal !== null) {
				const paramsKeyInt = parseInt(paramsKeyVal);
				if (!Number.isNaN(paramsKeyInt)) {
					this.maxHP = Math.max(maxHPMin, Math.min(maxHPMax, paramsKeyInt));
					return;
				}
			}
		}
	}

	#setSkillsFromURLSearchParams(params: URLSearchParams) {
		for (const skill of SKILLS) {
			const paramsSkillVal = params.get(skill.key);
			if (paramsSkillVal !== null) {
				const paramsSkillFloat = parseFloat(paramsSkillVal);
				if (
					paramsSkillFloat === 0.0 ||
					paramsSkillFloat === 0.5 ||
					paramsSkillFloat === 1.0 ||
					paramsSkillFloat === 2.0
				) {
					this[skill.key] = paramsSkillFloat;
				}
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
