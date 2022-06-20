import { writable } from 'svelte/store'

export const currentCountry = writable('mx')
export const currentCategory = writable('general')