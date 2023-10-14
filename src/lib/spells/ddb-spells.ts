// Spells that are on D&D Beyond. This app cannot display them.
export const DDB_SPELLS = ['wall-of-light'] as const;

export type DDBSpell = (typeof DDB_SPELLS)[number];
