'use client'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

import { Container, IconButton, Stack, Typography } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'
import CallIcon from '@mui/icons-material/Call'

import { useMediaQueryDown } from '@/common'
import { Form } from './Form'
import { Link } from '@/navigation'

export const Contacts: FC = () => {
  const t = useTranslations('contacts')
  const MotionButton = motion(IconButton)
  const MotionStack = motion(Stack)
  const isMobile = useMediaQueryDown('sm')
  const isMobileBig = useMediaQueryDown('md')

  const buttonLeft = {
    hidden: { opacity: 0, x: -200 },
    show: {
      opacity: 1,
      x: 0
    }
  }

  const buttonRight = {
    hidden: { opacity: 0, x: 200 },
    show: {
      opacity: 1,
      x: 0
    }
  }

  const item = {
    hidden: { opacity: 0, y: 150 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 1
      }
    }
  }

  const handleCallClick = () => {
    window.location.href = 'tel:+79283149041'
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: isMobileBig ? '96px' : '24px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
        overflow: 'auto'
      }}
    >
      <Typography
        fontSize={isMobileBig ? '36px' : '48px'}
        fontWeight={500}
        color="silver"
        textAlign="center"
      >
        {t('title')}
      </Typography>
      <Typography
        fontSize={isMobile ? '18px' : '24px'}
        fontWeight={500}
        color="silver"
        textAlign="center"
      >
        {t('question')}
      </Typography>
      <Stack direction="row" gap="32px">
        <Link href="https://t.me/karpenkods" target="_blank" rel="noopener noreferrer">
          <MotionButton variants={buttonLeft} initial="hidden" animate="show">
            <TelegramIcon
              sx={{ width: isMobile ? '24px' : '32px', height: isMobile ? '24px' : '32px' }}
            />
          </MotionButton>
        </Link>
        <MotionButton
          onClick={handleCallClick}
          variants={buttonRight}
          initial="hidden"
          animate="show"
        >
          <CallIcon
            sx={{ width: isMobile ? '24px' : '32px', height: isMobile ? '24px' : '32px' }}
          />
        </MotionButton>
      </Stack>
      <MotionStack variants={item} initial="hidden" animate="show">
        <Form />
      </MotionStack>
    </Container>
  )
}
