<script lang="ts">
	import Logo from './Logo.svelte';
	import FooterNavLinks from './FooterNavLinks.svelte';
</script>

<footer
	class="text-center box-border bg-surface-100-800-token w-full border-t border-l border-r border-surface-300-600-token print:hidden"
>
	<div class="p-4 px-2 mx-auto my-0 w-auto max-w-5xl text-left">
		<div class="grid grid-cols-2 gap-6">
			<div class="inline-grid">
				<Logo />
			</div>
			<div class="inline-grid">
				<FooterNavLinks />
			</div>
		</div>
		<hr class="my-4" />
		<div class="card variant-ghost-primary p-4 mx-auto text-center">
			<p>© 2024 Petal Quest. All rights reserved.</p>
		</div>
		<hr class="my-4" />
		<p class="text-sm text-token">
			This website includes material taken from the System Reference Document 5.1 (“SRD 5.1”) by
			Wizards of the Coast LLC and available at <a
				href="https://dnd.wizards.com/resources/systems-reference-document"
				>https://dnd.wizards.com/resources/systems-reference-document</a
			>. The SRD 5.1 is licensed under the Creative Commons Attribution 4.0 International License
			available at
			<a href="https://creativecommons.org/licenses/by/4.0/legalcode"
				>https://creativecommons.org/licenses/by/4.0/legalcode</a
			>.
		</p>
	</div>
</footer>
