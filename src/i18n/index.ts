import en from './en.json';
import ru from './ru.json';

export const locales = ['en', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';
export const ui = { ru, en };
export type Messages = typeof ru;

export function isLocale(value: string | undefined): value is Locale {
	return locales.includes(value as Locale);
}
