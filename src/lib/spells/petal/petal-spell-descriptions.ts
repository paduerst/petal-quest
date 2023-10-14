import type { PetalSpell } from '.';

export const SRD_SPELL_DESCRIPTIONS: {
	[key in PetalSpell]: string;
} = {
	'wall-of-shadow': '<p>This is the Wall of Shadow spell description.</p>'
} as const;
