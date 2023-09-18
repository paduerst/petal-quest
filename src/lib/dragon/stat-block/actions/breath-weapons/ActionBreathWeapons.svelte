<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import Breath1Red from './Breath1Red.svelte';
	import Breath2Red from './Breath2Red.svelte';
	import Breath1Orange from './Breath1Orange.svelte';
	import Breath2Orange from './Breath2Orange.svelte';
	import Breath1Yellow from './Breath1Yellow.svelte';
	import Breath2Yellow from './Breath2Yellow.svelte';
	import Breath1Green from './Breath1Green.svelte';
	import Breath2Green from './Breath2Green.svelte';
	import Breath1Blue from './Breath1Blue.svelte';
	import Breath2Blue from './Breath2Blue.svelte';
	import Breath1Indigo from './Breath1Indigo.svelte';
	import Breath2Indigo from './Breath2Indigo.svelte';
	import Breath1Violet from './Breath1Violet.svelte';
	import Breath2Violet from './Breath2Violet.svelte';

	export let dragon: DragonStats;

	const breathsByColor = {
		red: [Breath1Red, Breath2Red],
		orange: [Breath1Orange, Breath2Orange],
		yellow: [Breath1Yellow, Breath2Yellow],
		green: [Breath1Green, Breath2Green],
		blue: [Breath1Blue, Breath2Blue],
		indigo: [Breath1Indigo, Breath2Indigo],
		violet: [Breath1Violet, Breath2Violet]
	} as const;
</script>

<div class="dragon-action break-inside-avoid break-after-avoid">
	<p>
		<i><b>Breath Weapons (Recharge 5–6).</b></i>
		{dragon.nameUpper} uses one of the following breath weapons.
	</p>
</div>

<svelte:component this={breathsByColor[dragon.color][0]} {dragon} />

<svelte:component this={breathsByColor[dragon.color][1]} {dragon} />
