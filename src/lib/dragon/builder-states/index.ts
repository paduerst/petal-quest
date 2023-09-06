import { writable } from 'svelte/store';
import type { DragonConfig } from '..';

export const BUILDER_STATES = ['LOADING', 'WELCOME', 'DISPLAY', 'EDIT', 'DEBUG'] as const;
export type BuilderState = (typeof BUILDER_STATES)[number];

/**
 * Converts input string to BuilderState if possible, returning undefined if not.
 * @export
 * @param {string} state_string
 * @return {*}  {(BuilderState | undefined)}
 */
export function stringToBuilderState(state_string: string): BuilderState | undefined {
	return BUILDER_STATES.find((state) => state === state_string);
}

export const dragonBuilderHistory = writable<string[]>([]);

function createDragonConfigStore(initialValue: DragonConfig | undefined = undefined) {
	const { subscribe, set } = writable<DragonConfig | undefined>(initialValue);

	return {
		subscribe,
		set: (value: DragonConfig | undefined) => {
			if (value !== undefined) {
				value.cleanup();
			}
			return set(value);
		}
	};
}

export const currentDragonConfig = createDragonConfigStore();
