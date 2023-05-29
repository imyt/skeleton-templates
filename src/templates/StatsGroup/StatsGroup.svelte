<script lang="ts">
	const mockData = [
		{
			title: 'Page views',
			stats: '456,133',
			description: '24% more than in the same month last year, 33% more that two years ago'
		},
		{
			title: 'New users',
			stats: '2,175',
			description: '13% less compared to last month, new user engagement up by 6%'
		},
		{
			title: 'Completed orders',
			stats: '1,994',
			description: '1994 orders were completed this month, 97% satisfaction rate'
		}
	]
</script>

<div class="card p-6 flex justify-between gap-6 variant-filled-tertiary ">
	{#each mockData as item, i}
		<div class="space-y-2 text-white">
			<div class="text-4xl">{item.stats}</div>
			<div class="uppercase">{item.title}</div>
			<div class="text-sm opacity-70">{item.description}</div>
		</div>
		{#if i < 2}
			<span class="divider-vertical !border-white max-h-full" />
		{/if}
	{/each}
</div>
