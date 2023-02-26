<script lang="ts">
	import CategoryPage from '$lib/components/CategoryPage/CategoryPage.svelte'
	import ComponentPage from '$lib/components/ComponentPage.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

{#if data}
	<CategoryPage {data} />
{/if}
