import { FC, ReactNode } from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { theme } from '@/styles'

export interface ProviderThemeProps {
  children: ReactNode
}

export const ProviderTheme: FC<ProviderThemeProps> = async ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
