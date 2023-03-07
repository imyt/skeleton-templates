<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton'

	const mockData = {
		title: 'Configure notifications',
		description: 'Choose what notifications you want to receive',
		data: [
			{
				title: 'Messages',
				description: 'Direct messages you have received from other users'
			},
			{
				title: 'Review requests',
				description: 'Code review requests from your team members'
			},
			{
				title: 'Comments',
				description: 'Daily digest with comments on your posts'
			},
			{
				title: 'Recommendations',
				description: 'Digest with best community posts from previous week'
			}
		]
	}
</script>

<div class="card p-6">
	<div class="font-semibold">{mockData.title}</div>
	<div class="text-xs opacity-70">{mockData.description}</div>
	<div class="space-y-4 mt-8">
		{#each mockData.data as item, i}
			<div class="flex justify-between">
				<div>
					<div>{item.title}</div>
					<div class="text-xs opacity-70">{item.description}</div>
				</div>
				<SlideToggle name={item.title} size="sm" />
			</div>
			{#if i < mockData.data.length - 1}
				<hr />
			{/if}
		{/each}
	</div>
</div>
