import { getCategoryData } from '$lib/data/categories'
import { getAllComponents, getComponentsByCategory } from '$lib/data/components'
import type { PageServerLoad } from './$types'

export const load = (async ({ params }) => {
	return {
		category: getCategoryData(params.category),
		components: getComponentsByCategory()[params.category],
		allComponents: getAllComponents()
	}
}) satisfies PageServerLoad
