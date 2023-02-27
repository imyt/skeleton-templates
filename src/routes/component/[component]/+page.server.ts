import { getAllComponents } from '$lib/data/components'
import type { PageServerLoad } from './$types'
export const prerender = true
export const ssr = false

export const load = (async ({ params }) => {
	const allComponents = getAllComponents()
	return { props: allComponents.find((component) => component.slug === params.component) }
}) satisfies PageServerLoad
