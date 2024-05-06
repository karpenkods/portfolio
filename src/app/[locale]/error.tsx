'use client'
import { FC, useEffect } from 'react'
import { useTranslations } from 'next-intl'

import { Stack, Typography, Button } from '@mui/material'

import { useMediaQueryDown } from '@/common'

export interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
  const t = useTranslations()
  const isMobile = useMediaQueryDown('md')

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Stack gap="50px" width="100%" height="100vh" alignItems="center" justifyContent="center">
      <Typography variant={isMobile ? 'h1' : 'h3'}>{t('error.problem')}</Typography>
      <Button onClick={() => reset()}>{t('error.reset')}</Button>
    </Stack>
  )
}

export default Error
