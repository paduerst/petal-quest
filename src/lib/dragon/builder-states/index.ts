import { writable, type Writable, derived, get } from 'svelte/store';
import { goto } from '$app/navigation';
import { localStorageStore } from '@skeletonlabs/skeleton';
import { DragonConfig } from '..';

export const BUILDER_STATES = [
	'LOADING',
	'WELCOME',
	'DISPLAY',
	'EDIT',
	'HISTORY',
	'DEBUG'
] as const;
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
	const _dragonBuilderHistoryStrings = derived<typeof _dragonBuilderHistoryAsString, string[]>(
		_dragonBuilderHistoryAsString,
		($dragonBuilderHistoryAsString) => JSON.parse($dragonBuilderHistoryAsString)
	);
	const _dragonBuilderHistory = derived<typeof _dragonBuilderHistoryStrings, DragonConfig[]>(
		_dragonBuilderHistoryStrings,
		($_dragonBuilderHistoryStrings) =>
			$_dragonBuilderHistoryStrings.map((string: string) => {
				const stringAsConfig = new DragonConfig();
				stringAsConfig.fromString(string);
				return stringAsConfig;
			})
	);

	return {
		subscribe: _dragonBuilderHistory.subscribe,
		set: (configs: DragonConfig[]) => {
			const configsAsStrings = configs.map((config) => {
				config.cleanup();
				return config.toString();
			});
			_dragonBuilderHistoryAsString.set(JSON.stringify(configsAsStrings));
		},
		add: (config: DragonConfig) => {
			config.cleanup();
			const configAsString = config.toString();
			const history = get(_dragonBuilderHistoryStrings);
			const valueIndexInHistory = history.findIndex((string: string) => {
				return string === configAsString;
			});
			if (valueIndexInHistory !== 0) {
				if (valueIndexInHistory > 0) {
					history.splice(valueIndexInHistory, 1);
				}
				history.unshift(configAsString);
				_dragonBuilderHistoryAsString.set(JSON.stringify(history));
			}
		},
		toStrings: () => {
			return get(_dragonBuilderHistoryStrings);
		}
	};
})();

export const currentDragonConfig = (() => {
	const _currentDragonConfig = writable<DragonConfig | undefined>(undefined);

	return {
		subscribe: _currentDragonConfig.subscribe,
		set: (value: DragonConfig | undefined, fromURL = false) => {
			if (value !== undefined) {
				value.cleanup();
			}
			if (fromURL) {
				// we got this new value from the URL, update to use it
				if (value !== undefined) {
					dragonBuilderHistory.add(value);
				}
				_currentDragonConfig.set(value);
			} else {
				// we should navigate to the URL for this new value
				const builderPath = '/dragon-builder';
				if (value !== undefined) {
					goto(`${builderPath}?${value.toString()}`);
				} else {
					goto(builderPath);
				}
			}
		}
	};
})();
