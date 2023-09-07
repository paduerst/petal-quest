import { writable, type Writable, derived, get } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
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

export const dragonBuilderHistory = (() => {
	const _dragonBuilderHistoryAsString: Writable<string> = localStorageStore(
		'dragonBuilderHistory',
		'[]'
	);
	const _dragonBuilderHistory = derived<typeof _dragonBuilderHistoryAsString, string[]>(
		_dragonBuilderHistoryAsString,
		($dragonBuilderHistoryAsString) => JSON.parse($dragonBuilderHistoryAsString)
	);

	return {
		subscribe: _dragonBuilderHistory.subscribe,
		set: (value: string[]) => {
			_dragonBuilderHistoryAsString.set(JSON.stringify(value));
		},
		add: (value: string) => {
			const history = get(_dragonBuilderHistory);
			const valueIndexInHistory = history.findIndex((string: string) => {
				return string === value;
			});
			if (valueIndexInHistory !== 0) {
				if (valueIndexInHistory > 0) {
					history.splice(valueIndexInHistory, 1);
				}
				history.unshift(value);
				_dragonBuilderHistoryAsString.set(JSON.stringify(history));
			}
		}
	};
})();

function createDragonConfigStore(initialValue: DragonConfig | undefined = undefined) {
	const { subscribe, set } = writable<DragonConfig | undefined>(initialValue);

	return {
		subscribe,
		set: (value: DragonConfig | undefined) => {
			if (value !== undefined) {
				value.cleanup();
			}
			set(value);
		}
	};
}

export const currentDragonConfig = createDragonConfigStore();
