import type { ComponentType } from 'svelte';

import type { Condition } from '..';

import BlindedDescription__SvelteComponent_ from './BlindedDescription.svelte';
import CharmedDescription__SvelteComponent_ from './CharmedDescription.svelte';
import DeafenedDescription__SvelteComponent_ from './DeafenedDescription.svelte';
import ExhaustionDescription__SvelteComponent_ from './ExhaustionDescription.svelte';
import FrightenedDescription__SvelteComponent_ from './FrightenedDescription.svelte';
import GrappledDescription__SvelteComponent_ from './GrappledDescription.svelte';
import IncapacitatedDescription__SvelteComponent_ from './IncapacitatedDescription.svelte';
import InvisibleDescription__SvelteComponent_ from './InvisibleDescription.svelte';
import ParalyzedDescription__SvelteComponent_ from './ParalyzedDescription.svelte';
import PetrifiedDescription__SvelteComponent_ from './PetrifiedDescription.svelte';
import PoisonedDescription__SvelteComponent_ from './PoisonedDescription.svelte';
import ProneDescription__SvelteComponent_ from './ProneDescription.svelte';
import RestrainedDescription__SvelteComponent_ from './RestrainedDescription.svelte';
import StunnedDescription__SvelteComponent_ from './StunnedDescription.svelte';
import UnconsciousDescription__SvelteComponent_ from './UnconsciousDescription.svelte';

export const CONDITION_DESCRIPTIONS: {
	[key in Condition]: ComponentType;
} = {
	blinded: BlindedDescription__SvelteComponent_,
	charmed: CharmedDescription__SvelteComponent_,
	deafened: DeafenedDescription__SvelteComponent_,
	exhaustion: ExhaustionDescription__SvelteComponent_,
	frightened: FrightenedDescription__SvelteComponent_,
	grappled: GrappledDescription__SvelteComponent_,
	incapacitated: IncapacitatedDescription__SvelteComponent_,
	invisible: InvisibleDescription__SvelteComponent_,
	paralyzed: ParalyzedDescription__SvelteComponent_,
	petrified: PetrifiedDescription__SvelteComponent_,
	poisoned: PoisonedDescription__SvelteComponent_,
	prone: ProneDescription__SvelteComponent_,
	restrained: RestrainedDescription__SvelteComponent_,
	stunned: StunnedDescription__SvelteComponent_,
	unconscious: UnconsciousDescription__SvelteComponent_
} as const;
