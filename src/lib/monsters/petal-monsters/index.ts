export const PETAL_MONSTERS = [
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
	'red-dragon-wyrmling': 'Red Dragon Wyrmling',
	'young-red-dragon': 'Young Red Dragon',
	'adult-red-dragon': 'Adult Red Dragon',
	'ancient-red-dragon': 'Ancient Red Dragon',
	'cosmic-red-dragon': 'Cosmic Red Dragon',

	'orange-dragon-wyrmling': 'Orange Dragon Wyrmling',
	'young-orange-dragon': 'Young Orange Dragon',
	'adult-orange-dragon': 'Adult Orange Dragon',
	'ancient-orange-dragon': 'Ancient Orange Dragon',
	'cosmic-orange-dragon': 'Cosmic Orange Dragon',

	'yellow-dragon-wyrmling': 'Yellow Dragon Wyrmling',
	'young-yellow-dragon': 'Young Yellow Dragon',
	'adult-yellow-dragon': 'Adult Yellow Dragon',
	'ancient-yellow-dragon': 'Ancient Yellow Dragon',
	'cosmic-yellow-dragon': 'Cosmic Yellow Dragon',

	'green-dragon-wyrmling': 'Green Dragon Wyrmling',
	'young-green-dragon': 'Young Green Dragon',
	'adult-green-dragon': 'Adult Green Dragon',
	'ancient-green-dragon': 'Ancient Green Dragon',
	'cosmic-green-dragon': 'Cosmic Green Dragon',

	'blue-dragon-wyrmling': 'Blue Dragon Wyrmling',
	'young-blue-dragon': 'Young Blue Dragon',
	'adult-blue-dragon': 'Adult Blue Dragon',
	'ancient-blue-dragon': 'Ancient Blue Dragon',
	'cosmic-blue-dragon': 'Cosmic Blue Dragon',

	'indigo-dragon-wyrmling': 'Indigo Dragon Wyrmling',
	'young-indigo-dragon': 'Young Indigo Dragon',
	'adult-indigo-dragon': 'Adult Indigo Dragon',
	'ancient-indigo-dragon': 'Ancient Indigo Dragon',
	'cosmic-indigo-dragon': 'Cosmic Indigo Dragon',

	'violet-dragon-wyrmling': 'Violet Dragon Wyrmling',
	'young-violet-dragon': 'Young Violet Dragon',
	'adult-violet-dragon': 'Adult Violet Dragon',
	'ancient-violet-dragon': 'Ancient Violet Dragon',
	'cosmic-violet-dragon': 'Cosmic Violet Dragon',

	'magenta-dragon-wyrmling': 'Magenta Dragon Wyrmling',
	'young-magenta-dragon': 'Young Magenta Dragon',
	'adult-magenta-dragon': 'Adult Magenta Dragon',
	'ancient-magenta-dragon': 'Ancient Magenta Dragon',
	'cosmic-magenta-dragon': 'Cosmic Magenta Dragon',

	'white-dragon-wyrmling': 'White Dragon Wyrmling',
	'young-white-dragon': 'Young White Dragon',
	'adult-white-dragon': 'Adult White Dragon',
	'ancient-white-dragon': 'Ancient White Dragon',
	'cosmic-white-dragon': 'Cosmic White Dragon',

	'black-dragon-wyrmling': 'Black Dragon Wyrmling',
	'young-black-dragon': 'Young Black Dragon',
	'adult-black-dragon': 'Adult Black Dragon',
	'ancient-black-dragon': 'Ancient Black Dragon',
	'cosmic-black-dragon': 'Cosmic Black Dragon'
} as const;
