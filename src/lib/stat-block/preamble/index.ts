import type { Size, Die } from '$lib/monsters';
import type { CR } from '$lib/dragon/challenge-rating';
import type { RGB } from '$lib/text-utils';

export type StatsForPreambleHeader = {
	title: string;

	size: Size;
	type: string;
	alignment: string;
};

export type StatsForPreambleACHPSpeed = {
	ac: number;
	acDescription: string;

	expectedHitPoints: number;
	numberOfHitDice: number;
	hitDie: Die;
	con: number;

	speeds: string;
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

export type StatsForPreambleStatsList = {
	savingThrows: string[];
	skills: string[];

	vulnerabilities: string;
	resistances: string;
	immunities: string;
	conditionImmunities: string;

	truesight: number;
	truesightDescription?: string;

	blindsight: number;
	blindsightDescription?: string;

	darkvision: number;
	darkvisionDescription?: string;

	passivePerception: number;

	languages: string;

	cr: CR;
	xp: number;
	proficiencyBonus: number;
};

export type StatsForPreamble = StatsForPreambleHeader &
	StatsForPreambleACHPSpeed &
	StatsForPreambleAbilityScores &
	StatsForPreambleStatsList & {
		theme: RGB;
	};
