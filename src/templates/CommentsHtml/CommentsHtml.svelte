<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton'

	const mockdata = {
		postedAt: '10 minutes ago',
		body: '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
		author: {
			name: 'Aarav Gupta',
			image:
				'https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?w=740&t=st=1677487980~exp=1677488580~hmac=739386c6e0e7e2bbd4b5d1e33828371ed5aa6df08e8bcc842a216a5bb0ab0de5'
		}
	}
</script>

<div class="card p-6">
	<div class="flex gap-4 items-start">
		<Avatar src={mockdata.author.image} class="flex-none" />
		<div class="space-y-1">
			<div class="">{mockdata.author.name}</div>
			<div class="text-sm opacity-60">{mockdata.postedAt}</div>
			<div class="pt-4">
				{@html mockdata.body}
			</div>
		</div>
	</div>
</div>
