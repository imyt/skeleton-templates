<script lang="ts">
	import CategoryCard from './CategoryCard.svelte'

	export let groups: App.CategoriesGroup[]
	export let componentsCountByCategory: Record<string, number>

	const totalComponents = (group: App.CategoriesGroup) => {
		let total: number = 0

		group.categories.forEach((category) => {
			if (componentsCountByCategory[category.slug]) {
				total = componentsCountByCategory[category.slug]
			}
		})

		return total
	}
</script>

<div class="space-y-10 max-w-7xl mx-auto">
	{#each groups as group}
		<div class="space-y-4">
			<div class="flex items-baseline gap-2">
				<h2>{group.name}</h2>
				<span class="opacity-60 text-sm">{totalComponents(group)} components</span>
			</div>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{#each group.categories as category}
					{#if componentsCountByCategory[category.slug]}
						<CategoryCard {category} count={componentsCountByCategory[category.slug]} />
					{/if}
				{/each}
			</div>
		</div>
	{/each}
</div>
