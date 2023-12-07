import type { ComponentType } from 'svelte';

import type { OtherPetalMonster } from '.';

import StatBlockAnimatedDeckOfCards__SvelteComponent_ from './stat-blocks/StatBlock__AnimatedDeckOfCards.svelte';

export const OTHER_PETAL_MONSTER_STAT_BLOCKS: {
	[key in OtherPetalMonster]: ComponentType;
} = {
	'animated-deck-of-cards': StatBlockAnimatedDeckOfCards__SvelteComponent_
} as const;
