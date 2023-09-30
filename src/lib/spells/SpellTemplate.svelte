<script lang="ts">
	import type { SpellSchool } from '.';
	import { numberWithOrdinalSuffix } from '$lib';

	export let name: string;
	export let level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
	export let school: SpellSchool;

	let subtitle =
		level === 0
			? `${school} cantrip`
			: `${numberWithOrdinalSuffix(level)}-level ${school.toLowerCase()}`;
</script>

<div>Spell named {name}.</div>
<div>{subtitle}</div>

<slot />
