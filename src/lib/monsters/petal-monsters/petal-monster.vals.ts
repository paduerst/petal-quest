import type { PrismaticDragon, PetalMonster } from '.';
import { DRAGON_VALS, type DragonVals } from '$lib/dragon/dragon-vals';
import type { MonsterVals } from '../monster-vals';

export const PRISMATIC_DRAGON_VALS: {
	[key in PrismaticDragon]: DragonVals;
} = {
	'red-dragon-wyrmling': DRAGON_VALS['red']['wyrmling'],
	'young-red-dragon': DRAGON_VALS['red']['young'],
	'adult-red-dragon': DRAGON_VALS['red']['adult'],
	'ancient-red-dragon': DRAGON_VALS['red']['ancient'],
	'cosmic-red-dragon': DRAGON_VALS['red']['cosmic'],

	'orange-dragon-wyrmling': DRAGON_VALS['orange']['wyrmling'],
	'young-orange-dragon': DRAGON_VALS['orange']['young'],
	'adult-orange-dragon': DRAGON_VALS['orange']['adult'],
	'ancient-orange-dragon': DRAGON_VALS['orange']['ancient'],
	'cosmic-orange-dragon': DRAGON_VALS['orange']['cosmic'],

	'yellow-dragon-wyrmling': DRAGON_VALS['yellow']['wyrmling'],
	'young-yellow-dragon': DRAGON_VALS['yellow']['young'],
	'adult-yellow-dragon': DRAGON_VALS['yellow']['adult'],
	'ancient-yellow-dragon': DRAGON_VALS['yellow']['ancient'],
	'cosmic-yellow-dragon': DRAGON_VALS['yellow']['cosmic'],

	'green-dragon-wyrmling': DRAGON_VALS['green']['wyrmling'],
	'young-green-dragon': DRAGON_VALS['green']['young'],
	'adult-green-dragon': DRAGON_VALS['green']['adult'],
	'ancient-green-dragon': DRAGON_VALS['green']['ancient'],
	'cosmic-green-dragon': DRAGON_VALS['green']['cosmic'],

	'blue-dragon-wyrmling': DRAGON_VALS['blue']['wyrmling'],
	'young-blue-dragon': DRAGON_VALS['blue']['young'],
	'adult-blue-dragon': DRAGON_VALS['blue']['adult'],
	'ancient-blue-dragon': DRAGON_VALS['blue']['ancient'],
	'cosmic-blue-dragon': DRAGON_VALS['blue']['cosmic'],

	'indigo-dragon-wyrmling': DRAGON_VALS['indigo']['wyrmling'],
	'young-indigo-dragon': DRAGON_VALS['indigo']['young'],
	'adult-indigo-dragon': DRAGON_VALS['indigo']['adult'],
	'ancient-indigo-dragon': DRAGON_VALS['indigo']['ancient'],
	'cosmic-indigo-dragon': DRAGON_VALS['indigo']['cosmic'],

	'violet-dragon-wyrmling': DRAGON_VALS['violet']['wyrmling'],
	'young-violet-dragon': DRAGON_VALS['violet']['young'],
	'adult-violet-dragon': DRAGON_VALS['violet']['adult'],
	'ancient-violet-dragon': DRAGON_VALS['violet']['ancient'],
	'cosmic-violet-dragon': DRAGON_VALS['violet']['cosmic'],

	'magenta-dragon-wyrmling': DRAGON_VALS['magenta']['wyrmling'],
	'young-magenta-dragon': DRAGON_VALS['magenta']['young'],
	'adult-magenta-dragon': DRAGON_VALS['magenta']['adult'],
	'ancient-magenta-dragon': DRAGON_VALS['magenta']['ancient'],
	'cosmic-magenta-dragon': DRAGON_VALS['magenta']['cosmic'],

	'white-dragon-wyrmling': DRAGON_VALS['white']['wyrmling'],
	'young-white-dragon': DRAGON_VALS['white']['young'],
	'adult-white-dragon': DRAGON_VALS['white']['adult'],
	'ancient-white-dragon': DRAGON_VALS['white']['ancient'],
	'cosmic-white-dragon': DRAGON_VALS['white']['cosmic'],

	'black-dragon-wyrmling': DRAGON_VALS['black']['wyrmling'],
	'young-black-dragon': DRAGON_VALS['black']['young'],
	'adult-black-dragon': DRAGON_VALS['black']['adult'],
	'ancient-black-dragon': DRAGON_VALS['black']['ancient'],
	'cosmic-black-dragon': DRAGON_VALS['black']['cosmic']
} as const;

export const PETAL_MONSTER_VALS: {
	[key in PetalMonster]: MonsterVals;
} = {
	...PRISMATIC_DRAGON_VALS
} as const;
