/**
 * Returns the given string with its first character capitalized.
 * @export
 * @param {string} string
 * @return {*}  {string}
 */
export function capitalizeFirstLetter(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export const AGES = ['wyrmling', 'young', 'adult', 'ancient'] as const;
export const AGES_UPPER = AGES.map(capitalizeFirstLetter) as ReadonlyArray<string>;
export const AGES_CAPS = AGES.map((age) => age.toUpperCase()) as ReadonlyArray<string>;
export type Age = (typeof AGES)[number];

/**
 * Converts input string to Age if possible, returning undefined if not.
 * @export
 * @param {string} ageString
 * @return {*}  {(Age | undefined)}
 */
export function stringToAge(ageString: string): Age | undefined {
	return AGES.find((age) => age === ageString);
}

export const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'] as const;
export const COLORS_UPPER = COLORS.map(capitalizeFirstLetter) as ReadonlyArray<string>;
export const COLORS_CAPS = COLORS.map((color) => color.toUpperCase()) as ReadonlyArray<string>;
export type Color = (typeof COLORS)[number];

/**
 * Converts input string to Color if possible, returning undefined if not.
 * @export
 * @param {string} colorString
 * @return {*}  {(Color | undefined)}
 */
export function stringToColor(colorString: string): Color | undefined {
	return COLORS.find((color) => color === colorString);
}

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

/**
 * Returns an RGBA string with the given RGB and A value.
 * @export
 * @param {RGB} rgb
 * @param {number} a
 * @return {*}  {string}
 */
export function RGBToRGBA(rgb: RGB, a: number): string {
	return `rgba(${rgb.substring(4, rgb.length - 1)}, ${a})`;
}

export class DragonConfig {
	age: Age = 'wyrmling';
	color: Color = 'red';
	name?: string;
	alignment?: string;

	/**
	 * Returns the title for this DragonConfig.
	 * @return {*}  {string}
	 * @memberof DragonConfig
	 */
	getTitle(): string {
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
	 * Returns the RGB theme for this DragonConfig.
	 * @return {*}  {RGB}
	 * @memberof DragonConfig
	 */
	getTheme(): RGB {
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

		const paramsAlignmentVal = params.get('alignment');
		if (paramsAlignmentVal !== null) {
			this.alignment = paramsAlignmentVal;
		}

		return true;
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
}
