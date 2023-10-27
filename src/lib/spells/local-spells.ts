import { type Writable, derived, get } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
import type { StringMap } from '$lib/text-utils';

export const localSpellURLs = (() => {
	const _localSpellURLsAsString: Writable<string> = localStorageStore('localSpellURLs', '{}');

	const _localSpellURLs = derived<typeof _localSpellURLsAsString, StringMap>(
		_localSpellURLsAsString,
		($localSpellURLsAsString) => JSON.parse($localSpellURLsAsString)
	);

	return {
		subscribe: _localSpellURLs.subscribe,
		set: (spellURLs: StringMap) => {
			_localSpellURLsAsString.set(JSON.stringify(spellURLs));
		},
		add: (spell: string, url: string) => {
			const spellURLs = get(_localSpellURLs);
			spellURLs[spell] = url;
			_localSpellURLsAsString.set(JSON.stringify(spellURLs));
		},
		remove: (spell: string): string | undefined => {
			const spellURLs = get(_localSpellURLs);
			if (!Object.prototype.hasOwnProperty.call(spellURLs, spell)) {
				return undefined;
			} else {
				const url = spellURLs[spell];
				delete spellURLs[spell];
				_localSpellURLsAsString.set(JSON.stringify(spellURLs));
				return url;
			}
		},
		clear: (): StringMap => {
			const previousValues = get(_localSpellURLs);
			_localSpellURLsAsString.set('{}');
			return previousValues;
		}
	};
})();
