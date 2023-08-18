export const STATES = ['LOADING', 'WELCOME', 'DISPLAY', 'EDIT'] as const;
export type State = (typeof STATES)[number];
export function toState(state_string: string): State | undefined {
	return STATES.find((state) => state === state_string);
}

export const AGES = ['wyrmling', 'young', 'adult', 'ancient'] as const;
export type Age = (typeof AGES)[number];

export const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'] as const;
export type Color = (typeof COLORS)[number];

export class DragonConfig {
	age: Age = 'wyrmling';
	color: Color = 'red';
	name?: string;
	alignment?: string;
}
