import type { PetalSpell } from '.';
import type { SpellVals } from '..';

export const PETAL_SPELL_VALS: {
	[key in PetalSpell]: SpellVals;
} = {
	'wall-of-shadow': {
		name: 'Wall of Shadow',
		level: 3,
		school: 'Abjuration',
		castingTime: '1 action',
		ritual: false,
		range: '60 feet',
		components: 'V, S',
		duration: '10 minutes',
		classes: ['Wizard']
	}
} as const;
