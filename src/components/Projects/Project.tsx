'use client'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'

import { Stack, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'

import { IProject } from '@/common'
import Image from 'next/image'
import { Link } from '@/navigation'

interface IProjectProps {
  project: IProject
}

export const Project: FC<IProjectProps> = ({ project }) => {
  const t = useTranslations('projects')
  const MotionStack = motion(Stack)

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <MotionStack
      variants={item}
      gap="8px"
      width="800px"
      padding="8px 16px"
      border="2px solid rgba(192, 192, 192, 0.56)"
      borderRadius="8px"
      sx={{ backdropFilter: 'blur(8px)' }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap="16px">
          {project.code ? (
            <GitHubIcon style={{ fill: 'silver', width: 24, height: 24 }} />
          ) : project.icon ? (
            <Image alt="" src={project.icon} width={24} height={24} />
          ) : null}
          <Typography variant="h2">{project.title}</Typography>
        </Stack>
        {!project.code ? (
          <Typography color="green" fontSize={14}>
            {t('com')}
          </Typography>
        ) : (
          <Typography color="green" fontSize={14}>
            {t('education')}
          </Typography>
        )}
        <Stack direction="row" gap="16px" alignItems="center">
          {project.link === 'not-link' ? (
            <Typography color="green"> {t('official')}</Typography>
          ) : project.link ? (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Typography
                sx={{
                  color: 'goldenrod',
                  cursor: 'pointer',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              >
                {t('goto')}
              </Typography>
            </Link>
          ) : null}
          {project.code && (
            <Link
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Typography
                fontSize={15}
                sx={{
                  color: 'gold',
                  cursor: 'pointer',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              >
                {t('code')}
              </Typography>
            </Link>
          )}
        </Stack>
      </Stack>
      <Typography fontSize={14} color="silver">
        {project.description}
      </Typography>
    </MotionStack>
  )
}
