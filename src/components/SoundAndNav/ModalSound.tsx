'use client'
import { FC, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'
import { setCookie } from 'cookies-next'

import { Button, Dialog, DialogTitle, Stack } from '@mui/material'

import { useMediaQueryDown } from '@/common'

interface IModalSoundProps {
  modalSound?: string
}

export const ModalSound: FC<IModalSoundProps> = ({ modalSound }) => {
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations('modal')
  const isMobile = useMediaQueryDown('sm')

  const cookieModalSoundOn = () => {
    setCookie('sound', 'on')
    router.refresh()
  }
  const cookieModalSoundOff = () => {
    setCookie('sound', 'off')
    router.refresh()
  }

  useEffect(() => {
    const language = navigator.languages ? navigator.languages[0] : navigator.language
    if (language !== 'ru') router.push(pathname, { locale: 'en' })
  }, [pathname, router])

  return (
    <Dialog open={!modalSound}>
      <DialogTitle
        color="silver"
        fontSize={isMobile ? '18px' : '24px'}
        sx={{ padding: isMobile ? '16px' : undefined, whiteSpace: 'nowrap' }}
      >
        {t('on-sound')}
      </DialogTitle>
      <Stack direction="row" spacing={5} justifyContent="center" padding="16px" position="relative">
        <Button onClick={cookieModalSoundOn}>{t('button-on')}</Button>
        <Button onClick={cookieModalSoundOff}>{t('button-off')}</Button>
      </Stack>
    </Dialog>
  )
}
