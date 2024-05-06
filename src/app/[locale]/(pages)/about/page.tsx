import { NextPage } from 'next'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

import { Stack } from '@mui/material'

import background from '../../../../../public/background/about-background.jpg'
import { About, HatModel } from '@/components'

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale })

  return {
    title: t('about.title'),
    description: t('seo.description'),
    url: 'https://nextjs.org',
    openGraph: {
      title: t('about.title'),
      description: t('seo.og-description'),
      url: 'https://nextjs.org',
      images: ['/og-image.jpeg']
    },
    twitter: {
      card: 'summary_large_image',
      title: t('about.title'),
      description: t('seo.og-description'),
      site: 'https://nextjs.org',
      images: ['/og-image.jpeg']
    }
  }
}

const Aboutage: NextPage = () => {
  return (
    <Stack position="relative" height="100vh">
      <Image
        priority
        sizes="100vw"
        src={background}
        alt="home-background"
        fill
        style={{ zIndex: -99, objectFit: 'cover' }}
      />
      <Stack position="absolute" zIndex={-9}>
        <HatModel />
      </Stack>
      <About />
    </Stack>
  )
}

export default Aboutage
