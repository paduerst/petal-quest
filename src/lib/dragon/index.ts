export const BUILDER_STATES = ['LOADING', 'WELCOME', 'DISPLAY', 'EDIT'] as const;
export type BuilderState = (typeof BUILDER_STATES)[number];
export function stringToBuilderState(state_string: string): BuilderState | undefined {
	return BUILDER_STATES.find((state) => state === state_string);
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
