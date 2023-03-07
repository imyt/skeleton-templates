<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton'

	const mockdata = {
		title: 'Project tasks',
		completed: 1887,
		total: 2334,
		stats: [
			{
				value: 447,
				label: 'Remaining'
			},
			{
				value: 76,
				label: 'In progress'
			}
		]
	}
</script>

<div class="card p-6 flex justify-between">
	<div class="space-y-6">
		<div class="font-bold">{mockdata.title}</div>
		<div>
			<div>{mockdata.completed}</div>
			<div class="text-sm opacity-70">Completed</div>
		</div>

		<div class="flex justify-between gap-4">
			{#each mockdata.stats as item}
				<div class="">
					<b>{item.value}</b>
					<div class="text-sm opacity-70">{item.label}</div>
				</div>
			{/each}
		</div>
	</div>
	<ProgressRadial value={(mockdata.completed / mockdata.total) * 100} stroke={80} class="h-40 w-40">
		{((mockdata.completed / mockdata.total) * 100).toFixed(0)}%
	</ProgressRadial>
</div>
