export const SRD_MONSTERS = ['frog'] as const;

export type SRDMonster = (typeof SRD_MONSTERS)[number];

/**
 * Converts input string to SRDMonster if possible, returning undefined if not.
 * @export
 * @param {string} monsterString
 * @return {*}  {(SRDMonster | undefined)}
 */
export function stringToSRDMonster(monsterString: string): SRDMonster | undefined {
	return SRD_MONSTERS.find((monster) => monster === monsterString);
}
