<script lang="ts">
	import { RadioItem, RadioGroup } from '@skeletonlabs/skeleton'
	import IconEye from 'virtual:icons/tabler/eye'
	import IconCode from 'virtual:icons/tabler/code'
	import IconExternalLink from 'virtual:icons/tabler/external-link'
	import { storePreviewCode } from '$lib/stores'
	import { page } from '$app/stores'
	import ThemeMenu from '../Layout/ThemeMenu.svelte'
	export let props: App.UiComponent

	if (!$storePreviewCode[props.slug]) {
		$storePreviewCode[props.slug] = 'preview'
	}
	const isExternalPage = $page.route.id === '/component/[component]' ? true : false
</script>

<div class="text-center md:text-start">
	<div class="md:flex md:justify-between md:items-center">
		<div class="md:flex md:gap-4 md:items-center">
			<p class="unstyled font-semibold">{props.attributes.title}</p>
			<div class="ml-4 hidden items-center space-x-2 md:flex">
				{#if !isExternalPage}
					<a
						class="btn btn-sm p-0"
						href={`/component/${props.slug}`}
						target="_blank"
						aria-label={`View ${props.attributes.title} component in isolation`}
						rel="noreferrer"
						><IconExternalLink alt={`View ${props.attributes.title} component in isolation`} /></a
					>
				{/if}

				{#if props.attributes.responsive}
					<span class="badge variant-glass-primary">RESPONSIVE</span>
				{/if}
				<p class="unstyled text-xs text-slate-600 dark:text-slate-400">
					Built by <a
						href={`https://github.com/${props.attributes.author}`}
						target="_blank"
						rel="noreferrer">@{props.attributes.author}</a
					>
				</p>
			</div>
		</div>

		<div class="inline-flex flex-wrap justify-center gap-2 md:gap-4">
			{#if isExternalPage}
				<ThemeMenu />
			{/if}

			<RadioGroup padding="px-3 py-1 pt-2">
				<RadioItem bind:group={$storePreviewCode[props.slug]} name="tab-preview" value="preview"
					><div class="inline-flex items-center text-sm">
						<IconEye class="mr-1" />
						<span>Preview</span>
					</div></RadioItem
				>
				<RadioItem bind:group={$storePreviewCode[props.slug]} name="tab-code" value="code"
					><div class="inline-flex items-center text-sm">
						<IconCode class="mr-1" />
						<span>Code</span>
					</div></RadioItem
				>
			</RadioGroup>
		</div>
	</div>
</div>
