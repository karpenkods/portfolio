import { useTranslations } from 'next-intl'

import { IProject } from '../models'
import Plandi from '../../../public/assets/plandi.png'
import EpicDay from '../../../public/assets/epicday.svg'
import Waqf from '../../../public/assets/waqf.svg'
import Atom from '../../../public/assets/atomshop.svg'
import Simonitor from '../../../public/assets/simonitore.svg'
import Simotone from '../../../public/assets/simotone.svg'
import PayZakat from '../../../public/assets/payzakat.svg'

export function useListProjects(): IProject[] {
  const t = useTranslations('projects')

  return [
    {
      id: 1,
      title: 'PlanDi',
      description: t('plandi'),
      icon: Plandi,
      link: 'https://plandi.io'
    },
    {
      id: 2,
      title: 'EpicDay',
      description: t('epicday'),
      icon: EpicDay,
      link: 'https://way2day.ftm.agency'
    },

    {
      id: 3,
      title: 'Simonitor',
      description: t('simonitor'),
      icon: Simonitor,
      link: 'https://simonitor.com/',
      bigImage: true
    },
    {
      id: 4,
      title: 'Simotone',
      description: t('simotone'),
      icon: Simotone,
      link: 'https://simotone.com/',
      bigImage: true
    },
    {
      id: 5,
      title: 'AtomShop',
      description: t('atomshop'),
      icon: Atom,
      link: 'https://atomshop.mindforce.dev/',
      bigImage: true
    },
    {
      id: 6,
      title: 'Payzakat',
      description: t('payzakat'),
      icon: PayZakat,
      link: 'https://payzakat.global/'
    },
    {
      id: 7,
      title: 'WAQF',
      description: t('waqf'),
      icon: Waqf,
      link: 'https://digiwaqf.pro'
    },
    {
      id: 8,
      title: 'Find matches',
      description: t('findmatches'),
      icon: '',
      link: 'https://karpenkods.github.io/game-find-matches/',
      code: 'https://github.com/karpenkods/game-find-matches'
    },
    {
      id: 9,
      title: 'Pomodoro',
      description: t('pomodoro'),
      icon: '',
      link: 'https://karpenkods.github.io/pomodoro_box',
      code: 'https://github.com/karpenkods/pomodoro_box'
    },
    {
      id: 10,
      title: 'Queries',
      description: t('queries'),
      icon: '',
      link: 'https://queries-18e77.web.app',
      code: 'https://github.com/karpenkods/RTK_Query_and_Registration'
    },
    {
      id: 11,
      title: 'Telegram GPT-chatbot',
      description: t('telegram'),
      icon: '',
      link: '',
      code: 'https://github.com/karpenkods/Telegram_GPT_chat_bot'
    },
    {
      id: 12,
      title: 'Blanchard',
      description: t('balnchard'),
      icon: '',
      link: 'https://karpenkods.github.io/blanchard',
      code: 'https://github.com/karpenkods/blanchard'
    }
  ]
}
