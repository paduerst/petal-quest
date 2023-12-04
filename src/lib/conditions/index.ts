// All the conditions in the SRD 5.1
export const CONDITIONS = [
	'blinded',
	'charmed',
	'deafened',
	'exhaustion',
	'frightened',
	'grappled',
	'incapacitated',
	'invisible',
	'paralyzed',
	'petrified',
	'poisoned',
	'prone',
	'restrained',
	'stunned',
	'unconscious'
] as const;
export type Condition = (typeof CONDITIONS)[number];

/**
 * Converts input string to Condition if possible, returning undefined if not.
 * @export
 * @param {string} conditionString
 * @return {*}  {(Condition | undefined)}
 */
export function stringToCondition(conditionString: string): Condition | undefined {
	return CONDITIONS.find((condition) => condition === conditionString);
}
