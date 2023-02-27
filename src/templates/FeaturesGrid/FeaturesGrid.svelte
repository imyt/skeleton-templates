<script lang="ts">
	import IconGauge from 'virtual:icons/tabler/gauge'
	import IconUser from 'virtual:icons/tabler/user'
	import IconCookie from 'virtual:icons/tabler/cookie'
	import IconLock from 'virtual:icons/tabler/lock'
	import IconMessage2 from 'virtual:icons/tabler/message-2'
	const mockdata = [
		{
			title: 'Extreme performance',
			description:
				'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
			icon: IconGauge
		},
		{
			title: 'Privacy focused',
			description:
				'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
			icon: IconUser
		},
		{
			title: 'No third parties',
			description:
				'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
			icon: IconCookie
		},
		{
			icon: IconLock,
			title: 'Secure by default',
			description:
				'Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right'
		},
		{
			icon: IconMessage2,
			title: '24/7 Support',
			description:
				'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail'
		}
	]
</script>

<div class="container mx-auto max-w-screen-lg">
	<div class="text-center space-y-4">
		<h2 class="">Integrate effortlessly with any technology stack</h2>
		<p class="max-w-xl opacity-60 mx-auto">
			Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger
			drives it to try biting a Steel-type Pokémon.
		</p>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-16">
		{#each mockdata as feature}
			<div class="p-4 space-y-2">
				<div class="bg-surface-300-600-token p-2 w-fit rounded-token">
					<svelte:component this={feature.icon} class="text-tertiary-600-300-token" />
				</div>

				<div class="">
					{feature.title}
				</div>
				<div class="text-xs opacity-60">
					{feature.description}
				</div>
			</div>
		{/each}
	</div>
</div>
