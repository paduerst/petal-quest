<script lang="ts">
	import { normalizeString } from '$lib/text-utils';

	export let title: string;

	let abbrID = `abbrevationDropdown__${normalizeString(title)}`;
</script>

<div class="daisy-dropdown daisy-dropdown-hover">
	<label for={abbrID}>
		<button class="underline decoration-dotted"><slot /></button>
	</label>
	<div
		id={abbrID}
		class="daisy-card daisy-compact daisy-dropdown-content z-[1] shadow bg-base-100 rounded-box border border-black min-w-[8rem]"
	>
		<div class="daisy-card-body">
			<p class="font-normal not-italic">{title}</p>
		</div>
	</div>
</div>
