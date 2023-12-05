import type {
	Age,
	Color,
	Pronouns,
	PronounsConfig,
	ProficiencyLevel,
	SpellcastingConfig,
	DisplaySpellStats
} from '.';

import {
	stringToAge,
	stringToColor,
	COLOR_TO_THEME,
	DEFAULT_PRONOUNS,
	ABILITIES,
	abilityMin,
	abilityMax,
	SKILLS,
	maxHPMin,
	maxHPMax,
	numberOfHitDiceMin,
	numberOfHitDiceMax
} from '.';

import type { Size } from '$lib/monsters';

import { stringToSize } from '$lib/monsters';

import { capitalizeFirstLetter, type RGB } from '$lib/text-utils';

export class DragonConfig {
	age: Age = 'wyrmling';
	color: Color = 'red';
	name?: string;
	disableNameCapitalization?: boolean;
	statBlockTitle?: string;
	size?: Size; // not visible, for development only. support not guaranteed
	type?: string; // not visible, for development only. support not guaranteed
	alignment?: string;
	languages?: string;
	pronouns?: Pronouns;
	pronounsConfig?: PronounsConfig; // only needed if using custom pronouns

	maxHP?: number | null;
	numberOfHitDice?: number | null;

	strength?: number | null;
	dexterity?: number | null;
	constitution?: number | null;
	intelligence?: number | null;
	wisdom?: number | null;
	charisma?: number | null;

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

	vulnerabilities?: string; // not visible, for development only. support not guaranteed
	resistances?: string; // not visible, for development only. support not guaranteed
	immunities?: string; // not visible, for development only. support not guaranteed

	blindsight?: number | null; // not visible, for development only. support not guaranteed
	darkvision?: number | null; // not visible, for development only. support not guaranteed

	spellcasting?: SpellcastingConfig;
	atWillSpells?: string;
	dailySpells?: string;
	displaySpellStats?: DisplaySpellStats;

	shapechanged?: boolean; // not visible, for development only. support not guaranteed

	/**
	 * The title for this DragonConfig.
	 * @readonly
	 * @type {string}
	 * @memberof DragonConfig
	 */
	get title(): string {
		if (this.statBlockTitle !== undefined) {
			return this.statBlockTitle;
		}

		let output = '';

		let descriptiveTitle = '';
		const capitalizedAge = capitalizeFirstLetter(this.age);
		const capitalizedColor = capitalizeFirstLetter(this.color);
		if (this.age === 'wyrmling') {
			descriptiveTitle = `${capitalizedColor} Dragon ${capitalizedAge}`;
		} else {
			descriptiveTitle = `${capitalizedAge} ${capitalizedColor} Dragon`;
		}

		if (this.name === undefined || this.name === '') {
			output = descriptiveTitle;
		} else {
			output = `${this.name} (${descriptiveTitle})`;
		}

		return output;
	}

	/**
	 * The RGB theme for this DragonConfig.
	 * @readonly
	 * @type {RGB}
	 * @memberof DragonConfig
	 */
	get theme(): RGB {
		return COLOR_TO_THEME[this.color];
	}

	/**
	 * Deletes unneeded members of this DragonConfig.
	 * @memberof DragonConfig
	 */
	cleanup(): void {
		if (this.name === '') {
			delete this.name;
		}
		if (this.disableNameCapitalization === false) {
			delete this.disableNameCapitalization;
		}
		if (this.statBlockTitle === '') {
			delete this.statBlockTitle;
		}
		if (this.type === '') {
			delete this.type;
		}
		if (this.alignment === '') {
			delete this.alignment;
		}
		if (this.languages === '') {
			delete this.languages;
		}
		if (this.pronouns === DEFAULT_PRONOUNS) {
			delete this.pronouns;
		}
		if (this.pronounsConfig !== undefined && this.pronouns !== 'custom') {
			// we only use the pronounsConfig if using custom pronouns
			delete this.pronounsConfig;
		}

		if (
			this.maxHP !== undefined &&
			(this.maxHP === null ||
				Number.isNaN(this.maxHP) ||
				this.maxHP < maxHPMin ||
				this.maxHP > maxHPMax)
		) {
			delete this.maxHP;
		}
		if (
			this.numberOfHitDice !== undefined &&
			(this.numberOfHitDice === null ||
				Number.isNaN(this.numberOfHitDice) ||
				this.numberOfHitDice < numberOfHitDiceMin ||
				this.numberOfHitDice > numberOfHitDiceMax)
		) {
			delete this.numberOfHitDice;
		}

		for (const abilityTuple of ABILITIES) {
			const abilityScore = this[abilityTuple[0]];
			if (
				abilityScore !== undefined &&
				(abilityScore === null ||
					Number.isNaN(abilityScore) ||
					abilityScore < abilityMin ||
					abilityScore > abilityMax)
			) {
				delete this[abilityTuple[0]];
			}
		}

		if (this.blindsight === null) {
			delete this.blindsight;
		}
		if (this.darkvision === null) {
			delete this.darkvision;
		}

		if (this.atWillSpells === '') {
			delete this.atWillSpells;
		}
		if (this.dailySpells === '') {
			delete this.dailySpells;
		}

		if (this.shapechanged === false) {
			delete this.shapechanged;
		}
	}

	/**
	 * Returns a URLSearchParams containing all defined members of this DragonConfig.
	 * @return {*}  {URLSearchParams}
	 * @memberof DragonConfig
	 */
	toURLSearchParams(): URLSearchParams {
		const output = new URLSearchParams();

		output.set('age', this.age);
		output.set('color', this.color);
		if (this.name !== undefined) {
			output.set('name', this.name);
		}
		if (this.disableNameCapitalization === true) {
			output.set('disableNameCapitalization', '1');
		}
		if (this.statBlockTitle !== undefined) {
			output.set('statBlockTitle', this.statBlockTitle);
		}
		if (this.size !== undefined) {
			output.set('size', this.size);
		}
		if (this.type !== undefined) {
			output.set('type', this.type);
		}
		if (this.alignment !== undefined) {
			output.set('alignment', this.alignment);
		}
		if (this.languages !== undefined) {
			output.set('languages', this.languages);
		}
		if (this.pronouns !== undefined && this.pronouns !== DEFAULT_PRONOUNS) {
			output.set('pronouns', this.pronouns);
		}
		if (this.pronounsConfig !== undefined) {
			if (this.pronounsConfig.plural) {
				output.set('pronounsPlural', '1');
			}
			output.set('pronounNominative', this.pronounsConfig.nominative);
			output.set('pronounObjective', this.pronounsConfig.objective);
			output.set('pronounPossessiveAdjective', this.pronounsConfig.possessiveAdjective);
		}

		if (
			this.maxHP !== undefined &&
			this.maxHP !== null &&
			!Number.isNaN(this.maxHP) &&
			this.maxHP >= maxHPMin &&
			this.maxHP <= maxHPMax
		) {
			output.set('maxHP', Math.floor(this.maxHP).toString());
		}
		if (
			this.numberOfHitDice !== undefined &&
			this.numberOfHitDice !== null &&
			!Number.isNaN(this.numberOfHitDice) &&
			this.numberOfHitDice >= numberOfHitDiceMin &&
			this.numberOfHitDice <= numberOfHitDiceMax
		) {
			output.set('numberOfHitDice', Math.floor(this.numberOfHitDice).toString());
		}

		for (const abilityTuple of ABILITIES) {
			const abilityScore = this[abilityTuple[0]];
			if (
				abilityScore !== undefined &&
				abilityScore !== null &&
				!Number.isNaN(abilityScore) &&
				abilityScore >= abilityMin &&
				abilityScore <= abilityMax
			) {
				output.set(abilityTuple[0], Math.floor(abilityScore).toString());
			}
		}

		for (const skill of SKILLS) {
			const thisSkillValue = this[skill.key];
			if (thisSkillValue !== undefined) {
				output.set(skill.key, thisSkillValue.toString());
			}
		}

		if (this.vulnerabilities !== undefined) {
			output.set('vulnerabilities', this.vulnerabilities);
		}
		if (this.resistances !== undefined) {
			output.set('resistances', this.resistances);
		}
		if (this.immunities !== undefined) {
			output.set('immunities', this.immunities);
		}

		if (
			this.blindsight !== undefined &&
			this.blindsight !== null &&
			!Number.isNaN(this.blindsight)
		) {
			output.set('blindsight', Math.floor(this.blindsight).toString());
		}
		if (
			this.darkvision !== undefined &&
			this.darkvision !== null &&
			!Number.isNaN(this.darkvision)
		) {
			output.set('darkvision', Math.floor(this.darkvision).toString());
		}

		if (this.spellcasting !== undefined) {
			output.set('spellcasting', this.spellcasting);
		}
		if (this.atWillSpells !== undefined) {
			output.set('atWillSpells', this.atWillSpells);
		}
		if (this.dailySpells !== undefined) {
			output.set('dailySpells', this.dailySpells);
		}
		if (this.displaySpellStats !== undefined) {
			output.set('displaySpellStats', this.displaySpellStats);
		}

		if (this.shapechanged === true) {
			output.set('shapechanged', '1');
		}

		return output;
	}

	/**
	 * Returns a query string version of this DragonConfig suitable for a URL. Does not include the question mark.
	 * @return {*}  {string}
	 * @memberof DragonConfig
	 */
	toString(): string {
		return this.toURLSearchParams().toString();
	}

	/**
	 * If given params have valid DragonConfig values, sets this DragonConfig from them and returns true.
	 * @param {URLSearchParams} params
	 * @return {*}  {boolean} If given params have valid DragonConfig values, true. Otherwise false.
	 * @memberof DragonConfig
	 */
	fromURLSearchParams(params: URLSearchParams): boolean {
		// The params must contain a valid age and color to be used.
		const paramsAgeVal = params.get('age');
		const paramsColorVal = params.get('color');
		if (paramsAgeVal === null || paramsColorVal === null) {
			return false;
		}

		const paramsAge = stringToAge(paramsAgeVal);
		const paramsColor = stringToColor(paramsColorVal);
		if (paramsAge === undefined || paramsColor === undefined) {
			return false;
		}

		this.age = paramsAge;
		this.color = paramsColor;

		const paramsNameVal = params.get('name');
		if (paramsNameVal !== null) {
			this.name = paramsNameVal;
		}

		if (params.has('disableNameCapitalization') || params.has('forcelowercasename')) {
			this.disableNameCapitalization = true;
		}

		this.#setStatBlockTitleFromURLSearchParams(params);

		const paramsSizeVal = params.get('size');
		if (paramsSizeVal !== null) {
			const paramsSize = stringToSize(paramsSizeVal);
			if (paramsSize !== undefined) {
				this.size = paramsSize;
			}
		}

		const paramsTypeVal = params.get('type');
		if (paramsTypeVal !== null) {
			this.type = paramsTypeVal;
		}

		const paramsAlignmentVal = params.get('alignment');
		if (paramsAlignmentVal !== null) {
			this.alignment = paramsAlignmentVal;
		}

		const paramsLanguagesVal = params.get('languages');
		if (paramsLanguagesVal !== null) {
			this.languages = paramsLanguagesVal;
		}

		this.#setPronounsFromURLSearchParams(params);

		this.#setMaxHPFromURLSearchParams(params);

		this.#setNumberOfHitDiceFromURLSearchParams(params);

		this.#setAbilitiesFromURLSearchParams(params);

		this.#setSkillsFromURLSearchParams(params);

		this.#setDamageModifiersFromURLSearchParams(params);

		this.#setSensesFromURLSearchParams(params);

		this.#setSpellcastingFromURLSearchParams(params);
		this.#setAtWillSpellsFromURLSearchParams(params);
		this.#setDailySpellsFromURLSearchParams(params);
		this.#setDisplaySpellStatsFromURLSearchParams(params);

		if (params.has('shapechanged')) {
			this.shapechanged = true;
		}

		return true;
	}

	#setStatBlockTitleFromURLSearchParams(params: URLSearchParams) {
		// maintaining backwards compatibility with older param names
		const keys = ['statBlockTitle', 'dragonTitle'] as const;
		for (const key of keys) {
			const paramsKeyVal = params.get(key);
			if (paramsKeyVal !== null) {
				this.statBlockTitle = paramsKeyVal;
				return;
			}
		}
	}

	#setPronounsFromURLSearchParams(params: URLSearchParams) {
		const paramsPronounsVal = params.get('pronouns');
		if (paramsPronounsVal !== null) {
			// we have to check several options here to maintain backwards compatibility
			if (paramsPronounsVal === DEFAULT_PRONOUNS || paramsPronounsVal === 'default') {
				delete this.pronouns;
			} else if (paramsPronounsVal === 'it-its' || paramsPronounsVal === 'neutral') {
				this.pronouns = 'it-its';
			} else if (paramsPronounsVal === 'she-her' || paramsPronounsVal === 'feminine') {
				this.pronouns = 'she-her';
			} else if (paramsPronounsVal === 'he-him' || paramsPronounsVal === 'masculine') {
				this.pronouns = 'he-him';
			} else if (paramsPronounsVal === 'they-them' || paramsPronounsVal === 'singularthey') {
				this.pronouns = 'they-them';
			} else if (paramsPronounsVal === 'ey-em' || paramsPronounsVal === 'spivak') {
				this.pronouns = 'ey-em';
			} else if (paramsPronounsVal === 'none' || paramsPronounsVal === 'no-pronouns') {
				this.pronouns = 'none';
			} else if (paramsPronounsVal === 'custom' || paramsPronounsVal === 'custom-pronouns') {
				this.pronouns = 'custom';
			} else {
				console.log(`Unable to parse URL pronouns value of ${paramsPronounsVal}`);
				delete this.pronouns;
			}
		}

		if (this.pronouns === 'custom') {
			// we only use the PronounsConfig from the URL if we're using custom pronouns
			let pronounsPlural: boolean;
			if (params.has('pronounsPlural')) {
				pronounsPlural = true;
			} else {
				pronounsPlural = false;
			}

			let pronounNominative = '';
			const pronounNominativeKeys = ['pronounNominative', 'pronoun-nominative'] as const;
			for (const key of pronounNominativeKeys) {
				const paramsKeyVal = params.get(key);
				if (paramsKeyVal !== null) {
					pronounNominative = paramsKeyVal;
					break;
				}
			}

			let pronounObjective = '';
			const pronounObjectiveKeys = ['pronounObjective', 'pronoun-objective'] as const;
			for (const key of pronounObjectiveKeys) {
				const paramsKeyVal = params.get(key);
				if (paramsKeyVal !== null) {
					pronounObjective = paramsKeyVal;
					break;
				}
			}

			let pronounPossessiveAdjective = '';
			const pronounPossessiveAdjectiveKeys = [
				'pronounPossessiveAdjective',
				'pronoun-possessive-adj'
			] as const;
			for (const key of pronounPossessiveAdjectiveKeys) {
				const paramsKeyVal = params.get(key);
				if (paramsKeyVal !== null) {
					pronounPossessiveAdjective = paramsKeyVal;
					break;
				}
			}

			const customConfig: PronounsConfig = {
				plural: pronounsPlural,
				nominative: pronounNominative,
				objective: pronounObjective,
				possessiveAdjective: pronounPossessiveAdjective
			};
			this.pronounsConfig = customConfig;
		}
	}

	#setMaxHPFromURLSearchParams(params: URLSearchParams) {
		const keys = ['maxHP', 'hp-override'] as const;
		for (const key of keys) {
			const paramsKeyVal = params.get(key);
			if (paramsKeyVal !== null) {
				const paramsKeyInt = parseInt(paramsKeyVal);
				if (!Number.isNaN(paramsKeyInt) && paramsKeyInt >= maxHPMin && paramsKeyInt <= maxHPMax) {
					this.maxHP = paramsKeyInt;
					return;
				}
			}
		}
	}

	#setNumberOfHitDiceFromURLSearchParams(params: URLSearchParams) {
		const keys = ['numberOfHitDice'] as const;
		for (const key of keys) {
			const paramsKeyVal = params.get(key);
			if (paramsKeyVal !== null) {
				const paramsKeyInt = parseInt(paramsKeyVal);
				if (
					!Number.isNaN(paramsKeyInt) &&
					paramsKeyInt >= numberOfHitDiceMin &&
					paramsKeyInt <= numberOfHitDiceMax
				) {
					this.numberOfHitDice = paramsKeyInt;
					return;
				}
			}
		}
	}

	#setAbilitiesFromURLSearchParams(params: URLSearchParams) {
		for (const abilityTuple of ABILITIES) {
			const key = abilityTuple[0];
			const paramsKeyVal = params.get(key);
			if (paramsKeyVal !== null) {
				const paramsKeyInt = parseInt(paramsKeyVal);
				if (
					!Number.isNaN(paramsKeyInt) &&
					paramsKeyInt >= abilityMin &&
					paramsKeyInt <= abilityMax
				) {
					this[key] = paramsKeyInt;
				}
			}
		}
	}

	#setSkillsFromURLSearchParams(params: URLSearchParams) {
		for (const skill of SKILLS) {
			const paramsSkillVal = params.get(skill.key);
			if (paramsSkillVal !== null) {
				const paramsSkillFloat = parseFloat(paramsSkillVal);
				if (
					paramsSkillFloat === 0.0 ||
					paramsSkillFloat === 0.5 ||
					paramsSkillFloat === 1.0 ||
					paramsSkillFloat === 2.0
				) {
					this[skill.key] = paramsSkillFloat;
				}
			}
		}
	}

	#setDamageModifiersFromURLSearchParams(params: URLSearchParams) {
		const paramsVulnerabilitiesVal = params.get('vulnerabilities');
		if (paramsVulnerabilitiesVal !== null) {
			this.vulnerabilities = paramsVulnerabilitiesVal;
		}

		const paramsResistancesVal = params.get('resistances');
		if (paramsResistancesVal !== null) {
			this.resistances = paramsResistancesVal;
		}

		const paramsImmunitiesVal = params.get('immunities');
		if (paramsImmunitiesVal !== null) {
			this.immunities = paramsImmunitiesVal;
		}
	}

	#setSensesFromURLSearchParams(params: URLSearchParams) {
		const paramsBlindsightVal = params.get('blindsight');
		if (paramsBlindsightVal !== null) {
			const paramsBlindsightInt = parseInt(paramsBlindsightVal);
			if (!Number.isNaN(paramsBlindsightInt)) {
				this.blindsight = paramsBlindsightInt;
			}
		}

		const paramsDarkvisionVal = params.get('darkvision');
		if (paramsDarkvisionVal !== null) {
			const paramsDarkvisionInt = parseInt(paramsDarkvisionVal);
			if (!Number.isNaN(paramsDarkvisionInt)) {
				this.darkvision = paramsDarkvisionInt;
			}
		}
	}

	#setSpellcastingFromURLSearchParams(params: URLSearchParams) {
		const keys = ['spellcasting', 'spellstate'] as const;
		for (const key of keys) {
			const paramsKeyVal = params.get(key);
			if (paramsKeyVal !== null) {
				if (paramsKeyVal === 'default') {
					delete this.spellcasting;
				} else if (paramsKeyVal === 'off') {
					this.spellcasting = 'off';
				} else if (paramsKeyVal === 'onlyAtWill' || paramsKeyVal === 'onlyatwill') {
					this.spellcasting = 'onlyAtWill';
				} else if (paramsKeyVal === 'onlyDaily' || paramsKeyVal === 'noatwill') {
					this.spellcasting = 'onlyDaily';
				} else {
					console.log(`Unable to parse URL spellcasting value of ${paramsKeyVal}`);
					delete this.spellcasting;
				}
				return;
			}
		}
	}

	#setAtWillSpellsFromURLSearchParams(params: URLSearchParams) {
		const keys = ['atWillSpells', 'cantripoverride'] as const;
		for (const key of keys) {
			const paramsKeyVal = params.get(key);
			if (paramsKeyVal !== null) {
				this.atWillSpells = paramsKeyVal;
				return;
			}
		}
	}

	#setDailySpellsFromURLSearchParams(params: URLSearchParams) {
		const keys = ['dailySpells', 'spellsoverride'] as const;
		for (const key of keys) {
			const paramsKeyVal = params.get(key);
			if (paramsKeyVal !== null) {
				this.dailySpells = paramsKeyVal;
				return;
			}
		}
	}

	#setDisplaySpellStatsFromURLSearchParams(params: URLSearchParams) {
		const keys = ['displaySpellStats', 'spelldescription'] as const;
		for (const key of keys) {
			const paramsKeyVal = params.get(key);
			if (paramsKeyVal !== null) {
				if (paramsKeyVal === 'default') {
					delete this.displaySpellStats;
				} else if (paramsKeyVal === 'neither') {
					this.displaySpellStats = 'neither';
				} else if (paramsKeyVal === 'both') {
					this.displaySpellStats = 'both';
				} else if (paramsKeyVal === 'attack') {
					this.displaySpellStats = 'attack';
				} else if (paramsKeyVal === 'saveDC' || paramsKeyVal === 'dc') {
					this.displaySpellStats = 'saveDC';
				} else {
					console.log(`Unable to parse URL displaySpellStats value of ${paramsKeyVal}`);
					delete this.displaySpellStats;
				}
				return;
			}
		}
	}

	/**
	 * If given string has valid DragonConfig values, sets this DragonConfig from them and returns true.
	 * @param {string} paramsString
	 * @return {*}  {boolean} If given string has valid DragonConfig values, true. Otherwise false.
	 * @memberof DragonConfig
	 */
	fromString(paramsString: string): boolean {
		const params = new URLSearchParams(paramsString);
		return this.fromURLSearchParams(params);
	}

	/**
	 * Returns a new DragonConfig with the same params as the given one.
	 * @static
	 * @param {DragonConfig} configIn
	 * @return {*}  {DragonConfig}
	 * @memberof DragonConfig
	 */
	static newFromDragonConfig(configIn: DragonConfig): DragonConfig {
		const config = new DragonConfig();
		config.fromURLSearchParams(configIn.toURLSearchParams());
		return config;
	}
}
