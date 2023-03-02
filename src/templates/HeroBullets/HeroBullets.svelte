<script lang="ts">
	import IconCheck from 'virtual:icons/tabler/check'
	import image from './image.png'
</script>

<div class="container mx-auto max-w-screen-lg">
	<div class="grid grid-cols-1 md:grid-cols-12">
		<div class="space-y-4 md:col-span-6 p-4">
			<h1 class="text-3xl md:text-5xl font-bold">
				A <span class="relative px-1 md:px-3 py-1 bg-surface-300-600-token">modern</span> Svelte components
				library
			</h1>
			<p class="max-w-xl opacity-60">
				Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
				hunger drives it to try biting a Steel-type Pokémon.
			</p>
			<ul class="list-items">
				<li>
					<span
						><IconCheck
							alt="bullet point"
							class="variant-filled-primary rounded-token p-0.5"
						/></span
					>
					<span>
						<b>TypeScript based</b> – build type safe applications, all components and hooks export types
					</span>
				</li>
				<li>
					<span
						><IconCheck
							alt="bullet point"
							class="variant-filled-primary rounded-token p-0.5"
						/></span
					>
					<span>
						<b>Free and open source</b> – all packages have MIT license, you can use Mantine in any project
					</span>
				</li>
				<li>
					<span
						><IconCheck
							alt="bullet point"
							class="variant-filled-primary rounded-token p-0.5"
						/></span
					>
					<span>
						<b>No annoying focus ring</b> – focus ring will appear only when user navigates with keyboard
					</span>
				</li>
			</ul>
			<div class="flex flex-wrap gap-4">
				<button class="btn md:btn-lg  w-full md:w-fit variant-filled-primary">Get Started</button>
				<button class="btn md:btn-lg  w-full md:w-fit variant-filled-surface">Source Code</button>
			</div>
		</div>

		<img src={image} alt="design components" class="hidden md:block md:col-span-6" />
	</div>
</div>

<style>
	.list-items li {
		display: flex;
		gap: 16px;
		padding: 12px 0px;
	}
</style>
