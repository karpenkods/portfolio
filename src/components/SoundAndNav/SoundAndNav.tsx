'use client'
import { FC, Fragment, useEffect, useRef } from 'react'
import { setCookie } from 'cookies-next'
import Image from 'next/image'
import { useLocale } from 'next-intl'

import { Button, IconButton, Stack } from '@mui/material'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import HomeIcon from '@mui/icons-material/Home'

import { usePathname, useRouter } from '@/navigation'
import { ModalSound } from './ModalSound'
import { useMediaQueryDown } from '@/common'
import Russian from '../../../public/assets/ru.svg'
import English from '../../../public/assets/gb.svg'

interface ISoundProps {
  modalSound?: string
}

export const SoundAndNav: FC<ISoundProps> = ({ modalSound }) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const isMobile = useMediaQueryDown('sm')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const handleToggle = () => {
    if (modalSound === 'on') {
      setCookie('sound', 'off')
      router.refresh()
    } else {
      setCookie('sound', 'on')
      router.refresh()
    }
  }

  const handleChangeLang = (loc: string) => {
    router.push(pathname, { locale: loc })
  }

  useEffect(() => {
    if (modalSound === 'on') {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [modalSound])

  return (
    <Fragment>
      <audio ref={audioRef} loop autoPlay={modalSound === 'on'}>
        <source src={'/audio/birds39-forest-20772.mp3'} type="audio/mpeg" />
      </audio>
      <Stack
        spacing={5}
        alignItems="center"
        position="absolute"
        top={isMobile ? '2%' : '4%'}
        right={isMobile ? '4%' : '3%'}
      >
        <IconButton onClick={handleToggle}>
          {modalSound === 'on' ? (
            <VolumeUpIcon
              sx={{ width: isMobile ? '24px' : '28px', height: isMobile ? '24px' : '28px' }}
            />
          ) : (
            <VolumeOffIcon
              sx={{ width: isMobile ? '24px' : '28px', height: isMobile ? '24px' : '28px' }}
            />
          )}
        </IconButton>
        <Button
          sx={{ padding: 0, minWidth: '54px', height: '54px' }}
          onClick={() => handleChangeLang(locale === 'ru' ? 'en' : 'ru')}
        >
          <Image
            priority
            src={locale === 'en' ? Russian : English}
            width={isMobile ? 24 : 54}
            height={isMobile ? 24 : 54}
            style={{ borderRadius: '50%' }}
            alt=""
          />
        </Button>
        {pathname !== '/' && (
          <IconButton onClick={() => router.push('/')}>
            <HomeIcon
              sx={{ width: isMobile ? '24px' : '28px', height: isMobile ? '24px' : '28px' }}
            />
          </IconButton>
        )}
      </Stack>
      <ModalSound modalSound={modalSound} />
    </Fragment>
  )
}
