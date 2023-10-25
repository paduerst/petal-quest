import { expect, test } from 'vitest';
import { NAV_LINKS, getNavLinkId } from '$lib';

test('getNavLinkId() uniqueness', () => {
	const linkIds = new Set();

	for (const link of NAV_LINKS) {
		const linkId = getNavLinkId(link);
		expect(linkIds.has(linkId)).toBe(false);
		linkIds.add(linkId);
	}
});
