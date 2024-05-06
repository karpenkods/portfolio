import { FC } from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { Container, Typography } from '@mui/material'
import { Link } from '@/navigation'

export const About: FC = () => {
  const t = useTranslations('about')
  const locale = useLocale()

  return (
    <Container
      maxWidth="xl"
      sx={{
        my: '24px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px'
      }}
    >
      <Typography variant="h1" fontWeight={500} color="goldenrod">
        {locale === 'ru' ? 'Карпенко Дмитрий' : 'Karpenko Dmitrii'}
      </Typography>
      <Typography variant="h2" fontWeight={500}>
        {t('exp')}
      </Typography>
      <Typography variant="h2" fontWeight={500}>
        {t('details')}
        <Typography variant="h2" fontWeight={500}>
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
