import type { ComponentType } from 'svelte';

import type { OtherPetalMonster } from '.';

import StatBlockAnimatedDeckOfManyThings__SvelteComponent_ from './stat-blocks/StatBlock__AnimatedDeckOfManyThings.svelte';

export const OTHER_PETAL_MONSTER_STAT_BLOCKS: {
	[key in OtherPetalMonster]: ComponentType;
} = {
	'animated-deck-of-many-things': StatBlockAnimatedDeckOfManyThings__SvelteComponent_
} as const;
