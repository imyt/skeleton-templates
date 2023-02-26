<script lang="ts">
	import IconArrowUpRight from 'virtual:icons/tabler/arrow-up-right'
	import IconArrowDownRight from 'virtual:icons/tabler/arrow-down-right'
	import { ProgressRadial } from '@skeletonlabs/skeleton'

	export let data: {
		label: string
		stats: string
		progress: number
		color: string
		icon: 'up' | 'down'
	}[]

	const getColorClass = (color: string) => {
		let colorClass!: string

		switch (color) {
			case 'teal':
				colorClass = 'stroke-primary-500'
				break
			case 'blue':
				colorClass = 'stroke-tertiary-500'
				break
			case 'red':
				colorClass = 'stroke-error-500'

			default:
				break
		}

		return colorClass
	}
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
	{#each data as stat}
		<div class="card p-6 space-y-1">
			<div class="flex space-x-5">
				<ProgressRadial
					value={stat.progress}
					stroke={125}
					class="h-16 w-16"
					meter={getColorClass(stat.color)}
				>
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
