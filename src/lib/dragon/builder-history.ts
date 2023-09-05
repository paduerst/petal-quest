import { writable } from 'svelte/store';

export const dragonBuilderHistory = writable<string[]>([]);
