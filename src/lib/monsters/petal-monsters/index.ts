export const PRISMATIC_DRAGONS = [
	'red-dragon-wyrmling',
	'young-red-dragon',
	'adult-red-dragon',
	'ancient-red-dragon',
	'cosmic-red-dragon',

	'orange-dragon-wyrmling',
	'young-orange-dragon',
	'adult-orange-dragon',
	'ancient-orange-dragon',
	'cosmic-orange-dragon',

	'yellow-dragon-wyrmling',
	'young-yellow-dragon',
	'adult-yellow-dragon',
	'ancient-yellow-dragon',
	'cosmic-yellow-dragon',

	'green-dragon-wyrmling',
	'young-green-dragon',
	'adult-green-dragon',
	'ancient-green-dragon',
	'cosmic-green-dragon',

	'blue-dragon-wyrmling',
	'young-blue-dragon',
	'adult-blue-dragon',
	'ancient-blue-dragon',
	'cosmic-blue-dragon',

	'indigo-dragon-wyrmling',
	'young-indigo-dragon',
	'adult-indigo-dragon',
	'ancient-indigo-dragon',
	'cosmic-indigo-dragon',

	'violet-dragon-wyrmling',
	'young-violet-dragon',
	'adult-violet-dragon',
	'ancient-violet-dragon',
	'cosmic-violet-dragon',

	'magenta-dragon-wyrmling',
	'young-magenta-dragon',
	'adult-magenta-dragon',
	'ancient-magenta-dragon',
	'cosmic-magenta-dragon',

	'white-dragon-wyrmling',
	'young-white-dragon',
	'adult-white-dragon',
	'ancient-white-dragon',
	'cosmic-white-dragon',

	'black-dragon-wyrmling',
	'young-black-dragon',
	'adult-black-dragon',
	'ancient-black-dragon',
	'cosmic-black-dragon'
] as const;

export type PrismaticDragon = (typeof PRISMATIC_DRAGONS)[number];

/**
 * Converts input string to PrismaticDragon if possible, returning undefined if not.
 * @export
 * @param {string} monsterString
 * @return {*}  {(PrismaticDragon | undefined)}
 */
export function stringToPrismaticDragon(monsterString: string): PrismaticDragon | undefined {
	return PRISMATIC_DRAGONS.find((monster) => monster === monsterString);
}

export const PETAL_MONSTERS = [...PRISMATIC_DRAGONS] as const;

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
