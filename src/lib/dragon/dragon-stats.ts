import {
	DragonConfig,
	COLOR_TO_ALIGNMENT,
	AGE_TO_SIZE,
	SIZE_TO_HIT_DIE,
	SKILLS,
	DEFAULT_PRONOUNS,
	BASIC_PRONOUN_CONFIGS,
	maxHPMin,
	maxHPMax,
	scoreToMod,
	numberWithSign,
	expectedDiceResult,
	capitalizeFirstLetter
} from '.';
import type { Age, Color, RGB, Size, Die, ProficiencyLevel, PronounsConfig } from '.';
import { DRAGON_VALS, type DragonVals } from './dragon-vals';
import { type CR, CRNumberToString, CR_TABLE } from './challenge-rating';

// copied from https://stackoverflow.com/a/9030062
const spellcastingCommaRegex = /,(?![^(]*\))/g;

/**
 * This class defines all the dragon stats needed for a stat block given a DragonConfig.
 * @export
 * @class DragonStats
 */
export class DragonStats {
	/**
	 * Creates an instance of DragonStats.
	 * @param {DragonConfig} configIn
	 * @memberof DragonStats
	 */
	constructor(configIn: DragonConfig) {
		// make copies of the DragonConfig and DragonVals for this object
		this.#config = DragonConfig.newFromDragonConfig(configIn);
		this.#config.cleanup();
		this.age = this.#config.age;
		this.color = this.#config.color;
		this.#vals = JSON.parse(JSON.stringify(DRAGON_VALS[this.color][this.age]));
		this.aVsAnColor = this.#getAVsAnColor();

		this.theme = this.#config.getTheme();
		this.name = this.#config.name ?? 'the dragon';
		this.nameUpper =
			this.#config.disableNameCapitalization === true
				? this.name
				: capitalizeFirstLetter(this.name);
		this.title = this.#config.getTitle();
		this.alignment = this.#config.alignment ?? COLOR_TO_ALIGNMENT[this.color];

		const pronouns = this.#getPronounsConfig();
		this.pronounsPlural = pronouns.plural;
		this.pronounNominative = pronouns.nominative;
		this.pronounObjective = pronouns.objective;
		this.pronounPossessiveAdjective = pronouns.possessiveAdjective;

		this.size = AGE_TO_SIZE[this.age];
		this.ac = this.#vals.ac;
		this.numberOfHitDice = this.#vals.numberOfHitDice;
		this.hitDie = SIZE_TO_HIT_DIE[this.size];

		this.speed = this.#vals.walkingSpeed;
		this.burrowSpeed = this.#vals.burrowSpeed;
		this.climbSpeed = this.#vals.climbSpeed;
		this.flySpeed = this.#vals.flyingSpeed;
		this.swimSpeed = this.#vals.swimSpeed;
		this.speeds = this.#getSpeeds();

		this.strength = this.#vals.strength;
		this.dexterity = this.#vals.dexterity;
		this.constitution = this.#vals.constitution;
		this.intelligence = this.#vals.intelligence;
		this.wisdom = this.#vals.wisdom;
		this.charisma = this.#vals.charisma;

		this.str = scoreToMod(this.strength);
		this.dex = scoreToMod(this.dexterity);
		this.con = scoreToMod(this.constitution);
		this.int = scoreToMod(this.intelligence);
		this.wis = scoreToMod(this.wisdom);
		this.cha = scoreToMod(this.charisma);

		this.expectedHitPoints = this.#getExpectedHitPoints();

		this.immunity = this.#vals.immunity;
		this.additionalImmunities = this.#vals.additionalImmunities;
		this.immunities = this.immunity + this.additionalImmunities;
		this.resistances = this.#vals.resistances;
		this.vulnerability = this.#vals.vulnerability;
		this.vulnerabilities = this.vulnerability;
		this.conditionImmunities = this.#vals.conditionImmunities;

		this.blindsight = this.#vals.blindsight;
		this.darkvision = this.#vals.darkvision;

		this.languages = this.#config.languages ?? this.#vals.languages;

		this.cr = CRNumberToString(this.#vals.cr);
		this.xp = CR_TABLE[this.cr].xp;
		this.proficiencyBonus = CR_TABLE[this.cr].proficiencyBonus;

		this.savingThrows = this.#getSavingThrows();

		this.saveDCStr = 8 + this.str + this.proficiencyBonus;
		this.saveDCDex = 8 + this.dex + this.proficiencyBonus;
		this.saveDCCon = 8 + this.con + this.proficiencyBonus;
		this.saveDCInt = 8 + this.int + this.proficiencyBonus;
		this.saveDCWis = 8 + this.wis + this.proficiencyBonus;
		this.saveDCCha = 8 + this.cha + this.proficiencyBonus;

		this.skillAcrobatics = this.#config.skillAcrobatics ?? this.#vals.skillAcrobatics;
		this.skillAnimalHandling = this.#config.skillAnimalHandling ?? this.#vals.skillAnimalHandling;
		this.skillArcana = this.#config.skillArcana ?? this.#vals.skillArcana;
		this.skillAthletics = this.#config.skillAthletics ?? this.#vals.skillAthletics;
		this.skillDeception = this.#config.skillDeception ?? this.#vals.skillDeception;
		this.skillHistory = this.#config.skillHistory ?? this.#vals.skillHistory;
		this.skillInsight = this.#config.skillInsight ?? this.#vals.skillInsight;
		this.skillIntimidation = this.#config.skillIntimidation ?? this.#vals.skillIntimidation;
		this.skillInvestigation = this.#config.skillInvestigation ?? this.#vals.skillInvestigation;
		this.skillMedicine = this.#config.skillMedicine ?? this.#vals.skillMedicine;
		this.skillNature = this.#config.skillNature ?? this.#vals.skillNature;
		this.skillPerception = this.#config.skillPerception ?? this.#vals.skillPerception;
		this.skillPerformance = this.#config.skillPerformance ?? this.#vals.skillPerformance;
		this.skillPersuasion = this.#config.skillPersuasion ?? this.#vals.skillPersuasion;
		this.skillReligion = this.#config.skillReligion ?? this.#vals.skillReligion;
		this.skillSleightOfHand = this.#config.skillSleightOfHand ?? this.#vals.skillSleightOfHand;
		this.skillStealth = this.#config.skillStealth ?? this.#vals.skillStealth;
		this.skillSurvival = this.#config.skillSurvival ?? this.#vals.skillSurvival;

		this.skills = this.#getSkills();

		this.passiveInsight = 10 + this.wis + this.skillInsight * this.proficiencyBonus;
		this.passiveInvestigation = 10 + this.int + this.skillInvestigation * this.proficiencyBonus;
		this.passivePerception = 10 + this.wis + this.skillPerception * this.proficiencyBonus;

		this.amphibious = this.#vals.amphibious > 0;

		this.cantrips = this.#getCantrips();
		this.spells = this.#getSpells();
		this.spellcastingDisplayAttack = this.#getSpellcastingDisplayAttack();
		this.spellcastingDisplaySave = this.#getSpellcastingDisplaySave();

		this.legendaryResistances = this.#vals.legendaryResistances;

		this.biteReach = this.#vals.biteReach;
		this.biteDiceCount = this.#vals.biteDiceCount;
		this.biteDiceType = this.#vals.biteDiceType;
		this.biteExpectedDamage = expectedDiceResult(
			this.biteDiceCount,
			this.biteDiceType,
			this.str,
			1
		);
		this.biteElementDiceCount = this.#vals.biteElementDiceCount;
		this.biteElementDiceType = this.#vals.biteElementDiceType;
		this.biteElementExpectedDamage = expectedDiceResult(
			this.biteElementDiceCount,
			this.biteElementDiceType,
			0,
			1
		);

		this.clawReach = this.#vals.clawReach;
		this.clawDiceCount = this.#vals.clawDiceCount;
		this.clawDiceType = this.#vals.clawDiceType;
		this.clawExpectedDamage = expectedDiceResult(
			this.clawDiceCount,
			this.clawDiceType,
			this.str,
			1
		);

		this.tailReach = this.#vals.tailReach;
		this.tailDiceCount = this.#vals.tailDiceCount;
		this.tailDiceType = this.#vals.tailDiceType;
		this.tailExpectedDamage = expectedDiceResult(
			this.tailDiceCount,
			this.tailDiceType,
			this.str,
			1
		);

		this.breathConeSize = this.#vals.breathConeSize;
		this.breathLineLength = this.#vals.breathLineLength;
		this.breathLineWidth = this.#vals.breathLineWidth;

		this.breath1Name = this.#vals.breath1Name;
		this.breath1Shape = this.#vals.breath1Shape;
		this.breath1DiceCount = this.#vals.breath1DiceCount;
		this.breath1DiceType = this.#vals.breath1DiceType;
		this.breath1ExpectedDamage = expectedDiceResult(this.breath1DiceCount, this.breath1DiceType);

		this.breath2Name = this.#vals.breath2Name;
		this.breath2Shape = this.#vals.breath2Shape;
		this.breath2DiceCount = this.#vals.breath2DiceCount;
		this.breath2SpecialValue = this.#vals.breath2SpecialValue;

		this.hasWallOfLight = this.age !== 'wyrmling' && this.age !== 'young';
		this.wallLayers = this.#vals.wallLayers;

		this.prismaticRadianceRadius = this.#vals.prismaticRadianceRadius;

		this.wingAttackRadius = this.#vals.wingAttackRadius;
		this.wingAttackDiceCount = this.#vals.wingAttackDiceCount;
		this.wingAttackDiceType = this.#vals.wingAttackDiceType;
		this.wingAttackExpectedDamage = expectedDiceResult(
			this.wingAttackDiceCount,
			this.wingAttackDiceType,
			this.str,
			1
		);
	}

	#getAVsAnColor(): 'a' | 'an' {
		// "A vs An Color" is hard-coded
		if (this.color === 'orange' || this.color === 'indigo') {
			return 'an';
		} else {
			return 'a';
		}
	}

	#getPronounsConfig(): PronounsConfig {
		const nonePronounsConfig: PronounsConfig = {
			plural: false,
			nominative: this.name,
			objective: this.name,
			possessiveAdjective: `${this.name}'s`
		};
		if (this.#config.pronouns === undefined || this.#config.pronouns === DEFAULT_PRONOUNS) {
			return BASIC_PRONOUN_CONFIGS[DEFAULT_PRONOUNS];
		} else if (this.#config.pronouns === 'none') {
			return nonePronounsConfig;
		} else if (this.#config.pronouns === 'custom') {
			// for custom options not specified, default to nonePronounsConfig
			const customPronounsConfig = nonePronounsConfig;
			if (this.#config.pronounsConfig !== undefined) {
				customPronounsConfig.plural = this.#config.pronounsConfig.plural;
				if (this.#config.pronounsConfig.nominative !== '') {
					customPronounsConfig.nominative = this.#config.pronounsConfig.nominative;
				}
				if (this.#config.pronounsConfig.objective !== '') {
					customPronounsConfig.objective = this.#config.pronounsConfig.objective;
				}
				if (this.#config.pronounsConfig.possessiveAdjective !== '') {
					customPronounsConfig.possessiveAdjective =
						this.#config.pronounsConfig.possessiveAdjective;
				}
			}
			return customPronounsConfig;
		} else {
			return BASIC_PRONOUN_CONFIGS[this.#config.pronouns];
		}
	}

	#getExpectedHitPoints(): number {
		if (
			this.#config.maxHP !== undefined &&
			this.#config.maxHP !== null &&
			!Number.isNaN(this.#config.maxHP) &&
			this.#config.maxHP >= maxHPMin &&
			this.#config.maxHP <= maxHPMax
		) {
			return Math.floor(this.#config.maxHP);
		} else {
			return expectedDiceResult(
				this.numberOfHitDice,
				this.hitDie,
				this.numberOfHitDice * this.con,
				1
			);
		}
	}

	#getSpeeds(): string {
		let output = `${this.speed} ft.`;
		if (this.burrowSpeed > 0) {
			output = output + `, burrow ${this.burrowSpeed} ft.`;
		}
		if (this.climbSpeed > 0) {
			output = output + `, climb ${this.climbSpeed} ft.`;
		}
		if (this.flySpeed > 0) {
			output = output + `, fly ${this.flySpeed} ft.`;
		}
		if (this.swimSpeed > 0) {
			output = output + `, swim ${this.swimSpeed} ft.`;
		}
		return output;
	}

	#getSavingThrows(): string[] {
		const savingThrowProficiencies = ['dex', 'con', 'wis', 'cha'] as const;
		const outputArr: string[] = [];
		for (const prof of savingThrowProficiencies) {
			outputArr.push(`${prof.toUpperCase()} ${numberWithSign(this.proficiencyBonus + this[prof])}`);
		}
		return outputArr;
	}

	#getSkills(): string[] {
		const skillsOutput: string[] = [];
		for (const skill of SKILLS) {
			const skillProf = this[skill.key];
			if (skillProf > 0) {
				const skillMod = Math.floor(this[skill.ability] + skillProf * this.proficiencyBonus);
				skillsOutput.push(`${skill.name} ${numberWithSign(skillMod)}`);
			}
		}
		return skillsOutput;
	}

	#getCantrips(): string[] {
		let cantrips: string[] = [];
		const rawCantrips = this.#vals.rawCantrip;
		if (rawCantrips.length > 0) {
			cantrips = rawCantrips.split(spellcastingCommaRegex);
		}
		return cantrips;
	}

	#getSpells(): string[] {
		let spells: string[] = [];
		const rawSpells = this.#vals.rawSpells;
		if (rawSpells.length > 0) {
			spells = rawSpells.split(spellcastingCommaRegex);
		}
		return spells;
	}

	#getSpellcastingDisplayAttack(): boolean {
		return (
			(this.cantrips.length > 0 && this.#vals.atWillSpellsHaveAttack > 0) ||
			(this.spells.length > 0 && this.#vals.oncePerDaySpellsHaveAttack > 0)
		);
	}

	#getSpellcastingDisplaySave(): boolean {
		return (
			(this.cantrips.length > 0 && this.#vals.atWillSpellsHaveSave > 0) ||
			(this.spells.length > 0 && this.#vals.oncePerDaySpellsHaveSave > 0)
		);
	}

	readonly #config: DragonConfig;
	readonly #vals: DragonVals;

	age: Age;
	color: Color;
	aVsAnColor: 'a' | 'an';
	theme: RGB;
	name: string;
	nameUpper: string;
	title: string;
	alignment: string;

	pronounsPlural: boolean;
	pronounNominative: string;
	pronounObjective: string;
	pronounPossessiveAdjective: string;

	size: Size;
	ac: number;
	numberOfHitDice: number;
	hitDie: Die;

	speed: number;
	burrowSpeed: number;
	climbSpeed: number;
	flySpeed: number;
	swimSpeed: number;
	speeds: string;

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

	expectedHitPoints: number;

	immunity: string;
	additionalImmunities: string;
	immunities: string;
	resistances: string;
	vulnerability: string;
	vulnerabilities: string;
	conditionImmunities: string;

	blindsight: number;
	darkvision: number;

	languages: string;

	cr: CR;
	xp: number;
	proficiencyBonus: number;

	savingThrows: string[];

	saveDCStr: number;
	saveDCDex: number;
	saveDCCon: number;
	saveDCInt: number;
	saveDCWis: number;
	saveDCCha: number;

	skillAcrobatics: ProficiencyLevel;
	skillAnimalHandling: ProficiencyLevel;
	skillArcana: ProficiencyLevel;
	skillAthletics: ProficiencyLevel;
	skillDeception: ProficiencyLevel;
	skillHistory: ProficiencyLevel;
	skillInsight: ProficiencyLevel;
	skillIntimidation: ProficiencyLevel;
	skillInvestigation: ProficiencyLevel;
	skillMedicine: ProficiencyLevel;
	skillNature: ProficiencyLevel;
	skillPerception: ProficiencyLevel;
	skillPerformance: ProficiencyLevel;
	skillPersuasion: ProficiencyLevel;
	skillReligion: ProficiencyLevel;
	skillSleightOfHand: ProficiencyLevel;
	skillStealth: ProficiencyLevel;
	skillSurvival: ProficiencyLevel;

	skills: string[];

	passiveInsight: number;
	passiveInvestigation: number;
	passivePerception: number;

	amphibious: boolean;

	cantrips: string[];
	spells: string[];
	spellcastingDisplayAttack: boolean;
	spellcastingDisplaySave: boolean;

	legendaryResistances: number;

	biteReach: number;
	biteDiceCount: number;
	biteDiceType: Die;
	biteExpectedDamage: number;
	biteElementDiceCount: number;
	biteElementDiceType: Die;
	biteElementExpectedDamage: number;

	clawReach: number;
	clawDiceCount: number;
	clawDiceType: Die;
	clawExpectedDamage: number;

	tailReach: number;
	tailDiceCount: number;
	tailDiceType: Die;
	tailExpectedDamage: number;

	breathConeSize: number;
	breathLineLength: number;
	breathLineWidth: number;

	breath1Name: string;
	breath1Shape: string;
	breath1DiceCount: number;
	breath1DiceType: Die;
	breath1ExpectedDamage: number;

	breath2Name: string;
	breath2Shape: string;
	breath2DiceCount: number;
	breath2SpecialValue: string;

	hasWallOfLight: boolean;
	wallLayers: string;

	prismaticRadianceRadius: number;

	wingAttackRadius: number;
	wingAttackDiceCount: number;
	wingAttackDiceType: Die;
	wingAttackExpectedDamage: number;
}
