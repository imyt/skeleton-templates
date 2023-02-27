<script lang="ts">
	import IconReceipt2 from 'virtual:icons/tabler/receipt-2'
	import IconDiscount2 from 'virtual:icons/tabler/discount-2'
	import IconCoin from 'virtual:icons/tabler/coin'
	import IconUserPlus from 'virtual:icons/tabler/user-plus'
	import IconArrowUpRight from 'virtual:icons/tabler/arrow-up-right'
	import IconArrowDownRight from 'virtual:icons/tabler/arrow-down-right'

	export let data: { title: string; icon: string; value: string; diff: number }[]
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
	{#each data as stat}
		<div class="card p-6 space-y-1">
			<div class="flex justify-between opacity-50 items-center">
				<div class="font-bold text-xs">{stat.title.toUpperCase()}</div>
				<div><IconReceipt2 /></div>
			</div>
			<div class="flex items-baseline space-x-2 pt-6">
				<div class="text-2xl font-bold">{stat.value}</div>
				<div class={`text-sm flex space-x-1 ${stat.diff > 0 ? 'text-green-600' : 'text-red-600'}`}>
					<div>{stat.diff}%</div>
					{#if stat.diff > 0}
						<IconArrowUpRight />
					{:else}
						<IconArrowDownRight />
					{/if}
				</div>
			</div>
			<div class="opacity-50 text-xs">Compared to previous month</div>
		</div>
	{/each}
</div>
