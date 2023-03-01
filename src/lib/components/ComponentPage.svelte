<script lang="ts">
	import { SEO_TITLE } from '$lib/constants'
	import { storePreviewCode } from '$lib/stores'

	// import { CodeBlock } from '@skeletonlabs/skeleton'
	import { onMount } from 'svelte'
	import CanvasCode from './ComponentCanvas/CanvasCode.svelte'
	import CanvasHeader from './ComponentCanvas/CanvasHeader.svelte'
	import ComponentPreview from './ComponentCanvas/ComponentPreview.svelte'
	// import ComponentPreviewControls from './ComponentPreviewControls.svelte'

	export let props: App.UiComponent

	$: state = $storePreviewCode[props.slug]

	let DynamicComponent: ConstructorOfATypedSvelteComponent

	onMount(async () => {
		DynamicComponent = (
			await import(`../../templates/${props.component}/${props.component}.svelte`)
		).default
	})
</script>

<svelte:head>
	<title>{`${props.attributes.title} | ${SEO_TITLE}`}</title>
</svelte:head>
<div class="h-screen">
	<div class="card p-3 fixed bottom-0 left-0 right-0 z-[1]">
		<CanvasHeader {props} />
	</div>
	<!-- <ComponentPreviewControls {props} /> -->

	<div class="pb-8 md:pb-0.5">
		{#if state === 'preview'}
			<ComponentPreview
				canvas={props.attributes.canvas}
				withSpacing={!!props.attributes.canvas.maxWidth}
			>
				<svelte:component this={DynamicComponent} />
			</ComponentPreview>
		{:else}
			<CanvasCode code={props.code} title={props.attributes.title} />
		{/if}
	</div>
</div>
