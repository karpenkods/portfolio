import { NextPage } from 'next'
import Image from 'next/image'
import { cookies } from 'next/headers'

import { Stack } from '@mui/material'

import background from '../../../../public/background/home-bg.png'
import { Navigation, WizardModel } from '@/components'

const HomePage: NextPage = () => {
  const cookie = cookies()
  const sound = cookie.get('sound')

  return (
    <Stack alignItems="center" justifyContent="center" position="relative" height="100vh">
      <Image
        priority
        sizes="100vw"
        src={background}
        alt="home-background"
        fill
        style={{ zIndex: -99, objectFit: 'cover' }}
      />
      {sound && (
        <>
          <Navigation />
          <WizardModel />
        </>
      )}
    </Stack>
  )
}

export default HomePage
