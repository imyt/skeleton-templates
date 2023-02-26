<script lang="ts">
	import { SEO_TITLE } from '$lib/constants'
	import ComponentCanvas from '../ComponentCanvas/ComponentCanvas.svelte'
	import CategoryHeader from './CategoryHeader.svelte'

	export let data: {
		category: App.Category | undefined
		components: App.UiComponent[]
		allComponents: App.UiComponent[]
	}
</script>

<svelte:head>
	<title>{`${data.category?.name} | ${SEO_TITLE}`}</title>
</svelte:head>

<div class="container max-w-7xl mx-auto p-4 space-y-8">
	{#if data.category}
		<CategoryHeader category={data.category} />
	{/if}
	{#each data.components as component}
		<ComponentCanvas props={component} />
	{/each}
</div>
