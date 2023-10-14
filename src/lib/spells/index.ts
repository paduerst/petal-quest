import SpellWallOfShadow__SvelteComponent_ from './SpellWallOfShadow.svelte';
import SpellWallOfForce__SvelteComponent_ from './SpellWallOfForce.svelte';

import { SRD_SPELLS } from './srd';

export type SpellLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export const SPELL_SCHOOLS = [
	'Abjuration',
	'Conjuration',
	'Divination',
	'Enchantment',
	'Evocation',
	'Illusion',
	'Necromancy',
	'Transmutation'
] as const;
export type SpellSchool = (typeof SPELL_SCHOOLS)[number];

export type SpellVals = {
	name: string;
	level: SpellLevel;
	school: SpellSchool;
	castingTime: string;
	ritual: boolean;
	range: string;
	components: string;
	duration: string;
};

// Homebrew spells written by us.
export const PETAL_SPELLS = ['wall-of-shadow'] as const;

// Spells that can be displayed in this app.
export const APP_SPELLS = [...PETAL_SPELLS, ...SRD_SPELLS] as const;
export type AppSpell = (typeof APP_SPELLS)[number];

export const APP_SPELL_DESCRIPTIONS = {
	'wall-of-shadow': SpellWallOfShadow__SvelteComponent_,
	'wall-of-force': SpellWallOfForce__SvelteComponent_
};

export function stringToAppSpell(spellString: string): AppSpell | undefined {
	return APP_SPELLS.find((spell) => spell === spellString);
}

// Spells that are on D&D Beyond. This app cannot display them.
export const DDB_SPELLS = ['wall-of-light'] as const;

// All spells that this app knows of.
export const COMPLETE_SPELLS = [...APP_SPELLS, ...DDB_SPELLS] as const;
