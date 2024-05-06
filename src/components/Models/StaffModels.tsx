'use client'
import { FC } from 'react'

import { RenderModel } from './RenderModel'
import Staff from './models/Staff'

export const StaffModel: FC = () => {
  return (
    <RenderModel position={'-40%'}>
      <Staff />
    </RenderModel>
  )
}
