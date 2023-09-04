export function capitalizeFirstLetter(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export const AGES = ['wyrmling', 'young', 'adult', 'ancient'] as const;
export const AGES_UPPER = AGES.map(capitalizeFirstLetter) as ReadonlyArray<string>;
export const AGES_CAPS = AGES.map((age) => age.toUpperCase()) as ReadonlyArray<string>;
export type Age = (typeof AGES)[number];

export const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'] as const;
export const COLORS_UPPER = COLORS.map(capitalizeFirstLetter) as ReadonlyArray<string>;
export const COLORS_CAPS = COLORS.map((color) => color.toUpperCase()) as ReadonlyArray<string>;
export type Color = (typeof COLORS)[number];

export type RGB = `rgb(${number}, ${number}, ${number})`;
export const COLOR_TO_THEME: {
	[key in Color]: RGB;
} = {
	red: 'rgb(154, 21, 21)',
	orange: 'rgb(156, 87, 14)',
	yellow: 'rgb(143, 133, 1)',
	green: 'rgb(28, 128, 0)',
	blue: 'rgb(0, 100, 150)',
	indigo: 'rgb(31, 0, 156)',
	violet: 'rgb(118, 43, 158)'
} as const;

export class DragonConfig {
	age: Age = 'wyrmling';
	color: Color = 'red';
	name?: string;
	alignment?: string;

	/**
	 * Deletes unneeded members of this DragonConfig.
	 * @memberof DragonConfig
	 */
	cleanup(): void {
		if (this.name === '') {
			delete this.name;
		}
		if (this.alignment === '') {
			delete this.alignment;
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
		if (this.alignment !== undefined) {
			output.set('alignment', this.alignment);
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
}
