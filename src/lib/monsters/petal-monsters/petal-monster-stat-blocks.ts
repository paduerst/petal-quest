import type { ComponentType } from 'svelte';

import type { PetalMonster } from '.';

export const PETAL_MONSTER_STAT_BLOCKS: {
	[key in PetalMonster]: ComponentType;
} = {} as const;
