<script>
	import IconBrandGoogle from 'virtual:icons/logos/google-icon'
	import IconBrandFacebook from 'virtual:icons/logos/facebook'
	import IconBrandTwitter from 'virtual:icons/logos/twitter'
	import IconBrandGitHub from 'virtual:icons/logos/github-icon'
	import IconBrandDiscord from 'virtual:icons/logos/discord-icon'
	import FacebookButton from './FacebookButton.svelte'
	import GoogleButton from './GoogleButton.svelte'
	import TwitterButton from './TwitterButton.svelte'
	import GithubButton from './GithubButton.svelte'
</script>

<div class="container max-w-sm mx-auto p-4 space-y-8">
	<div class="p-4 space-y-4 flex flex-col">
		<GoogleButton class="btn variant-filled-surface">Continue with Google</GoogleButton>
		<TwitterButton class="btn variant-filled-surface">Follow on Twitter</TwitterButton>
		<GithubButton class="btn hover:bg-slate-900 bg-black text-white">Login with Github</GithubButton
		>
		<FacebookButton class="btn variant-filled-surface" style="background-color: #4267B2;"
			>Continue with Facebook</FacebookButton
		>
		<button class="btn variant-filled-surface" style="background-color: #5865F2;"
			><IconBrandDiscord class="mr-2" style="fill: white;" />Join Discord community</button
		>
	</div>
</div>
