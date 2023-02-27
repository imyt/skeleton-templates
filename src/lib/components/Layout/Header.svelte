<script lang="ts">
	import ThemeMenu from './ThemeMenu.svelte'
</script>

<div class="fixed z-[999] top-0 left-0 right-0 h16 md:h-20 shadow-lg bg-surface-100-800-token p-4">
	<div class="container max-w-7xl mx-auto flex justify-between items-center">
		<a class="unstyled md:text-3xl font-bold  gradient-heading" href="/" title="Go to Homepage"
			>Skeleton Templates</a
		>
		<ThemeMenu />
	</div>
</div>
