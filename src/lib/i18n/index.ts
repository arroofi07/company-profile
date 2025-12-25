import { writable, derived, get } from 'svelte/store';
import { browser } from '$app/environment';
import { id } from './translations/id';
import { en } from './translations/en';

export type Locale = 'id' | 'en';
export type Translations = typeof id;

const translations: Record<Locale, Translations> = { id, en };

// Get initial locale from localStorage or default to 'id'
function getInitialLocale(): Locale {
	if (browser) {
		const saved = localStorage.getItem('locale') as Locale | null;
		if (saved && (saved === 'id' || saved === 'en')) {
			return saved;
		}
	}
	return 'id';
}

// Writable store for current locale
export const currentLocale = writable<Locale>(getInitialLocale());

// Derived store for translations
export const t = derived(currentLocale, ($locale) => translations[$locale]);

// Function to set locale
export function setLocale(locale: Locale): void {
	currentLocale.set(locale);
	if (browser) {
		localStorage.setItem('locale', locale);
	}
}

// Function to toggle locale
export function toggleLocale(): void {
	currentLocale.update((current) => {
		const newLocale = current === 'id' ? 'en' : 'id';
		if (browser) {
			localStorage.setItem('locale', newLocale);
		}
		return newLocale;
	});
}
