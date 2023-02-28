import components from './components'

function convertCase(string: string) {
	const splitted = string
		.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
		.toLowerCase()
		.split(' ')
	return splitted.join('-')
}

export function getAllComponents(): App.UiComponent[] {
	return components
}

export function getComponentsByCategory() {
	return getAllComponents().reduce<Record<string, App.UiComponent[]>>((acc, component) => {
		if (!(component.attributes.category in acc)) {
			acc[component.attributes.category] = []
		}
		acc[component.attributes.category].push(component)
		return acc
	}, {})
}

export function countComponentsByCategory() {
	return getAllComponents().reduce<Record<string, number>>((acc, component) => {
		if (!(component.attributes.category in acc)) {
			acc[component.attributes.category] = 0
		}
		acc[component.attributes.category] += 1
		return acc
	}, {})
}

export function getComponentsByChangelog(changelogId: string) {
	return getAllComponents().filter((component) => component.attributes.changelog === changelogId)
}

export function getAllChangelogs() {
	return Array.from(
		new Set(getAllComponents().map((component) => component.attributes.changelog))
	).filter((c) => c)
}
