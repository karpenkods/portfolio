'use client'
import { FC } from 'react'

import { RenderModel } from './RenderModel'
import { useMediaQueryDown } from '@/common'
import Hat from './models/Hat'

export const HatModel: FC = () => {
  const isMobile = useMediaQueryDown('md')

  return (
    <RenderModel position={isMobile ? '0' : '-30%'} top={isMobile ? '250px' : '0'}>
      <Hat />
    </RenderModel>
  )
}
