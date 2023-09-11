import {
	DragonConfig,
	COLOR_TO_ALIGNMENT,
	AGE_TO_SIZE,
	SIZE_TO_HIT_DIE,
	scoreToMod,
	expectedDiceResult
} from '.';
import type { Age, Color, RGB, Size, Die } from '.';
import { DRAGON_VALS, type DragonVals } from './dragon-vals';

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

		this.theme = this.#config.getTheme();
		this.name = this.#config.name ?? 'the dragon';
		this.title = this.#config.getTitle();
		this.alignment = this.#config.alignment ?? COLOR_TO_ALIGNMENT[this.color];

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

		this.expectedHitPoints = expectedDiceResult(
			this.numberOfHitDice,
			this.hitDie,
			this.numberOfHitDice * this.con,
			1
		);
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

	readonly #config: DragonConfig;
	readonly #vals: DragonVals;

	age: Age;
	color: Color;
	theme: RGB;
	name: string;
	title: string;
	alignment: string;

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
}
