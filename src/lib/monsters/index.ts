import { PETAL_MONSTERS } from './petal-monsters';
import { SRD_MONSTERS } from './srd-monsters';

export const APP_MONSTERS = [...PETAL_MONSTERS, ...SRD_MONSTERS] as const;

export type AppMonster = (typeof APP_MONSTERS)[number];

/**
 * Converts input string to AppMonster if possible, returning undefined if not.
 * @export
 * @param {string} monsterString
 * @return {*}  {(AppMonster | undefined)}
 */
export function stringToAppMonster(monsterString: string): AppMonster | undefined {
	return APP_MONSTERS.find((monster) => monster === monsterString);
}
