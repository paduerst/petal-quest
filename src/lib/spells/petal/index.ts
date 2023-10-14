// Homebrew spells written by us.
export const PETAL_SPELLS = ['wall-of-shadow'] as const;

export type PetalSpell = (typeof PETAL_SPELLS)[number];
