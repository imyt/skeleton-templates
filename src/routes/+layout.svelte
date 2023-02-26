<script lang="ts">
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css'

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css'

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss'
	import { storePopup, modeCurrent, Toast } from '@skeletonlabs/skeleton'
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom'

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })

	import github from 'svelte-highlight/styles/github'
	import githubDark from 'svelte-highlight/styles/github-dark'
	import Header from '$lib/components/Layout/Header.svelte'
	import { page } from '$app/stores'
	import type { LayoutServerData } from './$types'

	export let data: LayoutServerData
	$: ({ currentTheme } = data)
	const noHeader = $page.route.id === '/component/[component]' ? false : true
</script>

<svelte:head>
	{@html `\<style\>${currentTheme}}\</style\>`}
	{#if $modeCurrent}
		{@html github}
	{:else}
		{@html githubDark}
	{/if}
</svelte:head>

<Toast position="br" max={1} buttonDismiss="hidden" padding="p-2" />

{#if noHeader}
	<Header />
	<div class="pt-16">
		<slot />
	</div>
{:else}
	<slot />
{/if}
