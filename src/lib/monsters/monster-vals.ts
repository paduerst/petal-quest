import {
	type Size,
	type Die,
	type ProficiencyLevel,
	scoreToMod,
	expectedDiceResult,
	SIZE_TO_HIT_DIE,
	ABILITIES,
	SKILLS
} from '.';

import { type CR, CR_TABLE } from '$lib/dragon/challenge-rating';
import { type RGB, numberWithSign } from '$lib/text-utils';
import { type Stats, DEFAULT_THEME } from '$lib/stat-block';

export type SavingThrowProficiencies = {
	strengthSaveProficiency?: ProficiencyLevel;
	dexteritySaveProficiency?: ProficiencyLevel;
	constitutionSaveProficiency?: ProficiencyLevel;
	intelligenceSaveProficiency?: ProficiencyLevel;
	wisdomSaveProficiency?: ProficiencyLevel;
	charismaSaveProficiency?: ProficiencyLevel;
};

export function getSavingThrows(
	proficiencyBonus: number,
	abilityMods: { [key in (typeof ABILITIES)[number][1]]: number },
	proficiencies?: SavingThrowProficiencies
): string[] {
	const output: string[] = [];
	if (proficiencies !== undefined) {
		for (const ability_tuple of ABILITIES) {
			const savingThrowAbility: `${(typeof ability_tuple)[0]}SaveProficiency` = `${ability_tuple[0]}SaveProficiency`;
			const proficiencyLevel = proficiencies[savingThrowAbility];
			if (proficiencyLevel !== undefined && proficiencyLevel !== 0) {
				const savingThrowModifier = Math.floor(
					abilityMods[ability_tuple[1]] + proficiencyBonus * proficiencyLevel
				);
				output.push(`${ability_tuple[1].toUpperCase()} ${numberWithSign(savingThrowModifier)}`);
			}
		}
	}
	return output;
}

export type SkillProficiencies = {
	skillAcrobatics?: ProficiencyLevel;
	skillAnimalHandling?: ProficiencyLevel;
	skillArcana?: ProficiencyLevel;
	skillAthletics?: ProficiencyLevel;
	skillDeception?: ProficiencyLevel;
	skillHistory?: ProficiencyLevel;
	skillInsight?: ProficiencyLevel;
	skillIntimidation?: ProficiencyLevel;
	skillInvestigation?: ProficiencyLevel;
	skillMedicine?: ProficiencyLevel;
	skillNature?: ProficiencyLevel;
	skillPerception?: ProficiencyLevel;
	skillPerformance?: ProficiencyLevel;
	skillPersuasion?: ProficiencyLevel;
	skillReligion?: ProficiencyLevel;
	skillSleightOfHand?: ProficiencyLevel;
	skillStealth?: ProficiencyLevel;
	skillSurvival?: ProficiencyLevel;
};

export function getSkills(
	proficiencyBonus: number,
	abilityMods: { [key in (typeof ABILITIES)[number][1]]: number },
	proficiencies?: SkillProficiencies
): string[] {
	const output: string[] = [];
	if (proficiencies !== undefined) {
		for (const skill of SKILLS) {
			const skillProf = proficiencies[skill.key];
			if (skillProf !== undefined && skillProf !== 0) {
				const skillMod = Math.floor(abilityMods[skill.ability] + skillProf * proficiencyBonus);
				output.push(`${skill.name} ${numberWithSign(skillMod)}`);
			}
		}
	}
	return output;
}

export function getPassivePerception(
	proficiencyBonus: number,
	wisdomMod: number,
	proficiencies?: SkillProficiencies
): number {
	let output = 10 + wisdomMod;
	if (
		proficiencies !== undefined &&
		proficiencies.skillPerception !== undefined &&
		proficiencies.skillPerception !== 0
	) {
		output = Math.floor(output + proficiencyBonus * proficiencies.skillPerception);
	}
	return output;
}

export type MonsterVals = {
	title: string;

	size: Size;
	type: string;
	alignment: string;

	ac: number;
	numberOfHitDice: number;
	speeds: string;

	strength: number;
	dexterity: number;
	constitution: number;
	intelligence: number;
	wisdom: number;
	charisma: number;

	languages: string;

	cr: CR;

	acDescription?: string;
	expectedHitPoints?: number;
	hitDie?: Die;

	savingThrows?: SavingThrowProficiencies;
	skills?: SkillProficiencies;

	vulnerabilities?: string;
	resistances?: string;
	immunities?: string;
	conditionImmunities?: string;

	truesight?: number;
	blindsight?: number;
	darkvision?: number;

	xp?: number;

	theme?: RGB;
};

export function statsFromMonsterVals(vals: MonsterVals): Stats {
	// starting with the mandatory values
	const title = vals.title;

	const size = vals.size;
	const type = vals.type;
	const alignment = vals.alignment;

	const ac = vals.ac;

	const numberOfHitDice = vals.numberOfHitDice;

	const strength = vals.strength;
	const dexterity = vals.dexterity;
	const constitution = vals.constitution;
	const intelligence = vals.intelligence;
	const wisdom = vals.wisdom;
	const charisma = vals.charisma;

	const cr = vals.cr;

	// now the calculated values
	const xp = vals.xp ?? CR_TABLE[cr].xp;
	const proficiencyBonus = CR_TABLE[cr].proficiencyBonus;

	const str = scoreToMod(strength);
	const dex = scoreToMod(dexterity);
	const con = scoreToMod(constitution);
	const int = scoreToMod(intelligence);
	const wis = scoreToMod(wisdom);
	const cha = scoreToMod(charisma);

	const acDescription = vals.acDescription ?? '';

	const hitDie = SIZE_TO_HIT_DIE[size];
	const expectedHitPoints =
		vals.expectedHitPoints ?? expectedDiceResult(numberOfHitDice, hitDie, numberOfHitDice * con, 1);

	const speeds = vals.speeds.length > 0 ? vals.speeds : '—';

	const abilityMods = { str, dex, con, int, wis, cha };
	const savingThrows: string[] =
		vals.savingThrows === undefined
			? []
			: getSavingThrows(proficiencyBonus, abilityMods, vals.savingThrows);
	const skills: string[] =
		vals.skills === undefined ? [] : getSkills(proficiencyBonus, abilityMods, vals.skills);

	const passivePerception = getPassivePerception(proficiencyBonus, wis, vals.skills);

	const vulnerabilities = vals.vulnerabilities ?? '';
	const resistances = vals.resistances ?? '';
	const immunities = vals.immunities ?? '';
	const conditionImmunities = vals.conditionImmunities ?? '';

	const truesight = vals.truesight ?? 0;
	const blindsight = vals.blindsight ?? 0;
	const darkvision = vals.darkvision ?? 0;

	const languages = vals.languages.length > 0 ? vals.languages : '—';

	const theme = vals.theme ?? DEFAULT_THEME;

	const output: Stats = {
		title,

		size,
		type,
		alignment,

		ac,
		acDescription,

		expectedHitPoints,
		numberOfHitDice,
		hitDie,

		speeds,

		strength,
		dexterity,
		constitution,
		intelligence,
		wisdom,
		charisma,

		str,
		dex,
		con,
		int,
		wis,
		cha,

		savingThrows,
		skills,

		vulnerabilities,
		resistances,
		immunities,
		conditionImmunities,

		truesight,
		blindsight,
		darkvision,
		passivePerception,

		languages,

		cr,
		xp,
		proficiencyBonus,

		theme
	};
	return output;
}
