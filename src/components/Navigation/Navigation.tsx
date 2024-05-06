'use client'
import { FC } from 'react'
import { motion } from 'framer-motion'

import { Stack } from '@mui/material'

import { useButtonsList } from '@/common'
import { NavButton } from './NavButton'

export const Navigation: FC = () => {
  const buttonsList = useButtonsList()
  const MotionStack = motion(Stack)
  const angleIncrement = 360 / buttonsList.length

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  }

  return (
    <MotionStack
      animate={{ rotate: 360 }}
      transition={{ duration: 360, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
      position="fixed"
    >
      <MotionStack variants={container} initial="hidden" animate="show">
        {buttonsList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180
          const radius = 'calc(20vw - 1rem)'
          const x = `calc(${radius}*${Math.cos(angleRad)})`
          const y = `calc(${radius}*${Math.sin(angleRad)})`

          return <NavButton key={btn.id} x={x} y={y} btn={btn} />
        })}
      </MotionStack>
    </MotionStack>
  )
}
