import SpellWallOfShadow__SvelteComponent_ from './SpellWallOfShadow.svelte';
import SpellWallOfForce__SvelteComponent_ from './SpellWallOfForce.svelte';

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

// Homebrew spells written by us.
export const PETAL_SPELLS = ['wall-of-shadow'] as const;

// Spells from the SRD 5.1: https://dnd.wizards.com/resources/systems-reference-document
export const SRD_SPELLS = ['wall-of-force'] as const;

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
