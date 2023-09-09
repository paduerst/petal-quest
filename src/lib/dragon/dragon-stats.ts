import { DragonConfig } from '.';

function nameFromConfig(config: DragonConfig): string {
	if (config.name !== undefined) {
		return config.name;
	} else {
		return 'the dragon';
	}
}

function alignmentFromConfig(config: DragonConfig): string {
	if (config.alignment !== undefined) {
		return config.alignment;
	} else {
		// TODO: Get this from dragonVals
		return 'Some Alignment';
	}
}

export class DragonStats {
	constructor(configIn: DragonConfig) {
		this.config = DragonConfig.newFromDragonConfig(configIn);
		this.config.cleanup();

		this.title = this.config.getTitle();
		this.name = nameFromConfig(this.config);
		this.alignment = alignmentFromConfig(this.config);
	}

	readonly config: DragonConfig;
	title: string;
	name: string;
	alignment: string;
}
