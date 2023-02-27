<script lang="ts">
	import HomePage from '$lib/components/HomePage/HomePage.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<HomePage {data} />
