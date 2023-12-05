import type { StatsForPreamble } from './preamble';
import type { RGB } from '$lib/text-utils';
import { COLOR_TO_THEME } from '$lib/dragon';

export type Stats = StatsForPreamble;

export const dividerHeightThick = '2.4px';
export const dividerHeightThin = '1.6px';

export const DEFAULT_THEME: RGB = COLOR_TO_THEME['red'];
