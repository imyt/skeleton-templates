<script lang="ts">
	import IconUsers from 'virtual:icons/tabler/users'
	import IconGauge from 'virtual:icons/tabler/gauge'
	import IconManualGearbox from 'virtual:icons/tabler/manual-gearbox'
	import IconGasStation from 'virtual:icons/tabler/gas-station'

	const mockdata = [
		{ label: '4 passengers', icon: IconUsers },
		{ label: '100 km/h in 4 seconds', icon: IconGauge },
		{ label: 'Automatic gearbox', icon: IconManualGearbox },
		{ label: 'Electric', icon: IconGasStation }
	]
</script>

<div class="card w-80 mx-auto">
	<img src="https://i.imgur.com/ZL52Q2D.png" alt="Tesla Model S" class="p-4" />
	<hr />

	<div class="flex justify-between items-center p-4">
		<div>
			<b>Tesla Model S</b>
			<div class="text-xs opacity-70">Free recharge at any station</div>
		</div>
		<div class="badge variant-ghost-tertiary">25% OFF</div>
	</div>
	<hr />
	<div class="p-4 border-t border-surface-300-600-token space-y-4">
		<div class="uppercase opacity-70 font-bold text-sm">Basic Configuration</div>
		<div class="">
			{#each mockdata as item}
				<div class="inline-flex px-1 text-sm items-center">
					<svelte:component this={item.icon} class="opacity-70" />
					<div class="ml-1">{item.label}</div>
				</div>
			{/each}
		</div>
	</div>
	<hr />
	<div class="flex justify-between p-4 gap-8">
		<div>
			<div class="font-semibold text-2xl">$187.00</div>
			<div class="text-sm opacity-70">per day</div>
		</div>
		<button class="btn btn-sm variant-filled-primary w-full">Rent now</button>
	</div>
</div>
