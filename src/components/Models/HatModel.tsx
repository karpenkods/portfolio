'use client'
import { FC } from 'react'

import { RenderModel } from './RenderModel'
import Hat from './models/Hat'

export const HatModel: FC = () => {
  return (
    <RenderModel position={'-30%'}>
      <Hat />
    </RenderModel>
  )
}
