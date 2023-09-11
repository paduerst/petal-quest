<script lang="ts">
	import type { DragonStats } from '$lib/dragon/dragon-stats';
	import { ABILITIES, signFromNumber } from '$lib/dragon';

	export let dragon: DragonStats;
</script>

<hr />
<ul>
	<li class="dragon-ac">
		<p>
			<span class="label">Armor Class</span>
			<span>{dragon.ac} (Natural Armor)</span>
		</p>
	</li>
	<li class="dragon-hp">
		<p>
			<span class="label">Hit Points</span>
			<span
				>{dragon.expectedHitPoints} ({dragon.numberOfHitDice}d{dragon.hitDie}
				{signFromNumber(dragon.con)}
				{Math.abs(dragon.con * dragon.numberOfHitDice)})</span
			>
		</p>
	</li>
	<li class="dragon-speed">
		<p>
			<span class="label">Speed</span>
			<span>{dragon.speeds}</span>
		</p>
	</li>
</ul>
<hr />
<div class="dragon-abilities">
	{#each ABILITIES as ABILITY}
		<div class="dragon-ability">
			<span class="label uppercase">{ABILITY[1]}</span>
			<span>
				{dragon[ABILITY[0]]}
				<span class="modifier">
					({signFromNumber(dragon[ABILITY[1]])}{dragon[ABILITY[1]]})
				</span>
			</span>
		</div>
	{/each}
</div>
<hr />
<p>More to-be-added here.</p>
<!-- TODO: saving throws through proficiency bonus -->
<hr />
