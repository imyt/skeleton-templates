<script lang="ts">
	import ComponentPage from '$lib/components/ComponentPage.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

{#if data.props}
	<ComponentPage props={data.props} />
{/if}
