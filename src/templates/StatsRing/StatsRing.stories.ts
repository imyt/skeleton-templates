
import type { Meta, StoryObj } from '@storybook/svelte'
import attributes from './attributes.json'
import StoryWrapper from '../../lib/components/StoryWrapper.svelte'
import StatsRing from './StatsRing.svelte';

const meta = {
	title: 'StatsRing',
	component: StoryWrapper,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<StoryWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		attributes,
		component: StatsRing
	}
}
