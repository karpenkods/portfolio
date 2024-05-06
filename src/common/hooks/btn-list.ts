import { useLocale, useTranslations } from 'next-intl'

import GradingIcon from '@mui/icons-material/Grading'
import GitHubIcon from '@mui/icons-material/GitHub'
import PersonIcon from '@mui/icons-material/Person'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import TaskIcon from '@mui/icons-material/Task'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import { IButtonList } from '../models'

export function useButtonsList(): IButtonList[] {
  const t = useTranslations()
  const locale = useLocale()

  return [
    {
      id: 1,
      label: locale === 'ru' ? 'Резюме' : 'Resume',
      link: locale === 'ru' ? '/resume_ru.pdf' : '/resume_en.pdf',
      icon: GradingIcon,
      isPath: true
    },
    {
      id: 2,
      label: t('button-projects'),
      link: '/projects',
      icon: TaskIcon,
      isPath: false
    },
    {
      id: 3,
      label: t('button-about'),
      link: '/about',
      icon: PersonIcon,
      isPath: false
    },
    {
      id: 4,
      label: t('button-contacts'),
      link: '/contacts',
      icon: ContactPageIcon,
      isPath: false
    },
    {
      id: 5,
      label: 'GitHub',
      link: 'https://github.com/karpenkods?tab=repositories',
      icon: GitHubIcon,
      isPath: true
    },
    {
      id: 6,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BA%D0%B0%D1%80%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE-907062260/',
      icon: LinkedInIcon,
      isPath: true
    }
  ]
}
