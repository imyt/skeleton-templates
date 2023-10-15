<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight'
	import {
		clipboard,
		popup,
		getToastStore,
		type PopupSettings,
		type ToastSettings
	} from '@skeletonlabs/skeleton'
	import IconClipboard from 'virtual:icons/tabler/clipboard'

	export let code: string
	export let title: string

	function triggerToast(): void {
		const t: ToastSettings = {
			message: `<strong>${title}</strong> code copied to clipboard`,
			// Optional: Presets for primary | secondary | tertiary | warning
			background: 'variant-filled-success',
			// Optional: The auto-hide settings
			autohide: true,
			timeout: 1000
			// Optional: Adds a custom action button
			// action: {
			// 	label: 'Greeting',
			// 	response: () => alert('Hello, Skeleton')
			// }
			// Optional: Set a callback method
			// callback: (response) => console.log(response)
		}
		getToastStore().trigger(t)
	}
</script>

<div class="relative">
	<button
		use:clipboard={code}
		on:click={triggerToast}
		class="btn btn-sm variant-soft-surface absolute right-2 top-2 hidden md:block"
		aria-label="Copy Code"><IconClipboard /></button
	>

	<HighlightSvelte {code} class="unstyled mb-20 text-xs clear-left" />
</div>
