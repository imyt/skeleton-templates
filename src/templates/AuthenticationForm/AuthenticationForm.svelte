<script>
	import IconBrandGoogle from 'virtual:icons/logos/google-icon'
	import IconBrandFacebook from 'virtual:icons/logos/facebook'
</script>

<div class="card p-6 space-y-6 shadow-xl">
	<p class="font-semibold">Welcome, login with</p>
	<div class="flex flex-wrap space-y-4 space-x-0 md:flex-nowrap md:space-x-4 md:space-y-0">
		<button class="btn variant-ringed-surface w-full gap-2"><IconBrandGoogle />Google</button>
		<button class="btn text-white w-full gap-2" style="background-color: #4267B2;"
			><IconBrandFacebook />Facebook</button
		>
	</div>
	<div class="text-center">
		<hr class="-mb-4" />
		<span class="bg-surface-100-800-token p-2 text-sm">Or continue with email</span>
	</div>
	<form class="space-y-4">
		<label class="label">
			<span>Email</span>
			<input type="email" placeholder="your-email@example.com" class="input" />
		</label>
		<label class="label">
			<span>Password</span>
			<input type="password" placeholder="Your password" class="input" />
		</label>
	</form>
	<div class="flex justify-between flex-wrap">
		<p class="text-sm unstyled py-2 text-slate-500">
			Don't have an account? <a href="/">Register</a>
		</p>
		<button class="btn variant-filled-primary">Login</button>
	</div>
</div>
