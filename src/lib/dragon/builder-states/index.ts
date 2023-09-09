import { writable, type Writable, derived, get } from 'svelte/store';
import type { FadeParams } from 'svelte/transition';
import { goto } from '$app/navigation';
import { localStorageStore } from '@skeletonlabs/skeleton';
import { DragonConfig } from '..';

export const builderFadeParams: FadeParams = {
	duration: 200
};

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

export const lastBuilderState = writable<BuilderState | undefined>(undefined);

export const currentBuilderState = writable<BuilderState>('LOADING');

export const nextBuilderState = (() => {
	const _nextBuilderState = writable<BuilderState | undefined>(undefined);

	return {
		subscribe: _nextBuilderState.subscribe,
		set: (value: BuilderState | undefined, force = false) => {
			if (value !== get(currentBuilderState) || force) {
				_nextBuilderState.set(value);
			}
		}
	};
})();

export const dragonBuilderHistoryMaxLength = 20;

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
			while (configsAsStrings.length > dragonBuilderHistoryMaxLength) {
				configsAsStrings.pop();
			}
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
				while (history.length > dragonBuilderHistoryMaxLength) {
					history.pop();
				}
				_dragonBuilderHistoryAsString.set(JSON.stringify(history));
			}
		},
		remove: (config: DragonConfig) => {
			config.cleanup();
			const configAsString = config.toString();
			const history = get(_dragonBuilderHistoryStrings);
			const valueIndexInHistory = history.findIndex((string: string) => {
				return string === configAsString;
			});
			if (valueIndexInHistory >= 0) {
				history.splice(valueIndexInHistory, 1);
				_dragonBuilderHistoryAsString.set(JSON.stringify(history));
			}
		},
		clear: () => {
			_dragonBuilderHistoryAsString.set('[]');
		},
		toStrings: () => {
			return get(_dragonBuilderHistoryStrings);
		}
	};
})();

export const currentDragonConfig = (() => {
	const _currentDragonConfig = writable<DragonConfig | undefined>(undefined);
	const _nextDragonConfig = writable<DragonConfig | undefined | null>(null);

	return {
		subscribe: _currentDragonConfig.subscribe,
		set: (value: DragonConfig | undefined, fromURL = false) => {
			if (value !== undefined) {
				value.cleanup();
			}
			if (fromURL) {
				// we got this new value from the URL, update to use it
				_nextDragonConfig.set(value);
				nextBuilderState.set(value === undefined ? 'WELCOME' : 'DISPLAY', true);
			} else {
				// we should navigate to the URL for this new value
				const builderPath = '/dragon-builder/';
				if (value !== undefined) {
					goto(`${builderPath}?${value.toString()}`);
				} else {
					goto(builderPath);
				}
			}
		},
		transition: () => {
			const nextConfig = get(_nextDragonConfig);
			if (nextConfig !== null) {
				if (nextConfig !== undefined) {
					dragonBuilderHistory.add(nextConfig);
				}
				_currentDragonConfig.set(nextConfig);
				_nextDragonConfig.set(null);
			}
		}
	};
})();
