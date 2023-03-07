<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton'

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

<div class="text-center mb-10 text-3xl font-bold">Frequently Asked Questions</div>
<Accordion spacing="space-y-3" hover="" autocollapse>
	{#each mockData as item}
		<AccordionItem
			class="bg-surface-50-900-token rounded-container-token p-2 border border-surface-300-600-token"
		>
			<svelte:fragment slot="summary">{item}</svelte:fragment>
			<svelte:fragment slot="content">{placeholder}</svelte:fragment>
		</AccordionItem>
	{/each}
</Accordion>
