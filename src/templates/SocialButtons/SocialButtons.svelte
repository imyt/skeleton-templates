<script>
	import IconBrandGoogle from 'virtual:icons/logos/google-icon'
	import IconBrandFacebook from 'virtual:icons/logos/facebook'
	import IconBrandTwitter from 'virtual:icons/logos/twitter'
	import IconBrandGitHub from 'virtual:icons/logos/github-icon'
	import IconBrandDiscord from 'virtual:icons/tabler/brand-discord'
</script>

<div class="flex flex-wrap gap-4">
	<!-- Google Button -->
	<button class="btn variant-filled-surface gap-2"><IconBrandGoogle />Continue with Google</button>

	<!-- Twitter Button -->
	<button class="btn variant-filled-surface gap-2"><IconBrandTwitter />Follow on Twitter</button>

	<!-- Github Button -->
	<button class="btn bg-black text-white hover:opacity-70 gap-2"
		><IconBrandGitHub class="invert" />Login with Github</button
	>

	<!-- Facebook Button -->
	<button class="btn text-white gap-2" style="background-color: #4267B2;"
		><IconBrandFacebook />Continue with Facebook</button
	>

	<!-- Discord Button -->
	<button class="btn gap-2 text-white" style="background-color: #5865F2"
		><IconBrandDiscord />Join Discord community</button
	>
</div>
