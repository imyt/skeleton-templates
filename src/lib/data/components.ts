const components: App.UiComponent[] = [
	{
		component: 'ActionsGrid',
		slug: 'actions-grid',
		code: "<script lang=\"ts\">\n\timport IconCreditCard from 'virtual:icons/tabler/credit-card'\n\timport IconBuildingBank from 'virtual:icons/tabler/building-bank'\n\timport IconRepeat from 'virtual:icons/tabler/repeat'\n\timport IconReceiptRefund from 'virtual:icons/tabler/receipt-refund'\n\timport IconReceipt from 'virtual:icons/tabler/receipt'\n\timport IconReceiptTax from 'virtual:icons/tabler/receipt-tax'\n\timport IconReport from 'virtual:icons/tabler/report'\n\timport IconCoin from 'virtual:icons/tabler/coin'\n\timport IconCashBanknote from 'virtual:icons/tabler/cash-banknote'\n\timport type { CssClasses } from '@skeletonlabs/skeleton'\n\tconst mockdata: {\n\t\ttitle: string\n\t\ticon: typeof IconCreditCard\n\t\tcolor: CssClasses\n\t}[] = [\n\t\t{ title: 'Credit cards', icon: IconCreditCard, color: 'text-violet-500' },\n\t\t{ title: 'Banks nearby', icon: IconBuildingBank, color: 'text-indigo-500' },\n\t\t{ title: 'Transfers', icon: IconRepeat, color: 'text-blue-500' },\n\t\t{ title: 'Refunds', icon: IconReceiptRefund, color: 'text-green-500' },\n\t\t{ title: 'Receipts', icon: IconReceipt, color: 'text-teal-500' },\n\t\t{ title: 'Taxes', icon: IconReceiptTax, color: 'text-cyan-500' },\n\t\t{ title: 'Reports', icon: IconReport, color: 'text-pink-500' },\n\t\t{ title: 'Payments', icon: IconCoin, color: 'text-red-500' },\n\t\t{ title: 'Cashback', icon: IconCashBanknote, color: 'text-orange-500' }\n\t]\n</script>\n\n<div class=\"card p-6 space-y-4\">\n\t<div class=\"flex justify-between items-center\">\n\t\t<b>Services</b>\n\t\t<a href=\"#actions-grid\" class=\"unstyled text-xs hover:underline\">+21 other services</a>\n\t</div>\n\t<div class=\"grid grid-cols-3 gap-4\">\n\t\t{#each mockdata as item}\n\t\t\t<div\n\t\t\t\tclass=\"btn flex flex-col gap-2 bg-surface-200-700-token rounded-container-token py-4 hover:scale-105 hover:shadow-md hover:cursor-pointer\"\n\t\t\t>\n\t\t\t\t<svelte:component this={item.icon} class={`text-2xl ${item.color}`} />\n\t\t\t\t<div class=\"text-xs\">{item.title}</div>\n\t\t\t</div>\n\t\t{/each}\n\t</div>\n</div>\n",
		attributes: {
			title: 'Card with actions grid',
			category: 'app-cards',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true, maxWidth: 'md' }
		}
	},
	{
		component: 'AuthenticationForm',
		slug: 'authentication-form',
		code: '<script>\r\n\timport IconBrandGoogle from \'virtual:icons/logos/google-icon\'\r\n\timport IconBrandFacebook from \'virtual:icons/logos/facebook\'\r\n</script>\r\n\r\n<div class="card p-6 space-y-6 shadow-xl">\r\n\t<p class="font-semibold">Welcome, login with</p>\r\n\t<div class="flex flex-wrap space-y-4 space-x-0 md:flex-nowrap md:space-x-4 md:space-y-0">\r\n\t\t<button class="btn variant-ringed-surface w-full gap-2"><IconBrandGoogle />Google</button>\r\n\t\t<button class="btn text-white w-full gap-2" style="background-color: #4267B2;"\r\n\t\t\t><IconBrandFacebook />Facebook</button\r\n\t\t>\r\n\t</div>\r\n\t<div class="text-center">\r\n\t\t<hr class="-mb-4" />\r\n\t\t<span class="bg-surface-100-800-token p-2 text-sm">Or continue with email</span>\r\n\t</div>\r\n\t<form class="space-y-4">\r\n\t\t<label class="label">\r\n\t\t\t<span>Email</span>\r\n\t\t\t<input type="email" placeholder="your-email@example.com" class="input" />\r\n\t\t</label>\r\n\t\t<label class="label">\r\n\t\t\t<span>Password</span>\r\n\t\t\t<input type="password" placeholder="Your password" class="input" />\r\n\t\t</label>\r\n\t</form>\r\n\t<div class="flex justify-between flex-wrap">\r\n\t\t<p class="text-sm unstyled py-2 text-slate-500">\r\n\t\t\tDon\'t have an account? <a href="/">Register</a>\r\n\t\t</p>\r\n\t\t<button class="btn variant-filled-primary">Login</button>\r\n\t</div>\r\n</div>\r\n',
		attributes: {
			title: 'Authentication Form',
			category: 'authentication',
			author: 'imyt',
			dependencies: ['/core/action-icon/', '@tabler/icons'],
			canvas: { center: true, maxWidth: 'md' }
		}
	},
	{
		component: 'AuthenticationImage',
		slug: 'authentication-image',
		code: '<div class="wrapper">\r\n\t<div class="card space-y-6 p-6 pt-20 rounded-none max-w-full md:max-w-md form">\r\n\t\t<div class="text-center mb-12 text-3xl font-bold">Welcome back!</div>\r\n\t\t<form class="space-y-4">\r\n\t\t\t<label class="label">\r\n\t\t\t\t<span>Email</span>\r\n\t\t\t\t<input type="email" placeholder="your-email@example.com" class="input mt-1" />\r\n\t\t\t</label>\r\n\t\t\t<label class="label">\r\n\t\t\t\t<span>Password</span>\r\n\t\t\t\t<input type="password" placeholder="Your password" class="input mt-1" />\r\n\t\t\t</label>\r\n\t\t\t<label class="inline-flex items-center">\r\n\t\t\t\t<input type="checkbox" placeholder="Your password" class="checkbox" />\r\n\t\t\t\t<span class="ml-2">Keep me logged in</span>\r\n\t\t\t</label>\r\n\t\t</form>\r\n\t\t<div class="text-center">\r\n\t\t\t<button class="btn variant-filled-primary w-full">Login</button>\r\n\t\t\t<p class="py-2">\r\n\t\t\t\tDon\'t have an account? <a href="/">Register</a>\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<style>\r\n\t.wrapper {\r\n\t\tmin-height: 900px;\r\n\t\tbackground-size: cover;\r\n\t\tbackground-image: url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80);\r\n\t}\r\n\r\n\t.form {\r\n\t\tmin-height: 900px;\r\n\t}\r\n</style>\r\n',
		attributes: {
			title: 'Authentication page with image',
			category: 'authentication',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: false }
		}
	},
	{
		component: 'AuthenticationTitle',
		slug: 'authentication-title',
		code: '<header class="text-center py-4">\r\n\t<div class="text-center mb-2 text-3xl font-bold">Welcome back!</div>\r\n\t<p class="unstyled text-sm md:text-base opacity-50">\r\n\t\tDon\'t have an account yet? <a href="/">Create account</a>\r\n\t</p>\r\n</header>\r\n<div class="card p-6 space-y-6 shadow-xl text-left">\r\n\t<form class="space-y-4">\r\n\t\t<label class="label">\r\n\t\t\t<span>Email</span>\r\n\t\t\t<input type="email" placeholder="your-email@example.com" class="input" />\r\n\t\t</label>\r\n\t\t<label class="label">\r\n\t\t\t<span>Password</span>\r\n\t\t\t<input type="password" placeholder="Your password" class="input" />\r\n\t\t</label>\r\n\t\t<label class="inline-flex items-center">\r\n\t\t\t<input type="checkbox" class="checkbox" />\r\n\t\t\t<span class="ml-2">Remember me</span>\r\n\t\t</label>\r\n\t\t<button class="btn variant-filled-primary w-full">Reset Password</button>\r\n\t</form>\r\n</div>\r\n',
		attributes: {
			title: 'Authentication form with title',
			category: 'authentication',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true, maxWidth: 'md' }
		}
	},
	{
		component: 'CardWithStats',
		slug: 'card-with-stats',
		code: '<script lang="ts">\n\tinterface CardWithStatsProps {\n\t\timage: string\n\t\ttitle: string\n\t\tdescription: string\n\t\tstats: {\n\t\t\ttitle: string\n\t\t\tvalue: string\n\t\t}[]\n\t}\n\tconst mockdata: CardWithStatsProps = {\n\t\timage:\n\t\t\t\'https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80\',\n\t\ttitle: \'Running challenge\',\n\t\tdescription:\n\t\t\t\'56 km this month • 17% improvement compared to last month • 443 place in global scoreboard\',\n\t\tstats: [\n\t\t\t{ title: \'Distance\', value: \'27.4 km\' },\n\t\t\t{ title: \'Avg. speed\', value: \'9.6 km/h\' },\n\t\t\t{ title: \'Score\', value: \'88/100\' }\n\t\t]\n\t}\n</script>\n\n<div class="card w-80 mx-auto">\n\t<img src={mockdata.image} alt={mockdata.title} class="" />\n\t<div class="p-4 space-y-6">\n\t\t<div class="flex justify-between items-center">\n\t\t\t<b>{mockdata.title}</b>\n\t\t\t<div class="text-sm opacity-70">80% completed</div>\n\t\t</div>\n\t\t<div class="text-sm opacity-70">{mockdata.description}</div>\n\t</div>\n\t<!-- <hr /> -->\n\t<footer class="p-4 border-t border-surface-300-600-token">\n\t\t<div class="flex justify-between">\n\t\t\t{#each mockdata.stats as item}\n\t\t\t\t<div class="">\n\t\t\t\t\t<div class="text-sm opacity-70">{item.title}</div>\n\t\t\t\t\t<b>{item.value}</b>\n\t\t\t\t</div>\n\t\t\t{/each}\n\t\t</div>\n\t</footer>\n</div>\n',
		attributes: {
			title: 'Card with stats',
			category: 'app-cards',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true, maxWidth: 'sm' }
		}
	},
	{
		component: 'CommentsHtml',
		slug: 'comments-html',
		code: '<script lang="ts">\r\n\timport { Avatar } from \'@skeletonlabs/skeleton\'\r\n\r\n\tconst mockdata = {\r\n\t\tpostedAt: \'10 minutes ago\',\r\n\t\tbody: \'<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>\',\r\n\t\tauthor: {\r\n\t\t\tname: \'Aarav Gupta\',\r\n\t\t\timage:\r\n\t\t\t\t\'https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?w=740&t=st=1677487980~exp=1677488580~hmac=739386c6e0e7e2bbd4b5d1e33828371ed5aa6df08e8bcc842a216a5bb0ab0de5\'\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<div class="card p-6">\r\n\t<div class="flex gap-4 items-start">\r\n\t\t<Avatar src={mockdata.author.image} class="flex-none" />\r\n\t\t<div class="space-y-1">\r\n\t\t\t<div class="">{mockdata.author.name}</div>\r\n\t\t\t<div class="text-sm opacity-60">{mockdata.postedAt}</div>\r\n\t\t\t<div class="pt-4">\r\n\t\t\t\t{@html mockdata.body}\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n',
		attributes: {
			title: 'Comment with html content',
			category: 'comments',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true, maxWidth: 'md' }
		}
	},
	{
		component: 'CommentsSimple',
		slug: 'comments-simple',
		code: '<script lang="ts">\n\timport { Avatar } from \'@skeletonlabs/skeleton\'\n\n\tconst mockdata = {\n\t\tpostedAt: \'10 minutes ago\',\n\t\tbody: \'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.\',\n\t\tauthor: {\n\t\t\tname: \'Aarav Gupta\',\n\t\t\timage:\n\t\t\t\t\'https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?w=740&t=st=1677487980~exp=1677488580~hmac=739386c6e0e7e2bbd4b5d1e33828371ed5aa6df08e8bcc842a216a5bb0ab0de5\'\n\t\t}\n\t}\n</script>\n\n<div class="card p-6">\n\t<div class="flex gap-4 items-start">\n\t\t<Avatar src={mockdata.author.image} class="flex-none" />\n\t\t<div class="space-y-1">\n\t\t\t<div class="">{mockdata.author.name}</div>\n\t\t\t<div class="text-sm opacity-60">{mockdata.postedAt}</div>\n\t\t\t<div class="pt-4 text-sm">\n\t\t\t\t{@html mockdata.body}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n',
		attributes: {
			title: 'Comment',
			category: 'comments',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true, maxWidth: 'md' }
		}
	},
	{
		component: 'FeaturesCards',
		slug: 'features-cards',
		code: '<script lang="ts">\n\timport IconGauge from \'virtual:icons/tabler/gauge\'\n\timport IconUser from \'virtual:icons/tabler/user\'\n\timport IconCookie from \'virtual:icons/tabler/cookie\'\n\tconst mockdata = [\n\t\t{\n\t\t\ttitle: \'Extreme performance\',\n\t\t\tdescription:\n\t\t\t\t\'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit\',\n\t\t\ticon: IconGauge\n\t\t},\n\t\t{\n\t\t\ttitle: \'Privacy focused\',\n\t\t\tdescription:\n\t\t\t\t\'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma\',\n\t\t\ticon: IconUser\n\t\t},\n\t\t{\n\t\t\ttitle: \'No third parties\',\n\t\t\tdescription:\n\t\t\t\t\'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves\',\n\t\t\ticon: IconCookie\n\t\t}\n\t]\n</script>\n\n<div class="container mx-auto max-w-screen-lg">\n\t<div class="text-center space-y-4">\n\t\t<span class="badge variant-filled-primary uppercase">Best Company Ever</span>\n\t\t<div class="text-xl md:text-3xl font-bold">\n\t\t\tIntegrate effortlessly with any technology stack\n\t\t</div>\n\t\t<p\n\t\t\tclass="max-w-xl opacity-60 mx-auto after:mx-auto after:mt-3 after:bg-primary-500 after:w-12 after:h-0.5 after:block"\n\t\t>\n\t\t\tEvery once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger\n\t\t\tdrives it to try biting a Steel-type Pokémon.\n\t\t</p>\n\t</div>\n\t<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-16">\n\t\t{#each mockdata as feature}\n\t\t\t<div class="card p-4 space-y-2">\n\t\t\t\t<svelte:component this={feature.icon} class="text-4xl text-primary-500" />\n\t\t\t\t<div class="font-bold after:mt-3 after:bg-primary-500 after:w-12 after:h-0.5 after:block">\n\t\t\t\t\t{feature.title}\n\t\t\t\t</div>\n\t\t\t\t<div class="text-xs opacity-60">\n\t\t\t\t\t{feature.description}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t{/each}\n\t</div>\n</div>\n',
		attributes: {
			title: 'Features with cards',
			category: 'features',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true }
		}
	},
	{
		component: 'FeaturesGrid',
		slug: 'features-grid',
		code: "<script lang=\"ts\">\n\timport IconGauge from 'virtual:icons/tabler/gauge'\n\timport IconUser from 'virtual:icons/tabler/user'\n\timport IconCookie from 'virtual:icons/tabler/cookie'\n\timport IconLock from 'virtual:icons/tabler/lock'\n\timport IconMessage2 from 'virtual:icons/tabler/message-2'\n\tconst mockdata = [\n\t\t{\n\t\t\ttitle: 'Extreme performance',\n\t\t\tdescription:\n\t\t\t\t'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',\n\t\t\ticon: IconGauge\n\t\t},\n\t\t{\n\t\t\ttitle: 'Privacy focused',\n\t\t\tdescription:\n\t\t\t\t'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',\n\t\t\ticon: IconUser\n\t\t},\n\t\t{\n\t\t\ttitle: 'No third parties',\n\t\t\tdescription:\n\t\t\t\t'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',\n\t\t\ticon: IconCookie\n\t\t},\n\t\t{\n\t\t\ticon: IconLock,\n\t\t\ttitle: 'Secure by default',\n\t\t\tdescription:\n\t\t\t\t'Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right'\n\t\t},\n\t\t{\n\t\t\ticon: IconMessage2,\n\t\t\ttitle: '24/7 Support',\n\t\t\tdescription:\n\t\t\t\t'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail'\n\t\t}\n\t]\n</script>\n\n<div class=\"container mx-auto max-w-screen-lg\">\n\t<div class=\"text-center space-y-4\">\n\t\t<div class=\"text-xl md:text-3xl font-bold\">\n\t\t\tIntegrate effortlessly with any technology stack\n\t\t</div>\n\t\t<p class=\"max-w-xl opacity-60 mx-auto\">\n\t\t\tEvery once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger\n\t\t\tdrives it to try biting a Steel-type Pokémon.\n\t\t</p>\n\t</div>\n\t<div class=\"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-16\">\n\t\t{#each mockdata as feature}\n\t\t\t<div class=\"p-4 space-y-2\">\n\t\t\t\t<div class=\"bg-surface-300-600-token p-2 w-fit rounded-token\">\n\t\t\t\t\t<svelte:component this={feature.icon} class=\"text-tertiary-600-300-token\" />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t{feature.title}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-xs opacity-60\">\n\t\t\t\t\t{feature.description}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t{/each}\n\t</div>\n</div>\n",
		attributes: {
			title: 'Features with monotone icons',
			category: 'features',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true }
		}
	},
	{
		component: 'FeaturesTitle',
		slug: 'features-title',
		code: '<script lang="ts">\n\timport IconGauge from \'virtual:icons/tabler/gauge\'\n\timport IconUser from \'virtual:icons/tabler/user\'\n\timport IconCookie from \'virtual:icons/tabler/cookie\'\n\timport IconLock from \'virtual:icons/tabler/lock\'\n\timport IconMessage2 from \'virtual:icons/tabler/message-2\'\n\tconst mockdata = [\n\t\t{\n\t\t\ttitle: \'Extreme performance\',\n\t\t\tdescription:\n\t\t\t\t\'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit\',\n\t\t\ticon: IconGauge\n\t\t},\n\t\t{\n\t\t\ttitle: \'Privacy focused\',\n\t\t\tdescription:\n\t\t\t\t\'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma\',\n\t\t\ticon: IconUser\n\t\t},\n\t\t{\n\t\t\ttitle: \'No third parties\',\n\t\t\tdescription:\n\t\t\t\t\'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves\',\n\t\t\ticon: IconCookie\n\t\t},\n\t\t{\n\t\t\ticon: IconLock,\n\t\t\ttitle: \'Secure by default\',\n\t\t\tdescription:\n\t\t\t\t\'Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right\'\n\t\t}\n\t]\n</script>\n\n<div class="container mx-auto max-w-screen-lg">\n\t<div class="grid grid-cols-1 md:grid-cols-12">\n\t\t<div class="space-y-4 md:col-span-4 p-4">\n\t\t\t<div class="text-xl md:text-3xl font-bold">\n\t\t\t\tIntegrate effortlessly with any technology stack\n\t\t\t</div>\n\t\t\t<p class="max-w-xl opacity-60 mx-auto">\n\t\t\t\tEvery once in a while, you’ll see a Golbat that’s missing some fangs. This happens when\n\t\t\t\thunger drives it to try biting a Steel-type Pokémon.\n\t\t\t</p>\n\t\t\t<button class="btn md:btn-lg variant-filled-tertiary">Get Started</button>\n\t\t</div>\n\t\t<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-8">\n\t\t\t{#each mockdata as feature}\n\t\t\t\t<div class="p-4 space-y-2">\n\t\t\t\t\t<div class="variant-filled-tertiary text-2xl p-2 w-fit rounded-token">\n\t\t\t\t\t\t<svelte:component this={feature.icon} class="" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="font-semibold">\n\t\t\t\t\t\t{feature.title}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="text-sm opacity-60">\n\t\t\t\t\t\t{feature.description}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t{/each}\n\t\t</div>\n\t</div>\n</div>\n',
		attributes: {
			title: 'Features with title',
			category: 'features',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true }
		}
	},
	{
		component: 'ForgotPassword',
		slug: 'forgot-password',
		code: '<header class="text-center py-4">\r\n\t<div class="text-center mb-2 text-3xl font-bold">Forgot your password?</div>\r\n\t<p class="unstyled text-sm md:text-base opacity-50">Enter your email to get a reset link</p>\r\n</header>\r\n\r\n<div class="card p-6 space-y-6 text-left shadow-xl">\r\n\t<label class="label">\r\n\t\t<span>Email</span>\r\n\t\t<input type="email" placeholder="your-email@example.com" class="input" />\r\n\t</label>\r\n\t<button class="btn variant-filled-primary w-full">Reset Password</button>\r\n</div>\r\n',
		attributes: {
			title: 'Forgot Password',
			category: 'authentication',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true, maxWidth: 'md' }
		}
	},
	{
		component: 'HeroBullets',
		slug: 'hero-bullets',
		code: '<script lang="ts">\n\timport IconCheck from \'virtual:icons/tabler/check\'\n\timport image from \'./image.png\'\n</script>\n\n<div class="container mx-auto max-w-screen-lg">\n\t<div class="grid grid-cols-1 md:grid-cols-12">\n\t\t<div class="space-y-4 md:col-span-6 p-4">\n\t\t\t<h1 class="text-3xl md:text-5xl font-bold">\n\t\t\t\tA <span class="relative px-1 md:px-3 py-1 bg-surface-300-600-token">modern</span> Svelte components\n\t\t\t\tlibrary\n\t\t\t</h1>\n\t\t\t<p class="max-w-xl opacity-60">\n\t\t\t\tEvery once in a while, you’ll see a Golbat that’s missing some fangs. This happens when\n\t\t\t\thunger drives it to try biting a Steel-type Pokémon.\n\t\t\t</p>\n\t\t\t<ul class="list-items">\n\t\t\t\t<li>\n\t\t\t\t\t<span\n\t\t\t\t\t\t><IconCheck\n\t\t\t\t\t\t\talt="bullet point"\n\t\t\t\t\t\t\tclass="variant-filled-primary rounded-token p-0.5"\n\t\t\t\t\t\t/></span\n\t\t\t\t\t>\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<b>TypeScript based</b> – build type safe applications, all components and hooks export types\n\t\t\t\t\t</span>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<span\n\t\t\t\t\t\t><IconCheck\n\t\t\t\t\t\t\talt="bullet point"\n\t\t\t\t\t\t\tclass="variant-filled-primary rounded-token p-0.5"\n\t\t\t\t\t\t/></span\n\t\t\t\t\t>\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<b>Free and open source</b> – all packages have MIT license, you can use Mantine in any project\n\t\t\t\t\t</span>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<span\n\t\t\t\t\t\t><IconCheck\n\t\t\t\t\t\t\talt="bullet point"\n\t\t\t\t\t\t\tclass="variant-filled-primary rounded-token p-0.5"\n\t\t\t\t\t\t/></span\n\t\t\t\t\t>\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<b>No annoying focus ring</b> – focus ring will appear only when user navigates with keyboard\n\t\t\t\t\t</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class="flex flex-wrap gap-4">\n\t\t\t\t<button class="btn md:btn-lg  w-full md:w-fit variant-filled-primary">Get Started</button>\n\t\t\t\t<button class="btn md:btn-lg  w-full md:w-fit variant-filled-surface">Source Code</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<img src={image} alt="design components" class="hidden md:block md:col-span-6" />\n\t</div>\n</div>\n\n<style>\n\t.list-items li {\n\t\tdisplay: flex;\n\t\tgap: 16px;\n\t\tpadding: 12px 0px;\n\t}\n</style>\n',
		attributes: {
			title: 'Hero with bullets',
			category: 'hero',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true }
		}
	},
	{
		component: 'HeroImageBackground',
		slug: 'hero-image-background',
		code: '<script lang="ts">\n</script>\n\n<div class="wrapper relative bg-cover bg-center">\n\t<div class="container mx-auto text-left p-4 md:text-center">\n\t\t<div class="absolute opacity-60 bg-black z-[1] inset-0" />\n\t\t<div class="relative z-[1] space-y-6 pt-32 pb-24 text-white">\n\t\t\t<div class="font-bold text-4xl tracking-tight">\n\t\t\t\tAutomated AI code reviews for <span class="text-tertiary-500">any stack</span>\n\t\t\t</div>\n\t\t\t<p class="max-w-lg md:mx-auto">\n\t\t\t\tBuild more reliable software with AI companion. AI is also trained to detect lazy developers\n\t\t\t\twho do nothing and just complain on Twitter.\n\t\t\t</p>\n\t\t\t<div class="flex flex-wrap gap-3 md:space-x-3 md:block">\n\t\t\t\t<button class="btn md:btn-lg w-full md:w-fit variant-filled-tertiary">Get Started</button>\n\t\t\t\t<button class="btn md:btn-lg w-full md:w-fit variant-glass-surface">Live Demo</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<style>\n\t.wrapper {\n\t\tbackground-image: url(https://images.unsplash.com/photo-1573164713988-8665fc963095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80);\n\t}\n</style>\n',
		attributes: {
			title: 'Hero with background image',
			category: 'hero',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true }
		}
	},
	{
		component: 'HeroText',
		slug: 'hero-text',
		code: '<script lang="ts">\n</script>\n\n<div class="container mx-auto text-left p-4 md:text-center">\n\t<div class="relative z-[1] space-y-6 pt-32 pb-24">\n\t\t<div class="font-bold text-4xl tracking-tight">\n\t\t\tAutomated AI <span class="text-tertiary-500">code reviews</span> for any stack\n\t\t</div>\n\t\t<p class="max-w-lg opacity-70 md:mx-auto">\n\t\t\tBuild more reliable software with AI companion. AI is also trained to detect lazy developers\n\t\t\twho do nothing and just complain on Twitter.\n\t\t</p>\n\t\t<div class="flex flex-wrap gap-3 md:space-x-3 md:block">\n\t\t\t<button class="btn md:btn-lg w-full md:w-fit variant-ringed-surface">Book a demo</button>\n\t\t\t<button class="btn md:btn-lg w-full md:w-fit variant-filled-tertiary"\n\t\t\t\t>Purchase a license</button\n\t\t\t>\n\t\t</div>\n\t</div>\n</div>\n',
		attributes: {
			title: 'Hero section with text',
			category: 'hero',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true }
		}
	},
	{
		component: 'NewComponent',
		slug: 'new-component',
		code: '\n<script lang="ts">\n</script>\n',
		attributes: {
			title: 'sdf',
			category: 'navbars',
			author: 'undefined',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true, maxWidth: 'md' }
		}
	},
	{
		component: 'ProgressCard',
		slug: 'progress-card',
		code: '<script>\r\n\timport { ProgressBar } from \'@skeletonlabs/skeleton\'\r\n</script>\r\n\r\n<div class="card p-6">\r\n\t<div class="text-xs opacity-50">MONTHLY GOAL</div>\r\n\t<div class="mb-4 text-2xl">$7.49 / $10.00</div>\r\n\t<ProgressBar value={74.9} height="h-3" meter="bg-tertiary-500-400-token" />\r\n</div>\r\n',
		attributes: {
			title: 'Progress Card',
			category: 'stats',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true, maxWidth: 'md' }
		}
	},
	{
		component: 'ProgressCardColored',
		slug: 'progress-card-colored',
		code: '<script>\r\n\timport { ProgressBar } from \'@skeletonlabs/skeleton\'\r\n</script>\r\n\r\n<div class="card p-6 variant-filled-tertiary">\r\n\t<div class="text-xs opacity-50 text-white">MONTHLY GOAL</div>\r\n\t<div class="mb-4 text-2xl text-white">$7.49 / $10.00</div>\r\n\t<ProgressBar value={74.9} height="h-3" meter="bg-white" />\r\n</div>\r\n',
		attributes: {
			title: 'Progress card with color',
			category: 'stats',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true, maxWidth: 'md' }
		}
	},
	{
		component: 'SocialButtons',
		slug: 'social-buttons',
		code: '<script>\r\n\timport IconBrandGoogle from \'virtual:icons/logos/google-icon\'\r\n\timport IconBrandFacebook from \'virtual:icons/logos/facebook\'\r\n\timport IconBrandTwitter from \'virtual:icons/logos/twitter\'\r\n\timport IconBrandGitHub from \'virtual:icons/logos/github-icon\'\r\n\timport IconBrandDiscord from \'virtual:icons/tabler/brand-discord\'\r\n</script>\r\n\r\n<div class="flex flex-wrap gap-4">\r\n\t<!-- Google Button -->\r\n\t<button class="btn variant-filled-surface gap-2"><IconBrandGoogle />Continue with Google</button>\r\n\r\n\t<!-- Twitter Button -->\r\n\t<button class="btn variant-filled-surface gap-2"><IconBrandTwitter />Follow on Twitter</button>\r\n\r\n\t<!-- Github Button -->\r\n\t<button class="btn bg-black text-white hover:opacity-70 gap-2"\r\n\t\t><IconBrandGitHub class="invert" />Login with Github</button\r\n\t>\r\n\r\n\t<!-- Facebook Button -->\r\n\t<button class="btn text-white gap-2" style="background-color: #4267B2;"\r\n\t\t><IconBrandFacebook />Continue with Facebook</button\r\n\t>\r\n\r\n\t<!-- Discord Button -->\r\n\t<button class="btn gap-2 text-white" style="background-color: #5865F2"\r\n\t\t><IconBrandDiscord />Join Discord community</button\r\n\t>\r\n</div>\r\n',
		attributes: {
			title: 'Social buttons',
			category: 'buttons',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true }
		}
	},
	{
		component: 'StatsGrid',
		slug: 'stats-grid',
		code: "<script lang=\"ts\">\r\n\timport IconReceipt2 from 'virtual:icons/tabler/receipt-2'\r\n\timport IconDiscount2 from 'virtual:icons/tabler/discount-2'\r\n\timport IconCoin from 'virtual:icons/tabler/coin'\r\n\timport IconUserPlus from 'virtual:icons/tabler/user-plus'\r\n\timport IconArrowUpRight from 'virtual:icons/tabler/arrow-up-right'\r\n\timport IconArrowDownRight from 'virtual:icons/tabler/arrow-down-right'\r\n\r\n\tconst mockdata = [\r\n\t\t{\r\n\t\t\ttitle: 'Revenue',\r\n\t\t\ticon: 'receipt',\r\n\t\t\tvalue: '13,456',\r\n\t\t\tdiff: 34\r\n\t\t},\r\n\t\t{\r\n\t\t\ttitle: 'Profit',\r\n\t\t\ticon: 'coin',\r\n\t\t\tvalue: '4,145',\r\n\t\t\tdiff: -13\r\n\t\t},\r\n\t\t{\r\n\t\t\ttitle: 'Coupons usage',\r\n\t\t\ticon: 'discount',\r\n\t\t\tvalue: '745',\r\n\t\t\tdiff: 18\r\n\t\t},\r\n\t\t{\r\n\t\t\ttitle: 'New customers',\r\n\t\t\ticon: 'user',\r\n\t\t\tvalue: '188',\r\n\t\t\tdiff: -30\r\n\t\t}\r\n\t]\r\n</script>\r\n\r\n<div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4\">\r\n\t{#each mockdata as stat}\r\n\t\t<div class=\"card p-6 space-y-1\">\r\n\t\t\t<div class=\"flex justify-between opacity-50 items-center\">\r\n\t\t\t\t<div class=\"font-bold text-xs\">{stat.title.toUpperCase()}</div>\r\n\t\t\t\t<div><IconReceipt2 /></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"flex items-baseline space-x-2 pt-6\">\r\n\t\t\t\t<div class=\"text-2xl font-bold\">{stat.value}</div>\r\n\t\t\t\t<div class={`text-sm flex space-x-1 ${stat.diff > 0 ? 'text-green-600' : 'text-red-600'}`}>\r\n\t\t\t\t\t<div>{stat.diff}%</div>\r\n\t\t\t\t\t{#if stat.diff > 0}\r\n\t\t\t\t\t\t<IconArrowUpRight />\r\n\t\t\t\t\t{:else}\r\n\t\t\t\t\t\t<IconArrowDownRight />\r\n\t\t\t\t\t{/if}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"opacity-50 text-xs\">Compared to previous month</div>\r\n\t\t</div>\r\n\t{/each}\r\n</div>\r\n",
		attributes: {
			title: 'Stats grid',
			category: 'stats',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true }
		}
	},
	{
		component: 'StatsGridIcons',
		slug: 'stats-grid-icons',
		code: "<script lang=\"ts\">\r\n\timport IconArrowUpRight from 'virtual:icons/tabler/arrow-up-right'\r\n\timport IconArrowDownRight from 'virtual:icons/tabler/arrow-down-right'\r\n\r\n\tconst mockdata = [\r\n\t\t{\r\n\t\t\ttitle: 'Revenue',\r\n\t\t\tvalue: '$13,456',\r\n\t\t\tdiff: 34\r\n\t\t},\r\n\t\t{\r\n\t\t\ttitle: 'Profit',\r\n\t\t\tvalue: '$4,145',\r\n\t\t\tdiff: -13\r\n\t\t},\r\n\t\t{\r\n\t\t\ttitle: 'Coupons usage',\r\n\t\t\tvalue: '745',\r\n\t\t\tdiff: 18\r\n\t\t}\r\n\t]\r\n</script>\r\n\r\n<div class=\"grid grid-cols-1 md:grid-cols-3 gap-4\">\r\n\t{#each mockdata as stat}\r\n\t\t<div class=\"card p-6 space-y-1\">\r\n\t\t\t<div class=\"flex justify-between items-center\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"font-bold opacity-50 text-xs\">{stat.title.toUpperCase()}</div>\r\n\t\t\t\t\t<div class=\"text-2xl font-bold\">{stat.value}</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class={`text-3xl ${stat.diff > 0 ? 'text-green-600' : 'text-red-600'}`}>\r\n\t\t\t\t\t<div />\r\n\t\t\t\t\t{#if stat.diff > 0}\r\n\t\t\t\t\t\t<IconArrowUpRight />\r\n\t\t\t\t\t{:else}\r\n\t\t\t\t\t\t<IconArrowDownRight />\r\n\t\t\t\t\t{/if}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\" text-sm pt-6\">\r\n\t\t\t\t<span class={`font-bold ${stat.diff > 0 ? 'text-green-600' : 'text-red-600'}`}>\r\n\t\t\t\t\t{stat.diff}%\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class=\"opacity-50\">\r\n\t\t\t\t\t{stat.diff > 0 ? 'increase' : 'decrease'}\r\n\t\t\t\t\tcompared to previous month</span\r\n\t\t\t\t>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t{/each}\r\n</div>\r\n",
		attributes: {
			title: 'Stats grid with diff icons',
			category: 'stats',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true }
		}
	},
	{
		component: 'StatsRing',
		slug: 'stats-ring',
		code: "<script lang=\"ts\">\r\n\timport IconArrowUpRight from 'virtual:icons/tabler/arrow-up-right'\r\n\timport IconArrowDownRight from 'virtual:icons/tabler/arrow-down-right'\r\n\timport { ProgressRadial } from '@skeletonlabs/skeleton'\r\n\r\n\tconst mockdata = [\r\n\t\t{\r\n\t\t\tlabel: 'Page views',\r\n\t\t\tstats: '456,578',\r\n\t\t\tprogress: 65,\r\n\t\t\tcolor: 'stroke-primary-500',\r\n\t\t\ticon: 'up'\r\n\t\t},\r\n\t\t{\r\n\t\t\tlabel: 'New users',\r\n\t\t\tstats: '2,550',\r\n\t\t\tprogress: 72,\r\n\t\t\tcolor: 'stroke-tertiary-500',\r\n\t\t\ticon: 'up'\r\n\t\t},\r\n\t\t{\r\n\t\t\tlabel: 'Orders',\r\n\t\t\tstats: '4,735',\r\n\t\t\tprogress: 52,\r\n\t\t\tcolor: 'stroke-error-500',\r\n\t\t\ticon: 'down'\r\n\t\t}\r\n\t]\r\n</script>\r\n\r\n<div class=\"grid grid-cols-1 md:grid-cols-3 gap-4\">\r\n\t{#each mockdata as stat}\r\n\t\t<div class=\"card p-6 space-y-1\">\r\n\t\t\t<div class=\"flex space-x-5\">\r\n\t\t\t\t<ProgressRadial value={stat.progress} stroke={125} class=\"h-16 w-16\" meter={stat.color}>\r\n\t\t\t\t\t{#if stat.icon === 'up'}\r\n\t\t\t\t\t\t<IconArrowUpRight />\r\n\t\t\t\t\t{:else}\r\n\t\t\t\t\t\t<IconArrowDownRight />\r\n\t\t\t\t\t{/if}\r\n\t\t\t\t\t<!-- {stat.icon} -->\r\n\t\t\t\t</ProgressRadial>\r\n\t\t\t\t<div class=\"space-y-2\">\r\n\t\t\t\t\t<div class=\"font-bold opacity-50 text-xs\">{stat.label.toUpperCase()}</div>\r\n\t\t\t\t\t<div class=\"text-2xl font-bold\">{stat.stats}</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t{/each}\r\n</div>\r\n",
		attributes: {
			title: 'Stats with ring progress',
			category: 'stats',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true }
		}
	},
	{
		component: 'StatsRingCard',
		slug: 'stats-ring-card',
		code: '<script lang="ts">\n\timport { ProgressRadial } from \'@skeletonlabs/skeleton\'\n\n\tconst mockdata = {\n\t\ttitle: \'Project tasks\',\n\t\tcompleted: 1887,\n\t\ttotal: 2334,\n\t\tstats: [\n\t\t\t{\n\t\t\t\tvalue: 447,\n\t\t\t\tlabel: \'Remaining\'\n\t\t\t},\n\t\t\t{\n\t\t\t\tvalue: 76,\n\t\t\t\tlabel: \'In progress\'\n\t\t\t}\n\t\t]\n\t}\n</script>\n\n<div class="card p-6 flex justify-between">\n\t<div class="space-y-6">\n\t\t<div class="font-bold">{mockdata.title}</div>\n\t\t<div>\n\t\t\t<div>{mockdata.completed}</div>\n\t\t\t<div class="text-sm opacity-70">Completed</div>\n\t\t</div>\n\n\t\t<div class="flex justify-between gap-4">\n\t\t\t{#each mockdata.stats as item}\n\t\t\t\t<div class="">\n\t\t\t\t\t<b>{item.value}</b>\n\t\t\t\t\t<div class="text-sm opacity-70">{item.label}</div>\n\t\t\t\t</div>\n\t\t\t{/each}\n\t\t</div>\n\t</div>\n\t<ProgressRadial\n\t\tvalue={(mockdata.completed / mockdata.total) * 100}\n\t\tstroke={100}\n\t\tclass="h-40 w-40"\n\t>\n\t\t{((mockdata.completed / mockdata.total) * 100).toFixed(0)}%\n\t</ProgressRadial>\n</div>\n',
		attributes: {
			title: 'Stats card with progress',
			category: 'app-cards',
			author: 'imyt',
			withColor: true,
			responsive: true,
			dependencies: [],
			canvas: { center: true, maxWidth: 'sm' }
		}
	}
]
export default components
