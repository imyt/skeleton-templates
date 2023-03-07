import fs from 'fs'
import path from 'path'
import prettier from 'prettier'

interface CanvasAttributes {
	responsive?: boolean
	withColor?: boolean
	dimmed?: boolean
	author: string
	canvas: { center: boolean; maxWidth?: string }
	category: string
	dependencies: string[]
	title: string
	props?: Record<string, unknown>
	changelog?: string
}

interface UiComponent {
	component: string
	slug: string
	code: string
	attributes: CanvasAttributes
}

function convertCase(string: string) {
	const splitted = string
		.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
		.toLowerCase()
		.split(' ')
	return splitted.join('-')
}

export function getAllComponents(): UiComponent[] {
	const rootFolder = path.join('src', 'templates')
	const paths = fs.readdirSync(rootFolder)

	return paths
		.map((componentName) => {
			const componentDirectory = path.join(rootFolder, componentName)
			const componentPath = path.join(componentDirectory, `${componentName}.svelte`)
			const componentAttributes = path.join(componentDirectory, 'attributes.json')

			if (fs.lstatSync(componentDirectory).isDirectory()) {
				const code = fs.readFileSync(componentPath, 'utf8')
				const attributes = JSON.parse(fs.readFileSync(componentAttributes, 'utf8'))
				return {
					component: componentName,
					slug: convertCase(componentName),
					code,
					attributes
				}
			}

			return null
		})
		.filter((c) => c) as UiComponent[]
}

export function buildComponentIndex() {
	const dataPath = path.join(path.resolve(), './src/lib/data')

	let fileContent = `
	const components: App.UiComponent[] = ${JSON.stringify(getAllComponents())}
	export default components
	`
	fileContent = prettier.format(fileContent, {
		semi: false,
		singleQuote: true,
		trailingComma: 'none',
		useTabs: true,
		printWidth: 100,
		parser: 'typescript'
	})
	fs.writeFileSync(path.join(dataPath, `components.ts`), fileContent)
}

buildComponentIndex()
