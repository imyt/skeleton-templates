<script lang="ts">
	import IconCreditCard from 'virtual:icons/tabler/credit-card'
	import IconBuildingBank from 'virtual:icons/tabler/building-bank'
	import IconRepeat from 'virtual:icons/tabler/repeat'
	import IconReceiptRefund from 'virtual:icons/tabler/receipt-refund'
	import IconReceipt from 'virtual:icons/tabler/receipt'
	import IconReceiptTax from 'virtual:icons/tabler/receipt-tax'
	import IconReport from 'virtual:icons/tabler/report'
	import IconCoin from 'virtual:icons/tabler/coin'
	import IconCashBanknote from 'virtual:icons/tabler/cash-banknote'
	import type { CssClasses } from '@skeletonlabs/skeleton'
	const mockdata: {
		title: string
		icon: typeof IconCreditCard
		color: CssClasses
	}[] = [
		{ title: 'Credit cards', icon: IconCreditCard, color: 'text-violet-500' },
		{ title: 'Banks nearby', icon: IconBuildingBank, color: 'text-indigo-500' },
		{ title: 'Transfers', icon: IconRepeat, color: 'text-blue-500' },
		{ title: 'Refunds', icon: IconReceiptRefund, color: 'text-green-500' },
		{ title: 'Receipts', icon: IconReceipt, color: 'text-teal-500' },
		{ title: 'Taxes', icon: IconReceiptTax, color: 'text-cyan-500' },
		{ title: 'Reports', icon: IconReport, color: 'text-pink-500' },
		{ title: 'Payments', icon: IconCoin, color: 'text-red-500' },
		{ title: 'Cashback', icon: IconCashBanknote, color: 'text-orange-500' }
	]
</script>

<div class="card p-6 space-y-4">
	<div class="flex justify-between items-center">
		<b>Services</b>
		<a href="#actions-grid" class="unstyled text-xs hover:underline">+21 other services</a>
	</div>
	<div class="grid grid-cols-3 gap-4">
		{#each mockdata as item}
			<div
				class="btn flex flex-col gap-2 bg-surface-200-700-token rounded-container-token py-4 hover:scale-105 hover:shadow-md hover:cursor-pointer"
			>
				<svelte:component this={item.icon} class={`text-2xl ${item.color}`} />
				<div class="text-xs">{item.title}</div>
			</div>
		{/each}
	</div>
</div>
