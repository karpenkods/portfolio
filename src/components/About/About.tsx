'use client'
import { FC } from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { Container, Typography } from '@mui/material'
import { Link } from '@/navigation'
import { useMediaQueryDown } from '@/common'

export const About: FC = () => {
  const t = useTranslations('about')
  const locale = useLocale()
  const isMobile = useMediaQueryDown('md')

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: isMobile ? '96px' : '24px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px'
      }}
    >
      <Typography
        fontSize={isMobile ? '36px' : '48px'}
        fontWeight={500}
        color="goldenrod"
        textAlign="center"
      >
        {locale === 'ru' ? 'Карпенко Дмитрий' : 'Karpenko Dmitrii'}
      </Typography>
      <Typography fontSize={isMobile ? '18px' : '24px'} fontWeight={500} color="silver">
        {t('exp')}
      </Typography>
      <Typography fontSize={isMobile ? '18px' : '24px'} fontWeight={500} color="silver">
        {t('details')}
        <Typography fontSize={isMobile ? '18px' : '24px'} fontWeight={500} color="silver">
          {t('work')}
        </Typography>
      </Typography>
      <Link
        href={locale === 'ru' ? '/resume_ru.pdf' : '/resume_en.pdf'}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', marginTop: '-20px' }}
      >
        <Typography
          fontSize={32}
          fontWeight={500}
          sx={{
            color: 'goldenrod',
            cursor: 'pointer',
            transition: '0.3s',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        >
          {locale === 'ru' ? 'резюме' : 'resume'}
        </Typography>
      </Link>
    </Container>
  )
}
