import { NextPage } from 'next'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

import { Stack } from '@mui/material'

import background from '../../../../../public/background/contact-background.jpg'
import { Contacts } from '@/components'

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale })

  return {
    title: t('contacts.title'),
    description: t('seo.description'),
    url: 'https://portfolio-delta-pearl-80.vercel.app/contacts',
    openGraph: {
      title: t('contacts.title'),
      description: t('seo.og-description'),
      url: 'https://portfolio-delta-pearl-80.vercel.app/contacts',
      images: ['/og-image.jpeg']
    },
    twitter: {
      card: 'summary_large_image',
      title: t('contacts.title'),
      description: t('seo.og-description'),
      site: 'https://portfolio-delta-pearl-80.vercel.app/contacts',
      images: ['/og-image.jpeg']
    }
  }
}

const ContactsPage: NextPage = () => {
  return (
    <Stack position="relative" height="100vh" overflow="hidden">
      <Image
        priority
        sizes="100vw"
        src={background}
        alt="home-background"
        fill
        style={{ zIndex: -99, objectFit: 'cover' }}
      />
      <Contacts />
    </Stack>
  )
}

export default ContactsPage
