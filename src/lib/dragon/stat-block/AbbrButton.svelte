<script lang="ts">
	export let title: string;
</script>

<div class="daisy-dropdown daisy-dropdown-hover">
	<label for="testfsdf">
		<button class="underline decoration-dotted"><slot /></button>
	</label>
	<div
		class="daisy-card daisy-compact daisy-dropdown-content z-[1] shadow bg-base-100 rounded-box border border-black min-w-[8rem]"
	>
		<div class="daisy-card-body">
			<p class="font-normal not-italic">{title}</p>
		</div>
	</div>
</div>
