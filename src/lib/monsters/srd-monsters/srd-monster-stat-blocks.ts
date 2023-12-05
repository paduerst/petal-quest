import type { ComponentType } from 'svelte';

import type { SRDMonster } from '.';

import StatBlockFrog__SvelteComponent_ from './stat-blocks/StatBlockFrog.svelte';

export const SRD_MONSTER_STAT_BLOCKS: {
	[key in SRDMonster]: ComponentType;
} = {
	frog: StatBlockFrog__SvelteComponent_
} as const;
