import type { ComponentType } from 'svelte';
import StatBlockFrog__SvelteComponent_ from './StatBlockFrog.svelte';

export const SRD_MONSTERS = ['frog'] as const;

export type SRDMonster = (typeof SRD_MONSTERS)[number];

/**
 * Converts input string to SRDMonster if possible, returning undefined if not.
 * @export
 * @param {string} monsterString
 * @return {*}  {(SRDMonster | undefined)}
 */
export function stringToSRDMonster(monsterString: string): SRDMonster | undefined {
	return SRD_MONSTERS.find((monster) => monster === monsterString);
}

export const SRD_MONSTER_STAT_BLOCKS: {
	[key in SRDMonster]: ComponentType;
} = {
	frog: StatBlockFrog__SvelteComponent_
} as const;
