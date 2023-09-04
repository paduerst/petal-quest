import { expect, test } from 'vitest';
import { stringToBuilderState, BUILDER_STATES } from '.';

test('stringToBuilderState() behavior', () => {
	expect(stringToBuilderState('This is not a valid builder state.')).toBe(undefined);

	for (const state of BUILDER_STATES) {
		expect(stringToBuilderState(state)).toBe(state);
	}
});
