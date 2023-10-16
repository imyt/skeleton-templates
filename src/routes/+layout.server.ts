import type { LayoutServerLoad } from './$types'
// import { VERCEL_ENV } from '$env/static/private';
export const prerender = true
export const ssr = false

export const load: LayoutServerLoad = async ({ cookies }) => {
	let theme = cookies.get('theme')
	// If no theme, set theme to skeleton
	if (!theme) {
		cookies.set('theme', 'skeleton', { path: '/' })
		theme = 'skeleton'
	}
	// // Imports theme as a string
	// const modules = import.meta.glob(`../../node_modules/@skeletonlabs/skeleton/themes/*.css`, {
	// 	as: 'raw'
	// })
	// return {
	// 	currentTheme: modules[`../../node_modules/@skeletonlabs/skeleton/themes/theme-${theme}.css`]()
	// }
}
