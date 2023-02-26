<script lang="ts">
	import { LightSwitch, popup } from '@skeletonlabs/skeleton'
	const themes = [
		{ type: 'skeleton', name: 'Skeleton', icon: '💀' },
		{ type: 'modern', name: 'Modern', icon: '🤖' },
		{ type: 'rocket', name: 'Rocket', icon: '🚀' },
		{ type: 'seafoam', name: 'Seafoam', icon: '🧜‍♀️' },
		{ type: 'vintage', name: 'Vintage', icon: '📺' },
		{ type: 'sahara', name: 'Sahara', icon: '🏜️' },
		{ type: 'hamlindigo', name: 'Hamlindigo', icon: '👔' },
		{ type: 'gold-nouveau', name: 'Gold Nouveau', icon: '💫' },
		{ type: 'crimson', name: 'Crimson', icon: '⭕' }
		// { type: 'seasonal', name: 'Seasonal', icon: '🎆' }
		// { type: 'test', name: 'Test', icon: '🚧' },
	]
	import IconPalette from 'virtual:icons/tabler/palette'
	import IconCaretDown from 'virtual:icons/tabler/caret-down'
	import { storeTheme } from '$lib/stores'
	import { enhance, type SubmitFunction } from '$app/forms'
	import { browser } from '$app/environment'
	import type { LayoutServerData } from '../../../routes/$types'

	const setTheme: SubmitFunction = () => {
		return async ({ result, update }) => {
			await update()
			if (result.type === 'success') {
				const theme = result.data?.theme as string
				storeTheme.set(theme)
				// document.body.setAttribute('data-theme', theme);
			}
		}
	}

	// Set body `data-theme` based on current theme status
	storeTheme.subscribe(setBodyThemeAttribute)
	function setBodyThemeAttribute(): void {
		if (!browser) return
		document.body.setAttribute('data-theme', $storeTheme)
	}
</script>

<div class="relative flex items-center space-x-3">
	<!-- trigger -->

	<button class="btn hover:variant-soft-primary" use:popup={{ event: 'click', target: 'theme' }}>
		<IconPalette class="text-lg md:hidden" />
		<span class="hidden md:inline-block">Theme</span>
		<!-- <IconCaretDown class="opacity-50" fill="currentColor" /> -->
	</button>
	<!-- popup -->
	<div class="card p-4 w-60 shadow-xl" data-popup="theme">
		<!-- <hr class="my-4" /> -->
		<nav class="list-nav p-4 -m-4 max-h-64 lg:max-h-[500px] overflow-y-auto">
			<form action="/?/setTheme" method="POST" use:enhance={setTheme}>
				<ul>
					{#each themes as { icon, name, type }}
						<li>
							<button
								class="option w-full h-full"
								type="submit"
								name="theme"
								value={type}
								class:bg-primary-active-token={$storeTheme === type}
							>
								<span>{icon}</span>
								<span>{name}</span>
							</button>
						</li>
					{/each}
				</ul>
			</form>
		</nav>
		<!-- <hr class="my-4" />
					<div>
						<a class="btn variant-ghost-surface w-full" href="/docs/generator">Theme Generator</a>
					</div> -->
	</div>
	<LightSwitch width="w-12" height="h-6" />
</div>
