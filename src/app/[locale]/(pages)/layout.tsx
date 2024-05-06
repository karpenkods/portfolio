import { FC, ReactNode } from 'react'
import { cookies } from 'next/headers'

import { Stack } from '@mui/material'

import { FireFliesBackground, SoundAndNav } from '@/components'

export interface HomeLayoutProps {
  children: ReactNode
  params: { locale: string }
}

const HomeLayout: FC<HomeLayoutProps> = async ({ children }) => {
  const cookie = cookies()
  const modalSound = cookie.get('sound')

  return (
    <Stack>
      <FireFliesBackground />
      <SoundAndNav modalSound={modalSound?.value} />
      {children}
    </Stack>
  )
}

export default HomeLayout
