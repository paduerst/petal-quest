export const BUILDER_STATES = ['LOADING', 'WELCOME', 'DISPLAY', 'EDIT', 'DEBUG'] as const;
export type BuilderState = (typeof BUILDER_STATES)[number];
export function stringToBuilderState(state_string: string): BuilderState | undefined {
	return BUILDER_STATES.find((state) => state === state_string);
}
