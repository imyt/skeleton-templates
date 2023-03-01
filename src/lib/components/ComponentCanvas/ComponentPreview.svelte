<script lang="ts">
	export let canvas: { center: boolean; maxWidth?: string }
	export let withSpacing: boolean
</script>

<div
	class={`${canvas?.maxWidth && withSpacing ? 'py-10' : 'py-0'}
	${!canvas?.maxWidth && canvas.center ? '!p-10 mb-20' : 'p-0'}
    ${canvas?.center ? 'mx-auto' : ''}
	${canvas?.maxWidth ? `max-w-md ` : 'w-full'}
	`}
>
	<slot />
</div>
