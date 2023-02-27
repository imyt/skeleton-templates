<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton'

	export let data: {
		postedAt: string
		body: string
		author: { name: string; image: string }
	}
</script>

<div class="card p-6">
	<div class="flex gap-4 items-start">
		<Avatar src={data.author.image} class="flex-none" />
		<div class="space-y-1">
			<div class="">{data.author.name}</div>
			<div class="text-sm opacity-60">{data.postedAt}</div>
			<div class="pt-4 text-sm">
				{@html data.body}
			</div>
		</div>
	</div>
</div>
