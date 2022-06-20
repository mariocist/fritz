import { writable } from 'svelte/store'

export const currentCountry = writable('us')
export const currentCategory = writable('general')