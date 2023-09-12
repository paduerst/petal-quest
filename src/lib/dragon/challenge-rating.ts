// prettier-ignore
export const CR_STRINGS = [
	'0', '1/8', '1/4', '1/2', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
	'11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
	'21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
] as const;
export type CR = (typeof CR_STRINGS)[number];

// prettier-ignore
export const CR_NUMBERS = [
	0, 0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30
] as const;
export type CRNumber = (typeof CR_NUMBERS)[number];

/**
 * Converts the given CR (string) to its CRNumber form.
 * @export
 * @param {CR} string
 * @return {*}  {CRNumber}
 */
export function CRStringToNumber(string: CR): CRNumber {
	return CR_NUMBERS[CR_STRINGS.indexOf(string)];
}

/**
 * Converts the given CRNumber to its CR (string) form.
 * @export
 * @param {CRNumber} number
 * @return {*}  {CR}
 */
export function CRNumberToString(number: CRNumber): CR {
	return CR_STRINGS[CR_NUMBERS.indexOf(number)];
}

export const CR_TABLE: {
	[key in CR]: {
		proficiencyBonus: number;
		xp: number;
		expectedAC: number;
		expectedHPMin: number;
		expectedHPMax: number;
		expectedAttackBonus: number;
		expectedDamageMin: number;
		expectedDamageMax: number;
		expectedDC: number;
	};
} = {
	'0': {
		proficiencyBonus: 2,
		xp: 10,
		expectedAC: 13,
		expectedHPMin: 1,
		expectedHPMax: 6,
		expectedAttackBonus: 3,
		expectedDamageMin: 0,
		expectedDamageMax: 1,
		expectedDC: 13
	},
	'1/8': {
		proficiencyBonus: 2,
		xp: 25,
		expectedAC: 13,
		expectedHPMin: 7,
		expectedHPMax: 35,
		expectedAttackBonus: 3,
		expectedDamageMin: 2,
		expectedDamageMax: 3,
		expectedDC: 13
	},
	'1/4': {
		proficiencyBonus: 2,
		xp: 50,
		expectedAC: 13,
		expectedHPMin: 36,
		expectedHPMax: 49,
		expectedAttackBonus: 3,
		expectedDamageMin: 4,
		expectedDamageMax: 5,
		expectedDC: 13
	},
	'1/2': {
		proficiencyBonus: 2,
		xp: 100,
		expectedAC: 13,
		expectedHPMin: 50,
		expectedHPMax: 70,
		expectedAttackBonus: 3,
		expectedDamageMin: 6,
		expectedDamageMax: 8,
		expectedDC: 13
	},
	'1': {
		proficiencyBonus: 2,
		xp: 200,
		expectedAC: 13,
		expectedHPMin: 71,
		expectedHPMax: 85,
		expectedAttackBonus: 3,
		expectedDamageMin: 9,
		expectedDamageMax: 14,
		expectedDC: 13
	},
	'2': {
		proficiencyBonus: 2,
		xp: 450,
		expectedAC: 13,
		expectedHPMin: 86,
		expectedHPMax: 100,
		expectedAttackBonus: 3,
		expectedDamageMin: 15,
		expectedDamageMax: 20,
		expectedDC: 13
	},
	'3': {
		proficiencyBonus: 2,
		xp: 700,
		expectedAC: 13,
		expectedHPMin: 101,
		expectedHPMax: 115,
		expectedAttackBonus: 4,
		expectedDamageMin: 21,
		expectedDamageMax: 26,
		expectedDC: 13
	},
	'4': {
		proficiencyBonus: 2,
		xp: 1100,
		expectedAC: 14,
		expectedHPMin: 116,
		expectedHPMax: 130,
		expectedAttackBonus: 5,
		expectedDamageMin: 27,
		expectedDamageMax: 32,
		expectedDC: 14
	},
	'5': {
		proficiencyBonus: 3,
		xp: 1800,
		expectedAC: 15,
		expectedHPMin: 131,
		expectedHPMax: 145,
		expectedAttackBonus: 6,
		expectedDamageMin: 33,
		expectedDamageMax: 38,
		expectedDC: 15
	},
	'6': {
		proficiencyBonus: 3,
		xp: 2300,
		expectedAC: 15,
		expectedHPMin: 146,
		expectedHPMax: 160,
		expectedAttackBonus: 6,
		expectedDamageMin: 39,
		expectedDamageMax: 44,
		expectedDC: 15
	},
	'7': {
		proficiencyBonus: 3,
		xp: 2900,
		expectedAC: 15,
		expectedHPMin: 161,
		expectedHPMax: 175,
		expectedAttackBonus: 6,
		expectedDamageMin: 45,
		expectedDamageMax: 50,
		expectedDC: 15
	},
	'8': {
		proficiencyBonus: 3,
		xp: 3900,
		expectedAC: 16,
		expectedHPMin: 176,
		expectedHPMax: 190,
		expectedAttackBonus: 7,
		expectedDamageMin: 51,
		expectedDamageMax: 56,
		expectedDC: 16
	},
	'9': {
		proficiencyBonus: 4,
		xp: 5000,
		expectedAC: 16,
		expectedHPMin: 191,
		expectedHPMax: 205,
		expectedAttackBonus: 7,
		expectedDamageMin: 57,
		expectedDamageMax: 62,
		expectedDC: 16
	},
	'10': {
		proficiencyBonus: 4,
		xp: 5900,
		expectedAC: 17,
		expectedHPMin: 206,
		expectedHPMax: 220,
		expectedAttackBonus: 7,
		expectedDamageMin: 63,
		expectedDamageMax: 68,
		expectedDC: 16
	},
	'11': {
		proficiencyBonus: 4,
		xp: 7200,
		expectedAC: 17,
		expectedHPMin: 221,
		expectedHPMax: 235,
		expectedAttackBonus: 8,
		expectedDamageMin: 69,
		expectedDamageMax: 74,
		expectedDC: 17
	},
	'12': {
		proficiencyBonus: 4,
		xp: 8400,
		expectedAC: 17,
		expectedHPMin: 236,
		expectedHPMax: 250,
		expectedAttackBonus: 8,
		expectedDamageMin: 75,
		expectedDamageMax: 80,
		expectedDC: 17
	},
	'13': {
		proficiencyBonus: 5,
		xp: 10000,
		expectedAC: 18,
		expectedHPMin: 251,
		expectedHPMax: 265,
		expectedAttackBonus: 8,
		expectedDamageMin: 81,
		expectedDamageMax: 86,
		expectedDC: 18
	},
	'14': {
		proficiencyBonus: 5,
		xp: 11500,
		expectedAC: 18,
		expectedHPMin: 266,
		expectedHPMax: 280,
		expectedAttackBonus: 8,
		expectedDamageMin: 87,
		expectedDamageMax: 92,
		expectedDC: 18
	},
	'15': {
		proficiencyBonus: 5,
		xp: 13000,
		expectedAC: 18,
		expectedHPMin: 281,
		expectedHPMax: 295,
		expectedAttackBonus: 8,
		expectedDamageMin: 93,
		expectedDamageMax: 98,
		expectedDC: 18
	},
	'16': {
		proficiencyBonus: 5,
		xp: 15000,
		expectedAC: 18,
		expectedHPMin: 296,
		expectedHPMax: 310,
		expectedAttackBonus: 9,
		expectedDamageMin: 99,
		expectedDamageMax: 104,
		expectedDC: 18
	},
	'17': {
		proficiencyBonus: 6,
		xp: 18000,
		expectedAC: 19,
		expectedHPMin: 311,
		expectedHPMax: 325,
		expectedAttackBonus: 10,
		expectedDamageMin: 105,
		expectedDamageMax: 110,
		expectedDC: 19
	},
	'18': {
		proficiencyBonus: 6,
		xp: 20000,
		expectedAC: 19,
		expectedHPMin: 326,
		expectedHPMax: 340,
		expectedAttackBonus: 10,
		expectedDamageMin: 111,
		expectedDamageMax: 116,
		expectedDC: 19
	},
	'19': {
		proficiencyBonus: 6,
		xp: 22000,
		expectedAC: 19,
		expectedHPMin: 341,
		expectedHPMax: 355,
		expectedAttackBonus: 10,
		expectedDamageMin: 117,
		expectedDamageMax: 122,
		expectedDC: 19
	},
	'20': {
		proficiencyBonus: 6,
		xp: 25000,
		expectedAC: 19,
		expectedHPMin: 356,
		expectedHPMax: 400,
		expectedAttackBonus: 10,
		expectedDamageMin: 123,
		expectedDamageMax: 140,
		expectedDC: 19
	},
	'21': {
		proficiencyBonus: 7,
		xp: 33000,
		expectedAC: 19,
		expectedHPMin: 401,
		expectedHPMax: 445,
		expectedAttackBonus: 11,
		expectedDamageMin: 141,
		expectedDamageMax: 158,
		expectedDC: 20
	},
	'22': {
		proficiencyBonus: 7,
		xp: 41000,
		expectedAC: 19,
		expectedHPMin: 446,
		expectedHPMax: 490,
		expectedAttackBonus: 11,
		expectedDamageMin: 159,
		expectedDamageMax: 176,
		expectedDC: 20
	},
	'23': {
		proficiencyBonus: 7,
		xp: 50000,
		expectedAC: 19,
		expectedHPMin: 491,
		expectedHPMax: 535,
		expectedAttackBonus: 11,
		expectedDamageMin: 177,
		expectedDamageMax: 194,
		expectedDC: 20
	},
	'24': {
		proficiencyBonus: 7,
		xp: 62000,
		expectedAC: 19,
		expectedHPMin: 536,
		expectedHPMax: 580,
		expectedAttackBonus: 12,
		expectedDamageMin: 195,
		expectedDamageMax: 212,
		expectedDC: 21
	},
	'25': {
		proficiencyBonus: 8,
		xp: 75000,
		expectedAC: 19,
		expectedHPMin: 581,
		expectedHPMax: 625,
		expectedAttackBonus: 12,
		expectedDamageMin: 213,
		expectedDamageMax: 230,
		expectedDC: 21
	},
	'26': {
		proficiencyBonus: 8,
		xp: 90000,
		expectedAC: 19,
		expectedHPMin: 626,
		expectedHPMax: 670,
		expectedAttackBonus: 12,
		expectedDamageMin: 231,
		expectedDamageMax: 248,
		expectedDC: 21
	},
	'27': {
		proficiencyBonus: 8,
		xp: 105000,
		expectedAC: 19,
		expectedHPMin: 671,
		expectedHPMax: 715,
		expectedAttackBonus: 13,
		expectedDamageMin: 249,
		expectedDamageMax: 266,
		expectedDC: 22
	},
	'28': {
		proficiencyBonus: 8,
		xp: 120000,
		expectedAC: 19,
		expectedHPMin: 716,
		expectedHPMax: 760,
		expectedAttackBonus: 13,
		expectedDamageMin: 267,
		expectedDamageMax: 284,
		expectedDC: 22
	},
	'29': {
		proficiencyBonus: 9,
		xp: 135000,
		expectedAC: 19,
		expectedHPMin: 761,
		expectedHPMax: 805,
		expectedAttackBonus: 13,
		expectedDamageMin: 285,
		expectedDamageMax: 302,
		expectedDC: 22
	},
	'30': {
		proficiencyBonus: 9,
		xp: 155000,
		expectedAC: 19,
		expectedHPMin: 806,
		expectedHPMax: 850,
		expectedAttackBonus: 14,
		expectedDamageMin: 303,
		expectedDamageMax: 320,
		expectedDC: 23
	}
} as const;
