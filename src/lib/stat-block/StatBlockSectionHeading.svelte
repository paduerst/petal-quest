<script lang="ts">
	import type { RGB } from '$lib/dragon';
	import { dividerHeightThin } from '.';

	import StatBlockDivider from './StatBlockDivider.svelte';

	export let theme: RGB;
</script>

<div class="break-inside-avoid break-after-avoid">
	<h5 class="stat-block-heading-font text-xl"><slot /></h5>
	<StatBlockDivider color={theme} height={dividerHeightThin} classes={'mt-0'} />
</div>
