import type { PetalSpell } from '.';

export const PETAL_SPELL_DESCRIPTIONS: {
	[key in PetalSpell]: string;
} = {
	'wall-of-shadow':
		'<p>A plane of opaque shadow forms a vertical wall\u2014up to 90 feet long, 30 feet high, and 1 inch thick\u2014centered on a point you can see within range. Alternatively, you can shape the wall into a sphere up to 30 feet in diameter centered on a point you choose within range. If you position the wall so that it passes through a space occupied by a creature, the spell fails, and your action and the spell slot are wasted.</p><p>The wall remains in place for the duration. The wall can be destroyed early by dealing at least 25 radiant damage to it or by using a <i>rod of cancellation</i>, but <i>dispel magic</i> and <i>antimagic field</i> have no effect on it.</p><p>The wall dims light within 60 feet of it, turning bright light into dim light and dim light into darkness. Light is not dimmed if it is shed by a <i>daylight</i> spell or a similar spell of equal or higher level.</p><p>You and creatures you designate at the time you cast the spell can pass through the wall without harm. When another creature attempts to reach into or pass through the wall, the creature must make a Dexterity saving throw. The creature takes 4d6 necrotic damage on a failed save, or half as much damage on a successful one.</p><p><b><i>At Higher Levels.</i></b> When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.</p>'
} as const;
