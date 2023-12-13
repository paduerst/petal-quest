import type { RGB } from '$lib/text-utils';
import type { Size, Die, SkillKey } from '$lib/monsters';
import { SIZE_TO_HIT_DIE } from '$lib/monsters';

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

export const AGE_TO_SIZE: {
	[key in Age]: Size;
} = {
	wyrmling: 'Medium',
	young: 'Large',
	adult: 'Huge',
	ancient: 'Gargantuan',
	cosmic: 'Gargantuan'
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

const standardDefaultSkillDescription = 'Varies with age and color';
export const DEFAULT_SKILL_DESCRIPTIONS: {
	[key in SkillKey]: string;
} = {
	skillAcrobatics: standardDefaultSkillDescription,
	skillAnimalHandling: standardDefaultSkillDescription,
	skillArcana: standardDefaultSkillDescription,
	skillAthletics: standardDefaultSkillDescription,
	skillDeception: standardDefaultSkillDescription,
	skillHistory: standardDefaultSkillDescription,
	skillInsight: standardDefaultSkillDescription,
	skillIntimidation: standardDefaultSkillDescription,
	skillInvestigation: standardDefaultSkillDescription,
	skillMedicine: standardDefaultSkillDescription,
	skillNature: standardDefaultSkillDescription,
	skillPerception: 'Typically 2x proficiency',
	skillPerformance: standardDefaultSkillDescription,
	skillPersuasion: standardDefaultSkillDescription,
	skillReligion: standardDefaultSkillDescription,
	skillSleightOfHand: standardDefaultSkillDescription,
	skillStealth: 'Typically 1x proficiency',
	skillSurvival: standardDefaultSkillDescription
} as const;

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

export type PronounsExistence = {
	nominativeExists: boolean;
	objectiveExists: boolean;
	possessiveAdjectiveExists: boolean;
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

export const abilityMin = 1;
export const abilityMax = 30;

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
