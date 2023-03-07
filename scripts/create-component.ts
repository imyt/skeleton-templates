// Run `npm start` to start the demo
import fs from 'fs'
import path from 'path'
import { intro, outro, confirm, select, spinner, isCancel, cancel, text } from '@clack/prompts'
import { setTimeout as sleep } from 'node:timers/promises'
import color from 'picocolors'
import { CATEGORIES } from '../src/lib/data/categories'
import { buildComponentIndex } from './build-component-index'

const TEMPLATE_DIR = './src/templates'

const getComponentPath = (name) => path.join(path.resolve(), TEMPLATE_DIR, name)

const COMPONENT_PAGE = `
<script lang="ts">
</script>
`

const getAttributesJson = (title: string, category: string, author: string) => `{
    "title": "${title}",
    "category": "${category}",
    "author": "${author}",
    "withColor": true,
    "responsive": true,
    "dependencies": [],
    "canvas": {
      "center": true,
      "maxWidth": "md"
    }
  }
  `

const createFiles = (name: string, title: string, category: string, author: string) => {
	const componentPath = getComponentPath(name)
	fs.mkdirSync(componentPath)
	fs.writeFileSync(path.join(componentPath, `${name}.svelte`), COMPONENT_PAGE)
	fs.writeFileSync(
		path.join(componentPath, 'attributes.json'),
		getAttributesJson(title, category, author)
	)
}

async function main() {
	console.log()
	intro(color.inverse(' Create New Component '))

	const name = await text({
		message: 'What is the component name? (use TitleCase. e.g., AuthenticationForm)',
		placeholder: 'NewComponent',
		// initialValue: 'NewComponent',
		validate(value) {
			if (value.length === 0) {
				return 'Component name can not be blank'
			}
			if (fs.existsSync(getComponentPath(value))) {
				return `${value} component already exists`
			}
		}
	})

	if (isCancel(name)) {
		cancel('Operation cancelled')
		return process.exit(0)
	}

	const title = await text({
		message: 'Add a title for the component',
		validate(value) {
			if (value.length === 0) return `Title is required`
		}
	})

	if (isCancel(title)) {
		cancel('Operation cancelled')
		return process.exit(0)
	}

	const categoryGroup = await select({
		message: 'Pick a category group',
		options: CATEGORIES.map((group) => {
			return { value: group.name, label: group.namme }
		})
	})

	if (isCancel(categoryGroup)) {
		cancel('Operation cancelled')
		return process.exit(0)
	}

	const category = await select<any, string>({
		message: 'Pick a category group',
		options: CATEGORIES.filter((group) => group.name === categoryGroup)[0].categories.map(
			(category) => {
				return { value: category.slug, label: category.name }
			}
		)
	})

	if (isCancel(category)) {
		cancel('Operation cancelled')
		return process.exit(0)
	}

	const author = await text({
		message: 'Enter your Github ID'
	})

	if (isCancel(author)) {
		cancel('Operation cancelled')
		return process.exit(0)
	}

	const s = spinner()
	s.start('Creating files')

	createFiles(name, title, category, author)

	s.stop('Files created')

	s.start('Updating index')

	buildComponentIndex()

	s.stop('Index updated')

	outro(`Component ${name} created at ${TEMPLATE_DIR}/${name}/${name}.svelte. Start editing!`)

	await sleep(1000)
}

main().catch(console.error)
