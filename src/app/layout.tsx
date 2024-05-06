import { FC, ReactNode } from 'react'

import '@/styles/global.scss'

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return children
}

export default RootLayout
