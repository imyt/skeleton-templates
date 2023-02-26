import { localStorageStore } from '@skeletonlabs/skeleton'
import { writable, type Writable } from 'svelte/store'

export const storePreviewCode: Writable<Record<string, string>> = writable({
	'authentication-form': 'preview'
})

// Persists select preset theme
export const storeTheme: Writable<string> = localStorageStore('storeTheme', 'skeleton')
