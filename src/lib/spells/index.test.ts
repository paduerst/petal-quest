import { expect, test } from 'vitest';
import { PETAL_SPELLS } from './petal-spells';
import { SRD_SPELLS, stringToSRDSpell } from './srd-spells';
import { stringToDDBSpell } from './ddb-spells';

test('Spell subcategories do not share spells', () => {
	for (const spell in PETAL_SPELLS) {
		expect(stringToSRDSpell(spell)).toBe(undefined);
		expect(stringToDDBSpell(spell)).toBe(undefined);
	}

	for (const spell in SRD_SPELLS) {
		// already checked PETAL_SPELLS
		expect(stringToDDBSpell(spell)).toBe(undefined);
	}
});
