'use client'
import { Stack } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'

interface IFireflies {
  id: number
  top: string
  left: string
  animationDuration: string
}

export const FireFliesBackground: FC = () => {
  const [fireflies, setFireflies] = useState<IFireflies[]>([])

  const createFirefly = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 3}s`
  })

  useEffect(() => {
    const addFireflyPeriodically = () => {
      const newFirefly = createFirefly()
      setFireflies((currentFireflies) => [...currentFireflies.slice(-16), newFirefly])
    }

    const interval = setInterval(addFireflyPeriodically, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Stack position="fixed" left={0} top={0} width="100%" height="100%">
      {fireflies.map((firefly) => (
        <Stack
          position="absolute"
          top={firefly.top}
          left={firefly.left}
          width="15px"
          height="15px"
          borderRadius="50%"
          key={firefly.id}
          sx={{
            backgroundImage:
              'radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 250, 0.5) 0px, rgba(192, 192, 192, 0) 100%)',
            animation: `move ${firefly.animationDuration} infinite alternate`,
            '@keyframes move': {
              '0%': {
                transform: 'translate(0, 0)'
              },
              '100%': {
                transform: 'translate(100%, 100%)'
              }
            }
          }}
        />
      ))}
    </Stack>
  )
}
