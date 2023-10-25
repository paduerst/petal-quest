// Homebrew spells written by us.
export const PETAL_SPELLS = ['wall-of-shadow'] as const;

export type PetalSpell = (typeof PETAL_SPELLS)[number];

/**
 * Converts input string to PetalSpell if possible, returning undefined if not.
 * @export
 * @param {string} spellString
 * @return {*}  {(PetalSpell | undefined)}
 */
export function stringToPetalSpell(spellString: string): PetalSpell | undefined {
	return PETAL_SPELLS.find((spell) => spell === spellString);
}
