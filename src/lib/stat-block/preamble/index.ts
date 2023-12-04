import type { Size } from '$lib/dragon';

export type StatsForPreambleHeader = {
	title: string;
	size: Size;
	type: string;
	alignment: string;
};

export type StatsForPreambleAbilityScores = {
	strength: number;
	dexterity: number;
	constitution: number;
	intelligence: number;
	wisdom: number;
	charisma: number;

	str: number;
	dex: number;
	con: number;
	int: number;
	wis: number;
	cha: number;
};

export type StatsForPreamble = StatsForPreambleHeader & StatsForPreambleAbilityScores;
