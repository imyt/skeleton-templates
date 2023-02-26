<script lang="ts">
	import ThemeMenu from './ThemeMenu.svelte'
</script>

<div class="fixed z-[999] top-0 left-0 right-0 h-16 shadow-lg bg-surface-100-800-token">
	<div class="container max-w-7xl p-4 mx-auto flex justify-between items-center">
		<a class="unstyled text-3xl" href="/" title="Go to Homepage">Skeleton Templates</a>
		<ThemeMenu />
	</div>
</div>
