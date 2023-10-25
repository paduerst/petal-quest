/**
 * Returns the given number with its ordinal suffix (e.g. '1st' for 1).
 * Copied from StackOverflow: https://stackoverflow.com/a/13627586/17934762
 * @export
 * @param {number} i
 * @return {*}  {string}
 */
export function numberWithOrdinalSuffix(i: number): string {
	const j = Math.abs(i) % 10,
		k = Math.abs(i) % 100;
	if (j == 1 && k != 11) {
		return `${i}st`;
	}
	if (j == 2 && k != 12) {
		return `${i}nd`;
	}
	if (j == 3 && k != 13) {
		return `${i}rd`;
	}
	return `${i}th`;
}

/**
 * Returns the given string with its first character capitalized.
 * @export
 * @param {string} string
 * @return {*}  {string}
 */
export function capitalizeFirstLetter(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Returns true if the given character is a digit. False otherwise.
 * @param {string} char
 * @return {*}  {boolean}
 */
export function isDigit(char: string): boolean {
	return char >= '0' && char <= '9';
}

/**
 * Returns true if the given character is a-z, A-Z, or 0-9. False otherwise.
 * @param {string} char
 * @return {*}  {boolean}
 */
export function isAlnum(char: string): boolean {
	return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || isDigit(char);
}

/**
 * Returns a normalized copy of the given string, with no non-alphanumeric characters.
 * @param {string} stringIn
 * @return {*}  {string} Normalized string. Starts with a lowercase letter.
 */
export function normalizeString(stringIn: string): string {
	let key = '';
	let upperCase = false;
	for (let i = 0; i < stringIn.length; ++i) {
		const letter = stringIn[i];
		if (letter == ' ' && key.length > 0) {
			upperCase = true;
			continue;
		}
		if (!isAlnum(letter)) {
			continue;
		}
		if (key.length === 0 && isDigit(letter)) {
			continue; // first character must be a letter
		}
		if (upperCase) {
			upperCase = false;
			key += letter.toUpperCase();
		} else {
			key += letter.toLowerCase();
		}
	}
	return key;
}

/**
 * Returns '-' for a negative number. Otherwise returns '+'.
 * @export
 * @param {number} number
 * @return {*}  {('+' | '-')}
 */
export function signFromNumber(number: number): '+' | '-' {
	if (number < 0) {
		return '-';
	} else {
		return '+';
	}
}

/**
 * Returns the given number as a string with + or - in front of it. Optional spacing parameter is placed between number and sign.
 * @export
 * @param {number} number
 * @param {string} [spacing='']
 * @return {*}  {string}
 */
export function numberWithSign(number: number, spacing: string = ''): string {
	if (number < 0) {
		return number.toString();
	} else {
		return `+${spacing}${number.toString()}`;
	}
}
