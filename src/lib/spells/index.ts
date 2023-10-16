import { numberWithOrdinalSuffix } from '$lib';

import { PETAL_SPELLS } from './petal-spells';
import { PETAL_SPELL_VALS } from './petal-spells/petal-spell-vals';
import { PETAL_SPELL_DESCRIPTIONS } from './petal-spells/petal-spell-descriptions';

import { SRD_SPELLS } from './srd-spells';
import { SRD_SPELL_VALS } from './srd-spells/srd-spell-vals';
import { SRD_SPELL_DESCRIPTIONS } from './srd-spells/srd-spell-descriptions';

import { DDB_SPELLS } from './ddb-spells';

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
	classes?: readonly string[];
};

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

export function stringToAppSpell(spellString: string): AppSpell | undefined {
	return APP_SPELLS.find((spell) => spell === spellString);
}

// All spells that this app knows of.
export const COMPLETE_SPELLS = [...APP_SPELLS, ...DDB_SPELLS] as const;
