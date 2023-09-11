import { DragonConfig } from '.';
import { dragonVals } from './dragon-vals';

export class DragonStats {
	constructor(configIn: DragonConfig) {
		this.config = DragonConfig.newFromDragonConfig(configIn);
		this.config.cleanup();

		this.title = this.config.getTitle();
		this.name = this.#getName();
		this.alignment = this.#getAlignment();
	}

	#getName(): string {
		if (this.config.name !== undefined) {
			return this.config.name;
		} else {
			return 'the dragon';
		}
	}

	#getAlignment(): string {
		if (this.config.alignment !== undefined) {
			return this.config.alignment;
		} else {
			return dragonVals[this.config.color][this.config.age].alignment;
		}
	}

	readonly config: DragonConfig;
	title: string;
	name: string;
	alignment: string;
}
