import { countComponentsByCategory, getAllComponents } from '$lib/data'
import type { Actions, PageServerLoad } from './$types'
export const prerender = false

export const actions: Actions = {
	// This action is called when the user clicks the theme button
	setTheme: async ({ cookies, request }) => {
		const formData = await request.formData()
		const theme = formData.get('theme')?.toString() ?? 'skeleton'
		// Sets the selected theme to the cookie
		cookies.set('theme', theme, { path: '/' })
		return { theme }
	}
}

export const load = (async ({ params }) => {
	return {
		componentsCountByCategory: countComponentsByCategory(),
		allComponents: getAllComponents()
	}
}) satisfies PageServerLoad
