export const AGES = ['wyrmling', 'young', 'adult', 'ancient', 'cosmic'] as const;
export type Age = (typeof AGES)[number];

export const HIDDEN_AGES: readonly Age[] = ['cosmic'] as const;

/**
 * Converts input string to Age if possible, returning undefined if not.
 * @export
 * @param {string} ageString
 * @return {*}  {(Age | undefined)}
 */
export function stringToAge(ageString: string): Age | undefined {
	return AGES.find((age) => age === ageString);
}

export const COLORS = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'indigo',
	'violet',
	'magenta',
	'white',
	'black'
] as const;
export type Color = (typeof COLORS)[number];

export const HIDDEN_COLORS: readonly Color[] = ['magenta', 'white', 'black'] as const;

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
	violet: 'Typically Lawful',
	magenta: 'Any Alignment',
	white: 'Any Alignment',
	black: 'Any Alignment'
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
	violet: 'rgb(118, 43, 158)',
	magenta: 'rgb(173, 12, 117)',
	white: 'rgb(127, 128, 119)',
	black: 'rgb(60, 60, 60)'
} as const;

export const SIZES = ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'] as const;
export type Size = (typeof SIZES)[number];

/**
 * Converts input string to Size if possible, returning undefined if not.
 * @export
 * @param {string} sizeString
 * @return {*}  {(Size | undefined)}
 */
export function stringToSize(sizeString: string): Size | undefined {
	return SIZES.find((size) => size === sizeString);
}

export const AGE_TO_SIZE: {
	[key in Age]: Size;
} = {
	wyrmling: 'Medium',
	young: 'Large',
	adult: 'Huge',
	ancient: 'Gargantuan',
	cosmic: 'Gargantuan'
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

/**
 * Returns the typical Hit Die for this age of dragon.
 * @export
 * @param {Age} age
 * @return {*}  {Die}
 */
export function ageToHitDie(age: Age): Die {
	return SIZE_TO_HIT_DIE[AGE_TO_SIZE[age]];
}

export const ABILITIES = [
	['strength', 'str'],
	['dexterity', 'dex'],
	['constitution', 'con'],
	['intelligence', 'int'],
	['wisdom', 'wis'],
	['charisma', 'cha']
] as const;

export const abilityMin = 1;
export const abilityMax = 30;

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

export const BASIC_PRONOUN_OPTIONS = ['it-its', 'she-her', 'he-him', 'they-them', 'ey-em'] as const;
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
	},
	'ey-em': {
		plural: false,
		nominative: 'ey',
		objective: 'em',
		possessiveAdjective: 'eir'
	}
} as const;

export const maxHPMin = 1;
export const maxHPMax = 9999;
export const numberOfHitDiceMin = 1;
export const numberOfHitDiceMax = 99;

export const SPELLCASTING_CONFIG_OPTIONS = ['off', 'onlyAtWill', 'onlyDaily'] as const;
export type SpellcastingConfig = (typeof SPELLCASTING_CONFIG_OPTIONS)[number];

export const DISPLAY_SPELL_STATS_OPTIONS = ['both', 'attack', 'saveDC', 'neither'] as const;
export type DisplaySpellStats = (typeof DISPLAY_SPELL_STATS_OPTIONS)[number];

export const SHAPE_CHANGE_RETAINS_LEGENDARY_RESISTANCE = true;
export const SHAPE_CHANGE_RETAINS_INNATE_SPELLCASTING = true;
