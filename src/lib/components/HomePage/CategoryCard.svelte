<script lang="ts">
	export let category: App.Category
	export let count: number
</script>

<a class="unstyled" href={`/category/${category.slug}`}>
	<div class="card p-4">
		<div>{category.name}</div>
		<div class="text-xs opacity-60">{count} {count === 1 ? 'component' : 'components'}</div>
	</div>
</a>
