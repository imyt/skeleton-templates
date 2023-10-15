<script lang="ts">
	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss'

	// Enable Vercel Analytics
	import { dev } from '$app/environment'
	import { inject } from '@vercel/analytics'
	inject({ mode: dev ? 'development' : 'production' })

	import { storePopup, modeCurrent, Toast, initializeStores } from '@skeletonlabs/skeleton'
	initializeStores()
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom'

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })

	import github from 'svelte-highlight/styles/github'
	import githubDark from 'svelte-highlight/styles/github-dark'
	import Header from '$lib/components/Layout/Header.svelte'
	import { page } from '$app/stores'
	import type { LayoutServerData } from './$types'
	import Seo from '$lib/components/SEO.svelte'

	// export let data: LayoutServerData
	// $: ({ currentTheme } = data)
	const noHeader = $page.route.id === '/component/[component]' ? false : true
</script>

<svelte:head>
	<!-- {@html `\<style\>${currentTheme}}\</style\>`} -->
	{#if $modeCurrent}
		{@html github}
	{:else}
		{@html githubDark}
	{/if}
	<Seo />
</svelte:head>

<Toast position="br" max={1} buttonDismiss="hidden" padding="p-2" />

{#if noHeader}
	<Header />
	<div class="pt-16 md:pt-20">
		<slot />
	</div>
{:else}
	<slot />
{/if}
