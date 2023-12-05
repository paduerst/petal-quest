import { PETAL_MONSTERS } from './petal-monsters';
import { SRD_MONSTERS } from './srd-monsters';

export const APP_MONSTERS = [...PETAL_MONSTERS, ...SRD_MONSTERS] as const;

export type AppMonster = (typeof APP_MONSTERS)[number];

/**
 * Converts input string to AppMonster if possible, returning undefined if not.
 * @export
 * @param {string} monsterString
 * @return {*}  {(AppMonster | undefined)}
 */
export function stringToAppMonster(monsterString: string): AppMonster | undefined {
	return APP_MONSTERS.find((monster) => monster === monsterString);
}

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
