'use client'
import { FC } from 'react'
import { motion } from 'framer-motion'

import { Stack } from '@mui/material'

import { useButtonsList, useMediaQueryDown } from '@/common'
import { NavButton } from './NavButton'
import { NavButtonMobile } from './NavButtonMobile'

export const Navigation: FC = () => {
  const buttonsList = useButtonsList()
  const MotionStack = motion(Stack as any)
  const angleIncrement = 360 / buttonsList.length
  const isTablet = useMediaQueryDown('lg')
  const isMobile = useMediaQueryDown('md')

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  }

  return isMobile ? (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="85%"
      position="absolute"
    >
      <Stack gap="64px">
        {buttonsList
          .filter((btn) => btn.id % 2 !== 0)
          .map((btn) => (
            <NavButtonMobile key={btn.id} btn={btn} />
          ))}
      </Stack>
      <Stack gap="64px">
        {buttonsList
          .filter((btn) => btn.id % 2 === 0)
          .map((btn) => (
            <NavButtonMobile key={btn.id} btn={btn} />
          ))}
      </Stack>
    </Stack>
  ) : (
    <MotionStack
      animate={{ rotate: 360 }}
      transition={{ duration: 360, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
      position="fixed"
    >
      <MotionStack variants={container} initial="hidden" animate="show">
        {buttonsList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180
          const radius = isTablet ? '35vw' : 'calc(20vw - 1rem)'
          const x = `calc(${radius}*${Math.cos(angleRad)})`
          const y = `calc(${radius}*${Math.sin(angleRad)})`

          return <NavButton key={btn.id} x={x} y={y} btn={btn} />
        })}
      </MotionStack>
    </MotionStack>
  )
}
