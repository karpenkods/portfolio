'use client'
import { FC } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Stack, Typography, Button } from '@mui/material'

import background from '../../../public/background/404.jpg'
import { Link } from '@/navigation'

const NotFound: FC = () => {
  const t = useTranslations('error')

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
      <Stack gap="50px" width="100%" height="100vh" alignItems="center" justifyContent="center">
        <Typography fontSize={64} fontWeight={500} color="silver">
          404
        </Typography>
        <Typography variant={'h1'}>{t('not-found')}</Typography>
        <Link href="/">
          <Button
            sx={{
              borderRadius: '12px',
              border: '2px solid rgba(192, 192, 192, 0.56)',
              '&:hover': {
                backgroundColor: 'transparent',
                backdropFilter: 'blur(5px)'
              }
            }}
            variant="contained"
          >
            {t('go-home')}
          </Button>
        </Link>
      </Stack>
    </Stack>
  )
}

export default NotFound
