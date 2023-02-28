// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface Category {
			slug: string
			name: string
			images: { dark: string; light: string }
		}

		interface CategoriesGroup {
			name: string
			categories: Category[]
		}

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
	}
}

export {}
