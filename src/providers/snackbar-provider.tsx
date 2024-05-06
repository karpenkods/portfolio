'use client'
import { FC, ReactNode } from 'react'
import { SnackbarProvider } from 'notistack'

import { Zoom } from '@mui/material'
import { Snackbar } from '@/components'

export interface ProviderSnackbarProps {
  children: ReactNode
}

export const ProviderSnackbar: FC<ProviderSnackbarProps> = ({ children }) => {
  return (
    <SnackbarProvider hideIconVariant TransitionComponent={Zoom}>
      <Snackbar />
      {children}
    </SnackbarProvider>
  )
}
