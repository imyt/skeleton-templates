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
	<title>{title}</title>

	<!-- Meta Tags -->
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="theme-color" content="#242c46" />
	<meta name="author" content="Adi Musunuri" />

	<!-- Open Graph - https://ogp.me/ -->
	<meta property="og:site_name" content={SEO_TITLE} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${ogUrl}${$page.url.pathname}`} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:secure_url" content={ogImage} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="128" />
	<meta property="og:image:height" content="128" />

	<!-- Open Graph: Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@eyemyt" />
	<meta name="twitter:creator" content="@eyemyt" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={twitterImage} />
</svelte:head>
