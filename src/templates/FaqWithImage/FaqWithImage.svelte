<script lang="ts">
	import { Accordion, AccordionItem, filter } from '@skeletonlabs/skeleton'
	import image from './image.svg'
	const mockData = [
		'How can I reset my password?',
		'Can I create more than one account?',
		'How can I subscribe to monthly newsletter?',
		'Do you store credit card information securely?',
		'What payment systems do you work with?'
	]
	const placeholder =
		'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.'
</script>

<div class="grid items-center grid-cols-1 md:grid-cols-2 md:gap-4">
	<img class="hidden md:block" src={image} alt="FAQ" use:filter={'#BlueNight'} />
	<div class="">
		<div class="mb-4 text-2xl font-bold">Frequently Asked Questions</div>
		<Accordion
			spacing="space-y-1"
			hover=""
			regionControl="p-4"
			regionPanel="bg-surface-100-800-token text-sm !rounded-t-none"
		>
			{#each mockData as item, i}
				<AccordionItem
					class="bg-surface-50-900-token rounded-container-token border border-surface-200-700-token"
					open={i == 0}
				>
					<svelte:fragment slot="summary">{item}</svelte:fragment>
					<svelte:fragment slot="content">{placeholder}</svelte:fragment>
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
</div>
