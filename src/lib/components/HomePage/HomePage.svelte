<script lang="ts">
	import { CATEGORIES } from '$lib/data/categories'
	import type { PageData } from '../../../routes/$types'
	import Banner from './Banner.svelte'
	import CategoriesList from './CategoriesList.svelte'

	export let data: PageData
	const allComponentsCount = Object.keys(data.componentsCountByCategory).reduce(
		(acc, category) => acc + data.componentsCountByCategory[category],
		0
	)
</script>

<div class="relative p-4">
	<Banner componentsCount={allComponentsCount} />
</div>
<div id="main" class="bg-surface-200-700-token p-4">
	<CategoriesList groups={CATEGORIES} componentsCountByCategory={data.componentsCountByCategory} />
</div>
