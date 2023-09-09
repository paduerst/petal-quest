import { DragonConfig } from '.';

export class DragonStats {
	constructor(configIn: DragonConfig) {
		this.config = DragonConfig.newFromDragonConfig(configIn);
		this.title = this.config.getTitle();
	}

	readonly config: DragonConfig;
	readonly title: string;
}
