<script lang="ts">
	import './spell-description-styles.css';

	export let description: string;
</script>

<div class="spell-description">
	{@html description}
</div>
