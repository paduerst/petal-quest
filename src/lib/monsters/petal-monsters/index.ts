export const PETAL_MONSTERS = ['red-dragon-wyrmling'] as const;

export type PetalMonster = (typeof PETAL_MONSTERS)[number];

/**
 * Converts input string to PetalMonster if possible, returning undefined if not.
 * @export
 * @param {string} monsterString
 * @return {*}  {(PetalMonster | undefined)}
 */
export function stringToPetalMonster(monsterString: string): PetalMonster | undefined {
	return PETAL_MONSTERS.find((monster) => monster === monsterString);
}

export const PETAL_MONSTER_TITLES: {
	[key in PetalMonster]: string;
} = {
	'red-dragon-wyrmling': 'Red Dragon Wyrmling'
} as const;
