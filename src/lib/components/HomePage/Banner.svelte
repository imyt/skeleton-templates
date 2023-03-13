<script lang="ts">
	export let componentsCount: number
	import features from './features'
</script>

<!-- <div class="image hidden lg:flex bg-no-repeat bg-right absolute top-0 bottom-0 right-0" /> -->
<div class="container max-w-7xl mx-auto space-y-4 pt-36 pb-10 hero">
	<div class="text-small uppercase font-semibold">Skeleton UI Templates</div>
	<h1 class="!leading-tight">
		<span class="text-primary-500 dark:invert">{componentsCount} responsive components</span>
		<br />built with Skeleton UI
	</h1>
	<p class="max-w-xl opacity-60">
		Get started quickly with our free Svelte templates built on the lightweight Skeleton UI
		framework. Create a sleek and modern website in no time with customizable components and
		responsive design.
	</p>
	<div class="flex flex-wrap gap-4">
		<a href="#main" class="btn variant-filled-primary dark:invert  w-full md:w-fit"
			>Browse components</a
		>
		<a
			href="https://svelte.dev"
			target="_blank"
			rel="noreferrer"
			class="btn variant-ringed-surface w-full md:w-fit">Get started with Svelte</a
		>
		<a
			href="https://skeleton.dev"
			target="_blank"
			rel="noreferrer"
			class="btn variant-ringed-surface w-full md:w-fit">Explore Skeleton UI</a
		>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl pt-16">
		{#each features as feature}
			<div class="space-y-2">
				<svelte:component
					this={feature.icon}
					class="text-4xl text-primary-500 bg-surface-200-700-token p-2 rounded-container-token"
				/>
				<div class="font-bold">
					{feature.title}
				</div>
				<div class="text-xs opacity-60">
					{feature.description}
				</div>
			</div>
		{/each}
	</div>
</div>
