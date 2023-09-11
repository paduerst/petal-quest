import { DragonConfig } from '.';
import type { Age, Color, RGB } from '.';
import { DRAGON_VALS, type DragonVals } from './dragon-vals';

const SIZE_FROM_AGE: {
	[key in Age]: string;
} = {
	wyrmling: 'Medium',
	young: 'Large',
	adult: 'Huge',
	ancient: 'Gargantuan'
};

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
		this.alignment = this.#config.alignment ?? this.#vals.alignment;
		this.size = SIZE_FROM_AGE[this.age];
	}

	readonly #config: DragonConfig;
	readonly #vals: DragonVals;

	age: Age;
	color: Color;
	theme: RGB;
	name: string;
	title: string;
	alignment: string;
	size: string;
}
