import { NextPage } from 'next'
import { redirect } from 'next/navigation'

export interface RootPageProps {
  params: { locale: string }
}

const RootPage: NextPage<RootPageProps> = ({ params: { locale } }) => {
  redirect(locale)
}

export default RootPage
