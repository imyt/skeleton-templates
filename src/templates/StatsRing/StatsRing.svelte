<script lang="ts">
	import IconArrowUpRight from 'virtual:icons/tabler/arrow-up-right'
	import IconArrowDownRight from 'virtual:icons/tabler/arrow-down-right'
	import { ProgressRadial } from '@skeletonlabs/skeleton'

	const mockdata = [
		{
			label: 'Page views',
			stats: '456,578',
			progress: 65,
			color: 'stroke-primary-500',
			icon: 'up'
		},
		{
			label: 'New users',
			stats: '2,550',
			progress: 72,
			color: 'stroke-tertiary-500',
			icon: 'up'
		},
		{
			label: 'Orders',
			stats: '4,735',
			progress: 52,
			color: 'stroke-error-500',
			icon: 'down'
		}
	]
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
	{#each mockdata as stat}
		<div class="card p-6">
			<div class="flex space-x-5 items-center">
				<ProgressRadial value={stat.progress} stroke={125} meter={stat.color} width="w-20">
					{#if stat.icon === 'up'}
						<IconArrowUpRight />
					{:else}
						<IconArrowDownRight />
					{/if}
					<!-- {stat.icon} -->
				</ProgressRadial>
				<div class="space-y-2">
					<div class="font-bold opacity-50 text-xs">{stat.label.toUpperCase()}</div>
					<div class="text-2xl font-bold">{stat.stats}</div>
				</div>
			</div>
		</div>
	{/each}
</div>
