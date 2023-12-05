import type { ComponentType } from 'svelte';

import type { PetalMonster } from '.';

import StatBlockPrismaticRedWyrmling__SvelteComponent_ from './stat-blocks/StatBlock__PrismaticRedWyrmling.svelte';

export const PETAL_MONSTER_STAT_BLOCKS: {
	[key in PetalMonster]: ComponentType;
} = {
	'red-dragon-wyrmling': StatBlockPrismaticRedWyrmling__SvelteComponent_
} as const;
