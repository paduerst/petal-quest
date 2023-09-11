import { DragonConfig } from '.';
import type { Age, Color } from '.';
import { DRAGON_VALS, type DragonVals } from './dragon-vals';

export class DragonStats {
	constructor(configIn: DragonConfig) {
		// make copies of the DragonConfig and DragonVals for this object
		this.#config = DragonConfig.newFromDragonConfig(configIn);
		this.#config.cleanup();
		this.age = this.#config.age;
		this.color = this.#config.color;
		this.#vals = JSON.parse(JSON.stringify(DRAGON_VALS[this.color][this.age]));

		this.title = this.#config.getTitle();
		this.name = this.#getName();
		this.alignment = this.#getAlignment();
	}

	#getName(): string {
		if (this.#config.name !== undefined) {
			return this.#config.name;
		} else {
			return 'the dragon';
		}
	}

	#getAlignment(): string {
		if (this.#config.alignment !== undefined) {
			return this.#config.alignment;
		} else {
			return this.#vals.alignment;
		}
	}

	readonly #config: DragonConfig;
	readonly #vals: DragonVals;

	age: Age;
	color: Color;
	title: string;
	name: string;
	alignment: string;
}
