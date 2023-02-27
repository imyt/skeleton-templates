<script lang="ts">
	import IconArrowLeft from 'virtual:icons/tabler/arrow-left'
	export let category: App.Category
</script>

<a href="/#main" class="inline-flex items-center gap-1"><IconArrowLeft />Back to all categories</a>

<h1>{category.name}</h1>
