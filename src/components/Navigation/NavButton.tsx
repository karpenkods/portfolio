'use client'
import { FC } from 'react'
import { motion } from 'framer-motion'

import { IconButton, Stack, Typography } from '@mui/material'

import { IButtonList } from '@/common'
import { Link } from '@/navigation'

interface INavButtonProps {
  x: string
  y: string
  btn: IButtonList
}

export const NavButton: FC<INavButtonProps> = ({ x, y, btn }) => {
  const MotionStack = motion(Stack)
  const MotionText = motion(Typography)

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1
    }
  }

  return (
    <MotionStack
      variants={item}
      position="absolute"
      top="-20px"
      left="-30px"
      sx={{ transform: `translate(${x}, ${y})` }}
    >
      <MotionStack
        animate={{ rotate: -360 }}
        transition={{ duration: 360, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
      >
        <Link href={btn.link} target={btn.isPath ? '_blank' : '_self'} rel="noopener noreferrer">
          <IconButton>
            <btn.icon sx={{ width: '32px', height: '32px' }} />
            <MotionText
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1, transition: { delay: 0.2 } }}
              fontSize={16}
              color="silver"
              sx={{
                width: '56px',
                textAlign: 'center',
                position: 'absolute',
                bottom: '-32px',
                left: btn.label.length > 6 ? '-8px' : 0,
                padding: '64px 0 0 0',
                whiteSpace: 'nowrap'
              }}
            >
              {btn.label}
            </MotionText>
          </IconButton>
        </Link>
      </MotionStack>
    </MotionStack>
  )
}
