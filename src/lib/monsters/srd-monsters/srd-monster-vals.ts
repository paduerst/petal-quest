import type { SRDMonster } from '.';
import type { MonsterVals } from '../monster-vals';

export const SRD_MONSTER_VALS: {
	[key in SRDMonster]: MonsterVals;
} = {
	frog: {
		title: 'Frog',
		size: 'Tiny',
		type: 'Beast',
		alignment: 'Unaligned',
		ac: 11,
		numberOfHitDice: 1,
		speeds: '20 ft., swim 20 ft.',
		strength: 1,
		dexterity: 13,
		constitution: 8,
		intelligence: 1,
		wisdom: 8,
		charisma: 3,
		skills: {
			skillPerception: 1,
			skillStealth: 1
		},
		darkvision: 30,
		cr: '0',
		theme: 'rgb(20, 108, 0)'
	}
} as const;
