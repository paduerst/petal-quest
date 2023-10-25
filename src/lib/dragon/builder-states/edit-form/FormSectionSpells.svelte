<script lang="ts">
	import type { DragonConfig } from '$lib/dragon/dragon-config';

	export let config: DragonConfig;
</script>

<div class="daisy-form-control w-full max-w-sm m-1">
	<label class="daisy-label" for="spellcasting">
		<span class="daisy-label-text">Innate Spellcasting</span>
	</label>
	<select
		bind:value={config.spellcasting}
		class="daisy-select daisy-select-bordered bg-white"
		name="spellcasting"
		id="spellcasting"
	>
		<option value={undefined}>Default spellcasting enabled</option>
		<option value="off">Innate Spellcasting disabled</option>
		<option value="onlyAtWill">Only at-will spells enabled</option>
		<option value="onlyDaily">Only 1/day spells enabled</option>
	</select>
</div>

<div class="daisy-form-control w-full max-w-sm m-1">
	<label class="daisy-label" for="atWillSpells">
		<span class="daisy-label-text">At-Will Spells</span>
	</label>
	<input
		type="text"
		bind:value={config.atWillSpells}
		placeholder={'Defaults to typical cantrip'}
		class="daisy-input daisy-input-bordered bg-white"
		name="atWillSpells"
		id="atWillSpells"
		data-1p-ignore
	/>
</div>

<div class="daisy-form-control w-full max-w-sm m-1">
	<label class="daisy-label" for="dailySpells">
		<span class="daisy-label-text">1/Day Spells</span>
	</label>
	<input
		type="text"
		bind:value={config.dailySpells}
		placeholder={'Defaults to typical spells'}
		class="daisy-input daisy-input-bordered bg-white"
		name="dailySpells"
		id="dailySpells"
		data-1p-ignore
	/>
</div>

<div class="daisy-form-control w-full max-w-sm m-1">
	<label class="daisy-label" for="displaySpellStats">
		<span class="daisy-label-text">Display Spell Attack and Save DC</span>
	</label>
	<select
		bind:value={config.displaySpellStats}
		class="daisy-select daisy-select-bordered bg-white"
		name="displaySpellStats"
		id="displaySpellStats"
	>
		<option value={undefined}>Default (Displays if relevant for typical spells)</option>
		<option value="neither">Display neither</option>
		<option value="attack">Display spell attack</option>
		<option value="saveDC">Display spell save DC</option>
		<option value="both">Display both</option>
	</select>
</div>
