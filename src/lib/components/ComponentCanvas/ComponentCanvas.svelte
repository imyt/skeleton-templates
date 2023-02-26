<script lang="ts">
	import { storePreviewCode } from '$lib/stores'

	// import { CodeBlock } from '@skeletonlabs/skeleton'
	import { onMount } from 'svelte'
	import ComponentPreview from './ComponentPreview.svelte'
	import CanvasCode from './CanvasCode.svelte'
	import CanvasHeader from './CanvasHeader.svelte'

	export let props: App.UiComponent

	$: state = $storePreviewCode[props.slug]

	let DynamicComponent: ConstructorOfATypedSvelteComponent

	onMount(async () => {
		DynamicComponent = (
			await import(`../../../templates/${props.component}/${props.component}.svelte`)
		).default
	})
</script>

<div class="card variant-glass-surface">
	<header class="p-3 border-surface-100-800-token border-b">
		<CanvasHeader {props} />
	</header>

	{#if state === 'preview'}
		<div class="bg-surface-200-700-token">
			<ComponentPreview
				canvas={props.attributes.canvas}
				withSpacing={!!props.attributes.canvas.maxWidth}
			>
				<svelte:component this={DynamicComponent} {...props.attributes.props} />
			</ComponentPreview>
		</div>
	{:else}
		<CanvasCode code={props.code} title={props.attributes.title} />
	{/if}
</div>
