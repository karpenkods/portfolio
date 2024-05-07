'use client'
import { FC } from 'react'

import { IconButton, Typography } from '@mui/material'

import { IButtonList } from '@/common'
import { Link } from '@/navigation'

interface INavButtonMobileProps {
  btn: IButtonList
}

export const NavButtonMobile: FC<INavButtonMobileProps> = ({ btn }) => {
  return (
    <Link href={btn.link} target={btn.isPath ? '_blank' : '_self'} rel="noopener noreferrer">
      <IconButton>
        <btn.icon sx={{ width: '32px', height: '32px', fill: 'goldenrod' }} />
        <Typography
          fontSize={16}
          color="goldenrod"
          sx={{
            width: '56px',
            textAlign: 'center',
            position: 'absolute',
            bottom: '-32px',
            left: btn.label.length >= 6 ? '-8px' : 0,
            padding: '64px 0 0 0',
            whiteSpace: 'nowrap'
          }}
        >
          {btn.label}
        </Typography>
      </IconButton>
    </Link>
  )
}
