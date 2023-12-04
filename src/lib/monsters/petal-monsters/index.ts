export const PETAL_MONSTERS = [] as const;

export type PetalMonster = (typeof PETAL_MONSTERS)[number];

/**
 * Converts input string to PetalMonster if possible, returning undefined if not.
 * @export
 * @param {string} monsterString
 * @return {*}  {(PetalMonster | undefined)}
 */
export function stringToPetalMonster(monsterString: string): PetalMonster | undefined {
	return PETAL_MONSTERS.find((monster) => monster === monsterString);
}
