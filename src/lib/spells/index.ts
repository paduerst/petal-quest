import { numberWithOrdinalSuffix } from '$lib/text-utils';

import { PETAL_SPELLS } from './petal-spells';
import { PETAL_SPELL_VALS } from './petal-spells/petal-spell-vals';
import { PETAL_SPELL_DESCRIPTIONS } from './petal-spells/petal-spell-descriptions';

import { SRD_SPELLS } from './srd-spells';
import { SRD_SPELL_VALS } from './srd-spells/srd-spell-vals';
import { SRD_SPELL_DESCRIPTIONS } from './srd-spells/srd-spell-descriptions';

import { DDB_SPELLS, stringToDDBSpell } from './ddb-spells';

export const SPELL_LEVELS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export type SpellLevel = (typeof SPELL_LEVELS)[number];

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
	classes?: readonly string[];
};

/**
 * Returns the subtitle for the given spell ID.
 * @export
 * @param {SpellVals} spell
 * @return {*}  {string}
 */
export function getSpellSubtitle(spell: SpellVals): string {
	let output: string;
	if (spell.level === 0) {
		output = `${spell.school} cantrip`;
	} else {
		output = `${numberWithOrdinalSuffix(spell.level)}-level ${spell.school.toLowerCase()}`;
	}
	if (spell.ritual) {
		output = `${output} (ritual)`;
	}
	return output;
}

// Spells that can be displayed in this app.
export const APP_SPELLS = [...PETAL_SPELLS, ...SRD_SPELLS] as const;
export type AppSpell = (typeof APP_SPELLS)[number];

export const APP_SPELL_VALS: {
	[key in AppSpell]: SpellVals;
} = { ...PETAL_SPELL_VALS, ...SRD_SPELL_VALS } as const;

export const APP_SPELL_DESCRIPTIONS: {
	[key in AppSpell]: string;
} = {
	...PETAL_SPELL_DESCRIPTIONS,
	...SRD_SPELL_DESCRIPTIONS
} as const;

/**
 * Converts input string to AppSpell if possible, returning undefined if not.
 * @export
 * @param {string} spellString
 * @return {*}  {(AppSpell | undefined)}
 */
export function stringToAppSpell(spellString: string): AppSpell | undefined {
	return APP_SPELLS.find((spell) => spell === spellString);
}

// All spells that this app knows of.
export const COMPLETE_SPELLS = [...APP_SPELLS, ...DDB_SPELLS] as const;

/**
 * Converts given spell name to the normalized spell ID format.
 * @export
 * @param {string} spellName
 * @return {*}  {string}
 */
export function spellNameToID(spellName: string): string {
	return spellName.toLowerCase().replace(/[ /]/g, '-').replace(/[’']/, '');
}

/**
 * Returns the known URL for the given spell name or an empty string if unknown.
 * @export
 * @param {string} spellName
 * @return {*}  {string}
 */
export function spellNameToURL(spellName: string): string {
	const spell = spellNameToID(spellName);

	const spellAsAppSpell = stringToAppSpell(spell);
	if (spellAsAppSpell !== undefined) {
		return `/spells/${spellAsAppSpell}/`;
	}

	const spellAsDDBSpell = stringToDDBSpell(spell);
	if (spellAsDDBSpell !== undefined) {
		return `https://www.dndbeyond.com/spells/${spellAsDDBSpell}`;
	}

	return '';
}
