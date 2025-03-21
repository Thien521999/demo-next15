export type Locale = (typeof locales)[number]

export const locales = ['ar', 'zh', 'en', 'de', 'he', 'es']
export const defaultLocale: Locale = 'en'
