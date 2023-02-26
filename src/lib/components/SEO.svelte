<script lang="ts">
	import { page } from '$app/stores'
	import {
		SEO_TITLE,
		SEO_DESCRIPTION,
		SEO_KEYWORDS,
		SEO_OG_IMAGE,
		SEO_TWITTER_IMAGE,
		PRODUCTION_URL
	} from '$lib/constants'
	export let description = SEO_DESCRIPTION
	export let keywords = SEO_KEYWORDS
	export let title = SEO_TITLE
	export let ogImage = SEO_OG_IMAGE
	export let ogUrl = PRODUCTION_URL
	export let twitterImage = SEO_TWITTER_IMAGE
</script>

<svelte:head>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:site_name" content={SEO_TITLE} />
	<meta property="og:url" content={`${ogUrl}${$page.url.pathname}`} />
	<meta property="og:type" content={'website'} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={twitterImage} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
