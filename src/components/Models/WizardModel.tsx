'use client'
import { FC } from 'react'

import { RenderModel } from './RenderModel'
import Wizard from './models/Wizard'

export const WizardModel: FC = () => {
  return (
    <RenderModel>
      <Wizard />
    </RenderModel>
  )
}
