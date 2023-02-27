import { countComponentsByCategory, getAllComponents } from '$lib/data/components'
import type { PageLoad } from './$types'

export const load = (async () => {
	return {
		componentsCountByCategory: countComponentsByCategory(),
		allComponents: getAllComponents()
	}
}) satisfies PageLoad
