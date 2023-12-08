import type { MonsterVals } from './monster-vals';

import { PETAL_MONSTERS, PETAL_MONSTER_ALIASES, PETAL_MONSTER_ALIAS_MAP } from './petal-monsters';
import { PETAL_MONSTER_VALS } from './petal-monsters/petal-monster-vals';

import { SRD_MONSTERS, SRD_MONSTER_ALIASES, SRD_MONSTER_ALIAS_MAP } from './srd-monsters';
import { SRD_MONSTER_VALS } from './srd-monsters/srd-monster-vals';

export const APP_MONSTERS = [...PETAL_MONSTERS, ...SRD_MONSTERS] as const;

export type AppMonster = (typeof APP_MONSTERS)[number];

export const APP_MONSTER_VALS: {
	[key in AppMonster]: MonsterVals;
} = { ...PETAL_MONSTER_VALS, ...SRD_MONSTER_VALS } as const;

/**
 * Converts input string to AppMonster if possible, returning undefined if not.
 * @export
 * @param {string} monsterString
 * @return {*}  {(AppMonster | undefined)}
 */
export function stringToAppMonster(monsterString: string): AppMonster | undefined {
	return APP_MONSTERS.find((monster) => monster === monsterString);
}

export const APP_MONSTER_ALIASES = [...PETAL_MONSTER_ALIASES, ...SRD_MONSTER_ALIASES] as const;

export type AppMonsterAlias = (typeof APP_MONSTER_ALIASES)[number];

export const APP_MONSTER_ALIAS_MAP: {
	[key in AppMonsterAlias]: AppMonster;
} = {
	...PETAL_MONSTER_ALIAS_MAP,
	...SRD_MONSTER_ALIAS_MAP
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
		ability: 'dex'
	},
	{
		name: 'Animal Handling',
		key: 'skillAnimalHandling',
		ability: 'wis'
	},
	{
		name: 'Arcana',
		key: 'skillArcana',
		ability: 'int'
	},
	{
		name: 'Athletics',
		key: 'skillAthletics',
		ability: 'str'
	},
	{
		name: 'Deception',
		key: 'skillDeception',
		ability: 'cha'
	},
	{
		name: 'History',
		key: 'skillHistory',
		ability: 'int'
	},
	{
		name: 'Insight',
		key: 'skillInsight',
		ability: 'wis'
	},
	{
		name: 'Intimidation',
		key: 'skillIntimidation',
		ability: 'cha'
	},
	{
		name: 'Investigation',
		key: 'skillInvestigation',
		ability: 'int'
	},
	{
		name: 'Medicine',
		key: 'skillMedicine',
		ability: 'wis'
	},
	{
		name: 'Nature',
		key: 'skillNature',
		ability: 'int'
	},
	{
		name: 'Perception',
		key: 'skillPerception',
		ability: 'wis'
	},
	{
		name: 'Performance',
		key: 'skillPerformance',
		ability: 'cha'
	},
	{
		name: 'Persuasion',
		key: 'skillPersuasion',
		ability: 'cha'
	},
	{
		name: 'Religion',
		key: 'skillReligion',
		ability: 'int'
	},
	{
		name: 'Sleight of Hand',
		key: 'skillSleightOfHand',
		ability: 'dex'
	},
	{
		name: 'Stealth',
		key: 'skillStealth',
		ability: 'dex'
	},
	{
		name: 'Survival',
		key: 'skillSurvival',
		ability: 'wis'
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
