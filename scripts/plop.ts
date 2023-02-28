import fs from 'fs'
import path from 'path'
import chalk from 'chalk'

const name = process.argv[2]

const componentPath = path.join(path.resolve(), './src/templates', name)

if (!name) {
	process.stdout.write(chalk.red`Component name is required\n`)
	process.exit(1)
}

if (fs.existsSync(componentPath)) {
	process.stdout.write(chalk.red`Component already exists\n`)
	process.exit(1)
}

const component = `
<script lang="ts">
</script>
<div class="card p-6">
	<div class="text-xs opacity-50">MONTHLY GOAL</div>
	<div class="mb-4 text-2xl">$7.49 / $10.00</div>
</div>
`

const attributes = `{
  "title": "",
  "category": "",
  "author": "imyt",
  "withColor": true,
  "responsive": true,
  "dependencies": [],
  "canvas": {
    "center": true,
    "maxWidth": "md"
  }
}
`

const story = `
import type { Meta, StoryObj } from '@storybook/svelte'
import attributes from './attributes.json'
import StoryWrapper from '../../lib/components/StoryWrapper.svelte'
import ${name} from './${name}.svelte';

const meta = {
	title: '${name}',
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
		component: ${name}
	}
}
`

// const story = `
// import { storiesOf } from '@storybook/react';
// import attributes from './attributes.json';
// import { StoryWrapper } from '../../src/components/StoryWrapper/StoryWrapper';
// import { ${name} } from './${name}';

// storiesOf('${name}', module).add('${name}', () => (
//   <StoryWrapper attributes={attributes} component={${name}} />
// ));
// `

fs.mkdirSync(componentPath)
fs.writeFileSync(path.join(componentPath, `${name}.svelte`), component)
// fs.writeFileSync(path.join(componentPath, `${name}.stories.ts`), story)
fs.writeFileSync(path.join(componentPath, 'attributes.json'), attributes)

process.stdout.write(chalk.cyan`Component ${name} created\n`)
process.exit(0)
