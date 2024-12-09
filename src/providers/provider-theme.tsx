import { ReactNode } from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { theme } from '@/styles'

export interface ProviderThemeProps {
  children: ReactNode
}

export const ProviderTheme: any = async ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
