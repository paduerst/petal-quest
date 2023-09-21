<script lang="ts">
	import {
		type DragonConfig,
		maxHPMin,
		maxHPMax,
		numberOfHitDiceMin,
		numberOfHitDiceMax,
		abilityMin,
		abilityMax
	} from '$lib/dragon';

	export let config: DragonConfig;
</script>

<div class="daisy-form-control w-full max-w-sm m-1">
	<label class="daisy-label" for="maxHP">
		<span class="daisy-label-text">Maximum Hit Points</span>
	</label>
	<input
		type="number"
		bind:value={config.maxHP}
		placeholder={'Defaults to expected value from Hit Dice'}
		class="daisy-input daisy-input-bordered bg-white"
		name="maxHP"
		id="maxHP"
		data-1p-ignore
		min={maxHPMin}
		max={maxHPMax}
		step={1}
	/>
</div>

<div class="daisy-form-control w-full max-w-sm m-1">
	<label class="daisy-label" for="numberOfHitDice">
		<span class="daisy-label-text">Number of Hit Dice</span>
	</label>
	<input
		type="number"
		bind:value={config.numberOfHitDice}
		class="daisy-input daisy-input-bordered bg-white"
		name="numberOfHitDice"
		id="numberOfHitDice"
		data-1p-ignore
		min={numberOfHitDiceMin}
		max={numberOfHitDiceMax}
		step={1}
	/>
</div>

<div class="daisy-form-control w-full max-w-sm m-1">
	<label class="daisy-label" for="strength">
		<span class="daisy-label-text">Strength</span>
	</label>
	<input
		type="number"
		bind:value={config.strength}
		class="daisy-input daisy-input-bordered bg-white"
		name="strength"
		id="strength"
		data-1p-ignore
		min={abilityMin}
		max={abilityMax}
		step={1}
	/>
</div>

<div class="daisy-form-control w-full max-w-sm m-1">
	<label class="daisy-label" for="dexterity">
		<span class="daisy-label-text">Dexterity</span>
	</label>
	<input
		type="number"
		bind:value={config.dexterity}
		class="daisy-input daisy-input-bordered bg-white"
		name="dexterity"
		id="dexterity"
		data-1p-ignore
		min={abilityMin}
		max={abilityMax}
		step={1}
	/>
</div>

<div class="daisy-form-control w-full max-w-sm m-1">
	<label class="daisy-label" for="constitution">
		<span class="daisy-label-text">Constitution</span>
	</label>
	<input
		type="number"
		bind:value={config.constitution}
		class="daisy-input daisy-input-bordered bg-white"
		name="constitution"
		id="constitution"
		data-1p-ignore
		min={abilityMin}
		max={abilityMax}
		step={1}
	/>
</div>

<div class="daisy-form-control w-full max-w-sm m-1">
	<label class="daisy-label" for="intelligence">
		<span class="daisy-label-text">Intelligence</span>
	</label>
	<input
		type="number"
		bind:value={config.intelligence}
		class="daisy-input daisy-input-bordered bg-white"
		name="intelligence"
		id="intelligence"
		data-1p-ignore
		min={abilityMin}
		max={abilityMax}
		step={1}
	/>
</div>

<div class="daisy-form-control w-full max-w-sm m-1">
	<label class="daisy-label" for="wisdom">
		<span class="daisy-label-text">Wisdom</span>
	</label>
	<input
		type="number"
		bind:value={config.wisdom}
		class="daisy-input daisy-input-bordered bg-white"
		name="wisdom"
		id="wisdom"
		data-1p-ignore
		min={abilityMin}
		max={abilityMax}
		step={1}
	/>
</div>

<div class="daisy-form-control w-full max-w-sm m-1">
	<label class="daisy-label" for="charisma">
		<span class="daisy-label-text">Charisma</span>
	</label>
	<input
		type="number"
		bind:value={config.charisma}
		class="daisy-input daisy-input-bordered bg-white"
		name="charisma"
		id="charisma"
		data-1p-ignore
		min={abilityMin}
		max={abilityMax}
		step={1}
	/>
</div>
