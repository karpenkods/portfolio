import { StaticImageData } from 'next/image'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material'

export interface IButtonList {
  id: number
  label: string
  link: string
  icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>
  isPath: boolean
}

export interface IProject {
  id: number
  title: string
  description: string
  icon: string | StaticImageData
  link: string
  code?: string
}
