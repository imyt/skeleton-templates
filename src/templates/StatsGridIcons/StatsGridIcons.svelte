<script lang="ts">
	import IconArrowUpRight from 'virtual:icons/tabler/arrow-up-right'
	import IconArrowDownRight from 'virtual:icons/tabler/arrow-down-right'

	const mockdata = [
		{
			title: 'Revenue',
			value: '$13,456',
			diff: 34
		},
		{
			title: 'Profit',
			value: '$4,145',
			diff: -13
		},
		{
			title: 'Coupons usage',
			value: '745',
			diff: 18
		}
	]
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
	{#each mockdata as stat}
		<div class="card p-6 space-y-1">
			<div class="flex justify-between items-center">
				<div>
					<div class="font-bold opacity-50 text-xs">{stat.title.toUpperCase()}</div>
					<div class="text-2xl font-bold">{stat.value}</div>
				</div>
				<div class={`text-3xl ${stat.diff > 0 ? 'text-green-600' : 'text-red-600'}`}>
					<div />
					{#if stat.diff > 0}
						<IconArrowUpRight />
					{:else}
						<IconArrowDownRight />
					{/if}
				</div>
			</div>
			<div class=" text-sm pt-6">
				<span class={`font-bold ${stat.diff > 0 ? 'text-green-600' : 'text-red-600'}`}>
					{stat.diff}%
				</span>
				<span class="opacity-50">
					{stat.diff > 0 ? 'increase' : 'decrease'}
					compared to previous month</span
				>
			</div>
		</div>
	{/each}
</div>
