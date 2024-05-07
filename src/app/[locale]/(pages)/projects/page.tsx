import { NextPage } from 'next'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

import { Stack } from '@mui/material'

import background from '../../../../../public/background/projects-bg.jpg'
import { Projects, StaffModel } from '@/components'

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale })

  return {
    title: t('projects.title'),
    description: t('seo.description'),
    url: 'https://portfolio-delta-pearl-80.vercel.app/projects',
    openGraph: {
      title: t('projects.title'),
      description: t('seo.og-description'),
      url: 'https://portfolio-delta-pearl-80.vercel.app/projects',
      images: ['/og-image.jpeg']
    },
    twitter: {
      card: 'summary_large_image',
      title: t('projects.title'),
      description: t('seo.og-description'),
      site: 'https://portfolio-delta-pearl-80.vercel.app/projects',
      images: ['/og-image.jpeg']
    }
  }
}

const ProjectsPage: NextPage = () => {
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
      <Projects />
      <Stack position="absolute" zIndex={-9}>
        <StaffModel />
      </Stack>
    </Stack>
  )
}

export default ProjectsPage
