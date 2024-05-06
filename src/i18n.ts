import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => ({
  messages: {
    ...(await import(`../locales/${locale}/home.json`)).default,
    ...(await import(`../locales/${locale}/sound.json`)).default,
    ...(await import(`../locales/${locale}/errors.json`)).default,
    ...(await import(`../locales/${locale}/seo.json`)).default,
    ...(await import(`../locales/${locale}/projects.json`)).default,
    ...(await import(`../locales/${locale}/contacts.json`)).default,
    ...(await import(`../locales/${locale}/validation.json`)).default,
    ...(await import(`../locales/${locale}/about.json`)).default
  }
}))
