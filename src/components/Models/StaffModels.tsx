'use client'
import { FC } from 'react'

import { RenderModel } from './RenderModel'
import { useMediaQueryDown } from '@/common'
import Staff from './models/Staff'

export const StaffModel: FC = () => {
  const isMobile = useMediaQueryDown('md')

  return (
    <RenderModel position={isMobile ? '0' : '-40%'} top={isMobile ? '100px' : '0'}>
      <Staff />
    </RenderModel>
  )
}
