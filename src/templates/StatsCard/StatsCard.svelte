<script lang="ts">
	import { ProgressBar } from '@skeletonlabs/skeleton'
	import IconSwimming from 'virtual:icons/tabler/swimming'
</script>

<div class="card p-6 space-y-6 text-sm relative">
	<div class="absolute -top-7 left-40 h-16 w-16 p-4 rounded-full bg-primary-500">
		<IconSwimming class="w-8 h-8" />
	</div>
	<div class="text-center">
		<div class="font-bold">Swimmning Challenge</div>
		<div class="opacity-70">40 km / week</div>
	</div>
	<div>
		<div class="flex justify-between opacity-70 mb-2">
			<div class="">Progress</div>
			<div class="">80%</div>
		</div>
		<ProgressBar value={80} max={100} />
	</div>

	<div class="flex justify-between">
		<div>32 / 40 km</div>
		<span class="badge variant-filled-primary uppercase">4 days left</span>
	</div>
</div>
