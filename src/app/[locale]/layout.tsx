import { FC, ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { Montserrat } from 'next/font/google'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { Analytics } from '@vercel/analytics/next'

import { locales } from '@/navigation'
import { ProviderSnackbar, ProviderStore, ProviderTheme } from '@/providers'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap'
})

export interface Props {
  children: ReactNode
  params: { locale: string }
}

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale })

  return {
    icons: '/d.png',
    title: t('seo.title'),
    description: t('seo.description'),
    url: 'https://portfolio-delta-pearl-80.vercel.app',
    images: ['/og-image.jpeg'],
    openGraph: {
      title: t('seo.og-title'),
      description: t('seo.og-description'),
      url: 'https://portfolio-delta-pearl-80.vercel.app',
      images: ['/og-image.jpeg']
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.og-title'),
      description: t('seo.og-description'),
      site: 'https://portfolio-delta-pearl-80.vercel.app',
      images: ['/og-image.jpeg']
    }
  }
}

const LocaleLayout: FC<Props> = ({ children, params: { locale } }) => {
  if (!locales.includes(locale)) {
    notFound()
  }

  const messages = useMessages()

  return (
    <html lang={locale}>
      <head></head>
      <body className={montserrat.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ProviderStore>
            <ProviderSnackbar>
              <AppRouterCacheProvider>
                <ProviderTheme>
                  {children}
                  <Analytics />
                </ProviderTheme>
              </AppRouterCacheProvider>
            </ProviderSnackbar>
          </ProviderStore>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
