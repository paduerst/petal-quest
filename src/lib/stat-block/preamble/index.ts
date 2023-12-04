import type { Size, Die } from '$lib/dragon';
import type { CR } from '$lib/dragon/challenge-rating';

export type StatsForPreambleHeader = {
	title: string;

	size: Size;
	type: string;
	alignment: string;
};

export type StatsForPreambleACHPSpeed = {
	ac: number;

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
	blindsight: number;
	darkvision: number;
	passivePerception: number;

	languages: string;

	cr: CR;
	xp: number;
	proficiencyBonus: number;
};

export type StatsForPreamble = StatsForPreambleHeader &
	StatsForPreambleACHPSpeed &
	StatsForPreambleAbilityScores;
