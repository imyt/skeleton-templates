<script lang="ts">
	import ComponentPreview from './ComponentCanvas/ComponentPreview.svelte'
	export let attributes: App.CanvasAttributes
	export let component: ConstructorOfATypedSvelteComponent
</script>

<ComponentPreview canvas={attributes} withSpacing>
	<svelte:component this={component} />
</ComponentPreview>
